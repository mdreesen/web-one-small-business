(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 890:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "MobileNavigation_navigation__rpaxB"
};


/***/ }),

/***/ 267:
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
;// CONCATENATED MODULE: ./utils/navigationData.json
const navigationData_namespaceObject = JSON.parse('{"navigation":[{"title":"HOME"},{"title":"ABOUT US"},{"title":"OUR WORK"},{"title":"CONTACT US"}]}');
;// CONCATENATED MODULE: ./components/Navigation/index.js


// Import Styling

// Import Navigation Data

function Navigation() {
    const [navbar, setNavbar] = useState(false);
    const background = ()=>{
        return window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    };
    useEffect(()=>{
        return window.addEventListener("scroll", background);
    }, []);
    const navigationEl = navData === null || navData === void 0 ? void 0 : navData.navigation.map((item, index)=>{
        /*#__PURE__*/ return _jsx("li", {
            children: /*#__PURE__*/ _jsx("a", {
                href: "#",
                children: item === null || item === void 0 ? void 0 : item.title
            })
        }, `card-${index}`);
    });
    return /*#__PURE__*/ _jsx("nav", {
        className: navbar ? styles["background-active"] : styles["background-stable"],
        children: /*#__PURE__*/ _jsx("ul", {
            className: styles["navigation"],
            children: navigationEl
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Offcanvas"
const Offcanvas_namespaceObject = require("react-bootstrap/Offcanvas");
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_namespaceObject);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(931);
// EXTERNAL MODULE: ./styles/MobileNavigation.module.css
var MobileNavigation_module = __webpack_require__(890);
var MobileNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MobileNavigation_module);
;// CONCATENATED MODULE: ./components/MobileNavigation/index.js



// import Button from 'react-bootstrap/Button';

// import Form from 'react-bootstrap/Form';


// import NavDropdown from 'react-bootstrap/NavDropdown';



// Import Navigation Data

function MobileNavigation() {
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    const background = ()=>{
        return window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    };
    (0,external_react_.useEffect)(()=>{
        return window.addEventListener("scroll", background);
    }, []);
    const navigationEl = navigationData_namespaceObject === null || navigationData_namespaceObject === void 0 ? void 0 : navigationData_namespaceObject.navigation.map((item, index)=>{
        /*#__PURE__*/ return jsx_runtime_.jsx((Nav_default()).Link, {
            href: "#action1",
            children: item === null || item === void 0 ? void 0 : item.title
        }, `link-${index}`);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: [
            "lg"
        ].map((expand)=>/*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
                bg: "light",
                expand: expand,
                className: navbar ? (MobileNavigation_module_default())["background-active mb-3"] : (MobileNavigation_module_default())["background-stable mb-3"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    fluid: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                            "aria-controls": `offcanvasNavbar-expand-${expand}`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                            id: `offcanvasNavbar-expand-${expand}`,
                            "aria-labelledby": `offcanvasNavbarLabel-expand-${expand}`,
                            placement: "end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                    closeButton: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Title, {
                                        id: `offcanvasNavbarLabel-expand-${expand}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (MobileNavigation_module_default()).secondaryImage,
                                            src: "/images/logo_inhanced_noBackground.webp",
                                            alt: "Mission Mountains handy work of bedroom",
                                            position: "relative",
                                            width: 222,
                                            height: 108
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                                        className: "justify-content-end flex-grow-1 pe-3",
                                        children: navigationEl
                                    })
                                })
                            ]
                        })
                    ]
                })
            }, expand))
    });
}

;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {}),
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

/***/ 931:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(267)));
module.exports = __webpack_exports__;

})();