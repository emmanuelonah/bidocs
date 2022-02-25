function* yielder<ArrayType>(array: ArrayType[]) {
  let index = 0;
  const size = array.length - 1;

  while (index <= size) {
    const value = array[index];
    index++;

    yield value;
  }
}

export { yielder };
