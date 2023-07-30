const debounce = (fn) => {
  console.log(2);
  console.log(fn);
  let timer = null;
  console.log(timer);
  return () => {
    clearTimeout(timer);
    console.log(fn);
    timer = setTimeout(fn, 1000);
  }
}

export default {
  debounce
}