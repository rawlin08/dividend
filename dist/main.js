/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tickerFunctions.js":
/*!********************************!*\
  !*** ./src/tickerFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDividend": () => (/* binding */ fetchDividend),
/* harmony export */   "fetchMarketDetails": () => (/* binding */ fetchMarketDetails),
/* harmony export */   "fetchStockSplit": () => (/* binding */ fetchStockSplit),
/* harmony export */   "fetchTickerDetails": () => (/* binding */ fetchTickerDetails),
/* harmony export */   "fetchTickerNews": () => (/* binding */ fetchTickerNews),
/* harmony export */   "fetchTickerOpenClose": () => (/* binding */ fetchTickerOpenClose),
/* harmony export */   "fetchTickerPrevClose": () => (/* binding */ fetchTickerPrevClose)
/* harmony export */ });
const URL = 'https://api.polygon.io';
const APIKey = 'TKVSXdx635Dera7_JxMwbX3fQBc1Q77t';
const ticker = document.querySelector('textarea');

function fetchMarketDetails() {
    // Fetches Current Trading Status of Markets
    fetch(`${URL}/v1/marketstatus/now?apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((marketStatusNow) => {
            console.log(marketStatusNow);
    });
    // Fetches Upcoming Market Holidays
    fetch(`${URL}/v1/marketstatus/upcoming?apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((marketStatusUpcoming) => {
            console.log(marketStatusUpcoming);
    });
};

function fetchTickerDetails() {
    fetch(`${URL}/v3/reference/tickers/ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerDetails) => {
            console.log(tickerDetails);
    });
};

function fetchTickerOpenClose() {
    fetch(`${URL}/v1/open-close/AAPL/2023-03-02?adjusted=true&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerOpenClose) => {
            console.log(tickerOpenClose);
    });
};

function fetchTickerPrevClose() {
    fetch(`${URL}/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerOpenClose) => {
            console.log(tickerOpenClose);
    });
};

function fetchDividend(e) {
    e.preventDefault();
    fetch(`${URL}/v3/reference/dividends?ticker=${ticker.value.toUpperCase()}&limit=1000&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerDividend) => {
            console.log(tickerDividend);
    });
};

function fetchStockSplit() {
    fetch(`${URL}/v2/reference/splits?ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerSplits) => {
            console.log(tickerSplits);
    });
};

function fetchTickerNews() {
    fetch(`${URL}/v2/reference/news?ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerNews) => {
            console.log(tickerNews);
    });
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tickerFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickerFunctions */ "./src/tickerFunctions.js");


const theForm = document.querySelector('form');

theForm.addEventListener('submit', _tickerFunctions__WEBPACK_IMPORTED_MODULE_0__.fetchDividend);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxJQUFJLDhCQUE4QixPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWEsSUFBSSxtQ0FBbUMsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLElBQUksMkNBQTJDLE9BQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsYUFBYSxJQUFJLHNEQUFzRCxPQUFPO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsSUFBSSxpREFBaUQsT0FBTztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsSUFBSSxpQ0FBaUMsMkJBQTJCLHFCQUFxQixPQUFPO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsSUFBSSwwQ0FBMEMsT0FBTztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLElBQUksd0NBQXdDLE9BQU87QUFDaEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVQ2xFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEOztBQUVsRDs7QUFFQSxtQ0FBbUMsMkRBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90aWNrZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVSTCA9ICdodHRwczovL2FwaS5wb2x5Z29uLmlvJztcbmNvbnN0IEFQSUtleSA9ICdUS1ZTWGR4NjM1RGVyYTdfSnhNd2JYM2ZRQmMxUTc3dCc7XG5jb25zdCB0aWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuXG5mdW5jdGlvbiBmZXRjaE1hcmtldERldGFpbHMoKSB7XG4gICAgLy8gRmV0Y2hlcyBDdXJyZW50IFRyYWRpbmcgU3RhdHVzIG9mIE1hcmtldHNcbiAgICBmZXRjaChgJHtVUkx9L3YxL21hcmtldHN0YXR1cy9ub3c/YXBpS2V5PSR7QVBJS2V5fWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigobWFya2V0U3RhdHVzTm93KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXJrZXRTdGF0dXNOb3cpO1xuICAgIH0pO1xuICAgIC8vIEZldGNoZXMgVXBjb21pbmcgTWFya2V0IEhvbGlkYXlzXG4gICAgZmV0Y2goYCR7VVJMfS92MS9tYXJrZXRzdGF0dXMvdXBjb21pbmc/YXBpS2V5PSR7QVBJS2V5fWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigobWFya2V0U3RhdHVzVXBjb21pbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcmtldFN0YXR1c1VwY29taW5nKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGZldGNoVGlja2VyRGV0YWlscygpIHtcbiAgICBmZXRjaChgJHtVUkx9L3YzL3JlZmVyZW5jZS90aWNrZXJzL3RpY2tlcj1BQVBMJmFwaUtleT0ke0FQSUtleX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHRpY2tlckRldGFpbHMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpY2tlckRldGFpbHMpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZmV0Y2hUaWNrZXJPcGVuQ2xvc2UoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS92MS9vcGVuLWNsb3NlL0FBUEwvMjAyMy0wMy0wMj9hZGp1c3RlZD10cnVlJmFwaUtleT0ke0FQSUtleX1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHRpY2tlck9wZW5DbG9zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGlja2VyT3BlbkNsb3NlKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGZldGNoVGlja2VyUHJldkNsb3NlKCkge1xuICAgIGZldGNoKGAke1VSTH0vdjIvYWdncy90aWNrZXIvQUFQTC9wcmV2P2FkanVzdGVkPXRydWUmYXBpS2V5PSR7QVBJS2V5fWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigodGlja2VyT3BlbkNsb3NlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aWNrZXJPcGVuQ2xvc2UpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZmV0Y2hEaXZpZGVuZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKGAke1VSTH0vdjMvcmVmZXJlbmNlL2RpdmlkZW5kcz90aWNrZXI9JHt0aWNrZXIudmFsdWUudG9VcHBlckNhc2UoKX0mbGltaXQ9MTAwMCZhcGlLZXk9JHtBUElLZXl9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKCh0aWNrZXJEaXZpZGVuZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGlja2VyRGl2aWRlbmQpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZmV0Y2hTdG9ja1NwbGl0KCkge1xuICAgIGZldGNoKGAke1VSTH0vdjIvcmVmZXJlbmNlL3NwbGl0cz90aWNrZXI9QUFQTCZhcGlLZXk9JHtBUElLZXl9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKCh0aWNrZXJTcGxpdHMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpY2tlclNwbGl0cyk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBmZXRjaFRpY2tlck5ld3MoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS92Mi9yZWZlcmVuY2UvbmV3cz90aWNrZXI9QUFQTCZhcGlLZXk9JHtBUElLZXl9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKCh0aWNrZXJOZXdzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aWNrZXJOZXdzKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7ZmV0Y2hNYXJrZXREZXRhaWxzLCBmZXRjaFRpY2tlckRldGFpbHMsIGZldGNoVGlja2VyT3BlbkNsb3NlLCBmZXRjaFRpY2tlclByZXZDbG9zZSwgZmV0Y2hEaXZpZGVuZCwgZmV0Y2hTdG9ja1NwbGl0LCBmZXRjaFRpY2tlck5ld3N9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmZXRjaERpdmlkZW5kIH0gZnJvbSBcIi4vdGlja2VyRnVuY3Rpb25zXCI7XG5cbmNvbnN0IHRoZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbnRoZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZmV0Y2hEaXZpZGVuZCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9