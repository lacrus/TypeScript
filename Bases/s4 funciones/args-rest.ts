(() => {
  const nombreCompleto = (nombre: string, ...restArgs: string[]) => {
    return `${nombre} ${restArgs.join(" ")}`;
  };

  console.log(nombreCompleto("juan", "pedro", "pablo", "hernan"));
})();
