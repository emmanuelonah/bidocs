import { useEffect, useState, useCallback, useMemo, ReactElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { PATHS } from 'routes';
import { useLocalstorage } from 'hooks';
import Modal from 'components/shared/modal';

const ERRORS_KEY = 'errors';
const DEFAULT_MESSAGE = 'Oops! Something went wrong.';
interface CustomError extends ErrorEvent {
  isError: boolean;
  details: string[];
}

type ErrorHandlerProps = {
  children: ReactElement[];
};

type Actions = {
  onGoToLogin(): void;
  onGoToHomePage(): void;
  onGoToFallbackPage(): void;
};

function errorFactory(error: ErrorEvent, actions: Actions) {
  const { status: statusCode, response } = error.error;
  const details = [];
  let action = null;

  switch (statusCode) {
    case 400: {
      details.push(response.message || DEFAULT_MESSAGE);
      action = actions.onGoToFallbackPage;
      break;
    }
    case 401: {
      action = actions.onGoToLogin;
      break;
    }
    case 403: {
      action = actions.onGoToLogin;
      break;
    }
    case 404: {
      details.push('404 not found');
      action = actions.onGoToHomePage;
      break;
    }
    case 500: {
      details.push(DEFAULT_MESSAGE);
      action = actions.onGoToFallbackPage;
      break;
    }
    default: {
      action = actions.onGoToLogin;
    }
  }
  return {
    error: { ...error, isError: true, details } as CustomError,
    action,
  };
}

function ErrorHandler(props: ErrorHandlerProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [errors, setErrors] = useState<CustomError[] | null>(null);
  const { isKeyExist, getItem, setItem, removeItem } = useLocalstorage();

  /* ---------------------------------------------------------------*\
     Gets errors from localStorage and sets it to component state
 \* ---------------------------------------------------------------- */
  function onStorageErrors() {
    const storageErrors = getItem<CustomError[]>(ERRORS_KEY);

    if (storageErrors) setErrors(storageErrors);
  }

  useLocalstorage(onStorageErrors);

  const actions = useMemo(
    () => ({
      onGoToLogin() {
        // logout here
      },
      onGoToHomePage() {
        navigate(PATHS.home, { replace: true });
      },
      onGoToFallbackPage() {
        navigate(PATHS.fallback, {
          state: {
            from: { pathname },
            to: { pathname: PATHS.fallback },
            title: 'Error occurred',
            message: 'Sorry we just encountered an error, everything will be fine!',
          },
        });
      },
    }),
    [navigate, pathname]
  );

  /* ---------------------------------------------------------------*\
     Handling errors by setting them to localstorage
 \* ---------------------------------------------------------------- */
  const errorHandler = useCallback(
    (errorObj: ErrorEvent) => {
      const { error, action } = errorFactory(errorObj, actions);

      if (isKeyExist(ERRORS_KEY)) {
        const errors = getItem<CustomError[]>(ERRORS_KEY);

        errors.push(error);

        setItem(ERRORS_KEY, errors);
      } else {
        setItem(ERRORS_KEY, [error]);
      }
      action();
    },
    [actions, getItem, isKeyExist, setItem]
  );

  useEffect(() => {
    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, [errorHandler]);

  function onDeleteError(errorIndex: number) {
    return function errorEventer() {
      const newErrors = errors;
      newErrors?.splice(errorIndex, 1);

      if (newErrors?.length) {
        setErrors([...newErrors]);
        setItem(ERRORS_KEY, newErrors);
      } else {
        setErrors(null);
        removeItem(ERRORS_KEY);
      }
    };
  }

  return (
    <>
      {errors?.length &&
        errors?.map((error, index) => (
          <Modal.Root
            key={index.toString()}
            type="danger"
            position="top-center"
            shouldMount={error.isError}
            onClose={onDeleteError(index)}
          >
            <Modal.Header>Just an Error!</Modal.Header>
            <Modal.Body message={error.error.response?.message ?? error.message} details={error.details} />
          </Modal.Root>
        ))}
      {props.children}
    </>
  );
}

export { ErrorHandler };
