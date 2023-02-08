"use strict";
(() => {
    const nombreCompleto = (nombre, ...restArgs) => {
        return `${nombre} ${restArgs.join(" ")}`;
    };
    console.log(nombreCompleto("juan", "pedro", "pablo", "hernan"));
})();
//# sourceMappingURL=args-rest.js.map