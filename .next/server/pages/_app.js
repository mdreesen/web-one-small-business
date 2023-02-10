(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 885:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "Navigation_navigation__VLdcJ",
	"background-stable": "Navigation_background-stable__MzAim",
	"background-active": "Navigation_background-active__7XEUX"
};


/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Navigation.module.css
var Navigation_module = __webpack_require__(885);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./utils/navigationData.json
const navigationData_namespaceObject = JSON.parse('{"navigation":[{"title":"HOME"},{"title":"ABOUT US"},{"title":"OUR WORK"},{"title":"CONTACT US"}]}');
;// CONCATENATED MODULE: ./components/Navigation/index.js


// Import Styling

// Import Navigation Data

function Navigation() {
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    const background = ()=>{
        return window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    };
    (0,external_react_.useEffect)(()=>{
        return window.addEventListener("scroll", background);
    }, []);
    const navigationEl = navigationData_namespaceObject === null || navigationData_namespaceObject === void 0 ? void 0 : navigationData_namespaceObject.navigation.map((item, index)=>{
        /*#__PURE__*/ return jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                children: item === null || item === void 0 ? void 0 : item.title
            })
        }, `card-${index}`);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: navbar ? (Navigation_module_default())["background-active"] : (Navigation_module_default())["background-stable"],
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (Navigation_module_default()).navigation,
            children: navigationEl
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(269));
module.exports = __webpack_exports__;

})();