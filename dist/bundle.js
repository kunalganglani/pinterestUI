/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is our "Entry Point"
	 */
	
	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	var _controllerAppcontroller = __webpack_require__(/*! controller/appcontroller */ 2);
	
	var appModule = _interopRequireWildcard(_controllerAppcontroller);
	
	var _modelContent = __webpack_require__(/*! model/content */ 3);
	
	appModule.loadContent(_modelContent.imageContent);

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./src/controller/appcontroller.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.loadContent = loadContent;
	
	function loadContent(contentArray) {
	  contentArray.map(function (item) {
	    loadTemplate(item);
	  });
	}
	
	function loadTemplate(item) {
	  if ('content' in document.createElement('template')) {
	
	    var tile = document.querySelector('#pinContentTile');
	    var image = tile.content.querySelectorAll("img");
	    image[0].src = item.imageURL;
	    var imageCaption = tile.content.querySelector("figcaption");
	    imageCaption.textContent = item.imageTitle;
	
	    var tb = document.querySelector("#columns");
	    var clone = document.importNode(tile.content, true);
	    tb.appendChild(clone);
	  }
	}

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/model/content.js ***!
  \******************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var imageContent = [{
	    "id": 1,
	    "imageTitle": "Re-contextualized",
	    "imageURL": "http://dummyimage.com/346x230.png/5fa2dd/ffffff"
	}, {
	    "id": 2,
	    "imageTitle": "synergy",
	    "imageURL": "http://dummyimage.com/322x112.bmp/cc0000/ffffff"
	}, {
	    "id": 3,
	    "imageTitle": "access",
	    "imageURL": "http://dummyimage.com/305x214.bmp/dddddd/000000"
	}, {
	    "id": 4,
	    "imageTitle": "coherent",
	    "imageURL": "http://dummyimage.com/306x378.bmp/cc0000/ffffff"
	}, {
	    "id": 5,
	    "imageTitle": "array",
	    "imageURL": "http://dummyimage.com/319x236.bmp/5fa2dd/ffffff"
	}, {
	    "id": 6,
	    "imageTitle": "encoding",
	    "imageURL": "http://dummyimage.com/311x386.png/5fa2dd/ffffff"
	}, {
	    "id": 7,
	    "imageTitle": "forecast",
	    "imageURL": "http://dummyimage.com/325x449.jpg/5fa2dd/ffffff"
	}, {
	    "id": 8,
	    "imageTitle": "info-mediaries",
	    "imageURL": "http://dummyimage.com/341x490.png/dddddd/000000"
	}, {
	    "id": 9,
	    "imageTitle": "process improvement",
	    "imageURL": "http://dummyimage.com/316x367.bmp/dddddd/000000"
	}, {
	    "id": 10,
	    "imageTitle": "open system",
	    "imageURL": "http://dummyimage.com/310x139.png/5fa2dd/ffffff"
	}, {
	    "id": 11,
	    "imageTitle": "Distributed",
	    "imageURL": "http://dummyimage.com/323x508.bmp/ff4444/ffffff"
	}, {
	    "id": 12,
	    "imageTitle": "Versatile",
	    "imageURL": "http://dummyimage.com/316x452.png/cc0000/ffffff"
	}, {
	    "id": 13,
	    "imageTitle": "Polarised",
	    "imageURL": "http://dummyimage.com/309x569.bmp/ff4444/ffffff"
	}, {
	    "id": 14,
	    "imageTitle": "actuating",
	    "imageURL": "http://dummyimage.com/301x588.png/cc0000/ffffff"
	}, {
	    "id": 15,
	    "imageTitle": "Digitized",
	    "imageURL": "http://dummyimage.com/338x555.png/dddddd/000000"
	}, {
	    "id": 16,
	    "imageTitle": "Integrated",
	    "imageURL": "http://dummyimage.com/327x321.bmp/ff4444/ffffff"
	}, {
	    "id": 17,
	    "imageTitle": "knowledge user",
	    "imageURL": "http://dummyimage.com/312x451.png/5fa2dd/ffffff"
	}, {
	    "id": 18,
	    "imageTitle": "core",
	    "imageURL": "http://dummyimage.com/323x591.jpg/5fa2dd/ffffff"
	}, {
	    "id": 19,
	    "imageTitle": "complexity",
	    "imageURL": "http://dummyimage.com/308x292.jpg/dddddd/000000"
	}, {
	    "id": 20,
	    "imageTitle": "Organic",
	    "imageURL": "http://dummyimage.com/347x135.png/cc0000/ffffff"
	}, {
	    "id": 21,
	    "imageTitle": "regional",
	    "imageURL": "http://dummyimage.com/337x115.bmp/dddddd/000000"
	}, {
	    "id": 22,
	    "imageTitle": "infrastructure",
	    "imageURL": "http://dummyimage.com/344x534.bmp/dddddd/000000"
	}, {
	    "id": 23,
	    "imageTitle": "superstructure",
	    "imageURL": "http://dummyimage.com/312x247.jpg/cc0000/ffffff"
	}, {
	    "id": 24,
	    "imageTitle": "homogeneous",
	    "imageURL": "http://dummyimage.com/305x503.jpg/dddddd/000000"
	}, {
	    "id": 25,
	    "imageTitle": "Multi-lateral",
	    "imageURL": "http://dummyimage.com/317x370.jpg/ff4444/ffffff"
	}, {
	    "id": 26,
	    "imageTitle": "encoding",
	    "imageURL": "http://dummyimage.com/313x381.bmp/5fa2dd/ffffff"
	}, {
	    "id": 27,
	    "imageTitle": "Cross-group",
	    "imageURL": "http://dummyimage.com/344x257.bmp/cc0000/ffffff"
	}, {
	    "id": 28,
	    "imageTitle": "core",
	    "imageURL": "http://dummyimage.com/336x314.bmp/5fa2dd/ffffff"
	}, {
	    "id": 29,
	    "imageTitle": "6th generation",
	    "imageURL": "http://dummyimage.com/321x476.bmp/dddddd/000000"
	}, {
	    "id": 30,
	    "imageTitle": "Graphic Interface",
	    "imageURL": "http://dummyimage.com/341x179.png/dddddd/000000"
	}, {
	    "id": 31,
	    "imageTitle": "mobile",
	    "imageURL": "http://dummyimage.com/348x355.jpg/dddddd/000000"
	}, {
	    "id": 32,
	    "imageTitle": "multimedia",
	    "imageURL": "http://dummyimage.com/312x231.bmp/5fa2dd/ffffff"
	}, {
	    "id": 33,
	    "imageTitle": "bottom-line",
	    "imageURL": "http://dummyimage.com/306x583.bmp/5fa2dd/ffffff"
	}, {
	    "id": 34,
	    "imageTitle": "forecast",
	    "imageURL": "http://dummyimage.com/348x563.bmp/cc0000/ffffff"
	}, {
	    "id": 35,
	    "imageTitle": "Polarised",
	    "imageURL": "http://dummyimage.com/348x540.png/ff4444/ffffff"
	}, {
	    "id": 36,
	    "imageTitle": "installation",
	    "imageURL": "http://dummyimage.com/324x453.png/cc0000/ffffff"
	}, {
	    "id": 37,
	    "imageTitle": "neutral",
	    "imageURL": "http://dummyimage.com/322x544.bmp/ff4444/ffffff"
	}, {
	    "id": 38,
	    "imageTitle": "website",
	    "imageURL": "http://dummyimage.com/309x312.bmp/cc0000/ffffff"
	}, {
	    "id": 39,
	    "imageTitle": "De-engineered",
	    "imageURL": "http://dummyimage.com/346x234.bmp/ff4444/ffffff"
	}, {
	    "id": 40,
	    "imageTitle": "task-force",
	    "imageURL": "http://dummyimage.com/308x492.bmp/ff4444/ffffff"
	}, {
	    "id": 41,
	    "imageTitle": "Sharable",
	    "imageURL": "http://dummyimage.com/347x146.png/dddddd/000000"
	}, {
	    "id": 42,
	    "imageTitle": "installation",
	    "imageURL": "http://dummyimage.com/330x205.jpg/5fa2dd/ffffff"
	}, {
	    "id": 43,
	    "imageTitle": "functionalities",
	    "imageURL": "http://dummyimage.com/328x531.png/cc0000/ffffff"
	}, {
	    "id": 44,
	    "imageTitle": "Customizable",
	    "imageURL": "http://dummyimage.com/339x181.png/ff4444/ffffff"
	}, {
	    "id": 45,
	    "imageTitle": "application",
	    "imageURL": "http://dummyimage.com/329x127.png/5fa2dd/ffffff"
	}, {
	    "id": 46,
	    "imageTitle": "Front-line",
	    "imageURL": "http://dummyimage.com/328x300.png/cc0000/ffffff"
	}, {
	    "id": 47,
	    "imageTitle": "adapter",
	    "imageURL": "http://dummyimage.com/350x585.png/ff4444/ffffff"
	}, {
	    "id": 48,
	    "imageTitle": "installation",
	    "imageURL": "http://dummyimage.com/320x509.png/dddddd/000000"
	}, {
	    "id": 49,
	    "imageTitle": "Optional",
	    "imageURL": "http://dummyimage.com/322x592.jpg/dddddd/000000"
	}, {
	    "id": 50,
	    "imageTitle": "success",
	    "imageURL": "http://dummyimage.com/314x394.png/5fa2dd/ffffff"
	}];
	exports.imageContent = imageContent;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map