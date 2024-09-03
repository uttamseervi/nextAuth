"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"nothing\");\n    const logout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/users/logout\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logout successful\");\n            router.push(\"/login\");\n        } catch (error) {\n            console.log(error.message);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);\n        }\n    };\n    const getUserDetails = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/users/me\");\n        console.log(\"The data id s\", res.data);\n        setData(res.data.data._id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Profile page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"p-1 rounded bg-green-500\",\n                children: data === \"nothing\" ? \"Nothing\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/profile/\".concat(data),\n                    children: data\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 82\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logout,\n                className: \"bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getUserDetails,\n                className: \"bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                children: \"GetUser Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n} /*\r\nNOTES:\r\n  how to handle dynamic routes in nextJS like here we got user details dynamic routes are the routes where the data changes frequently\r\n  lets say my url is like this http://localhost:3000/profile/66cb1f24650c5eaf3241098d\r\n  i don't know whatever is coming after my profile so to handle that we create a folder with square brackets it can be named anything but the file inside it must be page.tsx\r\n*/ \n_s(ProfilePage, \"euEk539JupyXDBKu4CUyc7N+VNo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ0c7QUFDVztBQUNBO0FBQ0k7QUFHN0IsU0FBU007O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sU0FBUztRQUNiLElBQUk7WUFDRixNQUFNViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDO1lBQ2hCUCxrREFBS0EsQ0FBQ1EsT0FBTyxDQUFDO1lBQ2RMLE9BQU9NLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBWTtZQUNuQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxPQUFPO1lBQ3pCYixrREFBS0EsQ0FBQ1UsS0FBSyxDQUFDQSxNQUFNRyxPQUFPO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckIsTUFBTUMsTUFBTSxNQUFNbkIsNkNBQUtBLENBQUNvQixJQUFJLENBQUM7UUFDN0JMLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJHLElBQUlYLElBQUk7UUFDckNDLFFBQVFVLElBQUlYLElBQUksQ0FBQ0EsSUFBSSxDQUFDYSxHQUFHO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUFHSixXQUFVOzBCQUE0QmYsU0FBUyxZQUFZLDBCQUFZLDhEQUFDUCxpREFBSUE7b0JBQUMyQixNQUFNLFlBQWlCLE9BQUxwQjs4QkFBU0E7Ozs7Ozs7Ozs7OzBCQUU1Ryw4REFBQ2lCOzs7OzswQkFDRCw4REFBQ0k7Z0JBQ0NDLFNBQVNwQjtnQkFDVGEsV0FBVTswQkFDWDs7Ozs7OzBCQUVELDhEQUFDTTtnQkFDQ0MsU0FBU1o7Z0JBQ1RLLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQLEVBRUE7Ozs7O0FBS0E7R0FoRHdCakI7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIm5vdGhpbmdcIilcclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvbG9nb3V0JylcclxuICAgICAgdG9hc3Quc3VjY2VzcygnTG9nb3V0IHN1Y2Nlc3NmdWwnKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRVc2VyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvbWUnKVxyXG4gICAgY29uc29sZS5sb2coXCJUaGUgZGF0YSBpZCBzXCIsIHJlcy5kYXRhKTtcclxuICAgIHNldERhdGEocmVzLmRhdGEuZGF0YS5faWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMlwiPlxyXG4gICAgICA8aDE+UHJvZmlsZTwvaDE+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8cD5Qcm9maWxlIHBhZ2U8L3A+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwLTEgcm91bmRlZCBiZy1ncmVlbi01MDBcIj57ZGF0YSA9PT0gJ25vdGhpbmcnID8gXCJOb3RoaW5nXCIgOiA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHtkYXRhfWB9PntkYXRhfVxyXG4gICAgICA8L0xpbms+fTwvaDI+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIG10LTQgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICA+TG9nb3V0PC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17Z2V0VXNlckRldGFpbHN9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tODAwIG10LTQgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICA+R2V0VXNlciBEZXRhaWxzPC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLypcclxuTk9URVM6XHJcbiAgaG93IHRvIGhhbmRsZSBkeW5hbWljIHJvdXRlcyBpbiBuZXh0SlMgbGlrZSBoZXJlIHdlIGdvdCB1c2VyIGRldGFpbHMgZHluYW1pYyByb3V0ZXMgYXJlIHRoZSByb3V0ZXMgd2hlcmUgdGhlIGRhdGEgY2hhbmdlcyBmcmVxdWVudGx5XHJcbiAgbGV0cyBzYXkgbXkgdXJsIGlzIGxpa2UgdGhpcyBodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZmlsZS82NmNiMWYyNDY1MGM1ZWFmMzI0MTA5OGRcclxuICBpIGRvbid0IGtub3cgd2hhdGV2ZXIgaXMgY29taW5nIGFmdGVyIG15IHByb2ZpbGUgc28gdG8gaGFuZGxlIHRoYXQgd2UgY3JlYXRlIGEgZm9sZGVyIHdpdGggc3F1YXJlIGJyYWNrZXRzIGl0IGNhbiBiZSBuYW1lZCBhbnl0aGluZyBidXQgdGhlIGZpbGUgaW5zaWRlIGl0IG11c3QgYmUgcGFnZS50c3hcclxuKi8iXSwibmFtZXMiOlsiYXhpb3MiLCJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwidXNlUm91dGVyIiwiUHJvZmlsZVBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsImxvZ291dCIsImdldCIsInN1Y2Nlc3MiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldFVzZXJEZXRhaWxzIiwicmVzIiwicG9zdCIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHIiLCJwIiwiaDIiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});