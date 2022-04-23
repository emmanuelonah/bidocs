const _localstorage = {
  isKeyExist(key: string) {
    return localStorage.getItem(key) !== null;
  },
  getItem<ReturnType>(key: string): ReturnType {
    if (this.isKeyExist(key)) {
      return JSON.parse(localStorage.getItem(key)!);
    }

    return undefined as unknown as ReturnType;
  },
  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: string) {
    localStorage.removeItem(key);
  },
  clearItems() {
    localStorage.clear();
  },
};

function setCookie<T>(arg: { name: string; value: T; expDays: number; path?: string }) {
  const date = new Date();
  date.setTime(date.getTime() + arg.expDays * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString()}`;
  const value = typeof arg.value === 'object' ? JSON.stringify(arg.value) : arg.value;

  document.cookie = `${arg.name}=${value};${expires};path=${arg.path ?? '/'}`;
}

function getCookie<T>(name: string): T {
  let _name = `${name}=`;
  let cookieSegments = document.cookie.split(';');

  for (let i = 0, size = cookieSegments.length; i < size; i++) {
    let currentSegment = cookieSegments[i];

    while (currentSegment.charAt(0) == ' ') {
      currentSegment = currentSegment.substring(1);
    }

    if (currentSegment.indexOf(_name) == 0) {
      const value = currentSegment.substring(name.length, currentSegment.length).replace('=', '');

      return JSON.parse(value);
    }
  }

  return null as unknown as T;
}

function checkCookie(key: string) {
  let user = getCookie(key);

  if (user != '') {
    return true;
  }
  return false;
}

function deleteCookie(key: string, path?: string) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path ?? '/'};`;
}

export const _cookies = {
  setCookie,
  getCookie,
  checkCookie,
  deleteCookie,
};

export { _localstorage };
