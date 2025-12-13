export const debounceFunction = (callback, delay = 1000) => {
  let timeId;

  console.log(callback);
  return function (...args) {
    const context = this;
    console.log(context);
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};
