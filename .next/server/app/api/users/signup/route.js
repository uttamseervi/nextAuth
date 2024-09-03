"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Uttam_seervi_OneDrive_Documents_Desktop_nextJs_authjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Uttam_seervi_OneDrive_Documents_Desktop_nextJs_authjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVdHRhbSUyMHNlZXJ2aSU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDRGVza3RvcCU1Q25leHRKcyU1Q2F1dGhqcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXR0YW0lMjBzZWVydmklNUNPbmVEcml2ZSU1Q0RvY3VtZW50cyU1Q0Rlc2t0b3AlNUNuZXh0SnMlNUNhdXRoanMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZEO0FBQzFJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGpzLz83YjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFV0dGFtIHNlZXJ2aVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcRGVza3RvcFxcXFxuZXh0SnNcXFxcYXV0aGpzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxVdHRhbSBzZWVydmlcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXERlc2t0b3BcXFxcbmV4dEpzXFxcXGF1dGhqc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxzaWdudXBcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _db_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConfig */ \"(rsc)/./src/db/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helper_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helper/mailer */ \"(rsc)/./src/helper/mailer.ts\");\n/*\r\nNOTES:\r\n    As we know next js works on edge computing not on servers\r\n    1.In next js if we want anything to be done using the database of i need the database interaction to do something then i have to connect the database every time when i require the DB\r\n\r\n    2.We can take the data from user in params or in the request body in node we can write req.body directly but we can't do the same in nextJS so first we take the reqBody from nextJs.Request and then we destructure the body items\r\n    \r\n*/ \n\n\n\n\n(0,_db_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        console.log(reqBody);\n        const { username, email, password } = reqBody;\n        const existingUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (existingUser) return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"User with this email is already registered\"\n        }, {\n            status: 400\n        });\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            password: hashedPassword,\n            email\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        // The user is registered and now we need to verify the user by sending the mail\n        await (0,_helper_mailer__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"User registered Successfully\",\n            savedUser,\n            success: true\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0EsR0FFeUM7QUFDSjtBQUNrQjtBQUN4QjtBQUNZO0FBRTNDQSx1REFBU0E7QUFFRixlQUFlSyxLQUFLQyxPQUFvQjtJQUMzQyxJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNRCxRQUFRRSxJQUFJO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osTUFBTSxFQUFFSSxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdOO1FBRXRDLE1BQU1PLGVBQWUsTUFBTWIseURBQUlBLENBQUNjLE9BQU8sQ0FBQztZQUFFSDtRQUFNO1FBQ2hELElBQUlFLGNBQWMsT0FBT1oscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFUSxPQUFPO1FBQTZDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBRWxILE1BQU1DLE9BQU8sTUFBTWYsdURBQWdCLENBQUM7UUFDcEMsTUFBTWlCLGlCQUFpQixNQUFNakIsb0RBQWEsQ0FBQ1UsVUFBVUs7UUFFckQsTUFBTUksVUFBVSxJQUFJckIseURBQUlBLENBQUM7WUFDckJVO1lBQ0FFLFVBQVVPO1lBQ1ZSO1FBQ0o7UUFDQSxNQUFNVyxZQUFZLE1BQU1ELFFBQVFFLElBQUk7UUFDcENmLFFBQVFDLEdBQUcsQ0FBQ2E7UUFDWixnRkFBZ0Y7UUFDaEYsTUFBTW5CLHlEQUFTQSxDQUFDO1lBQUVRO1lBQU9hLFdBQVc7WUFBVUMsUUFBUUgsVUFBVUksR0FBRztRQUFDO1FBQ3BFLE9BQU96QixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVvQixTQUFTO1lBQWdDTDtZQUFXTSxTQUFTO1FBQUs7SUFHakcsRUFBRSxPQUFPYixPQUFZO1FBQ2pCLE9BQU9kLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRVEsT0FBT0EsTUFBTVksT0FBTztRQUFDLEdBQUc7WUFBRVgsUUFBUTtRQUFJO0lBQ3JFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoanMvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHM/MTZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5OT1RFUzpcclxuICAgIEFzIHdlIGtub3cgbmV4dCBqcyB3b3JrcyBvbiBlZGdlIGNvbXB1dGluZyBub3Qgb24gc2VydmVyc1xyXG4gICAgMS5JbiBuZXh0IGpzIGlmIHdlIHdhbnQgYW55dGhpbmcgdG8gYmUgZG9uZSB1c2luZyB0aGUgZGF0YWJhc2Ugb2YgaSBuZWVkIHRoZSBkYXRhYmFzZSBpbnRlcmFjdGlvbiB0byBkbyBzb21ldGhpbmcgdGhlbiBpIGhhdmUgdG8gY29ubmVjdCB0aGUgZGF0YWJhc2UgZXZlcnkgdGltZSB3aGVuIGkgcmVxdWlyZSB0aGUgREJcclxuXHJcbiAgICAyLldlIGNhbiB0YWtlIHRoZSBkYXRhIGZyb20gdXNlciBpbiBwYXJhbXMgb3IgaW4gdGhlIHJlcXVlc3QgYm9keSBpbiBub2RlIHdlIGNhbiB3cml0ZSByZXEuYm9keSBkaXJlY3RseSBidXQgd2UgY2FuJ3QgZG8gdGhlIHNhbWUgaW4gbmV4dEpTIHNvIGZpcnN0IHdlIHRha2UgdGhlIHJlcUJvZHkgZnJvbSBuZXh0SnMuUmVxdWVzdCBhbmQgdGhlbiB3ZSBkZXN0cnVjdHVyZSB0aGUgYm9keSBpdGVtc1xyXG4gICAgXHJcbiovXHJcblxyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9kYi9kYkNvbmZpZ1wiXHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyTW9kZWxcIlxyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiXHJcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2hlbHBlci9tYWlsZXJcIlxyXG5cclxuY29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpXHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXFCb2R5XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nVXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciB3aXRoIHRoaXMgZW1haWwgaXMgYWxyZWFkeSByZWdpc3RlcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoMTApXHJcbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHBhc3N3b3JkLCBzYWx0KVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRVc2VyKTtcclxuICAgICAgICAvLyBUaGUgdXNlciBpcyByZWdpc3RlcmVkIGFuZCBub3cgd2UgbmVlZCB0byB2ZXJpZnkgdGhlIHVzZXIgYnkgc2VuZGluZyB0aGUgbWFpbFxyXG4gICAgICAgIGF3YWl0IHNlbmRFbWFpbCh7IGVtYWlsLCBlbWFpbFR5cGU6IFwiVkVSSUZZXCIsIHVzZXJJZDogc2F2ZWRVc2VyLl9pZCB9KVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVXNlciByZWdpc3RlcmVkIFN1Y2Nlc3NmdWxseVwiLCBzYXZlZFVzZXIsIHN1Y2Nlc3M6IHRydWUgfSlcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJVc2VyIiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJQT1NUIiwicmVxdWVzdCIsInJlcUJvZHkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImV4aXN0aW5nVXNlciIsImZpbmRPbmUiLCJlcnJvciIsInN0YXR1cyIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsInNhdmVkVXNlciIsInNhdmUiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJfaWQiLCJtZXNzYWdlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/dbConfig.ts":
/*!****************************!*\
  !*** ./src/db/dbConfig.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        /*\r\n        NOTES\r\n        since we are in typescript the below line was giving error bcz we haven't defined its types it can be string or it can be null so if we are very sure that it will be string only then we can use the shortcut '!' to ensure it  or else we could use the usual if else clause to verify it and assign the value to it\r\n        2. mongoose also provide us a connection which is used to check. Bcz after the connection if check the issues which we get after connecting the db like db crashed so we use this \r\n        the connection has got many events we can use them according to our requirements\r\n        */ mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB is connected\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.error(\"Error while connecting to MongoDB,Make sure DB is up and running: \", +err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong in connecting the database\");\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2dDO0FBR3pCLE1BQU1DLFlBQVk7SUFDckIsSUFBSTtRQUNBOzs7OztRQUtBLEdBQ0FELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7UUFDdEMsTUFBTUMsYUFBYU4sNERBQW1CO1FBQ3RDTSxXQUFXQyxFQUFFLENBQUMsYUFBYTtZQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FILFdBQVdDLEVBQUUsQ0FBQyxTQUFTLENBQUNHO1lBQ3BCRixRQUFRRyxLQUFLLENBQUMsc0VBQXNFLENBQUNEO1lBQ3JGUCxRQUFRUyxJQUFJO1FBQ2hCO0lBQ0osRUFBRSxPQUFPRCxPQUFPO1FBQ1pILFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNFO0lBQ2hCO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhqcy8uL3NyYy9kYi9kYkNvbmZpZy50cz9jYTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIE5PVEVTXHJcbiAgICAgICAgc2luY2Ugd2UgYXJlIGluIHR5cGVzY3JpcHQgdGhlIGJlbG93IGxpbmUgd2FzIGdpdmluZyBlcnJvciBiY3ogd2UgaGF2ZW4ndCBkZWZpbmVkIGl0cyB0eXBlcyBpdCBjYW4gYmUgc3RyaW5nIG9yIGl0IGNhbiBiZSBudWxsIHNvIGlmIHdlIGFyZSB2ZXJ5IHN1cmUgdGhhdCBpdCB3aWxsIGJlIHN0cmluZyBvbmx5IHRoZW4gd2UgY2FuIHVzZSB0aGUgc2hvcnRjdXQgJyEnIHRvIGVuc3VyZSBpdCAgb3IgZWxzZSB3ZSBjb3VsZCB1c2UgdGhlIHVzdWFsIGlmIGVsc2UgY2xhdXNlIHRvIHZlcmlmeSBpdCBhbmQgYXNzaWduIHRoZSB2YWx1ZSB0byBpdFxyXG4gICAgICAgIDIuIG1vbmdvb3NlIGFsc28gcHJvdmlkZSB1cyBhIGNvbm5lY3Rpb24gd2hpY2ggaXMgdXNlZCB0byBjaGVjay4gQmN6IGFmdGVyIHRoZSBjb25uZWN0aW9uIGlmIGNoZWNrIHRoZSBpc3N1ZXMgd2hpY2ggd2UgZ2V0IGFmdGVyIGNvbm5lY3RpbmcgdGhlIGRiIGxpa2UgZGIgY3Jhc2hlZCBzbyB3ZSB1c2UgdGhpcyBcclxuICAgICAgICB0aGUgY29ubmVjdGlvbiBoYXMgZ290IG1hbnkgZXZlbnRzIHdlIGNhbiB1c2UgdGhlbSBhY2NvcmRpbmcgdG8gb3VyIHJlcXVpcmVtZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uXHJcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGNvbm5lY3RpbmcgdG8gTW9uZ29EQixNYWtlIHN1cmUgREIgaXMgdXAgYW5kIHJ1bm5pbmc6IFwiLCArZXJyKVxyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIGluIGNvbm5lY3RpbmcgdGhlIGRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/db/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/helper/mailer.ts":
/*!******************************!*\
  !*** ./src/helper/mailer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n        if (emailType === \"VERIFY\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                $set: {\n                    verifyToken: hashedToken,\n                    verifyTokenExpiry: Date.now() + 3600000\n                }\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                $set: {\n                    forgotPasswordToken: hashedToken,\n                    forgotTokenExpiry: Date.now() + 3600000\n                }\n            });\n        }\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"ef7d6274c67e70\",\n                pass: \"e8a5c921998580\"\n            }\n        });\n        console.log(process.env.DOMAIN);\n        const mailOption = {\n            from: \"seerviu690@gmail.com\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your account\" : \"Reset your Password\",\n            html: `<p>Click <a href=\"${process.env.DOMAIN}/verifyemail?token=${hashedToken}\">here</a> to ${emailType === \"VERIFY\" ? \"verify your email\" : \"reset your password\"}\r\n            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}\r\n            </p>`\n        };\n        const mailResponse = await transporter.sendMail(mailOption);\n        return mailResponse;\n    // in the below line we are using any bcz we don't know the datatype of the error it is not a good practice to use any but now it's okay to use it x\n    } catch (error) {\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVyL21haWxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGO0FBQ0o7QUFDeEIsTUFBTUcsWUFBWSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQU87SUFDN0QsSUFBSTtRQUNBLE1BQU1DLGNBQWMsTUFBTUwsb0RBQWEsQ0FBQ0ksT0FBT0csUUFBUSxJQUFJO1FBQzNELElBQUlKLGNBQWMsVUFBVTtZQUN4QixNQUFNTCx5REFBSUEsQ0FBQ1UsaUJBQWlCLENBQUNKLFFBQVE7Z0JBQ2pDSyxNQUFNO29CQUFFQyxhQUFhTDtvQkFBYU0sbUJBQW1CQyxLQUFLQyxHQUFHLEtBQUs7Z0JBQVE7WUFDOUU7UUFFSixPQUFPLElBQUlWLGNBQWMsU0FBUztZQUM5QixNQUFNTCx5REFBSUEsQ0FBQ1UsaUJBQWlCLENBQUNKLFFBQVE7Z0JBQ2pDSyxNQUFNO29CQUFFSyxxQkFBcUJUO29CQUFhVSxtQkFBbUJILEtBQUtDLEdBQUcsS0FBSztnQkFBUTtZQUN0RjtRQUVKO1FBQ0EsTUFBTUcsY0FBY2pCLHVEQUEwQixDQUFDO1lBQzNDbUIsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07Z0JBQ0ZDLE1BQU07Z0JBQ05DLE1BQU07WUFDVjtRQUNKO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO1FBQzlCLE1BQU1DLGFBQWE7WUFDZkMsTUFBTTtZQUNOQyxJQUFJNUI7WUFDSjZCLFNBQVM1QixjQUFjLFdBQVcsd0JBQXdCO1lBQzFENkIsTUFBTSxDQUFDLGtCQUFrQixFQUFFUCxRQUFRQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRXRCLFlBQVksY0FBYyxFQUFFRixjQUFjLFdBQVcsc0JBQXNCLHNCQUFzQjttRUFDN0csRUFBRXNCLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixFQUFFdEIsWUFBWTtnQkFDekcsQ0FBQztRQUNUO1FBQ0EsTUFBTTRCLGVBQWUsTUFBTWpCLFlBQVlrQixRQUFRLENBQUNOO1FBQ2hELE9BQU9LO0lBQ1Asb0pBQW9KO0lBRXhKLEVBQUUsT0FBT0UsT0FBWTtRQUNqQixNQUFNLElBQUlDLE1BQU1ELE1BQU1FLE9BQU87SUFFakM7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGpzLy4vc3JjL2hlbHBlci9tYWlsZXIudHM/ZDgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlck1vZGVsXCJcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIlxyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCJcclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jICh7IGVtYWlsLCBlbWFpbFR5cGUsIHVzZXJJZCB9OiBhbnkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaGFzaGVkVG9rZW4gPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHVzZXJJZC50b1N0cmluZygpLCAxMClcclxuICAgICAgICBpZiAoZW1haWxUeXBlID09PSBcIlZFUklGWVwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLCB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7IHZlcmlmeVRva2VuOiBoYXNoZWRUb2tlbiwgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUubm93KCkgKyAzNjAwMDAwIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbWFpbFR5cGUgPT09IFwiUkVTRVRcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJJZCwge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBmb3Jnb3RQYXNzd29yZFRva2VuOiBoYXNoZWRUb2tlbiwgZm9yZ290VG9rZW5FeHBpcnk6IERhdGUubm93KCkgKyAzNjAwMDAwIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgICAgICBob3N0OiBcInNhbmRib3guc210cC5tYWlsdHJhcC5pb1wiLFxyXG4gICAgICAgICAgICBwb3J0OiAyNTI1LFxyXG4gICAgICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBcImVmN2Q2Mjc0YzY3ZTcwXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzOiBcImU4YTVjOTIxOTk4NTgwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkRPTUFJTilcclxuICAgICAgICBjb25zdCBtYWlsT3B0aW9uID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBcInNlZXJ2aXU2OTBAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgICAgICAgc3ViamVjdDogZW1haWxUeXBlID09PSBcIlZFUklGWVwiID8gXCJWZXJpZnkgeW91ciBhY2NvdW50XCIgOiBcIlJlc2V0IHlvdXIgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgaHRtbDogYDxwPkNsaWNrIDxhIGhyZWY9XCIke3Byb2Nlc3MuZW52LkRPTUFJTn0vdmVyaWZ5ZW1haWw/dG9rZW49JHtoYXNoZWRUb2tlbn1cIj5oZXJlPC9hPiB0byAke2VtYWlsVHlwZSA9PT0gXCJWRVJJRllcIiA/IFwidmVyaWZ5IHlvdXIgZW1haWxcIiA6IFwicmVzZXQgeW91ciBwYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvciBjb3B5IGFuZCBwYXN0ZSB0aGUgbGluayBiZWxvdyBpbiB5b3VyIGJyb3dzZXIuIDxicj4gJHtwcm9jZXNzLmVudi5ET01BSU59L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XHJcbiAgICAgICAgICAgIDwvcD5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1haWxSZXNwb25zZSA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb24pXHJcbiAgICAgICAgcmV0dXJuIG1haWxSZXNwb25zZVxyXG4gICAgICAgIC8vIGluIHRoZSBiZWxvdyBsaW5lIHdlIGFyZSB1c2luZyBhbnkgYmN6IHdlIGRvbid0IGtub3cgdGhlIGRhdGF0eXBlIG9mIHRoZSBlcnJvciBpdCBpcyBub3QgYSBnb29kIHByYWN0aWNlIHRvIHVzZSBhbnkgYnV0IG5vdyBpdCdzIG9rYXkgdG8gdXNlIGl0IHhcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXHJcblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlVzZXIiLCJub2RlbWFpbGVyIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJlbWFpbCIsImVtYWlsVHlwZSIsInVzZXJJZCIsImhhc2hlZFRva2VuIiwiaGFzaCIsInRvU3RyaW5nIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkc2V0IiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIkRhdGUiLCJub3ciLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290VG9rZW5FeHBpcnkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJET01BSU4iLCJtYWlsT3B0aW9uIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJtYWlsUmVzcG9uc2UiLCJzZW5kTWFpbCIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helper/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zlib */ \"zlib\");\n/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide the username\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide the password\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide the email\"\n        ],\n        unique: true\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\n/*In Next.js, you can still use uppercase model names like User when defining your Mongoose models. The key difference is that when working with Next.js, which often runs in serverless environments or at the edge, you need to ensure that the model is defined only once. This prevents issues related to hot reloading or multiple instances of the model being created.*/ // const User = mongoose.model('users', userSchema) this wont work in nextJs bcz nextJs runs on a serverless environment and it does not know that it was already connected to the database\n/*so here we need to take care of a situation that the model is already created or not if not then the model is created else if the model is already created then the reference of the model is given*/ /*\r\nTo avoid that problem we go to mongoose and ask the mongoose to give the reference of all the models from there we can take the models which we require.......\r\n*/ const User = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_1___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNsQjtBQUNLO0FBRzlCLE1BQU1LLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDMUJJLFVBQVU7UUFDTkgsTUFBTUk7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBOEI7UUFDL0NDLFFBQVE7SUFDWjtJQUNBQyxVQUFVO1FBQ05QLE1BQU1JO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQThCO0lBQ25EO0lBQ0FHLE9BQU87UUFDSFIsTUFBTUk7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMkI7UUFDNUNDLFFBQVE7SUFDWjtJQUNBRyxZQUFZO1FBQ1JULE1BQU1VO1FBQ05DLFNBQVM7SUFDYjtJQUNBQyxxQkFBcUJSO0lBQ3JCUyxtQkFBbUJDO0lBQ25CQyxhQUFhWDtJQUNiWSxtQkFBbUJGO0FBQ3ZCO0FBQ0EsNldBQTZXLEdBQzdXLDJMQUEyTDtBQUMzTCxxTUFBcU0sR0FFck07O0FBRUEsR0FDQSxNQUFNRyxPQUFPbkIsd0RBQWUsQ0FBQ3FCLEtBQUssSUFBSXJCLHFEQUFjLENBQUMsU0FBUUk7QUFDN0QsaUVBQWVlLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoanMvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcz9jNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmeSB9IGZyb20gXCJjcnlwdG9cIlxyXG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCJcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiXHJcbmltcG9ydCB7IGRlZmxhdGUgfSBmcm9tIFwiemxpYlwiXHJcblxyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIHRoZSB1c2VybmFtZVwiXSxcclxuICAgICAgICB1bmlxdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgdGhlIHBhc3N3b3JkXCJdLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSB0aGUgZW1haWxcIl0sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGlzVmVyaWZpZWQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46IFN0cmluZyxcclxuICAgIGZvcmdvdFRva2VuRXhwaXJ5OiBEYXRlLFxyXG4gICAgdmVyaWZ5VG9rZW46IFN0cmluZyxcclxuICAgIHZlcmlmeVRva2VuRXhwaXJ5OiBEYXRlLFxyXG59KVxyXG4vKkluIE5leHQuanMsIHlvdSBjYW4gc3RpbGwgdXNlIHVwcGVyY2FzZSBtb2RlbCBuYW1lcyBsaWtlIFVzZXIgd2hlbiBkZWZpbmluZyB5b3VyIE1vbmdvb3NlIG1vZGVscy4gVGhlIGtleSBkaWZmZXJlbmNlIGlzIHRoYXQgd2hlbiB3b3JraW5nIHdpdGggTmV4dC5qcywgd2hpY2ggb2Z0ZW4gcnVucyBpbiBzZXJ2ZXJsZXNzIGVudmlyb25tZW50cyBvciBhdCB0aGUgZWRnZSwgeW91IG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIG1vZGVsIGlzIGRlZmluZWQgb25seSBvbmNlLiBUaGlzIHByZXZlbnRzIGlzc3VlcyByZWxhdGVkIHRvIGhvdCByZWxvYWRpbmcgb3IgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSBtb2RlbCBiZWluZyBjcmVhdGVkLiovXHJcbi8vIGNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbCgndXNlcnMnLCB1c2VyU2NoZW1hKSB0aGlzIHdvbnQgd29yayBpbiBuZXh0SnMgYmN6IG5leHRKcyBydW5zIG9uIGEgc2VydmVybGVzcyBlbnZpcm9ubWVudCBhbmQgaXQgZG9lcyBub3Qga25vdyB0aGF0IGl0IHdhcyBhbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2VcclxuLypzbyBoZXJlIHdlIG5lZWQgdG8gdGFrZSBjYXJlIG9mIGEgc2l0dWF0aW9uIHRoYXQgdGhlIG1vZGVsIGlzIGFscmVhZHkgY3JlYXRlZCBvciBub3QgaWYgbm90IHRoZW4gdGhlIG1vZGVsIGlzIGNyZWF0ZWQgZWxzZSBpZiB0aGUgbW9kZWwgaXMgYWxyZWFkeSBjcmVhdGVkIHRoZW4gdGhlIHJlZmVyZW5jZSBvZiB0aGUgbW9kZWwgaXMgZ2l2ZW4qL1xyXG5cclxuLypcclxuVG8gYXZvaWQgdGhhdCBwcm9ibGVtIHdlIGdvIHRvIG1vbmdvb3NlIGFuZCBhc2sgdGhlIG1vbmdvb3NlIHRvIGdpdmUgdGhlIHJlZmVyZW5jZSBvZiBhbGwgdGhlIG1vZGVscyBmcm9tIHRoZXJlIHdlIGNhbiB0YWtlIHRoZSBtb2RlbHMgd2hpY2ggd2UgcmVxdWlyZS4uLi4uLi5cclxuKi9cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy51c2VycyB8fCBtb25nb29zZS5tb2RlbCgndXNlcnMnLHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxyXG4iXSwibmFtZXMiOlsidmVyaWZ5IiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ0eXBlIiwiZGVmbGF0ZSIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJlbWFpbCIsImlzVmVyaWZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImZvcmdvdFBhc3N3b3JkVG9rZW4iLCJmb3Jnb3RUb2tlbkV4cGlyeSIsIkRhdGUiLCJ2ZXJpZnlUb2tlbiIsInZlcmlmeVRva2VuRXhwaXJ5IiwiVXNlciIsIm1vZGVscyIsInVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();