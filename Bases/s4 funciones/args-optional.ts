"use strict";
(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "sin apellido"}`;
  };
  const nombre = fullName("juan", "tony");
  console.log(nombre);
})();
