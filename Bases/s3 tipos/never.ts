(() => {
  const error = (message: string): never | string => {
    if (false) {
      throw new Error(message);
    } else {
      return message;
    }
  };

  error("que peligro");
})();
