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
exports.id = "app/api/users/login/route";
exports.ids = ["app/api/users/login/route"];
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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Uttam_seervi_OneDrive_Documents_Desktop_nextJs_authjs_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/login/route.ts */ \"(rsc)/./src/app/api/users/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/login/route\",\n        pathname: \"/api/users/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Uttam seervi\\\\OneDrive\\\\Documents\\\\Desktop\\\\nextJs\\\\authjs\\\\src\\\\app\\\\api\\\\users\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Uttam_seervi_OneDrive_Documents_Desktop_nextJs_authjs_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVdHRhbSUyMHNlZXJ2aSU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDRGVza3RvcCU1Q25leHRKcyU1Q2F1dGhqcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXR0YW0lMjBzZWVydmklNUNPbmVEcml2ZSU1Q0RvY3VtZW50cyU1Q0Rlc2t0b3AlNUNuZXh0SnMlNUNhdXRoanMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzREO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGpzLz9mNjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFV0dGFtIHNlZXJ2aVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcRGVza3RvcFxcXFxuZXh0SnNcXFxcYXV0aGpzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFV0dGFtIHNlZXJ2aVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcRGVza3RvcFxcXFxuZXh0SnNcXFxcYXV0aGpzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/login/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/users/login/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _db_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConfig */ \"(rsc)/./src/db/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_db_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { email, password } = reqBody;\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"User with this email not found\"\n        });\n        console.log(\"user exists\", user);\n        const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n        if (!validPassword) return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Invalid credentials\"\n        }, {\n            status: 400\n        });\n        const tokenData = {\n            id: user._id,\n            username: user.username,\n            email: user.email\n        };\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign(tokenData, process.env.TOKEN_SECRET || \"qwertyuiop\", {\n            expiresIn: \"1d\"\n        });\n        const response = next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"User logged in successfully \",\n            success: true\n        });\n        response.cookies.set(\"token\", token, {\n            httpOnly: true,\n            secure: true\n        });\n        return response;\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QztBQUNKO0FBQ2tCO0FBQ3hCO0FBQ0Q7QUFHOUJBLHVEQUFTQTtBQUVGLGVBQWVLLEtBQUtDLE9BQW9CO0lBQzNDLElBQUk7UUFDQSxNQUFNQyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7UUFDbEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUM1QixNQUFNSSxPQUFPLE1BQU1WLHlEQUFJQSxDQUFDVyxPQUFPLENBQUM7WUFBRUg7UUFBTTtRQUN4QyxJQUFJLENBQUNFLE1BQU0sT0FBT1QscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFSyxPQUFPO1FBQWlDO1FBQzlFQyxRQUFRQyxHQUFHLENBQUMsZUFBZUo7UUFDM0IsTUFBTUssZ0JBQWdCLE1BQU1iLHVEQUFnQixDQUFDTyxVQUFVQyxLQUFLRCxRQUFRO1FBQ3BFLElBQUksQ0FBQ00sZUFBZSxPQUFPZCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVLLE9BQU87UUFBc0IsR0FBRztZQUFFSyxRQUFRO1FBQUk7UUFFN0YsTUFBTUMsWUFBWTtZQUNkQyxJQUFJVCxLQUFLVSxHQUFHO1lBQ1pDLFVBQVVYLEtBQUtXLFFBQVE7WUFDdkJiLE9BQU9FLEtBQUtGLEtBQUs7UUFDckI7UUFDQSxNQUFNYyxRQUFRbkIsd0RBQVEsQ0FDbEJlLFdBQVdNLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJLGNBQ3ZDO1lBQ0lDLFdBQVc7UUFDZjtRQUVKLE1BQU1DLFdBQVczQixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVzQixTQUFTO1lBQWdDQyxTQUFTO1FBQUs7UUFDNUZGLFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVNWLE9BQU87WUFDakNXLFVBQVU7WUFDVkMsUUFBUTtRQUNaO1FBQ0EsT0FBT047SUFHWCxFQUFFLE9BQU9oQixPQUFZO1FBQ2pCLE9BQU9YLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUssT0FBT0EsTUFBTWlCLE9BQU87UUFBQyxHQUFHO1lBQUVaLFFBQVE7UUFBSTtJQUNyRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGpzLy4vc3JjL2FwcC9hcGkvdXNlcnMvbG9naW4vcm91dGUudHM/NjZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvZGIvZGJDb25maWdcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlck1vZGVsXCJcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIlxyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5cclxuXHJcbmNvbm5lY3REQigpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcUJvZHlcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSlcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBleGlzdHNcIiwgdXNlcilcclxuICAgICAgICBjb25zdCB2YWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKCF2YWxpZFBhc3N3b3JkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW5EYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogdXNlci5faWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxyXG4gICAgICAgICAgICB0b2tlbkRhdGEsIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCB8fCBcInF3ZXJ0eXVpb3BcIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXhwaXJlc0luOiAnMWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSBcIiwgc3VjY2VzczogdHJ1ZSB9KVxyXG4gICAgICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KFwidG9rZW5cIiwgdG9rZW4sIHtcclxuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIHNlY3VyZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsIk5leHRSZXNwb25zZSIsImJjcnlwdGpzIiwiand0IiwiUE9TVCIsInJlcXVlc3QiLCJyZXFCb2R5IiwianNvbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwiZmluZE9uZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwic3RhdHVzIiwidG9rZW5EYXRhIiwiaWQiLCJfaWQiLCJ1c2VybmFtZSIsInRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9TRUNSRVQiLCJleHBpcmVzSW4iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/dbConfig.ts":
/*!****************************!*\
  !*** ./src/db/dbConfig.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        /*\r\n        NOTES\r\n        since we are in typescript the below line was giving error bcz we haven't defined its types it can be string or it can be null so if we are very sure that it will be string only then we can use the shortcut '!' to ensure it  or else we could use the usual if else clause to verify it and assign the value to it\r\n        2. mongoose also provide us a connection which is used to check. Bcz after the connection if check the issues which we get after connecting the db like db crashed so we use this \r\n        the connection has got many events we can use them according to our requirements\r\n        */ mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB is connected\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.error(\"Error while connecting to MongoDB,Make sure DB is up and running: \", +err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong in connecting the database\");\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2dDO0FBR3pCLE1BQU1DLFlBQVk7SUFDckIsSUFBSTtRQUNBOzs7OztRQUtBLEdBQ0FELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7UUFDdEMsTUFBTUMsYUFBYU4sNERBQW1CO1FBQ3RDTSxXQUFXQyxFQUFFLENBQUMsYUFBYTtZQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FILFdBQVdDLEVBQUUsQ0FBQyxTQUFTLENBQUNHO1lBQ3BCRixRQUFRRyxLQUFLLENBQUMsc0VBQXNFLENBQUNEO1lBQ3JGUCxRQUFRUyxJQUFJO1FBQ2hCO0lBQ0osRUFBRSxPQUFPRCxPQUFPO1FBQ1pILFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNFO0lBQ2hCO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhqcy8uL3NyYy9kYi9kYkNvbmZpZy50cz9jYTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIE5PVEVTXHJcbiAgICAgICAgc2luY2Ugd2UgYXJlIGluIHR5cGVzY3JpcHQgdGhlIGJlbG93IGxpbmUgd2FzIGdpdmluZyBlcnJvciBiY3ogd2UgaGF2ZW4ndCBkZWZpbmVkIGl0cyB0eXBlcyBpdCBjYW4gYmUgc3RyaW5nIG9yIGl0IGNhbiBiZSBudWxsIHNvIGlmIHdlIGFyZSB2ZXJ5IHN1cmUgdGhhdCBpdCB3aWxsIGJlIHN0cmluZyBvbmx5IHRoZW4gd2UgY2FuIHVzZSB0aGUgc2hvcnRjdXQgJyEnIHRvIGVuc3VyZSBpdCAgb3IgZWxzZSB3ZSBjb3VsZCB1c2UgdGhlIHVzdWFsIGlmIGVsc2UgY2xhdXNlIHRvIHZlcmlmeSBpdCBhbmQgYXNzaWduIHRoZSB2YWx1ZSB0byBpdFxyXG4gICAgICAgIDIuIG1vbmdvb3NlIGFsc28gcHJvdmlkZSB1cyBhIGNvbm5lY3Rpb24gd2hpY2ggaXMgdXNlZCB0byBjaGVjay4gQmN6IGFmdGVyIHRoZSBjb25uZWN0aW9uIGlmIGNoZWNrIHRoZSBpc3N1ZXMgd2hpY2ggd2UgZ2V0IGFmdGVyIGNvbm5lY3RpbmcgdGhlIGRiIGxpa2UgZGIgY3Jhc2hlZCBzbyB3ZSB1c2UgdGhpcyBcclxuICAgICAgICB0aGUgY29ubmVjdGlvbiBoYXMgZ290IG1hbnkgZXZlbnRzIHdlIGNhbiB1c2UgdGhlbSBhY2NvcmRpbmcgdG8gb3VyIHJlcXVpcmVtZW50c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uXHJcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGNvbm5lY3RpbmcgdG8gTW9uZ29EQixNYWtlIHN1cmUgREIgaXMgdXAgYW5kIHJ1bm5pbmc6IFwiLCArZXJyKVxyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIGluIGNvbm5lY3RpbmcgdGhlIGRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/db/dbConfig.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUttam%20seervi%5COneDrive%5CDocuments%5CDesktop%5CnextJs%5Cauthjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();