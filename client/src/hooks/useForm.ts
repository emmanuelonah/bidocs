import React from 'react';

function useForm() {
  const getFormData = React.useCallback((formRef: React.MutableRefObject<HTMLFormElement>) => {
    let formData = new FormData(formRef.current);

    return formData;
  }, []);

  return getFormData;
}

export { useForm };

/* import React from 'react';

function useForm() {
  const getFormData = React.useCallback((id: string) => {
    const formElement = document.getElementById(id) as HTMLFormElement;

    let formData = new FormData(formElement);

    return formData;
  }, []);

  return getFormData;
}

export { useForm }; */
