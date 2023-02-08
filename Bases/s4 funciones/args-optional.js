"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "sin apellido"}`;
    };
    const nombre = fullName("juan", "tony");
    console.log(nombre);
})();
//# sourceMappingURL=args-optional.js.map