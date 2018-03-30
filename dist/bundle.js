/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/client.game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/client.game.ts":
/*!*********************************!*\
  !*** ./src/core/client.game.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer_renderer_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/renderer.game */ "./src/renderer/renderer.game.ts");
/* harmony import */ var _options_options_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/options.game */ "./src/options/options.game.ts");


var gameOptions = new _options_options_game__WEBPACK_IMPORTED_MODULE_1__["options"](false);
gameOptions.core.renderer = new _renderer_renderer_game__WEBPACK_IMPORTED_MODULE_0__["renderer"]('none', window.innerWidth, window.innerWidth, '0x009900');
console.log(gameOptions);
document.body.appendChild(gameOptions.core.renderer.view);
let circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0, 0, 80);
circle.x = 320;
circle.y = 180;
gameOptions.core.renderer.stage.addChild(circle);


/***/ }),

/***/ "./src/options/options.game.ts":
/*!*************************************!*\
  !*** ./src/options/options.game.ts ***!
  \*************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
//This module declares the options and variables used within the game. There should be one instance of this object that is accessible for
//any module that requires it. 
class options {
    constructor(serverMode) {
        this.session = { server: serverMode };
        this.core = {};
    }
}


/***/ }),

/***/ "./src/renderer/renderer.game.ts":
/*!***************************************!*\
  !*** ./src/renderer/renderer.game.ts ***!
  \***************************************/
/*! exports provided: renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
// This module creates the PIXIJS rendering option that allows us to draw things to WebGL/Canvas
// This creates an app option that references the PIXIJS render object that we are using
class renderer {
    constructor(canvas, height, width, backgroundColor) {
        if (canvas == "none") {
            this.app = new PIXI.Application(width, height, { backgroundColor: backgroundColor });
            this.view = this.app.view;
            this.stage = this.app.stage;
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2xpZW50LmdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvb3B0aW9ucy5nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9yZW5kZXJlci5nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVrRDtBQUNIO0FBRS9DLElBQUksV0FBVyxHQUFHLElBQUksNkRBQU8sQ0FBQyxLQUFLLENBQUM7QUFDcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnRUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO0FBRWxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBRXhCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUN6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFDZCxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUc7QUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNkaEQ7QUFBQSx5SUFBeUk7QUFDekksK0JBQStCO0FBRXpCO0lBaUJGLFlBQVksVUFBa0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQSxnR0FBZ0c7QUFDaEcsd0ZBQXdGO0FBQ2xGO0lBSUYsWUFBWSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxlQUFlO1FBQzlDLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsZUFBZSxFQUFHLGVBQWUsRUFBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7U0FDOUI7SUFFTCxDQUFDO0NBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvcmUvY2xpZW50LmdhbWUudHNcIik7XG4iLCJcclxuaW1wb3J0IHtyZW5kZXJlcn0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyZXIuZ2FtZSdcclxuaW1wb3J0IHtvcHRpb25zfSBmcm9tICcuLi9vcHRpb25zL29wdGlvbnMuZ2FtZSdcclxuXHJcbnZhciBnYW1lT3B0aW9ucyA9IG5ldyBvcHRpb25zKGZhbHNlKVxyXG5nYW1lT3B0aW9ucy5jb3JlLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyKCdub25lJywgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoLCAnMHgwMDk5MDAnKVxyXG5cclxuY29uc29sZS5sb2coZ2FtZU9wdGlvbnMpXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPcHRpb25zLmNvcmUucmVuZGVyZXIudmlldylcclxubGV0IGNpcmNsZSA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuY2lyY2xlLmJlZ2luRmlsbCgweDVjYWZlMilcclxuY2lyY2xlLmRyYXdDaXJjbGUoMCwgMCwgODApXHJcbmNpcmNsZS54ID0gMzIwXHJcbmNpcmNsZS55ID0gMTgwXHJcbmdhbWVPcHRpb25zLmNvcmUucmVuZGVyZXIuc3RhZ2UuYWRkQ2hpbGQoY2lyY2xlKVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyZXIgfSBmcm9tICcuLy4uL3JlbmRlcmVyL3JlbmRlcmVyLmdhbWUnO1xyXG4vL1RoaXMgbW9kdWxlIGRlY2xhcmVzIHRoZSBvcHRpb25zIGFuZCB2YXJpYWJsZXMgdXNlZCB3aXRoaW4gdGhlIGdhbWUuIFRoZXJlIHNob3VsZCBiZSBvbmUgaW5zdGFuY2Ugb2YgdGhpcyBvYmplY3QgdGhhdCBpcyBhY2Nlc3NpYmxlIGZvclxyXG4vL2FueSBtb2R1bGUgdGhhdCByZXF1aXJlcyBpdC4gXHJcblxyXG5leHBvcnQgY2xhc3Mgb3B0aW9ucyB7XHJcbiAgICAvL1RoZSBjb3JlIG9wdGlvbnMgZGVmaW5lcyB0aGUgdmFyaWFibGVzIHRoYXQgYXJlIGNvcmUgdG8gdGhlIGdhbWVzIGZ1bmN0aW9uYWxpdHlcclxuICAgIC8vIFJlbmRlcmVyIGlzIHRoZSBwaXhpanMgb2JqZWN0IHRoYXQgcmVuZGVycyB0aGUgZ2FtZSBmb3IgdXNcclxuICAgIC8vIGhlcm9MaXN0IGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBoZXJvJ3MgaW4gdGhpcyBnYW1lXHJcbiAgICAvLyBwYXJ0aWNsZUxpc3QgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgcGFydGljbGVzIGluIHRoaXMgZ2FtZVxyXG4gICAgLy8gbW9uc3Rlckxpc3QgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgYWxsIGN1cnJlbnRseSBhbGl2ZSBtb25zdGVyc1xyXG4gICAgY29yZToge1xyXG4gICAgICAgIHJlbmRlcmVyPzogcmVuZGVyZXJcclxuICAgICAgICBwbGF5ZXJMaXN0PzogQXJyYXk8b2JqZWN0PlxyXG4gICAgICAgIGhlcm9MaXN0PzogQXJyYXk8b2JqZWN0PlxyXG4gICAgICAgIHBhcnRpY2xlTGlzdD86IEFycmF5PG9iamVjdD5cclxuICAgICAgICBtb25zdGVyTGlzdD86IEFycmF5PG9iamVjdD5cclxuICAgIH1cclxuICAgIC8vVGhlIHNlc3Npb24gb3B0aW9ucyBkZWZpbmVzIHRoaW5ncyB0aGF0IGFyZSB1bmlxdWUgdG8gdGhpcyBwbGF5ZXJzIGNvbm5lY3Rpb24uIFRoZXNlIGFyZSB0aGluZ3MgbGlrZSByZXNvbHV0aW9uLCBzb3VuZCBtdXRlZCwgcXVpY2sgY2FzdFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHNlcnZlcjogQm9vbGVhblxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3Ioc2VydmVyTW9kZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0ge3NlcnZlcjogc2VydmVyTW9kZX1cclxuICAgICAgICB0aGlzLmNvcmUgPSB7fVxyXG4gICAgfVxyXG59IiwiLy8gVGhpcyBtb2R1bGUgY3JlYXRlcyB0aGUgUElYSUpTIHJlbmRlcmluZyBvcHRpb24gdGhhdCBhbGxvd3MgdXMgdG8gZHJhdyB0aGluZ3MgdG8gV2ViR0wvQ2FudmFzXHJcbi8vIFRoaXMgY3JlYXRlcyBhbiBhcHAgb3B0aW9uIHRoYXQgcmVmZXJlbmNlcyB0aGUgUElYSUpTIHJlbmRlciBvYmplY3QgdGhhdCB3ZSBhcmUgdXNpbmdcclxuZXhwb3J0IGNsYXNzIHJlbmRlcmVyIHtcclxuICAgIGFwcDogYW55XHJcbiAgICB2aWV3OiBhbnlcclxuICAgIHN0YWdlOiBhbnlcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgaGVpZ2h0LCB3aWR0aCwgYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNhbnZhcyA9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHdpZHRoLCBoZWlnaHQsIHtiYWNrZ3JvdW5kQ29sb3IgOiBiYWNrZ3JvdW5kQ29sb3J9KTtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hcHAudmlld1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlID0gdGhpcy5hcHAuc3RhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==