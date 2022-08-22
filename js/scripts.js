(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var smoothScroll_polyfills_min = createCommonjsModule(function (module, exports) {
	/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
	window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e;})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o);}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e);});})(),(function(e,t){module.exports=t(e);})("undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:commonjsGlobal,(function(M){var q={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},I=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t];}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a);}return "#"+r},F=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},L=function(e){return e?(t=e,parseInt(M.getComputedStyle(t).height,10)+e.offsetTop):0;var t;},x=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),M.scrollTo(0,t));},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof M.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a);}};return function(o,e){var b,a,A,O,C={};C.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||H("scrollCancel",b);},C.animateScroll=function(a,r,e){C.cancelScroll();var i=I(b||q,e||{}),c="[object Number]"===Object.prototype.toString.call(a),t=c||!a.tagName?null:a;if(c||t){var s=M.pageYOffset;i.header&&!A&&(A=document.querySelector(i.header));var n,o,u,l,m,d,f,h,p=L(A),g=c?a:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,F()-M.innerHeight)),a})(t,p,parseInt("function"==typeof i.offset?i.offset(a,r):i.offset,10),i.clip),y=g-s,v=F(),w=0,S=(n=y,u=(o=i).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&u>o.durationMax?o.durationMax:o.durationMin&&u<o.durationMin?o.durationMin:parseInt(u,10)),E=function(e){var t,n,o;l||(l=e),w+=e-l,d=s+y*(n=m=1<(m=0===S?0:w/S)?1:m,"easeInQuad"===(t=i).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),M.scrollTo(0,Math.floor(d)),(function(e,t){var n=M.pageYOffset;if(e==t||n==t||(s<t&&M.innerHeight+n)>=v)return C.cancelScroll(!0),x(a,t,c),H("scrollStop",i,a,r),!(O=l=null)})(d,g)||(O=M.requestAnimationFrame(E),l=e);};0===M.pageYOffset&&M.scrollTo(0,0),f=a,h=i,c||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in M&&M.matchMedia("(prefers-reduced-motion)").matches?x(a,Math.floor(g),!1):(H("scrollStart",i,a,r),C.cancelScroll(!0),M.requestAnimationFrame(E));}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(b.ignore)&&a.hostname===M.location.hostname&&a.pathname===M.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash));}catch(e){t=r(a.hash);}if("#"===t){if(!b.topOnEmptyHash)return;n=document.documentElement;}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=M.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||M.pageYOffset},document.title,t||M.location.href);}})(b),C.animateScroll(n,a));}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(b)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||C.animateScroll(t,null,{updateURL:!1});}};C.destroy=function(){b&&(document.removeEventListener("click",t,!1),M.removeEventListener("popstate",n,!1),C.cancelScroll(),O=A=a=b=null);};return (function(){if(!("querySelector"in document&&"addEventListener"in M&&"requestAnimationFrame"in M&&"closest"in M.Element.prototype))throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),b=I(q,e||{}),A=b.header?document.querySelector(b.header):null,document.addEventListener("click",t,!1),b.updateURL&&b.popstate&&M.addEventListener("popstate",n,!1);})(),C}}));
	});

	// https://github.com/cferdinandi/smooth-scroll
	new smoothScroll_polyfills_min('a[href*="#"]', {
	  speed: 300,
	  updateURL: false
	});

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(n);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _createForOfIteratorHelper(o) {
	  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
	    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
	      var i = 0;

	      var F = function () {};

	      return {
	        s: F,
	        n: function () {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function (e) {
	          throw e;
	        },
	        f: F
	      };
	    }

	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  var it,
	      normalCompletion = true,
	      didErr = false,
	      err;
	  return {
	    s: function () {
	      it = o[Symbol.iterator]();
	    },
	    n: function () {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function (e) {
	      didErr = true;
	      err = e;
	    },
	    f: function () {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}

	/**
	 * Animate
	 * ======================================
	 * - add class to element in viewport
	 */
	var RATIO = "0.75";
	var Animate = function Animate() {
	  var _this = this;

	  _classCallCheck(this, Animate);

	  _defineProperty(this, "scrollHandler", function () {
	    if (!document.querySelectorAll(".animate:not(.animate--visible)")) return;

	    var _iterator = _createForOfIteratorHelper(_this.sections),
	        _step;

	    try {
	      var _loop = function _loop() {
	        var section = _step.value;

	        if (section.getBoundingClientRect().top <= window.innerHeight * RATIO && section.getBoundingClientRect().top > 0) {
	          setTimeout(function () {
	            section.classList.add("animate--visible");
	          }, 100);
	        }
	      };

	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        _loop();
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  });

	  this.sections = document.querySelectorAll(".animate");
	  window.addEventListener("scroll", this.scrollHandler, false);
	  this.scrollHandler();
	};
	new Animate();

	var lazysizes = createCommonjsModule(function (module) {
	(function(window, factory) {
		var lazySizes = factory(window, window.document, Date);
		window.lazySizes = lazySizes;
		if( module.exports){
			module.exports = lazySizes;
		}
	}(typeof window != 'undefined' ?
	      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
		/*jshint eqnull:true */

		var lazysizes, lazySizesCfg;

		(function(){
			var prop;

			var lazySizesDefaults = {
				lazyClass: 'lazyload',
				loadedClass: 'lazyloaded',
				loadingClass: 'lazyloading',
				preloadClass: 'lazypreload',
				errorClass: 'lazyerror',
				//strictClass: 'lazystrict',
				autosizesClass: 'lazyautosizes',
				srcAttr: 'data-src',
				srcsetAttr: 'data-srcset',
				sizesAttr: 'data-sizes',
				//preloadAfterLoad: false,
				minSize: 40,
				customMedia: {},
				init: true,
				expFactor: 1.5,
				hFac: 0.8,
				loadMode: 2,
				loadHidden: true,
				ricTimeout: 0,
				throttleDelay: 125,
			};

			lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

			for(prop in lazySizesDefaults){
				if(!(prop in lazySizesCfg)){
					lazySizesCfg[prop] = lazySizesDefaults[prop];
				}
			}
		})();

		if (!document || !document.getElementsByClassName) {
			return {
				init: function () {},
				cfg: lazySizesCfg,
				noSupport: true,
			};
		}

		var docElem = document.documentElement;

		var supportPicture = window.HTMLPictureElement;

		var _addEventListener = 'addEventListener';

		var _getAttribute = 'getAttribute';

		/**
		 * Update to bind to window because 'this' becomes null during SSR
		 * builds.
		 */
		var addEventListener = window[_addEventListener].bind(window);

		var setTimeout = window.setTimeout;

		var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

		var requestIdleCallback = window.requestIdleCallback;

		var regPicture = /^picture$/i;

		var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

		var regClassCache = {};

		var forEach = Array.prototype.forEach;

		var hasClass = function(ele, cls) {
			if(!regClassCache[cls]){
				regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			}
			return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
		};

		var addClass = function(ele, cls) {
			if (!hasClass(ele, cls)){
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
			}
		};

		var removeClass = function(ele, cls) {
			var reg;
			if ((reg = hasClass(ele,cls))) {
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
			}
		};

		var addRemoveLoadEvents = function(dom, fn, add){
			var action = add ? _addEventListener : 'removeEventListener';
			if(add){
				addRemoveLoadEvents(dom, fn);
			}
			loadEvents.forEach(function(evt){
				dom[action](evt, fn);
			});
		};

		var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
			var event = document.createEvent('Event');

			if(!detail){
				detail = {};
			}

			detail.instance = lazysizes;

			event.initEvent(name, !noBubbles, !noCancelable);

			event.detail = detail;

			elem.dispatchEvent(event);
			return event;
		};

		var updatePolyfill = function (el, full){
			var polyfill;
			if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
				if(full && full.src && !el[_getAttribute]('srcset')){
					el.setAttribute('srcset', full.src);
				}
				polyfill({reevaluate: true, elements: [el]});
			} else if(full && full.src){
				el.src = full.src;
			}
		};

		var getCSS = function (elem, style){
			return (getComputedStyle(elem, null) || {})[style];
		};

		var getWidth = function(elem, parent, width){
			width = width || elem.offsetWidth;

			while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
				width =  parent.offsetWidth;
				parent = parent.parentNode;
			}

			return width;
		};

		var rAF = (function(){
			var running, waiting;
			var firstFns = [];
			var secondFns = [];
			var fns = firstFns;

			var run = function(){
				var runFns = fns;

				fns = firstFns.length ? secondFns : firstFns;

				running = true;
				waiting = false;

				while(runFns.length){
					runFns.shift()();
				}

				running = false;
			};

			var rafBatch = function(fn, queue){
				if(running && !queue){
					fn.apply(this, arguments);
				} else {
					fns.push(fn);

					if(!waiting){
						waiting = true;
						(document.hidden ? setTimeout : requestAnimationFrame)(run);
					}
				}
			};

			rafBatch._lsFlush = run;

			return rafBatch;
		})();

		var rAFIt = function(fn, simple){
			return simple ?
				function() {
					rAF(fn);
				} :
				function(){
					var that = this;
					var args = arguments;
					rAF(function(){
						fn.apply(that, args);
					});
				}
			;
		};

		var throttle = function(fn){
			var running;
			var lastTime = 0;
			var gDelay = lazySizesCfg.throttleDelay;
			var rICTimeout = lazySizesCfg.ricTimeout;
			var run = function(){
				running = false;
				lastTime = Date.now();
				fn();
			};
			var idleCallback = requestIdleCallback && rICTimeout > 49 ?
				function(){
					requestIdleCallback(run, {timeout: rICTimeout});

					if(rICTimeout !== lazySizesCfg.ricTimeout){
						rICTimeout = lazySizesCfg.ricTimeout;
					}
				} :
				rAFIt(function(){
					setTimeout(run);
				}, true)
			;

			return function(isPriority){
				var delay;

				if((isPriority = isPriority === true)){
					rICTimeout = 33;
				}

				if(running){
					return;
				}

				running =  true;

				delay = gDelay - (Date.now() - lastTime);

				if(delay < 0){
					delay = 0;
				}

				if(isPriority || delay < 9){
					idleCallback();
				} else {
					setTimeout(idleCallback, delay);
				}
			};
		};

		//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
		var debounce = function(func) {
			var timeout, timestamp;
			var wait = 99;
			var run = function(){
				timeout = null;
				func();
			};
			var later = function() {
				var last = Date.now() - timestamp;

				if (last < wait) {
					setTimeout(later, wait - last);
				} else {
					(requestIdleCallback || run)(run);
				}
			};

			return function() {
				timestamp = Date.now();

				if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};

		var loader = (function(){
			var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

			var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

			var regImg = /^img$/i;
			var regIframe = /^iframe$/i;

			var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

			var shrinkExpand = 0;
			var currentExpand = 0;

			var isLoading = 0;
			var lowRuns = -1;

			var resetPreloading = function(e){
				isLoading--;
				if(!e || isLoading < 0 || !e.target){
					isLoading = 0;
				}
			};

			var isVisible = function (elem) {
				if (isBodyHidden == null) {
					isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
				}

				return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
			};

			var isNestedVisible = function(elem, elemExpand){
				var outerRect;
				var parent = elem;
				var visible = isVisible(elem);

				eLtop -= elemExpand;
				eLbottom += elemExpand;
				eLleft -= elemExpand;
				eLright += elemExpand;

				while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
					visible = ((getCSS(parent, 'opacity') || 1) > 0);

					if(visible && getCSS(parent, 'overflow') != 'visible'){
						outerRect = parent.getBoundingClientRect();
						visible = eLright > outerRect.left &&
							eLleft < outerRect.right &&
							eLbottom > outerRect.top - 1 &&
							eLtop < outerRect.bottom + 1
						;
					}
				}

				return visible;
			};

			var checkElements = function() {
				var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
					beforeExpandVal, defaultExpand, preloadExpand, hFac;
				var lazyloadElems = lazysizes.elements;

				if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

					i = 0;

					lowRuns++;

					for(; i < eLlen; i++){

						if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

						if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

						if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
							elemExpand = currentExpand;
						}

						if (!defaultExpand) {
							defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
								docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
								lazySizesCfg.expand;

							lazysizes._defEx = defaultExpand;

							preloadExpand = defaultExpand * lazySizesCfg.expFactor;
							hFac = lazySizesCfg.hFac;
							isBodyHidden = null;

							if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
								currentExpand = preloadExpand;
								lowRuns = 0;
							} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
								currentExpand = defaultExpand;
							} else {
								currentExpand = shrinkExpand;
							}
						}

						if(beforeExpandVal !== elemExpand){
							eLvW = innerWidth + (elemExpand * hFac);
							elvH = innerHeight + elemExpand;
							elemNegativeExpand = elemExpand * -1;
							beforeExpandVal = elemExpand;
						}

						rect = lazyloadElems[i].getBoundingClientRect();

						if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
							(eLtop = rect.top) <= elvH &&
							(eLright = rect.right) >= elemNegativeExpand * hFac &&
							(eLleft = rect.left) <= eLvW &&
							(eLbottom || eLright || eLleft || eLtop) &&
							(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
							((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
							unveilElement(lazyloadElems[i]);
							loadedSomething = true;
							if(isLoading > 9){break;}
						} else if(!loadedSomething && isCompleted && !autoLoadElem &&
							isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
							(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
							(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
							autoLoadElem = preloadElems[0] || lazyloadElems[i];
						}
					}

					if(autoLoadElem && !loadedSomething){
						unveilElement(autoLoadElem);
					}
				}
			};

			var throttledCheckElements = throttle(checkElements);

			var switchLoadingClass = function(e){
				var elem = e.target;

				if (elem._lazyCache) {
					delete elem._lazyCache;
					return;
				}

				resetPreloading(e);
				addClass(elem, lazySizesCfg.loadedClass);
				removeClass(elem, lazySizesCfg.loadingClass);
				addRemoveLoadEvents(elem, rafSwitchLoadingClass);
				triggerEvent(elem, 'lazyloaded');
			};
			var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
			var rafSwitchLoadingClass = function(e){
				rafedSwitchLoadingClass({target: e.target});
			};

			var changeIframeSrc = function(elem, src){
				try {
					elem.contentWindow.location.replace(src);
				} catch(e){
					elem.src = src;
				}
			};

			var handleSources = function(source){
				var customMedia;

				var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

				if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
					source.setAttribute('media', customMedia);
				}

				if(sourceSrcset){
					source.setAttribute('srcset', sourceSrcset);
				}
			};

			var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
				var src, srcset, parent, isPicture, event, firesLoad;

				if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

					if(sizes){
						if(isAuto){
							addClass(elem, lazySizesCfg.autosizesClass);
						} else {
							elem.setAttribute('sizes', sizes);
						}
					}

					srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
					src = elem[_getAttribute](lazySizesCfg.srcAttr);

					if(isImg) {
						parent = elem.parentNode;
						isPicture = parent && regPicture.test(parent.nodeName || '');
					}

					firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

					event = {target: elem};

					addClass(elem, lazySizesCfg.loadingClass);

					if(firesLoad){
						clearTimeout(resetPreloadingTimer);
						resetPreloadingTimer = setTimeout(resetPreloading, 2500);
						addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
					}

					if(isPicture){
						forEach.call(parent.getElementsByTagName('source'), handleSources);
					}

					if(srcset){
						elem.setAttribute('srcset', srcset);
					} else if(src && !isPicture){
						if(regIframe.test(elem.nodeName)){
							changeIframeSrc(elem, src);
						} else {
							elem.src = src;
						}
					}

					if(isImg && (srcset || isPicture)){
						updatePolyfill(elem, {src: src});
					}
				}

				if(elem._lazyRace){
					delete elem._lazyRace;
				}
				removeClass(elem, lazySizesCfg.lazyClass);

				rAF(function(){
					// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
					var isLoaded = elem.complete && elem.naturalWidth > 1;

					if( !firesLoad || isLoaded){
						if (isLoaded) {
							addClass(elem, 'ls-is-cached');
						}
						switchLoadingClass(event);
						elem._lazyCache = true;
						setTimeout(function(){
							if ('_lazyCache' in elem) {
								delete elem._lazyCache;
							}
						}, 9);
					}
					if (elem.loading == 'lazy') {
						isLoading--;
					}
				}, true);
			});

			var unveilElement = function (elem){
				if (elem._lazyRace) {return;}
				var detail;

				var isImg = regImg.test(elem.nodeName);

				//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
				var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
				var isAuto = sizes == 'auto';

				if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

				detail = triggerEvent(elem, 'lazyunveilread').detail;

				if(isAuto){
					 autoSizer.updateElem(elem, true, elem.offsetWidth);
				}

				elem._lazyRace = true;
				isLoading++;

				lazyUnveil(elem, detail, isAuto, sizes, isImg);
			};

			var afterScroll = debounce(function(){
				lazySizesCfg.loadMode = 3;
				throttledCheckElements();
			});

			var altLoadmodeScrollListner = function(){
				if(lazySizesCfg.loadMode == 3){
					lazySizesCfg.loadMode = 2;
				}
				afterScroll();
			};

			var onload = function(){
				if(isCompleted){return;}
				if(Date.now() - started < 999){
					setTimeout(onload, 999);
					return;
				}


				isCompleted = true;

				lazySizesCfg.loadMode = 3;

				throttledCheckElements();

				addEventListener('scroll', altLoadmodeScrollListner, true);
			};

			return {
				_: function(){
					started = Date.now();

					lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
					preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

					addEventListener('scroll', throttledCheckElements, true);

					addEventListener('resize', throttledCheckElements, true);

					addEventListener('pageshow', function (e) {
						if (e.persisted) {
							var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

							if (loadingElements.length && loadingElements.forEach) {
								requestAnimationFrame(function () {
									loadingElements.forEach( function (img) {
										if (img.complete) {
											unveilElement(img);
										}
									});
								});
							}
						}
					});

					if(window.MutationObserver){
						new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
					} else {
						docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
						docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
						setInterval(throttledCheckElements, 999);
					}

					addEventListener('hashchange', throttledCheckElements, true);

					//, 'fullscreenchange'
					['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
						document[_addEventListener](name, throttledCheckElements, true);
					});

					if((/d$|^c/.test(document.readyState))){
						onload();
					} else {
						addEventListener('load', onload);
						document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
						setTimeout(onload, 20000);
					}

					if(lazysizes.elements.length){
						checkElements();
						rAF._lsFlush();
					} else {
						throttledCheckElements();
					}
				},
				checkElems: throttledCheckElements,
				unveil: unveilElement,
				_aLSL: altLoadmodeScrollListner,
			};
		})();


		var autoSizer = (function(){
			var autosizesElems;

			var sizeElement = rAFIt(function(elem, parent, event, width){
				var sources, i, len;
				elem._lazysizesWidth = width;
				width += 'px';

				elem.setAttribute('sizes', width);

				if(regPicture.test(parent.nodeName || '')){
					sources = parent.getElementsByTagName('source');
					for(i = 0, len = sources.length; i < len; i++){
						sources[i].setAttribute('sizes', width);
					}
				}

				if(!event.detail.dataAttr){
					updatePolyfill(elem, event.detail);
				}
			});
			var getSizeElement = function (elem, dataAttr, width){
				var event;
				var parent = elem.parentNode;

				if(parent){
					width = getWidth(elem, parent, width);
					event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

					if(!event.defaultPrevented){
						width = event.detail.width;

						if(width && width !== elem._lazysizesWidth){
							sizeElement(elem, parent, event, width);
						}
					}
				}
			};

			var updateElementsSizes = function(){
				var i;
				var len = autosizesElems.length;
				if(len){
					i = 0;

					for(; i < len; i++){
						getSizeElement(autosizesElems[i]);
					}
				}
			};

			var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

			return {
				_: function(){
					autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
					addEventListener('resize', debouncedUpdateElementsSizes);
				},
				checkElems: debouncedUpdateElementsSizes,
				updateElem: getSizeElement
			};
		})();

		var init = function(){
			if(!init.i && document.getElementsByClassName){
				init.i = true;
				autoSizer._();
				loader._();
			}
		};

		setTimeout(function(){
			if(lazySizesCfg.init){
				init();
			}
		});

		lazysizes = {
			cfg: lazySizesCfg,
			autoSizer: autoSizer,
			loader: loader,
			init: init,
			uP: updatePolyfill,
			aC: addClass,
			rC: removeClass,
			hC: hasClass,
			fire: triggerEvent,
			gW: getWidth,
			rAF: rAF,
		};

		return lazysizes;
	}
	));
	});

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3Ntb290aC1zY3JvbGwvZGlzdC9zbW9vdGgtc2Nyb2xsLnBvbHlmaWxscy5taW4uanMiLCJzcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qcyIsInNyYy9zY3JpcHRzL21vZHVsZXMvQW5pbWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvbGF6eXNpemVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBzbW9vdGgtc2Nyb2xsIHYxNi4xLjMgfCAoYykgMjAyMCBDaHJpcyBGZXJkaW5hbmRpIHwgTUlUIExpY2Vuc2UgfCBodHRwOi8vZ2l0aHViLmNvbS9jZmVyZGluYW5kaS9zbW9vdGgtc2Nyb2xsICovXG53aW5kb3cuRWxlbWVudCYmIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QmJihFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKGUpe3ZhciB0LG49KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChlKSxvPXRoaXM7ZG97Zm9yKHQ9bi5sZW5ndGg7MDw9LS10JiZuLml0ZW0odCkhPT1vOyk7fXdoaWxlKHQ8MCYmKG89by5wYXJlbnRFbGVtZW50KSk7cmV0dXJuIG99KSwoZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuO2Z1bmN0aW9uIGUoZSx0KXt0PXR8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtyZXR1cm4gbi5pbml0Q3VzdG9tRXZlbnQoZSx0LmJ1YmJsZXMsdC5jYW5jZWxhYmxlLHQuZGV0YWlsKSxufWUucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGUsd2luZG93LkN1c3RvbUV2ZW50PWV9KSgpLChmdW5jdGlvbigpe2Zvcih2YXIgcj0wLGU9W1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdLHQ9MDt0PGUubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK3Qpd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbZVt0XStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2VbdF0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2VbdF0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oZSx0KXt2YXIgbj0obmV3IERhdGUpLmdldFRpbWUoKSxvPU1hdGgubWF4KDAsMTYtKG4tcikpLGE9d2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZShuK28pfSksbyk7cmV0dXJuIHI9bitvLGF9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUpfSl9KSgpLChmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sKGZ1bmN0aW9uKCl7cmV0dXJuIHQoZSl9KSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dChlKTplLlNtb290aFNjcm9sbD10KGUpfSkoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcywoZnVuY3Rpb24oTSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHE9e2lnbm9yZTpcIltkYXRhLXNjcm9sbC1pZ25vcmVdXCIsaGVhZGVyOm51bGwsdG9wT25FbXB0eUhhc2g6ITAsc3BlZWQ6NTAwLHNwZWVkQXNEdXJhdGlvbjohMSxkdXJhdGlvbk1heDpudWxsLGR1cmF0aW9uTWluOm51bGwsY2xpcDohMCxvZmZzZXQ6MCxlYXNpbmc6XCJlYXNlSW5PdXRDdWJpY1wiLGN1c3RvbUVhc2luZzpudWxsLHVwZGF0ZVVSTDohMCxwb3BzdGF0ZTohMCxlbWl0RXZlbnRzOiEwfSxJPWZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSl7aWYoIWUuaGFzT3duUHJvcGVydHkodCkpcmV0dXJuO25bdF09ZVt0XX19KSksbn0scj1mdW5jdGlvbihlKXtcIiNcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cigxKSk7Zm9yKHZhciB0LG49U3RyaW5nKGUpLG89bi5sZW5ndGgsYT0tMSxyPVwiXCIsaT1uLmNoYXJDb2RlQXQoMCk7KythPG87KXtpZigwPT09KHQ9bi5jaGFyQ29kZUF0KGEpKSl0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKFwiSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBpbnB1dCBjb250YWlucyBVKzAwMDAuXCIpOzE8PXQmJnQ8PTMxfHwxMjc9PXR8fDA9PT1hJiY0ODw9dCYmdDw9NTd8fDE9PT1hJiY0ODw9dCYmdDw9NTcmJjQ1PT09aT9yKz1cIlxcXFxcIit0LnRvU3RyaW5nKDE2KStcIiBcIjpyKz0xMjg8PXR8fDQ1PT09dHx8OTU9PT10fHw0ODw9dCYmdDw9NTd8fDY1PD10JiZ0PD05MHx8OTc8PXQmJnQ8PTEyMj9uLmNoYXJBdChhKTpcIlxcXFxcIituLmNoYXJBdChhKX1yZXR1cm5cIiNcIityfSxGPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KX0sTD1mdW5jdGlvbihlKXtyZXR1cm4gZT8odD1lLHBhcnNlSW50KE0uZ2V0Q29tcHV0ZWRTdHlsZSh0KS5oZWlnaHQsMTApK2Uub2Zmc2V0VG9wKTowO3ZhciB0fSx4PWZ1bmN0aW9uKGUsdCxuKXswPT09ZSYmZG9jdW1lbnQuYm9keS5mb2N1cygpLG58fChlLmZvY3VzKCksZG9jdW1lbnQuYWN0aXZlRWxlbWVudCE9PWUmJihlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCItMVwiKSxlLmZvY3VzKCksZS5zdHlsZS5vdXRsaW5lPVwibm9uZVwiKSxNLnNjcm9sbFRvKDAsdCkpfSxIPWZ1bmN0aW9uKGUsdCxuLG8pe2lmKHQuZW1pdEV2ZW50cyYmXCJmdW5jdGlvblwiPT10eXBlb2YgTS5DdXN0b21FdmVudCl7dmFyIGE9bmV3IEN1c3RvbUV2ZW50KGUse2J1YmJsZXM6ITAsZGV0YWlsOnthbmNob3I6bix0b2dnbGU6b319KTtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGEpfX07cmV0dXJuIGZ1bmN0aW9uKG8sZSl7dmFyIGIsYSxBLE8sQz17fTtDLmNhbmNlbFNjcm9sbD1mdW5jdGlvbihlKXtjYW5jZWxBbmltYXRpb25GcmFtZShPKSxPPW51bGwsZXx8SChcInNjcm9sbENhbmNlbFwiLGIpfSxDLmFuaW1hdGVTY3JvbGw9ZnVuY3Rpb24oYSxyLGUpe0MuY2FuY2VsU2Nyb2xsKCk7dmFyIGk9SShifHxxLGV8fHt9KSxjPVwiW29iamVjdCBOdW1iZXJdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksdD1jfHwhYS50YWdOYW1lP251bGw6YTtpZihjfHx0KXt2YXIgcz1NLnBhZ2VZT2Zmc2V0O2kuaGVhZGVyJiYhQSYmKEE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpLmhlYWRlcikpO3ZhciBuLG8sdSxsLG0sZCxmLGgscD1MKEEpLGc9Yz9hOihmdW5jdGlvbihlLHQsbixvKXt2YXIgYT0wO2lmKGUub2Zmc2V0UGFyZW50KWZvcig7YSs9ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudDspO3JldHVybiBhPU1hdGgubWF4KGEtdC1uLDApLG8mJihhPU1hdGgubWluKGEsRigpLU0uaW5uZXJIZWlnaHQpKSxhfSkodCxwLHBhcnNlSW50KFwiZnVuY3Rpb25cIj09dHlwZW9mIGkub2Zmc2V0P2kub2Zmc2V0KGEscik6aS5vZmZzZXQsMTApLGkuY2xpcCkseT1nLXMsdj1GKCksdz0wLFM9KG49eSx1PShvPWkpLnNwZWVkQXNEdXJhdGlvbj9vLnNwZWVkOk1hdGguYWJzKG4vMWUzKm8uc3BlZWQpLG8uZHVyYXRpb25NYXgmJnU+by5kdXJhdGlvbk1heD9vLmR1cmF0aW9uTWF4Om8uZHVyYXRpb25NaW4mJnU8by5kdXJhdGlvbk1pbj9vLmR1cmF0aW9uTWluOnBhcnNlSW50KHUsMTApKSxFPWZ1bmN0aW9uKGUpe3ZhciB0LG4sbztsfHwobD1lKSx3Kz1lLWwsZD1zK3kqKG49bT0xPChtPTA9PT1TPzA6dy9TKT8xOm0sXCJlYXNlSW5RdWFkXCI9PT0odD1pKS5lYXNpbmcmJihvPW4qbiksXCJlYXNlT3V0UXVhZFwiPT09dC5lYXNpbmcmJihvPW4qKDItbikpLFwiZWFzZUluT3V0UXVhZFwiPT09dC5lYXNpbmcmJihvPW48LjU/MipuKm46KDQtMipuKSpuLTEpLFwiZWFzZUluQ3ViaWNcIj09PXQuZWFzaW5nJiYobz1uKm4qbiksXCJlYXNlT3V0Q3ViaWNcIj09PXQuZWFzaW5nJiYobz0tLW4qbipuKzEpLFwiZWFzZUluT3V0Q3ViaWNcIj09PXQuZWFzaW5nJiYobz1uPC41PzQqbipuKm46KG4tMSkqKDIqbi0yKSooMipuLTIpKzEpLFwiZWFzZUluUXVhcnRcIj09PXQuZWFzaW5nJiYobz1uKm4qbipuKSxcImVhc2VPdXRRdWFydFwiPT09dC5lYXNpbmcmJihvPTEtIC0tbipuKm4qbiksXCJlYXNlSW5PdXRRdWFydFwiPT09dC5lYXNpbmcmJihvPW48LjU/OCpuKm4qbipuOjEtOCotLW4qbipuKm4pLFwiZWFzZUluUXVpbnRcIj09PXQuZWFzaW5nJiYobz1uKm4qbipuKm4pLFwiZWFzZU91dFF1aW50XCI9PT10LmVhc2luZyYmKG89MSstLW4qbipuKm4qbiksXCJlYXNlSW5PdXRRdWludFwiPT09dC5lYXNpbmcmJihvPW48LjU/MTYqbipuKm4qbipuOjErMTYqLS1uKm4qbipuKm4pLHQuY3VzdG9tRWFzaW5nJiYobz10LmN1c3RvbUVhc2luZyhuKSksb3x8biksTS5zY3JvbGxUbygwLE1hdGguZmxvb3IoZCkpLChmdW5jdGlvbihlLHQpe3ZhciBuPU0ucGFnZVlPZmZzZXQ7aWYoZT09dHx8bj09dHx8KHM8dCYmTS5pbm5lckhlaWdodCtuKT49dilyZXR1cm4gQy5jYW5jZWxTY3JvbGwoITApLHgoYSx0LGMpLEgoXCJzY3JvbGxTdG9wXCIsaSxhLHIpLCEoTz1sPW51bGwpfSkoZCxnKXx8KE89TS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoRSksbD1lKX07MD09PU0ucGFnZVlPZmZzZXQmJk0uc2Nyb2xsVG8oMCwwKSxmPWEsaD1pLGN8fGhpc3RvcnkucHVzaFN0YXRlJiZoLnVwZGF0ZVVSTCYmaGlzdG9yeS5wdXNoU3RhdGUoe3Ntb290aFNjcm9sbDpKU09OLnN0cmluZ2lmeShoKSxhbmNob3I6Zi5pZH0sZG9jdW1lbnQudGl0bGUsZj09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudD9cIiN0b3BcIjpcIiNcIitmLmlkKSxcIm1hdGNoTWVkaWFcImluIE0mJk0ubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uKVwiKS5tYXRjaGVzP3goYSxNYXRoLmZsb29yKGcpLCExKTooSChcInNjcm9sbFN0YXJ0XCIsaSxhLHIpLEMuY2FuY2VsU2Nyb2xsKCEwKSxNLnJlcXVlc3RBbmltYXRpb25GcmFtZShFKSl9fTt2YXIgdD1mdW5jdGlvbihlKXtpZighZS5kZWZhdWx0UHJldmVudGVkJiYhKDAhPT1lLmJ1dHRvbnx8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXkpJiZcImNsb3Nlc3RcImluIGUudGFyZ2V0JiYoYT1lLnRhcmdldC5jbG9zZXN0KG8pKSYmXCJhXCI9PT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmIWUudGFyZ2V0LmNsb3Nlc3QoYi5pZ25vcmUpJiZhLmhvc3RuYW1lPT09TS5sb2NhdGlvbi5ob3N0bmFtZSYmYS5wYXRobmFtZT09PU0ubG9jYXRpb24ucGF0aG5hbWUmJi8jLy50ZXN0KGEuaHJlZikpe3ZhciB0LG47dHJ5e3Q9cihkZWNvZGVVUklDb21wb25lbnQoYS5oYXNoKSl9Y2F0Y2goZSl7dD1yKGEuaGFzaCl9aWYoXCIjXCI9PT10KXtpZighYi50b3BPbkVtcHR5SGFzaClyZXR1cm47bj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9ZWxzZSBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk7KG49bnx8XCIjdG9wXCIhPT10P246ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSYmKGUucHJldmVudERlZmF1bHQoKSwoZnVuY3Rpb24oZSl7aWYoaGlzdG9yeS5yZXBsYWNlU3RhdGUmJmUudXBkYXRlVVJMJiYhaGlzdG9yeS5zdGF0ZSl7dmFyIHQ9TS5sb2NhdGlvbi5oYXNoO3Q9dHx8XCJcIixoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7c21vb3RoU2Nyb2xsOkpTT04uc3RyaW5naWZ5KGUpLGFuY2hvcjp0fHxNLnBhZ2VZT2Zmc2V0fSxkb2N1bWVudC50aXRsZSx0fHxNLmxvY2F0aW9uLmhyZWYpfX0pKGIpLEMuYW5pbWF0ZVNjcm9sbChuLGEpKX19LG49ZnVuY3Rpb24oZSl7aWYobnVsbCE9PWhpc3Rvcnkuc3RhdGUmJmhpc3Rvcnkuc3RhdGUuc21vb3RoU2Nyb2xsJiZoaXN0b3J5LnN0YXRlLnNtb290aFNjcm9sbD09PUpTT04uc3RyaW5naWZ5KGIpKXt2YXIgdD1oaXN0b3J5LnN0YXRlLmFuY2hvcjtcInN0cmluZ1wiPT10eXBlb2YgdCYmdCYmISh0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocihoaXN0b3J5LnN0YXRlLmFuY2hvcikpKXx8Qy5hbmltYXRlU2Nyb2xsKHQsbnVsbCx7dXBkYXRlVVJMOiExfSl9fTtDLmRlc3Ryb3k9ZnVuY3Rpb24oKXtiJiYoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdCwhMSksTS5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixuLCExKSxDLmNhbmNlbFNjcm9sbCgpLE89QT1hPWI9bnVsbCl9O3JldHVybiAoZnVuY3Rpb24oKXtpZighKFwicXVlcnlTZWxlY3RvclwiaW4gZG9jdW1lbnQmJlwiYWRkRXZlbnRMaXN0ZW5lclwiaW4gTSYmXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcImluIE0mJlwiY2xvc2VzdFwiaW4gTS5FbGVtZW50LnByb3RvdHlwZSkpdGhyb3dcIlNtb290aCBTY3JvbGw6IFRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1aXJlZCBKYXZhU2NyaXB0IG1ldGhvZHMgYW5kIGJyb3dzZXIgQVBJcy5cIjtDLmRlc3Ryb3koKSxiPUkocSxlfHx7fSksQT1iLmhlYWRlcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGIuaGVhZGVyKTpudWxsLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHQsITEpLGIudXBkYXRlVVJMJiZiLnBvcHN0YXRlJiZNLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLG4sITEpfSkoKSxDfX0pKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvc21vb3RoLXNjcm9sbFxuXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gXCJzbW9vdGgtc2Nyb2xsXCI7XG5cbm5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xuICBzcGVlZDogMzAwLFxuICB1cGRhdGVVUkw6IGZhbHNlLFxufSk7XG4iLCIvKipcbiAqIEFuaW1hdGVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiAtIGFkZCBjbGFzcyB0byBlbGVtZW50IGluIHZpZXdwb3J0XG4gKi9cblxuY29uc3QgUkFUSU8gPSBcIjAuNzVcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbmltYXRlXCIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5zY3JvbGxIYW5kbGVyLCBmYWxzZSk7XG5cbiAgICB0aGlzLnNjcm9sbEhhbmRsZXIoKTtcbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFuaW1hdGU6bm90KC5hbmltYXRlLS12aXNpYmxlKVwiKSkgcmV0dXJuO1xuXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuc2VjdGlvbnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0ICogUkFUSU8gJiZcbiAgICAgICAgc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAwXG4gICAgICApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS0tdmlzaWJsZVwiKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbm5ldyBBbmltYXRlKCk7XG4iLCIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG5cdHZhciBsYXp5U2l6ZXMgPSBmYWN0b3J5KHdpbmRvdywgd2luZG93LmRvY3VtZW50LCBEYXRlKTtcblx0d2luZG93LmxhenlTaXplcyA9IGxhenlTaXplcztcblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBsYXp5U2l6ZXM7XG5cdH1cbn0odHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/XG4gICAgICB3aW5kb3cgOiB7fSwgZnVuY3Rpb24gbCh3aW5kb3csIGRvY3VtZW50LCBEYXRlKSB7IC8vIFBhc3MgaW4gdGhlIHdpbmRvZSBEYXRlIGZ1bmN0aW9uIGFsc28gZm9yIFNTUiBiZWNhdXNlIHRoZSBEYXRlIGNsYXNzIGNhbiBiZSBsb3N0XG5cdCd1c2Ugc3RyaWN0Jztcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblxuXHR2YXIgbGF6eXNpemVzLCBsYXp5U2l6ZXNDZmc7XG5cblx0KGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHByb3A7XG5cblx0XHR2YXIgbGF6eVNpemVzRGVmYXVsdHMgPSB7XG5cdFx0XHRsYXp5Q2xhc3M6ICdsYXp5bG9hZCcsXG5cdFx0XHRsb2FkZWRDbGFzczogJ2xhenlsb2FkZWQnLFxuXHRcdFx0bG9hZGluZ0NsYXNzOiAnbGF6eWxvYWRpbmcnLFxuXHRcdFx0cHJlbG9hZENsYXNzOiAnbGF6eXByZWxvYWQnLFxuXHRcdFx0ZXJyb3JDbGFzczogJ2xhenllcnJvcicsXG5cdFx0XHQvL3N0cmljdENsYXNzOiAnbGF6eXN0cmljdCcsXG5cdFx0XHRhdXRvc2l6ZXNDbGFzczogJ2xhenlhdXRvc2l6ZXMnLFxuXHRcdFx0c3JjQXR0cjogJ2RhdGEtc3JjJyxcblx0XHRcdHNyY3NldEF0dHI6ICdkYXRhLXNyY3NldCcsXG5cdFx0XHRzaXplc0F0dHI6ICdkYXRhLXNpemVzJyxcblx0XHRcdC8vcHJlbG9hZEFmdGVyTG9hZDogZmFsc2UsXG5cdFx0XHRtaW5TaXplOiA0MCxcblx0XHRcdGN1c3RvbU1lZGlhOiB7fSxcblx0XHRcdGluaXQ6IHRydWUsXG5cdFx0XHRleHBGYWN0b3I6IDEuNSxcblx0XHRcdGhGYWM6IDAuOCxcblx0XHRcdGxvYWRNb2RlOiAyLFxuXHRcdFx0bG9hZEhpZGRlbjogdHJ1ZSxcblx0XHRcdHJpY1RpbWVvdXQ6IDAsXG5cdFx0XHR0aHJvdHRsZURlbGF5OiAxMjUsXG5cdFx0fTtcblxuXHRcdGxhenlTaXplc0NmZyA9IHdpbmRvdy5sYXp5U2l6ZXNDb25maWcgfHwgd2luZG93LmxhenlzaXplc0NvbmZpZyB8fCB7fTtcblxuXHRcdGZvcihwcm9wIGluIGxhenlTaXplc0RlZmF1bHRzKXtcblx0XHRcdGlmKCEocHJvcCBpbiBsYXp5U2l6ZXNDZmcpKXtcblx0XHRcdFx0bGF6eVNpemVzQ2ZnW3Byb3BdID0gbGF6eVNpemVzRGVmYXVsdHNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9KSgpO1xuXG5cdGlmICghZG9jdW1lbnQgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5pdDogZnVuY3Rpb24gKCkge30sXG5cdFx0XHRjZmc6IGxhenlTaXplc0NmZyxcblx0XHRcdG5vU3VwcG9ydDogdHJ1ZSxcblx0XHR9O1xuXHR9XG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblx0dmFyIHN1cHBvcnRQaWN0dXJlID0gd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHR2YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG5cblx0dmFyIF9nZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJztcblxuXHQvKipcblx0ICogVXBkYXRlIHRvIGJpbmQgdG8gd2luZG93IGJlY2F1c2UgJ3RoaXMnIGJlY29tZXMgbnVsbCBkdXJpbmcgU1NSXG5cdCAqIGJ1aWxkcy5cblx0ICovXG5cdHZhciBhZGRFdmVudExpc3RlbmVyID0gd2luZG93W19hZGRFdmVudExpc3RlbmVyXS5iaW5kKHdpbmRvdyk7XG5cblx0dmFyIHNldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcblxuXHR2YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0SWRsZUNhbGxiYWNrID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5cblx0dmFyIHJlZ1BpY3R1cmUgPSAvXnBpY3R1cmUkL2k7XG5cblx0dmFyIGxvYWRFdmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InLCAnbGF6eWluY2x1ZGVkJywgJ19sYXp5bG9hZGVkJ107XG5cblx0dmFyIHJlZ0NsYXNzQ2FjaGUgPSB7fTtcblxuXHR2YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG5cdHZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYoIXJlZ0NsYXNzQ2FjaGVbY2xzXSl7XG5cdFx0XHRyZWdDbGFzc0NhY2hlW2Nsc10gPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdDbGFzc0NhY2hlW2Nsc10udGVzdChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpICYmIHJlZ0NsYXNzQ2FjaGVbY2xzXTtcblx0fTtcblxuXHR2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdGlmICghaGFzQ2xhc3MoZWxlLCBjbHMpKXtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykudHJpbSgpICsgJyAnICsgY2xzKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHR2YXIgcmVnO1xuXHRcdGlmICgocmVnID0gaGFzQ2xhc3MoZWxlLGNscykpKSB7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnJlcGxhY2UocmVnLCAnICcpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIGFkZFJlbW92ZUxvYWRFdmVudHMgPSBmdW5jdGlvbihkb20sIGZuLCBhZGQpe1xuXHRcdHZhciBhY3Rpb24gPSBhZGQgPyBfYWRkRXZlbnRMaXN0ZW5lciA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblx0XHRpZihhZGQpe1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhkb20sIGZuKTtcblx0XHR9XG5cdFx0bG9hZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2dCl7XG5cdFx0XHRkb21bYWN0aW9uXShldnQsIGZuKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgdHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZWxlbSwgbmFtZSwgZGV0YWlsLCBub0J1YmJsZXMsIG5vQ2FuY2VsYWJsZSl7XG5cdFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cblx0XHRpZighZGV0YWlsKXtcblx0XHRcdGRldGFpbCA9IHt9O1xuXHRcdH1cblxuXHRcdGRldGFpbC5pbnN0YW5jZSA9IGxhenlzaXplcztcblxuXHRcdGV2ZW50LmluaXRFdmVudChuYW1lLCAhbm9CdWJibGVzLCAhbm9DYW5jZWxhYmxlKTtcblxuXHRcdGV2ZW50LmRldGFpbCA9IGRldGFpbDtcblxuXHRcdGVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0cmV0dXJuIGV2ZW50O1xuXHR9O1xuXG5cdHZhciB1cGRhdGVQb2x5ZmlsbCA9IGZ1bmN0aW9uIChlbCwgZnVsbCl7XG5cdFx0dmFyIHBvbHlmaWxsO1xuXHRcdGlmKCAhc3VwcG9ydFBpY3R1cmUgJiYgKCBwb2x5ZmlsbCA9ICh3aW5kb3cucGljdHVyZWZpbGwgfHwgbGF6eVNpemVzQ2ZnLnBmKSApICl7XG5cdFx0XHRpZihmdWxsICYmIGZ1bGwuc3JjICYmICFlbFtfZ2V0QXR0cmlidXRlXSgnc3Jjc2V0Jykpe1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIGZ1bGwuc3JjKTtcblx0XHRcdH1cblx0XHRcdHBvbHlmaWxsKHtyZWV2YWx1YXRlOiB0cnVlLCBlbGVtZW50czogW2VsXX0pO1xuXHRcdH0gZWxzZSBpZihmdWxsICYmIGZ1bGwuc3JjKXtcblx0XHRcdGVsLnNyYyA9IGZ1bGwuc3JjO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgZ2V0Q1NTID0gZnVuY3Rpb24gKGVsZW0sIHN0eWxlKXtcblx0XHRyZXR1cm4gKGdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCkgfHwge30pW3N0eWxlXTtcblx0fTtcblxuXHR2YXIgZ2V0V2lkdGggPSBmdW5jdGlvbihlbGVtLCBwYXJlbnQsIHdpZHRoKXtcblx0XHR3aWR0aCA9IHdpZHRoIHx8IGVsZW0ub2Zmc2V0V2lkdGg7XG5cblx0XHR3aGlsZSh3aWR0aCA8IGxhenlTaXplc0NmZy5taW5TaXplICYmIHBhcmVudCAmJiAhZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xuXHRcdFx0d2lkdGggPSAgcGFyZW50Lm9mZnNldFdpZHRoO1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXG5cdHZhciByQUYgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgcnVubmluZywgd2FpdGluZztcblx0XHR2YXIgZmlyc3RGbnMgPSBbXTtcblx0XHR2YXIgc2Vjb25kRm5zID0gW107XG5cdFx0dmFyIGZucyA9IGZpcnN0Rm5zO1xuXG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgcnVuRm5zID0gZm5zO1xuXG5cdFx0XHRmbnMgPSBmaXJzdEZucy5sZW5ndGggPyBzZWNvbmRGbnMgOiBmaXJzdEZucztcblxuXHRcdFx0cnVubmluZyA9IHRydWU7XG5cdFx0XHR3YWl0aW5nID0gZmFsc2U7XG5cblx0XHRcdHdoaWxlKHJ1bkZucy5sZW5ndGgpe1xuXHRcdFx0XHRydW5GbnMuc2hpZnQoKSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHZhciByYWZCYXRjaCA9IGZ1bmN0aW9uKGZuLCBxdWV1ZSl7XG5cdFx0XHRpZihydW5uaW5nICYmICFxdWV1ZSl7XG5cdFx0XHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmbnMucHVzaChmbik7XG5cblx0XHRcdFx0aWYoIXdhaXRpbmcpe1xuXHRcdFx0XHRcdHdhaXRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdChkb2N1bWVudC5oaWRkZW4gPyBzZXRUaW1lb3V0IDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKShydW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJhZkJhdGNoLl9sc0ZsdXNoID0gcnVuO1xuXG5cdFx0cmV0dXJuIHJhZkJhdGNoO1xuXHR9KSgpO1xuXG5cdHZhciByQUZJdCA9IGZ1bmN0aW9uKGZuLCBzaW1wbGUpe1xuXHRcdHJldHVybiBzaW1wbGUgP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJBRihmbik7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0XHRcdHJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQ7XG5cdH07XG5cblx0dmFyIHRocm90dGxlID0gZnVuY3Rpb24oZm4pe1xuXHRcdHZhciBydW5uaW5nO1xuXHRcdHZhciBsYXN0VGltZSA9IDA7XG5cdFx0dmFyIGdEZWxheSA9IGxhenlTaXplc0NmZy50aHJvdHRsZURlbGF5O1xuXHRcdHZhciBySUNUaW1lb3V0ID0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQ7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRsYXN0VGltZSA9IERhdGUubm93KCk7XG5cdFx0XHRmbigpO1xuXHRcdH07XG5cdFx0dmFyIGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgcklDVGltZW91dCA+IDQ5ID9cblx0XHRcdGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJlcXVlc3RJZGxlQ2FsbGJhY2socnVuLCB7dGltZW91dDogcklDVGltZW91dH0pO1xuXG5cdFx0XHRcdGlmKHJJQ1RpbWVvdXQgIT09IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0KXtcblx0XHRcdFx0XHRySUNUaW1lb3V0ID0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gOlxuXHRcdFx0ckFGSXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0c2V0VGltZW91dChydW4pO1xuXHRcdFx0fSwgdHJ1ZSlcblx0XHQ7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oaXNQcmlvcml0eSl7XG5cdFx0XHR2YXIgZGVsYXk7XG5cblx0XHRcdGlmKChpc1ByaW9yaXR5ID0gaXNQcmlvcml0eSA9PT0gdHJ1ZSkpe1xuXHRcdFx0XHRySUNUaW1lb3V0ID0gMzM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHJ1bm5pbmcpe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSAgdHJ1ZTtcblxuXHRcdFx0ZGVsYXkgPSBnRGVsYXkgLSAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lKTtcblxuXHRcdFx0aWYoZGVsYXkgPCAwKXtcblx0XHRcdFx0ZGVsYXkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihpc1ByaW9yaXR5IHx8IGRlbGF5IDwgOSl7XG5cdFx0XHRcdGlkbGVDYWxsYmFjaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VGltZW91dChpZGxlQ2FsbGJhY2ssIGRlbGF5KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdC8vYmFzZWQgb24gaHR0cDovL21vZGVybmphdmFzY3JpcHQuYmxvZ3Nwb3QuZGUvMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jKSB7XG5cdFx0dmFyIHRpbWVvdXQsIHRpbWVzdGFtcDtcblx0XHR2YXIgd2FpdCA9IDk5O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRmdW5jKCk7XG5cdFx0fTtcblx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0aWYgKGxhc3QgPCB3YWl0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdChyZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IHJ1bikocnVuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdHZhciBsb2FkZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJlbG9hZEVsZW1zLCBpc0NvbXBsZXRlZCwgcmVzZXRQcmVsb2FkaW5nVGltZXIsIGxvYWRNb2RlLCBzdGFydGVkO1xuXG5cdFx0dmFyIGVMdlcsIGVsdkgsIGVMdG9wLCBlTGxlZnQsIGVMcmlnaHQsIGVMYm90dG9tLCBpc0JvZHlIaWRkZW47XG5cblx0XHR2YXIgcmVnSW1nID0gL15pbWckL2k7XG5cdFx0dmFyIHJlZ0lmcmFtZSA9IC9eaWZyYW1lJC9pO1xuXG5cdFx0dmFyIHN1cHBvcnRTY3JvbGwgPSAoJ29uc2Nyb2xsJyBpbiB3aW5kb3cpICYmICEoLyhnbGV8aW5nKWJvdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG5cblx0XHR2YXIgc2hyaW5rRXhwYW5kID0gMDtcblx0XHR2YXIgY3VycmVudEV4cGFuZCA9IDA7XG5cblx0XHR2YXIgaXNMb2FkaW5nID0gMDtcblx0XHR2YXIgbG93UnVucyA9IC0xO1xuXG5cdFx0dmFyIHJlc2V0UHJlbG9hZGluZyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XG5cdFx0XHRcdGlzTG9hZGluZyA9IDA7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0aWYgKGlzQm9keUhpZGRlbiA9PSBudWxsKSB7XG5cdFx0XHRcdGlzQm9keUhpZGRlbiA9IGdldENTUyhkb2N1bWVudC5ib2R5LCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXNCb2R5SGlkZGVuIHx8ICEoZ2V0Q1NTKGVsZW0ucGFyZW50Tm9kZSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJyAmJiBnZXRDU1MoZWxlbSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJyk7XG5cdFx0fTtcblxuXHRcdHZhciBpc05lc3RlZFZpc2libGUgPSBmdW5jdGlvbihlbGVtLCBlbGVtRXhwYW5kKXtcblx0XHRcdHZhciBvdXRlclJlY3Q7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbTtcblx0XHRcdHZhciB2aXNpYmxlID0gaXNWaXNpYmxlKGVsZW0pO1xuXG5cdFx0XHRlTHRvcCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxib3R0b20gKz0gZWxlbUV4cGFuZDtcblx0XHRcdGVMbGVmdCAtPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxyaWdodCArPSBlbGVtRXhwYW5kO1xuXG5cdFx0XHR3aGlsZSh2aXNpYmxlICYmIChwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50KSAmJiBwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJiBwYXJlbnQgIT0gZG9jRWxlbSl7XG5cdFx0XHRcdHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcblxuXHRcdFx0XHRpZih2aXNpYmxlICYmIGdldENTUyhwYXJlbnQsICdvdmVyZmxvdycpICE9ICd2aXNpYmxlJyl7XG5cdFx0XHRcdFx0b3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHZpc2libGUgPSBlTHJpZ2h0ID4gb3V0ZXJSZWN0LmxlZnQgJiZcblx0XHRcdFx0XHRcdGVMbGVmdCA8IG91dGVyUmVjdC5yaWdodCAmJlxuXHRcdFx0XHRcdFx0ZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxuXHRcdFx0XHRcdFx0ZUx0b3AgPCBvdXRlclJlY3QuYm90dG9tICsgMVxuXHRcdFx0XHRcdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmlzaWJsZTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlTGxlbiwgaSwgcmVjdCwgYXV0b0xvYWRFbGVtLCBsb2FkZWRTb21ldGhpbmcsIGVsZW1FeHBhbmQsIGVsZW1OZWdhdGl2ZUV4cGFuZCwgZWxlbUV4cGFuZFZhbCxcblx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsLCBkZWZhdWx0RXhwYW5kLCBwcmVsb2FkRXhwYW5kLCBoRmFjO1xuXHRcdFx0dmFyIGxhenlsb2FkRWxlbXMgPSBsYXp5c2l6ZXMuZWxlbWVudHM7XG5cblx0XHRcdGlmKChsb2FkTW9kZSA9IGxhenlTaXplc0NmZy5sb2FkTW9kZSkgJiYgaXNMb2FkaW5nIDwgOCAmJiAoZUxsZW4gPSBsYXp5bG9hZEVsZW1zLmxlbmd0aCkpe1xuXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdGxvd1J1bnMrKztcblxuXHRcdFx0XHRmb3IoOyBpIDwgZUxsZW47IGkrKyl7XG5cblx0XHRcdFx0XHRpZighbGF6eWxvYWRFbGVtc1tpXSB8fCBsYXp5bG9hZEVsZW1zW2ldLl9sYXp5UmFjZSl7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIXN1cHBvcnRTY3JvbGwgfHwgKGxhenlzaXplcy5wcmVtYXR1cmVVbnZlaWwgJiYgbGF6eXNpemVzLnByZW1hdHVyZVVudmVpbChsYXp5bG9hZEVsZW1zW2ldKSkpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxuXG5cdFx0XHRcdFx0aWYoIShlbGVtRXhwYW5kVmFsID0gbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1leHBhbmQnKSkgfHwgIShlbGVtRXhwYW5kID0gZWxlbUV4cGFuZFZhbCAqIDEpKXtcblx0XHRcdFx0XHRcdGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghZGVmYXVsdEV4cGFuZCkge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdEV4cGFuZCA9ICghbGF6eVNpemVzQ2ZnLmV4cGFuZCB8fCBsYXp5U2l6ZXNDZmcuZXhwYW5kIDwgMSkgP1xuXHRcdFx0XHRcdFx0XHRkb2NFbGVtLmNsaWVudEhlaWdodCA+IDUwMCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID4gNTAwID8gNTAwIDogMzcwIDpcblx0XHRcdFx0XHRcdFx0bGF6eVNpemVzQ2ZnLmV4cGFuZDtcblxuXHRcdFx0XHRcdFx0bGF6eXNpemVzLl9kZWZFeCA9IGRlZmF1bHRFeHBhbmQ7XG5cblx0XHRcdFx0XHRcdHByZWxvYWRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kICogbGF6eVNpemVzQ2ZnLmV4cEZhY3Rvcjtcblx0XHRcdFx0XHRcdGhGYWMgPSBsYXp5U2l6ZXNDZmcuaEZhYztcblx0XHRcdFx0XHRcdGlzQm9keUhpZGRlbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGlmKGN1cnJlbnRFeHBhbmQgPCBwcmVsb2FkRXhwYW5kICYmIGlzTG9hZGluZyA8IDEgJiYgbG93UnVucyA+IDIgJiYgbG9hZE1vZGUgPiAyICYmICFkb2N1bWVudC5oaWRkZW4pe1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gcHJlbG9hZEV4cGFuZDtcblx0XHRcdFx0XHRcdFx0bG93UnVucyA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYobG9hZE1vZGUgPiAxICYmIGxvd1J1bnMgPiAxICYmIGlzTG9hZGluZyA8IDYpe1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gZGVmYXVsdEV4cGFuZDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBzaHJpbmtFeHBhbmQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoYmVmb3JlRXhwYW5kVmFsICE9PSBlbGVtRXhwYW5kKXtcblx0XHRcdFx0XHRcdGVMdlcgPSBpbm5lcldpZHRoICsgKGVsZW1FeHBhbmQgKiBoRmFjKTtcblx0XHRcdFx0XHRcdGVsdkggPSBpbm5lckhlaWdodCArIGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0XHRlbGVtTmVnYXRpdmVFeHBhbmQgPSBlbGVtRXhwYW5kICogLTE7XG5cdFx0XHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwgPSBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlY3QgPSBsYXp5bG9hZEVsZW1zW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRcdFx0aWYgKChlTGJvdHRvbSA9IHJlY3QuYm90dG9tKSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgJiZcblx0XHRcdFx0XHRcdChlTHRvcCA9IHJlY3QudG9wKSA8PSBlbHZIICYmXG5cdFx0XHRcdFx0XHQoZUxyaWdodCA9IHJlY3QucmlnaHQpID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAqIGhGYWMgJiZcblx0XHRcdFx0XHRcdChlTGxlZnQgPSByZWN0LmxlZnQpIDw9IGVMdlcgJiZcblx0XHRcdFx0XHRcdChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgJiZcblx0XHRcdFx0XHRcdChsYXp5U2l6ZXNDZmcubG9hZEhpZGRlbiB8fCBpc1Zpc2libGUobGF6eWxvYWRFbGVtc1tpXSkpICYmXG5cdFx0XHRcdFx0XHQoKGlzQ29tcGxldGVkICYmIGlzTG9hZGluZyA8IDMgJiYgIWVsZW1FeHBhbmRWYWwgJiYgKGxvYWRNb2RlIDwgMyB8fCBsb3dSdW5zIDwgNCkpIHx8IGlzTmVzdGVkVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldLCBlbGVtRXhwYW5kKSkpe1xuXHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtcblx0XHRcdFx0XHRcdGxvYWRlZFNvbWV0aGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZihpc0xvYWRpbmcgPiA5KXticmVhazt9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKCFsb2FkZWRTb21ldGhpbmcgJiYgaXNDb21wbGV0ZWQgJiYgIWF1dG9Mb2FkRWxlbSAmJlxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nIDwgNCAmJiBsb3dSdW5zIDwgNCAmJiBsb2FkTW9kZSA+IDIgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eVNpemVzQ2ZnLnByZWxvYWRBZnRlckxvYWQpICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8ICghZWxlbUV4cGFuZFZhbCAmJiAoKGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSB8fCBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zaXplc0F0dHIpICE9ICdhdXRvJykpKSl7XG5cdFx0XHRcdFx0XHRhdXRvTG9hZEVsZW0gPSBwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eWxvYWRFbGVtc1tpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihhdXRvTG9hZEVsZW0gJiYgIWxvYWRlZFNvbWV0aGluZyl7XG5cdFx0XHRcdFx0dW52ZWlsRWxlbWVudChhdXRvTG9hZEVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB0aHJvdHRsZWRDaGVja0VsZW1lbnRzID0gdGhyb3R0bGUoY2hlY2tFbGVtZW50cyk7XG5cblx0XHR2YXIgc3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZWxlbSA9IGUudGFyZ2V0O1xuXG5cdFx0XHRpZiAoZWxlbS5fbGF6eUNhY2hlKSB7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmVzZXRQcmVsb2FkaW5nKGUpO1xuXHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRlZENsYXNzKTtcblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdFx0dHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5bG9hZGVkJyk7XG5cdFx0fTtcblx0XHR2YXIgcmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MgPSByQUZJdChzd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuXHRcdHZhciByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzKHt0YXJnZXQ6IGUudGFyZ2V0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBjaGFuZ2VJZnJhbWVTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpe1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZWxlbS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3JjKTtcblx0XHRcdH0gY2F0Y2goZSl7XG5cdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaGFuZGxlU291cmNlcyA9IGZ1bmN0aW9uKHNvdXJjZSl7XG5cdFx0XHR2YXIgY3VzdG9tTWVkaWE7XG5cblx0XHRcdHZhciBzb3VyY2VTcmNzZXQgPSBzb3VyY2VbX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXG5cdFx0XHRpZiggKGN1c3RvbU1lZGlhID0gbGF6eVNpemVzQ2ZnLmN1c3RvbU1lZGlhW3NvdXJjZVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1tZWRpYScpIHx8IHNvdXJjZVtfZ2V0QXR0cmlidXRlXSgnbWVkaWEnKV0pICl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3VzdG9tTWVkaWEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzb3VyY2VTcmNzZXQpe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzb3VyY2VTcmNzZXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgbGF6eVVudmVpbCA9IHJBRkl0KGZ1bmN0aW9uIChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKXtcblx0XHRcdHZhciBzcmMsIHNyY3NldCwgcGFyZW50LCBpc1BpY3R1cmUsIGV2ZW50LCBmaXJlc0xvYWQ7XG5cblx0XHRcdGlmKCEoZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmV1bnZlaWwnLCBkZXRhaWwpKS5kZWZhdWx0UHJldmVudGVkKXtcblxuXHRcdFx0XHRpZihzaXplcyl7XG5cdFx0XHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHNpemVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcmNzZXQgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcblx0XHRcdFx0c3JjID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3JjQXR0cik7XG5cblx0XHRcdFx0aWYoaXNJbWcpIHtcblx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aXNQaWN0dXJlID0gcGFyZW50ICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZmlyZXNMb2FkID0gZGV0YWlsLmZpcmVzTG9hZCB8fCAoKCdzcmMnIGluIGVsZW0pICYmIChzcmNzZXQgfHwgc3JjIHx8IGlzUGljdHVyZSkpO1xuXG5cdFx0XHRcdGV2ZW50ID0ge3RhcmdldDogZWxlbX07XG5cblx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cblx0XHRcdFx0aWYoZmlyZXNMb2FkKXtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQocmVzZXRQcmVsb2FkaW5nVGltZXIpO1xuXHRcdFx0XHRcdHJlc2V0UHJlbG9hZGluZ1RpbWVyID0gc2V0VGltZW91dChyZXNldFByZWxvYWRpbmcsIDI1MDApO1xuXHRcdFx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzUGljdHVyZSl7XG5cdFx0XHRcdFx0Zm9yRWFjaC5jYWxsKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGhhbmRsZVNvdXJjZXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoc3Jjc2V0KXtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc3Jjc2V0KTtcblx0XHRcdFx0fSBlbHNlIGlmKHNyYyAmJiAhaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRpZihyZWdJZnJhbWUudGVzdChlbGVtLm5vZGVOYW1lKSl7XG5cdFx0XHRcdFx0XHRjaGFuZ2VJZnJhbWVTcmMoZWxlbSwgc3JjKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNJbWcgJiYgKHNyY3NldCB8fCBpc1BpY3R1cmUpKXtcblx0XHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCB7c3JjOiBzcmN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbGVtLl9sYXp5UmFjZSl7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5UmFjZTtcblx0XHRcdH1cblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xuXG5cdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gUGFydCBvZiB0aGlzIGNhbiBiZSByZW1vdmVkIGFzIHNvb24gYXMgdGhpcyBmaXggaXMgb2xkZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3MzEgKDIwMTUpXG5cdFx0XHRcdHZhciBpc0xvYWRlZCA9IGVsZW0uY29tcGxldGUgJiYgZWxlbS5uYXR1cmFsV2lkdGggPiAxO1xuXG5cdFx0XHRcdGlmKCAhZmlyZXNMb2FkIHx8IGlzTG9hZGVkKXtcblx0XHRcdFx0XHRpZiAoaXNMb2FkZWQpIHtcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sICdscy1pcy1jYWNoZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3dpdGNoTG9hZGluZ0NsYXNzKGV2ZW50KTtcblx0XHRcdFx0XHRlbGVtLl9sYXp5Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdGlmICgnX2xhenlDYWNoZScgaW4gZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtLmxvYWRpbmcgPT0gJ2xhenknKSB7XG5cdFx0XHRcdFx0aXNMb2FkaW5nLS07XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIHVudmVpbEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS5fbGF6eVJhY2UpIHtyZXR1cm47fVxuXHRcdFx0dmFyIGRldGFpbDtcblxuXHRcdFx0dmFyIGlzSW1nID0gcmVnSW1nLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG5cblx0XHRcdC8vYWxsb3cgdXNpbmcgc2l6ZXM9XCJhdXRvXCIsIGJ1dCBkb24ndCB1c2UuIGl0J3MgaW52YWxpZC4gVXNlIGRhdGEtc2l6ZXM9XCJhdXRvXCIgb3IgYSB2YWxpZCB2YWx1ZSBmb3Igc2l6ZXMgaW5zdGVhZCAoaS5lLjogc2l6ZXM9XCI4MHZ3XCIpXG5cdFx0XHR2YXIgc2l6ZXMgPSBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc2l6ZXNBdHRyKSB8fCBlbGVtW19nZXRBdHRyaWJ1dGVdKCdzaXplcycpKTtcblx0XHRcdHZhciBpc0F1dG8gPSBzaXplcyA9PSAnYXV0byc7XG5cblx0XHRcdGlmKCAoaXNBdXRvIHx8ICFpc0NvbXBsZXRlZCkgJiYgaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NyYycpIHx8IGVsZW0uc3Jjc2V0KSAmJiAhZWxlbS5jb21wbGV0ZSAmJiAhaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmVycm9yQ2xhc3MpICYmIGhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpKXtyZXR1cm47fVxuXG5cdFx0XHRkZXRhaWwgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenl1bnZlaWxyZWFkJykuZGV0YWlsO1xuXG5cdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHQgYXV0b1NpemVyLnVwZGF0ZUVsZW0oZWxlbSwgdHJ1ZSwgZWxlbS5vZmZzZXRXaWR0aCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uX2xhenlSYWNlID0gdHJ1ZTtcblx0XHRcdGlzTG9hZGluZysrO1xuXG5cdFx0XHRsYXp5VW52ZWlsKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpO1xuXHRcdH07XG5cblx0XHR2YXIgYWZ0ZXJTY3JvbGwgPSBkZWJvdW5jZShmdW5jdGlvbigpe1xuXHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMztcblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHR9KTtcblxuXHRcdHZhciBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYobGF6eVNpemVzQ2ZnLmxvYWRNb2RlID09IDMpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAyO1xuXHRcdFx0fVxuXHRcdFx0YWZ0ZXJTY3JvbGwoKTtcblx0XHR9O1xuXG5cdFx0dmFyIG9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihpc0NvbXBsZXRlZCl7cmV0dXJuO31cblx0XHRcdGlmKERhdGUubm93KCkgLSBzdGFydGVkIDwgOTk5KXtcblx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDk5OSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXG5cdFx0XHRpc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XG5cblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdF86IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRcdGxhenlzaXplcy5lbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cdFx0XHRcdHByZWxvYWRFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmxhenlDbGFzcyArICcgJyArIGxhenlTaXplc0NmZy5wcmVsb2FkQ2xhc3MpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRpZiAoZS5wZXJzaXN0ZWQpIHtcblx0XHRcdFx0XHRcdHZhciBsb2FkaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0XHRcdFx0XHRpZiAobG9hZGluZ0VsZW1lbnRzLmxlbmd0aCAmJiBsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKCBmdW5jdGlvbiAoaW1nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW1nLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVudmVpbEVsZW1lbnQoaW1nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZih3aW5kb3cuTXV0YXRpb25PYnNlcnZlcil7XG5cdFx0XHRcdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIHRocm90dGxlZENoZWNrRWxlbWVudHMgKS5vYnNlcnZlKCBkb2NFbGVtLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlfSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NQXR0ck1vZGlmaWVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0c2V0SW50ZXJ2YWwodGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgOTk5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHQvLywgJ2Z1bGxzY3JlZW5jaGFuZ2UnXG5cdFx0XHRcdFsnZm9jdXMnLCAnbW91c2VvdmVyJywgJ2NsaWNrJywgJ2xvYWQnLCAndHJhbnNpdGlvbmVuZCcsICdhbmltYXRpb25lbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXShuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYoKC9kJHxeYy8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkpe1xuXHRcdFx0XHRcdG9ubG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXSgnRE9NQ29udGVudExvYWRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCAyMDAwMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihsYXp5c2l6ZXMuZWxlbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRjaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdFx0ckFGLl9sc0ZsdXNoKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcblx0XHRcdHVudmVpbDogdW52ZWlsRWxlbWVudCxcblx0XHRcdF9hTFNMOiBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIsXG5cdFx0fTtcblx0fSkoKTtcblxuXG5cdHZhciBhdXRvU2l6ZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgYXV0b3NpemVzRWxlbXM7XG5cblx0XHR2YXIgc2l6ZUVsZW1lbnQgPSByQUZJdChmdW5jdGlvbihlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCl7XG5cdFx0XHR2YXIgc291cmNlcywgaSwgbGVuO1xuXHRcdFx0ZWxlbS5fbGF6eXNpemVzV2lkdGggPSB3aWR0aDtcblx0XHRcdHdpZHRoICs9ICdweCc7XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblxuXHRcdFx0aWYocmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJykpe1xuXHRcdFx0XHRzb3VyY2VzID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKTtcblx0XHRcdFx0Zm9yKGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRzb3VyY2VzW2ldLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIWV2ZW50LmRldGFpbC5kYXRhQXR0cil7XG5cdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIGV2ZW50LmRldGFpbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIGdldFNpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0sIGRhdGFBdHRyLCB3aWR0aCl7XG5cdFx0XHR2YXIgZXZlbnQ7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZihwYXJlbnQpe1xuXHRcdFx0XHR3aWR0aCA9IGdldFdpZHRoKGVsZW0sIHBhcmVudCwgd2lkdGgpO1xuXHRcdFx0XHRldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXNpemVzJywge3dpZHRoOiB3aWR0aCwgZGF0YUF0dHI6ICEhZGF0YUF0dHJ9KTtcblxuXHRcdFx0XHRpZighZXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG5cdFx0XHRcdFx0d2lkdGggPSBldmVudC5kZXRhaWwud2lkdGg7XG5cblx0XHRcdFx0XHRpZih3aWR0aCAmJiB3aWR0aCAhPT0gZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xuXHRcdFx0XHRcdFx0c2l6ZUVsZW1lbnQoZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdXBkYXRlRWxlbWVudHNTaXplcyA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgaTtcblx0XHRcdHZhciBsZW4gPSBhdXRvc2l6ZXNFbGVtcy5sZW5ndGg7XG5cdFx0XHRpZihsZW4pe1xuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRmb3IoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdGdldFNpemVFbGVtZW50KGF1dG9zaXplc0VsZW1zW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyA9IGRlYm91bmNlKHVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdF86IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGF1dG9zaXplc0VsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzKTtcblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzLFxuXHRcdFx0dXBkYXRlRWxlbTogZ2V0U2l6ZUVsZW1lbnRcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBpbml0ID0gZnVuY3Rpb24oKXtcblx0XHRpZighaW5pdC5pICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpe1xuXHRcdFx0aW5pdC5pID0gdHJ1ZTtcblx0XHRcdGF1dG9TaXplci5fKCk7XG5cdFx0XHRsb2FkZXIuXygpO1xuXHRcdH1cblx0fTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0aWYobGF6eVNpemVzQ2ZnLmluaXQpe1xuXHRcdFx0aW5pdCgpO1xuXHRcdH1cblx0fSk7XG5cblx0bGF6eXNpemVzID0ge1xuXHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxuXHRcdGxvYWRlcjogbG9hZGVyLFxuXHRcdGluaXQ6IGluaXQsXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxuXHRcdGFDOiBhZGRDbGFzcyxcblx0XHRyQzogcmVtb3ZlQ2xhc3MsXG5cdFx0aEM6IGhhc0NsYXNzLFxuXHRcdGZpcmU6IHRyaWdnZXJFdmVudCxcblx0XHRnVzogZ2V0V2lkdGgsXG5cdFx0ckFGOiByQUYsXG5cdH07XG5cblx0cmV0dXJuIGxhenlzaXplcztcbn1cbikpO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsInRoaXMiLCJTbW9vdGhTY3JvbGwiLCJzcGVlZCIsInVwZGF0ZVVSTCIsIlJBVElPIiwiQW5pbWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb25zIiwic2VjdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBQUE7Q0FDQSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBcUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXFCLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBT0EsY0FBTSxDQUFDQSxjQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQ0MsY0FBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUkscUJBQXFCLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsR0FBRyxRQUFRLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFLHVCQUF1QixHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFLLGdHQUFnRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztDQ0Q3eU07Q0FJQSxJQUFJQywwQkFBSixDQUFpQixjQUFqQixFQUFpQztDQUMvQkMsRUFBQUEsS0FBSyxFQUFFLEdBRHdCO0NBRS9CQyxFQUFBQSxTQUFTLEVBQUU7Q0FGb0IsQ0FBakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDSkE7Ozs7O0NBTUEsSUFBTUMsS0FBSyxHQUFHLE1BQWQ7S0FFYUMsT0FBYixHQUNFLG1CQUFjO0NBQUE7O0NBQUE7O0NBQUEseUNBUUUsWUFBTTtDQUNwQixRQUFJLENBQUNDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUNBQTFCLENBQUwsRUFBbUU7O0NBRC9DLCtDQUdFLEtBQUksQ0FBQ0MsUUFIUDtDQUFBOztDQUFBO0NBQUE7Q0FBQSxZQUdUQyxPQUhTOztDQUlsQixZQUNFQSxPQUFPLENBQUNDLHFCQUFSLEdBQWdDQyxHQUFoQyxJQUF1Q0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCVCxLQUE1RCxJQUNBSyxPQUFPLENBQUNDLHFCQUFSLEdBQWdDQyxHQUFoQyxHQUFzQyxDQUZ4QyxFQUdFO0NBQ0FHLFVBQUFBLFVBQVUsQ0FBQyxZQUFNO0NBQ2ZMLFlBQUFBLE9BQU8sQ0FBQ00sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isa0JBQXRCO0NBQ0QsV0FGUyxFQUVQLEdBRk8sQ0FBVjtDQUdEO0NBWGlCOztDQUdwQiwwREFBcUM7Q0FBQTtDQVNwQztDQVptQjtDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBYXJCLEdBckJhOztDQUNaLE9BQUtSLFFBQUwsR0FBZ0JGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBaEI7Q0FFQUssRUFBQUEsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxhQUF2QyxFQUFzRCxLQUF0RDtDQUVBLE9BQUtBLGFBQUw7Q0FDRCxDQVBIO0NBeUJBLElBQUliLE9BQUo7OztDQ2pDQSxDQUFDLFNBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRTtDQUMzQixDQUFDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUN4RCxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQzlCLENBQUMsSUFBZ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztDQUNoRCxFQUFFLGNBQWMsR0FBRyxTQUFTLENBQUM7Q0FDN0IsRUFBRTtDQUNGLENBQUMsQ0FBQyxPQUFPLE1BQU0sSUFBSSxXQUFXO0NBQzlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUV0RDtBQUNBO0NBQ0EsQ0FBQyxJQUFJLFNBQVMsRUFBRSxZQUFZLENBQUM7QUFDN0I7Q0FDQSxDQUFDLENBQUMsVUFBVTtDQUNaLEVBQUUsSUFBSSxJQUFJLENBQUM7QUFDWDtDQUNBLEVBQUUsSUFBSSxpQkFBaUIsR0FBRztDQUMxQixHQUFHLFNBQVMsRUFBRSxVQUFVO0NBQ3hCLEdBQUcsV0FBVyxFQUFFLFlBQVk7Q0FDNUIsR0FBRyxZQUFZLEVBQUUsYUFBYTtDQUM5QixHQUFHLFlBQVksRUFBRSxhQUFhO0NBQzlCLEdBQUcsVUFBVSxFQUFFLFdBQVc7Q0FDMUI7Q0FDQSxHQUFHLGNBQWMsRUFBRSxlQUFlO0NBQ2xDLEdBQUcsT0FBTyxFQUFFLFVBQVU7Q0FDdEIsR0FBRyxVQUFVLEVBQUUsYUFBYTtDQUM1QixHQUFHLFNBQVMsRUFBRSxZQUFZO0NBQzFCO0NBQ0EsR0FBRyxPQUFPLEVBQUUsRUFBRTtDQUNkLEdBQUcsV0FBVyxFQUFFLEVBQUU7Q0FDbEIsR0FBRyxJQUFJLEVBQUUsSUFBSTtDQUNiLEdBQUcsU0FBUyxFQUFFLEdBQUc7Q0FDakIsR0FBRyxJQUFJLEVBQUUsR0FBRztDQUNaLEdBQUcsUUFBUSxFQUFFLENBQUM7Q0FDZCxHQUFHLFVBQVUsRUFBRSxJQUFJO0NBQ25CLEdBQUcsVUFBVSxFQUFFLENBQUM7Q0FDaEIsR0FBRyxhQUFhLEVBQUUsR0FBRztDQUNyQixHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7QUFDeEU7Q0FDQSxFQUFFLElBQUksSUFBSSxJQUFJLGlCQUFpQixDQUFDO0NBQ2hDLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxZQUFZLENBQUMsQ0FBQztDQUM5QixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNqRCxJQUFJO0NBQ0osR0FBRztDQUNILEVBQUUsR0FBRyxDQUFDO0FBQ047Q0FDQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7Q0FDcEQsRUFBRSxPQUFPO0NBQ1QsR0FBRyxJQUFJLEVBQUUsWUFBWSxFQUFFO0NBQ3ZCLEdBQUcsR0FBRyxFQUFFLFlBQVk7Q0FDcEIsR0FBRyxTQUFTLEVBQUUsSUFBSTtDQUNsQixHQUFHLENBQUM7Q0FDSixFQUFFO0FBQ0Y7Q0FDQSxDQUFDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDeEM7Q0FDQSxDQUFDLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRDtDQUNBLENBQUMsSUFBSSxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztBQUM1QztDQUNBLENBQUMsSUFBSSxhQUFhLEdBQUcsY0FBYyxDQUFDO0FBQ3BDO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxDQUFDLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9EO0NBQ0EsQ0FBQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BDO0NBQ0EsQ0FBQyxJQUFJLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsSUFBSSxVQUFVLENBQUM7QUFDeEU7Q0FDQSxDQUFDLElBQUksbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0FBQ3REO0NBQ0EsQ0FBQyxJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDL0I7Q0FDQSxDQUFDLElBQUksVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkU7Q0FDQSxDQUFDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QjtDQUNBLENBQUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDdkM7Q0FDQSxDQUFDLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRTtDQUNuQyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDekIsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUM1RCxHQUFHO0NBQ0gsRUFBRSxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMxRixFQUFFLENBQUM7QUFDSDtDQUNBLENBQUMsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0NBQ25DLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDMUIsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ3JGLEdBQUc7Q0FDSCxFQUFFLENBQUM7QUFDSDtDQUNBLENBQUMsSUFBSSxXQUFXLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0NBQ3RDLEVBQUUsSUFBSSxHQUFHLENBQUM7Q0FDVixFQUFFLEtBQUssR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUc7Q0FDakMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ3BGLEdBQUc7Q0FDSCxFQUFFLENBQUM7QUFDSDtDQUNBLENBQUMsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQ2pELEVBQUUsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0NBQy9ELEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDVCxHQUFHLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNoQyxHQUFHO0NBQ0gsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDO0NBQ2xDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUN4QixHQUFHLENBQUMsQ0FBQztDQUNMLEVBQUUsQ0FBQztBQUNIO0NBQ0EsQ0FBQyxJQUFJLFlBQVksR0FBRyxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUM7Q0FDekUsRUFBRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDO0NBQ0EsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQ2IsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO0NBQ2YsR0FBRztBQUNIO0NBQ0EsRUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUM5QjtDQUNBLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRDtDQUNBLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDeEI7Q0FDQSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDNUIsRUFBRSxPQUFPLEtBQUssQ0FBQztDQUNmLEVBQUUsQ0FBQztBQUNIO0NBQ0EsQ0FBQyxJQUFJLGNBQWMsR0FBRyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUM7Q0FDekMsRUFBRSxJQUFJLFFBQVEsQ0FBQztDQUNmLEVBQUUsSUFBSSxDQUFDLGNBQWMsTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtDQUNqRixHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDdkQsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDeEMsSUFBSTtDQUNKLEdBQUcsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDaEQsR0FBRyxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7Q0FDN0IsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Q0FDckIsR0FBRztDQUNILEVBQUUsQ0FBQztBQUNIO0NBQ0EsQ0FBQyxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLENBQUM7Q0FDcEMsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNyRCxFQUFFLENBQUM7QUFDSDtDQUNBLENBQUMsSUFBSSxRQUFRLEdBQUcsU0FBUyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztDQUM3QyxFQUFFLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNwQztDQUNBLEVBQUUsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0NBQ3hFLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7Q0FDL0IsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztDQUM5QixHQUFHO0FBQ0g7Q0FDQSxFQUFFLE9BQU8sS0FBSyxDQUFDO0NBQ2YsRUFBRSxDQUFDO0FBQ0g7Q0FDQSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVTtDQUN0QixFQUFFLElBQUksT0FBTyxFQUFFLE9BQU8sQ0FBQztDQUN2QixFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztDQUNwQixFQUFFLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztDQUNyQixFQUFFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUNyQjtDQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUcsVUFBVTtDQUN0QixHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNwQjtDQUNBLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUNoRDtDQUNBLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztDQUNsQixHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDbkI7Q0FDQSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQztDQUN2QixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0NBQ3JCLElBQUk7QUFDSjtDQUNBLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztDQUNuQixHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDO0NBQ3BDLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Q0FDeEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztDQUM5QixJQUFJLE1BQU07Q0FDVixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakI7Q0FDQSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7Q0FDaEIsS0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNqRSxLQUFLO0NBQ0wsSUFBSTtDQUNKLEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUMxQjtDQUNBLEVBQUUsT0FBTyxRQUFRLENBQUM7Q0FDbEIsRUFBRSxHQUFHLENBQUM7QUFDTjtDQUNBLENBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDO0NBQ2pDLEVBQUUsT0FBTyxNQUFNO0NBQ2YsR0FBRyxXQUFXO0NBQ2QsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDWixJQUFJO0NBQ0osR0FBRyxVQUFVO0NBQ2IsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDcEIsSUFBSSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7Q0FDekIsSUFBSSxHQUFHLENBQUMsVUFBVTtDQUNsQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzFCLEtBQUssQ0FBQyxDQUFDO0NBQ1AsSUFBSTtDQUNKLEdBQUc7Q0FDSCxFQUFFLENBQUM7QUFDSDtDQUNBLENBQUMsSUFBSSxRQUFRLEdBQUcsU0FBUyxFQUFFLENBQUM7Q0FDNUIsRUFBRSxJQUFJLE9BQU8sQ0FBQztDQUNkLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0NBQ25CLEVBQUUsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztDQUMxQyxFQUFFLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7Q0FDM0MsRUFBRSxJQUFJLEdBQUcsR0FBRyxVQUFVO0NBQ3RCLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQztDQUNuQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDekIsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUNSLEdBQUcsQ0FBQztDQUNKLEVBQUUsSUFBSSxZQUFZLEdBQUcsbUJBQW1CLElBQUksVUFBVSxHQUFHLEVBQUU7Q0FDM0QsR0FBRyxVQUFVO0NBQ2IsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNwRDtDQUNBLElBQUksR0FBRyxVQUFVLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQztDQUM5QyxLQUFLLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO0NBQzFDLEtBQUs7Q0FDTCxJQUFJO0NBQ0osR0FBRyxLQUFLLENBQUMsVUFBVTtDQUNuQixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDO0NBQ1gsR0FBRztBQUNIO0NBQ0EsRUFBRSxPQUFPLFNBQVMsVUFBVSxDQUFDO0NBQzdCLEdBQUcsSUFBSSxLQUFLLENBQUM7QUFDYjtDQUNBLEdBQUcsSUFBSSxVQUFVLEdBQUcsVUFBVSxLQUFLLElBQUksRUFBRTtDQUN6QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7Q0FDcEIsSUFBSTtBQUNKO0NBQ0EsR0FBRyxHQUFHLE9BQU8sQ0FBQztDQUNkLElBQUksT0FBTztDQUNYLElBQUk7QUFDSjtDQUNBLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztBQUNuQjtDQUNBLEdBQUcsS0FBSyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDNUM7Q0FDQSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztDQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDZCxJQUFJO0FBQ0o7Q0FDQSxHQUFHLEdBQUcsVUFBVSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Q0FDOUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztDQUNuQixJQUFJLE1BQU07Q0FDVixJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDcEMsSUFBSTtDQUNKLEdBQUcsQ0FBQztDQUNKLEVBQUUsQ0FBQztBQUNIO0NBQ0E7Q0FDQSxDQUFDLElBQUksUUFBUSxHQUFHLFNBQVMsSUFBSSxFQUFFO0NBQy9CLEVBQUUsSUFBSSxPQUFPLEVBQUUsU0FBUyxDQUFDO0NBQ3pCLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0NBQ2hCLEVBQUUsSUFBSSxHQUFHLEdBQUcsVUFBVTtDQUN0QixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7Q0FDbEIsR0FBRyxJQUFJLEVBQUUsQ0FBQztDQUNWLEdBQUcsQ0FBQztDQUNKLEVBQUUsSUFBSSxLQUFLLEdBQUcsV0FBVztDQUN6QixHQUFHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDckM7Q0FDQSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtDQUNwQixJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQ25DLElBQUksTUFBTTtDQUNWLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDdEMsSUFBSTtDQUNKLEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxPQUFPLFdBQVc7Q0FDcEIsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCO0NBQ0EsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO0NBQ2pCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDdEMsSUFBSTtDQUNKLEdBQUcsQ0FBQztDQUNKLEVBQUUsQ0FBQztBQUNIO0NBQ0EsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVU7Q0FDekIsRUFBRSxJQUFJLFlBQVksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztBQUN6RTtDQUNBLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUM7QUFDakU7Q0FDQSxFQUFFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztDQUN4QixFQUFFLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUM5QjtDQUNBLEVBQUUsSUFBSSxhQUFhLEdBQUcsQ0FBQyxVQUFVLElBQUksTUFBTSxLQUFLLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1RjtDQUNBLEVBQUUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZCLEVBQUUsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCO0NBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7Q0FDcEIsRUFBRSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQjtDQUNBLEVBQUUsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7Q0FDbkMsR0FBRyxTQUFTLEVBQUUsQ0FBQztDQUNmLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztDQUN2QyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7Q0FDbEIsSUFBSTtDQUNKLEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxJQUFJLFNBQVMsR0FBRyxVQUFVLElBQUksRUFBRTtDQUNsQyxHQUFHLElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtDQUM3QixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxRQUFRLENBQUM7Q0FDbkUsSUFBSTtBQUNKO0NBQ0EsR0FBRyxPQUFPLFlBQVksSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0NBQ3pILEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxJQUFJLGVBQWUsR0FBRyxTQUFTLElBQUksRUFBRSxVQUFVLENBQUM7Q0FDbEQsR0FBRyxJQUFJLFNBQVMsQ0FBQztDQUNqQixHQUFHLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztDQUNyQixHQUFHLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQztDQUNBLEdBQUcsS0FBSyxJQUFJLFVBQVUsQ0FBQztDQUN2QixHQUFHLFFBQVEsSUFBSSxVQUFVLENBQUM7Q0FDMUIsR0FBRyxNQUFNLElBQUksVUFBVSxDQUFDO0NBQ3hCLEdBQUcsT0FBTyxJQUFJLFVBQVUsQ0FBQztBQUN6QjtDQUNBLEdBQUcsTUFBTSxPQUFPLEtBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDO0NBQ25HLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckQ7Q0FDQSxJQUFJLEdBQUcsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDO0NBQzFELEtBQUssU0FBUyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0NBQ2hELEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSTtDQUN2QyxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSztDQUM5QixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDbEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO0NBQ2xDLE1BQU07Q0FDTixLQUFLO0NBQ0wsSUFBSTtBQUNKO0NBQ0EsR0FBRyxPQUFPLE9BQU8sQ0FBQztDQUNsQixHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsSUFBSSxhQUFhLEdBQUcsV0FBVztDQUNqQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsYUFBYTtDQUNuRyxJQUFJLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQztDQUN4RCxHQUFHLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDMUM7Q0FDQSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsS0FBSyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUY7Q0FDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVjtDQUNBLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZDtDQUNBLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3pCO0NBQ0EsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDbkU7Q0FDQSxLQUFLLEdBQUcsQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2hKO0NBQ0EsS0FBSyxHQUFHLEVBQUUsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMvRyxNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUM7Q0FDakMsTUFBTTtBQUNOO0NBQ0EsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO0NBQ3pCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQztDQUN0RSxPQUFPLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0NBQzFFLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUMzQjtDQUNBLE1BQU0sU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDQSxNQUFNLGFBQWEsR0FBRyxhQUFhLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztDQUM3RCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO0NBQy9CLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztBQUMxQjtDQUNBLE1BQU0sR0FBRyxhQUFhLEdBQUcsYUFBYSxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztDQUMzRyxPQUFPLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDckMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0NBQ25CLE9BQU8sTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0NBQzdELE9BQU8sYUFBYSxHQUFHLGFBQWEsQ0FBQztDQUNyQyxPQUFPLE1BQU07Q0FDYixPQUFPLGFBQWEsR0FBRyxZQUFZLENBQUM7Q0FDcEMsT0FBTztDQUNQLE1BQU07QUFDTjtDQUNBLEtBQUssR0FBRyxlQUFlLEtBQUssVUFBVSxDQUFDO0NBQ3ZDLE1BQU0sSUFBSSxHQUFHLFVBQVUsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDOUMsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQztDQUN0QyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMzQyxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUM7Q0FDbkMsTUFBTTtBQUNOO0NBQ0EsS0FBSyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDckQ7Q0FDQSxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxrQkFBa0I7Q0FDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUk7Q0FDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLGtCQUFrQixHQUFHLElBQUk7Q0FDekQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUk7Q0FDbEMsT0FBTyxRQUFRLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUM7Q0FDOUMsT0FBTyxZQUFZLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM5RCxPQUFPLENBQUMsV0FBVyxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQzNJLE1BQU0sYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3RDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQztDQUM3QixNQUFNLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztDQUMvQixNQUFNLE1BQU0sR0FBRyxDQUFDLGVBQWUsSUFBSSxXQUFXLElBQUksQ0FBQyxZQUFZO0NBQy9ELE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDO0NBQ2xELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztDQUN4RCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksTUFBTSxJQUFJLEtBQUssS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMvSixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pELE1BQU07Q0FDTixLQUFLO0FBQ0w7Q0FDQSxJQUFJLEdBQUcsWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDO0NBQ3hDLEtBQUssYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQ2pDLEtBQUs7Q0FDTCxJQUFJO0NBQ0osR0FBRyxDQUFDO0FBQ0o7Q0FDQSxFQUFFLElBQUksc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZEO0NBQ0EsRUFBRSxJQUFJLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0NBQ3RDLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN2QjtDQUNBLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0NBQ3hCLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0NBQzNCLElBQUksT0FBTztDQUNYLElBQUk7QUFDSjtDQUNBLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3RCLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Q0FDNUMsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUNoRCxHQUFHLG1CQUFtQixDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0NBQ3BELEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztDQUNwQyxHQUFHLENBQUM7Q0FDSixFQUFFLElBQUksdUJBQXVCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDMUQsRUFBRSxJQUFJLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxDQUFDO0NBQ3pDLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDL0MsR0FBRyxDQUFDO0FBQ0o7Q0FDQSxFQUFFLElBQUksZUFBZSxHQUFHLFNBQVMsSUFBSSxFQUFFLEdBQUcsQ0FBQztDQUMzQyxHQUFHLElBQUk7Q0FDUCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDYixJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ25CLElBQUk7Q0FDSixHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsSUFBSSxhQUFhLEdBQUcsU0FBUyxNQUFNLENBQUM7Q0FDdEMsR0FBRyxJQUFJLFdBQVcsQ0FBQztBQUNuQjtDQUNBLEdBQUcsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRTtDQUNBLEdBQUcsS0FBSyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Q0FDeEgsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztDQUM5QyxJQUFJO0FBQ0o7Q0FDQSxHQUFHLEdBQUcsWUFBWSxDQUFDO0NBQ25CLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDaEQsSUFBSTtDQUNKLEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0NBQ3RFLEdBQUcsSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztBQUN4RDtDQUNBLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7QUFDakY7Q0FDQSxJQUFJLEdBQUcsS0FBSyxDQUFDO0NBQ2IsS0FBSyxHQUFHLE1BQU0sQ0FBQztDQUNmLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7Q0FDbEQsTUFBTSxNQUFNO0NBQ1osTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztDQUN4QyxNQUFNO0NBQ04sS0FBSztBQUNMO0NBQ0EsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztDQUMxRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BEO0NBQ0EsSUFBSSxHQUFHLEtBQUssRUFBRTtDQUNkLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Q0FDOUIsS0FBSyxTQUFTLEdBQUcsTUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNsRSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDdEY7Q0FDQSxJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQjtDQUNBLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUM7Q0FDQSxJQUFJLEdBQUcsU0FBUyxDQUFDO0NBQ2pCLEtBQUssWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Q0FDeEMsS0FBSyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzlELEtBQUssbUJBQW1CLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzVELEtBQUs7QUFDTDtDQUNBLElBQUksR0FBRyxTQUFTLENBQUM7Q0FDakIsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUN4RSxLQUFLO0FBQ0w7Q0FDQSxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQ2QsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN6QyxLQUFLLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Q0FDaEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3RDLE1BQU0sZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNqQyxNQUFNLE1BQU07Q0FDWixNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLE1BQU07Q0FDTixLQUFLO0FBQ0w7Q0FDQSxJQUFJLEdBQUcsS0FBSyxLQUFLLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQztDQUN0QyxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUN0QyxLQUFLO0NBQ0wsSUFBSTtBQUNKO0NBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Q0FDckIsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Q0FDMUIsSUFBSTtDQUNKLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0M7Q0FDQSxHQUFHLEdBQUcsQ0FBQyxVQUFVO0NBQ2pCO0NBQ0EsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzFEO0NBQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztDQUMvQixLQUFLLElBQUksUUFBUSxFQUFFO0NBQ25CLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztDQUNyQyxNQUFNO0NBQ04sS0FBSyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUMvQixLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0NBQzVCLEtBQUssVUFBVSxDQUFDLFVBQVU7Q0FDMUIsTUFBTSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7Q0FDaEMsT0FBTyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Q0FDOUIsT0FBTztDQUNQLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNYLEtBQUs7Q0FDTCxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUU7Q0FDaEMsS0FBSyxTQUFTLEVBQUUsQ0FBQztDQUNqQixLQUFLO0NBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ1osR0FBRyxDQUFDLENBQUM7QUFDTDtDQUNBLEVBQUUsSUFBSSxhQUFhLEdBQUcsVUFBVSxJQUFJLENBQUM7Q0FDckMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Q0FDaEMsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUNkO0NBQ0EsR0FBRyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQztDQUNBO0NBQ0EsR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUN0RyxHQUFHLElBQUksTUFBTSxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUM7QUFDaEM7Q0FDQSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDek07Q0FDQSxHQUFHLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3hEO0NBQ0EsR0FBRyxHQUFHLE1BQU0sQ0FBQztDQUNiLEtBQUssU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUN4RCxJQUFJO0FBQ0o7Q0FDQSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0NBQ3pCLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFDZjtDQUNBLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNsRCxHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLFVBQVU7Q0FDdkMsR0FBRyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztDQUM3QixHQUFHLHNCQUFzQixFQUFFLENBQUM7Q0FDNUIsR0FBRyxDQUFDLENBQUM7QUFDTDtDQUNBLEVBQUUsSUFBSSx3QkFBd0IsR0FBRyxVQUFVO0NBQzNDLEdBQUcsR0FBRyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztDQUNqQyxJQUFJLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0NBQzlCLElBQUk7Q0FDSixHQUFHLFdBQVcsRUFBRSxDQUFDO0NBQ2pCLEdBQUcsQ0FBQztBQUNKO0NBQ0EsRUFBRSxJQUFJLE1BQU0sR0FBRyxVQUFVO0NBQ3pCLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7Q0FDM0IsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO0NBQ2pDLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztDQUM1QixJQUFJLE9BQU87Q0FDWCxJQUFJO0FBQ0o7QUFDQTtDQUNBLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztBQUN0QjtDQUNBLEdBQUcsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDN0I7Q0FDQSxHQUFHLHNCQUFzQixFQUFFLENBQUM7QUFDNUI7Q0FDQSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUM5RCxHQUFHLENBQUM7QUFDSjtDQUNBLEVBQUUsT0FBTztDQUNULEdBQUcsQ0FBQyxFQUFFLFVBQVU7Q0FDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pCO0NBQ0EsSUFBSSxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Q0FDakYsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3RztDQUNBLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdEO0NBQ0EsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0Q7Q0FDQSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRTtDQUM5QyxLQUFLLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtDQUN0QixNQUFNLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZGO0NBQ0EsTUFBTSxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRTtDQUM3RCxPQUFPLHFCQUFxQixDQUFDLFlBQVk7Q0FDekMsUUFBUSxlQUFlLENBQUMsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFO0NBQ2hELFNBQVMsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO0NBQzNCLFVBQVUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzdCLFVBQVU7Q0FDVixTQUFTLENBQUMsQ0FBQztDQUNYLFFBQVEsQ0FBQyxDQUFDO0NBQ1YsT0FBTztDQUNQLE1BQU07Q0FDTixLQUFLLENBQUMsQ0FBQztBQUNQO0NBQ0EsSUFBSSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztDQUMvQixLQUFLLElBQUksZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO0NBQzNILEtBQUssTUFBTTtDQUNYLEtBQUssT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDakYsS0FBSyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNqRixLQUFLLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUM5QyxLQUFLO0FBQ0w7Q0FDQSxJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRTtDQUNBO0NBQ0EsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDO0NBQ25HLEtBQUssUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3JFLEtBQUssQ0FBQyxDQUFDO0FBQ1A7Q0FDQSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Q0FDM0MsS0FBSyxNQUFNLEVBQUUsQ0FBQztDQUNkLEtBQUssTUFBTTtDQUNYLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3RDLEtBQUssUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztDQUM3RSxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDL0IsS0FBSztBQUNMO0NBQ0EsSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0NBQ2pDLEtBQUssYUFBYSxFQUFFLENBQUM7Q0FDckIsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDcEIsS0FBSyxNQUFNO0NBQ1gsS0FBSyxzQkFBc0IsRUFBRSxDQUFDO0NBQzlCLEtBQUs7Q0FDTCxJQUFJO0NBQ0osR0FBRyxVQUFVLEVBQUUsc0JBQXNCO0NBQ3JDLEdBQUcsTUFBTSxFQUFFLGFBQWE7Q0FDeEIsR0FBRyxLQUFLLEVBQUUsd0JBQXdCO0NBQ2xDLEdBQUcsQ0FBQztDQUNKLEVBQUUsR0FBRyxDQUFDO0FBQ047QUFDQTtDQUNBLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxVQUFVO0NBQzVCLEVBQUUsSUFBSSxjQUFjLENBQUM7QUFDckI7Q0FDQSxFQUFFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztDQUM5RCxHQUFHLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDdkIsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztDQUNoQyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDakI7Q0FDQSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JDO0NBQ0EsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUM3QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDcEQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUNsRCxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzdDLEtBQUs7Q0FDTCxJQUFJO0FBQ0o7Q0FDQSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUM3QixJQUFJLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZDLElBQUk7Q0FDSixHQUFHLENBQUMsQ0FBQztDQUNMLEVBQUUsSUFBSSxjQUFjLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztDQUN2RCxHQUFHLElBQUksS0FBSyxDQUFDO0NBQ2IsR0FBRyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2hDO0NBQ0EsR0FBRyxHQUFHLE1BQU0sQ0FBQztDQUNiLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzFDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4RjtDQUNBLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztDQUMvQixLQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNoQztDQUNBLEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUM7Q0FDaEQsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDOUMsTUFBTTtDQUNOLEtBQUs7Q0FDTCxJQUFJO0NBQ0osR0FBRyxDQUFDO0FBQ0o7Q0FDQSxFQUFFLElBQUksbUJBQW1CLEdBQUcsVUFBVTtDQUN0QyxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQ1QsR0FBRyxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0NBQ25DLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVjtDQUNBLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3ZCLEtBQUssY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3ZDLEtBQUs7Q0FDTCxJQUFJO0NBQ0osR0FBRyxDQUFDO0FBQ0o7Q0FDQSxFQUFFLElBQUksNEJBQTRCLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkU7Q0FDQSxFQUFFLE9BQU87Q0FDVCxHQUFHLENBQUMsRUFBRSxVQUFVO0NBQ2hCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7Q0FDbEYsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztDQUM3RCxJQUFJO0NBQ0osR0FBRyxVQUFVLEVBQUUsNEJBQTRCO0NBQzNDLEdBQUcsVUFBVSxFQUFFLGNBQWM7Q0FDN0IsR0FBRyxDQUFDO0NBQ0osRUFBRSxHQUFHLENBQUM7QUFDTjtDQUNBLENBQUMsSUFBSSxJQUFJLEdBQUcsVUFBVTtDQUN0QixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztDQUNoRCxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQ2pCLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQ2pCLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQ2QsR0FBRztDQUNILEVBQUUsQ0FBQztBQUNIO0NBQ0EsQ0FBQyxVQUFVLENBQUMsVUFBVTtDQUN0QixFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztDQUN2QixHQUFHLElBQUksRUFBRSxDQUFDO0NBQ1YsR0FBRztDQUNILEVBQUUsQ0FBQyxDQUFDO0FBQ0o7Q0FDQSxDQUFDLFNBQVMsR0FBRztDQUNiLEVBQUUsR0FBRyxFQUFFLFlBQVk7Q0FDbkIsRUFBRSxTQUFTLEVBQUUsU0FBUztDQUN0QixFQUFFLE1BQU0sRUFBRSxNQUFNO0NBQ2hCLEVBQUUsSUFBSSxFQUFFLElBQUk7Q0FDWixFQUFFLEVBQUUsRUFBRSxjQUFjO0NBQ3BCLEVBQUUsRUFBRSxFQUFFLFFBQVE7Q0FDZCxFQUFFLEVBQUUsRUFBRSxXQUFXO0NBQ2pCLEVBQUUsRUFBRSxFQUFFLFFBQVE7Q0FDZCxFQUFFLElBQUksRUFBRSxZQUFZO0NBQ3BCLEVBQUUsRUFBRSxFQUFFLFFBQVE7Q0FDZCxFQUFFLEdBQUcsRUFBRSxHQUFHO0NBQ1YsRUFBRSxDQUFDO0FBQ0g7Q0FDQSxDQUFDLE9BQU8sU0FBUyxDQUFDO0NBQ2xCLENBQUM7Q0FDRCxDQUFDOzs7OzsifQ==
