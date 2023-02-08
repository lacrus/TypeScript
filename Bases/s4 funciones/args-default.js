"use strict";
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || "----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "----"}`;
        }
    };
    const nombre = fullName("juan", "asd", false);
    console.log(nombre);
})();
//# sourceMappingURL=args-default.js.map