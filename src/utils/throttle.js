export function throttle(callback, wait, immediate = false) {
  let timeout = null;
  let initialCall = true;

  return function() {
    const callNow = immediate && initialCall;
    const next = () => {
      callback.apply(this, arguments);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
}

export function debounce(callback, delay) {
  let timeout;

  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback.apply(this, arguments);
      timeout = null;
    }, delay);
  };
}
