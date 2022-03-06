function useArraySize() {
  return function getIndexBaseArraySize(size: number) {
    const indexifiedSize = size - 1;

    return indexifiedSize;
  };
}

export { useArraySize };
