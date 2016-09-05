/*! This file is created by realeve */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __SRC_DIR = "./src";
	__webpack_require__(1)(__SRC_DIR+"/css/jquery.fullPage.css");
	__webpack_require__(8)(__SRC_DIR+"/css/weui.css");
	__webpack_require__(15)(__SRC_DIR+"/css/jquery-weui.css");
	__webpack_require__(14)(__SRC_DIR+"/css/SentyZHAO.css");
	__webpack_require__(16)(__SRC_DIR+"/css/main.css");
	__webpack_require__(7)(__SRC_DIR+"/css/fakeLoader.css");
	__webpack_require__(29)(__SRC_DIR+"/css/error.css");
	__webpack_require__(31)(__SRC_DIR+"/js/error.js");
	__webpack_require__(2)(__SRC_DIR+"/js/global/bgm.js");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/jquery.fullPage.css": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/js/global/bgm.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	var audioInit = function() {
		function randomID(i) {
			return Math.ceil(Math.random() * i);
		}
		var bgmid = randomID(7);
		$('#autoplay').attr('src', '//cbpm.applinzi.com/bgm/bgm' + bgmid + '.mp3');
		var audio = document.getElementById('autoplay');
		var controller = document.getElementById('musicBtn');
		var controllerHint = document.getElementById('musicBtnTxt');
		audio.volume = 0.5;

		document.getElementById('musicBtn').addEventListener('touchstart', function() {
			controllerHint.style.display = '';
			if (audio.paused) {
				audio.play();
				controller.className = 'music-btn on';
				controllerHint.innerHTML = '开始';
			} else {
				audio.pause();
				controller.className = 'music-btn';
				controllerHint.innerHTML = '关闭';
			}

			setTimeout(function() {
				controllerHint.style.display = 'none';
			}, 1000);

		}, false);
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * fullPage 2.7.9
	 * https://github.com/alvarotrigo/fullPage.js
	 * @license MIT licensed
	 *
	 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
	 */
	(function(global, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
	          return factory($, global, global.document, global.Math);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'), global, global.document, global.Math);
	    } else {
	        factory(jQuery, global, global.document, global.Math);
	    }
	})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
	    'use strict';

	    // keeping central set of classnames and selectors
	    var WRAPPER =               'fullpage-wrapper';
	    var WRAPPER_SEL =           '.' + WRAPPER;

	    // slimscroll
	    var SCROLLABLE =            'fp-scrollable';
	    var SCROLLABLE_SEL =        '.' + SCROLLABLE;
	    var SLIMSCROLL_BAR_SEL =    '.slimScrollBar';
	    var SLIMSCROLL_RAIL_SEL =   '.slimScrollRail';

	    // util
	    var RESPONSIVE =            'fp-responsive';
	    var NO_TRANSITION =         'fp-notransition';
	    var DESTROYED =             'fp-destroyed';
	    var ENABLED =               'fp-enabled';
	    var VIEWING_PREFIX =        'fp-viewing';
	    var ACTIVE =                'active';
	    var ACTIVE_SEL =            '.' + ACTIVE;
	    var COMPLETELY =            'fp-completely';
	    var COMPLETELY_SEL =        '.' + COMPLETELY;

	    // section
	    var SECTION_DEFAULT_SEL =   '.section';
	    var SECTION =               'fp-section';
	    var SECTION_SEL =           '.' + SECTION;
	    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
	    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
	    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
	    var TABLE_CELL =            'fp-tableCell';
	    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
	    var AUTO_HEIGHT =           'fp-auto-height';
	    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
	    var NORMAL_SCROLL =         'fp-normal-scroll';
	    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

	    // section nav
	    var SECTION_NAV =           'fp-nav';
	    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
	    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
	    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
	    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

	    // slide
	    var SLIDE_DEFAULT_SEL =     '.slide';
	    var SLIDE =                 'fp-slide';
	    var SLIDE_SEL =             '.' + SLIDE;
	    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
	    var SLIDES_WRAPPER =        'fp-slides';
	    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
	    var SLIDES_CONTAINER =      'fp-slidesContainer';
	    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
	    var TABLE =                 'fp-table';

	    // slide nav
	    var SLIDES_NAV =            'fp-slidesNav';
	    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
	    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
	    var SLIDES_ARROW =          'fp-controlArrow';
	    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
	    var SLIDES_PREV =           'fp-prev';
	    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
	    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
	    var SLIDES_NEXT =           'fp-next';
	    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
	    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

	    var $window = $(window);
	    var $document = $(document);

	    var defaultScrollHandler;

	    $.fn.fullpage = function(options) {
	        //only once my friend!
	        if($('html').hasClass(ENABLED)){ displayWarnings(); return };

	        // common jQuery objects
	        var $htmlBody = $('html, body');
	        var $body = $('body');

	        var FP = $.fn.fullpage;
	        // Create some defaults, extending them with any options that were provided
	        options = $.extend({
	            //navigation
	            menu: false,
	            anchors:[],
	            lockAnchors: false,
	            navigation: false,
	            navigationPosition: 'right',
	            navigationTooltips: [],
	            showActiveTooltip: false,
	            slidesNavigation: false,
	            slidesNavPosition: 'bottom',
	            scrollBar: false,
	            hybrid: false,

	            //scrolling
	            css3: true,
	            scrollingSpeed: 700,
	            autoScrolling: true,
	            fitToSection: true,
	            fitToSectionDelay: 1000,
	            easing: 'easeInOutCubic',
	            easingcss3: 'ease',
	            loopBottom: false,
	            loopTop: false,
	            loopHorizontal: true,
	            continuousVertical: false,
	            normalScrollElements: null,
	            scrollOverflow: false,
	            scrollOverflowHandler: defaultScrollHandler,
	            touchSensitivity: 5,
	            normalScrollElementTouchThreshold: 5,

	            //Accessibility
	            keyboardScrolling: true,
	            animateAnchor: true,
	            recordHistory: true,

	            //design
	            controlArrows: true,
	            controlArrowColor: '#fff',
	            verticalCentered: true,
	            resize: false,
	            sectionsColor : [],
	            paddingTop: 0,
	            paddingBottom: 0,
	            fixedElements: null,
	            responsive: 0, //backwards compabitility with responsiveWiddth
	            responsiveWidth: 0,
	            responsiveHeight: 0,

	            //Custom selectors
	            sectionSelector: SECTION_DEFAULT_SEL,
	            slideSelector: SLIDE_DEFAULT_SEL,


	            //events
	            afterLoad: null,
	            onLeave: null,
	            afterRender: null,
	            afterResize: null,
	            afterReBuild: null,
	            afterSlideLoad: null,
	            onSlideLeave: null
	        }, options);

	        displayWarnings();

	        //easeInOutCubic animation included in the plugin
	        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

	        /**
	        * Sets the autoScroll option.
	        * It changes the scroll bar visibility and the history of the site as a result.
	        */
	        FP.setAutoScrolling = function(value, type){
	            setVariableState('autoScrolling', value, type);

	            var element = $(SECTION_ACTIVE_SEL);

	            if(options.autoScrolling && !options.scrollBar){
	                $htmlBody.css({
	                    'overflow' : 'hidden',
	                    'height' : '100%'
	                });

	                FP.setRecordHistory(originals.recordHistory, 'internal');

	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': 'none',
	                    'touch-action': 'none'
	                });

	                if(element.length){
	                    //moving the container up
	                    silentScroll(element.position().top);
	                }

	            }else{
	                $htmlBody.css({
	                    'overflow' : 'visible',
	                    'height' : 'initial'
	                });

	                FP.setRecordHistory(false, 'internal');

	                //for IE touch devices
	                container.css({
	                    '-ms-touch-action': '',
	                    'touch-action': ''
	                });

	                silentScroll(0);

	                //scrolling the page to the section with no animation
	                if (element.length) {
	                    $htmlBody.scrollTop(element.position().top);
	                }
	            }
	        };

	        /**
	        * Defines wheter to record the history for each hash change in the URL.
	        */
	        FP.setRecordHistory = function(value, type){
	            setVariableState('recordHistory', value, type);
	        };

	        /**
	        * Defines the scrolling speed
	        */
	        FP.setScrollingSpeed = function(value, type){
	            setVariableState('scrollingSpeed', value, type);
	        };

	        /**
	        * Sets fitToSection
	        */
	        FP.setFitToSection = function(value, type){
	            setVariableState('fitToSection', value, type);
	        };

	        /**
	        * Sets lockAnchors
	        */
	        FP.setLockAnchors = function(value){
	            options.lockAnchors = value;
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
	        */
	        FP.setMouseWheelScrolling = function (value){
	            if(value){
	                addMouseWheelHandler();
	                addMiddleWheelHandler();
	            }else{
	                removeMouseWheelHandler();
	                removeMiddleWheelHandler();
	            }
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
	        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
	        *
	        * @param directions string containing the direction or directions separated by comma.
	        */
	        FP.setAllowScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');

	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'm');
	                });
	            }
	            else if(value){
	                FP.setMouseWheelScrolling(true);
	                addTouchHandler();
	            }else{
	                FP.setMouseWheelScrolling(false);
	                removeTouchHandler();
	            }
	        };

	        /**
	        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
	        */
	        FP.setKeyboardScrolling = function (value, directions){
	            if(typeof directions !== 'undefined'){
	                directions = directions.replace(/ /g,'').split(',');

	                $.each(directions, function (index, direction){
	                    setIsScrollAllowed(value, direction, 'k');
	                });
	            }else{
	                options.keyboardScrolling = value;
	            }
	        };

	        /**
	        * Moves the page up one section.
	        */
	        FP.moveSectionUp = function(){
	            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

	            //looping to the bottom if there's no more sections above
	            if (!prev.length && (options.loopTop || options.continuousVertical)) {
	                prev = $(SECTION_SEL).last();
	            }

	            if (prev.length) {
	                scrollPage(prev, null, true);
	            }
	        };

	        /**
	        * Moves the page down one section.
	        */
	        FP.moveSectionDown = function (){
	            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

	            //looping to the top if there's no more sections below
	            if(!next.length &&
	                (options.loopBottom || options.continuousVertical)){
	                next = $(SECTION_SEL).first();
	            }

	            if(next.length){
	                scrollPage(next, null, false);
	            }
	        };

	        /**
	        * Moves the page to the given section and slide with no animation.
	        * Anchors or index positions can be used as params.
	        */
	        FP.silentMoveTo = function(sectionAnchor, slideAnchor){
	            FP.setScrollingSpeed (0, 'internal');
	            FP.moveTo(sectionAnchor, slideAnchor)
	            FP.setScrollingSpeed (originals.scrollingSpeed, 'internal');
	        };

	        /**
	        * Moves the page to the given section and slide.
	        * Anchors or index positions can be used as params.
	        */
	        FP.moveTo = function (sectionAnchor, slideAnchor){
	            var destiny = getSectionByAnchor(sectionAnchor);

	            if (typeof slideAnchor !== 'undefined'){
	                scrollPageAndSlide(sectionAnchor, slideAnchor);
	            }else if(destiny.length > 0){
	                scrollPage(destiny);
	            }
	        };

	        /**
	        * Slides right the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideRight = function(section){
	            moveSlide('next', section);
	        };

	        /**
	        * Slides left the slider of the active section.
	        * Optional `section` param.
	        */
	        FP.moveSlideLeft = function(section){
	            moveSlide('prev', section);
	        };

	        /**
	         * When resizing is finished, we adjust the slides sizes and positions
	         */
	        FP.reBuild = function(resizing){
	            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

	            isResizing = true;

	            var windowsWidth = $window.outerWidth();
	            windowsHeight = $window.height();  //updating global var

	            //text resizing
	            if (options.resize) {
	                resizeMe(windowsHeight, windowsWidth);
	            }

	            $(SECTION_SEL).each(function(){
	                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
	                var slides = $(this).find(SLIDE_SEL);

	                //adjusting the height of the table-cell for IE and Firefox
	                if(options.verticalCentered){
	                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
	                }

	                $(this).css('height', windowsHeight + 'px');

	                //resizing the scrolling divs
	                if(options.scrollOverflow){
	                    if(slides.length){
	                        slides.each(function(){
	                            createSlimScrolling($(this));
	                        });
	                    }else{
	                        createSlimScrolling($(this));
	                    }
	                }

	                //adjusting the position fo the FULL WIDTH slides...
	                if (slides.length > 1) {
	                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
	                }
	            });

	            var activeSection = $(SECTION_ACTIVE_SEL);
	            var sectionIndex = activeSection.index(SECTION_SEL);

	            //isn't it the first section?
	            if(sectionIndex){
	                //adjusting the position for the current section
	                FP.silentMoveTo(sectionIndex + 1);
	            }

	            isResizing = false;
	            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
	            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
	        };

	        /**
	        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
	        * are smaller than the set limit values.
	        */
	        FP.setResponsive = function (active){
	            var isResponsive = $body.hasClass(RESPONSIVE);

	            if(active){
	                if(!isResponsive){
	                    FP.setAutoScrolling(false, 'internal');
	                    FP.setFitToSection(false, 'internal');
	                    $(SECTION_NAV_SEL).hide();
	                    $body.addClass(RESPONSIVE);
	                }
	            }
	            else if(isResponsive){
	                FP.setAutoScrolling(originals.autoScrolling, 'internal');
	                FP.setFitToSection(originals.autoScrolling, 'internal');
	                $(SECTION_NAV_SEL).show();
	                $body.removeClass(RESPONSIVE);
	            }
	        }

	        //flag to avoid very fast sliding for landscape sliders
	        var slideMoving = false;

	        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
	        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
	        var container = $(this);
	        var windowsHeight = $window.height();
	        var isResizing = false;
	        var isWindowFocused = true;
	        var lastScrolledDestiny;
	        var lastScrolledSlide;
	        var canScroll = true;
	        var scrollings = [];
	        var nav;
	        var controlPressed;
	        var isScrollAllowed = {};
	        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
	        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
	        var originals = $.extend(true, {}, options); //deep copy

	        //timeouts
	        var resizeId;
	        var afterSectionLoadsId;
	        var afterSlideLoadsId;
	        var scrollId;
	        var scrollId2;
	        var keydownId;

	        if($(this).length){
	            init();
	            bindEvents();
	        }

	        function init(){
	            //if css3 is not supported, it will use jQuery animations
	            if(options.css3){
	                options.css3 = support3d();
	            }

	            options.scrollBar = options.scrollBar || options.hybrid;


	            setOptionsFromDOM();

	            prepareDom();
	            FP.setAllowScrolling(true);

	            FP.setAutoScrolling(options.autoScrolling, 'internal');

	            //the starting point is a slide?
	            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
	                silentLandscapeScroll(activeSlide);
	            }

	            responsive();

	            //setting the class for the body element
	            setBodyClass();

	            $window.on('load', function() {
	                scrollToAnchor();
	            });
	        }

	        function bindEvents(){
	            $window
	                //when scrolling...
	                .on('scroll', scrollHandler)

	                //detecting any change on the URL to scroll to the given anchor link
	                //(a way to detect back history button as we play with the hashes on the URL)
	                .on('hashchange', hashChangeHandler)

	                //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	                .blur(blurHandler)

	                //when resizing the site, we adjust the heights of the sections, slimScroll...
	                .resize(resizeHandler);

	            $document
	                //Sliding with arrow keys, both, vertical and horizontal
	                .keydown(keydownHandler)

	                //to prevent scrolling while zooming
	                .keyup(keyUpHandler)

	                //Scrolls to the section when clicking the navigation bullet
	                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

	                //Scrolls the slider to the given slide destination for the given section
	                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

	                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

	            //Scrolling horizontally when clicking on the slider controls.
	            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

	            /**
	            * Applying normalScroll elements.
	            * Ignoring the scrolls over the specified selectors.
	            */
	            if(options.normalScrollElements){
	                $document.on('mouseenter', options.normalScrollElements, function () {
	                    FP.setMouseWheelScrolling(false);
	                });

	                $document.on('mouseleave', options.normalScrollElements, function(){
	                    FP.setMouseWheelScrolling(true);
	                });
	            }
	        }

	        /**
	        * Setting options from DOM elements if they are not provided.
	        */
	        function setOptionsFromDOM(){
	            //no anchors option? Checking for them in the DOM attributes
	            if(!options.anchors.length){
	                options.anchors = $(options.sectionSelector + '[data-anchor]').map(function(){
	                    return $(this).data('anchor').toString();
	                }).get();
	            }

	            //no tooltipos option? Checking for them in the DOM attributes
	            if(!options.navigationTooltips.length){
	                options.navigationTooltips = $(options.sectionSelector + '[data-tooltip]').map(function(){
	                    return $(this).data('tooltip').toString();
	                }).get();
	            }
	        }

	        /**
	        * Works over the DOM structure to set it up for the current fullpage optionss.
	        */
	        function prepareDom(){
	            container.css({
	                'height': '100%',
	                'position': 'relative'
	            });

	            //adding a class to recognize the container internally in the code
	            container.addClass(WRAPPER);
	            $('html').addClass(ENABLED);

	            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
	            windowsHeight = $window.height();

	            container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again

	            addInternalSelectors();

	             //styling the sections / slides / menu
	            $(SECTION_SEL).each(function(index){
	                var section = $(this);
	                var slides = section.find(SLIDE_SEL);
	                var numSlides = slides.length;

	                styleSection(section, index);
	                styleMenu(section, index);

	                // if there's any slide
	                if (numSlides > 0) {
	                    styleSlides(section, slides, numSlides);
	                }else{
	                    if(options.verticalCentered){
	                        addTableClass(section);
	                    }
	                }
	            });

	            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
	            if(options.fixedElements && options.css3){
	                $(options.fixedElements).appendTo($body);
	            }

	            //vertical centered of the navigation + active bullet
	            if(options.navigation){
	                addVerticalNavigation();
	            }

	            if(options.scrollOverflow){
	                if(document.readyState === 'complete'){
	                    createSlimScrollingHandler();
	                }
	                //after DOM and images are loaded
	                $window.on('load', createSlimScrollingHandler);
	            }else{
	                afterRenderActions();
	            }
	        }

	        /**
	        * Styles the horizontal slides for a section.
	        */
	        function styleSlides(section, slides, numSlides){
	            var sliderWidth = numSlides * 100;
	            var slideWidth = 100 / numSlides;

	            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
	            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

	            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

	            if(numSlides > 1){
	                if(options.controlArrows){
	                    createSlideArrows(section);
	                }

	                if(options.slidesNavigation){
	                    addSlidesNavigation(section, numSlides);
	                }
	            }

	            slides.each(function(index) {
	                $(this).css('width', slideWidth + '%');

	                if(options.verticalCentered){
	                    addTableClass($(this));
	                }
	            });

	            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

	            //if the slide won't be an starting point, the default will be the first one
	            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
	            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
	                silentLandscapeScroll(startingSlide);
	            }else{
	                slides.eq(0).addClass(ACTIVE);
	            }
	        }

	        /**
	        * Styling vertical sections
	        */
	        function styleSection(section, index){
	            //if no active section is defined, the 1st one will be the default one
	            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
	                section.addClass(ACTIVE);
	            }

	            section.css('height', windowsHeight + 'px');

	            if(options.paddingTop){
	                section.css('padding-top', options.paddingTop);
	            }

	            if(options.paddingBottom){
	                section.css('padding-bottom', options.paddingBottom);
	            }

	            if (typeof options.sectionsColor[index] !==  'undefined') {
	                section.css('background-color', options.sectionsColor[index]);
	            }

	            if (typeof options.anchors[index] !== 'undefined') {
	                section.attr('data-anchor', options.anchors[index]);
	            }
	        }

	        /**
	        * Sets the data-anchor attributes to the menu elements and activates the current one.
	        */
	        function styleMenu(section, index){
	            if (typeof options.anchors[index] !== 'undefined') {
	                //activating the menu / nav element on load
	                if(section.hasClass(ACTIVE)){
	                    activateMenuAndNav(options.anchors[index], index);
	                }
	            }

	            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
	            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
	                $(options.menu).appendTo($body);
	            }
	        }

	        /**
	        * Adds internal classes to be able to provide customizable selectors
	        * keeping the link with the style sheet.
	        */
	        function addInternalSelectors(){
	            //adding internal class names to void problem with common ones
	            $(options.sectionSelector).each(function(){
	                $(this).addClass(SECTION);
	            });
	            $(options.slideSelector).each(function(){
	                $(this).addClass(SLIDE);
	            });
	        }

	        /**
	        * Creates the control arrows for the given section
	        */
	        function createSlideArrows(section){
	            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

	            if(options.controlArrowColor!='#fff'){
	                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
	                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
	            }

	            if(!options.loopHorizontal){
	                section.find(SLIDES_ARROW_PREV_SEL).hide();
	            }
	        }

	        /**
	        * Creates a vertical navigation bar.
	        */
	        function addVerticalNavigation(){
	            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
	            var nav = $(SECTION_NAV_SEL);

	            nav.addClass(function() {
	                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
	            });

	            for (var i = 0; i < $(SECTION_SEL).length; i++) {
	                var link = '';
	                if (options.anchors.length) {
	                    link = options.anchors[i];
	                }

	                var li = '<li><a href="#' + link + '"><span></span></a>';

	                // Only add tooltip if needed (defined by user)
	                var tooltip = options.navigationTooltips[i];

	                if (typeof tooltip !== 'undefined' && tooltip !== '') {
	                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
	                }

	                li += '</li>';

	                nav.find('ul').append(li);
	            }

	            //centering it vertically
	            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

	            //activating the current active section
	            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
	        }

	        /**
	        * Creates the slim scroll scrollbar for the sections and slides inside them.
	        */
	        function createSlimScrollingHandler(){
	            $(SECTION_SEL).each(function(){
	                var slides = $(this).find(SLIDE_SEL);

	                if(slides.length){
	                    slides.each(function(){
	                        createSlimScrolling($(this));
	                    });
	                }else{
	                    createSlimScrolling($(this));
	                }

	            });
	            afterRenderActions();
	        }

	        /**
	        * Actions and callbacks to fire afterRender
	        */
	        function afterRenderActions(){
	            var section = $(SECTION_ACTIVE_SEL);

	            section.addClass(COMPLETELY);

	            if(options.scrollOverflowHandler.afterRender){
	                options.scrollOverflowHandler.afterRender(section);
	            }
	            lazyLoad(section);
	            playMedia(section);

	            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
	            $.isFunction( options.afterRender ) && options.afterRender.call(container);
	        }


	        var isScrolling = false;
	        var lastScroll = 0;

	        //when scrolling...
	        function scrollHandler(){
	            var currentSection;

	            if(!options.autoScrolling || options.scrollBar){
	                var currentScroll = $window.scrollTop();
	                var scrollDirection = getScrollDirection(currentScroll);
	                var visibleSectionIndex = 0;
	                var screen_mid = currentScroll + ($window.height() / 2.0);

	                //taking the section which is showing more content in the viewport
	                var sections =  document.querySelectorAll(SECTION_SEL);
	                for (var i = 0; i < sections.length; ++i) {
	                    var section = sections[i];

	                    // Pick the the last section which passes the middle line of the screen.
	                    if (section.offsetTop <= screen_mid)
	                    {
	                        visibleSectionIndex = i;
	                    }
	                }

	                if(isCompletelyInViewPort(scrollDirection)){
	                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
	                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
	                    }
	                }

	                //geting the last one, the current one on the screen
	                currentSection = $(sections).eq(visibleSectionIndex);

	                //setting the visible section as active when manually scrolling
	                //executing only once the first time we reach the section
	                if(!currentSection.hasClass(ACTIVE)){
	                    isScrolling = true;
	                    var leavingSection = $(SECTION_ACTIVE_SEL);
	                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
	                    var yMovement = getYmovement(currentSection);
	                    var anchorLink  = currentSection.data('anchor');
	                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
	                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);

	                    if(activeSlide.length){
	                        var slideAnchorLink = activeSlide.data('anchor');
	                        var slideIndex = activeSlide.index();
	                    }

	                    if(canScroll){
	                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

	                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);

	                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);
	                        lazyLoad(currentSection);

	                        activateMenuAndNav(anchorLink, sectionIndex - 1);

	                        if(options.anchors.length){
	                            //needed to enter in hashChange event when using the menu with anchor links
	                            lastScrolledDestiny = anchorLink;

	                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
	                        }
	                    }

	                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
	                    clearTimeout(scrollId);
	                    scrollId = setTimeout(function(){
	                        isScrolling = false;
	                    }, 100);
	                }

	                if(options.fitToSection){
	                    //for the auto adjust of the viewport to fit a whole section
	                    clearTimeout(scrollId2);

	                    scrollId2 = setTimeout(function(){
	                        //checking fitToSection again in case it was set to false before the timeout delay
	                        if(canScroll && options.fitToSection){
	                            //allows to scroll to an active section and
	                            //if the section is already active, we prevent firing callbacks
	                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
	                                isResizing = true;
	                            }
	                            scrollPage($(SECTION_ACTIVE_SEL));

	                            isResizing = false;
	                        }
	                    }, options.fitToSectionDelay);
	                }
	            }
	        }

	        /**
	        * Determines whether the active section has seen in its whole or not.
	        */
	        function isCompletelyInViewPort(movement){
	            var top = $(SECTION_ACTIVE_SEL).position().top;
	            var bottom = top + $window.height();

	            if(movement == 'up'){
	                return bottom >= ($window.scrollTop() + $window.height());
	            }
	            return top <= $window.scrollTop();
	        }

	        /**
	        * Gets the directon of the the scrolling fired by the scroll event.
	        */
	        function getScrollDirection(currentScroll){
	            var direction = currentScroll > lastScroll ? 'down' : 'up';

	            lastScroll = currentScroll;

	            return direction;
	        }

	        /**
	        * Determines the way of scrolling up or down:
	        * by 'automatically' scrolling a section or by using the default and normal scrolling.
	        */
	        function scrolling(type, scrollable){
	            if (!isScrollAllowed.m[type]){
	                return;
	            }
	            var check, scrollSection;

	            if(type == 'down'){
	                check = 'bottom';
	                scrollSection = FP.moveSectionDown;
	            }else{
	                check = 'top';
	                scrollSection = FP.moveSectionUp;
	            }

	            if(scrollable.length > 0 ){
	                //is the scrollbar at the start/end of the scroll?
	                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
	                    scrollSection();
	                }else{
	                    return true;
	                }
	            }else{
	                // moved up/down
	                scrollSection();
	            }
	        }


	        var touchStartY = 0;
	        var touchStartX = 0;
	        var touchEndY = 0;
	        var touchEndX = 0;

	        /* Detecting touch events

	        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
	        * This way, the touchstart and the touch moves shows an small difference between them which is the
	        * used one to determine the direction.
	        */
	        function touchMoveHandler(event){
	            var e = event.originalEvent;

	            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
	            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

	                if(options.autoScrolling){
	                    //preventing the easing on iOS devices
	                    event.preventDefault();
	                }

	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

	                if (canScroll && !slideMoving) { //if theres any #
	                    var touchEvents = getEventsPage(e);

	                    touchEndY = touchEvents.y;
	                    touchEndX = touchEvents.x;

	                    //if movement in the X axys is greater than in the Y and the currect section has slides...
	                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
	                            if (touchStartX > touchEndX) {
	                                if(isScrollAllowed.m.right){
	                                    FP.moveSlideRight(); //next
	                                }
	                            } else {
	                                if(isScrollAllowed.m.left){
	                                    FP.moveSlideLeft(); //prev
	                                }
	                            }
	                        }
	                    }

	                    //vertical scrolling (only when autoScrolling is enabled)
	                    else if(options.autoScrolling){

	                        //is the movement greater than the minimum resistance to scroll?
	                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
	                            if (touchStartY > touchEndY) {
	                                scrolling('down', scrollable);
	                            } else if (touchEndY > touchStartY) {
	                                scrolling('up', scrollable);
	                            }
	                        }
	                    }
	                }
	            }

	        }

	        /**
	         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
	         * Currently works well for iOS - Android might need some testing
	         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
	         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
	         * @return {boolean} true if there is a match to options.normalScrollElements
	         */
	        function checkParentForNormalScrollElement (el, hop) {
	            hop = hop || 0;
	            var parent = $(el).parent();

	            if (hop < options.normalScrollElementTouchThreshold &&
	                parent.is(options.normalScrollElements) ) {
	                return true;
	            } else if (hop == options.normalScrollElementTouchThreshold) {
	                return false;
	            } else {
	                return checkParentForNormalScrollElement(parent, ++hop);
	            }
	        }

	        /**
	        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
	        * this way we make sure that is really a touch event what IE is detecting.
	        */
	        function isReallyTouch(e){
	            //if is not IE   ||  IE is detecting `touch` or `pen`
	            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
	        }

	        /**
	        * Handler for the touch start event.
	        */
	        function touchStartHandler(event){
	            var e = event.originalEvent;

	            //stopping the auto scroll to adjust to a section
	            if(options.fitToSection){
	                $htmlBody.stop();
	            }

	            if(isReallyTouch(e)){
	                var touchEvents = getEventsPage(e);
	                touchStartY = touchEvents.y;
	                touchStartX = touchEvents.x;
	            }
	        }

	        /**
	        * Gets the average of the last `number` elements of the given array.
	        */
	        function getAverage(elements, number){
	            var sum = 0;

	            //taking `number` elements from the end to make the average, if there are not enought, 1
	            var lastElements = elements.slice(Math.max(elements.length - number, 1));

	            for(var i = 0; i < lastElements.length; i++){
	                sum = sum + lastElements[i];
	            }

	            return Math.ceil(sum/number);
	        }

	        /**
	         * Detecting mousewheel scrolling
	         *
	         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
	         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
	         */
	        var prevTime = new Date().getTime();

	        function MouseWheelHandler(e) {
	            var curTime = new Date().getTime();
	            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

	            //autoscrolling and not zooming?
	            if(options.autoScrolling && !controlPressed && !isNormalScroll){
	                // cross-browser wheel delta
	                e = e || window.event;
	                var value = e.wheelDelta || -e.deltaY || -e.detail;
	                var delta = Math.max(-1, Math.min(1, value));

	                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
	                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

	                //Limiting the array to 150 (lets not waste memory!)
	                if(scrollings.length > 149){
	                    scrollings.shift();
	                }

	                //keeping record of the previous scrollings
	                scrollings.push(Math.abs(value));

	                //preventing to scroll the site on mouse wheel when scrollbar is present
	                if(options.scrollBar){
	                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	                }

	                var activeSection = $(SECTION_ACTIVE_SEL);
	                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

	                //time difference between the last scroll and the current one
	                var timeDiff = curTime-prevTime;
	                prevTime = curTime;

	                //haven't they scrolled in a while?
	                //(enough to be consider a different scrolling action to scroll another section)
	                if(timeDiff > 200){
	                    //emptying the array, we dont care about old scrollings for our averages
	                    scrollings = [];
	                }

	                if(canScroll){
	                    var averageEnd = getAverage(scrollings, 10);
	                    var averageMiddle = getAverage(scrollings, 70);
	                    var isAccelerating = averageEnd >= averageMiddle;

	                    //to avoid double swipes...
	                    if(isAccelerating && isScrollingVertically){
	                        //scrolling down?
	                        if (delta < 0) {
	                            scrolling('down', scrollable);

	                        //scrolling up?
	                        }else {
	                            scrolling('up', scrollable);
	                        }
	                    }
	                }

	                return false;
	            }

	            if(options.fitToSection){
	                //stopping the auto scroll to adjust to a section
	                $htmlBody.stop();
	            }
	        }

	        /**
	        * Slides a slider to the given direction.
	        * Optional `section` param.
	        */
	        function moveSlide(direction, section){
	            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
	            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
	            var numSlides = slides.find(SLIDE_SEL).length;

	            // more than one slide needed and nothing should be sliding
	            if (!slides.length || slideMoving || numSlides < 2) {
	                return;
	            }

	            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
	            var destiny = null;

	            if(direction === 'prev'){
	                destiny = currentSlide.prev(SLIDE_SEL);
	            }else{
	                destiny = currentSlide.next(SLIDE_SEL);
	            }

	            //isn't there a next slide in the secuence?
	            if(!destiny.length){
	                //respect loopHorizontal settin
	                if (!options.loopHorizontal) return;

	                if(direction === 'prev'){
	                    destiny = currentSlide.siblings(':last');
	                }else{
	                    destiny = currentSlide.siblings(':first');
	                }
	            }

	            slideMoving = true;

	            landscapeScroll(slides, destiny);
	        }

	        /**
	        * Maintains the active slides in the viewport
	        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
	        */
	        function keepSlidesPosition(){
	            $(SLIDE_ACTIVE_SEL).each(function(){
	                silentLandscapeScroll($(this), 'internal');
	            });
	        }

	        var previousDestTop = 0;
	        /**
	        * Returns the destination Y position based on the scrolling direction and
	        * the height of the section.
	        */
	        function getDestinationPosition(element){
	            var elemPosition = element.position();

	            //top of the desination will be at the top of the viewport
	            var position = elemPosition.top;
	            var isScrollingDown =  elemPosition.top > previousDestTop;
	            var sectionBottom = position - windowsHeight + element.outerHeight();

	            //is the destination element bigger than the viewport?
	            if(element.outerHeight() > windowsHeight){
	                //scrolling up?
	                if(!isScrollingDown){
	                    position = sectionBottom;
	                }
	            }

	            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
	            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
	                //The bottom of the destination will be at the bottom of the viewport
	                position = sectionBottom;
	            }

	            /*
	            Keeping record of the last scrolled position to determine the scrolling direction.
	            No conventional methods can be used as the scroll bar might not be present
	            AND the section might not be active if it is auto-height and didnt reach the middle
	            of the viewport.
	            */
	            previousDestTop = position;
	            return position;
	        }

	        /**
	        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
	        */
	        function scrollPage(element, callback, isMovementUp){
	            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

	            var dtop = getDestinationPosition(element);

	            //local variables
	            var v = {
	                element: element,
	                callback: callback,
	                isMovementUp: isMovementUp,
	                dtop: dtop,
	                yMovement: getYmovement(element),
	                anchorLink: element.data('anchor'),
	                sectionIndex: element.index(SECTION_SEL),
	                activeSlide: element.find(SLIDE_ACTIVE_SEL),
	                activeSection: $(SECTION_ACTIVE_SEL),
	                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

	                //caching the value of isResizing at the momment the function is called
	                //because it will be checked later inside a setTimeout and the value might change
	                localIsResizing: isResizing
	            };

	            //quiting when destination scroll is the same as the current one
	            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

	            if(v.activeSlide.length){
	                var slideAnchorLink = v.activeSlide.data('anchor');
	                var slideIndex = v.activeSlide.index();
	            }

	            // If continuousVertical && we need to wrap around
	            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
	                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
	                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

	                v = createInfiniteSections(v);
	            }

	            //callback (onLeave) if the site is not just resizing and readjusting the slides
	            if($.isFunction(options.onLeave) && !v.localIsResizing){
	                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
	                    return;
	                }
	            }
	            stopMedia(v.activeSection);

	            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            lazyLoad(element);

	            //preventing from activating the MouseWheelHandler event
	            //more than once if the page is scrolling
	            canScroll = false;

	            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

	            performMovement(v);

	            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
	            lastScrolledDestiny = v.anchorLink;

	            //avoid firing it twice (as it does also on scroll)
	            activateMenuAndNav(v.anchorLink, v.sectionIndex);
	        }

	        /**
	        * Performs the movement (by CSS3 or by jQuery)
	        */
	        function performMovement(v){
	            // using CSS3 translate functionality
	            if (options.css3 && options.autoScrolling && !options.scrollBar) {
	                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
	                transformContainer(translate3d, true);

	                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
	                //scrollingSpeed to change in case of using silentMoveTo();
	                if(options.scrollingSpeed){
	                    afterSectionLoadsId = setTimeout(function () {
	                        afterSectionLoads(v);
	                    }, options.scrollingSpeed);
	                }else{
	                    afterSectionLoads(v);
	                }
	            }

	            // using jQuery animate
	            else{
	                var scrollSettings = getScrollSettings(v);

	                $(scrollSettings.element).animate(
	                    scrollSettings.options,
	                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
	                    if(options.scrollBar){

	                        /* Hack!
	                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
	                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

	                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
	                        */
	                        setTimeout(function(){
	                            afterSectionLoads(v);
	                        },30);
	                    }else{
	                        afterSectionLoads(v);
	                    }
	                });
	            }
	        }

	        /**
	        * Gets the scrolling settings depending on the plugin autoScrolling option
	        */
	        function getScrollSettings(v){
	            var scroll = {};

	            if(options.autoScrolling && !options.scrollBar){
	                scroll.options = { 'top': -v.dtop};
	                scroll.element = WRAPPER_SEL;
	            }else{
	                scroll.options = { 'scrollTop': v.dtop};
	                scroll.element = 'html, body';
	            }

	            return scroll;
	        }

	        /**
	        * Adds sections before or after the current one to create the infinite effect.
	        */
	        function createInfiniteSections(v){
	            // Scrolling down
	            if (!v.isMovementUp) {
	                // Move all previous sections to after the active section
	                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
	            }
	            else { // Scrolling up
	                // Move all next sections to before the active section
	                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
	            }

	            // Maintain the displayed position (now that we changed the element order)
	            silentScroll($(SECTION_ACTIVE_SEL).position().top);

	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();

	            // save for later the elements that still need to be reordered
	            v.wrapAroundElements = v.activeSection;

	            // Recalculate animation variables
	            v.dtop = v.element.position().top;
	            v.yMovement = getYmovement(v.element);

	            return v;
	        }

	        /**
	        * Fix section order after continuousVertical changes have been animated
	        */
	        function continuousVerticalFixSectionOrder (v) {
	            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
	            // finish moving the elements around so the direct navigation will function more simply
	            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
	                return;
	            }

	            if (v.isMovementUp) {
	                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
	            }
	            else {
	                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
	            }

	            silentScroll($(SECTION_ACTIVE_SEL).position().top);

	            // Maintain the active slides visible in the viewport
	            keepSlidesPosition();
	        }


	        /**
	        * Actions to do once the section is loaded.
	        */
	        function afterSectionLoads (v){
	            continuousVerticalFixSectionOrder(v);

	            v.element.find('.fp-scrollable').mouseover();

	            //callback (afterLoad) if the site is not just resizing and readjusting the slides
	            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));

	            playMedia(v.element);
	            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

	            canScroll = true;

	            $.isFunction(v.callback) && v.callback.call(this);
	        }

	        /**
	        * Lazy loads image, video and audio elements.
	        */
	        function lazyLoad(destiny){
	            var destiny = getSlideOrSection(destiny);

	            destiny.find('img[data-src], source[data-src], audio[data-src]').each(function(){
	                $(this).attr('src', $(this).data('src'));
	                $(this).removeAttr('data-src');

	                if($(this).is('source')){
	                    $(this).closest('video').get(0).load();
	                }
	            });
	        }

	        /**
	        * Plays video and audio elements.
	        */
	        function playMedia(destiny){
	            var destiny = getSlideOrSection(destiny);

	            //playing HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);

	                if( element.hasAttribute('autoplay') && typeof element.play === 'function' ) {
	                    element.play();
	                }
	            });
	        }

	        /**
	        * Stops video and audio elements.
	        */
	        function stopMedia(destiny){
	            var destiny = getSlideOrSection(destiny);

	            //stopping HTML5 media elements
	            destiny.find('video, audio').each(function(){
	                var element = $(this).get(0);

	                if( !element.hasAttribute('data-ignore') && typeof element.pause === 'function' ) {
	                    element.pause();
	                }
	            });
	        }

	        /**
	        * Gets the active slide (or section) for the given section
	        */
	        function getSlideOrSection(destiny){
	            var slide = destiny.find(SLIDE_ACTIVE_SEL);
	            if( slide.length ) {
	                destiny = $(slide);
	            }

	            return destiny;
	        }

	        /**
	        * Scrolls to the anchor in the URL when loading the site
	        */
	        function scrollToAnchor(){
	            //getting the anchor link in the URL and deleting the `#`
	            var value =  window.location.hash.replace('#', '').split('/');
	            var section = value[0];
	            var slide = value[1];

	            if(section){  //if theres any #
	                if(options.animateAnchor){
	                    scrollPageAndSlide(section, slide);
	                }else{
	                    FP.silentMoveTo(section, slide);
	                }
	            }
	        }

	        /**
	        * Detecting any change on the URL to scroll to the given anchor link
	        * (a way to detect back history button as we play with the hashes on the URL)
	        */
	        function hashChangeHandler(){
	            if(!isScrolling && !options.lockAnchors){
	                var value =  window.location.hash.replace('#', '').split('/');
	                var section = value[0];
	                var slide = value[1];

	                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
	                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
	                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);


	                if(section.length){
	                    /*in order to call scrollpage() only once for each destination at a time
	                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
	                    event is fired on every scroll too.*/
	                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
	                        scrollPageAndSlide(section, slide);
	                    }
	                }
	            }
	        }

	        //Sliding with arrow keys, both, vertical and horizontal
	        function keydownHandler(e) {

	            clearTimeout(keydownId);

	            var activeElement = $(':focus');

	            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
	                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
	                options.keyboardScrolling && options.autoScrolling){
	                var keyCode = e.which;

	                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
	                var keyControls = [40, 38, 32, 33, 34];
	                if($.inArray(keyCode, keyControls) > -1){
	                    e.preventDefault();
	                }

	                controlPressed = e.ctrlKey;

	                keydownId = setTimeout(function(){
	                    onkeydown(e);
	                },150);
	            }
	        }

	        function tooltipTextHandler(){
	            $(this).prev().trigger('click');
	        }

	        //to prevent scrolling while zooming
	        function keyUpHandler(e){
	            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
	                controlPressed = e.ctrlKey;
	            }
	        }

	        //binding the mousemove when the mouse's middle button is released
	        function mouseDownHandler(e){
	            //middle button
	            if (e.which == 2){
	                oldPageY = e.pageY;
	                container.on('mousemove', mouseMoveHandler);
	            }
	        }

	        //unbinding the mousemove when the mouse's middle button is released
	        function mouseUpHandler(e){
	            //middle button
	            if (e.which == 2){
	                container.off('mousemove');
	            }
	        }

	        //Scrolling horizontally when clicking on the slider controls.
	        function slideArrowHandler(){
	            var section = $(this).closest(SECTION_SEL);

	            if ($(this).hasClass(SLIDES_PREV)) {
	                if(isScrollAllowed.m.left){
	                    FP.moveSlideLeft(section);
	                }
	            } else {
	                if(isScrollAllowed.m.right){
	                    FP.moveSlideRight(section);
	                }
	            }
	        }

	        //when opening a new tab (ctrl + t), `control` won't be pressed when comming back.
	        function blurHandler(){
	            isWindowFocused = false;
	            controlPressed = false;
	        }

	        //Scrolls to the section when clicking the navigation bullet
	        function sectionBulletHandler(e){
	            e.preventDefault();
	            var index = $(this).parent().index();
	            scrollPage($(SECTION_SEL).eq(index));
	        }

	        //Scrolls the slider to the given slide destination for the given section
	        function slideBulletHandler(e){
	            e.preventDefault();
	            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
	            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

	            landscapeScroll(slides, destiny);
	        }

	        /**
	        * Keydown event
	        */
	        function onkeydown(e){
	            var shiftPressed = e.shiftKey;

	            switch (e.which) {
	                //up
	                case 38:
	                case 33:
	                    if(isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                    }
	                    break;

	                //down
	                case 32: //spacebar
	                    if(shiftPressed && isScrollAllowed.k.up){
	                        FP.moveSectionUp();
	                        break;
	                    }
	                case 40:
	                case 34:
	                    if(isScrollAllowed.k.down){
	                        FP.moveSectionDown();
	                    }
	                    break;

	                //Home
	                case 36:
	                    if(isScrollAllowed.k.up){
	                        FP.moveTo(1);
	                    }
	                    break;

	                //End
	                case 35:
	                     if(isScrollAllowed.k.down){
	                        FP.moveTo( $(SECTION_SEL).length );
	                    }
	                    break;

	                //left
	                case 37:
	                    if(isScrollAllowed.k.left){
	                        FP.moveSlideLeft();
	                    }
	                    break;

	                //right
	                case 39:
	                    if(isScrollAllowed.k.right){
	                        FP.moveSlideRight();
	                    }
	                    break;

	                default:
	                    return; // exit this handler for other keys
	            }
	        }

	        /**
	        * Detecting the direction of the mouse movement.
	        * Used only for the middle button of the mouse.
	        */
	        var oldPageY = 0;
	        function mouseMoveHandler(e){
	            if(canScroll){
	                // moving up
	                if (e.pageY < oldPageY && isScrollAllowed.m.up){
	                    FP.moveSectionUp();
	                }

	                // moving down
	                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
	                    FP.moveSectionDown();
	                }
	            }
	            oldPageY = e.pageY;
	        }

	        /**
	        * Scrolls horizontal sliders.
	        */
	        function landscapeScroll(slides, destiny){
	            var destinyPos = destiny.position();
	            var slideIndex = destiny.index();
	            var section = slides.closest(SECTION_SEL);
	            var sectionIndex = section.index(SECTION_SEL);
	            var anchorLink = section.data('anchor');
	            var slidesNav = section.find(SLIDES_NAV_SEL);
	            var slideAnchor = getAnchor(destiny);
	            var prevSlide = section.find(SLIDE_ACTIVE_SEL);

	            //caching the value of isResizing at the momment the function is called
	            //because it will be checked later inside a setTimeout and the value might change
	            var localIsResizing = isResizing;

	            if(options.onSlideLeave){
	                var prevSlideIndex = prevSlide.index();
	                var xMovement = getXmovement(prevSlideIndex, slideIndex);

	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing && xMovement!=='none'){
	                    if($.isFunction( options.onSlideLeave )){
	                        if(options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement, slideIndex ) === false){
	                            slideMoving = false;
	                            return;
	                        }
	                    }
	                }
	            }
	            stopMedia(prevSlide);

	            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);
	            if(!localIsResizing){
	                lazyLoad(destiny);
	            }

	            if(!options.loopHorizontal && options.controlArrows){
	                //hidding it for the fist slide, showing for the rest
	                section.find(SLIDES_ARROW_PREV_SEL).toggle(slideIndex!==0);

	                //hidding it for the last slide, showing for the rest
	                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
	            }

	            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
	            if(section.hasClass(ACTIVE)){
	                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
	            }

	            var afterSlideLoads = function(){
	                //if the site is not just resizing and readjusting the slides
	                if(!localIsResizing){
	                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
	                }
	                playMedia(destiny);

	                //letting them slide again
	                slideMoving = false;
	            };

	            if(options.css3){
	                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

	                addAnimation(slides.find(SLIDES_CONTAINER_SEL), options.scrollingSpeed>0).css(getTransforms(translate3d));

	                afterSlideLoadsId = setTimeout(function(){
	                    afterSlideLoads();
	                }, options.scrollingSpeed, options.easing);
	            }else{
	                slides.animate({
	                    scrollLeft : Math.round(destinyPos.left)
	                }, options.scrollingSpeed, options.easing, function() {

	                    afterSlideLoads();
	                });
	            }

	            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
	            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
	        }

	        var previousHeight = windowsHeight;

	        //when resizing the site, we adjust the heights of the sections, slimScroll...
	        function resizeHandler(){
	            //checking if it needs to get responsive
	            responsive();

	            // rebuild immediately on touch devices
	            if (isTouchDevice) {
	                var activeElement = $(document.activeElement);

	                //if the keyboard is NOT visible
	                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
	                    var currentHeight = $window.height();

	                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
	                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
	                        FP.reBuild(true);
	                        previousHeight = currentHeight;
	                    }
	                }
	            }else{
	                //in order to call the functions only when the resize is finished
	                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
	                clearTimeout(resizeId);

	                resizeId = setTimeout(function(){
	                    FP.reBuild(true);
	                }, 350);
	            }
	        }

	        /**
	        * Checks if the site needs to get responsive and disables autoScrolling if so.
	        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
	        */
	        function responsive(){
	            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
	            var heightLimit = options.responsiveHeight;

	            //only calculating what we need. Remember its called on the resize event.
	            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
	            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

	            if(widthLimit && heightLimit){
	                FP.setResponsive(isBreakingPointWidth || isBreakingPointHeight);
	            }
	            else if(widthLimit){
	                FP.setResponsive(isBreakingPointWidth);
	            }
	            else if(heightLimit){
	                FP.setResponsive(isBreakingPointHeight);
	            }
	        }

	        /**
	        * Adds transition animations for the given element
	        */
	        function addAnimation(element){
	            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

	            element.removeClass(NO_TRANSITION);
	            return element.css({
	                '-webkit-transition': transition,
	                'transition': transition
	            });
	        }

	        /**
	        * Remove transition animations for the given element
	        */
	        function removeAnimation(element){
	            return element.addClass(NO_TRANSITION);
	        }

	        /**
	         * Resizing of the font size depending on the window size as well as some of the images on the site.
	         */
	        function resizeMe(displayHeight, displayWidth) {
	            //Standard dimensions, for which the body font size is correct
	            var preferredHeight = 825;
	            var preferredWidth = 900;

	            if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
	                var heightPercentage = (displayHeight * 100) / preferredHeight;
	                var widthPercentage = (displayWidth * 100) / preferredWidth;
	                var percentage = Math.min(heightPercentage, widthPercentage);
	                var newFontSize = percentage.toFixed(2);

	                $body.css('font-size', newFontSize + '%');
	            } else {
	                $body.css('font-size', '100%');
	            }
	        }

	        /**
	         * Activating the website navigation dots according to the given slide name.
	         */
	        function activateNavDots(name, sectionIndex){
	            if(options.navigation){
	                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
	                if(name){
	                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
	                }else{
	                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
	                }
	            }
	        }

	        /**
	         * Activating the website main menu elements according to the given slide name.
	         */
	        function activateMenuElement(name){
	            if(options.menu){
	                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
	                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
	            }
	        }

	        /**
	        * Sets to active the current menu and vertical nav items.
	        */
	        function activateMenuAndNav(anchor, index){
	            activateMenuElement(anchor);
	            activateNavDots(anchor, index);
	        }

	        /**
	        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
	        * from the current section.
	        */
	        function getYmovement(destiny){
	            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
	            var toIndex = destiny.index(SECTION_SEL);
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'up';
	            }
	            return 'down';
	        }

	        /**
	        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
	        * from the current slide.
	        */
	        function getXmovement(fromIndex, toIndex){
	            if( fromIndex == toIndex){
	                return 'none';
	            }
	            if(fromIndex > toIndex){
	                return 'left';
	            }
	            return 'right';
	        }


	        function createSlimScrolling(element){
	            //needed to make `scrollHeight` work under Opera 12
	            element.css('overflow', 'hidden');

	            var scrollOverflowHandler = options.scrollOverflowHandler;
	            var wrap = scrollOverflowHandler.wrapContent();
	            //in case element is a slide
	            var section = element.closest(SECTION_SEL);
	            var scrollable = scrollOverflowHandler.scrollable(element);
	            var contentHeight;

	            //if there was scroll, the contentHeight will be the one in the scrollable section
	            if(scrollable.length){
	                contentHeight = scrollOverflowHandler.scrollHeight(element);
	            }else{
	                contentHeight = element.get(0).scrollHeight;
	                if(options.verticalCentered){
	                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
	                }
	            }

	            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

	            //needs scroll?
	            if ( contentHeight > scrollHeight) {
	                //was there already an scroll ? Updating it
	                if(scrollable.length){
	                    scrollOverflowHandler.update(element, scrollHeight);
	                }
	                //creating the scrolling
	                else{
	                    if(options.verticalCentered){
	                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
	                    }else{
	                        element.wrapInner(wrap);
	                    }
	                    scrollOverflowHandler.create(element, scrollHeight);
	                }
	            }
	            //removing the scrolling when it is not necessary anymore
	            else{
	                scrollOverflowHandler.remove(element);
	            }

	            //undo
	            element.css('overflow', '');
	        }

	        function addTableClass(element){
	            element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
	        }

	        function getTableHeight(element){
	            var sectionHeight = windowsHeight;

	            if(options.paddingTop || options.paddingBottom){
	                var section = element;
	                if(!section.hasClass(SECTION)){
	                    section = element.closest(SECTION_SEL);
	                }

	                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
	                sectionHeight = (windowsHeight - paddings);
	            }

	            return sectionHeight;
	        }

	        /**
	        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
	        */
	        function transformContainer(translate3d, animated){
	            if(animated){
	                addAnimation(container);
	            }else{
	                removeAnimation(container);
	            }

	            container.css(getTransforms(translate3d));

	            //syncronously removing the class after the animation has been applied.
	            setTimeout(function(){
	                container.removeClass(NO_TRANSITION);
	            },10);
	        }

	        /**
	        * Gets a section by its anchor / index
	        */
	        function getSectionByAnchor(sectionAnchor){
	            //section
	            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
	            if(!section.length){
	                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
	            }

	            return section;
	        }

	        /**
	        * Gets a slide inside a given section by its anchor / index
	        */
	        function getSlideByAnchor(slideAnchor, section){
	            var slides = section.find(SLIDES_WRAPPER_SEL);
	            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

	            if(!slide.length){
	                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
	            }

	            return slide;
	        }

	        /**
	        * Scrolls to the given section and slide anchors
	        */
	        function scrollPageAndSlide(destiny, slide){
	            var section = getSectionByAnchor(destiny);

	            //default slide
	            if (typeof slide === 'undefined') {
	                slide = 0;
	            }

	            //we need to scroll to the section and then to the slide
	            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
	                scrollPage(section, function(){
	                    scrollSlider(section, slide);
	                });
	            }
	            //if we were already in the section
	            else{
	                scrollSlider(section, slide);
	            }
	        }

	        /**
	        * Scrolls the slider to the given slide destination for the given section
	        */
	        function scrollSlider(section, slideAnchor){
	            if(typeof slideAnchor !== 'undefined'){
	                var slides = section.find(SLIDES_WRAPPER_SEL);
	                var destiny =  getSlideByAnchor(slideAnchor, section);

	                if(destiny.length){
	                    landscapeScroll(slides, destiny);
	                }
	            }
	        }

	        /**
	        * Creates a landscape navigation bar with dots for horizontal sliders.
	        */
	        function addSlidesNavigation(section, numSlides){
	            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
	            var nav = section.find(SLIDES_NAV_SEL);

	            //top or bottom
	            nav.addClass(options.slidesNavPosition);

	            for(var i=0; i< numSlides; i++){
	                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
	            }

	            //centering it
	            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

	            nav.find('li').first().find('a').addClass(ACTIVE);
	        }


	        /**
	        * Sets the state of the website depending on the active section/slide.
	        * It changes the URL hash when needed and updates the body class.
	        */
	        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
	            var sectionHash = '';

	            if(options.anchors.length && !options.lockAnchors){

	                //isn't it the first slide?
	                if(slideIndex){
	                    if(typeof anchorLink !== 'undefined'){
	                        sectionHash = anchorLink;
	                    }

	                    //slide without anchor link? We take the index instead.
	                    if(typeof slideAnchor === 'undefined'){
	                        slideAnchor = slideIndex;
	                    }

	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(sectionHash + '/' + slideAnchor);

	                //first slide won't have slide anchor, just the section one
	                }else if(typeof slideIndex !== 'undefined'){
	                    lastScrolledSlide = slideAnchor;
	                    setUrlHash(anchorLink);
	                }

	                //section without slides
	                else{
	                    setUrlHash(anchorLink);
	                }
	            }

	            setBodyClass();
	        }

	        /**
	        * Sets the URL hash.
	        */
	        function setUrlHash(url){
	            if(options.recordHistory){
	                location.hash = url;
	            }else{
	                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
	                if(isTouchDevice || isTouch){
	                    window.history.replaceState(undefined, undefined, '#' + url);
	                }else{
	                    var baseUrl = window.location.href.split('#')[0];
	                    window.location.replace( baseUrl + '#' + url );
	                }
	            }
	        }

	        /**
	        * Gets the anchor for the given slide / section. Its index will be used if there's none.
	        */
	        function getAnchor(element){
	            var anchor = element.data('anchor');
	            var index = element.index();

	            //Slide without anchor link? We take the index instead.
	            if(typeof anchor === 'undefined'){
	                anchor = index;
	            }

	            return anchor;
	        }

	        /**
	        * Sets a class for the body of the page depending on the active section / slide
	        */
	        function setBodyClass(){
	            var section = $(SECTION_ACTIVE_SEL);
	            var slide = section.find(SLIDE_ACTIVE_SEL);

	            var sectionAnchor = getAnchor(section);
	            var slideAnchor = getAnchor(slide);

	            var sectionIndex = section.index(SECTION_SEL);

	            var text = String(sectionAnchor);

	            if(slide.length){
	                text = text + '-' + slideAnchor;
	            }

	            //changing slash for dash to make it a valid CSS style
	            text = text.replace('/', '-').replace('#','');

	            //removing previous anchor classes
	            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
	            $body[0].className = $body[0].className.replace(classRe, '');

	            //adding the current anchor
	            $body.addClass(VIEWING_PREFIX + '-' + text);
	        }

	        /**
	        * Checks for translate3d support
	        * @return boolean
	        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
	        */
	        function support3d() {
	            var el = document.createElement('p'),
	                has3d,
	                transforms = {
	                    'webkitTransform':'-webkit-transform',
	                    'OTransform':'-o-transform',
	                    'msTransform':'-ms-transform',
	                    'MozTransform':'-moz-transform',
	                    'transform':'transform'
	                };

	            // Add it to the body to get the computed style.
	            document.body.insertBefore(el, null);

	            for (var t in transforms) {
	                if (el.style[t] !== undefined) {
	                    el.style[t] = 'translate3d(1px,1px,1px)';
	                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	                }
	            }

	            document.body.removeChild(el);

	            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
	        }

	        /**
	        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
	        */
	        function removeMouseWheelHandler(){
	            if (document.addEventListener) {
	                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
	                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
	                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
	            } else {
	                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
	            }
	        }

	        /**
	        * Adds the auto scrolling action for the mouse wheel and trackpad.
	        * After this function is called, the mousewheel and trackpad movements will scroll through sections
	        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	        */
	        function addMouseWheelHandler(){
	            var prefix = '';
	            var _addEventListener;

	            if (window.addEventListener){
	                _addEventListener = "addEventListener";
	            }else{
	                _addEventListener = "attachEvent";
	                prefix = 'on';
	            }

	             // detect available wheel event
	            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
	                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
	                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


	            if(support == 'DOMMouseScroll'){
	                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
	            }

	            //handle MozMousePixelScroll in older Firefox
	            else{
	                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
	            }
	        }

	        /**
	        * Binding the mousemove when the mouse's middle button is pressed
	        */
	        function addMiddleWheelHandler(){
	            container
	                .on('mousedown', mouseDownHandler)
	                .on('mouseup', mouseUpHandler);
	        }

	        /**
	        * Unbinding the mousemove when the mouse's middle button is released
	        */
	        function removeMiddleWheelHandler(){
	            container
	                .off('mousedown', mouseDownHandler)
	                .off('mouseup', mouseUpHandler);
	        }

	        /**
	        * Adds the possibility to auto scroll through sections on touch devices.
	        */
	        function addTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();

	                $(WRAPPER_SEL).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
	            }
	        }

	        /**
	        * Removes the auto scrolling for touch devices.
	        */
	        function removeTouchHandler(){
	            if(isTouchDevice || isTouch){
	                //Microsoft pointers
	                var MSPointer = getMSPointer();

	                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down);
	                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move);
	            }
	        }

	        /*
	        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
	        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
	        */
	        function getMSPointer(){
	            var pointer;

	            //IE >= 11 & rest of browsers
	            if(window.PointerEvent){
	                pointer = { down: 'pointerdown', move: 'pointermove'};
	            }

	            //IE < 11
	            else{
	                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
	            }

	            return pointer;
	        }

	        /**
	        * Gets the pageX and pageY properties depending on the browser.
	        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
	        */
	        function getEventsPage(e){
	            var events = [];

	            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
	            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

	            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
	            if(isTouch && isReallyTouch(e) && options.scrollBar){
	                events.y = e.touches[0].pageY;
	                events.x = e.touches[0].pageX;
	            }

	            return events;
	        }

	        /**
	        * Slides silently (with no animation) the active slider to the given slide.
	        */
	        function silentLandscapeScroll(activeSlide, noCallbacks){
	            FP.setScrollingSpeed (0, 'internal');

	            if(typeof noCallbacks !== 'undefined'){
	                //preventing firing callbacks afterSlideLoad etc.
	                isResizing = true;
	            }

	            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

	            if(typeof noCallbacks !== 'undefined'){
	                isResizing = false;
	            }

	            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
	        }

	        /**
	        * Scrolls silently (with no animation) the page to the given Y position.
	        */
	        function silentScroll(top){
	            if(options.scrollBar){
	                container.scrollTop(top);
	            }
	            else if (options.css3) {
	                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
	                transformContainer(translate3d, false);
	            }
	            else {
	                container.css('top', -top);
	            }
	        }

	        /**
	        * Returns the cross-browser transform string.
	        */
	        function getTransforms(translate3d){
	            return {
	                '-webkit-transform': translate3d,
	                '-moz-transform': translate3d,
	                '-ms-transform':translate3d,
	                'transform': translate3d
	            };
	        }

	        /**
	        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
	        * @type  m (mouse) or k (keyboard)
	        */
	        function setIsScrollAllowed(value, direction, type){
	            switch (direction){
	                case 'up': isScrollAllowed[type].up = value; break;
	                case 'down': isScrollAllowed[type].down = value; break;
	                case 'left': isScrollAllowed[type].left = value; break;
	                case 'right': isScrollAllowed[type].right = value; break;
	                case 'all':
	                    if(type == 'm'){
	                        FP.setAllowScrolling(value);
	                    }else{
	                        FP.setKeyboardScrolling(value);
	                    }
	            }
	        }

	        /*
	        * Destroys fullpage.js plugin events and optinally its html markup and styles
	        */
	        FP.destroy = function(all){
	            FP.setAutoScrolling(false, 'internal');
	            FP.setAllowScrolling(false);
	            FP.setKeyboardScrolling(false);
	            container.addClass(DESTROYED);

	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);
	            clearTimeout(resizeId);
	            clearTimeout(scrollId);
	            clearTimeout(scrollId2);

	            $window
	                .off('scroll', scrollHandler)
	                .off('hashchange', hashChangeHandler)
	                .off('resize', resizeHandler);

	            $document
	                .off('click', SECTION_NAV_SEL + ' a')
	                .off('mouseenter', SECTION_NAV_SEL + ' li')
	                .off('mouseleave', SECTION_NAV_SEL + ' li')
	                .off('click', SLIDES_NAV_LINK_SEL)
	                .off('mouseover', options.normalScrollElements)
	                .off('mouseout', options.normalScrollElements);

	            $(SECTION_SEL)
	                .off('click', SLIDES_ARROW_SEL);

	            clearTimeout(afterSlideLoadsId);
	            clearTimeout(afterSectionLoadsId);

	            //lets make a mess!
	            if(all){
	                destroyStructure();
	            }
	        };

	        /*
	        * Removes inline styles added by fullpage.js
	        */
	        function destroyStructure(){
	            //reseting the `top` or `translate` properties to 0
	            silentScroll(0);

	            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

	            //removing inline styles
	            $(SECTION_SEL).css( {
	                'height': '',
	                'background-color' : '',
	                'padding': ''
	            });

	            $(SLIDE_SEL).css( {
	                'width': ''
	            });

	            container.css({
	                'height': '',
	                'position': '',
	                '-ms-touch-action': '',
	                'touch-action': ''
	            });

	            $htmlBody.css({
	                'overflow': '',
	                'height': ''
	            });

	            // remove .fp-enabled class
	            $('html').removeClass(ENABLED);

	            // remove all of the .fp-viewing- classes
	            $.each($body.get(0).className.split(/\s+/), function (index, className) {
	                if (className.indexOf(VIEWING_PREFIX) === 0) {
	                    $body.removeClass(className);
	                }
	            });

	            //removing added classes
	            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
	                options.scrollOverflowHandler.remove($(this));
	                $(this).removeClass(TABLE + ' ' + ACTIVE);
	            });

	            removeAnimation(container);

	            //Unwrapping content
	            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
	                //unwrap not being use in case there's no child element inside and its just text
	                $(this).replaceWith(this.childNodes);
	            });

	            //scrolling the page to the top with no animation
	            $htmlBody.scrollTop(0);

	            //removing selectors
	            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
	            $.each(usedSelectors, function(index, value){
	                $('.' + value).removeClass(value);
	            });
	        }

	        /*
	        * Sets the state for a variable with multiple states (original, and temporal)
	        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
	        * This function is used to keep track of both states, the original and the temporal one.
	        * If type is not 'internal', then we assume the user is globally changing the variable.
	        */
	        function setVariableState(variable, value, type){
	            options[variable] = value;
	            if(type !== 'internal'){
	                originals[variable] = value;
	            }
	        }

	        /**
	        * Displays warnings
	        */
	        function displayWarnings(){
	            if($('html').hasClass(ENABLED)){
	                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
	                return;
	            }

	            // Disable mutually exclusive settings
	            if (options.continuousVertical &&
	                (options.loopTop || options.loopBottom)) {
	                options.continuousVertical = false;
	                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }

	            if(options.scrollBar && options.scrollOverflow){
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
	            }

	            if(options.continuousVertical && options.scrollBar){
	                options.continuousVertical = false;
	                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
	            }

	            //anchors can not have the same value as any element ID or NAME
	            $.each(options.anchors, function(index, name){

	                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
	                var nameAttr = $document.find('[name]').filter(function() {
	                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
	                });

	                var idAttr = $document.find('[id]').filter(function() {
	                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
	                });

	                if(idAttr.length || nameAttr.length ){
	                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
	                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
	                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
	                }
	            });
	        }

	        /**
	        * Shows a message in the console of the given type.
	        */
	        function showError(type, text){
	            console && console[type] && console[type]('fullPage: ' + text);
	        }
	    };

	    /**
	     * An object to handle overflow scrolling.
	     * This uses jquery.slimScroll to accomplish overflow scrolling.
	     * It is possible to pass in an alternate scrollOverflowHandler
	     * to the fullpage.js option that implements the same functions
	     * as this handler.
	     *
	     * @type {Object}
	     */
	    var slimScrollHandler = {
	        /**
	         * Optional function called after each render.
	         *
	         * Solves a bug with slimScroll vendor library #1037, #553
	         *
	         * @param  {object} section jQuery object containing rendered section
	         */
	        afterRender: function(section){
	            var slides = section.find(SLIDES_WRAPPER);
	            var scrollableWrap = section.find(SCROLLABLE_SEL);

	            if(slides.length){
	                scrollableWrap = slides.find(SLIDE_ACTIVE_SEL);
	            }

	            scrollableWrap.mouseover();
	        },

	        /**
	         * Called when overflow scrolling is needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        create: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).slimScroll({
	                allowPageScroll: true,
	                height: scrollHeight + 'px',
	                size: '10px',
	                alwaysVisible: true
	            });
	        },

	        /**
	         * Return a boolean depending on whether the scrollable element is a
	         * the end or at the start of the scrolling depending on the given type.
	         *
	         * @param  {String}  type       Either 'top' or 'bottom'
	         * @param  {Object}  scrollable jQuery object for the scrollable element
	         * @return {Boolean}
	         */
	        isScrolled: function(type, scrollable){
	            if(type === 'top'){
	                return !scrollable.scrollTop();
	            }else if(type === 'bottom'){
	                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
	            }
	        },

	        /**
	         * Returns the scrollable element for the given section.
	         * If there are landscape slides, will only return a scrollable element
	         * if it is in the active slide.
	         *
	         * @param  {Object}  activeSection jQuery object containing current section
	         * @return {Boolean}
	         */
	        scrollable: function(activeSection){
	            // if there are landscape slides, we check if the scrolling bar is in the current one or not
	            if(activeSection.find(SLIDES_WRAPPER_SEL).length){
	                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
	            }
	            return activeSection.find(SCROLLABLE_SEL);
	        },

	        /**
	         * Returns the scroll height of the wrapped content.
	         * If this is larger than the window height minus section padding,
	         * overflow scrolling is needed.
	         *
	         * @param  {Object} element jQuery object containing current section
	         * @return {Number}
	         */
	        scrollHeight: function(element){
	            return element.find(SCROLLABLE_SEL).get(0).scrollHeight;
	        },

	        /**
	         * Called when overflow scrolling is no longer needed for a section.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         */
	        remove: function(element){
	            element.find(SCROLLABLE_SEL).children().first().unwrap().unwrap();
	            element.find(SLIMSCROLL_BAR_SEL).remove();
	            element.find(SLIMSCROLL_RAIL_SEL).remove();
	        },

	        /**
	         * Called when overflow scrolling has already been setup but the
	         * window height has potentially changed.
	         *
	         * @param  {Object} element      jQuery object containing current section
	         * @param  {Number} scrollHeight Current window height in pixels
	         */
	        update: function(element, scrollHeight){
	            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
	        },

	        /**
	         * Called to get any additional elements needed to wrap the section
	         * content in order to facilitate overflow scrolling.
	         *
	         * @return {String|Object} Can be a string containing HTML,
	         *                         a DOM element, or jQuery object.
	         */
	        wrapContent: function(){
	            return '<div class="' + SCROLLABLE + '"></div>';
	        }
	    };

	    defaultScrollHandler = slimScrollHandler;

	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = window.$;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/fakeLoader.css": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/weui.css": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

	var SPORT = {
		"SAFE": 0,
		"PARTY": 1,
		"PARTYJZ": 2,
		"COST": 3,
		"GREATWALL": 4,
		"POWER": 5,
		"XIAN": 6,
		"QUALITY":7
	};

	module.exports = SPORT;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/*--------------------------------------------------------------------
	 *JAVASCRIPT "FakeLoader.js"
	 *Version:    1.1.0 - 2014
	 *author:     João Pereira
	 *website:    http://www.joaopereira.pt
	 *Licensed MIT 
	-----------------------------------------------------------------------*/
	(function ($) {
	 
	    $.fn.fakeLoader = function(options) {

	        //Defaults
	        var settings = $.extend({
	            timeToHide:1200, // Default Time to hide fakeLoader
	            pos:'fixed',// Default Position
	            top:'0px',  // Default Top value
	            left:'0px', // Default Left value
	            width:'100%', // Default width 
	            height:'100%', // Default Height
	            zIndex: '999',  // Default zIndex 
	            bgColor: '#2ecc71', // Default background color
	            spinner:'spinner7', // Default Spinner
	            imagePath:'' // Default Path custom image
	        }, options);

	        //Customized Spinners
	        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
	        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
	        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
	        var spinner04 = '<div class="fl spinner4"></div>'; 
	        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
	        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
	        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

	        //The target
	        var el = $(this);

	        //Init styles
	        var initStyles = {
	            'position':settings.pos,
	            'width':settings.width,
	            'height':settings.height,
	            'top':settings.top,
	            'left':settings.left
	        };

	        //Apply styles
	        el.css(initStyles);

	        //Each 
	        el.each(function() {
	            var a = settings.spinner;
	            //console.log(a)
	                switch (a) {
	                    case 'spinner1':
	                            el.html(spinner01);
	                        break;
	                    case 'spinner2':
	                            el.html(spinner02);
	                        break;
	                    case 'spinner3':
	                            el.html(spinner03);
	                        break;
	                    case 'spinner4':
	                            el.html(spinner04);
	                        break;
	                    case 'spinner5':
	                            el.html(spinner05);
	                        break;
	                    case 'spinner6':
	                            el.html(spinner06);
	                        break;
	                    case 'spinner7':
	                            el.html(spinner07);
	                        break;
	                    default:
	                        el.html(spinner01);
	                    }

	                //Add customized loader image

	                if (settings.imagePath !='') {
	                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
	                }
	                centerLoader();
	        });

	        //Time to hide fakeLoader
	        setTimeout(function(){
	            $(el).fadeOut();
	        }, settings.timeToHide);

	        //Return Styles 
	        return this.css({
	            'backgroundColor':settings.bgColor,
	            'zIndex':settings.zIndex
	        });

	 
	    }; // End Fake Loader
	 

	        //Center Spinner
	        function centerLoader() {

	            var winW = $(window).width();
	            var winH = $(window).height();

	            var spinnerW = $('.fl').outerWidth();
	            var spinnerH = $('.fl').outerHeight();

	            $('.fl').css({
	                'position':'absolute',
	                'left':(winW/2)-(spinnerW/2),
	                'top':(winH/2)-(spinnerH/2)
	            });

	        }

	        $(window).load(function(){
	                centerLoader();
	              $(window).resize(function(){
	                centerLoader();
	              });
	        });


	}(jQuery));





/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/SentyZHAO.css": 19
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/jquery-weui.css": 20
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 15;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/main.css": 21
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "董事会、经理部",
			"nums": 12,
			"attr": "董事会、经理部"
		},
		{
			"name": "办公室",
			"nums": 14,
			"attr": "职能部室"
		},
		{
			"name": "企管规划部",
			"nums": 25,
			"attr": "职能部室"
		},
		{
			"name": "计划财务部",
			"nums": 16,
			"attr": "职能部室"
		},
		{
			"name": "生产管理部",
			"nums": 56,
			"attr": "职能部室"
		},
		{
			"name": "技术质量部",
			"nums": 147,
			"attr": "职能部室"
		},
		{
			"name": "安全保卫部",
			"nums": 117,
			"attr": "职能部室"
		},
		{
			"name": "设备管理部",
			"nums": 203,
			"attr": "职能部室"
		},
		{
			"name": "物资管理部",
			"nums": 59,
			"attr": "职能部室"
		},
		{
			"name": "技术中心",
			"nums": 108,
			"attr": "职能部室"
		},
		{
			"name": "基建与行政事务部",
			"nums": 22,
			"attr": "职能部室"
		},
		{
			"name": "人力资源部",
			"nums": 18,
			"attr": "职能部室"
		},
		{
			"name": "企业文化部",
			"nums": 10,
			"attr": "职能部室"
		},
		{
			"name": "纪检监察内审部",
			"nums": 6,
			"attr": "职能部室"
		},
		{
			"name": "群工部",
			"nums": 11,
			"attr": "职能部室"
		},
		{
			"name": "离退休工作部",
			"nums": 8,
			"attr": "职能部室"
		},
		{
			"name": "印钞数管部",
			"nums": 152,
			"attr": "制作部"
		},
		{
			"name": "胶凹制作部",
			"nums": 307,
			"attr": "制作部"
		},
		{
			"name": "印码制作部",
			"nums": 206,
			"attr": "制作部"
		},
		{
			"name": "检封制作部",
			"nums": 316,
			"attr": "制作部"
		},
		{
			"name": "钞纸制作部",
			"nums": 186,
			"attr": "制作部"
		},
		{
			"name": "钞纸成品制作部",
			"nums": 235,
			"attr": "制作部"
		},
		{
			"name": "造币制作部",
			"nums": 68,
			"attr": "制作部"
		},
		{
			"name": "能源环保部",
			"nums": 215,
			"attr": "职能部室"
		},
		{
			"name": "市场开发部",
			"nums": 5,
			"attr": "职能部室"
		},
		{
			"name": "采购管理部",
			"nums": 11,
			"attr": "职能部室"
		},
		{
			"name": "长城公司",
			"nums": 350,
			"attr": "长城公司"
		},
		{
			"name": "物业公司",
			"nums": 438,
			"attr": "物业公司"
		},
		{
			"name": "金鼎公司",
			"nums": 945,
			"attr": "金鼎公司"
		}
	];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
		"part0": {
			"name": "质量月知识",
			"data": [
				{
					"title": "我国的质量月活动始于(  )年。",
					"answer": 1,
					"question": [
						"1978",
						"1982",
						"1988",
						"1998"
					]
				},
				{
					"title": "每年(  )月份在全国开展质量月活动，宣传&quot;质量第一&quot;的思想。",
					"answer": 3,
					"question": [
						"3",
						"6",
						"9",
						"11"
					]
				},
				{
					"title": "2016年质量月中国印钞造币总公司的活动主题是(  )。",
					"answer": 2,
					"question": [
						"迈向质量时代，建设质量强国",
						"筑牢风险防控根基，持续提升产品质量",
						"建设质量强国，实现&quot;三个转变&quot;",
						"坚持以质取胜提高竞争实力"
					]
				},
				{
					"title": "我公司的质量理念是(  )。",
					"answer": 2,
					"question": [
						"强化质量效益，服务转型升级",
						"严守标准，精铸名片",
						"千金一诺，和谐共赢",
						"质量提升，标准引领"
					]
				},
				{
					"title": "关于质量月活动说法，错误的是(  )。",
					"answer": 3,
					"question": [
						"每年质量月需确定一个主题",
						"质量月活动可以提高全民意识",
						"质量月活动投入大",
						"质量月活动可推进质量整兴"
					]
				}
			]
		},
		"part1": {
			"name": "人民币防伪知识",
			"data": [
				{
					"title": "第五套人民币壹元硬币（菊花币）的材质为（  ）。",
					"answer": 2,
					"question": [
						"铁合金磁性材料",
						"钢芯镀镍",
						"铜锌合金",
						"不锈钢"
					]
				},
				{
					"title": "2005版与1999版百元钞正面左下方用新型油墨印刷了面额数字，当与票面垂直观察其为绿色，而倾斜一定角度则为（  ）。",
					"answer": 1,
					"question": [
						"蓝色",
						"红色",
						"墨绿色",
						"黑色"
					]
				},
				{
					"title": "2015版百元纸币较2005版百元纸币，取消了票面右侧的凹印手感线、票面右侧的隐形面额数字以及（  ）等防伪元素。",
					"answer": 1,
					"question": [
						"票面左下角的光变油墨面额数字",
						"白水印",
						"固定水印",
						"开窗安全线"
					]
				},
				{
					"title": "2015版百元纸币较2005版百元纸币，增加了光彩光变数字、光变镂空开窗安全线以及（  ）等防伪元素。",
					"answer": 2,
					"question": [
						"固定水印",
						"竖号码",
						"横号码",
						"白水印"
					]
				}
			]
		},
		"part2": {
			"name": "人民币知识",
			"data": [
				{
					"title": "第三套人民币设计结构特征(  )。",
					"answer": 3,
					"question": [
						"四边框封闭式",
						"左右对称半封闭式",
						"半开放式",
						"大人像、打水印、大面额，开放式结构"
					]
				},
				{
					"title": "第五套人民币设计结构特征(  )。",
					"answer": 4,
					"question": [
						"四边框封闭式",
						"左右对称半封闭式",
						"半开放式",
						"大人像、打水印、大面额，开放式结构"
					]
				},
				{
					"title": "第一套人民币共有(  )种面额。",
					"answer": 3,
					"question": [
						"8",
						"10",
						"12",
						"15"
					]
				},
				{
					"title": "人民币1分、2分、5分属于第(  )套币种。",
					"answer": 2,
					"question": [
						"第一套",
						"第二套",
						"第三套",
						"第四套"
					]
				},
				{
					"title": "人民币背面使用少数民族文字体现我国民族大团结，最早使用在(  )。",
					"answer": 2,
					"question": [
						"第一套",
						"第二套",
						"第三套",
						"第四套"
					]
				},
				{
					"title": "关于人民币少数民族文字的描述，正确的是(  )。",
					"answer": 2,
					"question": [
						"第一套人民币开始使用",
						"第二套人民币开始使用",
						"都印刷在人民币的背面",
						"第三套人民币开始使用"
					]
				},
				{
					"title": "第二套人民币票面运用富有民族特色的装饰纹样，采用(  )格局。",
					"answer": 3,
					"question": [
						"封闭式",
						"四边框式",
						"对称式",
						"半开放式"
					]
				},
				{
					"title": "第三套人民币于(  )年经国务院批准后开始印制。",
					"answer": 3,
					"question": [
						"1956",
						"1958",
						"1959",
						"1962"
					]
				},
				{
					"title": "第三套人民币共有(  )种面额。",
					"answer": 1,
					"question": [
						"7",
						"9",
						"10",
						"12"
					]
				},
				{
					"title": "第三套人民币的&quot;2角&quot;纸币正面图案为(  )。",
					"answer": 2,
					"question": [
						"南京长江大桥",
						"武汉长江大桥",
						"重庆长江大桥",
						"宜昌长江大桥"
					]
				},
				{
					"title": "第三套人民币发行时间为(  )。",
					"answer": 2,
					"question": [
						"1961年",
						"1962年",
						"1964年",
						"1972年"
					]
				},
				{
					"title": "第三套人民币的&quot;10元&quot;纸币正面图案为(  )。",
					"answer": 2,
					"question": [
						"人民代表步入大会堂",
						"人民代表步出大会堂",
						"人民代表步入天安门",
						"人民代表步出天安门"
					]
				},
				{
					"title": "第四套人民币从(  )年开始发行。",
					"answer": 3,
					"question": [
						"1985年",
						"1986年",
						"1987年",
						"1988年"
					]
				},
				{
					"title": "第四套人民币共有(  )种面额。",
					"answer": 2,
					"question": [
						"7",
						"9",
						"12",
						"15"
					]
				},
				{
					"title": "第(  )套人民币开始使用安全线提高人民币的防伪性。",
					"answer": 3,
					"question": [
						"二",
						"三",
						"四",
						"五"
					]
				},
				{
					"title": "第(  )套人民币开始使用固定水印提高纸币的防伪性。",
					"answer": 2,
					"question": [
						"二",
						"三",
						"四",
						"五"
					]
				},
				{
					"title": "第(  )套人民币开始使用多色接线印刷技术提高人民币的防伪性。",
					"answer": 3,
					"question": [
						"二",
						"三",
						"四",
						"五"
					]
				},
				{
					"title": "第(  )套人民币开始使用正背对印技术提高人民币的防伪性。",
					"answer": 4,
					"question": [
						"二",
						"三",
						"四",
						"五"
					]
				},
				{
					"title": "第二套人民币的发行时间是(  )。",
					"answer": 3,
					"question": [
						"1951年",
						"1953年",
						"1955年",
						"1962年"
					]
				},
				{
					"title": "第五套人民币发行时间为(  )。",
					"answer": 2,
					"question": [
						"1999年1月1日",
						"1999年10月1日",
						"2000年1月1日",
						"2000年10月1日"
					]
				},
				{
					"title": "第五套人民币首批发行的币种为(  )人民币。",
					"answer": 1,
					"question": [
						"100元",
						"50元",
						"1元",
						"10元"
					]
				},
				{
					"title": "印钞行业素来有&quot;无(  )不成钞&quot;之说。",
					"answer": 2,
					"question": [
						"胶",
						"凹",
						"凸",
						"丝"
					]
				},
				{
					"title": "隐形图案技术是基于(  )技术的防伪工艺。",
					"answer": 2,
					"question": [
						"胶印",
						"凹印",
						"凸印",
						"丝印"
					]
				},
				{
					"title": "面额为3元的人民币是我国的第(  )套人民币的币种。",
					"answer": 2,
					"question": [
						"第一套",
						"第二套",
						"第三套",
						"第四套"
					]
				},
				{
					"title": "人民币国际货币符号为(  )。",
					"answer": 3,
					"question": [
						"CMY",
						"RMB",
						"CNY",
						"￥"
					]
				},
				{
					"title": "人民币由(  )印制。",
					"answer": 3,
					"question": [
						"国有独资的印刷企业",
						"财政部指定的专门企业",
						"中国人民银行指定的专门企业",
						"印刷企业招标"
					]
				},
				{
					"title": "(  )第八届全国人民代表大会第三次会议通过了《中华人民共和国中国人民银行法》。",
					"answer": 1,
					"question": [
						"1995年3月",
						"1997年9月",
						"1949年10月",
						"1956年7月"
					]
				},
				{
					"title": "我国第一次不依赖国外，全部实现自主设计、印制的是(  )人民币。",
					"answer": 3,
					"question": [
						"第一套",
						"第二套",
						"第三套",
						"第四套"
					]
				},
				{
					"title": "第一套人民币于(  )开始发行。",
					"answer": 1,
					"question": [
						"1948年12月1日",
						"1949年1月1日",
						"1949年10月1日",
						"1949年12月1日"
					]
				},
				{
					"title": "第一套人民币于(  )全面停止流通。",
					"answer": 3,
					"question": [
						"1959年12月1日",
						"1960年1月1日",
						"1955年5月10日",
						"1956年1月1日"
					]
				},
				{
					"title": "中国人民银行发行的第一套普通纪念币是(  )。",
					"answer": 3,
					"question": [
						"西藏自治区成立20周年",
						"新疆维吾尔自治区成立30周年",
						"中华人民共和国成立35周年",
						"2008年奥运会纪念币"
					]
				},
				{
					"title": "第三套人民币是(  )开始停止流通的。",
					"answer": 3,
					"question": [
						"1999年12月1日",
						"2000年1月1日",
						"2000年7月1日",
						"2000年10月1日"
					]
				},
				{
					"title": "第四套人民币是(  )开始发行的。",
					"answer": 3,
					"question": [
						"1980年6月1日",
						"1990年9月2日",
						"1987年4月27日",
						"1982年6月1日"
					]
				},
				{
					"title": "中国人民银行发行的第五套人民币，其中下列券别没有发行的是(  )。",
					"answer": 3,
					"question": [
						"5角",
						"1元",
						"2元",
						"1角"
					]
				},
				{
					"title": "第五套人民币上的中国人民银行行名的字体是(  )。",
					"answer": 3,
					"question": [
						"华文新魏",
						"隶书",
						"魏碑&quot;张黑女&quot;",
						"行楷"
					]
				},
				{
					"title": "2000年发行的《迎接新世纪》纪念钞，采用的币材和面额分别是(  )。",
					"answer": 3,
					"question": [
						"纸质，100",
						"塑料，50",
						"塑料，100",
						"纸质，50"
					]
				},
				{
					"title": "第五套人民币100元正面采用了(  )具有中国传统历史文化特色和民族特色的纹饰。",
					"answer": 1,
					"question": [
						"中国的漆器花纹",
						"少数民族的挑绣花纹",
						"青铜饕餮的纹路",
						"中国传统瓷器的花纹"
					]
				},
				{
					"title": "第五套人民币纸币背面右上方印有汉语拼音和(  )人民银行&quot;字样。",
					"answer": 2,
					"question": [
						"蒙、藏、回、维四种",
						"蒙、藏、维、壮四种",
						"蒙、满、藏、维四种",
						"蒙、满、回、维四种"
					]
				},
				{
					"title": "我国第一次采用了隐形雕刻防伪技术是(  )。",
					"answer": 1,
					"question": [
						"西藏和平解放50周年普通纪念币",
						"第五套人民币1元硬币",
						"庆祝中华人民共和国澳门特别行政区成立普通纪念币",
						"第五套100元人民币"
					]
				},
				{
					"title": "我国最早的点钞机出现在(  )年。",
					"answer": 3,
					"question": [
						"1948",
						"1949",
						"1959",
						"1969"
					]
				},
				{
					"title": "《中华人民共和国人民币管理条例》是于(  )起实施的。",
					"answer": 3,
					"question": [
						"2000年10月1日",
						"2001年5月1日",
						"2000年5月1日",
						"2001年10月1日"
					]
				},
				{
					"title": "我国人民币的主管机关是(  )。",
					"answer": 2,
					"question": [
						"财政部",
						"中国人民银行",
						"国务院",
						"中国银行"
					]
				},
				{
					"title": "人民币简写符号为(  )。",
					"answer": 4,
					"question": [
						"RMB",
						"£",
						"$",
						"￥"
					]
				},
				{
					"title": "(  )同志为第一套人民币题写了中国人民银行行名。",
					"answer": 1,
					"question": [
						"董必武",
						"周恩来",
						"邓小平",
						"朱德"
					]
				},
				{
					"title": "迄今为止第四套人民币1元纸币共发行了(  )个版别。",
					"answer": 3,
					"question": [
						"1",
						"2",
						"3",
						"4"
					]
				},
				{
					"title": "我国至目前为止发行的唯一一张塑料钞票是2000年11月28日发行的(  )纪念钞。",
					"answer": 4,
					"question": [
						"熊猫",
						"丹顶鹤",
						"长城",
						"迎接新世纪"
					]
				},
				{
					"title": "截至2006年8月15日，中国人民银行已发行了(  )套人民币。",
					"answer": 3,
					"question": [
						"3",
						"4",
						"5",
						"6"
					]
				},
				{
					"title": "1963年抄造出了第一张(  )钞票纸。",
					"answer": 1,
					"question": [
						"天安门固定水印",
						"满版五星古钱",
						"熊猫熊猫",
						"金属安全线"
					]
				},
				{
					"title": "我国是从第四套人民币(  )年版的100元、50元纸币上开始使用安全线技术的。",
					"answer": 3,
					"question": [
						"1980",
						"1982",
						"1990",
						"1991"
					]
				},
				{
					"title": "第五套人民币2005年版100元、50元纸币的双色异形横号码的字符特点是(  )。",
					"answer": 2,
					"question": [
						"由中间向左右两边逐渐变大",
						"由中间向左右两边逐渐变小",
						"由左向右逐渐变大",
						"由左向右逐渐变小"
					]
				},
				{
					"title": "第五套人民币1999年版(  )元纸币采用了胶印对印图案的防伪措施。",
					"answer": 4,
					"question": [
						"100、50、20",
						"50、20、10",
						"100、50、20",
						"100、50、10"
					]
				},
				{
					"title": "第五套人民币50元、20元和10元纸币正面毛泽东头像由雕刻艺术家(  )雕刻完成。",
					"answer": 4,
					"question": [
						"王肇宏",
						"沈永斌",
						"吴锦堂",
						"马荣"
					]
				},
				{
					"title": "第五套人民币纸币隐形面额数字位于钞票(  )。",
					"answer": 1,
					"question": [
						"正面右上方",
						"正面右下方",
						"背面右下方",
						"背面左上方"
					]
				},
				{
					"title": "第五套人民币5元纸币水印中花卉图案是(  )。",
					"answer": 3,
					"question": [
						"菊花",
						"月季花",
						"水仙化",
						"荷花"
					]
				},
				{
					"title": "1999年版第五套人民币哪几种面额纸币采用了双水印?（  ）",
					"answer": 4,
					"question": [
						"100元",
						"50元",
						"20元",
						"5元"
					]
				}
			]
		},
		"part3": {
			"name": "货币知识",
			"data": [
				{
					"title": "历史上最早出现的货币形态是(  )。",
					"answer": 1,
					"question": [
						"实物货币",
						"信用货币",
						"金属货币",
						"电子货币"
					]
				},
				{
					"title": "可兑现的银行券属于(  )类型的货币。",
					"answer": 3,
					"question": [
						"实物货币",
						"信用货币",
						"代用货币",
						"电子货币"
					]
				},
				{
					"title": "中国人民银行首次发行的彩色金银纪念币的名称是(  )。",
					"answer": 2,
					"question": [
						"牛年生肖金币",
						"虎年生肖银币",
						"龙年生肖金币D建国35周年纪念币"
					]
				},
				{
					"title": "在我国历史上(  )统一了货币。",
					"answer": 3,
					"question": [
						"夏朝",
						"商朝",
						"秦朝",
						"汉朝"
					]
				},
				{
					"title": "中国最早的货币(  )。",
					"answer": 1,
					"question": [
						"贝币",
						"布币",
						"刀币",
						"圆钱"
					]
				},
				{
					"title": "开元通宝是(  )铸造。",
					"answer": 2,
					"question": [
						"东汉",
						"唐朝",
						"五代十国",
						"北宋"
					]
				},
				{
					"title": "纸币最早为我国宋朝印制的(  )。",
					"answer": 4,
					"question": [
						"关子",
						"湖北会子",
						"钱引",
						"四川交子"
					]
				},
				{
					"title": "据考证(  )由多色套印印刷，在当时具有较强的防伪性。",
					"answer": 1,
					"question": [
						"钱引",
						"交子",
						"小钞",
						"关子"
					]
				},
				{
					"title": "在我国历史上最早出现多色套印的纸钞是(  )。",
					"answer": 2,
					"question": [
						"交子",
						"钱引",
						"小钞",
						"大明通行宝钞"
					]
				},
				{
					"title": "在基督教国家初次看到纸币以前,中国纸币已有(  )。",
					"answer": 3,
					"question": [
						"100多年",
						"200多年",
						"400多年",
						"中国没有纸币"
					]
				},
				{
					"title": "(  )时期的蔡伦，制造了植物纤维纸。",
					"answer": 3,
					"question": [
						"春秋",
						"战国",
						"东汉",
						"西汉"
					]
				},
				{
					"title": "纸币最早产于我国的(  )，称为&quot;交子&quot;、&quot;会子&quot;或&quot;宝钞&quot;。",
					"answer": 2,
					"question": [
						"唐朝",
						"宋朝",
						"元朝",
						"明朝"
					]
				},
				{
					"title": "&quot;水印&quot;钞纸的制造开始于十八世纪初的(  )。",
					"answer": 3,
					"question": [
						"法国",
						"德国",
						"英国",
						"中国"
					]
				},
				{
					"title": "(  )世纪，开始出现金属活字印刷，于是油性墨就产生了。",
					"answer": 2,
					"question": [
						"十二",
						"十三",
						"十四",
						"十五"
					]
				},
				{
					"title": "水印钞纸始于(  )世纪。",
					"answer": 4,
					"question": [
						"十五",
						"十六",
						"十七",
						"十八"
					]
				},
				{
					"title": "(  )明确规定：中华人民共和国的法定货币是人民币，人民币由中国人民银行指定的专门企业印制。",
					"answer": 4,
					"question": [
						"《中华人民共和国宪法》",
						"《中华人民共和国治安条例》",
						"《中华人民共和国物权保护法》",
						"《中华人民共和国人民币管理条例》"
					]
				},
				{
					"title": "钞票一词的由来(  )。",
					"answer": 3,
					"question": [
						"外来语译音",
						"宋代&quot;交子&quot;",
						"清朝&quot;宝钞与官票的合称&quot;",
						"新中国成立以后"
					]
				},
				{
					"title": "我国历史上最早成立的银行是(  )。",
					"answer": 2,
					"question": [
						"交通银行",
						"中国通商银行",
						"大清银行",
						"中国银行"
					]
				},
				{
					"title": "我国古代纸钞的设计形式为(  )印刷，简称中国式。",
					"answer": 2,
					"question": [
						"横版",
						"竖版",
						"横竖混合排版",
						"以上都不是"
					]
				},
				{
					"title": "古钞每一张都要编号，使用(  )编号。",
					"answer": 2,
					"question": [
						"数字",
						"汉子",
						"罗马字",
						"拼音"
					]
				},
				{
					"title": "1910年3月1日&quot;大清银行兑换券&quot;开印，我国(  )之始。",
					"answer": 2,
					"question": [
						"平版印刷",
						"雕刻凹版印刷",
						"石版印刷",
						"凸版印刷"
					]
				},
				{
					"title": "中国钞券设计与西方钞券设计相融合的券别为(  )。",
					"answer": 4,
					"question": [
						"大清银行兑换券",
						"清朝户部官票",
						"大清宝钞",
						"殖边银行兑换券"
					]
				},
				{
					"title": "1908年清政府在北京成立第一个近代化设备官办印钞厂并聘请手工雕刻技师(  )。",
					"answer": 2,
					"question": [
						"王肇宏",
						"海趣",
						"吴锦堂",
						"马荣"
					]
				},
				{
					"title": "1984年(  )首次是用开窗安全线。",
					"answer": 2,
					"question": [
						"美元",
						"英镑",
						"日元",
						"人民币"
					]
				},
				{
					"title": "世界第一张以塑料为基底的钞票是1988年(  )发行的10元面额纪念钞。",
					"answer": 1,
					"question": [
						"澳大利亚",
						"英国",
						"美国",
						"印度尼西亚"
					]
				},
				{
					"title": "公元1452年(  )一名金匠首先发明了手工雕刻铜凹版。",
					"answer": 4,
					"question": [
						"美国",
						"英国",
						"日本",
						"意大利"
					]
				}
			]
		},
		"part4": {
			"name": "质量QC知识",
			"data": [
				{
					"title": "抽样检验是按照规定的抽样方案，(  )地从一批或一个过程中抽取少量个体（作为样本进行的检验。",
					"answer": 2,
					"question": [
						"随便",
						"随机",
						"重复",
						"按规定"
					]
				},
				{
					"title": "质量检验记录是(  )的证据。",
					"answer": 4,
					"question": [
						"计算检验人员工资",
						"计算作业人员工资",
						"企业申报纳税",
						"证实产品质量"
					]
				},
				{
					"title": "只有在(  )通过后才能进行正式批量生产。",
					"answer": 1,
					"question": [
						"首件检验",
						"进货检验",
						"过程检验",
						"自检"
					]
				},
				{
					"title": "质量管理八项原则不包括(  )。",
					"answer": 3,
					"question": [
						"全员参与",
						"过程方法",
						"统计技术",
						"平等互利的供方关系"
					]
				},
				{
					"title": "致力于增强满足质量要求的能力称之为(  )",
					"answer": 4,
					"question": [
						"质量策划",
						"质量保证",
						"质量控制",
						"质量改进"
					]
				},
				{
					"title": "全面质量管理的英文缩写是(  )。",
					"answer": 3,
					"question": [
						"0PPM",
						"PDCA",
						"TQM",
						"QC"
					]
				},
				{
					"title": "质量检验具有的功能是(  )。",
					"answer": 3,
					"question": [
						"识别、选择、防范和报告",
						"判定、防范、报告和改进",
						"鉴别、把关、预防和报告",
						"判断、剔除、隔离和预防"
					]
				},
				{
					"title": "质量是一组(  )满足要求的程度。",
					"answer": 2,
					"question": [
						"特性",
						"固有特性",
						"赋予特性",
						"资源特性"
					]
				},
				{
					"title": "产品质量责任是一种综合的(  )。",
					"answer": 1,
					"question": [
						"法律责任",
						"民事责任",
						"刑事责任",
						"行政责任"
					]
				},
				{
					"title": "不合格与缺陷的定义(  )。",
					"answer": 3,
					"question": [
						"完全相同",
						"完全不同",
						"不合格包含了缺陷",
						"缺陷是严重不合格"
					]
				},
				{
					"title": "PDC  循环中，&quot;P&quot;表示为(C)。",
					"answer": 1,
					"question": [
						"验证",
						"检查",
						"计划",
						"实施"
					]
				},
				{
					"title": "质量检验的作用包括(  )。",
					"answer": 4,
					"question": [
						"监督",
						"保证",
						"预防",
						"以上都是"
					]
				},
				{
					"title": "我国于1978年从(  )引进全面质量管理。",
					"answer": 2,
					"question": [
						"美国",
						"日本",
						"德国",
						"英国"
					]
				},
				{
					"title": "现场质量管理的主要任务是(  )。",
					"answer": 2,
					"question": [
						"质量策划",
						"质量控制",
						"质量突破",
						"质量改进"
					]
				},
				{
					"title": "(  )规定每个职能部门和每个岗位的员工在质量工作中的职责和权限，并与考核奖惩相结合的一种质量管理制度和管理手段。",
					"answer": 4,
					"question": [
						"标准化工作",
						"计量工作",
						"质量记录",
						"质量责任制"
					]
				},
				{
					"title": "可疑产品包括:(  )。",
					"answer": 4,
					"question": [
						"没有标识的产品",
						"标识不明的产品",
						"用偏离校准状态的仪器检验的产品",
						"A+B+C"
					]
				},
				{
					"title": "QC小组的类型一般有(  )。",
					"answer": 1,
					"question": [
						"管理型、现场型、攻关型、服务型、创新型",
						"科学型、现场型、攻关型、服务型、创新型",
						"管理型、现场型、攻关型、服务型、研究型",
						"管理型、现场型、攻关型、服务型、研究型"
					]
				},
				{
					"title": "(  )是全面质量管理活动的基本方法。",
					"answer": 3,
					"question": [
						"数理统计",
						"经济分析",
						"PDCA循环",
						"全员培训"
					]
				},
				{
					"title": "全面质量管理的范围是(  )。",
					"answer": 3,
					"question": [
						"企业各项管理工作",
						"企业生产全过程",
						"产品质量产生、形成和实现的全过程",
						"产品生产全过程"
					]
				},
				{
					"title": "PDC  的方法是一种(B)方法。",
					"answer": 1,
					"question": [
						"统计技术",
						"持续改进",
						"连续评价",
						"自我评价"
					]
				},
				{
					"title": "生产质量检验分为(  )基本要素。",
					"answer": 2,
					"question": [
						"计划、度量、判断、比较",
						"度量、比较、判断、处理",
						"检查、比较、判断、总结",
						"计划、度量、判断、总结"
					]
				},
				{
					"title": "QC小组活动的宗旨是(D)。",
					"answer": 3,
					"question": [
						"激发职工的积极性和创造性",
						"改进质量，降低消耗，提高经济效益",
						"培育积极向上的团队精神",
						"以上全部"
					]
				},
				{
					"title": "QC小组的创新型课题是(  )。",
					"answer": 1,
					"question": [
						"开发新技术、新产品、新方法",
						"按照PDCA循环",
						"把握问题现状",
						"以上都是"
					]
				},
				{
					"title": "&quot;创新型&quot;Q  课题活动程序有(D)步骤。",
					"answer": 3,
					"question": [
						"选择课题、设定目标、确定方案、总结与今后打算",
						"选择课题、设定目标、确定方案、制定对策、总结与今后打算",
						"选择课题、设定目标、制定对策表、确认效果、总结与今后打算",
						"选择课题、设定目标、确定方案、制定对策、确认效果、标准化、总结与今后打算"
					]
				},
				{
					"title": "Q  小组选题应注意(D)。",
					"answer": 3,
					"question": [
						"课题宜小、不用特性值表达、理由充分",
						"课题宜大、特性值表达、理由充分",
						"课题宜小、不用特性值表达、理由充分",
						"课题宜小、特性值表达、理由充分"
					]
				},
				{
					"title": "QC课题现状调查的基本任务是(  )。",
					"answer": 2,
					"question": [
						"到现场去观察、找出问题症结",
						"把握问题现状、找出问题症结",
						"分析原因、设定目标",
						"到现场去观察、设定目标"
					]
				},
				{
					"title": "Q  活动分析原因要(D)。",
					"answer": 3,
					"question": [
						"找出症结、展示部分、分析彻底",
						"找出症结、展示全貌、分析部分",
						"找出部分症结、展示部分、分析彻底",
						"找出症结、展示全貌、分析彻底"
					]
				},
				{
					"title": "《产品质量法》的立法目的是为了加强对产品质量的监督管理，提高产品质量水平，明确产品质量责任，保护(  )的合法权益，维护社会经济秩序。",
					"answer": 4,
					"question": [
						"公民",
						"法人",
						"用户",
						"消费者"
					]
				},
				{
					"title": "国际单位制的国际简称是(  )。",
					"answer": 3,
					"question": [
						"ＧＢ",
						"ISO",
						"SI",
						"IB"
					]
				},
				{
					"title": "20世纪50年代，美国质量管理专家（  ）首次提出质量成本概念。",
					"answer": 2,
					"question": [
						"朱兰",
						"费根堡姆",
						"德鲁克",
						"休哈特"
					]
				},
				{
					"title": "当QC小组成员发生严重分歧时，应寻求(  )解决。",
					"answer": 1,
					"question": [
						"小组外部力量",
						"小组内部力量",
						"部门领导",
						"小组外部力量与小组内部力量"
					]
				},
				{
					"title": "统计质量控制阶段主要是通过(  )进行质量控制。",
					"answer": 1,
					"question": [
						"事后把关",
						"事前预防",
						"过程监控",
						"指标说明"
					]
				}
			]
		},
		"part5": {
			"name": "其它",
			"data": [
				{
					"title": "与消费密切相关的货币供给量是(  )：",
					"answer": 1,
					"question": [
						"M0",
						"M1",
						"M2",
						"M3"
					]
				},
				{
					"title": "观察通货膨胀水平的重要指标是(  )：",
					"answer": 1,
					"question": [
						"CPI",
						"PPI",
						"GDP",
						"GNP"
					]
				},
				{
					"title": "货币的本质是(  )：",
					"answer": 1,
					"question": [
						"固定充当一般等价物的商品",
						"价值符号",
						"流通手段",
						"支付手段"
					]
				},
				{
					"title": "区块链的特点是(  )：",
					"answer": 1,
					"question": [
						"去中心化",
						"无法急速膨胀",
						"大数据管理",
						"分布广泛"
					]
				},
				{
					"title": " 色光三原色是（  ）",
					"answer": 1,
					"question": [
						" 红、绿、蓝",
						" 红、黄、蓝",
						" 黄、品红、青"
					]
				},
				{
					"title": " 微机图像处理系统由（）组成。",
					"answer": 2,
					"question": [
						" 处理器、输入输出设备、键盘",
						" 采集部件、主机和图像的输出部件"
					]
				},
				{
					"title": " 图像采集部件的作用是采集原始的模拟图像数据，并将其转换成（  ）",
					"answer": 2,
					"question": [
						" 模拟信号",
						" 数字信号"
					]
				},
				{
					"title": " 图像分割就是基于（  ）",
					"answer": 1,
					"question": [
						" 在物体的边缘呈现灰度的不连续性",
						" 在物体的边缘呈现灰度的连续性"
					]
				},
				{
					"title": " 用机器代替人眼来做（  ）",
					"answer": 2,
					"question": [
						" 采图和传图",
						" 测量和判断"
					]
				},
				{
					"title": "（）将光学图像转换成电子信号",
					"answer": 2,
					"question": [
						"图像采集卡",
						"图像传感器",
						"图像处理器"
					]
				},
				{
					"title": "CCD于（）年在贝尔实验室研制成功",
					"answer": 1,
					"question": [
						"1969",
						"1970",
						"1971",
						"1972"
					]
				},
				{
					"title": "调整图像的数字化过程通过（）完成。",
					"answer": 2,
					"question": [
						"离散化",
						"抽样、量化"
					]
				},
				{
					"title": "量化是把抽样后所得的连续量表示的像素值离散化为（）的操作。",
					"answer": 1,
					"question": [
						"整数值",
						"小数值",
						"浮点数"
					]
				}
			]
		},
		"part6": {
			"name": "质量体系",
			"data": [
				{
					"title": "2000版ISO9000族质量管理体系标准发布于（    ）。",
					"answer": 4,
					"question": [
						"2月15日 ",
						"6月15日",
						"8月15日 ",
						"12月15日"
					]
				},
				{
					"title": "质量管理体系是在 指挥和控制组织的管理体系。（  ）。",
					"answer": 3,
					"question": [
						"环境方面  ",
						"安全方面",
						"质量方面  ",
						"财务方面"
					]
				},
				{
					"title": "ISO9000族标准自发布后至今已有 国家和地区采用了这套标准。（  ）",
					"answer": 2,
					"question": [
						"100多个",
						"150多个",
						"200多个",
						"250多个"
					]
				},
				{
					"title": "由组织自己或以组织的名义进行，可作为组织自我合格声明的审核称为（  ）",
					"answer": 1,
					"question": [
						"第一方审核",
						"第二方审核",
						"第三方审核",
						"外部审核"
					]
				},
				{
					"title": "测量误差可能来源于 不理想。（  ）",
					"answer": 4,
					"question": [
						"测量仪器",
						"测量环境 ",
						"测量人员、测量程序",
						"全对"
					]
				},
				{
					"title": "质量是一组 满足要求的程度（  ） ",
					"answer": 3,
					"question": [
						"特性 ",
						"内在特性和外在特性",
						"固有特性 ",
						"赋预特性"
					]
				},
				{
					"title": "下列特性中属于固有特性的是（    ）",
					"answer": 3,
					"question": [
						"价格",
						"保修期",
						"噪音",
						"礼貌"
					]
				},
				{
					"title": "描述质量管理体系业绩改进指南的标准是（  ）。",
					"answer": 2,
					"question": [
						"ISO9001",
						"ISO9004",
						"ISO9000",
						"ISO19011"
					]
				},
				{
					"title": "ISO9000：2000标准表述了建立和运行质量管理体系应遵循的 方面的质量管理体系基础知识。（  ）",
					"answer": 3,
					"question": [
						"8个 ",
						"10个",
						"12个 ",
						"14个"
					]
				},
				{
					"title": "提供了质量管理体系的要求，供组织需要证实其具有稳定地提供满足顾客要求和适用法律法规要求的产品的能力时应用的标准是（  ）。",
					"answer": 2,
					"question": [
						"ISO9000B标准",
						"ISO9001标准",
						"ISO9004标准",
						"ISO19001标准"
					]
				},
				{
					"title": "第三方审核的主要作用，以下不正确的是（  ）。",
					"answer": 3,
					"question": [
						"确定受审核方的质量管理体系是否能被认证注册",
						"确定质量管理体系要求是否符合规定要求",
						"沟通供需双方对质量要求的共识",
						"确定现行的质量管理体系实现规定质量目标的有效性"
					]
				},
				{
					"title": "从国外工业发达国家的情况来看，质量管理的发展大体经历了质量检验、统计质量控制和 三个阶段。（  ）",
					"answer": 1,
					"question": [
						"全面质量管理",
						"外观质量管理",
						"内在质量管理",
						"质量管理体系"
					]
				},
				{
					"title": "质量检验按检查地点分类，以下不正确的是（   ）",
					"answer": 4,
					"question": [
						"进厂检验",
						"工序检验",
						"出厂检验",
						"成品检验"
					]
				},
				{
					"title": "质量检验检验数量分类，可分为（  ）。",
					"answer": 1,
					"question": [
						"全数检验、抽样检验",
						"工序检验、成品检验",
						"抽样检验、成品检验",
						"成品检验、工序检验"
					]
				},
				{
					"title": "质量检验按检验人员分类，以下不正确的是（  ）。",
					"answer": 4,
					"question": [
						"自检",
						"专检",
						"互检",
						"成品检验"
					]
				},
				{
					"title": "质量检验的职能包括：（  ）",
					"answer": 4,
					"question": [
						"质量保证",
						"质量预防",
						"质量报告、质量监督",
						"全对"
					]
				}
			]
		},
		"part7": {
			"name": "质量法",
			"data": [
				{
					"title": "中华人民共和国产品质量法施行日期是（  ）",
					"answer": 2,
					"question": [
						"1993年2月22日",
						"1993年9月1日",
						"2000年7月8日",
						"2000年9月1日"
					]
				},
				{
					"title": "国务院颁布《质量发展纲要》实施时间是（  ）",
					"answer": 3,
					"question": [
						"1996年—2010年",
						"2010年—2016年",
						"2011年—2020年",
						"2011年—2016年"
					]
				},
				{
					"title": "质量发展的重要基石是（  ）。",
					"answer": 3,
					"question": [
						"以人为本",
						"安全为先",
						"诚信守法",
						"以质取胜"
					]
				},
				{
					"title": "质量必须履行的需求主要指（  ）。",
					"answer": 4,
					"question": [
						"法律法规规定",
						"国家强制标准",
						"合同规定",
						"以上全部"
					]
				},
				{
					"title": "生产者不得生产（  ）的产品。",
					"answer": 1,
					"question": [
						"国家明令淘汰",
						"国家明令停止销售",
						"国家明令淘汰和停止销售",
						"国家明令淘汰并停止销售"
					]
				},
				{
					"title": "《质量发展纲要（2011-2020年）》提出的质量发展目标不包括下列哪项（  ）。",
					"answer": 4,
					"question": [
						"质量基础进一步夯实",
						"质量总体水平显著提升",
						"质量发展成果惠及全体人民",
						"全面建成小康社会"
					]
				},
				{
					"title": "质量主体责任由（  ）承担。",
					"answer": 1,
					"question": [
						"企业",
						"当地政府",
						"相关部门",
						"行业协会"
					]
				},
				{
					"title": "(  )是企业质量安全的第一责任者。",
					"answer": 3,
					"question": [
						"安全部主管",
						"生产部主管",
						"管理者代表",
						"技术主管"
					]
				},
				{
					"title": "《质量发展纲要（2011-2020年）》明确了质量安全工作的主体是（  ）。",
					"answer": 3,
					"question": [
						"行业",
						"政府",
						"企业",
						"消费者"
					]
				},
				{
					"title": "《产品质量法》规定产品质量责任包括（  ）。",
					"answer": 2,
					"question": [
						"企业赔偿责任，商家赔偿责任",
						"产品责任，民事责任，行政责任，刑事责任",
						"一切责任",
						"法律责任"
					]
				},
				{
					"title": "产品质量监督部门查处涉嫌违反《产品质量法》规定的行为时，可以行使（  ）。",
					"answer": 3,
					"question": [
						"拘留权",
						"留置权",
						"调查权",
						"冻结银行存款"
					]
				},
				{
					"title": "任何单位和个人有权对违反《产品质量法》规定的行为，向产品质量监督部门或者其他有关部门（  ）。",
					"answer": 2,
					"question": [
						"抗诉",
						"检举",
						"控告",
						"申诉"
					]
				},
				{
					"title": "承担产品质量责任的主体是(  ）。",
					"answer": 1,
					"question": [
						"生产者和销售者",
						"生产者和使用者",
						"生产、销售者和使用者",
						"使用者"
					]
				}
			]
		},
		"part8": {
			"name": "质量成本与风险",
			"data": [
				{
					"title": "成钞公司《经营管理基本法》第三十一条：建立（  ）机制，在安全、质量可控的前提下，达到成本最优。",
					"question": [
						"安全成本分析",
						"质量成本分析",
						"安全成本和质量成本分析",
						"安全风险和质量风险分析"
					],
					"answer": 3
				},
				{
					"title": "质量风险管理的原则有（  ）",
					"question": [
						"以保证产品质量为前提",
						"所有存在的或潜在的风险都应予以识别",
						"认识到风险带来或可能带来的全部影响",
						"以上全是"
					],
					"answer": 4
				},
				{
					"title": "质量风险管理要求（  ）",
					"question": [
						"建立体系",
						"加强培训",
						"实施奖惩",
						"以上全是"
					],
					"answer": 4
				},
				{
					"title": "质量风险管理内容（  ）",
					"question": [
						"质量风险识别分析",
						"风险评估、风险处理",
						"风险监控和风险总结",
						"以上全是"
					],
					"answer": 4
				},
				{
					"title": "质量风险分析是将人民币在整个生产和质量控制过程中可能造成质量问题的明显或潜在的风险辨识出来，并评估这些风险可能造成的危害。（  ）",
					"question": [
						"错误",
						"正确"
					],
					"answer": 2
				},
				{
					"title": "质量风险分析前，应当核查该类风险在行业内是否已进行过类似的风险分析。如果已进行过风险分析，应当根据新的情况和企业实际核实其有效性，经核实原风险分析仍然有效的，可不再进行新的风险管理。（  ）",
					"question": [
						"错误",
						"正确"
					],
					"answer": 2
				},
				{
					"title": "质量风险处理措施主要有：（  ）",
					"question": [
						"加大风险监控，提高质量风险的可检测度；",
						"采取减小风险发生可能性的相应措施；",
						"主动放弃或改变可引起人民币质量损失的质量活动、改变或杜绝质量风险的源头；",
						"以上全是"
					],
					"answer": 4
				},
				{
					"title": "哪些情况出现时，企业应当实施质量风险分析：（  ）",
					"question": [
						"新材料、新设备的生产应用",
						"对产品质量有重大质量要素或质量活动发生了变更",
						"出现外部严重产品质量反馈或内部连续性质量问题发生",
						"以上全是"
					],
					"answer": 4
				},
				{
					"title": "质量风险评估就是对已分析识别出的明显或潜在的质量风险进一步分析和度量，以估计这些风险对企业造成损失的可能性大小和程度的轻重。（  ）",
					"question": [
						"错误",
						"正确"
					],
					"answer": 2
				}
			]
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var SPORT = __webpack_require__(11);

	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if (r !== null) return decodeURI(r[2]);
		return null; //返回参数值
	}

	var num = getUrlParam('num');
	num = (num === null) ? 50 : Number.parseInt(num);

	var allowEdit = getUrlParam('edit');
	allowEdit = (allowEdit === null) ? true : false;

	var exam = {
		loadComplete: false,
		total: 0, //总分
		error: [], //错误题目（原顺序）
		answerList: [], //乱序后的答案顺序
		isAnswered: [], //题目回答状态
		timeReleased: false, //时间用尽
		isStarted: false, //活动是否开始
		timeLength: 40 * 60 * 1000, //启用时间限制 0为不限制
		sourceList: [], //原题目顺序
		scoresPerAnswer: 0, //每道题目分数
		isSubmit: false, //数据是否提交
		isLogin: false, //是否登录
		loginData: {}, //用户登录信息
		maxAnswerNum: num, //最大抽取多少道题目
		answerTimes: 0, //每个用户最多回答几次
		examPaper: "safe", //试卷文件
		sportDate: "9月5日至25日",
		sportid: SPORT.QUALITY,
		editAnswer: allowEdit, //允许修改答案
		curID: 0, //当前答题数
		realMatch: false, //实时提交分数，用于比赛中用户成绩获取
		showTips: false,
		lastPage: 0,
		secColor: [],
		debug: false, //无网络测试模式
		titleNumPerPart: 5, // 每关题目数量
		part: 9, //答题关数
		lastAnswerTime: 0
	};

	module.exports = exam;

/***/ },
/* 25 */
/***/ function(module, exports) {

	var PAPER = ['safe', 'party3', 'party3', 'cost', 'costgw', 'party5','xian','quality'];
	module.exports = PAPER;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** 
	* jQuery WeUI V0.8.0 
	* By 言川
	* http://lihongxun945.github.io/jquery-weui/
	 */
	/* global $:true */
	/* global WebKitCSSMatrix:true */

	(function($) {
	  "use strict";

	  $.fn.transitionEnd = function(callback) {
	    var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	      i, dom = this;

	    function fireCallBack(e) {
	      /*jshint validthis:true */
	      if (e.target !== this) return;
	      callback.call(this, e);
	      for (i = 0; i < events.length; i++) {
	        dom.off(events[i], fireCallBack);
	      }
	    }
	    if (callback) {
	      for (i = 0; i < events.length; i++) {
	        dom.on(events[i], fireCallBack);
	      }
	    }
	    return this;
	  };

	  $.support = (function() {
	    var support = {
	      touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch)
	    };
	    return support;
	  })();

	  $.touchEvents = {
	    start: $.support.touch ? 'touchstart' : 'mousedown',
	    move: $.support.touch ? 'touchmove' : 'mousemove',
	    end: $.support.touch ? 'touchend' : 'mouseup'
	  };

	  $.getTouchPosition = function(e) {
	    e = e.originalEvent || e; //jquery wrap the originevent
	    if(e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
	      return {
	        x: e.targetTouches[0].pageX,
	        y: e.targetTouches[0].pageY
	      };
	    } else {
	      return {
	        x: e.pageX,
	        y: e.pageY
	      };
	    }
	  };

	  $.fn.scrollHeight = function() {
	    return this[0].scrollHeight;
	  };

	  $.fn.transform = function(transform) {
	    for (var i = 0; i < this.length; i++) {
	      var elStyle = this[i].style;
	      elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	    }
	    return this;
	  };
	  $.fn.transition = function(duration) {
	    if (typeof duration !== 'string') {
	      duration = duration + 'ms';
	    }
	    for (var i = 0; i < this.length; i++) {
	      var elStyle = this[i].style;
	      elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	    }
	    return this;
	  };

	  $.getTranslate = function (el, axis) {
	    var matrix, curTransform, curStyle, transformMatrix;

	    // automatic axis detection
	    if (typeof axis === 'undefined') {
	      axis = 'x';
	    }

	    curStyle = window.getComputedStyle(el, null);
	    if (window.WebKitCSSMatrix) {
	      // Some old versions of Webkit choke when 'none' is passed; pass
	      // empty string instead in this case
	      transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
	    }
	    else {
	      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	      matrix = transformMatrix.toString().split(',');
	    }

	    if (axis === 'x') {
	      //Latest Chrome and webkits Fix
	      if (window.WebKitCSSMatrix)
	        curTransform = transformMatrix.m41;
	      //Crazy IE10 Matrix
	      else if (matrix.length === 16)
	        curTransform = parseFloat(matrix[12]);
	      //Normal Browsers
	      else
	        curTransform = parseFloat(matrix[4]);
	    }
	    if (axis === 'y') {
	      //Latest Chrome and webkits Fix
	      if (window.WebKitCSSMatrix)
	        curTransform = transformMatrix.m42;
	      //Crazy IE10 Matrix
	      else if (matrix.length === 16)
	        curTransform = parseFloat(matrix[13]);
	      //Normal Browsers
	      else
	        curTransform = parseFloat(matrix[5]);
	    }

	    return curTransform || 0;
	  };
	  $.requestAnimationFrame = function (callback) {
	    if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
	    else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
	    else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);
	    else {
	      return window.setTimeout(callback, 1000 / 60);
	    }
	  };

	  $.cancelAnimationFrame = function (id) {
	    if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
	    else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
	    else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);
	    else {
	      return window.clearTimeout(id);
	    }  
	  };

	  $.fn.join = function(arg) {
	    return this.toArray().join(arg);
	  }
	})($);

	/*===========================
	  Template7 Template engine
	  ===========================*/
	/* global $:true */
	/* jshint unused:false */
	/* jshint forin:false */
	+function ($) {
	  "use strict";
	  $.Template7 = $.t7 = (function () {
	    function isArray(arr) {
	      return Object.prototype.toString.apply(arr) === '[object Array]';
	    }
	    function isObject(obj) {
	      return obj instanceof Object;
	    }
	    function isFunction(func) {
	      return typeof func === 'function';
	    }
	    var cache = {};
	    function helperToSlices(string) {
	      var helperParts = string.replace(/[{}#}]/g, '').split(' ');
	      var slices = [];
	      var shiftIndex, i, j;
	      for (i = 0; i < helperParts.length; i++) {
	        var part = helperParts[i];
	        if (i === 0) slices.push(part);
	        else {
	          if (part.indexOf('"') === 0) {
	            // Plain String
	            if (part.match(/"/g).length === 2) {
	              // One word string
	              slices.push(part);
	            }
	            else {
	              // Find closed Index
	              shiftIndex = 0;
	              for (j = i + 1; j < helperParts.length; j++) {
	                part += ' ' + helperParts[j];
	                if (helperParts[j].indexOf('"') >= 0) {
	                  shiftIndex = j;
	                  slices.push(part);
	                  break;
	                }
	              }
	              if (shiftIndex) i = shiftIndex;
	            }
	          }
	          else {
	            if (part.indexOf('=') > 0) {
	              // Hash
	              var hashParts = part.split('=');
	              var hashName = hashParts[0];
	              var hashContent = hashParts[1];
	              if (hashContent.match(/"/g).length !== 2) {
	                shiftIndex = 0;
	                for (j = i + 1; j < helperParts.length; j++) {
	                  hashContent += ' ' + helperParts[j];
	                  if (helperParts[j].indexOf('"') >= 0) {
	                    shiftIndex = j;
	                    break;
	                  }
	                }
	                if (shiftIndex) i = shiftIndex;
	              }
	              var hash = [hashName, hashContent.replace(/"/g,'')];
	              slices.push(hash);
	            }
	            else {
	              // Plain variable
	              slices.push(part);
	            }
	          }
	        }
	      }
	      return slices;
	    }
	    function stringToBlocks(string) {
	      var blocks = [], i, j, k;
	      if (!string) return [];
	      var _blocks = string.split(/({{[^{^}]*}})/);
	      for (i = 0; i < _blocks.length; i++) {
	        var block = _blocks[i];
	        if (block === '') continue;
	        if (block.indexOf('{{') < 0) {
	          blocks.push({
	            type: 'plain',
	            content: block
	          });
	        }
	        else {
	          if (block.indexOf('{/') >= 0) {
	            continue;
	          }
	          if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
	            // Simple variable
	            blocks.push({
	              type: 'variable',
	              contextName: block.replace(/[{}]/g, '')
	            });
	            continue;
	          }
	          // Helpers
	          var helperSlices = helperToSlices(block);
	          var helperName = helperSlices[0];
	          var helperContext = [];
	          var helperHash = {};
	          for (j = 1; j < helperSlices.length; j++) {
	            var slice = helperSlices[j];
	            if (isArray(slice)) {
	              // Hash
	              helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
	            }
	            else {
	              helperContext.push(slice);
	            }
	          }

	          if (block.indexOf('{#') >= 0) {
	            // Condition/Helper
	            var helperStartIndex = i;
	            var helperContent = '';
	            var elseContent = '';
	            var toSkip = 0;
	            var shiftIndex;
	            var foundClosed = false, foundElse = false, foundClosedElse = false, depth = 0;
	            for (j = i + 1; j < _blocks.length; j++) {
	              if (_blocks[j].indexOf('{{#') >= 0) {
	                depth ++;
	              }
	              if (_blocks[j].indexOf('{{/') >= 0) {
	                depth --;
	              }
	              if (_blocks[j].indexOf('{{#' + helperName) >= 0) {
	                helperContent += _blocks[j];
	                if (foundElse) elseContent += _blocks[j];
	                toSkip ++;
	              }
	              else if (_blocks[j].indexOf('{{/' + helperName) >= 0) {
	                if (toSkip > 0) {
	                  toSkip--;
	                  helperContent += _blocks[j];
	                  if (foundElse) elseContent += _blocks[j];
	                }
	                else {
	                  shiftIndex = j;
	                  foundClosed = true;
	                  break;
	                }
	              }
	              else if (_blocks[j].indexOf('else') >= 0 && depth === 0) {
	                foundElse = true;
	              }
	              else {
	                if (!foundElse) helperContent += _blocks[j];
	                if (foundElse) elseContent += _blocks[j];
	              }

	            }
	            if (foundClosed) {
	              if (shiftIndex) i = shiftIndex;
	              blocks.push({
	                type: 'helper',
	                helperName: helperName,
	                contextName: helperContext,
	                content: helperContent,
	                inverseContent: elseContent,
	                hash: helperHash
	              });
	            }
	          }
	          else if (block.indexOf(' ') > 0) {
	            blocks.push({
	              type: 'helper',
	              helperName: helperName,
	              contextName: helperContext,
	              hash: helperHash
	            });
	          }
	        }
	      }
	      return blocks;
	    }
	    var Template7 = function (template) {
	      var t = this;
	      t.template = template;

	      function getCompileFn(block, depth) {
	        if (block.content) return compile(block.content, depth);
	        else return function () {return ''; };
	      }
	      function getCompileInverse(block, depth) {
	        if (block.inverseContent) return compile(block.inverseContent, depth);
	        else return function () {return ''; };
	      }
	      function getCompileVar(name, ctx) {
	        var variable, parts, levelsUp = 0, initialCtx = ctx;
	        if (name.indexOf('../') === 0) {
	          levelsUp = name.split('../').length - 1;
	          var newDepth = ctx.split('_')[1] - levelsUp;
	          ctx = 'ctx_' + (newDepth >= 1 ? newDepth : 1);
	          parts = name.split('../')[levelsUp].split('.');
	        }
	        else if (name.indexOf('@global') === 0) {
	          ctx = '$.Template7.global';
	          parts = name.split('@global.')[1].split('.');
	        }
	        else if (name.indexOf('@root') === 0) {
	          ctx = 'ctx_1';
	          parts = name.split('@root.')[1].split('.');
	        }
	        else {
	          parts = name.split('.');
	        }
	        variable = ctx;
	        for (var i = 0; i < parts.length; i++) {
	          var part = parts[i];
	          if (part.indexOf('@') === 0) {
	            if (i > 0) {
	              variable += '[(data && data.' + part.replace('@', '') + ')]';
	            }
	            else {
	              variable = '(data && data.' + name.replace('@', '') + ')';
	            }
	          }
	          else {
	            if (isFinite(part)) {
	              variable += '[' + part + ']';
	            }
	            else {
	              if (part.indexOf('this') === 0) {
	                variable = part.replace('this', ctx);
	              }
	              else {
	                variable += '.' + part;       
	              }
	            }
	          }
	        }

	        return variable;
	      }
	      function getCompiledArguments(contextArray, ctx) {
	        var arr = [];
	        for (var i = 0; i < contextArray.length; i++) {
	          if (contextArray[i].indexOf('"') === 0) arr.push(contextArray[i]);
	          else {
	            arr.push(getCompileVar(contextArray[i], ctx));
	          }
	        }
	        return arr.join(', ');
	      }
	      function compile(template, depth) {
	        depth = depth || 1;
	        template = template || t.template;
	        if (typeof template !== 'string') {
	          throw new Error('Template7: Template must be a string');
	        }
	        var blocks = stringToBlocks(template);
	        if (blocks.length === 0) {
	          return function () { return ''; };
	        }
	        var ctx = 'ctx_' + depth;
	        var resultString = '(function (' + ctx + ', data) {\n';
	        if (depth === 1) {
	          resultString += 'function isArray(arr){return Object.prototype.toString.apply(arr) === \'[object Array]\';}\n';
	          resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
	          resultString += 'function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
	        }
	        resultString += 'var r = \'\';\n';
	        var i, j, context;
	        for (i = 0; i < blocks.length; i++) {
	          var block = blocks[i];
	          // Plain block
	          if (block.type === 'plain') {
	            resultString += 'r +=\'' + (block.content).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'') + '\';';
	            continue;
	          }
	          var variable, compiledArguments;
	          // Variable block
	          if (block.type === 'variable') {
	            variable = getCompileVar(block.contextName, ctx);
	            resultString += 'r += c(' + variable + ', ' + ctx + ');';
	          }
	          // Helpers block
	          if (block.type === 'helper') {
	            if (block.helperName in t.helpers) {
	              compiledArguments = getCompiledArguments(block.contextName, ctx);
	              resultString += 'r += ($.Template7.helpers.' + block.helperName + ').call(' + ctx + ', ' + (compiledArguments && (compiledArguments + ', ')) +'{hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth+1) + ', inverse: ' + getCompileInverse(block, depth+1) + ', root: ctx_1});';
	            }
	            else {
	              if (block.contextName.length > 0) {
	                throw new Error('Template7: Missing helper: "' + block.helperName + '"');
	              }
	              else {
	                variable = getCompileVar(block.helperName, ctx);
	                resultString += 'if (' + variable + ') {';
	                resultString += 'if (isArray(' + variable + ')) {';
	                resultString += 'r += ($.Template7.helpers.each).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth+1) + ', inverse: ' + getCompileInverse(block, depth+1) + ', root: ctx_1});';
	                resultString += '}else {';
	                resultString += 'r += ($.Template7.helpers.with).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth+1) + ', inverse: ' + getCompileInverse(block, depth+1) + ', root: ctx_1});';
	                resultString += '}}';
	              }
	            }
	          }
	        }
	        resultString += '\nreturn r;})';
	        return eval.call(window, resultString);
	      }
	      t.compile = function (template) {
	        if (!t.compiled) {
	          t.compiled = compile(template);
	        }
	        return t.compiled;
	      };
	    };
	    Template7.prototype = {
	      options: {},
	      helpers: {
	        'if': function (context, options) {
	          if (isFunction(context)) { context = context.call(this); }
	          if (context) {
	            return options.fn(this, options.data);
	          }
	          else {
	            return options.inverse(this, options.data);
	          }
	        },
	        'unless': function (context, options) {
	          if (isFunction(context)) { context = context.call(this); }
	          if (!context) {
	            return options.fn(this, options.data);
	          }
	          else {
	            return options.inverse(this, options.data);
	          }
	        },
	        'each': function (context, options) {
	          var ret = '', i = 0;
	          if (isFunction(context)) { context = context.call(this); }
	          if (isArray(context)) {
	            if (options.hash.reverse) {
	              context = context.reverse();
	            }
	            for (i = 0; i < context.length; i++) {
	              ret += options.fn(context[i], {first: i === 0, last: i === context.length - 1, index: i});
	            }
	            if (options.hash.reverse) {
	              context = context.reverse();
	            }
	          }
	          else {
	            for (var key in context) {
	              i++;
	              ret += options.fn(context[key], {key: key});
	            }
	          }
	          if (i > 0) return ret;
	          else return options.inverse(this);
	        },
	        'with': function (context, options) {
	          if (isFunction(context)) { context = context.call(this); }
	          return options.fn(context);
	        },
	        'join': function (context, options) {
	          if (isFunction(context)) { context = context.call(this); }
	          return context.join(options.hash.delimiter || options.hash.delimeter);
	        },
	        'js': function (expression, options) {
	          var func;
	          if (expression.indexOf('return')>=0) {
	            func = '(function(){'+expression+'})';
	          }
	          else {
	            func = '(function(){return ('+expression+')})';
	          }
	          return eval.call(this, func).call(this);
	        },
	        'js_compare': function (expression, options) {
	          var func;
	          if (expression.indexOf('return')>=0) {
	            func = '(function(){'+expression+'})';
	          }
	          else {
	            func = '(function(){return ('+expression+')})';
	          }
	          var condition = eval.call(this, func).call(this);
	          if (condition) {
	            return options.fn(this, options.data);
	          }
	          else {
	            return options.inverse(this, options.data);   
	          }
	        }
	      }
	    };
	    var t7 = function (template, data) {
	      if (arguments.length === 2) {
	        var instance = new Template7(template);
	        var rendered = instance.compile()(data);
	        instance = null;
	        return (rendered);
	      }
	      else return new Template7(template);
	    };
	    t7.registerHelper = function (name, fn) {
	      Template7.prototype.helpers[name] = fn;
	    };
	    t7.unregisterHelper = function (name) {
	      Template7.prototype.helpers[name] = undefined;  
	      delete Template7.prototype.helpers[name];
	    };

	    t7.compile = function (template, options) {
	      var instance = new Template7(template, options);
	      return instance.compile();
	    };

	    t7.options = Template7.prototype.options;
	    t7.helpers = Template7.prototype.helpers;
	    return t7;
	  })();
	}($);

	/*! Hammer.JS - v2.0.8 - 2016-04-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.8';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');

	+ function($) {
	  "use strict";

	  var defaults;
	  
	  $.modal = function(params, onOpen) {
	    params = $.extend({}, defaults, params);


	    var buttons = params.buttons;

	    var buttonsHtml = buttons.map(function(d, i) {
	      return '<a href="javascript:;" class="weui_btn_dialog ' + (d.className || "") + '">' + d.text + '</a>';
	    }).join("");

	    var tpl = '<div class="weui_dialog">' +
	                '<div class="weui_dialog_hd"><strong class="weui_dialog_title">' + params.title + '</strong></div>' +
	                ( params.text ? '<div class="weui_dialog_bd">'+params.text+'</div>' : '')+
	                '<div class="weui_dialog_ft">' + buttonsHtml + '</div>' +
	              '</div>';
	    
	    var dialog = $.openModal(tpl, onOpen);

	    dialog.find(".weui_btn_dialog").each(function(i, e) {
	      var el = $(e);
	      el.click(function() {
	        //先关闭对话框，再调用回调函数
	        if(params.autoClose) $.closeModal();

	        if(buttons[i].onClick) {
	          buttons[i].onClick.call(dialog);
	        }
	      });
	    });

	    return dialog;
	  };

	  $.openModal = function(tpl, onOpen) {
	    var mask = $("<div class='weui_mask'></div>").appendTo(document.body);
	    mask.show();

	    var dialog = $(tpl).appendTo(document.body);
	 
	    if (onOpen) {
	      dialog.transitionEnd(function () {
	        onOpen.call(dialog);
	      });
	    }   

	    dialog.show();
	    mask.addClass("weui_mask_visible");
	    dialog.addClass("weui_dialog_visible");


	    return dialog;
	  }

	  $.closeModal = function() {
	    $(".weui_mask_visible").removeClass("weui_mask_visible").transitionEnd(function() {
	      $(this).remove();
	    });
	    $(".weui_dialog_visible").removeClass("weui_dialog_visible").transitionEnd(function() {
	      $(this).remove();
	    });
	  };

	  $.alert = function(text, title, onOK) {
	    var config;
	    if (typeof text === 'object') {
	      config = text;
	    } else {
	      if (typeof title === 'function') {
	        onOK = arguments[1];
	        title = undefined;
	      }

	      config = {
	        text: text,
	        title: title,
	        onOK: onOK
	      }
	    }
	    return $.modal({
	      text: config.text,
	      title: config.title,
	      buttons: [{
	        text: defaults.buttonOK,
	        className: "primary",
	        onClick: config.onOK
	      }]
	    });
	  }

	  $.confirm = function(text, title, onOK, onCancel) {
	    var config;
	    if (typeof text === 'object') {
	      config = text
	    } else {
	      if (typeof title === 'function') {
	        onCancel = arguments[2];
	        onOK = arguments[1];
	        title = undefined;
	      }

	      config = {
	        text: text,
	        title: title,
	        onOK: onOK,
	        onCancel: onCancel
	      }
	    }
	    return $.modal({
	      text: config.text,
	      title: config.title,
	      buttons: [
	      {
	        text: defaults.buttonCancel,
	        className: "default",
	        onClick: config.onCancel
	      },
	      {
	        text: defaults.buttonOK,
	        className: "primary",
	        onClick: config.onOK
	      }]
	    });
	  };

	  //如果参数过多，建议通过 config 对象进行配置，而不是传入多个参数。
	  $.prompt = function(text, title, onOK, onCancel, input) {
	    var config;
	    if (typeof text === 'object') {
	      config = text;
	    } else {
	      if (typeof title === 'function') {
	        input = arguments[3];
	        onCancel = arguments[2];
	        onOK = arguments[1];
	        title = undefined;
	      }
	      config = {
	        text: text,
	        title: title,
	        input: input,
	        onOK: onOK,
	        onCancel: onCancel,
	        empty: false  //allow empty
	      }
	    }

	    var modal = $.modal({
	      text: '<p class="weui-prompt-text">'+(config.text || '')+'</p><input type="text" class="weui_input weui-prompt-input" id="weui-prompt-input" value="' + (config.input || '') + '" />',
	      title: config.title,
	      autoClose: false,
	      buttons: [
	      {
	        text: defaults.buttonCancel,
	        className: "default",
	        onClick: function () {
	          $.closeModal();
	          config.onCancel && config.onCancel.call(modal);
	        }
	      },
	      {
	        text: defaults.buttonOK,
	        className: "primary",
	        onClick: function() {
	          var input = $("#weui-prompt-input").val();
	          if (!config.empty && (input === "" || input === null)) {
	            modal.find('.weui-prompt-input').focus()[0].select();
	            return false;
	          }
	          $.closeModal();
	          config.onOK && config.onOK.call(modal, input);
	        }
	      }]
	    }, function () {
	      this.find('.weui-prompt-input').focus()[0].select();
	    });

	    return modal;
	  };

	  //如果参数过多，建议通过 config 对象进行配置，而不是传入多个参数。
	  $.login = function(text, title, onOK, onCancel, username, password) {
	    var config;
	    if (typeof text === 'object') {
	      config = text;
	    } else {
	      if (typeof title === 'function') {
	        password = arguments[4];
	        username = arguments[3];
	        onCancel = arguments[2];
	        onOK = arguments[1];
	        title = undefined;
	      }
	      config = {
	        text: text,
	        title: title,
	        username: username,
	        password: password,
	        onOK: onOK,
	        onCancel: onCancel
	      }
	    }

	    var modal = $.modal({
	      text: '<p class="weui-prompt-text">'+(config.text || '')+'</p>' +
	            '<input type="text" class="weui_input weui-prompt-input" id="weui-prompt-username" value="' + (config.username || '') + '" placeholder="输入用户名" />' +
	            '<input type="password" class="weui_input weui-prompt-input" id="weui-prompt-password" value="' + (config.password || '') + '" placeholder="输入密码" />',
	      title: config.title,
	      autoClose: false,
	      buttons: [
	      {
	        text: defaults.buttonCancel,
	        className: "default",
	        onClick: function () {
	          $.closeModal();
	          config.onCancel && config.onCancel.call(modal);
	        }
	      }, {
	        text: defaults.buttonOK,
	        className: "primary",
	        onClick: function() {
	          var username = $("#weui-prompt-username").val();
	          var password = $("#weui-prompt-password").val();
	          if (!config.empty && (username === "" || username === null)) {
	            modal.find('#weui-prompt-username').focus()[0].select();
	            return false;
	          }
	          if (!config.empty && (password === "" || password === null)) {
	            modal.find('#weui-prompt-password').focus()[0].select();
	            return false;
	          }
	          $.closeModal();
	          config.onOK && config.onOK.call(modal, username, password);
	        }
	      }]
	    }, function () {
	      this.find('#weui-prompt-username').focus()[0].select();
	    });

	    return modal;
	  };

	  defaults = $.modal.prototype.defaults = {
	    title: "提示",
	    text: undefined,
	    buttonOK: "确定",
	    buttonCancel: "取消",
	    buttons: [{
	      text: "确定",
	      className: "primary"
	    }],
	    autoClose: true //点击按钮自动关闭对话框，如果你不希望点击按钮就关闭对话框，可以把这个设置为false
	  };

	}($);

	+ function($) {
	  "use strict";

	  var defaults;
	  
	  var show = function(html, className) {

	    className = className || "";
	    var mask = $("<div class='weui_mask_transparent'></div>").appendTo(document.body);

	    var tpl = '<div class="weui_toast ' + className + '">' + html + '</div>';
	    var dialog = $(tpl).appendTo(document.body);

	    dialog.show();
	    dialog.addClass("weui_toast_visible");
	  };

	  var hide = function(callback) {
	    $(".weui_mask_transparent").remove();
	    $(".weui_toast_visible").removeClass("weui_toast_visible").transitionEnd(function() {
	      var $this = $(this);
	      $this.remove();
	      callback && callback($this);
	    });
	  }

	  $.toast = function(text, style, callback) {
	    if(typeof style === "function") {
	      callback = style;
	    }
	    var className;
	    if(style == "cancel") {
	      className = "weui_toast_cancel";
	    } else if(style == "forbidden") {
	      className = "weui_toast_forbidden";
	    } else if(style == "text") {
	      className = "weui_toast_text";
	    }
	    show('<i class="weui_icon_toast"></i><p class="weui_toast_content">' + (text || "已经完成") + '</p>', className);

	    setTimeout(function() {
	      hide(callback);
	    }, toastDefaults.duration);
	  }

	  $.showLoading = function(text) {
	    var html = '<div class="weui_loading">';
	    for(var i=0;i<12;i++) {
	      html += '<div class="weui_loading_leaf weui_loading_leaf_' + i + '"></div>';
	    }
	    html += '</div>';
	    html += '<p class="weui_toast_content">' + (text || "数据加载中") + '</p>';
	    show(html, 'weui_loading_toast');
	  }

	  $.hideLoading = function() {
	    hide();
	  }

	  var toastDefaults = $.toast.prototype.defaults = {
	    duration: 2000
	  }

	}($);

	+ function($) {
	  "use strict";

	  var defaults;
	  
	  var show = function(params) {

	    var mask = $("<div class='weui_mask weui_actions_mask'></div>").appendTo(document.body);

	    var actions = params.actions || [];

	    var actionsHtml = actions.map(function(d, i) {
	      return '<div class="weui_actionsheet_cell ' + (d.className || "") + '">' + d.text + '</div>';
	    }).join("");

	    var titleHtml = "";
	    
	    if (params.title) {
	      titleHtml = '<div class="weui_actionsheet_title">' + params.title + '</div>';
	    }

	    var tpl = '<div class="weui_actionsheet " id="weui_actionsheet">'+
	                titleHtml +
	                '<div class="weui_actionsheet_menu">'+
	                actionsHtml +
	                '</div>'+
	                '<div class="weui_actionsheet_action">'+
	                  '<div class="weui_actionsheet_cell weui_actionsheet_cancel">取消</div>'+
	                  '</div>'+
	                '</div>';
	    var dialog = $(tpl).appendTo(document.body);

	    dialog.find(".weui_actionsheet_menu .weui_actionsheet_cell, .weui_actionsheet_action .weui_actionsheet_cell").each(function(i, e) {
	      $(e).click(function() {
	        $.closeActions();
	        params.onClose && params.onClose();
	        if(actions[i] && actions[i].onClick) {
	          actions[i].onClick();
	        }
	      })
	    });

	    mask.show();
	    dialog.show();
	    mask.addClass("weui_mask_visible");
	    dialog.addClass("weui_actionsheet_toggle");
	  };

	  var hide = function() {
	    $(".weui_mask").removeClass("weui_mask_visible").transitionEnd(function() {
	      $(this).remove();
	    });
	    $(".weui_actionsheet").removeClass("weui_actionsheet_toggle").transitionEnd(function() {
	      $(this).remove();
	    });
	  }

	  $.actions = function(params) {
	    params = $.extend({}, defaults, params);
	    show(params);
	  }

	  $.closeActions = function() {
	    hide();
	  }

	  $(document).on("click", ".weui_actions_mask", function() {
	    $.closeActions();
	  });

	  var defaults = $.actions.prototype.defaults = {
	    title: undefined,
	    onClose: undefined,
	    /*actions: [{
	      text: "菜单",
	      className: "color-danger",
	      onClick: function() {
	        console.log(1);
	      }
	    },{
	      text: "菜单2",
	      className: "color-success",
	      onClick: function() {
	        console.log(2);
	      }
	    }]*/
	  }

	}($);

	/* ===============================================================================
	************   Pull to refreh ************
	=============================================================================== */
	/* global $:true */

	+function ($) {
	  "use strict";

	  var PTR = function(el) {
	    this.container = $(el);
	    this.distance = 50;
	    this.attachEvents();
	  }

	  PTR.prototype.touchStart = function(e) {
	    if(this.container.hasClass("refreshing")) return;
	    var p = $.getTouchPosition(e);
	    this.start = p;
	    this.diffX = this.diffY = 0;
	  };

	  PTR.prototype.touchMove= function(e) {
	    if(this.container.hasClass("refreshing")) return;
	    if(!this.start) return false;
	    if(this.container.scrollTop() > 0) return;
	    var p = $.getTouchPosition(e);
	    this.diffX = p.x - this.start.x;
	    this.diffY = p.y - this.start.y;
	    if(this.diffY < 0) return;
	    this.container.addClass("touching");
	    e.preventDefault();
	    e.stopPropagation();
	    this.diffY = Math.pow(this.diffY, 0.8);
	    this.container.css("transform", "translate3d(0, "+this.diffY+"px, 0)");

	    if(this.diffY < this.distance) {
	      this.container.removeClass("pull-up").addClass("pull-down");
	    } else {
	      this.container.removeClass("pull-down").addClass("pull-up");
	    }
	  };
	  PTR.prototype.touchEnd = function() {
	    this.start = false;
	    if(this.diffY <= 0 || this.container.hasClass("refreshing")) return;
	    this.container.removeClass("touching");
	    this.container.removeClass("pull-down pull-up");
	    this.container.css("transform", "");
	    if(Math.abs(this.diffY) <= this.distance) {
	    } else {
	      this.container.addClass("refreshing");
	      this.container.trigger("pull-to-refresh");
	    }
	  };

	  PTR.prototype.attachEvents = function() {
	    var el = this.container;
	    el.addClass("weui-pull-to-refresh");
	    el.on($.touchEvents.start, $.proxy(this.touchStart, this));
	    el.on($.touchEvents.move, $.proxy(this.touchMove, this));
	    el.on($.touchEvents.end, $.proxy(this.touchEnd, this));
	  };

	  var pullToRefresh = function(el) {
	    new PTR(el);
	  };

	  var pullToRefreshDone = function(el) {
	    $(el).removeClass("refreshing");
	  }

	  $.fn.pullToRefresh = function() {
	    return this.each(function() {
	      pullToRefresh(this);
	    });
	  }

	  $.fn.pullToRefreshDone = function() {
	    return this.each(function() {
	      pullToRefreshDone(this);
	    });
	  }

	}($);

	/* ===============================================================================
	************   Infinite ************
	=============================================================================== */
	/* global $:true */
	+function ($) {
	  "use strict";


	  var Infinite = function(el, distance) {
	    this.container = $(el);
	    this.container.data("infinite", this);
	    this.distance = distance || 50;
	    this.attachEvents();
	  }

	  Infinite.prototype.scroll = function() {
	    var container = this.container;
	    var offset = container.scrollHeight() - ($(window).height() + container.scrollTop());
	    if(offset <= this.distance) {
	      container.trigger("infinite");
	    }
	  }

	  Infinite.prototype.attachEvents = function(off) {
	    var el = this.container;
	    var scrollContainer = (el[0].tagName.toUpperCase() === "BODY" ? $(document) : el);
	    scrollContainer[off ? "off" : "on"]("scroll", $.proxy(this.scroll, this));
	  };
	  Infinite.prototype.detachEvents = function(off) {
	    this.attachEvents(true);
	  }

	  var infinite = function(el) {
	    attachEvents(el);
	  }

	  $.fn.infinite = function(distance) {
	    return this.each(function() {
	      new Infinite(this, distance);
	    });
	  }
	  $.fn.destroyInfinite = function() {
	    return this.each(function() {
	      var infinite = $(this).data("infinite");
	      if(infinite && infinite.detachEvents) infinite.detachEvents();
	    });
	  }

	}($);

	/* global $:true */
	+function ($) {
	  "use strict";

	  var ITEM_ON = "weui_bar_item_on";

	  var showTab = function(a) {
	    var $a = $(a);
	    if($a.hasClass(ITEM_ON)) return;
	    var href = $a.attr("href");

	    if(!/^#/.test(href)) return ;

	    $a.parent().find("."+ITEM_ON).removeClass(ITEM_ON);
	    $a.addClass(ITEM_ON);

	    var bd = $a.parents(".weui_tab").find(".weui_tab_bd");

	    bd.find(".weui_tab_bd_item_active").removeClass("weui_tab_bd_item_active");

	    $(href).addClass("weui_tab_bd_item_active");
	  }

	  $.showTab = showTab;

	  $(document).on("click", ".weui_tabbar_item, .weui_navbar_item", function(e) {
	    var $a = $(e.currentTarget);
	    var href = $a.attr("href");
	    if($a.hasClass(ITEM_ON)) return;
	    if(!/^#/.test(href)) return;

	    e.preventDefault();

	    showTab($a);
	  });

	}($);


	/* global $:true */
	+ function($) {
	  "use strict";

	  $(document).on("click", ".weui_search_bar label", function(e) {
	    $(e.target).parents(".weui_search_bar").addClass("weui_search_focusing");
	  }) 
	  .on("blur", ".weui_search_input", function(e) {
	    var $input = $(e.target);
	    if(!$input.val()) $input.parents(".weui_search_bar").removeClass("weui_search_focusing");
	  })
	  .on("click", ".weui_search_cancel", function(e) {
	    var $input = $(e.target).parents(".weui_search_bar").removeClass("weui_search_focusing").find(".weui_search_input").val("").blur();
	  })
	  .on("click", ".weui_icon_clear", function(e) {
	    var $input = $(e.target).parents(".weui_search_bar").find(".weui_search_input").val("").focus();
	  });

	}($);

	/*===========================
	Device/OS Detection
	===========================*/
	/* global $:true */
	;(function ($) {
	    "use strict";
	    var device = {};
	    var ua = navigator.userAgent;

	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	    var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

	    device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;
	    
	    // Android
	    if (android) {
	        device.os = 'android';
	        device.osVersion = android[2];
	        device.android = true;
	        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
	    }
	    if (ipad || iphone || ipod) {
	        device.os = 'ios';
	        device.ios = true;
	    }
	    // iOS
	    if (iphone && !ipod) {
	        device.osVersion = iphone[2].replace(/_/g, '.');
	        device.iphone = true;
	    }
	    if (ipad) {
	        device.osVersion = ipad[2].replace(/_/g, '.');
	        device.ipad = true;
	    }
	    if (ipod) {
	        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	        device.iphone = true;
	    }
	    // iOS 8+ changed UA
	    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
	        if (device.osVersion.split('.')[0] === '10') {
	            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
	        }
	    }

	    // Webview
	    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
	        
	    // Minimal UI
	    if (device.os && device.os === 'ios') {
	        var osVersionArr = device.osVersion.split('.');
	        device.minimalUi = !device.webView &&
	                            (ipod || iphone) &&
	                            (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
	                            $('meta[name="viewport"]').length > 0 && $('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0;
	    }

	    // Check for status bar and fullscreen app mode
	    var windowWidth = $(window).width();
	    var windowHeight = $(window).height();
	    device.statusBar = false;
	    if (device.webView && (windowWidth * windowHeight === screen.width * screen.height)) {
	        device.statusBar = true;
	    }
	    else {
	        device.statusBar = false;
	    }

	    // Classes
	    var classNames = [];

	    // Pixel Ratio
	    device.pixelRatio = window.devicePixelRatio || 1;
	    classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio));
	    if (device.pixelRatio >= 2) {
	        classNames.push('retina');
	    }

	    // OS classes
	    if (device.os) {
	        classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'));
	        if (device.os === 'ios') {
	            var major = parseInt(device.osVersion.split('.')[0], 10);
	            for (var i = major - 1; i >= 6; i--) {
	                classNames.push('ios-gt-' + i);
	            }
	        }
	        
	    }
	    // Status bar classes
	    if (device.statusBar) {
	        classNames.push('with-statusbar-overlay');
	    }
	    else {
	        $('html').removeClass('with-statusbar-overlay');
	    }

	    // Add html classes
	    if (classNames.length > 0) $('html').addClass(classNames.join(' '));

	    $.device = device;
	})($);

	/*======================================================
	************   Picker   ************
	======================================================*/
	/* global $:true */
	/* jshint unused:false */
	/* jshint multistr:true */
	+ function($) {
	  "use strict";
	  var Picker = function (params) {
	      var p = this;
	      var defaults = {
	          updateValuesOnMomentum: false,
	          updateValuesOnTouchmove: true,
	          rotateEffect: false,
	          momentumRatio: 7,
	          freeMode: false,
	          // Common settings
	          scrollToInput: true,
	          inputReadOnly: true,
	          toolbar: true,
	          toolbarCloseText: '完成',
	          title: '请选择',
	          toolbarTemplate: '<div class="toolbar">\
	          <div class="toolbar-inner">\
	          <a href="javascript:;" class="picker-button close-picker">{{closeText}}</a>\
	          <h1 class="title">{{title}}</h1>\
	          </div>\
	          </div>',
	      };
	      params = params || {};
	      for (var def in defaults) {
	          if (typeof params[def] === 'undefined') {
	              params[def] = defaults[def];
	          }
	      }
	      p.params = params;
	      p.cols = [];
	      p.initialized = false;
	      
	      // Inline flag
	      p.inline = p.params.container ? true : false;

	      // 3D Transforms origin bug, only on safari
	      var originBug = $.device.ios || (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0) && !$.device.android;

	      // Should be converted to popover
	      function isPopover() {
	          var toPopover = false;
	          if (!p.params.convertToPopover && !p.params.onlyInPopover) return toPopover;
	          if (!p.inline && p.params.input) {
	              if (p.params.onlyInPopover) toPopover = true;
	              else {
	                  if ($.device.ios) {
	                      toPopover = $.device.ipad ? true : false;
	                  }
	                  else {
	                      if ($(window).width() >= 768) toPopover = true;
	                  }
	              }
	          } 
	          return toPopover; 
	      }
	      function inPopover() {
	          if (p.opened && p.container && p.container.length > 0 && p.container.parents('.popover').length > 0) return true;
	          else return false;
	      }

	      // Value
	      p.setValue = function (arrValues, transition) {
	          var valueIndex = 0;
	          for (var i = 0; i < p.cols.length; i++) {
	              if (p.cols[i] && !p.cols[i].divider) {
	                  p.cols[i].setValue(arrValues[valueIndex], transition);
	                  valueIndex++;
	              }
	          }
	      };
	      p.updateValue = function () {
	          var newValue = [];
	          var newDisplayValue = [];
	          for (var i = 0; i < p.cols.length; i++) {
	              if (!p.cols[i].divider) {
	                  newValue.push(p.cols[i].value);
	                  newDisplayValue.push(p.cols[i].displayValue);
	              }
	          }
	          if (newValue.indexOf(undefined) >= 0) {
	              return;
	          }
	          p.value = newValue;
	          p.displayValue = newDisplayValue;
	          if (p.params.onChange) {
	              p.params.onChange(p, p.value, p.displayValue);
	          }
	          if (p.input && p.input.length > 0) {
	              $(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(' '));
	              $(p.input).trigger('change');
	          }
	      };

	      // Columns Handlers
	      p.initPickerCol = function (colElement, updateItems) {
	          var colContainer = $(colElement);
	          var colIndex = colContainer.index();
	          var col = p.cols[colIndex];
	          if (col.divider) return;
	          col.container = colContainer;
	          col.wrapper = col.container.find('.picker-items-col-wrapper');
	          col.items = col.wrapper.find('.picker-item');
	          
	          var i, j;
	          var wrapperHeight, itemHeight, itemsHeight, minTranslate, maxTranslate;
	          col.replaceValues = function (values, displayValues) {
	              col.destroyEvents();
	              col.values = values;
	              col.displayValues = displayValues;
	              var newItemsHTML = p.columnHTML(col, true);
	              col.wrapper.html(newItemsHTML);
	              col.items = col.wrapper.find('.picker-item');
	              col.calcSize();
	              col.setValue(col.values[0], 0, true);
	              col.initEvents();
	          };
	          col.calcSize = function () {
	              if (p.params.rotateEffect) {
	                  col.container.removeClass('picker-items-col-absolute');
	                  if (!col.width) col.container.css({width:''});
	              }
	              var colWidth, colHeight;
	              colWidth = 0;
	              colHeight = col.container[0].offsetHeight;
	              wrapperHeight = col.wrapper[0].offsetHeight;
	              itemHeight = col.items[0].offsetHeight;
	              itemsHeight = itemHeight * col.items.length;
	              minTranslate = colHeight / 2 - itemsHeight + itemHeight / 2;
	              maxTranslate = colHeight / 2 - itemHeight / 2;    
	              if (col.width) {
	                  colWidth = col.width;
	                  if (parseInt(colWidth, 10) === colWidth) colWidth = colWidth + 'px';
	                  col.container.css({width: colWidth});
	              }
	              if (p.params.rotateEffect) {
	                  if (!col.width) {
	                      col.items.each(function () {
	                          var item = $(this);
	                          item.css({width:'auto'});
	                          colWidth = Math.max(colWidth, item[0].offsetWidth);
	                          item.css({width:''});
	                      });
	                      col.container.css({width: (colWidth + 2) + 'px'});
	                  }
	                  col.container.addClass('picker-items-col-absolute');
	              }
	          };
	          col.calcSize();
	          
	          col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)').transition(0);


	          var activeIndex = 0;
	          var animationFrameId;

	          // Set Value Function
	          col.setValue = function (newValue, transition, valueCallbacks) {
	              if (typeof transition === 'undefined') transition = '';
	              var newActiveIndex = col.wrapper.find('.picker-item[data-picker-value="' + newValue + '"]').index();
	              if(typeof newActiveIndex === 'undefined' || newActiveIndex === -1) {
	                  return;
	              }
	              var newTranslate = -newActiveIndex * itemHeight + maxTranslate;
	              // Update wrapper
	              col.wrapper.transition(transition);
	              col.wrapper.transform('translate3d(0,' + (newTranslate) + 'px,0)');
	                  
	              // Watch items
	              if (p.params.updateValuesOnMomentum && col.activeIndex && col.activeIndex !== newActiveIndex ) {
	                  $.cancelAnimationFrame(animationFrameId);
	                  col.wrapper.transitionEnd(function(){
	                      $.cancelAnimationFrame(animationFrameId);
	                  });
	                  updateDuringScroll();
	              }

	              // Update items
	              col.updateItems(newActiveIndex, newTranslate, transition, valueCallbacks);
	          };

	          col.updateItems = function (activeIndex, translate, transition, valueCallbacks) {
	              if (typeof translate === 'undefined') {
	                  translate = $.getTranslate(col.wrapper[0], 'y');
	              }
	              if(typeof activeIndex === 'undefined') activeIndex = -Math.round((translate - maxTranslate)/itemHeight);
	              if (activeIndex < 0) activeIndex = 0;
	              if (activeIndex >= col.items.length) activeIndex = col.items.length - 1;
	              var previousActiveIndex = col.activeIndex;
	              col.activeIndex = activeIndex;
	              /*
	              col.wrapper.find('.picker-selected, .picker-after-selected, .picker-before-selected').removeClass('picker-selected picker-after-selected picker-before-selected');

	              col.items.transition(transition);
	              var selectedItem = col.items.eq(activeIndex).addClass('picker-selected').transform('');
	              var prevItems = selectedItem.prevAll().addClass('picker-before-selected');
	              var nextItems = selectedItem.nextAll().addClass('picker-after-selected');
	              */
	              //去掉 .picker-after-selected, .picker-before-selected 以提高性能
	              col.wrapper.find('.picker-selected').removeClass('picker-selected');
	              if (p.params.rotateEffect) {
	                col.items.transition(transition);
	              }
	              var selectedItem = col.items.eq(activeIndex).addClass('picker-selected').transform('');

	              if (valueCallbacks || typeof valueCallbacks === 'undefined') {
	                  // Update values
	                  col.value = selectedItem.attr('data-picker-value');
	                  col.displayValue = col.displayValues ? col.displayValues[activeIndex] : col.value;
	                  // On change callback
	                  if (previousActiveIndex !== activeIndex) {
	                      if (col.onChange) {
	                          col.onChange(p, col.value, col.displayValue);
	                      }
	                      p.updateValue();
	                  }
	              }
	                  
	              // Set 3D rotate effect
	              if (!p.params.rotateEffect) {
	                  return;
	              }
	              var percentage = (translate - (Math.floor((translate - maxTranslate)/itemHeight) * itemHeight + maxTranslate)) / itemHeight;
	              
	              col.items.each(function () {
	                  var item = $(this);
	                  var itemOffsetTop = item.index() * itemHeight;
	                  var translateOffset = maxTranslate - translate;
	                  var itemOffset = itemOffsetTop - translateOffset;
	                  var percentage = itemOffset / itemHeight;

	                  var itemsFit = Math.ceil(col.height / itemHeight / 2) + 1;
	                  
	                  var angle = (-18*percentage);
	                  if (angle > 180) angle = 180;
	                  if (angle < -180) angle = -180;
	                  // Far class
	                  if (Math.abs(percentage) > itemsFit) item.addClass('picker-item-far');
	                  else item.removeClass('picker-item-far');
	                  // Set transform
	                  item.transform('translate3d(0, ' + (-translate + maxTranslate) + 'px, ' + (originBug ? -110 : 0) + 'px) rotateX(' + angle + 'deg)');
	              });
	          };

	          function updateDuringScroll() {
	              animationFrameId = $.requestAnimationFrame(function () {
	                  col.updateItems(undefined, undefined, 0);
	                  updateDuringScroll();
	              });
	          }

	          // Update items on init
	          if (updateItems) col.updateItems(0, maxTranslate, 0);

	          var allowItemClick = true;
	          var isTouched, isMoved, touchStartY, touchCurrentY, touchStartTime, touchEndTime, startTranslate, returnTo, currentTranslate, prevTranslate, velocityTranslate, velocityTime;
	          function handleTouchStart (e) {
	              if (isMoved || isTouched) return;
	              e.preventDefault();
	              isTouched = true;
	              var position = $.getTouchPosition(e);
	              touchStartY = touchCurrentY = position.y;
	              touchStartTime = (new Date()).getTime();
	              
	              allowItemClick = true;
	              startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
	          }
	          function handleTouchMove (e) {
	              if (!isTouched) return;
	              e.preventDefault();
	              allowItemClick = false;
	              var position = $.getTouchPosition(e);
	              touchCurrentY = position.y;
	              if (!isMoved) {
	                  // First move
	                  $.cancelAnimationFrame(animationFrameId);
	                  isMoved = true;
	                  startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
	                  col.wrapper.transition(0);
	              }
	              e.preventDefault();

	              var diff = touchCurrentY - touchStartY;
	              currentTranslate = startTranslate + diff;
	              returnTo = undefined;

	              // Normalize translate
	              if (currentTranslate < minTranslate) {
	                  currentTranslate = minTranslate - Math.pow(minTranslate - currentTranslate, 0.8);
	                  returnTo = 'min';
	              }
	              if (currentTranslate > maxTranslate) {
	                  currentTranslate = maxTranslate + Math.pow(currentTranslate - maxTranslate, 0.8);
	                  returnTo = 'max';
	              }
	              // Transform wrapper
	              col.wrapper.transform('translate3d(0,' + currentTranslate + 'px,0)');

	              // Update items
	              col.updateItems(undefined, currentTranslate, 0, p.params.updateValuesOnTouchmove);
	              
	              // Calc velocity
	              velocityTranslate = currentTranslate - prevTranslate || currentTranslate;
	              velocityTime = (new Date()).getTime();
	              prevTranslate = currentTranslate;
	          }
	          function handleTouchEnd (e) {
	              if (!isTouched || !isMoved) {
	                  isTouched = isMoved = false;
	                  return;
	              }
	              isTouched = isMoved = false;
	              col.wrapper.transition('');
	              if (returnTo) {
	                  if (returnTo === 'min') {
	                      col.wrapper.transform('translate3d(0,' + minTranslate + 'px,0)');
	                  }
	                  else col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)');
	              }
	              touchEndTime = new Date().getTime();
	              var velocity, newTranslate;
	              if (touchEndTime - touchStartTime > 300) {
	                  newTranslate = currentTranslate;
	              }
	              else {
	                  velocity = Math.abs(velocityTranslate / (touchEndTime - velocityTime));
	                  newTranslate = currentTranslate + velocityTranslate * p.params.momentumRatio;
	              }

	              newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);

	              // Active Index
	              var activeIndex = -Math.floor((newTranslate - maxTranslate)/itemHeight);

	              // Normalize translate
	              if (!p.params.freeMode) newTranslate = -activeIndex * itemHeight + maxTranslate;

	              // Transform wrapper
	              col.wrapper.transform('translate3d(0,' + (parseInt(newTranslate,10)) + 'px,0)');

	              // Update items
	              col.updateItems(activeIndex, newTranslate, '', true);

	              // Watch items
	              if (p.params.updateValuesOnMomentum) {
	                  updateDuringScroll();
	                  col.wrapper.transitionEnd(function(){
	                      $.cancelAnimationFrame(animationFrameId);
	                  });
	              }

	              // Allow click
	              setTimeout(function () {
	                  allowItemClick = true;
	              }, 100);
	          }

	          function handleClick(e) {
	              if (!allowItemClick) return;
	              $.cancelAnimationFrame(animationFrameId);
	              /*jshint validthis:true */
	              var value = $(this).attr('data-picker-value');
	              col.setValue(value);
	          }

	          col.initEvents = function (detach) {
	              var method = detach ? 'off' : 'on';
	              col.container[method]($.touchEvents.start, handleTouchStart);
	              col.container[method]($.touchEvents.move, handleTouchMove);
	              col.container[method]($.touchEvents.end, handleTouchEnd);
	              col.items[method]('click', handleClick);
	          };
	          col.destroyEvents = function () {
	              col.initEvents(true);
	          };

	          col.container[0].f7DestroyPickerCol = function () {
	              col.destroyEvents();
	          };

	          col.initEvents();

	      };
	      p.destroyPickerCol = function (colContainer) {
	          colContainer = $(colContainer);
	          if ('f7DestroyPickerCol' in colContainer[0]) colContainer[0].f7DestroyPickerCol();
	      };
	      // Resize cols
	      function resizeCols() {
	          if (!p.opened) return;
	          for (var i = 0; i < p.cols.length; i++) {
	              if (!p.cols[i].divider) {
	                  p.cols[i].calcSize();
	                  p.cols[i].setValue(p.cols[i].value, 0, false);
	              }
	          }
	      }
	      $(window).on('resize', resizeCols);

	      // HTML Layout
	      p.columnHTML = function (col, onlyItems) {
	          var columnItemsHTML = '';
	          var columnHTML = '';
	          if (col.divider) {
	              columnHTML += '<div class="picker-items-col picker-items-col-divider ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '">' + col.content + '</div>';
	          }
	          else {
	              for (var j = 0; j < col.values.length; j++) {
	                  columnItemsHTML += '<div class="picker-item" data-picker-value="' + col.values[j] + '">' + (col.displayValues ? col.displayValues[j] : col.values[j]) + '</div>';
	              }
	              columnHTML += '<div class="picker-items-col ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '"><div class="picker-items-col-wrapper">' + columnItemsHTML + '</div></div>';
	          }
	          return onlyItems ? columnItemsHTML : columnHTML;
	      };
	      p.layout = function () {
	          var pickerHTML = '';
	          var pickerClass = '';
	          var i;
	          p.cols = [];
	          var colsHTML = '';
	          for (i = 0; i < p.params.cols.length; i++) {
	              var col = p.params.cols[i];
	              colsHTML += p.columnHTML(p.params.cols[i]);
	              p.cols.push(col);
	          }
	          pickerClass = 'weui-picker-modal picker-columns ' + (p.params.cssClass || '') + (p.params.rotateEffect ? ' picker-3d' : '') + (p.params.cols.length === 1 ? ' picker-columns-single' : '');
	          pickerHTML =
	              '<div class="' + (pickerClass) + '">' +
	                  (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{title}}/g, p.params.title) : '') +
	                  '<div class="picker-modal-inner picker-items">' +
	                      colsHTML +
	                      '<div class="picker-center-highlight"></div>' +
	                  '</div>' +
	              '</div>';
	              
	          p.pickerHTML = pickerHTML;    
	      };

	      // Input Events
	      function openOnInput(e) {
	          e.preventDefault();
	          if (p.opened) return;
	          p.open();
	          if (p.params.scrollToInput && !isPopover()) {
	              var pageContent = p.input.parents('.content');
	              if (pageContent.length === 0) return;

	              var paddingTop = parseInt(pageContent.css('padding-top'), 10),
	                  paddingBottom = parseInt(pageContent.css('padding-bottom'), 10),
	                  pageHeight = pageContent[0].offsetHeight - paddingTop - p.container.height(),
	                  pageScrollHeight = pageContent[0].scrollHeight - paddingTop - p.container.height(),
	                  newPaddingBottom;
	              var inputTop = p.input.offset().top - paddingTop + p.input[0].offsetHeight;
	              if (inputTop > pageHeight) {
	                  var scrollTop = pageContent.scrollTop() + inputTop - pageHeight;
	                  if (scrollTop + pageHeight > pageScrollHeight) {
	                      newPaddingBottom = scrollTop + pageHeight - pageScrollHeight + paddingBottom;
	                      if (pageHeight === pageScrollHeight) {
	                          newPaddingBottom = p.container.height();
	                      }
	                      pageContent.css({'padding-bottom': (newPaddingBottom) + 'px'});
	                  }
	                  pageContent.scrollTop(scrollTop, 300);
	              }
	          }
	      }
	      function closeOnHTMLClick(e) {
	          if (inPopover()) return;
	          if (p.input && p.input.length > 0) {
	              if (e.target !== p.input[0] && $(e.target).parents('.weui-picker-modal').length === 0) p.close();
	          }
	          else {
	              if ($(e.target).parents('.weui-picker-modal').length === 0) p.close();   
	          }
	      }

	      if (p.params.input) {
	          p.input = $(p.params.input);
	          if (p.input.length > 0) {
	              if (p.params.inputReadOnly) p.input.prop('readOnly', true);
	              if (!p.inline) {
	                  p.input.on('click', openOnInput);    
	              }
	              if (p.params.inputReadOnly) {
	                  p.input.on('focus mousedown', function (e) {
	                      e.preventDefault();
	                  });
	              }
	          }
	              
	      }
	      
	      if (!p.inline) $('html').on('click', closeOnHTMLClick);

	      // Open
	      function onPickerClose() {
	          p.opened = false;
	          if (p.input && p.input.length > 0) p.input.parents('.page-content').css({'padding-bottom': ''});
	          if (p.params.onClose) p.params.onClose(p);

	          // Destroy events
	          p.container.find('.picker-items-col').each(function () {
	              p.destroyPickerCol(this);
	          });
	      }

	      p.opened = false;
	      p.open = function () {
	          var toPopover = isPopover();

	          if (!p.opened) {

	              // Layout
	              p.layout();

	              // Append
	              if (toPopover) {
	                  p.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + p.pickerHTML + '</div></div>';
	                  p.popover = $.popover(p.pickerHTML, p.params.input, true);
	                  p.container = $(p.popover).find('.weui-picker-modal');
	                  $(p.popover).on('close', function () {
	                      onPickerClose();
	                  });
	              }
	              else if (p.inline) {
	                  p.container = $(p.pickerHTML);
	                  p.container.addClass('picker-modal-inline');
	                  $(p.params.container).append(p.container);
	              }
	              else {
	                  p.container = $($.openPicker(p.pickerHTML));
	                  $(p.container)
	                  .on('close', function () {
	                      onPickerClose();
	                  });
	              }

	              // Store picker instance
	              p.container[0].f7Picker = p;

	              // Init Events
	              p.container.find('.picker-items-col').each(function () {
	                  var updateItems = true;
	                  if ((!p.initialized && p.params.value) || (p.initialized && p.value)) updateItems = false;
	                  p.initPickerCol(this, updateItems);
	              });
	              
	              // Set value
	              if (!p.initialized) {
	                  if (p.params.value) {
	                      p.setValue(p.params.value, 0);
	                  }
	              }
	              else {
	                  if (p.value) p.setValue(p.value, 0);
	              }
	          }

	          // Set flag
	          p.opened = true;
	          p.initialized = true;

	          if (p.params.onOpen) p.params.onOpen(p);
	      };

	      // Close
	      p.close = function (force) {
	          if (!p.opened || p.inline) return;
	          if (inPopover()) {
	              $.closePicker(p.popover);
	              return;
	          }
	          else {
	              $.closePicker(p.container);
	              return;
	          }
	      };

	      // Destroy
	      p.destroy = function () {
	          p.close();
	          if (p.params.input && p.input.length > 0) {
	              p.input.off('click focus', openOnInput);
	          }
	          $('html').off('click', closeOnHTMLClick);
	          $(window).off('resize', resizeCols);
	      };

	      if (p.inline) {
	          p.open();
	      }

	      return p;
	  };

	  $(document).on("click", ".close-picker", function() {
	    var pickerToClose = $('.weui-picker-modal.weui-picker-modal-visible');
	    if (pickerToClose.length > 0) {
	      $.closePicker(pickerToClose);
	    }
	  });

	  //修复picker会滚动页面的bug
	  $(document).on($.touchEvents.move, ".picker-modal-inner", function(e) {
	    e.preventDefault();
	  });


	  $.openPicker = function(tpl, className, callback) {

	    if(typeof className === "function") {
	      callback = className;
	      className = undefined;
	    }

	    $.closePicker();

	    var container = $("<div class='weui-picker-container "+ (className || "") + "'></div>").appendTo(document.body);
	    container.show();

	    container.addClass("weui-picker-container-visible");

	    //关于布局的问题，如果直接放在body上，则做动画的时候会撑开body高度而导致滚动条变化。
	    var dialog = $(tpl).appendTo(container);
	    
	    dialog.width(); //通过取一次CSS值，强制浏览器不能把上下两行代码合并执行，因为合并之后会导致无法出现动画。

	    dialog.addClass("weui-picker-modal-visible");

	    callback && container.on("close", callback);

	    return dialog;
	  }

	  $.updatePicker = function(tpl) {
	    var container = $(".weui-picker-container-visible");
	    if(!container[0]) return false;

	    container.html("");

	    var dialog = $(tpl).appendTo(container);

	    dialog.addClass("weui-picker-modal-visible");

	    return dialog;
	  }

	  $.closePicker = function(container, callback) {
	    if(typeof container === "function") callback = container;
	    $(".weui-picker-modal-visible").removeClass("weui-picker-modal-visible").transitionEnd(function() {
	      $(this).parent().remove();
	      callback && callback();
	    }).trigger("close");
	  };

	  $.fn.picker = function(params) {
	    var args = arguments;
	    return this.each(function() {
	      if(!this) return;
	      var $this = $(this);
	      
	      var picker = $this.data("picker");
	      if(!picker) {
	        params = params || {};
	        var inputValue = $this.val();
	        if(params.value === undefined && inputValue !== "") {
	          params.value = params.cols.length > 1 ? inputValue.split(" ") : [inputValue];
	        }
	        var p = $.extend({input: this}, params);
	        picker = new Picker(p);
	        $this.data("picker", picker);
	      }
	      if(typeof params === typeof "a") {
	        picker[params].apply(picker, Array.prototype.slice.call(args, 1));
	      }
	    });
	  };
	}($);

	/* global $:true */
	+ function($) {
	  "use strict";

	  var defaults;

	  var Select = function(input, config) {

	    var self = this;
	    this.config = config;

	    //init empty data
	    this.data = {
	      values: '',
	      titles: '',
	      origins: [],
	      length: 0
	    };

	    this.$input = $(input);
	    this.$input.prop("readOnly", true);

	    this.initConfig();

	    config = this.config;

	    this.$input.click($.proxy(this.open, this));

	  }

	  Select.prototype.initConfig = function() {
	    this.config = $.extend({}, defaults, this.config);

	    var config = this.config;

	    if(!config.items || !config.items.length) return;

	    config.items = config.items.map(function(d, i) {
	      if(typeof d == typeof "a") {
	        return {
	          title: d,
	          value: d
	        };
	      }

	      return d;
	    });


	    this.tpl = $.t7.compile("<div class='weui-picker-modal weui-select-modal'>" + config.toolbarTemplate + (config.multi ? config.checkboxTemplate : config.radioTemplate) + "</div>");

	    if(config.input !== undefined) this.$input.val(config.input);

	    this.parseInitValue();

	    this._init = true;
	  }

	  Select.prototype.updateInputValue = function(values, titles) {
	    var v, t;
	    if(this.config.multi) {
	      v = values.join(this.config.split);
	      t = titles.join(this.config.split);
	    } else {
	      v = values[0];
	      t = titles[0];
	    }

	    //caculate origin data
	    var origins = [];

	    this.config.items.forEach(function(d) {
	      values.each(function(i, dd) {
	        if(d.value == dd) origins.push(d);
	      });
	    });

	    this.$input.val(t).data("values", v);
	    this.$input.attr("value", t).attr("data-values", v);

	    var data = {
	      values: v,
	      titles: t,
	      valuesArray: values,
	      titlesArray: titles,
	      origins: origins,
	      length: origins.length
	    };
	    this.data = data;
	    this.$input.trigger("change", data);
	    this.config.onChange && this.config.onChange.call(this, data);
	  }

	  Select.prototype.parseInitValue = function() {
	    var value = this.$input.val();
	    var items = this.config.items;

	    //如果input为空，只有在第一次初始化的时候才保留默认选择。因为后来就是用户自己取消了全部选择，不能再为他选中默认值。
	    if( !this._init && (value === undefined || value == null || value === "")) return;

	    var titles = this.config.multi ? value.split(this.config.split) : [value];
	    for(var i=0;i<items.length;i++) {
	      items[i].checked = false;
	      for(var j=0;j<titles.length;j++) {
	        if(items[i].title === titles[j]) {
	          items[i].checked = true;
	        }
	      }
	    }
	  }

	  Select.prototype._bind = function(dialog) {
	    var self = this,
	        config = this.config;
	    dialog.on("change", function(e) {
	      var checked = dialog.find("input:checked");
	      var values = checked.map(function() {
	        return $(this).val();
	      });
	      var titles = checked.map(function() {
	        return $(this).data("title");
	      });
	      self.updateInputValue(values, titles);

	      if(config.autoClose && !config.multi) $.closePicker();
	    })
	    .on("click", ".close-select", function() {
	      self.close();
	    });
	  }

	  //更新数据
	  Select.prototype.update = function(config) {
	    this.config = $.extend({}, this.config, config);
	    this.initConfig();
	    if(this._open) {
	      this._bind($.updatePicker(this.getHTML()));
	    }
	  }
	  
	  Select.prototype.open = function(values, titles) {

	    if(this._open) return;

	    this.parseInitValue();

	    var config = this.config;

	    var dialog = this.dialog = $.openPicker(this.getHTML(), $.proxy(this.onClose, this));
	    
	    this._bind(dialog);

	    this._open = true;
	    if(config.onOpen) config.onOpen(this);
	  }

	  Select.prototype.close = function(callback, force) {
	    var self = this,
	        beforeClose = this.config.beforeClose;

	    if(typeof callback === typeof true) {
	      force === callback;
	    }
	    if(!force) {
	      if(beforeClose && typeof beforeClose === 'function' && beforeClose.call(this, this.data.values, this.data.titles) === false) {
	        return false
	      }
	      if(this.config.multi) {
	        if(this.config.min !== undefined && this.data.length < this.config.min) {
	          $.toast("请至少选择"+this.config.min+"个", "text");
	          return false
	        }
	        if(this.config.max !== undefined && this.data.length > this.config.max) {
	          $.toast("最多只能选择"+this.config.max+"个", "text");
	          return false
	        }
	      }
	    }
	    $.closePicker(function() {
	      self.onClose();
	      callback && callback();
	    });
	  }

	  Select.prototype.onClose = function() {
	    this._open = false;
	    if(this.config.onClose) this.config.onClose(this);
	  }

	  Select.prototype.getHTML = function(callback) {
	    var config = this.config;
	    return this.tpl({
	      items: config.items,
	      title: config.title,
	      closeText: config.closeText
	    })
	  }


	  $.fn.select = function(params, args) {

	    return this.each(function() {
	      var $this = $(this);
	      if(!$this.data("weui-select")) $this.data("weui-select", new Select(this, params));

	      var select = $this.data("weui-select");

	      if(typeof params === typeof "a") select[params].call(select, args);

	      return select;
	    });
	  }

	  defaults = $.fn.select.prototype.defaults = {
	    items: [],
	    input: undefined, //输入框的初始值
	    title: "请选择",
	    multi: false,
	    closeText: "确定",
	    autoClose: true, //是否选择完成后自动关闭，只有单选模式下才有效
	    onChange: undefined, //function
	    beforeClose: undefined, // function 关闭之前，如果返回false则阻止关闭
	    onClose: undefined, //function
	    onOpen: undefined, //function
	    split: ",",  //多选模式下的分隔符
	    min: undefined, //多选模式下可用，最少选择数
	    max: undefined, //单选模式下可用，最多选择数
	    toolbarTemplate: '<div class="toolbar">\
	      <div class="toolbar-inner">\
	      <a href="javascript:;" class="picker-button close-select">{{closeText}}</a>\
	      <h1 class="title">{{title}}</h1>\
	      </div>\
	      </div>',
	    radioTemplate:
	      '<div class="weui_cells weui_cells_radio">\
	        {{#items}}\
	        <label class="weui_cell weui_check_label" for="weui-select-id-{{this.title}}">\
	          <div class="weui_cell_bd weui_cell_primary">\
	            <p>{{this.title}}</p>\
	          </div>\
	          <div class="weui_cell_ft">\
	            <input type="radio" class="weui_check" name="weui-select" id="weui-select-id-{{this.title}}" value="{{this.value}}" {{#if this.checked}}checked="checked"{{/if}} data-title="{{this.title}}">\
	            <span class="weui_icon_checked"></span>\
	          </div>\
	        </label>\
	        {{/items}}\
	      </div>',
	    checkboxTemplate:
	      '<div class="weui_cells weui_cells_checkbox">\
	        {{#items}}\
	        <label class="weui_cell weui_check_label" for="weui-select-id-{{this.title}}">\
	          <div class="weui_cell_bd weui_cell_primary">\
	            <p>{{this.title}}</p>\
	          </div>\
	          <div class="weui_cell_ft">\
	            <input type="checkbox" class="weui_check" name="weui-select" id="weui-select-id-{{this.title}}" value="{{this.value}}" {{#if this.checked}}checked="checked"{{/if}} data-title="{{this.title}}" >\
	            <span class="weui_icon_checked"></span>\
	          </div>\
	        </label>\
	        {{/items}}\
	      </div>',
	  }

	}($);

	/*======================================================
	************   Calendar   ************
	======================================================*/
	/* global $:true */
	/*jshint unused: false*/
	+function ($) {
	  "use strict";
	  var rtl = false;
	  var defaults;
	  var Calendar = function (params) {
	      var p = this;
	      params = params || {};
	      for (var def in defaults) {
	          if (typeof params[def] === 'undefined') {
	              params[def] = defaults[def];
	          }
	      }
	      p.params = params;
	      p.initialized = false;

	      // Inline flag
	      p.inline = p.params.container ? true : false;

	      // Is horizontal
	      p.isH = p.params.direction === 'horizontal';

	      // RTL inverter
	      var inverter = p.isH ? (rtl ? -1 : 1) : 1;

	      // Animating flag
	      p.animating = false;

	      // Should be converted to popover
	      function isPopover() {
	          var toPopover = false;
	          if (!p.params.convertToPopover && !p.params.onlyInPopover) return toPopover;
	          if (!p.inline && p.params.input) {
	              if (p.params.onlyInPopover) toPopover = true;
	              else {
	                  if ($.device.ios) {
	                      toPopover = $.device.ipad ? true : false;
	                  }
	                  else {
	                      if ($(window).width() >= 768) toPopover = true;
	                  }
	              }
	          } 
	          return toPopover; 
	      }
	      function inPopover() {
	          if (p.opened && p.container && p.container.length > 0 && p.container.parents('.popover').length > 0) return true;
	          else return false;
	      }

	      // Format date
	      function formatDate(date) {
	          date = new Date(date);
	          var year = date.getFullYear();
	          var month = date.getMonth();
	          var month1 = month + 1;
	          var day = date.getDate();
	          var weekDay = date.getDay();
	          return p.params.dateFormat
	              .replace(/yyyy/g, year)
	              .replace(/yy/g, (year + '').substring(2))
	              .replace(/mm/g, month1 < 10 ? '0' + month1 : month1)
	              .replace(/m/g, month1)
	              .replace(/MM/g, p.params.monthNames[month])
	              .replace(/M/g, p.params.monthNamesShort[month])
	              .replace(/dd/g, day < 10 ? '0' + day : day)
	              .replace(/d/g, day)
	              .replace(/DD/g, p.params.dayNames[weekDay])
	              .replace(/D/g, p.params.dayNamesShort[weekDay]);
	      }


	      // Value
	      p.addValue = function (value) {
	          if (p.params.multiple) {
	              if (!p.value) p.value = [];
	              var inValuesIndex;
	              for (var i = 0; i < p.value.length; i++) {
	                  if (new Date(value).getTime() === new Date(p.value[i]).getTime()) {
	                      inValuesIndex = i;
	                  }
	              }
	              if (typeof inValuesIndex === 'undefined') {
	                  p.value.push(value);
	              }
	              else {
	                  p.value.splice(inValuesIndex, 1);
	              }
	              p.updateValue();
	          }
	          else {
	              p.value = [value];
	              p.updateValue();
	          }
	      };
	      p.setValue = function (arrValues) {
	          p.value = arrValues;
	          p.updateValue();   
	      };
	      p.updateValue = function () {
	          p.wrapper.find('.picker-calendar-day-selected').removeClass('picker-calendar-day-selected');
	          var i, inputValue;
	          for (i = 0; i < p.value.length; i++) {
	              var valueDate = new Date(p.value[i]);
	              p.wrapper.find('.picker-calendar-day[data-date="' + valueDate.getFullYear() + '-' + valueDate.getMonth() + '-' + valueDate.getDate() + '"]').addClass('picker-calendar-day-selected');
	          }
	          if (p.params.onChange) {
	              p.params.onChange(p, p.value, p.value.map(formatDate));
	          }
	          if (p.input && p.input.length > 0) {
	              if (p.params.formatValue) inputValue = p.params.formatValue(p, p.value);
	              else {
	                  inputValue = [];
	                  for (i = 0; i < p.value.length; i++) {
	                      inputValue.push(formatDate(p.value[i]));
	                  }
	                  inputValue = inputValue.join(', ');
	              } 
	              $(p.input).val(inputValue);
	              $(p.input).trigger('change');
	          }
	      };

	      // Columns Handlers
	      p.initCalendarEvents = function () {
	          var col;
	          var allowItemClick = true;
	          var isTouched, isMoved, touchStartX, touchStartY, touchCurrentX, touchCurrentY, touchStartTime, touchEndTime, startTranslate, currentTranslate, wrapperWidth, wrapperHeight, percentage, touchesDiff, isScrolling;
	          function handleTouchStart (e) {
	              if (isMoved || isTouched) return;
	              // e.preventDefault();
	              isTouched = true;
	              var position = $.getTouchPosition(e);
	              touchStartX = touchCurrentY = position.x;
	              touchStartY = touchCurrentY = position.y;
	              touchStartTime = (new Date()).getTime();
	              percentage = 0;
	              allowItemClick = true;
	              isScrolling = undefined;
	              startTranslate = currentTranslate = p.monthsTranslate;
	          }
	          function handleTouchMove (e) {
	              if (!isTouched) return;
	              var position = $.getTouchPosition(e);
	              touchCurrentX = position.x;
	              touchCurrentY = position.y;
	              if (typeof isScrolling === 'undefined') {
	                  isScrolling = !!(isScrolling || Math.abs(touchCurrentY - touchStartY) > Math.abs(touchCurrentX - touchStartX));
	              }
	              if (p.isH && isScrolling) {
	                  isTouched = false;
	                  return;
	              }
	              e.preventDefault();
	              if (p.animating) {
	                  isTouched = false;
	                  return;   
	              }
	              allowItemClick = false;
	              if (!isMoved) {
	                  // First move
	                  isMoved = true;
	                  wrapperWidth = p.wrapper[0].offsetWidth;
	                  wrapperHeight = p.wrapper[0].offsetHeight;
	                  p.wrapper.transition(0);
	              }
	              e.preventDefault();

	              touchesDiff = p.isH ? touchCurrentX - touchStartX : touchCurrentY - touchStartY;
	              percentage = touchesDiff/(p.isH ? wrapperWidth : wrapperHeight);
	              currentTranslate = (p.monthsTranslate * inverter + percentage) * 100;

	              // Transform wrapper
	              p.wrapper.transform('translate3d(' + (p.isH ? currentTranslate : 0) + '%, ' + (p.isH ? 0 : currentTranslate) + '%, 0)');

	          }
	          function handleTouchEnd (e) {
	              if (!isTouched || !isMoved) {
	                  isTouched = isMoved = false;
	                  return;
	              }
	              isTouched = isMoved = false;
	              
	              touchEndTime = new Date().getTime();
	              if (touchEndTime - touchStartTime < 300) {
	                  if (Math.abs(touchesDiff) < 10) {
	                      p.resetMonth();
	                  }
	                  else if (touchesDiff >= 10) {
	                      if (rtl) p.nextMonth();
	                      else p.prevMonth();
	                  }
	                  else {
	                      if (rtl) p.prevMonth();
	                      else p.nextMonth();   
	                  }
	              }
	              else {
	                  if (percentage <= -0.5) {
	                      if (rtl) p.prevMonth();
	                      else p.nextMonth();
	                  }
	                  else if (percentage >= 0.5) {
	                      if (rtl) p.nextMonth();
	                      else p.prevMonth();
	                  }
	                  else {
	                      p.resetMonth();
	                  }
	              }

	              // Allow click
	              setTimeout(function () {
	                  allowItemClick = true;
	              }, 100);
	          }

	          function handleDayClick(e) {
	              if (!allowItemClick) return;
	              var day = $(e.target).parents('.picker-calendar-day');
	              if (day.length === 0 && $(e.target).hasClass('picker-calendar-day')) {
	                  day = $(e.target);
	              }
	              if (day.length === 0) return;
	              if (day.hasClass('picker-calendar-day-selected') && !p.params.multiple) return;
	              if (day.hasClass('picker-calendar-day-disabled')) return;
	              if (day.hasClass('picker-calendar-day-next')) p.nextMonth();
	              if (day.hasClass('picker-calendar-day-prev')) p.prevMonth();
	              var dateYear = day.attr('data-year');
	              var dateMonth = day.attr('data-month');
	              var dateDay = day.attr('data-day');
	              if (p.params.onDayClick) {
	                  p.params.onDayClick(p, day[0], dateYear, dateMonth, dateDay);
	              }
	              p.addValue(new Date(dateYear, dateMonth, dateDay).getTime());
	              if (p.params.closeOnSelect) p.close();
	          }

	          p.container.find('.picker-calendar-prev-month').on('click', p.prevMonth);
	          p.container.find('.picker-calendar-next-month').on('click', p.nextMonth);
	          p.container.find('.picker-calendar-prev-year').on('click', p.prevYear);
	          p.container.find('.picker-calendar-next-year').on('click', p.nextYear);
	          p.wrapper.on('click', handleDayClick);
	          if (p.params.touchMove) {
	              p.wrapper.on($.touchEvents.start, handleTouchStart);
	              p.wrapper.on($.touchEvents.move, handleTouchMove);
	              p.wrapper.on($.touchEvents.end, handleTouchEnd);
	          }
	              
	          p.container[0].f7DestroyCalendarEvents = function () {
	              p.container.find('.picker-calendar-prev-month').off('click', p.prevMonth);
	              p.container.find('.picker-calendar-next-month').off('click', p.nextMonth);
	              p.container.find('.picker-calendar-prev-year').off('click', p.prevYear);
	              p.container.find('.picker-calendar-next-year').off('click', p.nextYear);
	              p.wrapper.off('click', handleDayClick);
	              if (p.params.touchMove) {
	                  p.wrapper.off($.touchEvents.start, handleTouchStart);
	                  p.wrapper.off($.touchEvents.move, handleTouchMove);
	                  p.wrapper.off($.touchEvents.end, handleTouchEnd);
	              }
	          };
	          

	      };
	      p.destroyCalendarEvents = function (colContainer) {
	          if ('f7DestroyCalendarEvents' in p.container[0]) p.container[0].f7DestroyCalendarEvents();
	      };

	      // Calendar Methods
	      p.daysInMonth = function (date) {
	          var d = new Date(date);
	          return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
	      };
	      p.monthHTML = function (date, offset) {
	          date = new Date(date);
	          var year = date.getFullYear(),
	              month = date.getMonth(),
	              day = date.getDate();
	          if (offset === 'next') {
	              if (month === 11) date = new Date(year + 1, 0);
	              else date = new Date(year, month + 1, 1);
	          }
	          if (offset === 'prev') {
	              if (month === 0) date = new Date(year - 1, 11);
	              else date = new Date(year, month - 1, 1);
	          }
	          if (offset === 'next' || offset === 'prev') {
	              month = date.getMonth();
	              year = date.getFullYear();
	          }
	          var daysInPrevMonth = p.daysInMonth(new Date(date.getFullYear(), date.getMonth()).getTime() - 10 * 24 * 60 * 60 * 1000),
	              daysInMonth = p.daysInMonth(date),
	              firstDayOfMonthIndex = new Date(date.getFullYear(), date.getMonth()).getDay();
	          if (firstDayOfMonthIndex === 0) firstDayOfMonthIndex = 7;
	          
	          var dayDate, currentValues = [], i, j,
	              rows = 6, cols = 7,
	              monthHTML = '',
	              dayIndex = 0 + (p.params.firstDay - 1),    
	              today = new Date().setHours(0,0,0,0),
	              minDate = p.params.minDate ? new Date(p.params.minDate).getTime() : null,
	              maxDate = p.params.maxDate ? new Date(p.params.maxDate).getTime() : null;

	          if (p.value && p.value.length) {
	              for (i = 0; i < p.value.length; i++) {
	                  currentValues.push(new Date(p.value[i]).setHours(0,0,0,0));
	              }
	          }
	              
	          for (i = 1; i <= rows; i++) {
	              var rowHTML = '';
	              var row = i;
	              for (j = 1; j <= cols; j++) {
	                  var col = j;
	                  dayIndex ++;
	                  var dayNumber = dayIndex - firstDayOfMonthIndex;
	                  var addClass = '';
	                  if (dayNumber < 0) {
	                      dayNumber = daysInPrevMonth + dayNumber + 1;
	                      addClass += ' picker-calendar-day-prev';
	                      dayDate = new Date(month - 1 < 0 ? year - 1 : year, month - 1 < 0 ? 11 : month - 1, dayNumber).getTime();
	                  }
	                  else {
	                      dayNumber = dayNumber + 1;
	                      if (dayNumber > daysInMonth) {
	                          dayNumber = dayNumber - daysInMonth;
	                          addClass += ' picker-calendar-day-next';
	                          dayDate = new Date(month + 1 > 11 ? year + 1 : year, month + 1 > 11 ? 0 : month + 1, dayNumber).getTime();
	                      }
	                      else {
	                          dayDate = new Date(year, month, dayNumber).getTime();    
	                      }
	                  }
	                  // Today
	                  if (dayDate === today) addClass += ' picker-calendar-day-today';
	                  // Selected
	                  if (currentValues.indexOf(dayDate) >= 0) addClass += ' picker-calendar-day-selected';
	                  // Weekend
	                  if (p.params.weekendDays.indexOf(col - 1) >= 0) {
	                      addClass += ' picker-calendar-day-weekend';
	                  }
	                  // Disabled
	                  if ((minDate && dayDate < minDate) || (maxDate && dayDate > maxDate)) {
	                      addClass += ' picker-calendar-day-disabled';   
	                  }

	                  dayDate = new Date(dayDate);
	                  var dayYear = dayDate.getFullYear();
	                  var dayMonth = dayDate.getMonth();
	                  rowHTML += '<div data-year="' + dayYear + '" data-month="' + dayMonth + '" data-day="' + dayNumber + '" class="picker-calendar-day' + (addClass) + '" data-date="' + (dayYear + '-' + dayMonth + '-' + dayNumber) + '"><span>'+dayNumber+'</span></div>';
	              }
	              monthHTML += '<div class="picker-calendar-row">' + rowHTML + '</div>';
	          }
	          monthHTML = '<div class="picker-calendar-month" data-year="' + year + '" data-month="' + month + '">' + monthHTML + '</div>';
	          return monthHTML;
	      };
	      p.animating = false;
	      p.updateCurrentMonthYear = function (dir) {
	          if (typeof dir === 'undefined') {
	              p.currentMonth = parseInt(p.months.eq(1).attr('data-month'), 10);
	              p.currentYear = parseInt(p.months.eq(1).attr('data-year'), 10);   
	          }
	          else {
	              p.currentMonth = parseInt(p.months.eq(dir === 'next' ? (p.months.length - 1) : 0).attr('data-month'), 10);
	              p.currentYear = parseInt(p.months.eq(dir === 'next' ? (p.months.length - 1) : 0).attr('data-year'), 10);
	          }
	          p.container.find('.current-month-value').text(p.params.monthNames[p.currentMonth]);
	          p.container.find('.current-year-value').text(p.currentYear);
	              
	      };
	      p.onMonthChangeStart = function (dir) {
	          p.updateCurrentMonthYear(dir);
	          p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
	          var currentIndex = dir === 'next' ? p.months.length - 1 : 0;

	          p.months.eq(currentIndex).addClass('picker-calendar-month-current');
	          p.months.eq(dir === 'next' ? currentIndex - 1 : currentIndex + 1).addClass(dir === 'next' ? 'picker-calendar-month-prev' : 'picker-calendar-month-next');

	          if (p.params.onMonthYearChangeStart) {
	              p.params.onMonthYearChangeStart(p, p.currentYear, p.currentMonth);
	          }
	      };
	      p.onMonthChangeEnd = function (dir, rebuildBoth) {
	          p.animating = false;
	          var nextMonthHTML, prevMonthHTML, newMonthHTML;
	          p.wrapper.find('.picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)').remove();
	          
	          if (typeof dir === 'undefined') {
	              dir = 'next';
	              rebuildBoth = true;
	          }
	          if (!rebuildBoth) {
	              newMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), dir);
	          }
	          else {
	              p.wrapper.find('.picker-calendar-month-next, .picker-calendar-month-prev').remove();
	              prevMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), 'prev');
	              nextMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), 'next');
	          }
	          if (dir === 'next' || rebuildBoth) {
	              p.wrapper.append(newMonthHTML || nextMonthHTML);
	          }
	          if (dir === 'prev' || rebuildBoth) {
	              p.wrapper.prepend(newMonthHTML || prevMonthHTML);
	          }
	          p.months = p.wrapper.find('.picker-calendar-month');
	          p.setMonthsTranslate(p.monthsTranslate);
	          if (p.params.onMonthAdd) {
	              p.params.onMonthAdd(p, dir === 'next' ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]);
	          }
	          if (p.params.onMonthYearChangeEnd) {
	              p.params.onMonthYearChangeEnd(p, p.currentYear, p.currentMonth);
	          }
	      };
	      p.setMonthsTranslate = function (translate) {
	          translate = translate || p.monthsTranslate || 0;
	          if (typeof p.monthsTranslate === 'undefined') p.monthsTranslate = translate;
	          p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
	          var prevMonthTranslate = -(translate + 1) * 100 * inverter;
	          var currentMonthTranslate = -translate * 100 * inverter;
	          var nextMonthTranslate = -(translate - 1) * 100 * inverter;
	          p.months.eq(0).transform('translate3d(' + (p.isH ? prevMonthTranslate : 0) + '%, ' + (p.isH ? 0 : prevMonthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
	          p.months.eq(1).transform('translate3d(' + (p.isH ? currentMonthTranslate : 0) + '%, ' + (p.isH ? 0 : currentMonthTranslate) + '%, 0)').addClass('picker-calendar-month-current');
	          p.months.eq(2).transform('translate3d(' + (p.isH ? nextMonthTranslate : 0) + '%, ' + (p.isH ? 0 : nextMonthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
	      };
	      p.nextMonth = function (transition) {
	          if (typeof transition === 'undefined' || typeof transition === 'object') {
	              transition = '';
	              if (!p.params.animate) transition = 0;
	          }
	          var nextMonth = parseInt(p.months.eq(p.months.length - 1).attr('data-month'), 10);
	          var nextYear = parseInt(p.months.eq(p.months.length - 1).attr('data-year'), 10);
	          var nextDate = new Date(nextYear, nextMonth);
	          var nextDateTime = nextDate.getTime();
	          var transitionEndCallback = p.animating ? false : true;
	          if (p.params.maxDate) {
	              if (nextDateTime > new Date(p.params.maxDate).getTime()) {
	                  return p.resetMonth();
	              }
	          }
	          p.monthsTranslate --;
	          if (nextMonth === p.currentMonth) {
	              var nextMonthTranslate = -(p.monthsTranslate) * 100 * inverter;
	              var nextMonthHTML = $(p.monthHTML(nextDateTime, 'next')).transform('translate3d(' + (p.isH ? nextMonthTranslate : 0) + '%, ' + (p.isH ? 0 : nextMonthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
	              p.wrapper.append(nextMonthHTML[0]);
	              p.months = p.wrapper.find('.picker-calendar-month');
	              if (p.params.onMonthAdd) {
	                  p.params.onMonthAdd(p, p.months.eq(p.months.length - 1)[0]);
	              }
	          }
	          p.animating = true;
	          p.onMonthChangeStart('next');
	          var translate = (p.monthsTranslate * 100) * inverter;

	          p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
	          if (transitionEndCallback) {
	              p.wrapper.transitionEnd(function () {
	                  p.onMonthChangeEnd('next');
	              });
	          }
	          if (!p.params.animate) {
	              p.onMonthChangeEnd('next');
	          }
	      };
	      p.prevMonth = function (transition) {
	          if (typeof transition === 'undefined' || typeof transition === 'object') {
	              transition = '';
	              if (!p.params.animate) transition = 0;
	          }
	          var prevMonth = parseInt(p.months.eq(0).attr('data-month'), 10);
	          var prevYear = parseInt(p.months.eq(0).attr('data-year'), 10);
	          var prevDate = new Date(prevYear, prevMonth + 1, -1);
	          var prevDateTime = prevDate.getTime();
	          var transitionEndCallback = p.animating ? false : true;
	          if (p.params.minDate) {
	              if (prevDateTime < new Date(p.params.minDate).getTime()) {
	                  return p.resetMonth();
	              }
	          }
	          p.monthsTranslate ++;
	          if (prevMonth === p.currentMonth) {
	              var prevMonthTranslate = -(p.monthsTranslate) * 100 * inverter;
	              var prevMonthHTML = $(p.monthHTML(prevDateTime, 'prev')).transform('translate3d(' + (p.isH ? prevMonthTranslate : 0) + '%, ' + (p.isH ? 0 : prevMonthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
	              p.wrapper.prepend(prevMonthHTML[0]);
	              p.months = p.wrapper.find('.picker-calendar-month');
	              if (p.params.onMonthAdd) {
	                  p.params.onMonthAdd(p, p.months.eq(0)[0]);
	              }
	          }
	          p.animating = true;
	          p.onMonthChangeStart('prev');
	          var translate = (p.monthsTranslate * 100) * inverter;
	          p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
	          if (transitionEndCallback) {
	              p.wrapper.transitionEnd(function () {
	                  p.onMonthChangeEnd('prev');
	              });
	          }
	          if (!p.params.animate) {
	              p.onMonthChangeEnd('prev');
	          }
	      };
	      p.resetMonth = function (transition) {
	          if (typeof transition === 'undefined') transition = '';
	          var translate = (p.monthsTranslate * 100) * inverter;
	          p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
	      };
	      p.setYearMonth = function (year, month, transition) {
	          if (typeof year === 'undefined') year = p.currentYear;
	          if (typeof month === 'undefined') month = p.currentMonth;
	          if (typeof transition === 'undefined' || typeof transition === 'object') {
	              transition = '';
	              if (!p.params.animate) transition = 0;
	          }
	          var targetDate;
	          if (year < p.currentYear) {
	              targetDate = new Date(year, month + 1, -1).getTime();
	          }
	          else {
	              targetDate = new Date(year, month).getTime();
	          }
	          if (p.params.maxDate && targetDate > new Date(p.params.maxDate).getTime()) {
	              return false;
	          }
	          if (p.params.minDate && targetDate < new Date(p.params.minDate).getTime()) {
	              return false;
	          }
	          var currentDate = new Date(p.currentYear, p.currentMonth).getTime();
	          var dir = targetDate > currentDate ? 'next' : 'prev';
	          var newMonthHTML = p.monthHTML(new Date(year, month));
	          p.monthsTranslate = p.monthsTranslate || 0;
	          var prevTranslate = p.monthsTranslate;
	          var monthTranslate, wrapperTranslate;
	          var transitionEndCallback = p.animating ? false : true;
	          if (targetDate > currentDate) {
	              // To next
	              p.monthsTranslate --;
	              if (!p.animating) p.months.eq(p.months.length - 1).remove();
	              p.wrapper.append(newMonthHTML);
	              p.months = p.wrapper.find('.picker-calendar-month');
	              monthTranslate = -(prevTranslate - 1) * 100 * inverter;
	              p.months.eq(p.months.length - 1).transform('translate3d(' + (p.isH ? monthTranslate : 0) + '%, ' + (p.isH ? 0 : monthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
	          }
	          else {
	              // To prev
	              p.monthsTranslate ++;
	              if (!p.animating) p.months.eq(0).remove();
	              p.wrapper.prepend(newMonthHTML);
	              p.months = p.wrapper.find('.picker-calendar-month');
	              monthTranslate = -(prevTranslate + 1) * 100 * inverter;
	              p.months.eq(0).transform('translate3d(' + (p.isH ? monthTranslate : 0) + '%, ' + (p.isH ? 0 : monthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
	          }
	          if (p.params.onMonthAdd) {
	              p.params.onMonthAdd(p, dir === 'next' ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]);
	          }
	          p.animating = true;
	          p.onMonthChangeStart(dir);
	          wrapperTranslate = (p.monthsTranslate * 100) * inverter;
	          p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? wrapperTranslate : 0) + '%, ' + (p.isH ? 0 : wrapperTranslate) + '%, 0)');
	          if (transitionEndCallback) {
	             p.wrapper.transitionEnd(function () {
	                  p.onMonthChangeEnd(dir, true);
	              }); 
	          }
	          if (!p.params.animate) {
	              p.onMonthChangeEnd(dir);
	          }
	      };
	      p.nextYear = function () {
	          p.setYearMonth(p.currentYear + 1);
	      };
	      p.prevYear = function () {
	          p.setYearMonth(p.currentYear - 1);
	      };
	      

	      // HTML Layout
	      p.layout = function () {
	          var pickerHTML = '';
	          var pickerClass = '';
	          var i;
	          
	          var layoutDate = p.value && p.value.length ? p.value[0] : new Date().setHours(0,0,0,0);
	          var prevMonthHTML = p.monthHTML(layoutDate, 'prev');
	          var currentMonthHTML = p.monthHTML(layoutDate);
	          var nextMonthHTML = p.monthHTML(layoutDate, 'next');
	          var monthsHTML = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (prevMonthHTML + currentMonthHTML + nextMonthHTML) + '</div></div>';
	          // Week days header
	          var weekHeaderHTML = '';
	          if (p.params.weekHeader) {
	              for (i = 0; i < 7; i++) {
	                  var weekDayIndex = (i + p.params.firstDay > 6) ? (i - 7 + p.params.firstDay) : (i + p.params.firstDay);
	                  var dayName = p.params.dayNamesShort[weekDayIndex];
	                  weekHeaderHTML += '<div class="picker-calendar-week-day ' + ((p.params.weekendDays.indexOf(weekDayIndex) >= 0) ? 'picker-calendar-week-day-weekend' : '') + '"> ' + dayName + '</div>';
	                  
	              }
	              weekHeaderHTML = '<div class="picker-calendar-week-days">' + weekHeaderHTML + '</div>';
	          }
	          pickerClass = 'weui-picker-calendar ' + (p.params.cssClass || '');
	          if(!p.inline) pickerClass = 'weui-picker-modal ' + pickerClass;
	          var toolbarHTML = p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : '';
	          if (p.params.toolbar) {
	              toolbarHTML = p.params.toolbarTemplate
	                  .replace(/{{closeText}}/g, p.params.toolbarCloseText)
	                  .replace(/{{monthPicker}}/g, (p.params.monthPicker ? p.params.monthPickerTemplate : ''))
	                  .replace(/{{yearPicker}}/g, (p.params.yearPicker ? p.params.yearPickerTemplate : ''));
	          }

	          pickerHTML =
	              '<div class="' + (pickerClass) + '">' +
	                  toolbarHTML +
	                  '<div class="picker-modal-inner">' +
	                      weekHeaderHTML +
	                      monthsHTML +
	                  '</div>' +
	              '</div>';
	              
	              
	          p.pickerHTML = pickerHTML;    
	      };

	      // Input Events
	      function openOnInput(e) {
	          e.preventDefault();
	          if (p.opened) return;
	          p.open();
	          if (p.params.scrollToInput && !isPopover()) {
	              var pageContent = p.input.parents('.page-content');
	              if (pageContent.length === 0) return;

	              var paddingTop = parseInt(pageContent.css('padding-top'), 10),
	                  paddingBottom = parseInt(pageContent.css('padding-bottom'), 10),
	                  pageHeight = pageContent[0].offsetHeight - paddingTop - p.container.height(),
	                  pageScrollHeight = pageContent[0].scrollHeight - paddingTop - p.container.height(),
	                  newPaddingBottom;

	              var inputTop = p.input.offset().top - paddingTop + p.input[0].offsetHeight;
	              if (inputTop > pageHeight) {
	                  var scrollTop = pageContent.scrollTop() + inputTop - pageHeight;
	                  if (scrollTop + pageHeight > pageScrollHeight) {
	                      newPaddingBottom = scrollTop + pageHeight - pageScrollHeight + paddingBottom;
	                      if (pageHeight === pageScrollHeight) {
	                          newPaddingBottom = p.container.height();
	                      }
	                      pageContent.css({'padding-bottom': (newPaddingBottom) + 'px'});
	                  }
	                  pageContent.scrollTop(scrollTop, 300);
	              }
	          }
	      }
	      function closeOnHTMLClick(e) {
	          if (inPopover()) return;
	          if (p.input && p.input.length > 0) {
	              if (e.target !== p.input[0] && $(e.target).parents('.weui-picker-modal').length === 0) p.close();
	          }
	          else {
	              if ($(e.target).parents('.weui-picker-modal').length === 0) p.close();   
	          }
	      }

	      if (p.params.input) {
	          p.input = $(p.params.input);
	          if (p.input.length > 0) {
	              if (p.params.inputReadOnly) p.input.prop('readOnly', true);
	              if (!p.inline) {
	                  p.input.on('click', openOnInput);    
	              }
	              if (p.params.inputReadOnly) {
	                  p.input.on('focus mousedown', function (e) {
	                      e.preventDefault();
	                  });
	              }
	          }
	              
	      }
	      
	      //iphone 上无法正确触发 click，会导致点击外面无法关闭
	      if (!p.inline) $(document).on('click touchend', closeOnHTMLClick);

	      // Open
	      function onPickerClose() {
	          p.opened = false;
	          if (p.input && p.input.length > 0) p.input.parents('.page-content').css({'padding-bottom': ''});
	          if (p.params.onClose) p.params.onClose(p);

	          // Destroy events
	          p.destroyCalendarEvents();
	      }

	      p.opened = false;
	      p.open = function () {
	          var toPopover = isPopover() && false;
	          var updateValue = false;
	          if (!p.opened) {
	              // Set date value
	              if (!p.value) {
	                  if (p.params.value) {
	                      p.value = p.params.value;
	                      updateValue = true;
	                  }
	              }

	              // Layout
	              p.layout();

	              // Append
	              if (toPopover) {
	                  p.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + p.pickerHTML + '</div></div>';
	                  p.popover = $.popover(p.pickerHTML, p.params.input, true);
	                  p.container = $(p.popover).find('.weui-picker-modal');
	                  $(p.popover).on('close', function () {
	                      onPickerClose();
	                  });
	              }
	              else if (p.inline) {
	                  p.container = $(p.pickerHTML);
	                  p.container.addClass('picker-modal-inline');
	                  $(p.params.container).append(p.container);
	              }
	              else {
	                  p.container = $($.openPicker(p.pickerHTML));
	                  $(p.container)
	                  .on('close', function () {
	                      onPickerClose();
	                  });
	              }

	              // Store calendar instance
	              p.container[0].f7Calendar = p;
	              p.wrapper = p.container.find('.picker-calendar-months-wrapper');

	              // Months
	              p.months = p.wrapper.find('.picker-calendar-month');

	              // Update current month and year
	              p.updateCurrentMonthYear();

	              // Set initial translate
	              p.monthsTranslate = 0;
	              p.setMonthsTranslate();

	              // Init events
	              p.initCalendarEvents();

	              // Update input value
	              if (updateValue) p.updateValue();
	              
	          }

	          // Set flag
	          p.opened = true;
	          p.initialized = true;
	          if (p.params.onMonthAdd) {
	              p.months.each(function () {
	                  p.params.onMonthAdd(p, this);
	              });
	          }
	          if (p.params.onOpen) p.params.onOpen(p);
	      };

	      // Close
	      p.close = function () {
	          if (!p.opened || p.inline) return;
	          p.animating = false;  //有可能还有动画没做完，因此animating设置还没改。
	          if (inPopover()) {
	              $.closePicker(p.popover);
	              return;
	          }
	          else {
	              $.closePicker(p.container);
	              return;
	          }
	      };

	      // Destroy
	      p.destroy = function () {
	          p.close();
	          if (p.params.input && p.input.length > 0) {
	              p.input.off('click focus', openOnInput);
	              p.input.data("calendar", null);
	          }
	          $('html').off('click', closeOnHTMLClick);
	      };

	      if (p.inline) {
	          p.open();
	      }

	      return p;
	  };

	  var format = function(d) {
	    return d < 10 ? "0"+d : d;
	  }


	  $.fn.calendar = function (params, args) {
	      params = params || {};
	      return this.each(function() {
	        var $this = $(this);
	        if(!$this[0]) return;
	        var p = {};
	        if($this[0].tagName.toUpperCase() === "INPUT") {
	          p.input = $this;
	        } else {
	          p.container = $this;
	        }

	        var calendar = $this.data("calendar");

	        if(!calendar) {
	          if(!params.value && $this.val()) params.value = [$this.val()];
	          //默认显示今天
	          if(!params.value) {
	            var today = new Date();
	            params.value = [today.getFullYear() + "-" + format(today.getMonth() + 1) + "-" + format(today.getDate())];
	          }
	          calendar = $this.data("calendar", new Calendar($.extend(p, params)));
	        }

	        if(typeof params === typeof "a") {
	          calendar[params].call(calendar, args);
	        }
	      });
	  };

	  defaults = $.fn.calendar.prototype.defaults = {
	    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    firstDay: 1, // First day of the week, Monday
	    weekendDays: [0, 6], // Sunday and Saturday
	    multiple: false,
	    dateFormat: 'yyyy-mm-dd',
	    direction: 'horizontal', // or 'vertical'
	    minDate: null,
	    maxDate: null,
	    touchMove: true,
	    animate: true,
	    closeOnSelect: true,
	    monthPicker: true,
	    monthPickerTemplate: 
	        '<div class="picker-calendar-month-picker">' +
	            '<a href="javascript:;" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a>' +
	            '<div class="current-month-value"></div>' +
	            '<a href="javascript:;" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a>' +
	        '</div>',
	    yearPicker: true,
	    yearPickerTemplate: 
	        '<div class="picker-calendar-year-picker">' +
	            '<a href="javascript:;" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a>' +
	            '<span class="current-year-value"></span>' +
	            '<a href="javascript:;" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a>' +
	        '</div>',
	    weekHeader: true,
	    // Common settings
	    scrollToInput: true,
	    inputReadOnly: true,
	    convertToPopover: true,
	    onlyInPopover: false,
	    toolbar: true,
	    toolbarCloseText: 'Done',
	    toolbarTemplate: 
	        '<div class="toolbar">' +
	            '<div class="toolbar-inner">' +
	                '{{yearPicker}}' +
	                '{{monthPicker}}' +
	                // '<a href="#" class="link close-picker">{{closeText}}</a>' +
	            '</div>' +
	        '</div>',
	    /* Callbacks
	    onMonthAdd
	    onChange
	    onOpen
	    onClose
	    onDayClick
	    onMonthYearChangeStart
	    onMonthYearChangeEnd
	    */
	  };

	}($);

	/* global $:true */
	/* jshint unused:false*/

	+ function($) {
	  "use strict";


	  var defaults;

	  var Datetime = function(input, params) {
	    this.input = $(input);
	    this.params = params;

	    this.initMonthes = ('01 02 03 04 05 06 07 08 09 10 11 12').split(' ');

	    this.initYears = (function () {
	      var arr = [];
	      for (var i = 1950; i <= 2030; i++) { arr.push(i); }
	      return arr;
	    })();

	    var p = $.extend({}, params, this.getConfig());
	    $(this.input).picker(p);
	  }

	  Datetime.prototype = {
	    getDays : function(max) {
	      var days = [];
	      for(var i=1; i<= (max||31);i++) {
	        days.push(i < 10 ? "0"+i : i);
	      }
	      return days;
	    },

	    getDaysByMonthAndYear : function(month, year) {
	      var int_d = new Date(year, parseInt(month)+1-1, 1);
	      var d = new Date(int_d - 1);
	      return this.getDays(d.getDate());
	    },

	    formatNumber : function (n) {
	      return n < 10 ? "0" + n : n;
	    },

	    formatValue : function(values, displayValues) {
	      var params = this.params;
	      return values[0] + params.dateSplit + values[1] + params.dateSplit + values[2] + params.dateTimeSplit + values[3] + params.timeSplit + values[4];
	    },
	    stringToArray: function(value) {
	      var params = this.params;
	      var tokens = value.split(params.dateTimeSplit);
	      var date = tokens[0],
	          time = tokens[1];
	      return [].concat(date.split(params.dateSplit), time ? time.split(params.timeSplit) : []);
	    },
	    arrayToDate: function(arr) {
	      var params = this.params;
	      if(arr.length === 3) return new Date(arr.join(params.dateSplit));
	      var date = new Date(arr.slice(0, 3).join(params.dateSplit));
	      //注意这种格式 "2012-12-12 12:12" 在ios上是错误的，如果用 "2012-12-12T12:12" 是对的，但是这个是标准时区而不是东八区，所以这里分别设置
	      date.setHours(arr[3]);
	      date.setMinutes(arr[4]);
	      return date;
	    },
	    getConfig : function() {

	      var today = new Date(),
	          params = this.params,
	          self = this,
	          lastValidValues;

	      var config = {
	        rotateEffect: false,  //为了性能

	        value: [today.getFullYear(), this.formatNumber(today.getMonth()+1), this.formatNumber(today.getDate()), this.formatNumber(today.getHours()), (this.formatNumber(today.getMinutes()))],

	        onChange: function (picker, values, displayValues) {
	          var cols = picker.cols;
	          var days = self.getDaysByMonthAndYear(cols[1].value, cols[0].value);
	          var currentValue = picker.cols[2].value;
	          if(currentValue > days.length) currentValue = days.length;
	          picker.cols[2].setValue(currentValue);

	          //check min and max
	          
	          var current = self.arrayToDate(values);
	          var valid = true;
	          if(params.min) {
	            var min = self.arrayToDate(self.stringToArray(typeof params.min === "function" ? params.min() : params.min));

	            if(current < +min) {
	              picker.setValue(lastValidValues);
	              valid = false;
	            } 
	          }
	          if(params.max) {
	            var max = self.arrayToDate(self.stringToArray(typeof params.max === "function" ? params.max() : params.max));
	            if(current > +max) {
	              picker.setValue(lastValidValues);
	              valid = false;
	            } 
	          }

	          valid && (lastValidValues = values);

	          if (self.params.onChange) {
	            self.params.onChange.apply(this, arguments);
	          }
	        },

	        formatValue: function (p, values, displayValues) {
	          return self.formatValue(values, displayValues);
	        },

	        cols: [
	          // Years
	          {
	            values: self.initYears
	          },
	          // Divider
	          {
	            divider: true,
	            content: this.params.dateSplit
	          },
	          // Months
	          {
	            values: self.initMonthes
	          },
	          {
	            divider: true,
	            content: this.params.dateSplit
	          },
	          // Days
	          {
	            values: self.getDays()
	          },

	          // Space divider
	          {
	            divider: true,
	            content: this.params.dateTimeSplit
	          },
	          // Hours
	          {
	            values: (function () {
	              if (self.params.hours) {
	                return self.params.hours;
	              }
	              var arr = [];
	              for (var i = 0; i <= 23; i++) { arr.push(self.formatNumber(i)); }
	              return arr;
	            })(),
	          },
	          // Divider
	          {
	            divider: true,
	            content: this.params.timeSplit
	          },
	          // Minutes
	          {
	            values: (function () {
	              if (self.params.minutes) {
	                return self.params.minutes;
	              }
	              var arr = [];
	              for (var i = 0; i <= 59; i++) { arr.push(self.formatNumber(i)); }
	              return arr;
	            })(),
	          }
	        ]
	      };

	      var inputValue = this.input.val();
	      if(inputValue) config.value = this.stringToArray(inputValue);
	      if(this.params.value) {
	        this.input.val(this.params.value);
	        config.value = this.stringToArray(this.params.value);
	      }

	      return config;
	    }
	  }

	  $.fn.datetimePicker = function(params) {
	    params = $.extend({}, defaults, params);
	    return this.each(function() {
	      if(!this) return;
	      var $this = $(this);
	      var datetime = $this.data("datetime");
	      if(!datetime) $this.data("datetime", new Datetime(this, params));
	      return datetime;
	    });
	  };

	  defaults = $.fn.datetimePicker.prototype.defaults = {
	    dateSplit: "-",
	    timeSplit: ":",
	    dateTimeSplit: " ",
	    input: undefined,
	    hours: undefined, // 小时
	    minutes: undefined,  // 分钟
	    min: undefined,
	    max: undefined
	  }

	}($);

	/*======================================================
	************   Picker   ************
	======================================================*/
	/* global $:true */

	+ function($) {
	  "use strict";


	  //Popup 和 picker 之类的不要共用一个弹出方法，因为这样会导致 在 popup 中再弹出 picker 的时候会有问题。

	  $.openPopup = function(popup, className) {

	    $.closePopup();

	    popup = $(popup);
	    popup.show();
	    popup.width();
	    popup.addClass("weui-popup-container-visible");
	    var modal = popup.find(".weui-popup-modal");
	    modal.width();
	    modal.transitionEnd(function() {
	      modal.trigger("open");
	    });
	  }


	  $.closePopup = function(container, remove) {
	    container = $(container || ".weui-popup-container-visible");
	    container.find('.weui-popup-modal').transitionEnd(function() {
	      var $this = $(this);
	      $this.trigger("close");
	      container.hide();
	      remove && container.remove();
	    })
	    container.removeClass("weui-popup-container-visible")
	  };


	  $(document).on("click", ".close-popup, .weui-popup-overlay", function() {
	    $.closePopup();
	  })
	  .on("click", ".open-popup", function() {
	    $($(this).data("target")).popup();
	  })
	  .on("click", ".weui-popup-container", function(e) {
	    if($(e.target).hasClass("weui-popup-container")) $.closePopup();
	  })

	  $.fn.popup = function() {
	    return this.each(function() {
	      $.openPopup(this);
	    });
	  };

	}($);

	/* ===============================================================================
	************   Notification ************
	=============================================================================== */
	/* global $:true */
	+function ($) {
	  "use strict";

	  var noti, defaults, timeout, start, diffX, diffY;

	  var touchStart = function(e) {
	    var p = $.getTouchPosition(e);
	    start = p;
	    diffX = diffY = 0;
	    noti.addClass("touching");
	  };
	  var touchMove = function(e) {
	    if(!start) return false;
	    e.preventDefault();
	    e.stopPropagation();
	    var p = $.getTouchPosition(e);
	    diffX = p.x - start.x;
	    diffY = p.y - start.y;
	    if(diffY > 0) {
	      diffY = Math.sqrt(diffY);
	    }

	    noti.css("transform", "translate3d(0, "+diffY+"px, 0)");
	  };
	  var touchEnd = function() {
	    noti.removeClass("touching");
	    noti.attr("style", "");
	    if(diffY < 0 && (Math.abs(diffY) > noti.height()*0.38)) {
	      $.closeNotification();
	    }

	    if(Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) {
	      noti.trigger("noti-click");
	    }

	    start = false;
	  };

	  var attachEvents = function(el) {
	    el.on($.touchEvents.start, touchStart);
	    el.on($.touchEvents.move, touchMove);
	    el.on($.touchEvents.end, touchEnd);
	  };

	  $.notification = $.noti = function(params) {
	    params = $.extend({}, defaults, params);
	    noti = $(".notification");
	    if(!noti[0]) { // create a new notification
	      noti = $('<div class="notification"></div>').appendTo(document.body);
	      attachEvents(noti);
	    }

	    noti.off("noti-click"); //the click event is not correct sometime: it will trigger when user is draging.
	    if(params.onClick) noti.on("noti-click", function() {
	      params.onClick(params.data);
	    });

	    noti.html($.t7.compile(params.tpl)(params));

	    noti.show();

	    noti.addClass("notification-in");
	    noti.data("params", params);

	    var startTimeout = function() {
	      if(timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }

	      timeout = setTimeout(function() {
	        if(noti.hasClass("touching")) {
	          startTimeout();
	        } else {
	          $.closeNotification();
	        }
	      }, params.time);
	    };

	    startTimeout();

	  };

	  $.closeNotification = function() {
	    timeout && clearTimeout(timeout);
	    timeout = null;
	    var noti = $(".notification").removeClass("notification-in").transitionEnd(function() {
	      $(this).remove();
	    });

	    if(noti[0]) {
	      var params = $(".notification").data("params");
	      if(params && params.onClose) {
	        params.onClose(params.data);
	      }
	    }
	  };

	  defaults = $.noti.prototype.defaults = {
	    title: undefined,
	    text: undefined,
	    media: undefined,
	    time: 4000,
	    onClick: undefined,
	    onClose: undefined,
	    data: undefined,
	    tpl:  '<div class="notification-inner">' +
	            '{{#if media}}<div class="notification-media">{{media}}</div>{{/if}}' +
	            '<div class="notification-content">' +
	            '{{#if title}}<div class="notification-title">{{title}}</div>{{/if}}' +
	            '{{#if text}}<div class="notification-text">{{text}}</div>{{/if}}' +
	            '</div>' +
	            '<div class="notification-handle-bar"></div>' +
	          '</div>'
	  };

	}($);

	+ function($) {
	  "use strict";

	  var timeout;

	  $.toptip = function(text, duration, type) {
	    if(!text) return;
	    if(typeof duration === typeof "a") {
	      type = duration;
	      duration = undefined;
	    }
	    duration = duration || 3000;
	    var className = type ? 'bg-' + type : 'bg-danger';
	    var $t = $('.weui_toptips').remove();
	    $t = $('<div class="weui_toptips"></div>').appendTo(document.body);
	    $t.html(text);
	    $t[0].className = 'weui_toptips ' + className

	    clearTimeout(timeout);

	    if(!$t.hasClass('weui_toptips_visible')) {
	      $t.show().width();
	      $t.addClass('weui_toptips_visible');
	    }

	    timeout = setTimeout(function() {
	      $t.removeClass('weui_toptips_visible').transitionEnd(function() {
	        $t.remove();
	      });
	    }, duration);
	  }
	}($);


/***/ },
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/css/error.css": 45
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 29;


/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/js/error.js": 48
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 31;


/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "本次成本月活动主题是（  ）",
			"answer": 3,
			"question": [
				"全员降本增效，促进管理提升",
				"优化成本管理，加快内涵发展",
				"加强&quot;三全&quot;成本管理，促进公司转型发展",
				"增强成本意识，同创企业效益。"
			]
		},
		{
			"title": "成钞公司的成本方针是（  ）",
			"answer": 1,
			"question": [
				"全员、全过程、全要素",
				"优化成本、创造价值",
				"内涵式发展、成本行业领先",
				"控制成本、降本增效"
			]
		},
		{
			"title": "成钞公司的成本理念（  ）",
			"answer": 3,
			"question": [
				"优化成本管理，加快内涵发展",
				"全员降本增效，促进管理提升",
				"优化成本，创造价值",
				"全员参与，降本增效"
			]
		},
		{
			"title": "成钞公司的成本战略（  ）",
			"answer": 2,
			"question": [
				"精益生产，成本达到行业领先",
				"成本领先",
				"追求卓越",
				"最大限度降低企业管理和运营成本"
			]
		},
		{
			"title": "全面成本管理的核心（  ）",
			"answer": 1,
			"question": [
				"就是把成本降到尽可能低的水平加以保持",
				"就是控制不必要、不合理成本因素",
				"就是全面、系统、充分和准确地识别和确定提高成本因素",
				"就是认识、理解、掌握和运用好提高成本因素的性质"
			]
		},
		{
			"title": "降低和保持成本的核心（  ）",
			"answer": 2,
			"question": [
				"就是把成本降到尽可能低的水平加以保持",
				"就是控制不必要、不合理成本因素",
				"就是全面、系统、充分和准确地识别和确定提高成本因素",
				"就是认识、理解、掌握和运用好提高成本因素的性质"
			]
		},
		{
			"title": "控制成本短板的核心（  ）",
			"answer": 3,
			"question": [
				"就是把成本降到尽可能低的水平加以保持",
				"就是控制不必要、不合理成本因素",
				"就是全面、系统、充分和准确地识别和确定提高成本因素",
				"就是认识、理解、掌握和运用好提高成本因素的性质"
			]
		},
		{
			"title": "识别和确定成本短板的核心（  ）",
			"answer": 4,
			"question": [
				"就是把成本降到尽可能低的水平加以保持",
				"就是控制不必要、不合理成本因素",
				"就是全面、系统、充分和准确地识别和确定提高成本因素",
				"就是认识、理解、掌握和运用好提高成本因素的性质"
			]
		},
		{
			"title": "目前我国个人所得税的起征点是（  ）",
			"answer": 3,
			"question": [
				"2000元",
				"1500元",
				"3500元",
				"5000元"
			]
		},
		{
			"title": "目前我国个人所得税的级数有（  ）级",
			"answer": 2,
			"question": [
				"6级",
				"7级",
				"8级",
				"9级"
			]
		},
		{
			"title": "目前我国个人所得税计算应税所得额超过4500元至9000元的部分，适用税率是（  ）。",
			"answer": 3,
			"question": [
				"25%",
				"30%",
				"20%",
				"15%"
			]
		},
		{
			"title": "张三当月工资及奖金是8620元，个人缴公积金是980元，个人年金是200元，个人缴退养金是810元，个人缴医疗保险金是198元，当月张三应缴个人所得税是（  ）元",
			"answer": 1,
			"question": [
				"188.2",
				"731.4",
				"87.96",
				"0"
			]
		},
		{
			"title": "需要向公司报销费用的各类发票需要注明的付款单位名称应为（  ）",
			"answer": 1,
			"question": [
				"成都印钞有限公司",
				"成钞公司",
				"540厂",
				"成都印钞有限公司XX制作部"
			]
		},
		{
			"title": "营改增政策出台以后，出差住宿发票均要求开具（  ）",
			"answer": 3,
			"question": [
				"定额发票",
				"手写发票",
				"增值税专用发票或增值税普通发票",
				"营业税发票"
			]
		},
		{
			"title": "职工住房公积金提取不需要那些资料（  ）",
			"answer": 4,
			"question": [
				"本人身份证",
				"公积金联名卡",
				"购房合同",
				"单位介绍信"
			]
		},
		{
			"title": "差旅费金额超过（  ）需要所在部门公司级主管领导签字",
			"answer": 2,
			"question": [
				"5000元",
				"10000元",
				"15000元",
				"20000元"
			]
		},
		{
			"title": "您知道哪些不应该算作产品的成本？（  ）",
			"answer": 3,
			"question": [
				"油墨、化工等材料",
				"机器、厂房的折旧费",
				"招待客户的费用",
				"生产人员的工资薪酬"
			]
		},
		{
			"title": "票据防伪查询验证方式（  ）",
			"answer": 4,
			"question": [
				"拨打12366热线电话查询发票信息",
				"通过登陆票据相应地区的国税局、地税局官方网站，输入发票代码、号码、识别码、金额、开票单位名称或税务代码查询票据信息",
				"通过扫描票据上的二维码进行辨别票据真伪。",
				"以上全选"
			]
		},
		{
			"title": "职工个人报销意外伤害险（雇主责任险）需要准备以下哪些材料（  ）",
			"answer": 4,
			"question": [
				"经部门主管签字认可的&quot;事发经过&quot;纸质材料",
				"医院出具并加盖鲜章的出入院证明、病例档案、药品清单及医药发票等",
				"个人银行卡、身份证复印件；填写保险金给付通知书、转账授权书",
				"以上全选"
			]
		},
		{
			"title": "财会人员要充分履行《中华人民共和国会计法》赋予的会计监督职能，对有下列情况之一的发票有权拒绝付款（  ）",
			"answer": 4,
			"question": [
				"未按本公司规定办理法定手续的发票",
				"应收取增值税专用发票，却收取了普通发票的发票",
				"项目不全、填写不清楚的发票；内容不真实、有涂改痕迹的发票",
				"以上全选"
			]
		}
	];

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "2016年公司成本月活动主题是（  ）",
			"answer": 1,
			"question": [
				"强化成本管理，全员降本增效",
				"优化成本管理，加快内涵发展",
				"全员节约，共同行动",
				"例行节约，消除浪费"
			]
		},
		{
			"title": "长城公司的成本理念（  ）",
			"answer": 3,
			"question": [
				"成本领先",
				"精打细算降成本，千方百计提效益升",
				"优化成本，创造价值",
				"最大限度降低企业管理和运营成本"
			]
		},
		{
			"title": "《成本管理体系》中，各成本责任中心职责的共同点中，不包括（  ）。",
			"answer": 2,
			"question": [
				"本部门综合计划与预算编制",
				"控制技改、信息化项目投资成本",
				"控制部门主管的成本费用",
				"控制本部门的可控费用"
			]
		},
		{
			"title": "所有在班组消耗的人力、财力、物力都是班组成本的一部分，下列不属于班组成本构成的是（  ）",
			"answer": 4,
			"question": [
				"制造费用",
				"直接材料",
				"工人工资",
				"销售费用"
			]
		},
		{
			"title": "企业成本按其性态分为固定成本和变动成本，下列属于固定成本的是（  ）",
			"answer": 4,
			"question": [
				"原材料",
				"水电气",
				"机器修理费",
				"设备折旧"
			]
		},
		{
			"title": "下列费用中，可以免征个人所得税的是（  ）",
			"answer": 3,
			"question": [
				"从福利费中发放的取暖费、防暑降温费",
				"从福利费中发放给职工的实物，如中秋节的月饼、端午节的粽子等",
				"从福利费中支付给职工的独生子女费、困难补助",
				"按月发放的住房补贴、交通补贴、通讯补贴"
			]
		},
		{
			"title": "目前我国&quot;工资、薪金所得&quot;个人所得税起征点是3,500元，个人所得税计算应税所得额超过4500元至9000元的部分，适用税率和速算扣除数分别是（  ）。",
			"answer": 3,
			"question": [
				"3%和0",
				"10%和105",
				"20%和555",
				"25%和1,005"
			]
		},
		{
			"title": "中国公民王某于2016年1月取得一次性奖金12,000元，其当月工资3,500元，王某取得该奖金应缴个人所得税是（  ）元",
			"answer": 2,
			"question": [
				"315",
				"360",
				"1,095",
				"0"
			]
		},
		{
			"title": "营改增政策出台以后，出差住宿发票均要求开具（  ）",
			"answer": 3,
			"question": [
				"定额发票",
				"手写发票",
				"增值税专用发票或增值税普通发票",
				"营业税发票"
			]
		},
		{
			"title": "票据防伪查询验证方式（  ）",
			"answer": 4,
			"question": [
				"拨打12366热线电话查询发票信息",
				"通过登陆票据相应地区的国税局、地税局官方网站，输入发票代码、号码、识别码、金额、开票单位名称或税务代码查询票据信息",
				"通过扫描票据上的二维码进行辨别票据真伪",
				"以上全选"
			]
		},
		{
			"title": "自2016年5月1日起，地税机关不再向试点纳税人发放发票。试点纳税人已领取地税机关印制的发票以及印有本单位名称的发票，可继续使用至2016年6月30日，特殊情况经省国税局确定，可适当延长使用期限，最迟不超过2016年8月31日。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "成本管理不只是管理者的事情，是企业全体员工的事，公司员工&quot;人人都是经营者&quot;。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "人工成本是企业在生产经营中由投入劳动力要素所发生的一切费用，主要包括：职工工资总额、社会保险费用、职工福利费用、职工教育经费、劳动保护费用、职工住房费用和其他人工成本支出。其中，职工工资总额是人工成本的主要组成部分。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "直接材料是指企业生产经营过程消耗的机器折旧、原材料、辅助材料、外购半成品、燃料、动力、包装物及其其它直接材料。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "固定成本是指其总额在一定期间和一定业务量范围内，不受业务量变动的影响而保持固定不变的成本。变动成本是指在一定期间和一定业务量范围内，其总额随着业务量的变动而呈正比例变动的成本。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "质量成本是指企业为了保证和提高产品或服务质量而支出的一切费用，以及因未达到产品质量标准，不能满足用户和消费者需要而产生的一切损失。主要包括：预防成本、鉴定成本、内部损失成本和外部损失成本。提高产品质量水平能够有效的降低产品成本。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "精益生产的核心是消除一切无效劳动和浪费,通过不断地降低成本、提高质量、增强生产灵活性、实现无废品和零库存等手段确保企业在市场竞争中的优势。精益生产的思想及方法需要通过班组人员的全员参与,共同改善达到减少浪费、降低成本，来提高利润。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "跨部门安排人员出差的，应由派出部门与所属部门领导同意后，由派出部门和所属部门公司级分管领导审批，对出差人员在外出期间发生的费用审核由派出部门负责。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "工作人员出差须严格执行审批制度，在成都地区以外出差须填写《公出申请单》，详细写明人数、拟定天数、公出事由、地点、交通工具等，由公司级分管领导审批同意后方可执行。各部门第一负责人出差应由公司主要领导审批同意后方可执行。出差人员应对差旅费票据的合法性、真实性负责，出差返回后应填写《员工差旅费报销单》将相关单据附后，及时到计划财务部办理报销事宜。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "备用金借款填报《借款申请单》，按程序审批，其他程序与现金付款相同。每年年底，各部门应将周转金归还计划财务部门，次年年初再行续借。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		}
	];

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "办公室",
			"nums": 17
		},
		{
			"name": "营销部",
			"nums": 33
		},
		{
			"name": "计划财务部",
			"nums": 8
		},
		{
			"name": "企划安保部",
			"nums": 38
		},
		{
			"name": "物资设备保障部",
			"nums": 23
		},
		{
			"name": "生产管理部",
			"nums": 33
		},
		{
			"name": "科技质量部",
			"nums": 31
		},
		{
			"name": "加工生产部",
			"nums": 100
		},
		{
			"name": "粉体材料生产部",
			"nums": 31
		},
		{
			"name": "精炼生产部",
			"nums": 40
		}
	];

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "工商银行",
			"nums": 5
		},
		{
			"name": "中国银行",
			"nums": 5
		},
		{
			"name": "农业银行",
			"nums": 5
		},
		{
			"name": "建设银行",
			"nums": 5
		},
		{
			"name": "邮政储蓄",
			"nums": 5
		},
		{
			"name": "长安银行",
			"nums": 5
		},
		{
			"name": "商州联社",
			"nums": 5
		},
		{
			"name": "西钞公司",
			"nums": 5
		}
	];

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = [
		{
			"answer": "3",
			"title": "1921年(  )，中国共产党第一次全国代表大会在上海开幕。一大的胜利召开，标志着中国共产党的正式成立。",
			"question": [
				"6月30日",
				"7月1日",
				"7月23日",
				"8月1日"
			]
		},
		{
			"answer": "2",
			"title": "(  )打响了武装反抗国民党反动派的第一枪，揭开了中国共产党独立领导武装斗争和创建革命军队的序幕。",
			"question": [
				"秋收起义",
				"南昌起义",
				"广州起义",
				"百色起义"
			]
		},
		{
			"answer": "1",
			"title": "确立党对军队的绝对领导的历史大事件是(  )。",
			"question": [
				"三湾改编",
				"古田会议",
				"新泉整训",
				"文家市决策"
			]
		},
		{
			"answer": "2",
			"title": "1928年12月，中国共产党历史上制定的第一个土地法是(  )。",
			"question": [
				"《中国土地法大纲》",
				"《井冈山土地法》",
				"《兴国土地法》",
				"《中华苏维埃土地法》"
			]
		},
		{
			"answer": "2",
			"title": "中国共产党第一次独立自主地运用马克思主义原理解决自己的路线、方针、政策的会议是(  )。",
			"question": [
				"扎西会议",
				"遵义会议",
				"黎平会议",
				"猴场会议"
			]
		},
		{
			"answer": "4",
			"title": "(  )，红一方面军、红二方面军、红四方面军在甘肃胜利会师，宣告红军长征胜利结束。",
			"question": [
				"1934年10月",
				"1935年10月",
				"1936年2月",
				"1936年10月"
			]
		},
		{
			"answer": "4",
			"title": "土地革命战争后期，中国共产党在(  )确立了抗日民族统一战线的策略。",
			"question": [
				"八七会议",
				"两河口会议",
				"洛川会议",
				"瓦窑堡会议"
			]
		},
		{
			"answer": "2",
			"title": "抗日战争全面爆发的标志是(  )。",
			"question": [
				"九一八事变",
				"卢沟桥事变",
				"华北事变",
				"西安事变"
			]
		},
		{
			"answer": "3",
			"title": "(  )发生后，《新华日报》冲破层层阻力，刊载了周恩来的著名题词：&quot;千古奇冤，江南一叶；同室操戈，相煎何急！&quot;",
			"question": [
				"四一二反革命政变",
				"七一五反革命政变",
				"皖南事变",
				"较场口事件"
			]
		},
		{
			"answer": "2",
			"title": "1942年5月，毛泽东发表(  )，阐明了革命文艺为人民服务，首先是为工农兵服务的根本方向。",
			"question": [
				"《为人民服务》",
				"《在延安文艺座谈会上的讲话》",
				"《文化工作中的统一战线》",
				"《愚公移山》"
			]
		},
		{
			"answer": "4",
			"title": "延安整风运动是中国共产党历史上一次全党范围的普遍的马克思主义教育运动，也是一次伟大的思想解放运动。其基本方针是(  )。",
			"question": [
				"反对宗派主义以整顿党风",
				"反对主观主义以整顿学风",
				"团结—批评—团结",
				"惩前毖后，治病救人"
			]
		},
		{
			"answer": "1",
			"title": "从1948年9月到1949年1月，解放战争中三大战役的先后顺序是(  )。",
			"question": [
				"辽沈、淮海、平津",
				"平津、辽沈、淮海",
				"淮海、平津、辽沈",
				"淮海、辽沈、平津"
			]
		},
		{
			"answer": "3",
			"title": "1949年3月，党的七届二中全会在(  )召开。毛泽东在会上向全党同志提出了著名的&quot;两个务必&quot;。",
			"question": [
				"阜平",
				"延安",
				"西柏坡",
				"北平"
			]
		},
		{
			"answer": "1",
			"title": "中华人民共和国第一次以五大国之一的地位参加讨论重大国际问题的国际会议是(  )。",
			"question": [
				"日内瓦会议",
				"亚非会议",
				"万隆会议",
				"亚洲太平洋地区和平会议"
			]
		},
		{
			"answer": "3",
			"title": "1954年9月，第一届全国人民代表大会第一次会议在北京举行。会议的召开，标志着(  )作为我国根本政治制度正式确立。",
			"question": [
				"共产党领导的多党合作、政治协商制度",
				"民族区域自治制度",
				"人民代表大会制度",
				"基层自治制度"
			]
		},
		{
			"answer": "4",
			"title": "(  )，我国对农业、手工业和资本主义工商业的社会主义改造胜利完成，标志着社会主义制度在我国基本上建立起来了。",
			"question": [
				"1949年",
				"1953年",
				"1955年",
				"1956年"
			]
		},
		{
			"answer": "4",
			"title": "1964年10月，我国成功地爆炸第一颗(  )，有力地打破了超级大国的核垄断和核讹诈，提高了我国的国际地位。",
			"question": [
				"氢弹",
				"导弹",
				"中子弹",
				"原子弹"
			]
		},
		{
			"answer": "2",
			"title": "1964年12月－1965年1月，第三届全国人民代表大会第一次会议在北京召开，会议提出了(  )的任务。",
			"question": [
				"调整国民经济",
				"实现四个现代化",
				"建设工业化国家",
				"建设美丽中国"
			]
		},
		{
			"answer": "4",
			"title": "1975年，在毛泽东、周恩来的支持下，邓小平主持中央日常工作，以整顿(  )为突破口，着手对许多方面的工作进行整顿。",
			"question": [
				"军队",
				"农业",
				"工业",
				"铁路"
			]
		},
		{
			"answer": "1",
			"title": "1978年12月，党的十一届三中全会确定把全党的工作重点转移到(  )上来。",
			"question": [
				"社会主义现代化建设",
				"改革开放",
				"拨乱反正",
				"加快农业发展"
			]
		},
		{
			"answer": "4",
			"title": "1992年10月，党的十四大确定我国经济体制改革的目标是建立(  )体制。",
			"question": [
				"计划与市场相结合的社会主义商品经济",
				"以公有制为基础的有计划的商品经济",
				"计划经济",
				"社会主义市场经济"
			]
		},
		{
			"answer": "1",
			"title": "2015年10月12日召开会议，(  )审议通过《中国共产党廉洁自律准则》、《中国共产党纪律处分条例》。",
			"question": [
				"中共中央政治局",
				"中共中央",
				"中共中央书记处",
				"中共中央办公厅"
			]
		},
		{
			"answer": "2",
			"title": "新修订的《准则》和《条例》是对(  )的具体化。",
			"question": [
				"习总书记讲话精神",
				"党章规定",
				"十八大精神",
				"十八届三中全会精神"
			]
		},
		{
			"answer": "1",
			"title": "《中国共产党廉洁自律准则》是中国共产党执政以来第一部坚持(  )的、规范全党廉洁自律工作的重要基础性法规。",
			"question": [
				"正面倡导、面向全体党员",
				"正面倡导、面向党员领导干部",
				"负面清单、面向全体党员",
				"负面清单、面向党员领导干部"
			]
		},
		{
			"answer": "2",
			"title": "新颁布的《廉洁自律准则》坚持正面倡导、(  )，是党员和党员领导干部能够看得见、够得着的高标准。",
			"question": [
				"以人为本",
				"重在立德",
				"重在立法",
				"重在立规"
			]
		},
		{
			"answer": "3",
			"title": "《中国共产党廉洁自律准则》分为两部分：一是党员廉洁自律规范；二是(  )。",
			"question": [
				"领导廉洁从政规范",
				"领导干部廉洁自律规范",
				"党员领导干部廉洁自律规范",
				"领导干部廉洁从政规范"
			]
		},
		{
			"answer": "2",
			"title": "新修订的《廉洁自律准则》面向全体党员、突出(  )。",
			"question": [
				"关键多数",
				"关键少数",
				"关键群体",
				"关键个体"
			]
		},
		{
			"answer": "4",
			"title": "《中国共产党廉洁自律准则》自(  )起施行。",
			"question": [
				"印发之日",
				"2015年12月12日",
				"2015年10月22日",
				"2016年1月1日"
			]
		},
		{
			"answer": "3",
			"title": "《中国共产党廉洁自律准则》坚持(  )相结合，紧扣廉洁自律主题，重申党的理想信念宗旨、优良传统作风。",
			"question": [
				"以规治党与以法治党",
				"以法治党与以德治党",
				"以规治党与以德治党",
				"惩戒与教育"
			]
		},
		{
			"answer": "2",
			"title": "《中国共产党纪律处分条例》把党章对纪律的要求整合成政治纪律、组织纪律和廉洁纪律等&quot;(  )大纪律&quot;。",
			"question": [
				"五",
				"六",
				"七",
				"八"
			]
		},
		{
			"answer": "2",
			"title": "在党内搞非组织活动，破坏党的团结统一的，给予(  )处分。",
			"question": [
				"警告或者严重警告处分",
				"严重警告或者撤销党内职务",
				"撤销党内职务或留党察看",
				"开除党籍"
			]
		},
		{
			"answer": "4",
			"title": "收受可能影响公正执行公务的礼品、礼金、消费卡等，情节较重的，给予(  )处分。",
			"question": [
				"严重警告",
				"留党察看",
				"开除党籍",
				"撤销党内职务或者留党察看"
			]
		},
		{
			"answer": "2",
			"title": "在民主推荐、民主测评、组织考察和党内选举中搞拉票、助选等非组织活动的，给予(  )。",
			"question": [
				"通报批评",
				"警告或者严重警告",
				"撤销党内职务或者留党察看",
				"开除党籍"
			]
		},
		{
			"answer": "3",
			"title": "生活奢靡、贪图享乐、追求低级趣味，造成不良影响的，给予警告或者严重警告处分；情节严重的，给予(  )处分。",
			"question": [
				"开除党籍",
				"留党察看",
				"撤销党内职务",
				"留党察看或开除党籍"
			]
		},
		{
			"answer": "4",
			"title": "在国(境)外公开发表反对党和政府的文章、演说、宣言、声明等的，给予(  )处分。",
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"answer": "1",
			"title": "违反有关规定办理因私出国（境)证件、前往港澳通行证，或者未经批准出入国（边)境，情节较轻的，给予(  )处分。",
			"question": [
				"警告或者严重警告",
				"留党察看",
				"严重警告",
				"警告"
			]
		},
		{
			"answer": "4",
			"title": "传播谣言丑化党和国家形象，情节严重的，给予(  )处分。",
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"answer": "1",
			"title": "在党内以组织秘密集团等方式进行分裂党的活动的，给予(  )处分。",
			"question": [
				"开除党籍",
				"严重警告",
				"撤销党内职务",
				"留党察看"
			]
		},
		{
			"answer": "4",
			"title": "在特殊时期或者紧急状况下，拒不执行党组织决定的，给予(  )。",
			"question": [
				"通报批评",
				"警告或者严重警告",
				"撤销党内职务或者留党察看",
				"留党察看或者开除党籍"
			]
		},
		{
			"answer": "3",
			"title": "篡改、伪造个人档案资料的，给予严重警告处分；情节严重的，给予(  )处分。",
			"question": [
				"开除党籍",
				"留党察看",
				"撤销党内职务或者留党察看",
				"留党察看或开除党籍"
			]
		},
		{
			"answer": "1",
			"title": "挑拨民族关系制造事端或者参加民族分裂活动的，对策划者、组织者和骨干分子，给予(  )处分。",
			"question": [
				"开除党籍",
				"严重警告",
				"撤销党内职务",
				"留党察看"
			]
		},
		{
			"answer": "3",
			"title": "党员受到(  )后，其党内职务自然撤销。",
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"answer": "1",
			"title": "党纪处分决定作出后，对于受到撤销党内职务以上(含撤销党内职务)处分的，还应当在(  )内办理职务、工资等相应变更手续。",
			"question": [
				"一个月",
				"二个月",
				"三个月",
				"六个月"
			]
		},
		{
			"answer": "3",
			"title": "党员受到党内严重警告处分(  )内，不得在党内提升职务和向党外组织推荐担任高于其原任职务的党外职务。",
			"question": [
				"半年",
				"一年",
				"一年半",
				"两年"
			]
		},
		{
			"answer": "3",
			"title": "在新的历史条件下，我们党面临着执政、改革开放、(  )、外部环境&quot;四大考验&quot;。",
			"question": [
				"商品经济",
				"内部环境",
				"市场经济",
				"执政能力"
			]
		},
		{
			"answer": "2",
			"title": "在新的历史条件下，我们党面临着精神懈怠、能力不足、(  )、消极腐败&quot;四大危险&quot;。",
			"question": [
				"贪污腐败",
				"脱离群众",
				"思想堕落",
				"执政经验欠缺"
			]
		},
		{
			"answer": "3",
			"title": "党的十八大报告提出的建设&quot;三型&quot;马克思主义执政党是(  )",
			"question": [
				"学习型、服务型、完善型",
				"学习型、完善型、创新型",
				"学习型、服务型、创新型",
				"学习型、完善型、创新型"
			]
		},
		{
			"answer": "3",
			"title": "不断提高党的领导水平和执政水平、提高(  )能力，是党巩固执政地位、实现执政使命必须解决好的重大课题。",
			"question": [
				"依法执政和民主执政",
				"科学发展",
				"拒腐防变和抵御风险",
				"治国理政"
			]
		},
		{
			"answer": "1",
			"title": "对马克思主义的信仰，对社会主义和共产主义的信念，是共产党人的(  )。",
			"question": [
				"政治灵魂",
				"精神支柱",
				"政治底线",
				"道德底线"
			]
		},
		{
			"answer": "1",
			"title": "为人民服务是党的根本宗旨，以人为本、(  )是检验党一切执政活动的最高标准。",
			"question": [
				"执政为民",
				"依靠人民",
				"加快发展",
				"造福于民"
			]
		},
		{
			"answer": "3",
			"title": "党内(  )是党的生命。",
			"question": [
				"监督",
				"纪律",
				"民主",
				"原则"
			]
		},
		{
			"answer": "2",
			"title": "党的(  )纪律是维护党的集中统一、保持党的战斗力的重要保障。",
			"question": [
				"政治",
				"组织",
				"经济工作",
				"群众工作"
			]
		},
		{
			"answer": "1",
			"title": "党章规定的各项纪律都必须严格遵守和执行，而最首要、最核心的就是要严格遵守和执行党的(  )。",
			"question": [
				"政治纪律",
				"组织纪律",
				"经济工作纪律",
				"群众工作纪律"
			]
		},
		{
			"answer": "2",
			"title": "发展党员，必须经过党的支部，坚持(  )的原则。",
			"question": [
				"集中吸收",
				"个别吸收",
				"广泛吸收",
				"统一吸收"
			]
		},
		{
			"answer": "2",
			"title": "(  )是党的根本组织制度和领导制度，是最重要的组织纪律。",
			"question": [
				"多党合作制",
				"民主集中制",
				"常委会议事制",
				"民主生活会"
			]
		},
		{
			"answer": "3",
			"title": "新时期党的干部工作的重要指导方针是(  )",
			"question": [
				"领导决策",
				"常委会决定",
				"德才兼备、以德为先",
				"组织推荐、个别酝酿"
			]
		},
		{
			"answer": "4",
			"title": "党的(  )纪律是密切党与群众血肉联系的重要保证。",
			"question": [
				"政治",
				"组织",
				"经济工作",
				"群众工作"
			]
		},
		{
			"answer": "3",
			"title": "(  )是马克思主义政党的基本政治观点和根本工作路线。",
			"question": [
				"实事求是",
				"改革创新",
				"群众路线",
				"解放思想"
			]
		},
		{
			"answer": "1",
			"title": "中国共产党以马克思列宁主义、毛泽东思想、邓小平理论和(  )作为自己的行动指南。",
			"question": [
				"&quot;三个代表&quot;重要思想和科学发展观",
				"中国特色社会主义",
				"党的基本路线",
				"依法治国"
			]
		},
		{
			"answer": "3",
			"title": "党的根本宗旨是(  )。",
			"question": [
				"人民的利益高于一切",
				"毫不利己，专门利人",
				"全心全意为人民服务",
				"解放思想、实事求是"
			]
		},
		{
			"answer": "1",
			"title": "党的思想路线是一切从实际出发，理论联系实际，(  )，在实践中检验真理和发展真理。",
			"question": [
				"实事求是",
				"开拓创新",
				"解放思想",
				"求真务实"
			]
		},
		{
			"answer": "1",
			"title": "我们党的最大政治优势是(  )，党执政后的最大危险是脱离群众。",
			"question": [
				"密切联系群众",
				"理论联系实际",
				"解放思想、实事求是",
				"与时俱进"
			]
		},
		{
			"answer": "2",
			"title": "党员如果没有正当理由，连续(  )不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党。",
			"question": [
				"三个月",
				"六个月",
				"九个月",
				"一年"
			]
		},
		{
			"answer": "3",
			"title": "党是根据自己的(  )，按照民主集中制组织起来的统一整体。",
			"question": [
				"理想和信念",
				"目标和任务",
				"纲领和章程",
				"行动纲领"
			]
		},
		{
			"answer": "3",
			"title": "党组织对党员作出处分决定，应当实事求是地查清事实。处分决定所依据的事实材料和处分决定必须(  )，听取本人说明情况和申辩。",
			"question": [
				"同本人所在的基层组织见面",
				"同本人所在的基层组织中的党员见面",
				"同本人见面",
				"同本人所在的基层组织领导见面"
			]
		},
		{
			"answer": "2",
			"title": "我国正处于并将长期处于(  )。这是在经济文化落后的中国建设社会主义现代化不可逾越的历史阶段，需要上百年的时间。",
			"question": [
				"社会主义阶段",
				"社会主义初级阶段",
				"共产主义阶段",
				"社会主义高级阶段"
			]
		},
		{
			"answer": "1",
			"title": "《党章》规定，党选拔干部努力实现干部队伍的革命化、(  )、知识化、专业化。",
			"question": [
				"年轻化",
				"青年化",
				"科学化",
				"制度化"
			]
		},
		{
			"answer": "3",
			"title": "按照《党章》规定,党组织对违反党的纪律的党员，应当本着(  )的精神，按照错误性质和情节轻重，给以批评教育直至纪律处分。",
			"question": [
				"从严治党",
				"批评与自我批评",
				"惩前毖后，治病救人",
				"严肃纪律"
			]
		},
		{
			"answer": "2",
			"title": "中国共产党执政后的最大危险是(  )。",
			"question": [
				"决策失误",
				"脱离群众",
				"思想僵化",
				"贪污腐败"
			]
		},
		{
			"answer": "2",
			"title": "《党章》规定，党员除了享有表决权、选举权和被选举权以外，还有权要求(  )或撤换不称职的干部。",
			"question": [
				"开除",
				"罢免",
				"辞退",
				"处分"
			]
		},
		{
			"answer": "1",
			"title": "党章规定，党的基层委员会每届任期(  )。",
			"question": [
				"三年或五年",
				"三年或四年",
				"二年或四年",
				"二年或三年"
			]
		},
		{
			"answer": "1",
			"title": "党的最高理想和最终目标是(  )。",
			"question": [
				"实现共产主义",
				"建设中国特色社会主义",
				"建设富强、民主、文明的社会主义现代化强国",
				"实现世界强国"
			]
		},
		{
			"answer": "3",
			"title": "民主集中制是民主基础上的集中和集中指导下的民主相结合。它既是党的(  )，也是群众路线在党的生活中的运用。",
			"question": [
				"根本领导原则",
				"根本管理原则",
				"根本组织原则",
				"根本工作原则"
			]
		},
		{
			"answer": "3",
			"title": "必须尊重劳动、尊重知识、尊重人才、(  )，做到发展为了人民、发展依靠人民、发展成果由人民共享。",
			"question": [
				"尊重科技",
				"尊重群众",
				"尊重创造",
				"尊重规律"
			]
		},
		{
			"answer": "1",
			"title": "国有企业和集体企业中党的基层组织，发挥(  )作用围绕企业生产经营开展工作。",
			"question": [
				"政治核心",
				"领导核心",
				"骨干核心",
				"组织核心"
			]
		},
		{
			"answer": 2,
			"title": "胡锦涛在中国共产党第十八次全国代表大会上作题为&quot;坚定不移沿着中国特色社会主义道路前进,为(  )而奋斗&quot;的报告。",
			"question": [
				"全面建设小康社会",
				"全面建成小康社会",
				"全面实现小康社会"
			]
		},
		{
			"answer": 3,
			"title": "十八大报告指出:建设中国特色社会主义总任务是(  )。&quot;",
			"question": [
				"改革开放　",
				"科学发展　",
				"社会主义现代化和中华民族伟大复兴"
			]
		},
		{
			"answer": 2,
			"title": "中国特色社会主义道路的必由之路是(  )",
			"question": [
				"解放和发展生产力",
				"改革开放",
				"相信人民、 依靠人民"
			]
		},
		{
			"answer": 3,
			"title": "十八大提出今后经济体制改革的核心是(  )",
			"question": [
				"坚持公有制为主体",
				"发展多种经济",
				"处理好政府和市场的关系"
			]
		},
		{
			"answer": 3,
			"title": "深化经济体制改革要紧紧围绕使市场在资源配置中起(  )",
			"question": [
				"基础性作用",
				"关键性作用",
				"决定性作用"
			]
		},
		{
			"answer": 1,
			"title": "全面深化改革的出发点和落脚点是(  )",
			"question": [
				"促进社会公平正义， 增进人民福祉",
				"解放和发展生产力",
				"改善和提高人民生活水平"
			]
		},
		{
			"answer": 3,
			"title": "实践证明，(  ) 是决定当代中国命运的关键抉择， 是党和人民事业大踏步赶上时代的重要法宝",
			"question": [
				"解放思想",
				"实事求是",
				"改革开放"
			]
		},
		{
			"answer": 2,
			"title": "党的十八届三中全会的主题是(  )",
			"question": [
				"全面深化改革",
				"全面从严治党",
				"全面依法治国",
				"全面建成小康"
			]
		},
		{
			"answer": 4,
			"title": "十八届四中全会强调， 中国特色社会主义法治最根本的保证是(  )",
			"question": [
				"人民当家作主",
				"依法治国",
				"法治与德治相结合",
				"党的领导"
			]
		},
		{
			"answer": 3,
			"title": "现在我国改革开放已经进入(  )， 我们必须以更大的政治勇气和智慧， 不失时机深化重要领域改革。",
			"question": [
				"攻坚期和浅水区",
				"布局期和深水区",
				"攻坚期和深水区",
				"布局期和浅水区"
			]
		},
		{
			"answer": 1,
			"title": "党中央作出了实施创新驱动发展战略的重大部署， 强调(  ) 是提高社会生产力和综合国力的战略支撑， 必须摆在国家发展全局的核心位置。",
			"question": [
				"科技创新",
				"经济建设",
				"党的领导",
				"改革开放"
			]
		},
		{
			"answer": 2,
			"title": "我们党历来重视抓全党特别是领导干部的学习， 这是推动党和人民事业发展的一条(  )。",
			"question": [
				"必然规律",
				"成功经验",
				"客观规律",
				"客观要求"
			]
		},
		{
			"answer": 1,
			"title": " (  ) 是我们党的生命线和根本工作路线。",
			"question": [
				"群众路线",
				"阶级路线",
				"工人路线",
				"农民路线"
			]
		},
		{
			"answer": 1,
			"title": " (  ) 党内生活， 是解决党内自身问题的重要途径。",
			"question": [
				"严肃的",
				"严厉的",
				"活泼的",
				"欢快的"
			]
		},
		{
			"answer": 3,
			"title": " (  ) 是保护生态环境的根本之策。",
			"question": [
				"尊重自然",
				"省吃俭用",
				"节约资源",
				"勤俭持家"
			]
		},
		{
			"answer": 3,
			"title": "要以(  ) 开展批评和自我批评， 开好民主生活会， 坚持开门搞活动。",
			"question": [
				"实干精神",
				"南泥湾精神",
				"整风精神",
				"亮剑精神"
			]
		},
		{
			"answer": 2,
			"title": "一个政党， 一个政权， 其前途和命运最终取决于(  )。",
			"question": [
				"革命实力",
				"人心向背",
				"经济基础",
				"领导才能"
			]
		},
		{
			"answer": 1,
			"title": "(  )是我们立党治党管党的总章程，是党的根本大法，是全党最基本、最重要、最全面的行为规范。",
			"question": [
				"党章",
				"法律",
				"党的组织制度",
				"宪法"
			]
		},
		{
			"answer": 4,
			"title": "以习近平为总书记的党中央提出，要全面深化(  )，推进经济结构战略性调整，全面提高开放型经济水平，推动经济持续健康发展。",
			"question": [
				"政治体制改革",
				"文化体制改革",
				"社会体制改革",
				"经济体制改革"
			]
		},
		{
			"answer": 4,
			"title": "开展党的群众路线教育实践活动，就是要使全党同志牢记并恪守(  )的根本宗旨。",
			"question": [
				"一心一意谋发展",
				"聚精会神搞建设",
				"爱国爱党",
				"全心全意为人民服务"
			]
		},
		{
			"answer": 1,
			"title": "(  )是领导和团结全国各族人民建设中国特色社会主义伟大事业的核心力量，肩负着历史重任，经受着时代考验。",
			"question": [
				"中国共产党",
				"国务院",
				"全国人大",
				"全国政协"
			]
		},
		{
			"answer": 1,
			"title": "&quot;照镜子、正衣冠、洗洗澡、治治病&quot;中的&quot;照镜子&quot;主要是以(  )为镜。",
			"question": [
				"党章",
				"党史",
				"党风",
				"党纪"
			]
		},
		{
			"answer": 2,
			"title": "严明党的纪律，首要的就是严明(  )。",
			"question": [
				"党的宗旨",
				"政治纪律",
				"经济纪律",
				"法律相关规定"
			]
		},
		{
			"answer": 2,
			"title": "(  )是解决党内矛盾的有力武器。",
			"question": [
				"和洽安宁",
				"批评和自我批评",
				"和睦互勉",
				"和睦友爱"
			]
		},
		{
			"answer": 4,
			"title": "(  )是我国的领导阶级，是我国先进生产力和生产关系的代表。",
			"question": [
				"资产阶级",
				"各族人民群众",
				"农民阶级",
				"工人阶级"
			]
		},
		{
			"answer": 4,
			"title": "反腐倡廉必须常抓不懈，拒腐防变必须警钟长鸣，关键就在(  )二字，一个是要经常抓，一个是要长期抓。",
			"question": [
				"&quot;经&quot;、&quot;抓&quot;",
				"&quot;常&quot;、&quot;抓&quot;",
				"&quot;经&quot;、&quot;长&quot;",
				"&quot;常&quot;、&quot;长&quot;"
			]
		},
		{
			"answer": 1,
			"title": "建设中国特色社会主义，总依据是社会主义初级阶段，总布局是五位一体，总任务是(  )。",
			"question": [
				"实现社会主义现代化和中华民族伟大复兴",
				"经济发展",
				"实现共产主义",
				"改革开放"
			]
		},
		{
			"answer": 3,
			"title": "实现(  )就是中华民族近代最伟大的中国梦。",
			"question": [
				"祖国统一",
				"全面建成小康社会",
				"中华民族伟大复兴",
				"共产主义"
			]
		},
		{
			"title": "党的十八大报告中提出的要全面加强党的&quot;五大建设&quot;是（  ）",
			"answer": 3,
			"question": [
				"思想建设、组织建设、作风建设、文化建设和制度建设",
				"思想建设、组织建设、文化建设、反腐倡廉建设和制度建设",
				"思想建设、组织建设、作风建设、反腐倡廉建设和制度建设",
				"思想建设、作风建设、文化建设、反腐倡廉建设和制度建设"
			]
		},
		{
			"title": "党的十八大报告提出的建设&quot;三型&quot;马克思主义执政党是（  ）",
			"answer": 3,
			"question": [
				"学习型、服务型、完善型",
				"学习型、完善型、创新型",
				"学习型、服务型、创新型",
				"学习型、完善型、创新型"
			]
		},
		{
			"title": "不断提高党的领导水平和执政水平、提高（  ）能力，是党巩固执政地位、实现执政使命必须解决好的重大课题",
			"answer": 3,
			"question": [
				"依法执政和民主执政",
				"科学发展",
				"拒腐防变和抵御风险",
				"治国理政"
			]
		},
		{
			"title": "党的十八大强调，要全面加强党的思想建设、组织建设、作风建设、反腐倡廉建设、制度建设，增强（  ）、自我完善、自我革新、自我提高能力",
			"answer": 2,
			"question": [
				"自我监督",
				"自我净化",
				"自我管理",
				"自我要求"
			]
		},
		{
			"title": "对马克思主义的信仰，对社会主义和共产主义的信念，是共产党人的（  ）",
			"answer": 1,
			"question": [
				"政治灵魂",
				"精神支柱",
				"政治底线",
				"道德底线"
			]
		},
		{
			"title": "为人民服务是党的根本宗旨，以人为本、（  ）是检验党一切执政活动的最高标准",
			"answer": 1,
			"question": [
				"执政为民",
				"依靠人民",
				"加快发展",
				"造福于民"
			]
		},
		{
			"title": "党内（  ）是党的生命",
			"answer": 3,
			"question": [
				"监督",
				"纪律",
				"民主",
				"原则"
			]
		},
		{
			"title": "十八大报告提出，要实行（  ）提案制",
			"answer": 1,
			"question": [
				"党代会代表",
				"党内选举",
				"全委会决策",
				"党代会"
			]
		},
		{
			"title": "要严格党内（  ），健全党员党性定期分析、民主评议等制度",
			"answer": 2,
			"question": [
				"民主生活",
				"组织生活",
				"政治生活",
				"学习生活"
			]
		},
		{
			"title": "全面推进惩治和预防腐败体系建设，做到干部清正、政府清廉、（  ），反映了党推进反腐倡廉建设的坚定决心，对于提高党的建设科学化水平，凝聚党心民心，具有重要的指导意义",
			"answer": 4,
			"question": [
				"正大光明",
				"明镜高悬",
				"队伍廉洁",
				"政治清明"
			]
		},
		{
			"title": "党的（  ）纪律是维护党的集中统一、保持党的战斗力的重要保障",
			"answer": 2,
			"question": [
				"政治",
				"组织",
				"经济工作",
				"群众工作"
			]
		},
		{
			"title": "党员受到警告处分后的（  ）内，不得在党内提升职务和向党外组织推荐担任高于原任职务的党外职务",
			"answer": 2,
			"question": [
				"半年",
				"一年",
				"两年",
				"三年"
			]
		},
		{
			"title": "党员在受到撤销党内职务处分后的（  ）内，不得让其在党内担任和向党外推荐担任与其原职务相当或高于原职务的工作",
			"answer": 3,
			"question": [
				"半年",
				"一年",
				"两年",
				"三年"
			]
		},
		{
			"title": "党章规定的各项纪律都必须严格遵守和执行，而最首要、最核心的就是要严格遵守和执行党的（  ）",
			"answer": 1,
			"question": [
				"政治纪律",
				"组织纪律",
				"经济工作纪律",
				"群众工作纪律"
			]
		},
		{
			"title": "党的（  ）纪律是维护党的集中统一、保持党的战斗力的重要保障",
			"answer": 2,
			"question": [
				"政治",
				"组织",
				"经济工作",
				"群众工作"
			]
		},
		{
			"title": "（  ）是党的根本组织制度和领导制度，是最重要的组织纪律",
			"answer": 2,
			"question": [
				"多党合作制",
				"民主集中制",
				"常委会议事制",
				"民主生活会"
			]
		},
		{
			"title": "新时期党的干部工作的重要指导方针是（  ）",
			"answer": 3,
			"question": [
				"领导决策",
				"常委会决定",
				"德才兼备、以德为先",
				"组织推荐、个别酝酿"
			]
		},
		{
			"title": "对因用人方面问题受到责令辞职、免职、降职等组织处理的，（  ）内不得提拔",
			"answer": 3,
			"question": [
				"半年",
				"一年",
				"两年",
				"三年"
			]
		},
		{
			"title": "贪污贿赂行为，是指党政领导干部在经济活动中实施的（  ）职务违纪行为",
			"answer": 2,
			"question": [
				"侵占性",
				"贪利性",
				"挪用性",
				"收受性"
			]
		},
		{
			"title": "党的（  ）纪律是密切党与群众血肉联系的重要保证",
			"answer": 4,
			"question": [
				"政治",
				"组织",
				"经济工作",
				"群众工作"
			]
		},
		{
			"title": "（  ）是马克思主义政党的基本政治观点和根本工作路线",
			"answer": 3,
			"question": [
				"实事求是",
				"改革创新",
				"群众路线",
				"解放思想"
			]
		},
		{
			"title": "中国共产党是中国工人阶级的先锋队，同时是（  ），是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益",
			"answer": 2,
			"question": [
				"中国各族人民的先锋队",
				"中国人民和中华民族的先锋队",
				"中国社会各阶层的先锋队",
				"中国全社会的先锋队"
			]
		},
		{
			"title": "党的最高理想和最终目标是（  ）",
			"answer": 1,
			"question": [
				"实现共产主义",
				"建设中国特色社会主义",
				"建设富强、民主、文明的社会主义现代化强国",
				"实现世界强国"
			]
		},
		{
			"title": "中国共产党以马克思列宁主义、毛泽东思想、邓小平理论和（  ）作为自己的行动指南",
			"answer": 1,
			"question": [
				"&quot;三个代表&quot;重要思想和科学发展观",
				"中国特色社会主义",
				"党的基本路线",
				"依法治国"
			]
		},
		{
			"title": "党的根本宗旨是（  ）",
			"answer": 3,
			"question": [
				"人民的利益高于一切",
				"毫不利己，专门利人",
				"全心全意为人民服务",
				"解放思想、实事求是"
			]
		},
		{
			"title": "马克思列宁主义揭示了（  ），它的基本原理是正确的，具有强大的生命力",
			"answer": 3,
			"question": [
				"人类改造客观世界的规律",
				"社会主义和共产主义运动的规律",
				"人类社会历史发展的规律",
				"资本主义社会发展规律"
			]
		},
		{
			"title": "毛泽东思想是马克思列宁主义在中国的运用和发展，是被实践证明了的关于（  ）的正确的理论原则和经验总结，是中国共产党集体智慧的结晶",
			"answer": 1,
			"question": [
				"中国革命和建设",
				"中国民主主义革命",
				"中国特色社会主义革命和建设",
				"中国旧民主主义革命"
			]
		},
		{
			"title": "邓小平理论是马克思列宁主义的基本原理同当代中国实践和时代特征相结合的产物，是毛泽东思想在新的历史条件下的继承和发展，是马克思主义在中国发展的新阶段，是（  ），是中国共产党集体智慧的结晶，引导着我国社会主义现代化事业不断前进",
			"answer": 3,
			"question": [
				"当代国际共产主义运动的行动指南",
				"当代的社会主义",
				"当代中国的马克思主义",
				"当代的科学发展观"
			]
		},
		{
			"title": "十三届四中全会以来，以江泽民同志为主要代表的中国共产党人，在建设中国特色社会主义的实践中，加深了对什么是社会主义、怎样建设社会主义和建设什么样的党、怎样建设党的认识，积累了治党治国新的宝贵经验，形成了（  ）",
			"answer": 3,
			"question": [
				"科学发展观",
				"邓小平理论",
				"&quot;三个代表&quot;重要思想",
				"以人为本"
			]
		},
		{
			"title": "&quot;三个代表&quot;重要思想是对马克思列宁主义、毛泽东思想、邓小平理论的继承和发展，反映了当代世界和中国的发展变化对党和国家工作的新要求，是加强和改进党的建设，推进（  ）的强大理论武器，是中国共产党集体智慧的结晶，是党必须长期坚持的指导思想",
			"answer": 1,
			"question": [
				"我国社会主义自我完善和发展",
				"社会主义现代化建设",
				"改革开放",
				"依法治国"
			]
		},
		{
			"title": "始终做到&quot;三个代表’，是我们党的立党之本、执政之基、（  ）",
			"answer": 2,
			"question": [
				"凝聚之源",
				"力量之源",
				"发展之源",
				"强国之源"
			]
		},
		{
			"title": "我国正处于并将长期处于（  ）,这是在经济文化落后的中国建设社会主义现代化不可逾越的历史阶段，需要上百年的时间",
			"answer": 2,
			"question": [
				"社会主义阶段",
				"社会主义初级阶段",
				"共产主义阶段",
				"社会主义高级阶段"
			]
		},
		{
			"title": "中国共产党在社会主义初级阶段的（  ）是：领导和团结全国各族人民，以经济建设为中心，坚持四项基本原则，坚持改革开放，自力更生，艰苦创业，为把我国建设成为富强、民主、文明的社会主义现代化国家而奋斗",
			"answer": 1,
			"question": [
				"基本路线",
				"基本纲领",
				"基本经验",
				"基本原则"
			]
		},
		{
			"title": "中国共产党在领导社会主义事业中，必须坚持以经济建设为中心，其他各项工作都服从和服务于这个中心,要抓紧时机，加快发展，实施科教兴国战略、人才强国战略和（  ），充分发挥科学技术作为第一生产力的作用，依靠科技进步，提高劳动者素质，做到效益好、质量高、速度快，努力把经济建设搞上去",
			"answer": 2,
			"question": [
				"走出去战略",
				"可持续发展战略",
				"科技强军战略",
				"海洋强国战略"
			]
		},
		{
			"title": "党的领导主要是（  ）的领导",
			"answer": 2,
			"question": [
				"政治、经济和文化",
				"政治、思想和组织",
				"政治、国防和外交",
				"政治、思想和国防"
			]
		},
		{
			"title": "党的思想路线是一切从实际出发，理论联系实际，（  ），在实践中检验真理和发展真理",
			"answer": 1,
			"question": [
				"实事求是",
				"开拓创新",
				"解放思想",
				"求真务实"
			]
		},
		{
			"title": "民主集中制是民主基础上的集中和集中指导下的民主相结合,它既是党的（  ），也是群众路线在党的生活中的运用",
			"answer": 3,
			"question": [
				"根本领导原则",
				"根本管理原则",
				"根本组织原则",
				"根本工作原则"
			]
		},
		{
			"title": "我们党的最大政治优势是（  ），党执政后的最大危险是脱离群众",
			"answer": 1,
			"question": [
				"密切联系群众",
				"理论联系实际",
				"解放思想、实事求是",
				"与时俱进"
			]
		},
		{
			"title": "在现阶段，我国社会的（  ）是人民日益增长的物质文化需要同落后的社会生产之间的矛盾",
			"answer": 3,
			"question": [
				"主要问题",
				"基本矛盾",
				"主要矛盾",
				"根本矛盾"
			]
		},
		{
			"title": "必须尊重劳动、尊重知识、尊重人才、（  ），做到发展为了人民、发展依靠人民、发展成果由人民共享",
			"answer": 3,
			"question": [
				"尊重科技",
				"尊重群众",
				"尊重创造",
				"尊重规矩"
			]
		},
		{
			"title": "跨入新世纪，我国进入（  ）的新的发展阶段,必须按照中国特色社会主义事业总体布局，全面推进经济建设、政治建设、文化建设、社会建设、生态文明建设",
			"answer": 3,
			"question": [
				"改革开放、建设小康社会",
				"建设社会主义、全面实现社会主义现代化",
				"全面建设小康社会、加快推进社会主义现代化",
				"全面推进社会主义强国"
			]
		},
		{
			"title": "党员必须自觉遵守党的纪律，模范遵守（  ），严格保守党和国家的秘密，执行党的决定，服从组织分配，积极完成党的任务",
			"answer": 2,
			"question": [
				"国家的法律",
				"国家的法律法规",
				"法律法规",
				"宪法"
			]
		},
		{
			"title": "预备党员的（  ）同正式党员一样",
			"answer": 3,
			"question": [
				"权利",
				"权利和义务",
				"义务",
				"待遇"
			]
		},
		{
			"title": "党员如果没有正当理由，连续（  ）不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党",
			"answer": 2,
			"question": [
				"三个月",
				"六个月",
				"九个月",
				"一年"
			]
		},
		{
			"title": "党是根据自己的（  ），按照民主集中制组织起来的统一整体",
			"answer": 3,
			"question": [
				"理想和信念",
				"目标和任务",
				"纲领和章程",
				"行动纲领"
			]
		},
		{
			"title": "党的最高领导机关，是（  ）和它所产生的中央委员会",
			"answer": 1,
			"question": [
				"党的全国代表大会",
				"党的全国代表会议",
				"党的全国代表大会和全国代表会议",
				"全国人民代表大会"
			]
		},
		{
			"title": "党的各级委员会实行集体领导和个人分工负责相结合的制度,凡属重大问题都要按照集体领导、民主集中、（  ）、会议决定的原则，由党的委员会集体讨论，作出决定",
			"answer": 1,
			"question": [
				"个别酝酿",
				"个别商谈",
				"私下酝酿",
				"特别酝酿"
			]
		},
		{
			"title": "党的各级代表大会的代表和委员会的产生，要体现（  ）的意志,选举采用无记名投票的方式,候选人名单要由党组织和选举人充分酝酿讨论",
			"answer": 2,
			"question": [
				"党员代表",
				"选举人",
				"党组织",
				"全体人民"
			]
		},
		{
			"title": "凡是成立党的新组织，或是撤销党的原有组织，必须由（  ）决定",
			"answer": 1,
			"question": [
				"上级党组织",
				"上级党委和政府",
				"党中央",
				"上级党组织和纪委"
			]
		},
		{
			"title": "企业、农村、机关、学校、科研院所、街道社区、社会团体、社会中介组织、人民解放军连队和其他基层单位，凡是有正式党员（  ），都应当成立党的基层组织",
			"answer": 1,
			"question": [
				"三人以上的",
				"五人以上的",
				"十人以上的",
				"二十人以上的"
			]
		},
		{
			"title": "党的基层组织是党在社会基层组织中的（  ），是党的全部工作和战斗力的基础",
			"answer": 2,
			"question": [
				"领导核心",
				"战斗堡垒",
				"坚强核心",
				"中坚力量"
			]
		},
		{
			"title": "街道、乡、镇党的基层委员会和村、社区党组织，领导本地区的工作，（  ）行政组织、经济组织和群众自治组织充分行使职权",
			"answer": 3,
			"question": [
				"支持和监督",
				"保证和监督",
				"支持和保证",
				"支持和领导"
			]
		},
		{
			"title": "国有企业和集体企业中党的基层组织，发挥（  ）作用围绕企业生产经营开展工作",
			"answer": 1,
			"question": [
				"政治核心",
				"领导核心",
				"骨干核心",
				"组织核心"
			]
		},
		{
			"title": "非公有制经济组织中党的基层组织，贯彻党的方针政策，（  ）企业遵守四家的法律法规，领导工会、共青团等群众组织，团结凝聚职工群众，维护各方的合法权益，促进企业健康发展",
			"answer": 1,
			"question": [
				"引导和监督",
				"领导和监督",
				"服务和引导",
				"指导和督促"
			]
		},
		{
			"title": "党的干部是党的事业的骨干，是人民的公仆,党按照德才兼备的原则选拔干部，坚持任人唯贤，反对任人唯亲，努力实现干部队伍的（  ）、年轻化、知识化、专业化",
			"answer": 2,
			"question": [
				"现代化",
				"革命化",
				"政治化",
				"技术化"
			]
		},
		{
			"title": "党重视教育、培训、选拔和考核干部，特别是培养、选拔优秀（  ）,积极推进干部制度改革",
			"answer": 2,
			"question": [
				"少数民族干部",
				"年轻干部",
				"妇女干部",
				"有特长干部"
			]
		},
		{
			"title": "党章规定的共产党员必须履行的第一项义务是：认真学习马克思列宁主义、毛泽东思想、邓小平理论和（  ），学习党的路线、方针、政策和决议，学习党的基本知识，学习科学、文化、法律和业务知识，努力提高为人民服务的本领",
			"answer": 2,
			"question": [
				"中国特色社会主义",
				"&quot;三个代表&quot;重要思想和科学发展观",
				"市场经济理论",
				"社会主义核心价值体系"
			]
		},
		{
			"title": "预备党员认真履行党员义务，具备党员条件的，应当按期转为正式党员；需要继续考察和教育的，可以延长预备期，但不能超过（  ）",
			"answer": 2,
			"question": [
				"半年",
				"一年",
				"一年半",
				"两年"
			]
		},
		{
			"title": "党员个人服从（  ），少数服从多数，下级组织服从上级组织，全党各个组织和全体党员服从党的全国代表大会和中央委员会，这是党的民主集中制的基本原则之一",
			"answer": 1,
			"question": [
				"党的组织",
				"党委主要领导",
				"行政主要领导",
				"党政领导"
			]
		},
		{
			"title": "党的全国代表大会每五年举行一次，由中央委员会召集,中央委员会认为有必要，或者有（  ）以上的省一级组织提出要求，全国代表大会可以提前举行；如无非常情况，不得延期举行",
			"answer": 2,
			"question": [
				"二分之一",
				"三分之一",
				"四分之一",
				"五分之一"
			]
		},
		{
			"title": "党的基层委员会每届任期三年至五年，总支部委员会、支部委员会每届任期（  ）",
			"answer": 3,
			"question": [
				"三年或五年",
				"一年或两年",
				"两年或三年",
				"三年或四年"
			]
		},
		{
			"title": "党的干部必须正确行使人民赋予的权力，依法办事，清正廉洁，勤政为民，以身作则，艰苦朴素，密切联系群众，坚持党的群众路线，自觉地接受党和群众的批评和监督，做到自重、（  ）、自警、自励，反对官僚主义，反对任何滥用职权、谋求私利的不正之风",
			"answer": 3,
			"question": [
				"自醒",
				"自爱",
				"自省",
				"自强"
			]
		},
		{
			"title": "党的纪律是党的各级组织和全体党员必须遵守的（  ），是维护党的团结统一、完成党的任务的保证",
			"answer": 2,
			"question": [
				"行为规范",
				"行为规则",
				"党纪党规",
				"基本准则"
			]
		},
		{
			"title": "对党的中央委员会和地方各级委员会的委员、候补委员，给以撤销党内职务、留党察看成开除党籍的处分，必须由本人所在的委员会全体会议（  ）决定",
			"answer": 2,
			"question": [
				"二分之一以上的多数",
				"三分之二以上的多数",
				"绝大多数",
				"四分之一以上的多数"
			]
		},
		{
			"title": "党组织对党员作出处分决定，应当实事求是地查清事实,处分决定所依据的事实材料和处分决定必须（  ），听取本人说明情况和申辩",
			"answer": 3,
			"question": [
				"同本人所在的基层组织见面",
				"同本人所在的基层组织中的党员见面",
				"同本人见面",
				"同本人所在的基层组织领导见面"
			]
		},
		{
			"title": "党的各级纪律检查委员会的主要任务是：维护党的章程和其他党内法规，检查党的路线、方针、政策和决议的执行情况，协助党的委员会加强党风建设和（  ）反腐败工作",
			"answer": 3,
			"question": [
				"组织领导",
				"主管",
				"组织协调",
				"具体实施"
			]
		},
		{
			"title": "党的中央纪律检查委员会根据工作需要，可以向中央一级党和国家机关派驻党的纪律检查组或纪律检查员,纪律检查组组长或纪律检查员可以（  ）该机关党的领导组织的有关会议",
			"answer": 2,
			"question": [
				"出席",
				"列席",
				"不能参加",
				"旁听"
			]
		},
		{
			"title": "十八大报告指出:建设中国特色社会主义总布局是(  )",
			"answer": 3,
			"question": [
				"一个中心，两个基本点",
				"两个文明，两手抓",
				"经济、政治、文化、社会、生态文明建设 五位一体"
			]
		},
		{
			"title": "十八大报告指出:建设中国特色社会主义总任务是（  ）",
			"answer": 3,
			"question": [
				"&quot;改革开放",
				"科学发展",
				"社会主义现代化和中华民族伟大复兴"
			]
		},
		{
			"title": "党的十八大报告指出：  _是一项长期的艰巨的历史任务，必须准备进行具有许多新的历史特点的伟大斗争",
			"answer": 1,
			"question": [
				"发展中国特色社会主义",
				"改革开放",
				"解放思想"
			]
		},
		{
			"title": "中国特色社会主义理论体系，就是包括__  _在内的科学理论体系",
			"answer": 3,
			"question": [
				"邓小平理论和&quot;三个代表&quot;重要思想",
				"毛泽东思想.邓小平理论和&quot;三个代表&quot;重要思想",
				"邓小平理论.&quot;三个代表&quot;重要思想以及科学发展观等重大战略思想"
			]
		},
		{
			"title": "中国特色社会主义理论体系，就是包括__  _在内的科学理论体系",
			"answer": 3,
			"question": [
				"尊重自然、顺应自然、改造自然",
				"尊重自然、顺应自然、保护自然",
				"尊重自然、顺应自然、爱护自然"
			]
		},
		{
			"title": "十八大提出坚持&quot;四化同步&quot;发展是指（  ）同步发展",
			"answer": 3,
			"question": [
				"工业农业、国防交通",
				"工业农业、国防、科学技术",
				"工业化、信息化、城镇化、农业现代化"
			]
		},
		{
			"title": "___  __是提高社会生产力和综合国力的战略支撑，必须摆在国家发展全局的核心位置",
			"answer": 1,
			"question": [
				"科技创新",
				"文化创新",
				"理论创新"
			]
		},
		{
			"title": "十八大报告提出：（  ）是兴国之要，发展仍是解决我国所有问题的关键",
			"answer": 1,
			"question": [
				"以经济建设为中心",
				"四项基本原则",
				"改革开放"
			]
		},
		{
			"title": "十八大报告提出:转变经济发展方式取得重大进展，在发展平衡性.协调性.可持续性明显增强的基础上，实现（  ）比二0一0年翻一番",
			"answer": 1,
			"question": [
				"国内生产总值和城乡居民人均收入",
				"国民生产总值",
				"人均国内生产总值"
			]
		},
		{
			"title": "建设社会主义文化强国，关键是（  ）",
			"answer": 2,
			"question": [
				"振兴教育",
				"增强全民族文化创造活力",
				"民主建设"
			]
		},
		{
			"title": "十八大报告提出政治体制改革的根本是  ",
			"answer": 3,
			"question": [
				"坚持党的领导",
				"加强依法治国",
				"保证人民当家做主"
			]
		},
		{
			"title": "十八大报告提出政治体制改革的根本是  ",
			"answer": 3,
			"question": [
				"扩大就业",
				"保障和改善民生",
				"维护和实现人民利益"
			]
		},
		{
			"title": "十八大报告提出:两岸双方应恪守反对&quot;台独&quot;、坚持&quot;九二共识&quot;的共同立场，增进维护（  ）框架的共同认知，在此基础上求同存异",
			"answer": 2,
			"question": [
				"&quot;一国两制&quot;",
				"祖国统一",
				"一个中国"
			]
		},
		{
			"title": "中国特色社会主义道路的必由之路是（  ）",
			"answer": 2,
			"question": [
				"解放和发展生产力",
				"改革开放",
				"相信人民、依靠人民"
			]
		},
		{
			"title": "十八大提出今后经济体制改革的核心是（  ）",
			"answer": 3,
			"question": [
				"坚持公有制为主体",
				"发展多种经济",
				"处理好政府和市场的关系"
			]
		},
		{
			"title": "十八届三中全会通过的《中共中央关于全面深化改革若干重大问题的决定》指出，全面深化改革的总目标是（ ）",
			"answer": 4,
			"question": [
				"实现中华民族伟大复兴的中国梦",
				"实现社会主义现代化",
				"完善和发展中国特色社会主义制度",
				"推进国家治理体系和治理能力现代化"
			]
		},
		{
			"title": "十八届三中全会通过的《中共中央关于全面深化改革若干重大问题的决定》指出，全面深化改革的重点是（  ）",
			"answer": 2,
			"question": [
				"政治体制改革",
				"经济体制改革",
				"文化体制改革"
			]
		},
		{
			"title": "深化经济体制改革要紧紧围绕使市场在资源配置中起（  ）",
			"answer": 3,
			"question": [
				"基础性作用",
				"关键性作用",
				"决定性作用"
			]
		},
		{
			"title": "全面深化改革的出发点和落脚点是（  ）",
			"answer": 1,
			"question": [
				"促进社会公平正义，增进人民福祉",
				"解放和发展生产力",
				"改善和提高人民生活水平"
			]
		},
		{
			"title": "实践证明，（  ）是决定当代中国命运的关键抉择，是党和人民事业大踏步赶上时代的重要法宝",
			"answer": 3,
			"question": [
				"解放思想",
				"实事求是",
				"改革开放"
			]
		},
		{
			"title": "实践证明，（  ）是决定当代中国命运的关键抉择，是党和人民事业大踏步赶上时代的重要法宝",
			"answer": 3,
			"question": [
				"全面深化改革",
				"全面从严治党",
				"全面依法治国",
				"全面建成小康"
			]
		},
		{
			"title": "十八届四中全会通过的《中共中央关于全面依法治国若干重大问题的决定》提出，全面推进依法治国，总目标是（  ）",
			"answer": 4,
			"question": [
				"建设中国特色社会主义法治体系，建设社会主义法治国家",
				"建设中国特色社会主义法治体系，建设社会主义法制国家",
				"建设中国特色社会主义法制体系，建设社会主义法制国家",
				"建设中国特色社会主义法律体系，建设社会主义法治国家"
			]
		},
		{
			"title": "十八届四中全会指出，社会主义市场经济本质上是（  ）",
			"answer": 3,
			"question": [
				"计划经济",
				"竞争经济",
				"法治经济",
				"泡沫经济"
			]
		},
		{
			"title": "十八届四中全会提出，将每年（  ）定为国家宪法日",
			"answer": 2,
			"question": [
				"12月20日",
				"12月4日",
				"9月20日",
				"9月30日"
			]
		},
		{
			"title": "十八届四中全会强调，中国特色社会主义法治最根本的保证是（  ）",
			"answer": 4,
			"question": [
				"人民当家作主",
				"依法治国",
				"法治与德治相结合",
				"党的领导"
			]
		},
		{
			"title": "十八届四中全会强调，坚持依法治国首先要坚持（  ）",
			"answer": 4,
			"question": [
				"司法公正",
				"司法独立",
				"依法行政",
				"依宪治国"
			]
		},
		{
			"title": "现在我国改革开放已经进入（  ），我们必须以更大的政治勇气和智慧，不失时机深化重要领域改革",
			"answer": 3,
			"question": [
				"攻坚期和浅水区",
				"布局期和深水区",
				"攻坚期和深水区",
				"布局期和浅水区"
			]
		},
		{
			"title": "党中央作出了实施创新驱动发展战略的重大部署，强调（  ）是提高社会生产力和综合国力的战略支撑，必须摆在国家发展全局的核心位置",
			"answer": 1,
			"question": [
				"科技创新",
				"经济建设",
				"党的领导",
				"改革开放"
			]
		},
		{
			"title": "我们党历来重视抓全党特别是领导干部的学习，这是推动党和人民事业发展的一条（  ）",
			"answer": 2,
			"question": [
				"必然规律",
				"成功经验",
				"客观规律",
				"客观要求"
			]
		},
		{
			"title": "党和国家长期实践充分证明，只有社会主义才能救中国，只有（  ）才能发展中国",
			"answer": 1,
			"question": [
				"中国特色社会主义",
				"社会主义",
				"资本主义"
			]
		},
		{
			"title": "（  ）是我们党的生命线和根本工作路线",
			"answer": 1,
			"question": [
				"群众路线",
				"阶级路线",
				"工人路线",
				"农民路线"
			]
		},
		{
			"title": "(  )党内生活，是解决党内自身问题的重要途径",
			"answer": 1,
			"question": [
				"严肃的",
				"严厉的",
				"活泼的",
				"欢快的"
			]
		},
		{
			"title": "（  ）是保护生态环境的根本之策",
			"answer": 3,
			"question": [
				"尊重自然",
				"省吃俭用",
				"节约资源",
				"勤俭持家"
			]
		},
		{
			"title": "要以（  ）开展批评和自我批评，开好民主生活会，坚持开门搞活动",
			"answer": 3,
			"question": [
				"实干精神",
				"南泥湾精神",
				"整风精神",
				"亮剑精神"
			]
		},
		{
			"title": "坚定不移（  ），是我们党有力量的表现，也是全党同志和广大群众的共同愿望",
			"answer": 4,
			"question": [
				"改革发展",
				"创新发展",
				"惩治犯罪",
				"惩治腐败"
			]
		},
		{
			"title": "我们要继续坚持走中国特色社会主义文化发展道路，提高国家文化软实力，加强（  ）建设",
			"answer": 1,
			"question": [
				"社会主义核心价值体系",
				"生态文明",
				"经济体制",
				"社会体制"
			]
		},
		{
			"title": "只有实行最严格的制度、最严密的（  ），才能为生态文明建设提供可靠保障",
			"answer": 4,
			"question": [
				"法规",
				"组织",
				"法律",
				"法治"
			]
		},
		{
			"title": "中国特色社会主义是由道路、理论体系、制度三位一体构成的，中国特色社会主义道路是实现途径，中国特色社会主义理论体系是行动指南，中国特色社会主义制度是（  ），它们统一于中国特色社会主义伟大实践",
			"answer": 2,
			"question": [
				"实践要求",
				"根本保障",
				"主要目标"
			]
		},
		{
			"title": "增强党性修养，要以&quot;三严三实&quot;去歪风，树正气&quot;,&quot;三严三实&quot;是指（  ）",
			"answer": 3,
			"question": [
				"严以律已、严以律人、严以选人，谋事要实、创业要实、做人要实",
				"严以律已、严以律人、严以选人，工作要实、学习要实、生活要实",
				"严以修身、严以用权、严以律己，谋事要实、创业要实、做人要实",
				"严以修身、严以用权、严以律己，工作要实、学习要实、生活要实"
			]
		},
		{
			"title": "反腐倡廉建设，必须反对特权思想、（  ）",
			"answer": 3,
			"question": [
				"特权观念",
				"特权理念",
				"特权现象"
			]
		},
		{
			"title": "我军之所以能够战胜各种艰难困苦、不断从胜利走向胜利，最根本的就是坚定不移（  ）",
			"answer": 3,
			"question": [
				"为人民服务",
				"搞经济建设",
				"听党话、跟党走",
				"改革开放"
			]
		},
		{
			"title": "开展党的群众路线教育实践活动，就是要把（  ）的价值追求深深植根于全党同志的思想和行动中",
			"answer": 3,
			"question": [
				"为人民服务",
				"听党话、跟党走",
				"为民务实清廉",
				"实践活动"
			]
		},
		{
			"title": "在保障和改善民生的道路上，我们一定要坚持从维护（  ）的高度，多谋民生之利，多解民生之忧",
			"answer": 1,
			"question": [
				"最广大人民根本利益",
				"工人群体利益",
				"知识分子群体利益",
				"农民群体利益"
			]
		},
		{
			"title": "我们要继续加强社会建设，切实推进各项社会事业，加强和创新（  ）",
			"answer": 3,
			"question": [
				"政治管理",
				"经济管理",
				"社会管理",
				"文化管理"
			]
		},
		{
			"title": "做好新疆工作关系全国大局，全党都要站在（  ）的高度来认识新疆工作的重要性",
			"answer": 1,
			"question": [
				"战略和全局",
				"民族和宗教",
				"经济和全局",
				"军事和全局"
			]
		},
		{
			"title": "我们的干部要上进，我们的党要上进，我们的国家要上进，我们的民族要上进，就必须大兴学习之风，坚持学习、学习、再学习，坚持（  ）",
			"answer": 3,
			"question": [
				"清廉、清廉、再清廉",
				"务实、务实、再务实",
				"实践、实践、再实践",
				"创新、创新、再创新"
			]
		},
		{
			"title": "实现中国梦必须弘扬中国精神，这就是以爱国主义为核心的民族精神，以（  ）为核心的时代精神",
			"answer": 3,
			"question": [
				"改革民主",
				"集体主义",
				"改革创新",
				"自强不息"
			]
		},
		{
			"title": "中国共产党把党风廉政建设和反腐败斗争提到关系党和国家生死存亡的高度来认识，核心问题是党要始终仅仅依靠（  ）",
			"answer": 2,
			"question": [
				"农民",
				"人民",
				"工人",
				"知识分子"
			]
		},
		{
			"title": "我们要深入学习和掌握马列主义、毛泽东思想、中国特色社会主义理论体系，牢固树立（  ）的世界观和方法论",
			"answer": 4,
			"question": [
				"机械唯物主义和历史唯物主义",
				"机械唯物主义和朴素唯物主义",
				"辩证唯物主义和朴素唯物主义",
				"辩证唯物主义和历史唯物主义"
			]
		},
		{
			"title": "一个政党，一个政权，其前途和命运最终取决于（  ）",
			"answer": 2,
			"question": [
				"革命实力",
				"人心向背",
				"经济基础",
				"领导才能"
			]
		},
		{
			"title": "（  ）是我们立党治党管党的总章程，是党的根本大法，是全党最基本、最重要、最全面的行为规范",
			"answer": 1,
			"question": [
				"党章",
				"法律",
				"党的组织制度",
				"宪法"
			]
		},
		{
			"title": "建设一支听党指挥、能打胜仗、作风优良的人民军队，是党在新形势下的强军目标,作风是（  ），关系军队的性质、宗旨、本色",
			"answer": 3,
			"question": [
				"前提",
				"灵魂",
				"保证",
				"核心"
			]
		},
		{
			"title": "以习近平为总书记的党中央提出，要全面深化（  ），推进经济结构战略性调整，全面提高开放型经济水平，推动经济持续健康发展",
			"answer": 4,
			"question": [
				"政治体制改革",
				"文化体制改革",
				"社会体制改革",
				"经济体制改革"
			]
		},
		{
			"title": "开展党的群众路线教育实践活动，就是要使全党同志牢记并恪守（  ）的根本宗旨",
			"answer": 4,
			"question": [
				"一心一意谋发展",
				"聚精会神搞建设",
				"爱国爱党",
				"全心全意为人民服务"
			]
		},
		{
			"title": "我们要巩固和发展最广泛的（  ），加强中国共产党同民主党派和无党派人士团结合作，巩固和发展平等团结互助和谐的社会主义民族关系",
			"answer": 3,
			"question": [
				"人民民主统一战线",
				"工农民主统一战线",
				"爱国统一战线",
				"革命统一战线"
			]
		},
		{
			"title": "（  ）是领导和团结全国各族人民建设中国特色社会主义伟大事业的核心力量，肩负着历史重任，经受着时代考验",
			"answer": 1,
			"question": [
				"中国共产党",
				"国务院",
				"全国人大",
				"全国政协"
			]
		},
		{
			"title": "遵守党的政治纪律，最核心的就是（  ），坚持党的基本理论、基本路线、基本纲领、基本经验、基本要求，同党中央保持高度一致，自觉维护中央权威",
			"answer": 2,
			"question": [
				"尽职尽责",
				"坚持党的领导",
				"爱岗敬业",
				"遵纪守法"
			]
		},
		{
			"title": "照镜子、正衣冠、洗洗澡、治治病&quot;中的&quot;照镜子&quot;主要是以（  ）为镜",
			"answer": 1,
			"question": [
				"党章",
				"党史",
				"党风",
				"党纪"
			]
		},
		{
			"title": "我们要坚持节约资源和保护环境的基本国策，把（  ）放到现代化建设全局的突出地位，从根本上扭转生态环境恶化趋势，确保中华民族永续发展",
			"answer": 1,
			"question": [
				"生态文明建设",
				"社会建设",
				"物质文明建设",
				"文化建设"
			]
		},
		{
			"title": "中国共产党领导人民治理国家的基本方略是（  ）",
			"answer": 2,
			"question": [
				"以德治国",
				"依法治国",
				"专家治国",
				"以法制国"
			]
		},
		{
			"title": "严明党的纪律，首要的就是严明（  ）",
			"answer": 2,
			"question": [
				"党的宗旨",
				"政治纪律",
				"经济纪律",
				"法律相关规定"
			]
		},
		{
			"title": "历史和现实告诉我们，（  ）一代有理想、有担当，国家就有前途，民族就有希望，实现我们的发展目标就有源源不断的强大力量",
			"answer": 4,
			"question": [
				"老年",
				"少年",
				"中年",
				"青年"
			]
		},
		{
			"title": "（  ）是解决党内矛盾的有力武器",
			"answer": 2,
			"question": [
				"和洽安宁",
				"批评和自我批评",
				"和睦互勉",
				"和睦友爱"
			]
		},
		{
			"title": "我们提出要努力让人民群众在每一个司法案件中都感受到（  ），所有司法机关都要紧紧围绕这个目标来改进工作",
			"answer": 1,
			"question": [
				"公平正义",
				"规律道理",
				"法律权威",
				"人之常情"
			]
		},
		{
			"title": "到中国共产党成立（  ）时，全面建成小康社会的伟大目标一定能够实现",
			"answer": 2,
			"question": [
				"一百二十周年",
				"一百周年",
				"八十周年",
				"九十周年"
			]
		},
		{
			"title": "建立健全党内制度体系，要以（  ）为根本依据",
			"answer": 2,
			"question": [
				"中央八项规定",
				"党章",
				"共产主义的奋斗目标",
				"社会主义制度"
			]
		},
		{
			"title": "我国的宣传思想工作就是要巩固（  ）在意识形态领域的指导地位，巩固全党全国人民团结奋斗的共同思想基础",
			"answer": 1,
			"question": [
				"马克思主义",
				"优秀的传统文化",
				"民族文化",
				"世界文化"
			]
		},
		{
			"title": "中共中央进行了深入研究，听取了党内及社会各方面的相关意见后，决定中共十八届三中全会重点研究（  ）",
			"answer": 2,
			"question": [
				"和平发展问题",
				"全面深化改革问题",
				"经济结构调整问题",
				"生态文明问题"
			]
		},
		{
			"title": "为实现&quot;两个一百年&quot;两大目标，我们将继续把（  ）作为第一要务",
			"answer": 3,
			"question": [
				"创新",
				"改革",
				"发展",
				"国际交流"
			]
		},
		{
			"title": "（  ）是我国的领导阶级，是我国先进生产力和生产关系的代表",
			"answer": 4,
			"question": [
				"资产阶级",
				"各族人民群众",
				"农民阶级",
				"工人阶级"
			]
		},
		{
			"title": "为实现&quot;两个一百年&quot;两大目标，我们将继续把（  ）作为中心任务，继续推动国家经济社会发展",
			"answer": 1,
			"question": [
				"经济建设",
				"社会建设",
				"文化建设",
				"政治建设"
			]
		},
		{
			"title": "反腐倡廉必须常抓不懈，拒腐防变必须警钟长鸣，关键就在（  ）二字，一个是要经常抓，一个是要长期抓",
			"answer": 4,
			"question": [
				"&quot;经&quot;、&quot;抓&quot;",
				"&quot;常&quot;、&quot;抓&quot;",
				"&quot;经&quot;、&quot;长&quot;",
				"&quot;常&quot;、&quot;长"
			]
		},
		{
			"title": "（  ）是国家的根本大法，是治国安邦的总章程，全国各族人民、一切国家机关和武装力量、各政党和各社会团体、各企事业组织，都必须以其为根本的活动准则",
			"answer": 4,
			"question": [
				"党章",
				"国务院颁布的行政法规",
				"法律",
				"宪法"
			]
		},
		{
			"title": "实现新疆社会稳定和长治久安，关键在党，根本靠坚强的干部队伍、严密的基层组织体系、管用的（  ）",
			"answer": 3,
			"question": [
				"社会管理机制",
				"经济管理机制",
				"群众工作机制",
				"群众管理机制"
			]
		},
		{
			"title": "要大力加强反腐倡廉教育和廉政文化建设，坚持依法治国和（  ）相结合",
			"answer": 3,
			"question": [
				"政府清廉",
				"清正廉洁",
				"以德治国",
				"为民务实"
			]
		},
		{
			"title": "建设中国特色社会主义，总依据是社会主义初级阶段，总布局是五位一体，总任务是（  ）",
			"answer": 1,
			"question": [
				"实现社会主义现代化和中华民族伟大复兴",
				"经济发展",
				"实现共产主义",
				"改革开放"
			]
		},
		{
			"title": "(  ）是世界经济可持续增长的要求",
			"answer": 1,
			"question": [
				"发展创新",
				"改革开放",
				"利益融合",
				"互利共赢"
			]
		},
		{
			"title": "实现（  ）就是中华民族近代最伟大的中国梦",
			"answer": 3,
			"question": [
				"祖国统一",
				"全面建成小康社会",
				"中华民族伟大复兴",
				"共产主义"
			]
		},
		{
			"title": "党的十八大提出了加强基层（  ）党组织建设的重大任务",
			"answer": 4,
			"question": [
				"创新型",
				"涣散型",
				"管理型",
				"服务型"
			]
		},
		{
			"title": "党的十八大提出，要在全党深入开展以为民务实清廉为主要内容的（  ）",
			"answer": 1,
			"question": [
				"党的群众路线教育实践活动",
				"创先争优活动",
				"保持党的先进性活动",
				"深入学习实践科学发展观活动"
			]
		},
		{
			"title": "在新的历史条件下，我们党面临着执政、改革开放、（  ）、外部环境&quot;四大考验&quot;",
			"answer": 3,
			"question": [
				"商品经济",
				"内部环境",
				"市场经济",
				"执政能力"
			]
		},
		{
			"title": "在新的历史条件下，我们党面临着&quot;精神懈怠、能力不足、（  ）、消极腐败&quot;四大危险",
			"answer": 2,
			"question": [
				"贪污腐败",
				"脱离群众",
				"思想堕落",
				"执政经验欠缺"
			]
		},
		{
			"title": "全面提高党的建设科学化水平，全党要增强紧迫感和责任感，牢牢把握的主线是（  ）",
			"answer": 4,
			"question": [
				"加强党的执政能力建设",
				"加强先进性、纯洁性建设和党的执政能力建设",
				"加强先进性和纯洁性建设",
				"加强党的执政能力建设、先进性和纯洁性建设"
			]
		},
		{
			"title": "对有丧失党员条件，严重败坏党的形象行为的，应当给予（  ）处分",
			"answer": 4,
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"title": "党员犯罪情节轻微，人民检察院依法作出不起诉决定的，或者人民法院依法作出有罪判决并免予刑事处罚的，应当给予（  ）处分",
			"answer": 3,
			"question": [
				"警告；严重警告；撤销党内职务；",
				"严重警告；撤销党内职务；留党察看；",
				"撤销党内职务、留党察看或者开除党籍"
			]
		},
		{
			"title": "党员受到警告处分（  ）内、受到严重警告处分一年半内，不得在党内提升职务和向党外组织推荐担任高于其原任职务的党外职务",
			"answer": 2,
			"question": [
				"半年",
				"一年",
				"三个月",
				"一年半"
			]
		},
		{
			"title": "对于违纪行为所获得的职务、职称、学历、学位、奖励、资格等其他利益，应当由承办案件的纪检机关或者由其上级纪检机关建议有关组织、部门、单位按照规定予以(  )",
			"answer": 2,
			"question": [
				"撤销",
				"纠正",
				"处理",
				"剥夺"
			]
		},
		{
			"title": "通过信息网络、广播、电视、报刊、书籍、讲座、论坛、报告会、座谈会等方式，公开发表坚持资产阶级自由化立场、反对四项基本原则，反对党的改革开放决策的文章、演说、宣言、声明等的，给予（  ）处分",
			"answer": 4,
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"title": "在党内搞团团伙伙、结党营私、拉帮结派、培植私人势力或者通过搞利益交换、为自己营造声势等活动捞取政治资本的，给予（  ）处分；情节严重的，给予留党察看或者开除党籍处分",
			"answer": 3,
			"question": [
				"警告",
				"严重警告",
				"严重警告或者撤销党内职务"
			]
		},
		{
			"title": "违反党的优良传统和工作惯例等党的(  )，在政治上造成不良影响的，给予警告或者严重警告处分",
			"answer": 2,
			"question": [
				"纪律",
				"规矩",
				"政策"
			]
		},
		{
			"title": "下级党组织（  ）上级党组织决定的，对直接责任者和领导责任者，给予警告或者严重警告处分；情节严重的，给予撤销党内职务或者留党察看处分",
			"answer": 3,
			"question": [
				"拒不执行",
				"擅自改变",
				"拒不执行或者擅自改变"
			]
		},
		{
			"title": "拒不执行党组织的（  ）决定的，给予警告、严重警告或者撤销党内职务处分",
			"answer": 4,
			"question": [
				"分配",
				"调动",
				"分配、调动",
				"分配、调动、交流等"
			]
		},
		{
			"title": "以强迫、威胁、欺骗、拉拢等手段，妨害党员（  ）行使表决权、选举权和被选举权的，给予撤销党内职务、留党察看或者开除党籍处分",
			"answer": 1,
			"question": [
				"自主",
				"自觉",
				"自愿",
				"自由"
			]
		},
		{
			"title": "弄虚作假，骗取职务、职级、职称、待遇、资格、学历、学位、荣誉或者其他利益的，（  ）",
			"answer": 3,
			"question": [
				"给予警告或者严重警告处分；",
				"给予警告或者严重警告处分；情节较重的，给予撤销党内职务或者留党察看处分；",
				"给予警告或者严重警告处分；情节较重的，给予撤销党内职务或者留党察看处分；情节严重的，给予开除党籍处分"
			]
		},
		{
			"title": "利用职权或者(  )为他人谋取利益，本人的配偶、子女及其配偶等亲属和其他特定关系人收受对方财物，情节较重的，给予警告或者严重警告处分；情节严重的，给予撤销党内职务、留党察看或者开除党籍处分",
			"answer": 3,
			"question": [
				"工作关系",
				"个人关系",
				"职务上的影响"
			]
		},
		{
			"title": "收受（  ）影响公正执行公务的礼品、礼金、消费卡等，情节较轻的，给予警告或者严重警告处分；情节较重的，给予撤销党内职务或者留党察看处分；情节严重的，给予开除党籍处分",
			"answer": 3,
			"question": [
				"将会",
				"导致",
				"可能",
				"必然"
			]
		},
		{
			"title": "利用职权或者职务上的影响，违反有关规定占用公物归个人使用，时间超过(  )，情节较重的，给予警告或者严重警告处分；情节严重的，给予撤销党内职务处分",
			"answer": 2,
			"question": [
				"三个月",
				"六个月",
				"九个月",
				"十二个月"
			]
		},
		{
			"title": "违反有关规定组织、参加用公款支付的宴请、高消费娱乐、健身活动，或者用公款购买赠送、发放礼品，对（  ），情节较轻的，给予警告或者严重警告处分；情节较重的，给予撤销党内职务或者留党察看处分；情节严重的，给予开除党籍处分",
			"answer": 3,
			"question": [
				"直接责任者",
				"领导责任者",
				"直接责任者和领导责任者"
			]
		},
		{
			"title": "违反(  )，超标准、超范围接待或者借机大吃大喝，对直接责任者和领导责任者，情节较重的，给予警告或者严重警告处分；情节严重的，给予撤销党内职务处分",
			"answer": 2,
			"question": [
				"勤俭节约、反对浪费的精神",
				"公务接待管理规定",
				"有关规定",
				"党政机关与事业单位工作规则"
			]
		},
		{
			"title": "搞权色交易或者给予财物搞钱色交易的，最重的处分是(  )：",
			"answer": 4,
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"title": "在管理、服务活动中违反有关规定收取费用的；在办理涉及群众事务时刁难群众、吃拿卡要的；是违反（  ）的行为：",
			"answer": 4,
			"question": [
				"政治纪律",
				"组织纪律",
				"廉洁纪律",
				"群众纪律"
			]
		},
		{
			"title": "生活奢靡、贪图享乐、追求低级趣味，造成不良影响的，最重的处分是(  )",
			"answer": 3,
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看"
			]
		},
		{
			"title": "与他人发生不正当性关系，造成不良影响的，&quot;—最重的处分是(  )",
			"answer": 4,
			"question": [
				"严重警告",
				"撤销党内职务",
				"留党察看",
				"开除党籍"
			]
		},
		{
			"title": "《中国共产党廉洁自律准则》的施行时间是（  ）",
			"answer": 2,
			"question": [
				"2015年1月1日起",
				"2016年1月1日起",
				"2014年1月1日"
			]
		},
		{
			"title": "《中国共产党廉洁自律准则》中廉洁自律规范为（  ）",
			"answer": 3,
			"question": [
				"八条&quot;坚持&quot;",
				"八条&quot;廉洁&quot;",
				"四条&quot;坚持&quot;、四条&quot;廉洁"
			]
		},
		{
			"title": "《中国共产党廉洁自律准则》的遵守对象是（  ）",
			"answer": 3,
			"question": [
				"党员",
				"党员领导干部",
				"党员和党员领导干部"
			]
		},
		{
			"title": "（  ）12月5日，中央政治局会议审议并通过中央纪委《关于周永康严重违纪案的审查报告》，根据《中国共产党纪律处分条例》的有关规定，决定给予周永康开除党籍处分",
			"answer": 2,
			"question": [
				"2013年",
				"2014年",
				"2015年",
				"2016年"
			]
		},
		{
			"title": "我们党面临的&quot;四种危险&quot;是（  ）：",
			"answer": 1,
			"question": [
				"精神懈怠、能力不足、脱离群众、消极腐败",
				"精神懈怠、经验不足、脱离群众、消极腐败",
				"党风不正、能力不足、党群关系、裹足不前",
				"党风不正、经验不足、党群关系、左右摇摆"
			]
		},
		{
			"title": "胡锦涛在中国共产党第十八次全国代表大会上作题为&quot;坚定不移沿着中国特色社会主义道路前进为（  ）而奋斗&quot;的报告",
			"answer": 2,
			"question": [
				"全面建设小康社会",
				"全面建成小康社会",
				"全面实现小康社会"
			]
		},
		{
			"title": "十八大报告强调，（  ）同马克思列宁主义、毛泽东思想、邓小平理论、&quot;三个代表&quot;重要思想一道，是党必须长期坚持的指导思想",
			"answer": 1,
			"question": [
				"科学发展观",
				"习近平系列讲话",
				"中国特色社会主义理论"
			]
		},
		{
			"title": "十八大报告强调，我们坚定不移高举（  ）伟大旗帜，既不走封闭僵化的老路，也不走改旗易帜的邪路",
			"answer": 3,
			"question": [
				"社会主义",
				"改革开放",
				"中国特色社会主义"
			]
		},
		{
			"title": "十八大报告指出建设中国特色社会主义，总依据是（  ）",
			"answer": 1,
			"question": [
				"&quot;社会主义初级阶段",
				"五位一体",
				"与时俱进"
			]
		},
		{
			"title": "党组织和党员必须自觉遵守党章，严格执行和维护党的纪律，自觉接受党的纪律约束，(  )遵守国家法律法规",
			"answer": 1,
			"question": [
				"模范",
				"严格",
				"率先",
				"全面"
			]
		},
		{
			"title": "加强对党的各级组织和全体党员的教育、管理和监督，把（  )挺在前面，注重抓早抓小",
			"answer": 4,
			"question": [
				"教育",
				"管理",
				"监督",
				"纪律"
			]
		},
		{
			"title": "处理违犯党纪的党组织和党员，应当实行惩戒与（  )相结合，做到宽严相济",
			"answer": 2,
			"question": [
				"调查",
				"教育",
				"警示",
				"防范"
			]
		},
		{
			"title": "对党员的纪律处分种类是（  ）",
			"answer": 2,
			"question": [
				"警告；严重警告；记大过；留党察看；开除党籍",
				"警告；严重警告；撤销党内职务；留党察看；开除党籍",
				"警告；记过；撤销党内职务；留党察看；开除党籍"
			]
		},
		{
			"title": "党员受(  )处分期间，没有表决权、选举权和被选举权",
			"answer": 4,
			"question": [
				"警告",
				"严重警告",
				"撤销党内职务",
				"留党察看"
			]
		},
		{
			"title": "党员受到(  )处分，其党内职务自然撤销,对于担任党外职务的，应当建议党外组织撤销其党外职务",
			"answer": 3,
			"question": [
				"警告",
				"严重警告",
				"留党察看"
			]
		},
		{
			"title": "党员受到开除党籍处分，（  ）不得重新入党，另有规定不准重新入党的，依照规定",
			"answer": 2,
			"question": [
				"三年内",
				"五年内",
				"八年内",
				"十年内"
			]
		},
		{
			"title": "对于经济方面共同违纪的，按照个人所得数额及其（  ），分别给予处分",
			"answer": 1,
			"question": [
				"所起作用",
				"恶劣影响",
				"违纪性质",
				"违纪手段"
			]
		},
		{
			"title": "党组织在纪律审查中发现党员有贪污贿赂、失职渎职等刑法规定的行为涉嫌犯罪的，应当给予（  ）处分",
			"answer": 3,
			"question": [
				"警告；严重警告；撤销党内职务；",
				"严重警告；撤销党内职务；留党察看；",
				"撤销党内职务、留党察看或者开除党籍"
			]
		},
		{
			"title": "标志着中国新民主主义革命开端的历史事件是(  )",
			"answer": 2,
			"question": [
				"新文化运动",
				"五四运动",
				"中国共产党成立",
				"五卅运动"
			]
		},
		{
			"title": "1921年7月23日至8月初，中国共产党第一次全国代表大会先后在(  )召开",
			"answer": 1,
			"question": [
				"上海、嘉兴",
				"上海、天津",
				"北京、上海",
				"北京、广州"
			]
		},
		{
			"title": "第一次明确提出彻底的反帝反封建民主革命纲领的会议是(  )",
			"answer": 2,
			"question": [
				"中共一大",
				"中共二大",
				"中共三大",
				"中共四大"
			]
		},
		{
			"title": "第一次国共合作正式建立的标志是(  )",
			"answer": 1,
			"question": [
				"国民党第一次全国代表大会的召开",
				"中共三大的召开",
				"黄埔军校的建立",
				"北伐战争的开始"
			]
		},
		{
			"title": "标志着中国共产党开始独立领导革命战争和创建人民军队的事件是(  )",
			"answer": 3,
			"question": [
				"秋收起义",
				"广州起义",
				"南昌起义",
				"百色起义"
			]
		},
		{
			"title": "政权是由枪杆子中取得的&quot;这一论断是毛泽东在(  )提出的",
			"answer": 1,
			"question": [
				"八七会议上",
				"古田会议上",
				"反&quot;围剿&quot;斗争中",
				"井冈山斗争中"
			]
		},
		{
			"title": "(  )从组织上确立了党对军队的绝对领导，为建立一支无产阶级领导下的新型人民军队奠定了基础",
			"answer": 3,
			"question": [
				"井冈山会师",
				"工农武装割据",
				"三湾改编",
				"中共六大"
			]
		},
		{
			"title": "1935年12月，中共中央在(  )上确定了抗日民族统一战线的策略方针",
			"answer": 3,
			"question": [
				"八七会议",
				"洛川会议",
				"瓦窑堡会议",
				"十二月会议"
			]
		},
		{
			"title": "1937年(  )事变爆发，全面抗战由此开始",
			"answer": 4,
			"question": [
				"九一八",
				"一二八",
				"华北",
				"卢沟桥"
			]
		},
		{
			"title": "全面抗战爆发后，八路军打的第一个大胜仗是(  )",
			"answer": 1,
			"question": [
				"平型关大捷",
				"台儿庄战役",
				"武汉会战",
				"长沙大捷"
			]
		},
		{
			"title": "1940年8月至12月，八路军在华北发动的(  )，给日军以沉重打击",
			"answer": 1,
			"question": [
				"百团大战",
				"陈庄战役",
				"平型关战役",
				"黄土岭战役"
			]
		},
		{
			"title": "1942年5月，八路军副参谋长(  )在指挥八路军总部进行反&quot;扫荡&quot;战斗时，不幸中弹，壮烈殉国",
			"answer": 1,
			"question": [
				"左权",
				"朱瑞",
				"黄公略",
				"刘志丹"
			]
		},
		{
			"title": "&quot;千古奇冤，江南一叶；同室操戈，相煎何急？&quot;是周恩来在(  )后对国民党蒋介石的控诉和回击",
			"answer": 3,
			"question": [
				"七七事变",
				"八一三事变",
				"皖南事变",
				"五二血案"
			]
		},
		{
			"title": "抗日战争时期，被中共中央誉为&quot;敌后模范的抗日根据地及统一战线的模范区&quot;的是(  )",
			"answer": 1,
			"question": [
				"晋察冀抗日根据地",
				"晋西南抗日根据地",
				"晋冀豫抗日根据地",
				"山东抗日根据地"
			]
		},
		{
			"title": "1945年(  )，日本代表在投降书上签字，日军128万人向中国投降,至此，中国抗日战争胜利结束，世界反法西斯战争也胜利结束",
			"answer": 1,
			"question": [
				"9月2日",
				"9月3日",
				"8月15日",
				"8月16日"
			]
		},
		{
			"title": "1945年,党的(  )确立了毛泽东思想为全党的指导思想",
			"answer": 3,
			"question": [
				"六大",
				"六届六中全会",
				"七大",
				"八大"
			]
		},
		{
			"title": "抗日战争胜利后，国共双方举行了最高级别谈判，双方代表签署了《政府与中共代表会谈纪要》，这就是历史上著名的(  )",
			"answer": 3,
			"question": [
				"停战谈判",
				"南京谈判",
				"重庆谈判",
				"北京谈判"
			]
		},
		{
			"title": "国民党发动全面内战是从1946年进攻(  )解放区开始的",
			"answer": 3,
			"question": [
				"冀鲁豫",
				"陕甘宁",
				"山东",
				"中原"
			]
		},
		{
			"title": "1946年8月，毛泽东在同美国记者安娜·路易斯·斯特朗的谈话中提出了(  )",
			"answer": 4,
			"question": [
				"&quot;没有调查就没有发言权&quot;",
				"&quot;将革命进行到底&quot;",
				"&quot;星星之火，可以燎原&quot;",
				"&quot;帝国主义和一切反动派都是纸老虎&quot;"
			]
		},
		{
			"title": "人民解放战争的战略反攻开始于(  )",
			"answer": 3,
			"question": [
				"孟良崮战役",
				"济南战役",
				"刘邓、陈谢、陈粟三军驰骋中原",
				"渡江战役"
			]
		},
		{
			"title": "1947年7月至9月，在(  )主持下，中共中央工作委员会在河北平山县西柏坡召开全国土地会议，制定了《中国土地法大纲》",
			"answer": 3,
			"question": [
				"毛泽东",
				"周恩来",
				"刘少奇",
				"任弼时"
			]
		},
		{
			"title": "1947年11月12日石门的解放，使晋察冀和晋冀鲁豫两大解放区连成一片，(  )对此给予了高度的评价，称之为&quot;夺取大城市之创例&quot;，并以《喜闻收复石门》为题赋诗祝贺",
			"answer": 2,
			"question": [
				"毛泽东",
				"朱德",
				"周恩来",
				"聂荣臻"
			]
		},
		{
			"title": "1948年8月7日至19日，在中国民主历程中具有重要意义的华北临时人民代表大会在石家庄人民礼堂隆重召开,9月20日至24日，华北人民政府委员会在石家庄召开全体会议，(  )当选政府主席",
			"answer": 1,
			"question": [
				"董必武",
				"杨秀峰",
				"薄一波",
				"蓝公武"
			]
		},
		{
			"title": "1949年3月，中共中央在(  )召开七届二中全会,毛泽东在会上向全党同志提出了著名的&quot;两个务必&quot;",
			"answer": 4,
			"question": [
				"阜平",
				"延安",
				"北京",
				"西柏坡"
			]
		},
		{
			"title": "1949年9月21日，(  )第一届全体会议在北平隆重开幕,毛泽东在开幕词中庄严地宣告：&quot;占人类总数四分之一的中国人从此站立起来了&quot;",
			"answer": 2,
			"question": [
				"中国人民代表大会",
				"中国人民政治协商会议",
				"政务院会议",
				"中央政治局会议"
			]
		},
		{
			"title": "1950年6月朝鲜战争爆发，10月19日以(  )为司令员兼政治委员的中国人民志愿军奉命开赴朝鲜战场",
			"answer": 2,
			"question": [
				"朱德",
				"彭德怀",
				"贺龙",
				"刘伯承"
			]
		},
		{
			"title": "(  )年底，社会主义改造取得决定性的胜利，基本消灭了剥削制度，全民所有制和劳动群众集体所有制这两种社会主义公有制形式，已在国民经济中占据绝对优势地位",
			"answer": 4,
			"question": [
				"1953",
				"1954",
				"1955",
				"1956"
			]
		},
		{
			"title": "1956年4月，毛泽东发表(  )，初步提出了中国社会主义建设的基本方针，就是要把国内外一切积极因素调动起来，为社会主义事业服务",
			"answer": 2,
			"question": [
				"《关于正确处理人民内部矛盾的问题》",
				"《论十大关系》",
				"《目前形势和我们的任务》",
				"《论人民民主专政》"
			]
		},
		{
			"title": "(  )年，我国成功地爆炸第一颗原子弹，有力地打破了超级大国的核垄断和核讹诈",
			"answer": 2,
			"question": [
				"1960",
				"1964",
				"1971",
				"1973"
			]
		},
		{
			"title": "1971年10月25日，第(  )届联合国大会通过决议，恢复中华人民共和国在联合国的一切合法权益",
			"answer": 2,
			"question": [
				"25",
				"26",
				"27",
				"28"
			]
		},
		{
			"title": "&quot;文化大革命&quot;结束后，针对&quot;两个凡是&quot;的思想禁锢，党开展了(  )",
			"answer": 1,
			"question": [
				"真理标准问题的讨论",
				"要不要改革开放的讨论",
				"如何评价毛泽东的讨论",
				"转移工作重心的讨论"
			]
		},
		{
			"title": "标志着我国进入改革开放新时期的重要会议是(  )",
			"answer": 1,
			"question": [
				"党的十一届三中全会",
				"党的八大",
				"党的九届二中全会",
				"党的十二大"
			]
		},
		{
			"title": "党的十一届六中全会通过的(  )，标志着党胜利地完成了指导思想上的拨乱反正",
			"answer": 2,
			"question": [
				"《关于若干历史问题的决议》",
				"《关于建国以来党的若干历史问题的决议》",
				"《关于党内政治生活的若干准则》",
				"《中共中央关于整党的决定》"
			]
		},
		{
			"title": "(  )在中国共产党第十二次全国代表大会开幕词中第一次明确提出了建设有中国特色社会主义这一科学命题",
			"answer": 4,
			"question": [
				"江泽民",
				"叶剑英",
				"胡耀邦",
				"邓小平"
			]
		},
		{
			"title": "中国共产党第(  )次全国代表大会系统论述了社会主义初级阶段理论",
			"answer": 3,
			"question": [
				"十二",
				"十三",
				"十四",
				"十五"
			]
		},
		{
			"title": "我国社会主义初级阶段至少要经历一百年时间,这一百年是指(  )",
			"answer": 2,
			"question": [
				"从中国共产党成立到2020年前后",
				"从中华人民共和国成立到本世纪中叶",
				"从党的十一届三中全会召开的1978年到2078年前后",
				"从本世纪开始的2000年到2100年前后"
			]
		},
		{
			"title": "中国共产党第(  )次全国代表大会明确提出了经济体制改革的目标是建立社会主义市场经济体制",
			"answer": 2,
			"question": [
				"十三",
				"十四",
				"十五",
				"十六"
			]
		},
		{
			"title": "1997年7月1日，香港回归祖国，标志着邓小平(  )构想获得巨大成功",
			"answer": 3,
			"question": [
				"改革开放",
				"全方位外交",
				"&quot;一国两制&quot;",
				"和谐世界"
			]
		},
		{
			"title": "&quot;三个代表&quot;重要思想的本质是(  )",
			"answer": 1,
			"question": [
				"立党为公、执政为民",
				"坚持与时俱进",
				"一切从实际出发",
				"实事求是"
			]
		},
		{
			"title": "把发展问题同党的性质、党的执政理念联系起来，明确提出发展是我们党执政兴国的第一要务的是(  )",
			"answer": 3,
			"question": [
				"毛泽东",
				"邓小平",
				"江泽民",
				"胡锦涛"
			]
		},
		{
			"title": "党的十六大报告指出：&quot;(  )是党的生命",
			"answer": 3,
			"question": [
				"&quot;先进性",
				"执政能力",
				"党内民主",
				"党同人民群众的联系"
			]
		},
		{
			"title": "从2005年1月以来，我们党分三批开展了以(  )为主要内容的保持共产党员先进性教育活动",
			"answer": 1,
			"question": [
				"实践&quot;三个代表&quot;重要思想",
				"落实科学发展观",
				"树立社会主义荣辱观",
				"建设社会主义新农村"
			]
		},
		{
			"title": "科学发展观，第一要义是发展，核心是(  )，基本要求是全面协调可持续，根本方法是统筹兼顾",
			"answer": 2,
			"question": [
				"人本主义",
				"以人为本",
				"民本思想",
				"为民服务"
			]
		},
		{
			"title": "(  )对党章进行了修改，把中国特色社会主义理论体系写入党章",
			"answer": 4,
			"question": [
				"党的十四大",
				"党的十五大",
				"党的十六大",
				"党的十七大"
			]
		},
		{
			"title": "首次明确提出&quot;提高党的建设科学化水平&quot;这一重大命题的会议是(  )",
			"answer": 4,
			"question": [
				"党的十四届四中全会",
				"党的十五届六中全会",
				"党的十六届四中全会",
				"党的十七届四中全会"
			]
		},
		{
			"title": "《中国共产党纪律处分条例》是根据（  ）制定的",
			"answer": 3,
			"question": [
				"党的宗旨",
				"党的历史",
				"《中国共产党章程》",
				"党的路线、方针、政策"
			]
		},
		{
			"title": "党的纪律是党的各级组织和全体党员（  ）遵守的行为规则",
			"answer": 3,
			"question": [
				"应当",
				"努力",
				"必须"
			]
		}
	];

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "党的十八大于（  ）在北京隆重开幕，于（  ）在北京胜利闭幕，会期7天。",
			"answer": 2,
			"question": [
				"11月7日，11月13日",
				"11月8日，11月14日",
				"11月9日，11月15日"
			]
		},
		{
			"title": "党员的党龄，从（  ）之日算起。",
			"answer": 3,
			"question": [
				"支部大会讨论通过他为预备党员",
				"上级审批他转为正式党员",
				"预备期满，支部大会通过他转为正式党员"
			]
		},
		{
			"title": "如期全面建成小康社会任务十分艰巨，全党同志一定要埋头苦干.顽强拼搏。国家要加大（  ）扶持力度，支持这些地区加快改革开放.增强发展能力.改善人民生活。鼓励有条件的地方在现代化建设中继续走在前列，为全国改革发展作出更大贡献。",
			"answer": 2,
			"question": [
				"中西部区域",
				"对农村和中西部地区",
				"沿海地区"
			]
		},
		{
			"title": "党的十八大报告指出:建设中国特色社会主义总任务是（  ）。&quot;",
			"answer": 3,
			"question": [
				"改革开放",
				"科学发展",
				"社会主义现代化和中华民族伟大复兴"
			]
		},
		{
			"title": "党的十八大报告提出:转变经济发展方式取得重大进展，在发展平衡性.协调性.可持续性明显增强的基础上，实现（  ）比二0一0年翻一番。",
			"answer": 1,
			"question": [
				"国内生产总值和城乡居民人均收入",
				"国民生产总值",
				"人均国内生产总值"
			]
		},
		{
			"title": "十八大指出：要更加注重改进党的（  ），保证党领导人民有效治理国家；更加注重健全民主制度.丰富民主形式，保证人民依法实行民主选举.民主决策.民主管理.民主监督；更加注重发挥法治在国家治理和社会管理中的重要作用，维护国家法制统一.尊严.权威，保证人民依法享有广泛权利和自由。",
			"answer": 1,
			"question": [
				"领导方式和执政方式",
				"领导地位",
				"组织方式"
			]
		},
		{
			"title": "党深化干部人事制度改革，建设高素质执政骨干队伍。坚持和发展中国特色社会主义，关键在于建设一支（  ）的执政骨干队伍。",
			"answer": 1,
			"question": [
				"政治坚定.能力过硬.作风优良.奋发有为",
				"政治坚定.能力过硬",
				"奋发有为"
			]
		},
		{
			"title": "党的十八大提出：健全（  ）制度，更加科学有效地防治腐败。严格执行党风廉政建设责任制。坚决查处大案要案，着力解决发生在群众身边的腐败问题。",
			"answer": 1,
			"question": [
				"反腐败法律",
				"反贪污受贿法律",
				"反行贿法律"
			]
		},
		{
			"title": "下面说法不正确的是（  ）。",
			"answer": 1,
			"question": [
				"十八大报告首次提出人均国民生产总值到2020年力争比2000年翻两番",
				"十八大报告把&quot;基层群众自治制度&quot;纳入了中国特色政治发展道路的内容",
				"十八大报告用&quot;转变经济发展方式&quot;代替过去的&quot;转变经济增长方式&quot;"
			]
		},
		{
			"title": "党的十八大报告指出建设中国特色社会主义，总依据是（  ）。",
			"answer": 1,
			"question": [
				"社会主义初级阶段",
				"五位一体",
				"与时俱进"
			]
		},
		{
			"title": "1978年召开的党的（  ），是建国以来我党历史上具有深远意义的伟大转折。",
			"answer": 3,
			"question": [
				"中共中央工作会议",
				"十一届六中全会",
				"十一届三中全会"
			]
		},
		{
			"title": "建设社会主义文化强国，必须坚持（  ）的方针。",
			"answer": 2,
			"question": [
				"为人民服务、为社会主义服务",
				"百花齐放、百家争鸣",
				"贴近实际、贴近生活、贴近群众"
			]
		},
		{
			"title": "建设（  ），是关系人民福祉、关乎民族未来的长远大计。",
			"answer": 2,
			"question": [
				"政治文明",
				"生态文明",
				"社会主义市场经济"
			]
		},
		{
			"title": "（  ）是团结带领群众贯彻党的理论和路线方针政策、落实党的任务的战斗堡垒。",
			"answer": 1,
			"question": [
				"党的基层组织",
				"各级党和国家机关",
				"中国共产党"
			]
		},
		{
			"title": "党按照（  ）的原则选拔干部。",
			"answer": 3,
			"question": [
				"民主公正、择优选拔",
				"公开公正、平等竞争",
				"德才兼备、以德为先"
			]
		},
		{
			"title": "中国共产党是中国工人阶级的先锋队，同时是（  ）的先锋队，是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益。",
			"answer": 3,
			"question": [
				"中国人民",
				"中华民族",
				"中国人民和中华民族"
			]
		},
		{
			"title": "中国共产党以马克思列宁主义、毛泽东思想、邓小平理论、&quot;三个代表&quot;重要思想和（  ）作为自己的行动指南。",
			"answer": 2,
			"question": [
				"社会主义荣辱观",
				"科学发展观",
				"社会主义核心价值"
			]
		},
		{
			"title": "发展党员，必须坚持（  ）的原则。",
			"answer": 2,
			"question": [
				"集体吸收",
				"个别吸收",
				"个别吸收和集体吸收相结合"
			]
		},
		{
			"title": "党章总纲强调，要以改革创新精神全面推进党的建设新的伟大工程，整体推进党的思想建设、组织建设、作风建设、（  ）、制度建设。",
			"answer": 2,
			"question": [
				"先进性建设",
				"反腐倡廉建设",
				"纯洁性建设"
			]
		},
		{
			"title": "党章总纲强调，要不断提高党的创造力、凝聚力、战斗力，建设学习型、（  ）、创新型的马克思主义执政党，使我们党始终走在时代前列，成为领导全国人民沿着中国特色社会主义道路不断前进的坚强核心。",
			"answer": 3,
			"question": [
				"科学型",
				"制度型",
				"服务型"
			]
		},
		{
			"title": "1911年爆发的（  ），是20世纪中国人民在前进道路上经历的第一次历史性巨大变化。",
			"answer": 2,
			"question": [
				"新文化运动",
				"辛亥革命",
				"五四运动"
			]
		},
		{
			"title": "修订后的《中国共产党纪律处分条例》围绕党纪戒尺要求，开列负面清单，重在（  ）。",
			"answer": 2,
			"question": [
				"立德",
				"立规",
				"立法"
			]
		},
		{
			"title": "中国共产党党徽为镰刀和（  ）组成的图案",
			"answer": 4,
			"question": [
				"斧头",
				"火炬",
				"五星",
				"锤头"
			]
		},
		{
			"title": "预备党员的（  ）同正式党员一样。",
			"answer": 3,
			"question": [
				"权利",
				"权利和义务",
				"义务"
			]
		},
		{
			"title": "不属于&quot;三会一课&quot;中的会议是（  ）。",
			"answer": 3,
			"question": [
				"支部党员大会",
				"支部委员会",
				"党代会"
			]
		},
		{
			"title": "党的基层委员会每届任期是（  ）年。",
			"answer": 3,
			"question": [
				"三年",
				"五年",
				"三至五年"
			]
		},
		{
			"title": "确保到（  ）年实现全面建成小康社会。",
			"answer": 1,
			"question": [
				"2020",
				"2025",
				"2015"
			]
		},
		{
			"title": "《党章》规定，党的基层组织是党在（  ）中的战斗堡垒，是党的全部工作和战斗力的基础。",
			"answer": 3,
			"question": [
				"社会组织结构",
				"社会政治生活",
				"社会基层组织"
			]
		},
		{
			"title": "党员要切实开展（  ），勇于揭露和纠正工作中的缺点、错误，坚决同消极腐败现象作斗争。",
			"answer": 2,
			"question": [
				"自我反省",
				"批评与自我批评",
				"自我教育"
			]
		},
		{
			"title": "&quot;一切为了群众，一切依靠群众，从群众中来，到群众中去的主张变为群众的自觉行动。&quot;这是党章对（  ）的表述。",
			"answer": 3,
			"question": [
				"党的组织路线",
				"党的政治路线",
				"党的群众路线"
			]
		},
		{
			"title": "习近平总书记是在讲到作风问题时提出&quot;三严&quot;和&quot;三实&quot;的。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "批评与自我批评是我们党的最大政治优势。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "到中国共产党成立一百年时我们要建成富强民主文明和谐的社会主义现代化国家。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "提升道德境界要把思想理论建设放在首位，坚持用科学理论武装头脑。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "按规则、按制度行使权力，这是严以用权的根本。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "无论是社会主义建设规律，还是人类社会发展规律，贯穿其中最基本、最本质、最核心的是&quot;发展&quot;。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "抓好党风廉政建设和反腐败斗争，必须全党动手。各级党委对职责范围内的党风廉政建设负有全面领导责任。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "修订后的《中国共产党纪律处分条例》体现党纪严于国法、突出党纪特色，使之成为管党治党的尺子、党员不可逾越的底线。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "十八届中央纪委第六次全会要求，强化派驻监督，发挥&quot;驻&quot;的权威和&quot;派&quot;的优势，推进省区市纪委实现全面派驻。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "党的建设就是指全面从严治党，全面从严治党就是指党风廉政建设和反腐败斗争。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "深入推进党风廉政建设的&quot;牛鼻子&quot;是落实纪委的监督责任。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "全面从严治党，核心是加强党的领导，基础在全面，关键在严，要害在治。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "严肃党内生活，最根本的是认真执行党的民主集中制。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "党内决不允许搞团团伙伙、结党营私、拉帮结派，搞了就是违反组织纪律。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "党的纪律处分工作应当坚持惩前毖后、治病救人原则。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "执行党的纪律不能有任何含糊，不能让党纪党规成为纸老虎、稻草人，造成&quot;破窗效应&quot;。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "与时俱进是发展中国特色社会主义的一大法宝。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "党章是党的根本大法。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "党的领导主要是政治，思想和组织的领导。（  ）",
			"answer": 1,
			"question": [
				"正确",
				"错误"
			]
		},
		{
			"title": "预备党员的权利和义务同正式党员一样。（  ）",
			"answer": 2,
			"question": [
				"正确",
				"错误"
			]
		}
	];

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "无论在生产还是生活中，电梯的安全使用和每位职工息息相关。下列关于安全使用电梯的说法不正确的是（）。",
			"question": [
				"乘坐电梯时宜确认乘坐的电梯在检验合格有效期内；",
				"搭乘自动扶梯时应手握扶手；",
				"在发生火灾、地震等突发事件时，可以就近搭乘电梯逃生；",
				"乘坐电梯时应遵守电梯安全注意事项和警示标志的要求。"
			],
			"answer": 3
		},
		{
			"title": "职工在生产过程中发现事故隐患或者其他不安全因素，应当(  )向现场安全生产管理人员或者本单位负责人报告；接到报告的人员应当及时予以处理。",
			"question": [
				"在4小时内",
				"在2小时内",
				"在1小时",
				"立即"
			],
			"answer": 4
		},
		{
			"title": "&quot;三违&quot;是指违章指挥、违规作业、违反劳动纪律。下列属于违规作业的是（）。",
			"question": [
				"起重作业佩戴安全帽",
				"接触粉尘作业佩戴防尘口罩",
				"噪声作业佩戴耳塞",
				"未持证人员操作行车"
			],
			"answer": 4
		},
		{
			"title": "灭火器是有效地扑救建筑初起火灾的消防器材。下列关于公司内使用灭火器的说法不正确的是(  )。",
			"question": [
				"灭火器应当按月自检",
				"灭火器指针在绿色区域表示压力正常",
				"灭火器指针在红色区域表示压力偏低",
				"灭火器指针在黄色区域表示压力偏低"
			],
			"answer": 4
		},
		{
			"title": "《安全生产法》对职工的安全生产权利和义务做出了明确规定，下列说法正确的是(  )。",
			"question": [
				"职工无权对公司的安全生产工作提出建议",
				"职工发现危及人身安全的紧急情况时，有权停止作业并紧急撤离",
				"职工无权拒绝违章指挥和强令冒险作业",
				"职工无权了解其岗位存在的危险因素"
			],
			"answer": 2
		},
		{
			"title": "下列关于油锅起火扑救方法描述不正确的是(  )。",
			"question": [
				"立即用锅盖盖住起火油锅，关掉燃气",
				"将旁边切好的蔬菜或其他生冷食物沿锅边倒入锅内，关掉燃气",
				"打开油烟机尽快把火抽走",
				"使用厨房专用灭火毯盖住油锅，关掉燃气"
			],
			"answer": 3
		},
		{
			"title": "被困在电梯中时，应采取的行动下列选项中不正确的是(  )",
			"question": [
				"电话求救",
				"按响报警警铃",
				"报警后保持正确姿势、等待救援",
				"强行扒开轿厢门脱险"
			],
			"answer": 4
		},
		{
			"title": "下列关于劳动防护用品的使用说法不正确的是(  )",
			"question": [
				"操作旋转机械时应盘起长发并戴工作帽",
				"上机操作时劳保服须&quot;三紧&quot;",
				"可以自行改造劳保鞋的结构或性能",
				"设备旋转部位作业时不得戴手套"
			],
			"answer": 3
		},
		{
			"title": "因工作调动变换部门和岗位后，职工必须接受(  )安全教育培训。",
			"question": [
				"部门级",
				"班组级",
				"部门和班组两级",
				"公司级"
			],
			"answer": 3
		},
		{
			"title": "2016年国家&quot;安全生产月&quot;活动主题是(  )。",
			"question": [
				"强化安全发展观念， 提升全民安全素质 ",
				"强化红线意识， 促进安全发展 ",
				"加强安全法治， 保障安全生产 ",
				"强化安全基础， 推动安全发展 "
			],
			"answer": 1
		},
		{
			"title": "根据《工伤保险条例》，下列应当认定为工伤的情形是(  )。",
			"question": [
				"在工作时间内受到事故伤害的，应当认定为工伤",
				"在工作场所内受到事故伤害的，应当认定为工伤",
				"在工作时间和工作场所内，因做和工作无关的事受到事故伤害的",
				"在工作时间和工作场所内，因工作原因受到事故伤害的"
			],
			"answer": 4
		},
		{
			"title": "根据《工伤保险条例》：在上下班途中，受到非本人主要责任的交通事故，应当认定为工伤。下列有关&quot;上下班途中&quot;的说法不正确的是(  )。",
			"question": [
				"在合理时间内往返于工作地与住所地的上下班途中",
				"上下班途中发生交通事故申报工伤时，须出具交通事故责任认定书",
				"在合理时间内往返于工作地与父母居住地的合理路线的上下班途中",
				"下班后和朋友相约聚餐，之后返回居住地的途中"
			],
			"answer": 4
		},
		{
			"title": "职业健康安全危险源是可能导致人身伤害和（或）健康损害的根源、状态、行为或其组合。下列关于危险源辨识的说法不正确的是(  )。",
			"question": [
				"职工可以不参与岗位危险源辨识工作",
				"岗位危险源管控不到位可能会发展成安全生产事故隐患",
				"在进行危险作业前，应首先进行危险源辨识",
				"职工应了解岗位危险源及其管控措施"
			],
			"answer": 1
		},
		{
			"title": "下列不属于特种作业或特种设备作业的是(  )。",
			"question": [
				"电工作业",
				"叉车作业",
				"电动拖纸车作业",
				"电焊作业"
			],
			"answer": 3
		},
		{
			"title": "下列关于劳动防护用品的配备说法不正确的是(  )。",
			"question": [
				"从事强酸、强碱作业须配备耐酸碱手套",
				"从事对眼睛有伤害的作业必须配备护目镜",
				"从事有毒气体作业须配备防毒面罩",
				"从事电工作业必须配备防静电工作服"
			],
			"answer": 4
		},
		{
			"title": "下列关于干粉灭火器的描述不正确的是(  )。",
			"question": [
				"干粉灭火器的报废期限是10年，公司每5年更换一次",
				"使用干粉灭火器时，应拔掉保险销、对准火源根部、按下把手",
				"干粉灭火器可以用来扑灭固体物质、气体物质、液体物质和电气火灾",
				"检查干粉灭火器时只需要看压力是否正常"
			],
			"answer": 4
		},
		{
			"title": "下述火场逃生方法不正确的是(  )。",
			"question": [
				"用手巾、手帕捂住口鼻",
				"迎着火灾烟气方向逃生",
				"沿应急疏散指示标识逃生",
				"利用疏散通道逃生"
			],
			"answer": 2
		},
		{
			"title": "危险化学品（简称危化品）是指具有毒害、腐蚀、爆炸、燃烧、助燃等性质，对人体、设施、环境具有危害的剧毒化学品和其他化学品。下列关于危化品的说法不正确的是(  )。",
			"question": [
				"使用危化品前应先了解MSDS（化学品安全技术说明书）",
				"危化品包装物或容器上应粘贴或悬挂有表明危化品性质的安全标签",
				"瓶装危化品使用完毕后应及时加盖或入柜",
				"危化品使用完毕后的包装可以随意丢弃"
			],
			"answer": 4
		},
		{
			"title": "生产安全事故隐患主要是指生产经营活动过程中存在的人的不安全行为、物的不安全状态和管理上的缺陷。下列属于安全隐患的是(  )。",
			"question": [
				"紧急停机按钮故障",
				"噪声作业不佩戴耳塞",
				"新入职人员未接受安全教育培训就上岗",
				"全部选项都是"
			],
			"answer": 4
		},
		{
			"title": "安全色是传递安全信息含义的颜色，包括红、蓝、黄、绿四种颜色。下列关于安全色的描述不正确的是(  )。",
			"question": [
				"红色传递禁止、停止、危险或提示消防设备、设施的信息",
				"黄色传递注意、警告的信息",
				"蓝色传递选择性遵守规定的指令性信息",
				"绿色传递安全的提示性信息"
			],
			"answer": 3
		},
		{
			"title": "安全标志是用以表达特定安全信息的标志，由图形符号、安全色、几何形状或文字构成。下列关于安全标志的描述不正确的是(  )。",
			"question": [
				"指令标志是强制人们必须做出某种动作或采用防范措施的标志，其安全是绿色",
				"禁止标志是禁止人们不安全行为图形标志，其安全色是红色",
				"警告标志提醒人们对周围环境注意，其安全色是黄色",
				"安全标志分为禁止、警告、指令和提示标志四类"
			],
			"answer": 1
		},
		{
			"title": "职业病危害因素指职业活动中存在的各种有害的化学、物理、生物因素以及在作业过程中产生的其他职业有害因素。下列不属于职业病危害因素的是(  )。",
			"question": [
				"高温等物理因素",
				"甲醛等化学因素",
				"中毒或窒息",
				"电离辐射等放射性因素"
			],
			"answer": 3
		},
		{
			"title": "下列关于危险源和隐患关系的说法不正确的是(  )。",
			"question": [
				"危险源是隐患的母体，一般隐患来自于危险源",
				"隐患是客观上已经存在的、违反有关法规标准的实际危险源",
				"危险源若管控不到位，就会发展成隐患",
				"危险源就是隐患，隐患就是危险源"
			],
			"answer": 4
		},
		{
			"title": "下列关于道路交通机动车通行规定描述不正确的是(  )。",
			"question": [
				"变道车让本道车",
				"开关车门造成事故的，开关车门车辆负全责",
				"通过没有交通信号灯控制的交叉路口时，相对方向左转弯让右转弯",
				"狭窄山路会车时，山边车让对向来车先行"
			],
			"answer": 3
		},
		{
			"title": "对于危险性较大的重点岗位，企业应当制定重点工作岗位的现场处置方案，下列不属于现场处置方案内容的是(  )。",
			"question": [
				"危险性分析及可能发生的事故特征",
				"应急培训及预案演练",
				"应急处置程序及要点",
				"注意事项"
			],
			"answer": 2
		},
		{
			"title": "下列关于职业病危害告知说法不正确的是(  )。",
			"question": [
				"生产经营单位与职工签订劳动合同时应书面告知工作过程中可能产生的职业病危害因素",
				"存在职业病危害因素的场所应设置公告栏",
				"生产经营单位应将职业健康检查结果书面告知职工本人",
				"生产经营单位将职业病危害因素可以不以书面形式告知劳务派遣人员"
			],
			"answer": 4
		},
		{
			"title": "生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的(  )。",
			"question": [
				"安全警示标志",
				"安全标语",
				"安全符号",
				"安全图示"
			],
			"answer": 1
		},
		{
			"title": "生产经营场所应当设有符合紧急疏散要求、标志明显、保持(  )的出口。",
			"question": [
				"整洁",
				"安全",
				"畅通",
				"双管"
			],
			"answer": 3
		},
		{
			"title": "生产经营单位应当建立健全生产安全事故隐患排查治理制度，采取技术、管理措施，及时发现并消除(  )。",
			"question": [
				"事故隐患",
				"危险源",
				"风险源",
				"危害因素"
			],
			"answer": 1
		},
		{
			"title": "下列关于安全生产标准化说法不正确的是(  )。",
			"question": [
				"安全生产标准化和职业健康安全管理体系是相互矛盾的",
				"安全生产标准化是一套管理体系、方法和系统",
				"岗位达标是企业安全生产标准化的基本条件，是防范事故的有效途径",
				"安全生产标准化需要实现企业安全管理标准化、作业现场标准化和操作过程标准化"
			],
			"answer": 1
		},
		{
			"title": "安全帽是对人头部受坠落物及其他特定因素引起是伤害起防护作用的帽。下列关于安全帽的使用描述正确的是(  )。",
			"question": [
				"安全帽佩戴时必须按头围大小调整帽箍并系紧下颏带",
				"在保质期内的安全帽，帽壳出现裂纹时仍可坚持使用",
				"安全帽在经受严重冲击后，若没有明显损坏，则仍可继续使用",
				"安全帽过期后若没有明显损坏，在未经检测的情况下仍可继续使用"
			],
			"answer": 1
		},
		{
			"title": "下列关于现场急救的说法不正确的是(  )。",
			"question": [
				"触电急救药动作迅速、方法正确，使触电者尽快脱离电源",
				"被酸碱灼伤时，要立即用大量的水快速冲洗",
				"发生机械伤害时应第一时间按下急停按钮并切断电源",
				"出现骨折时应立即搬运伤者前往就医"
			],
			"answer": 4
		},
		{
			"title": "公司的安全生产理念是(  )。",
			"question": [
				"安全为先，以人为本",
				"安全第一，以人为本",
				"安全为先，数准至上",
				"安全第一，产品为先"
			],
			"answer": 1
		},
		{
			"title": "总公司《企业安全标准与评价体系》中对(  )的定义是为加强产品安全防范措施，在产品生产过程中建立相互监督、互相制约、责任到人的管理体制。",
			"question": [
				"监督制",
				"双管制",
				"监管制",
				"互管制"
			],
			"answer": 2
		},
		{
			"title": "日常生活中的交通事故报警电话是(  )。",
			"question": [
				"120",
				"119",
				"122",
				"110"
			],
			"answer": 3
		},
		{
			"title": "下列关于机动车变更车道说法不正确的是(  )。",
			"question": [
				"提前开启转向灯",
				"不得影响所借车道上的车辆或者行人正常与优先通行",
				"不得一次连续变更两条以上或者频繁变更机动车道",
				"左右两侧车辆向同一车道变更时，右侧车辆让左侧车辆先行变更"
			],
			"answer": 4
		},
		{
			"title": "根据《安全生产法》的规定，下列不属于从业人员的安全生产义务的是(  )。",
			"question": [
				"应当严格遵守本单位的安全生产规章制度和操作规程",
				"应当对本单位安全生产工作中存在的问题提出批评、检举、控告",
				"应当接受安全生产教育和培训，掌握本职工作所需的安全生产知识，提高安全生产技能",
				"应当正确佩戴和使用劳动防护用品"
			],
			"answer": 2
		},
		{
			"title": "根据《安全生产法》，下列关于工会在企业安全生产方面职责描述不正确的是(  )",
			"question": [
				"工会无权参加生产安全事故调查并提出处理意见",
				"工会依法维护职工在安全生产方面的合法权益",
				"企业制定安全生产规章制度时，应当听取工会的意见",
				"工会依法组织职工参加本单位安全生产工作的民主管理和民主监督"
			],
			"answer": 1
		},
		{
			"title": "下列不属于&quot;三违&quot;行为的是（）",
			"question": [
				"在无&quot;吸烟点&quot;标志的地方吸烟",
				"站在拖纸车上滑行",
				"发现事故隐患后及时上报",
				"擅自拆除或弃用设备安全防护装置"
			],
			"answer": 3
		},
		{
			"title": "根据《关于办理危害生产安全刑事案件适用法律若干问题的解释》，发生安全事故时，下列关于定罪量刑入罪标准情形原则上表述最为全面的是(  )。",
			"question": [
				"全部选项都是",
				"造成死亡一人以上",
				"造成重伤三人以上",
				"造成直接经济损失一百万元"
			],
			"answer": 1
		}
	];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "中国人民银行是中华人民共和国的_______。",
			"question": [
				"中央银行",
				"国家银行",
				"政策性银行"
			],
			"answer": "1"
		},
		{
			"title": "_______， 中国人民银行发布《 关于发行棕色伍元券和枣红色壹角券的通告》， 标志着第三套人民币的正式发行。",
			"question": [
				"1955 年5月10日",
				"1959 年12月1日",
				"1962 年4月17日"
			],
			"answer": "3"
		},
		{
			"title": "第一套人民币100元券有________种版别",
			"question": [
				"10",
				"11",
				"12",
				"13"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行已发行的人民币中_______有3元纸币。",
			"question": [
				"第一套",
				"第二套",
				"第三套"
			],
			"answer": "2"
		},
		{
			"title": "第四套人民币100元纸币的票面规格是________。",
			"question": [
				"155 mm x 77 mm",
				"160 mm x 77 mm",
				"165 mm x 77 mm"
			],
			"answer": "3"
		},
		{
			"title": "1999 版第五套人民币20元的安全线具有______特征。",
			"question": [
				"红外",
				"全息",
				"磁性",
				"光变"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币2005年版公告发行时间是________。",
			"question": [
				"2005 年9月1日",
				"2005 年8月31日",
				"2005 年10月1日"
			],
			"answer": "2"
		},
		{
			"title": "中国人民银行成立于_______。",
			"question": [
				"1947 年",
				"1948 年",
				"1949 年",
				"1950 年"
			],
			"answer": "2"
		},
		{
			"title": "第五套人民币的防伪特征在票面正面按_______分布。",
			"question": [
				"环形",
				"&quot;十&quot;字形",
				"三角形"
			],
			"answer": "1"
		},
		{
			"title": "第五套人民币纸币正面的无色荧光面额数字在紫外光的照射下呈_______。",
			"question": [
				"灰色",
				"绿色",
				"橘黄色",
				"金色"
			],
			"answer": "3"
		},
		{
			"title": "银行业金融机构反假货币联络会议是国务院反假货币工作联席会议的延伸, 在_______指导下开展工作。",
			"question": [
				"国务院反假货币工作联席会议",
				"中国人民银行",
				"国务院"
			],
			"answer": "1"
		},
		{
			"title": "违反《 中国人民银行残缺污损人民币兑换办法》 第三条规定的金融机构， 由中国人民银行根据_______， 依法进行处罚。",
			"question": [
				"《 中华人民共和国中国人民银行法》",
				"《 中华人民共和国人民币管理条例》",
				"《 中国人民银行假币收缴、 鉴定管理办法》"
			],
			"answer": "2"
		},
		{
			"title": "为完善币制， 满足市场货币流通的需要， 第五套人民币1999年版在第四套人民币的基础上， 新增加了_______面额纸币。",
			"question": [
				"5 元",
				"20 元",
				"50 元"
			],
			"answer": "2"
		},
		{
			"title": "第五套人民币1元硬币的直径是_______。",
			"question": [
				"25 毫米",
				"25、 5 毫米",
				"30 毫米"
			],
			"answer": "1"
		},
		{
			"title": "第二套人民币中1956年版的五元券是_______发行的？",
			"question": [
				"1960 年4月20日",
				"1961 年4月20日",
				"1962 年4月20日",
				"1963 年4月20日"
			],
			"answer": "3"
		},
		{
			"title": "第三套人民币10元采用______水印图案。",
			"question": [
				"天安门",
				"空心五星",
				"国旗五星",
				"五星布币"
			],
			"answer": "1"
		},
		{
			"title": "第三套人民币中______技术在当时处于国际领先地位。",
			"question": [
				"水印",
				"凹版印刷",
				"对印",
				"多色接线印刷"
			],
			"answer": "4"
		},
		{
			"title": "从人民币产品到流通中现金需要经过的环节是_______。",
			"question": [
				"印钞厂—— 业务库—— 发行库—— 企业和个人",
				"印钞厂—— 发行库—— 业务库—— 企业和个人",
				"印钞厂—— 企业和个人—— 发行库—— 业务库",
				"印钞厂—— 企业和个人—— 业务库—— 发行库"
			],
			"answer": "2"
		},
		{
			"title": "第四套人民币的大面额票面中_______使用了无色荧光防伪技术。",
			"question": [
				"1980 版",
				"1990 版",
				"1999 版",
				"2005 版"
			],
			"answer": "2"
		},
		{
			"title": "白水印又称为________水印。",
			"question": [
				"多层次",
				"多色调",
				"像素",
				"高光"
			],
			"answer": "4"
		},
		{
			"title": "第五套人民币部分假币使用________方式伪造凹印图文的凹凸感。",
			"question": [
				"烫印",
				"打印",
				"模具压制",
				"平印"
			],
			"answer": "3"
		},
		{
			"title": "2005 版第五套人民币100元的冠字号码是________。",
			"question": [
				"双横号码",
				"双色异型横号码",
				"双色异型竖号码",
				"横竖双号码"
			],
			"answer": "2"
		},
		{
			"title": "1990 版第四套人民币100元的无色荧光图文位于________。",
			"question": [
				"正面",
				"背面",
				"正面和背面",
				"以上均否"
			],
			"answer": "1"
		},
		{
			"title": "第五套人民币硬币外缘采用边缘滚子防伪技术的是________。",
			"question": [
				"1 元",
				"5 角",
				"1 角",
				"三者皆是"
			],
			"answer": "1"
		},
		{
			"title": "第五套人民币5角硬币的材质是________。",
			"question": [
				"钢芯镀镍",
				"黄铜合金",
				"钢芯镀铜合金"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币凹印缩微文字的字型________胶印缩微文字。",
			"question": [
				"大于",
				"等于",
				"小于"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币50元纸币的光变面额数字的颜色变化是由_______。",
			"question": [
				"蓝变金",
				"金变绿",
				"绿变蓝",
				"金变紫"
			],
			"answer": "2"
		},
		{
			"title": "鉴别人民币纸币的方法之一是&quot;手摸&quot;， 2005 版第五套人民币100元表面文字及主要图案有凹凸感， 这种&quot;凹凸&quot;效果产生于_______印刷方式。",
			"question": [
				"普通胶印",
				"雕刻凹版",
				"凸版印刷",
				"丝网印刷"
			],
			"answer": "2"
		},
		{
			"title": "我国是从第四套人民币_______版的100元、 50 元纸币上开始使用安全线技术的。",
			"question": [
				"1980 年",
				"1984 年",
				"1988 年",
				"1990 年"
			],
			"answer": "4"
		},
		{
			"title": "第五套人民币中最早使用全息磁性开窗安全线的是_______。",
			"question": [
				"1999 年的20元券",
				"1999 年的10元券",
				"1999 年的5元"
			],
			"answer": "2"
		},
		{
			"title": "第五套人民币100元和50元纸币的水印采用的是毛泽东头像， 20 元、 10 元纸币的水印是_______。",
			"question": [
				"毛泽东头像、 荷花",
				"荷花、 月季花",
				"长江三峡、 月季花",
				"荷花、 长江三峡"
			],
			"answer": "2"
		},
		{
			"title": "第五套人民币100元纸币的光变面额数字的颜色变化是由_______。",
			"question": [
				"蓝变金",
				"金变绿",
				"绿变蓝"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币1999年版_______面额纸币采用了固定水印和白水印。",
			"question": [
				"50 元、 20 元",
				"20 元、 10 元",
				"10 元、 5 元",
				"5 元、 1 元"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币1999年版_______面额纸币采用了横竖双号码。",
			"question": [
				"100 元、 50 元",
				"50 元、 20 元",
				"100 元、 10 元",
				"20 元、 1 元"
			],
			"answer": "1"
		},
		{
			"title": "2005 版第五套人民币中的_______具有白水印特征。",
			"question": [
				"100 元、 50 元",
				"100 元、 50 元、 20 元",
				"100 元、 50 元、 20 元、 10 元",
				"100 元、 50 元、 20 元、 10 元、 5 元"
			],
			"answer": "4"
		},
		{
			"title": "第五套人民币各面额纸币上的隐形面额数字在票面的_______。",
			"question": [
				"正面左下方",
				"正面右下方",
				"正面右上方",
				"正面左上方"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币主景人像采用_______技术。",
			"question": [
				"手工雕刻头像",
				"机器雕刻头像",
				"手工结合机器雕刻头像",
				"以上均不是"
			],
			"answer": "1"
		},
		{
			"title": "1999 版第五套人民币纸张中的彩色纤维是由_______纤维组成的。",
			"question": [
				"红色和黄色",
				"红色和蓝色",
				"黄色和蓝色",
				"绿色和蓝色"
			],
			"answer": "2"
		},
		{
			"title": "1999 版第五套人民币50元的竖冠字号码是_______。",
			"question": [
				"红色",
				"黑色",
				"蓝色",
				"绿色"
			],
			"answer": "1"
		},
		{
			"title": "第五套人民币正背互补对印图案需要在_______光下观察。",
			"question": [
				"紫外",
				"红外",
				"透射",
				"偏振"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币5元正面的国徽图案采用_______方式印刷。",
			"question": [
				"凸印",
				"丝印",
				"胶印",
				"凹印"
			],
			"answer": "4"
		},
		{
			"title": "2005 版第五套人民币10元安全线中的全息图案含有_______和面额数字。",
			"question": [
				"&quot;RMB&quot;字样",
				"&quot;￥&quot;字样",
				"&quot;人民币&quot;字样",
				"&quot;中国&quot;字样"
			],
			"answer": "2"
		},
		{
			"title": "从票幅看， 第五套人民币各券别的票幅宽分为_______档， 票幅长则按票面大小从100元券到5元券， 以_______毫米为级差递减。",
			"question": [
				"5、 3",
				"4、 6",
				"3、 5"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币100元正面采用了______， 具有中国传统历史文化特色和民族特色的纹饰。",
			"question": [
				"中国的漆器花纹",
				"少数民族的挑绣花纹",
				"青铜饕殄的纹路",
				"中国传统瓷器的花纹"
			],
			"answer": "1"
		},
		{
			"title": "伪造、 变造的人民币由_______统一销毁。",
			"question": [
				"国务院",
				"中国人民银行",
				"财政部"
			],
			"answer": "2"
		},
		{
			"title": "以下不属于剪贴拼凑变造币的制作手段的是_______。",
			"question": [
				"裁剪拼接",
				"剪贴挖补",
				"揭层"
			],
			"answer": "3"
		},
		{
			"title": "金融机构分支机构应将不加盖假币戳记收缴的范围严格限定于_______收缴。",
			"question": [
				"特定网点",
				"特定金融机构",
				"金融机构清分中心",
				"营业中心主管"
			],
			"answer": "3"
		},
		{
			"title": "持有人对金融机构作出的有关收缴或鉴定假币的具体行政行为有异议， 可在收到《 假币收缴凭证》 或《 货币真伪鉴定书》 之日起________个工作日内向直接监管该金融机构的中国人民银行分支机构申请行政复议， 或依法提起行政诉讼。",
			"question": [
				"15",
				"30",
				"45",
				"60"
			],
			"answer": "4"
		},
		{
			"title": "假币专用封装袋主要是用来封装________。",
			"question": [
				"收缴的假人民币纸币和假外币纸币",
				"收缴的假人民币， 包括纸币和硬币",
				"收缴的假外币和假人民币硬币"
			],
			"answer": "3"
		},
		{
			"title": "《 中国人民银行假币收缴、 鉴定管理办法》 所称外币是指在______。",
			"question": [
				"其他国家或地区流通的法定货币",
				"自由兑换货币和特别提款权",
				"我国境内可收兑的其他国家或地区的法定货币"
			],
			"answer": "3"
		},
		{
			"title": "持有人对被金融机构收缴人民币的真伪有异议的， 可向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构提出书面鉴定申请， 经鉴定为真币的， 应_______。",
			"question": [
				"由鉴定单位交收缴单位退还持有人",
				"由鉴定单位退还持有人",
				"由鉴定单位交收缴单位按照面额兑换完整券退还持有人， 收回持有人的《 假币收缴凭证》， 盖有&quot;假币&quot;戳记的人民币按损伤人民币处理",
				"由鉴定单位退还持有人， 并收回《 假币收缴凭证》"
			],
			"answer": "3"
		},
		{
			"title": "&quot;假币&quot;印章的规格为______。",
			"question": [
				"长75毫米， 宽30毫米",
				"长75毫米， 宽35毫米",
				"长80毫米， 宽30毫米",
				"长80毫米， 宽35毫米"
			],
			"answer": "1"
		},
		{
			"title": "金融机构在办理业务时发现假人民币纸币， 处理方法为________。",
			"question": [
				"应当面已统一格式的专用信封封装并在封口处加盖&quot;假币&quot;字样的戳记",
				"应当面加盖&quot;假币&quot;字样的戳记",
				"应当面以统一格式的专用袋加封"
			],
			"answer": "2"
		},
		{
			"title": "凡办理人民币存取款业务的金融机构应_______为公众兑换残缺、 污损人民币， 不得拒绝兑换。",
			"question": [
				"无偿",
				"按面值的5 % 收取兑换费用",
				"按面值的10 % 收取兑换费用"
			],
			"answer": "1"
		},
		{
			"title": "人民币纸币票面裂口1处， 长度超过_______毫米以上不宜流通。",
			"question": [
				"5",
				"10",
				"15"
			],
			"answer": "2"
		},
		{
			"title": "人民币纸币票面裂口2处以上， 长度每处超过______毫米以上的不宜流通。",
			"question": [
				"3",
				"4",
				"5",
				"6"
			],
			"answer": "3"
		},
		{
			"title": "_______对残缺、 污损人民币的兑换工作实施监督管理。",
			"question": [
				"中国人民银行",
				"中国人民银行指定的金融机构",
				"中国银行业监督管理委员会"
			],
			"answer": "1"
		},
		{
			"title": "一次性鉴定多张假币时， 下列说法正确的是_______。",
			"question": [
				"一张货币真伪鉴定书， 最多只能鉴定5张货币",
				"一次鉴定的货币有不同券别或版别， 应按券别或版别分别填写， 可混用一张鉴定书",
				"一次性鉴定多张假币， 假币版别、 券别相同， 且冠字号码连号或前6位相同， 可以合并张数、 面额计算总张数和总面额， 填写其中一个冠字号码",
				"一次性鉴定多张假币， 只要版别或券别不同， 就应分别开具货币真伪鉴定书"
			],
			"answer": "3"
		},
		{
			"title": "金融机构对收缴的假币应_______。",
			"question": [
				"单独管理， 并建立假币收缴代保管登记簿",
				"与残损券放在一起， 并建立假币收缴代保管登记簿",
				"与完整券放在一起， 并建立假币收缴代保管登记簿",
				"单独管理， 但无需建立假币收缴代保管登记簿"
			],
			"answer": "1"
		},
		{
			"title": "鉴定机构进行货币真伪鉴定后应出具中国人民银行统一印制的_______。",
			"question": [
				"假币收缴凭证",
				"货币真伪鉴定书",
				"假币没收收据",
				"假币罚没单"
			],
			"answer": "2"
		},
		{
			"title": "收缴单位应当自收到鉴定单位通知之日起_______个工作日内， 将需要鉴定的货币送达鉴定单位。",
			"question": [
				"2",
				"3",
				"4",
				"5"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行分支机构和中国人民银行授权的鉴定机构应当自受理鉴定之日起________ 个工作日内， 出具《 货币真伪鉴定书》。",
			"question": [
				"3",
				"10",
				"15",
				"20"
			],
			"answer": "3"
		},
		{
			"title": "持有人对被金融机构收缴的外币的真伪有异议的， 可向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构提出鉴定申请， 经鉴定为真币的， 应_______。",
			"question": [
				"由鉴定单位交收缴单位退还持有人",
				"由鉴定单位退还持有人",
				"由鉴定单位交收缴单位退还持有人， 并收回《 假币收缴凭证》",
				"由鉴定单位退还持有人， 并收回《 假币收缴凭证》"
			],
			"answer": "3"
		},
		{
			"title": "以下属于《 中国人民银行特殊残缺污损人民币鉴定书》 要素的是______。",
			"question": [
				"兑换结果",
				"持有人签名",
				"持有人姓名"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行各分支机构和中国人民银行授权的鉴定机构鉴定货币真伪时， 应当至少有_______名鉴定人员同时参加， 并作出鉴定结论。",
			"question": [
				"1",
				"2",
				"3",
				"4"
			],
			"answer": "2"
		},
		{
			"title": "中国人民银行各分支机构在复点金融机构解缴的回笼款时发现假人民币， 应向解缴单位开具________， 并要求其补足等额人民币回笼款。",
			"question": [
				"假币没收收据",
				"货币真伪鉴定书",
				"假币收缴凭证"
			],
			"answer": "1"
		},
		{
			"title": "持有人对中国人民银行分支机构作出的有关鉴定假币的具体行政行为有异议， 可在收到《 货币真伪鉴定书》 之日起________ 个工作日内向其上一级机构申请行政复议， 或依法提起行政诉讼。",
			"question": [
				"60",
				"30",
				"45",
				"15"
			],
			"answer": "1"
		},
		{
			"title": "《 中国人民银行假币收缴、 鉴定管理办法》 是从_______开始实施的。",
			"question": [
				"2003 年7月1日",
				"2004 年4月9日",
				"2004 年8月1日",
				"2002 年12月3日"
			],
			"answer": "1"
		},
		{
			"title": "纸币呈正十字形， 票面缺少四分之一的， 按原面额的______兑换。",
			"question": [
				"全额",
				"四分之三",
				"一半"
			],
			"answer": "3"
		},
		{
			"title": "金融机构应按照中国人民银行的有关规定， 将兑现的残缺、 污损人民币______。",
			"question": [
				"中国银行业监督管理委员会",
				"金融机构留存",
				"交存当地人民银行分支机构"
			],
			"answer": "3"
		},
		{
			"title": "根据《 公安部、 中国人民银行关于进一步加强反假币工作的通知》（ 公通字〔 2009〕 43 号） 文件要求， 金融机构应该_______向人民银行解缴移送临柜收缴的假币。",
			"question": [
				"按季度",
				"按月",
				"按旬",
				"按年"
			],
			"answer": "2"
		},
		{
			"title": "持有人对被金融机构收缴货币的真伪有异议的， 可向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构提出鉴定申请， 中国人民银行及其授权的鉴定机构在办理货币真伪鉴定时， 对盖有&quot;假币&quot;字样戳记的人民币纸币， 经鉴定为真币的， 由鉴定单位交收缴单位按照面额兑换完整券退还持有人， 收回持有人的《 假币收缴凭证》， 盖有&quot;假币&quot;戳记的人民币应_______。",
			"question": [
				"按损伤人民币处理",
				"按假币上缴当地人民银行",
				"按真币退还给持有人",
				"金融机构予以销毁"
			],
			"answer": "Ａ"
		},
		{
			"title": "办理人民币存取款业务的金融机构一次收缴持有人同一面额_______张以上假人民币时， 如假人民币冠字号码前6位一致， 应在&quot;假币收缴凭证&quot;中列明。",
			"question": [
				"2",
				"3",
				"4",
				"5"
			],
			"answer": "Ａ"
		},
		{
			"title": "金融机构一次收缴持有人同一面额两张或两张以上假人民币时， 如冠字号码_______不一致， 应按照不同的冠字号码分类填写假币收缴凭证。",
			"question": [
				"前2位",
				"前4位",
				"前6位",
				"前8位"
			],
			"answer": "3"
		},
		{
			"title": "《 中国人民银行假币收缴、 鉴定管理办法》 是从______开始实施的。",
			"question": [
				"2003 年7月1日",
				"2004 年4月9日",
				"2004 年8月1日",
				"2002 年12月3日"
			],
			"answer": "1"
		},
		{
			"title": "&quot;假币&quot;印章篆刻内容为________。",
			"question": [
				"&quot;假币&quot;’ 字样， 所在地省、 自治区、 直辖市简称和日期",
				"&quot;假币&quot;字样， 银行行号标识代码和日期",
				"&quot;假币&quot;所在地省、 自治区、",
				"所在地省、 自治区、 直辖市简称， 银行行号标识代码和日期"
			],
			"answer": "3"
		},
		{
			"title": "某银行收缴了1张第五套2005年版100元面额人民币， 其所开具的《 假币收缴凭证》 中的&quot;券别&quot;一栏， 应填写_______。",
			"question": [
				"第五套",
				"100 元",
				"2005"
			],
			"answer": "2"
		},
		{
			"title": "《 假人民币没收收据》 第_______联交假币持有人。",
			"question": [
				"一",
				"二",
				"三",
				"四"
			],
			"answer": "3"
		},
		{
			"title": "假币专用封装袋的规格为_______。",
			"question": [
				"22 cm(长) x 14 cm（ 宽）",
				"25 cm(长) x 14、 5 cm（ 宽）",
				"20 cm(长) x 15、 5 cm（ 宽）_",
				"25 cm(长) x 15、 5 cm（ 宽）"
			],
			"answer": "1"
		},
		{
			"title": "_______不是假币收缴凭证需填写的项目。",
			"question": [
				"券别",
				"持有人联系电话",
				"版别",
				"持有人证件编号"
			],
			"answer": "2"
		},
		{
			"title": "下列哪项行为属于金融机构不履行人民币收付业务的法定职责_______。",
			"question": [
				"拒绝为公众调剂人民币券别",
				"拒绝兑换残缺或污损的人民币",
				"两者皆是"
			],
			"answer": "3"
		},
		{
			"title": "以下不属于《 中国人民银行特殊残缺污损人民币鉴定书》 要素的是_______。",
			"question": [
				"金融机构名称",
				"业务公章",
				"持有人身份证号码"
			],
			"answer": "3"
		},
		{
			"title": "每张《 假币收缴凭证》 最多可以填写_______个不同的冠字号码。",
			"question": [
				"1",
				"2",
				"5",
				"8"
			],
			"answer": "3"
		},
		{
			"title": "金融机构在办理业务时发现假人民币而未收缴的， 中国人民银行可对该金融机构处以_______。",
			"question": [
				"1 千元以上5千元以下罚款",
				"1 千元以上5万元以下罚款",
				"1 万元以上5万元以下罚款",
				"5 万元以上罚款"
			],
			"answer": "2"
		},
		{
			"title": "各商业银行要对使用的现钞处理设备的鉴伪能力定期进行技术升级， 一般每年不少于______次。",
			"question": [
				"1",
				"2",
				"3",
				"5"
			],
			"answer": "¬ B¬"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》（ GB - 16999 - 2010） 将点验钞机按采用防伪技术的鉴别能力和相应的评测结果分为如下几个等级________。",
			"question": [
				"A级、 B级和C级",
				"1 级、 2 级和3级",
				"I级、 II级和III级"
			],
			"answer": "1"
		},
		{
			"title": "根据《 人民币鉴别仪通用技术条件》(GB_16999 - 2010)， 鉴别仪使用寿命一般为________年。",
			"question": [
				"1",
				"2",
				"3",
				"4"
			],
			"answer": "3"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 中定义的A级验钞仪要求使用大于等于_______种鉴别技术。",
			"question": [
				"12",
				"9",
				"5",
				"4"
			],
			"answer": "2"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 中定义的点验钞机的冠字号码误识率应小于等于_______。",
			"question": [
				"0.01 %",
				"0.02 % ",
				"0.03 %",
				"0.04 %"
			],
			"answer": "3"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 中定义的A级点验钞机应具有券别、 套别及版别识别能力中的_______种。",
			"question": [
				"1",
				"2",
				"3",
				"4"
			],
			"answer": "3"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 于_______年发布。",
			"question": [
				"2011",
				"2012",
				"2010",
				"2013"
			],
			"answer": "3"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》（ GB_16999 - 2010） 中将人民币鉴别仪的鉴别技术种类分为_______种。",
			"question": [
				"10",
				"12",
				"15",
				"8"
			],
			"answer": "2"
		},
		{
			"title": "《 中国人民银行办公厅关于做好商业银行人民币现钞处理设备管理工作的通知》（ 银办发〔 2009〕 125 号) 中规定： 各商业银行使用的现钞处理设备如遇特殊情况要及时进行测试升级， 对不能识别假币的设备， 要督促生产厂家尽快进行升级， 不能升级的处理办法为_______。",
			"question": [
				"停止使用",
				"厂家召回更换",
				"可继续使用， 但要进行手工清分"
			],
			"answer": "1"
		},
		{
			"title": "金融机构清分中心对发现的假币应实行账实分管， 假币实物的保管人员与________ 保管人员不的相互兼任。",
			"question": [
				"假币印章",
				"假币代保管登记薄",
				"银行业金融机构现金中心发现假币解缴单",
				"假币收缴登记薄"
			],
			"answer": "2"
		},
		{
			"title": "现金清分业务委托他行代理的金融机构, 由代理行清分并记录冠字号码的， 代理行应在_______个工作日内向被代理行提交检索结果， 通过付款网点向客户反馈结果。",
			"question": [
				"2",
				"3",
				"5"
			],
			"answer": "1"
		},
		{
			"title": "假币浓度是指人民银行清分、 复点中发现的假币张数占处理该银行现金张数总量的_______。",
			"question": [
				"十万分比",
				"百万分比",
				"千万分比"
			],
			"answer": "2"
		},
		{
			"title": "《 中国人民银行办公厅关于银行业金融机构对外误付假币专项治理工作指导意见》（ 银办发〔 2013〕 14 号） 中要求银行业金融机构采集到的冠字号码数据信息保存时间是_______。",
			"question": [
				"至少保存3个月",
				"至少保存6个月",
				"至少保存1个月",
				"至少保存12个月"
			],
			"answer": "1"
		},
		{
			"title": "金融机构清分中心在金融机构网点缴存的现金中发现假币， 假币实物由_______直接收缴。",
			"question": [
				"清分中心的上级部门",
				"清分中心",
				"当地人民银行分支机构",
				"中国人民银行总行"
			],
			"answer": "2"
		},
		{
			"title": "金融机构现金管理部门应于每月____日前将本行清分中心发现的假币集中整理， 解缴到当地人民银行中心支行。",
			"question": [
				"5",
				"15",
				"30",
				"10"
			],
			"answer": "2"
		},
		{
			"title": "金融机构清分中心在上门收款的企事业单位缴存现金中发现假币， 假币实物由清分中心_______。",
			"question": [
				"鉴别后交还企事业单位",
				"直接收缴",
				"代为保管"
			],
			"answer": "2"
		},
		{
			"title": "假币专用封装袋的材质为________。",
			"question": [
				"厚牛皮纸",
				"白色信封",
				"票据交换专用信封"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行分支机构和中国人民银行授权的鉴定机构在提供货币真伪鉴定服务时， 费用________。",
			"question": [
				"收取被鉴定货币总额的1 % 的手续费",
				"每鉴定一次收取手续费5元",
				"免费"
			],
			"answer": "3"
		},
		{
			"title": "有全国性分支机构的银行从2013年起， 至多用_______时间实现县级及以下银行网点付出现金的全额清分。",
			"question": [
				"5 年至7年",
				"3 到5年",
				"8 到10年",
				"4 到6年"
			],
			"answer": "3"
		},
		{
			"title": "银行业金融机构涉假冠字号码查询申请表、 再查询申请表和查询结果通知书应自成类别， 以业务发生时间先后为序， 按年装订， 保存期为________。",
			"question": [
				"1 年",
				"3 年",
				"5 年",
				"半年"
			],
			"answer": "3"
		},
		{
			"title": "对首次查询结果有异议的， 查询受理单位应告知查询人在接到查询结果通知书后________ 个工作日内申请再查询。",
			"question": [
				"3",
				"5",
				"20"
			],
			"answer": "1"
		},
		{
			"title": "现金整点业务委托他行代理的金融机构， 采取代理行后台清分与记录存储方式的， 记录网点受理检索申请， 按事先协议约定的方式， 向代理行提出检索要求， 代理行在________ 个工作日内向本行提交检索结果， 通过记录网点向客户反馈结果。",
			"question": [
				"1",
				"2",
				"3"
			],
			"answer": "2"
		},
		{
			"title": "金融机构冠字号码查询系统应为________ 预留数据接口。",
			"question": [
				"人民银行",
				"其它银行业余金融机构",
				"设备供应商"
			],
			"answer": "1"
		},
		{
			"title": "银行业金融机构和涉假冠字号码查询申请者________ 委托第三方代理查询。",
			"question": [
				"可以",
				"不可以",
				"必须经人民银行批准后才可以",
				"必须经查询单位同意后才可以"
			],
			"answer": "1"
		},
		{
			"title": "冠字号码查询信息系统的数据应至少保存_______。",
			"question": [
				"1 个月",
				"2 个月",
				"3 个月"
			],
			"answer": "3"
		},
		{
			"title": "银行业金融机构与客户之间的涉假纠纷由_______举证。",
			"question": [
				"银行业金融机构",
				"客户",
				"人民银行"
			],
			"answer": "1"
		},
		{
			"title": "再查询结果应通过_______告知查询人。",
			"question": [
				"查询结果通知书",
				"再查询结果通知书",
				"电话"
			],
			"answer": "1"
		},
		{
			"title": "查询受理单位与再查询受理单位均应建立_______。",
			"question": [
				"查询登记簿",
				"投诉登记簿",
				"受理登记簿"
			],
			"answer": "1"
		},
		{
			"title": "查询受理单位详细记录每笔查询业务操作员、 查询业务复核（ 监督） 员、 查询号码、 查询业务时间、 ______等。",
			"question": [
				"查询方式",
				"查询详情",
				"查询结果"
			],
			"answer": "3"
		},
		{
			"title": "查询申请表、 再查询申请表和查询结果通知书应自成类别， 以业务发生时间先后为序， 按年装订， 保存期为 年。",
			"question": [
				"5",
				"10",
				"20"
			],
			"answer": "1"
		},
		{
			"title": "查询申请表、 _____和查询结果通知书应自成类别， 以业务发生时间先后为序， 按年装订， 保存期为5年。",
			"question": [
				"申请人申请资料",
				"再查询申请表",
				"申请书"
			],
			"answer": "2"
		},
		{
			"title": "查询人应在办理取款业务之日起_______个工作日内（ 含取款当日） 携带有效证件等到查询受理单位申请银行业金融机构涉假冠字号码查询。",
			"question": [
				"20",
				"10",
				"45",
				"90"
			],
			"answer": "1"
		},
		{
			"title": "银行业金融机构涉假冠字号码查询受理单位应在受理之日起_______个工作日内办结。",
			"question": [
				"3",
				"5",
				"7",
				"15"
			],
			"answer": "1"
		},
		{
			"title": "查询人对首次银行业金融机构涉假冠字号码查询结果有异议的， 查询受理单位应告知查询人在接到查询结果通知书后______个工作日内持查询结果通知书和相关资料向受理单位的上级行或者人民银行当地分支机构申请再查询。",
			"question": [
				"3",
				"7",
				"15",
				"30"
			],
			"answer": "1"
		},
		{
			"title": "根据《 中国人民银行办公厅关于做好2014年下阶段反假货币工作的通知》（ 银办发〔 2014〕 113 号） 文件要求， 银行业金融机构应在_______年内确保实现在用存取款一体机付出现钞的冠字号码可查询。",
			"question": [
				"2014",
				"2015",
				"2017",
				"2016"
			],
			"answer": "1"
		},
		{
			"title": "银行业金融机构涉假冠字号码再查询受理单位因情况复杂不能在规定期限内完成的， 经相关负责人核批后， 可延长至_______个工作日， 并向查询人说明原因。",
			"question": [
				"15",
				"20",
				"30",
				"60"
			],
			"answer": "3"
		},
		{
			"title": "冠字号码再查询受理单位收到查询人提交的书面再查询申请后， 应当自受理之日起_______个工作日内， 开展调查与处理工作。",
			"question": [
				"7",
				"10",
				"15",
				"30"
			],
			"answer": "3"
		},
		{
			"title": "冠字号码信息在金融机构本地及上传到信息系统后至少应保存_______个月， 并确保数据的安全。",
			"question": [
				"1",
				"2",
				"3"
			],
			"answer": "3"
		},
		{
			"title": "对于符合规定的查询申请， 查询受理单位应在受理之日起_______个工作日内办结， 如有特殊情况需延长办理时间的， 应提前告知查询人。",
			"question": [
				"3",
				"5",
				"7"
			],
			"answer": "1"
		},
		{
			"title": "申请冠字号码查询不需要提供的资料为_______。",
			"question": [
				"有效证件",
				"假币实物或《 假币收缴凭证》",
				"单位介绍信"
			],
			"answer": "3"
		},
		{
			"title": "查询受理单位应就查询结果填制《 人民币冠字号码查询结果通知书》 一式两联， 查询人签字确认后， 第一联_______， 第二联_______。",
			"question": [
				"查询受理单位存档备查， 交查询人",
				"交查询人， 查询受理单位存档备查",
				"查询受理单位存档备查， 交当地中国人民银行"
			],
			"answer": "1"
		},
		{
			"title": "对于存储的冠字号码能与取款人取款业务信息关联的， 查询受理单位在履行查询程序后， 应在《 查询结果通知书》 中列示该笔取款_______冠字号码及其冠字号码图片。",
			"question": [
				"部分",
				"所有",
				"前十个"
			],
			"answer": "2"
		},
		{
			"title": "再查询受理单位收到查询人提交的书面再查询申请后， 应当自受理之日起_______个工作日内， 开展调查与处理工作。",
			"question": [
				"15",
				"20",
				"30"
			],
			"answer": "1"
		},
		{
			"title": "再查询受理单位收到查询人提交的书面再查询申请后， 因情况复杂不能在规定期限内完成的， 经相关负责人核批后， 可延长至_______个工作日， 并向查询人说明原因。",
			"question": [
				"15",
				"20",
				"30"
			],
			"answer": "3"
		},
		{
			"title": "查询受理单位应详细记录每笔查询业务操作员、 查询业务复核（ 监督） 员、 _______、 查询业务时间、 查询结果等。",
			"question": [
				"查询冠字号码",
				"查询业务方式",
				"查询详情"
			],
			"answer": "1"
		},
		{
			"title": "金融机构在冠字号码查询系统建成以前， 必须按照相关要求， 按时保证_______。",
			"question": [
				"后台查询",
				"实时查询",
				"单机查询"
			],
			"answer": "3"
		},
		{
			"title": "冠字号码查询分类贴标工作中， 自动柜员机通过冠字号码查询系统(软件)， 无法在假币纠纷中一一对应地向客户提供取出现钞的冠字号码， 但可提供业务发生当天(或时段) 该设备内各钞箱所有现钞的冠字号码(文本及图像信息)， 应张贴_______。",
			"question": [
				"黄标",
				"红标",
				"蓝标"
			],
			"answer": "1"
		},
		{
			"title": "银行业金融机构涉假冠字号码查询查询人如对处理结果或处理程序有异议的， 可在收到处理结果后________个工作日内向受理查询网点的上级行或人民银行当地分支机构投诉。",
			"question": [
				"7",
				"15",
				"3",
				"30"
			],
			"answer": "1"
		},
		{
			"title": "查询人如委托第三方代理冠字号码查询， 代理查询人除应提供规定的材料外， 还应提供_______。",
			"question": [
				"本人有效合法证件",
				"第三方授权委托书",
				"本人无犯罪证明",
				"人民银行授权书"
			],
			"answer": "1"
		},
		{
			"title": "《 中国人民银行办公厅关于银行业金融机构对外误付假币专项治理工作的指导意见》（ 银发办2013 14 号） 中提到专项治理工作的总体目标之一是以______为手段， 解决银行涉假币纠纷的举证和责任认定问题。",
			"question": [
				"银行对外支付现金的全额清分",
				"冠字号码查询",
				"点验钞设备升级",
				"反假货币宣传"
			],
			"answer": "2"
		},
		{
			"title": "________， 第八届全国人民代表大会第三次会议通过了《 中华人民共和国中国人民银行法》。",
			"question": [
				"1949 年10月",
				"1956 年7月",
				"1995 年3月"
			],
			"answer": "3"
		},
		{
			"title": "________ 为国务院反假货币工作联席会议的牵头单位________ 为联席会议招募人。",
			"question": [
				"国务院， 国务院总理",
				"中国人民银行， 中国人民银行行长",
				"国务院， 中国人民银行行长"
			],
			"answer": "2"
		},
		{
			"title": "国务院反假货币工作联席会议第_______次联络员会议中， 提出建立银行业金融机构反假货币联络机制。",
			"question": [
				"42",
				"44",
				"46"
			],
			"answer": "2"
		},
		{
			"title": "《 公安部、 中国人民银行关于进一步加强反假币工作的通知》（ 公通字〔 2009〕 43 号） 中要求： 金融机构一次性发现假人民币面额_______， 应当立即通报公安机关。",
			"question": [
				"200 元（ 含） 以上的",
				"400 元（ 含） 以上的",
				"500 元（ 含） 以上的",
				"1000 元（ 含） 以上的"
			],
			"answer": "3"
		},
		{
			"title": "《 公安部、 中国人民银行关于进一步加强反假币工作的通知》（ 公通字〔 2009〕 43 号） 中要求： 金融机构一次性发现假人民币面额200元（ 含） 以上的， 应当_______将有关情况通报公安机关。",
			"question": [
				"立即",
				"当天",
				"2 个工作日内",
				"3 个工作日内"
			],
			"answer": "2"
		},
		{
			"title": "中国人民银行授权的鉴定机构， 应当在营业场所公示_______。",
			"question": [
				"中国人民银行授权证书",
				"反假货币上岗资格证书",
				"反假货币鉴定资格证书",
				"反假货币培训资格证书"
			],
			"answer": "1"
		},
		{
			"title": "________ 明确规定， 持有人对被收缴货币的真伪有异议， 可以自收缴之日起3个工作日内， 持《 假币收缴凭证》 直接或通过收缴单位向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构提出书面鉴定申请。",
			"question": [
				"《 中华人民共和国刑法》",
				"《 中华人民共和国中国人民银行法》",
				"《 中华人民共和国人民币管理条例》",
				"《 中国人民银行假币收缴、 鉴定管理办法》"
			],
			"answer": "4"
		},
		{
			"title": "人民银行分支机构应对开办行办理存取现金业务， 实行预约管理。 开办行办理存取现金业务， 应提前_______工作日向人民银行分支机构预约存取现金的时间、 金额、 券别。",
			"question": [
				"一个",
				"二个",
				"三个"
			],
			"answer": "1"
		},
		{
			"title": "人民银行分支机构办理假币接收业务， 打印的《 假币收入凭证》， 一联_______， 一联用于登记假币登记簿。",
			"question": [
				"交上级人民银行",
				"与假币实物一起留存",
				"交假币解缴单位"
			],
			"answer": "3"
		},
		{
			"title": "假币处置权属于_______。",
			"question": [
				"公安部",
				"中国人民银行",
				"各商业银行",
				"国务院"
			],
			"answer": "2"
		},
		{
			"title": "根据《 人民币鉴别仪通用技术条件》（ GB_16999 - 2010）， 人民币鉴别仪按照鉴别方式分为_______。",
			"question": [
				"动态鉴别仪和静态鉴别仪",
				"磁性鉴别仪和非磁性鉴别仪",
				"A类鉴别仪和B类鉴别仪",
				"号码识别鉴别仪和非号码识别鉴别仪"
			],
			"answer": "1"
		},
		{
			"title": "办理人民币存取款业务的金融机构一次收缴持有人同一面额_______张以上假人民币时， 如假人民币冠字号码前6位一致， 应在&quot;假币收缴凭证&quot;中列明。",
			"question": [
				"2",
				"3",
				"4",
				"5"
			],
			"answer": "1"
		},
		{
			"title": "金融机构应组织对本机构所辖网点前一日上传的冠字号码信息的_______进行核查。",
			"question": [
				"有效性",
				"及时性",
				"完整性"
			],
			"answer": "3"
		},
		{
			"title": "第四套人民币5角、 2 角、 1 角图文采用了_______印刷方式。",
			"question": [
				"正背面凹印",
				"正面凹印",
				"正背面胶印",
				"背面凹印"
			],
			"answer": "3"
		},
		{
			"title": "金融机构应于_______前， 实现取款机、 存取款一体机及柜台渠道记录的冠字号码集中到地市分行或省分行统一管理。",
			"question": [
				"2013 年底",
				"2014 年底",
				"2015 年底"
			],
			"answer": "3"
		},
		{
			"title": "金融机构清分中心操作员在清分回笼现金中发现可疑的人民币， 应立即向_______报告， 并换人复核。",
			"question": [
				"分管行长",
				"当地人民银行货币金银部门",
				"现场负责人"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币主景人像采用_______技术。",
			"question": [
				"手工雕刻头像",
				"机器雕刻头像",
				"手工结合机器雕刻头像",
				"以上均不是"
			],
			"answer": "1"
		},
		{
			"title": "金融机构清分中心在网点缴存的现金中发现假币， 假币实物由清分中心直接收缴， 指定专人保管， 出具_______， 由差错网点的上级支行登记后处理。",
			"question": [
				"银行业金融机构现金清分中心发现假币解缴单",
				"假币收缴凭证",
				"差错通知单"
			],
			"answer": "3"
		},
		{
			"title": "办理人民币存取款业务的金融机构应当根据_______的原则， 办理人民币券别调剂业务。",
			"question": [
				"收益最大化",
				"合理需要",
				"供需严格匹配"
			],
			"answer": "2"
		},
		{
			"title": "各金融机构应按照&quot;成熟一批， 张贴一批&quot;的原则， 逐步推进分类贴标工作。 于_______年底前完成所有存取款一体机和取款机的分类贴标工作， _______年底前完成所有拒台的分类贴标工作。",
			"question": [
				"2014， 2016",
				"2015， 2016",
				"2014， 2015"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币1元、 5 角、 1 角硬币背面主景图案分别是_______。",
			"question": [
				"菊花、 梅花、 牡丹花",
				"牡丹花、 荷花、 兰花",
				"菊花、 荷花、 兰花"
			],
			"answer": "3"
		},
		{
			"title": "《 中国人民银行、 中国银行业监督委员会关于进一步加强人民币收付业务管理的通知》 要求督促金融机构建立货币信息公示栏， 目的是_______。",
			"question": [
				"及时公示人民币有关防伪特征",
				"提示客户增强防范识假意识",
				"两者皆是"
			],
			"answer": "3"
		},
		{
			"title": "国务院反假货币工作联席会议为定期会议制度， 原则上每_______年召开一次会议。",
			"question": [
				"1",
				"2",
				"3"
			],
			"answer": "2"
		},
		{
			"title": "下面关于&quot;假币&quot; 印章使用说法正确的是_______。",
			"question": [
				"10 元（ 含10元） 以上的&quot;假币&quot; 实物需要加盖&quot;假币&quot; 印章， 10 元以下的假币印章不需要加盖",
				"具有货币真伪鉴定资质的机构才可以获得并使用&quot;假币&quot; 印章",
				"在收缴假币时， 应当客户面在假币实物上加盖&quot;假币&quot; 印章",
				"加盖&quot;假币&quot; 印章的货币， 经鉴定为真币时， 应将该货币连同货币真伪鉴定书一同交由持币人"
			],
			"answer": "3"
		},
		{
			"title": "金融机构对收缴的假币应_______。",
			"question": [
				"单独管理， 并建立假币收缴代保管登记簿",
				"与残损券放在一起， 并建立假币收缴代保管登记簿",
				"与完整券放在一起， 并建立假币收缴代保管登记簿",
				"单独管理， 但无需建立假币收缴代保管登记簿"
			],
			"answer": "1"
		},
		{
			"title": "人民银行总行决定从_______年10月起， 在全国范围内开展金融机构清分中心发现假币上缴人民银行工作。",
			"question": [
				"2011",
				"2012",
				"2013",
				"2014"
			],
			"answer": "3"
		},
		{
			"title": "1999 版第五套人民币20元的安全线具有_______特征。",
			"question": [
				"红外",
				"全息",
				"磁性",
				"光变"
			],
			"answer": "3"
		},
		{
			"title": "50 元和100元两种券别人民币最早是在_______人民币中开始出现的。",
			"question": [
				"第一套",
				"第二套",
				"第三套"
			],
			"answer": "1"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 中定义的点验钞机的冠字号码误识率应小于等于_______。",
			"question": [
				"0.01 %",
				"0.02 %",
				"0.03 %",
				"0.04 %"
			],
			"answer": "3"
		},
		{
			"title": "银行业金融机构缴存人民银行发行库的已清分完整券投放到另一家银行业金融机构后， 长短款、 假币等差错责任由_______承担。",
			"question": [
				"人民银行",
				"实施清分操作的一方",
				"清分券接受行"
			],
			"answer": "2"
		},
		{
			"title": "《 人民币鉴别仪通用技术条件》(GB_16999 - 2010) 定义的误辨率是指_______。",
			"question": [
				"真币辨为假币的张数与实际清点真币张数的比率",
				"未辨出的假币张数与实际清点假币张数的比率",
				"发生冠字号码误识的纸币数量与实际识别纸币数量的比率"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行发行新版人民币， 应当报_______批准。 因防伪或者其他原因， 需要改变人民币的印制材料、 技术或者工艺的， 由_______决定。",
			"question": [
				"全国人大， 国务院",
				"国家主席， 国务院",
				"国务院， 中国人民银行"
			],
			"answer": "3"
		},
		{
			"title": "第五套人民币部分假币使用烫印方法伪造_______。",
			"question": [
				"水印",
				"安全线",
				"手感线",
				"隐形图案"
			],
			"answer": "2"
		},
		{
			"title": "1999 版第五套人民币100元的冠字号码是由_______印刷的。",
			"question": [
				"一组凹印， 另一组胶印",
				"一组凸印， 另一组胶印",
				"两组均为凹印",
				"两组均为凸印"
			],
			"answer": "4"
		},
		{
			"title": "某银行收缴了1张第五套2005年版100元面额人民币， 其所开具的《 假币收缴凭证》 中的&quot;券别&quot;一栏， 应填写_______。",
			"question": [
				"第五套",
				"100 元",
				"2005"
			],
			"answer": "2"
		},
		{
			"title": "《 中国人民银行假币收缴、 鉴定管理办法》 所称外币是指在_______。",
			"question": [
				"其他国家或地区流通的法定货币",
				"自由兑换货币和特别提款权",
				"我国境内可收兑的其他国家或地区的法定货币"
			],
			"answer": "3"
		},
		{
			"title": "根据《 人民币鉴别仪通用技术条件》(GB_16999 - 2010)， 鉴别仪使用寿命一般为_______年。",
			"question": [
				"1",
				"2",
				"3",
				"4"
			],
			"answer": "3"
		},
		{
			"title": "金融机构清分中心对发现的假币应实行账实分管， 假币实物的保管人员与_______保管人员不得相互兼任。",
			"question": [
				"假币印章",
				"假币代保管登记簿",
				"银行业金融机构现金清分中心发现假币解缴单",
				"假币收缴登记簿"
			],
			"answer": "2"
		},
		{
			"title": "现金清分业务委托他行代理的金融机构, 由代理行清分并记录冠字号码的， 代理行应在_______个工作日内向被代理行提交检索结果， 通过付款网点向客户反馈结果。",
			"question": [
				"2",
				"3",
				"5"
			],
			"answer": "1"
		},
		{
			"title": "国务院反假货币工作联席会议为定期会议制度， 原则上每_______年召开一次会议。",
			"question": [
				"1",
				"2",
				"3"
			],
			"answer": "2"
		},
		{
			"title": "_______元及以下面额， 如不适合使用机械清分， 可以组织手工清分。",
			"question": [
				"5",
				"10",
				"20"
			],
			"answer": "1"
		},
		{
			"title": "金融机构清分中心在金融机构网点缴存的现金中发现假币， 假币实物由_______直接收缴。",
			"question": [
				"清分中心的上级部门",
				"清分中心",
				"当地人民银行分支机构",
				"中国人民银行总行"
			],
			"answer": "2"
		},
		{
			"title": "持有人对金融机构认定的兑换结果有异议的， 可携带特殊残缺、 污损人民币实物和金融机构出具的认定证明到_______申请鉴定。",
			"question": [
				"金融机构的上级机构",
				"人民银行授权的金融机构",
				"人民银行分支机构"
			],
			"answer": "3"
		},
		{
			"title": "金融机构清分中心在网点缴存的现金中发现假币， 假币实物由清分中心直接收缴， 指定专人保管， 出具_______， 由差错网点的上级支行登记后处理。",
			"question": [
				"银行业金融机构现金清分中心发现假币解缴单",
				"假币收缴凭证",
				"差错通知单"
			],
			"answer": "3"
		},
		{
			"title": "1999 版第五套人民币50元的竖冠字号码是_______。",
			"question": [
				"红色",
				"黑色",
				"蓝色",
				"绿色"
			],
			"answer": "1"
		},
		{
			"title": "《 假人民币没收收据》 第_______联交假币持有人。",
			"question": [
				"一",
				"二",
				"三",
				"四"
			],
			"answer": "3"
		},
		{
			"title": "查询申请表、 再查询申请表和查询结果通知书应自成类别， 以业务发生时间先后为序， 按年装订， 保存期为_______年。",
			"question": [
				"2",
				"5",
				"10"
			],
			"answer": "2"
		},
		{
			"title": "《 中国人民银行假币收缴、 鉴定管理办法》 是从_______开始实施的。",
			"question": [
				"2003 年7月1日",
				"2004 年4月9日",
				"2004 年8月1日",
				"2002 年12月3日"
			],
			"answer": "1"
		},
		{
			"title": "中国人民银行在_______宣布成立。",
			"question": [
				"北京市",
				"河北省石家庄市",
				"陕西省延安市"
			],
			"answer": "2"
		},
		{
			"title": "伪造货币是指_______的假币。",
			"question": [
				"造假手段制造",
				"仿照真币的图案、 形状、 色彩等采用各种手段制作",
				"依照真币"
			],
			"answer": "2"
		},
		{
			"title": "金融机构应不迟于_______年底， 实现客户的每一笔存取款业务都可查询冠字号码。",
			"question": [
				"2014",
				"2015",
				"2016"
			],
			"answer": "2"
		},
		{
			"title": "第五套人民币20元及以下面额的水印为_______。",
			"question": [
				"固定人像水印",
				"固定花卉水印",
				"半固定花卉水印",
				"满版花卉水印"
			],
			"answer": "2"
		},
		{
			"title": "以下不属于人民币1999年版和2005年版50元纸币共同的防伪特征的是_______。",
			"question": [
				"专用纸张",
				"磁性缩微文字安全线",
				"固定水印"
			],
			"answer": "2"
		},
		{
			"title": "2005 版第五套人民币100元背面人民大会堂外景图案具有_______效果。",
			"question": [
				"荧光",
				"光变",
				"红外配对",
				"彩虹"
			],
			"answer": "2"
		},
		{
			"title": "为确保冠字号码检索系统安全， 应设立系统准入机制， 检索人员可以通过_______进入系统。",
			"question": [
				"密码",
				"密钥",
				"A或B"
			],
			"answer": "3"
		},
		{
			"title": "《 公安部、 中国人民银行关于进一步加强反假币工作的通知》（ 公通字〔 2009〕 43 号） 中要求： 金融机构一次性发现假人民币面额_______， 要在当天将有关情况通报公安机关。",
			"question": [
				"200 元（ 含） 以上的",
				"400 元（ 含） 以上的",
				"500 元（ 含） 以上的",
				"1000 元（ 含） 以上的"
			],
			"answer": "1"
		},
		{
			"title": "2005 年版第五套人民币纸张防伪特征采用了_______。",
			"question": [
				"全埋式安全线",
				"明暗相间式安全线",
				"全息磁性开窗式安全线"
			],
			"answer": "3"
		},
		{
			"title": "中国人民银行分支机构和中国人民银行授权的鉴定机构应当自受理鉴定之日起_______个工作日内， 出具《 货币真伪鉴定书》。",
			"question": [
				"5",
				"10",
				"15",
				"20"
			],
			"answer": "3"
		},
		{
			"title": "《 中国人民银行残缺污损人民币兑换办法》 自_______起施行。",
			"question": [
				"2003 年12月24日",
				"2004 年1月1日",
				"2004 年2月1日"
			],
			"answer": "3"
		},
		{
			"title": "清分设备和点钞机记录的冠字号码信息， 应在_______营业结束后通过各类（ U盘或联网） 方式导出到PC端或服务器。",
			"question": [
				"每日",
				"每月",
				"每季度"
			],
			"answer": "1"
		},
		{
			"title": "第三套人民币纸币全部退出流通的日期是_______。",
			"question": [
				"1999 年7月1日",
				"2000 年7月1日",
				"2001 年7月1日",
				"2002 年7月1日"
			],
			"answer": "2"
		},
		{
			"title": "以下不属于《 金融机构特殊残缺污损人民币兑换单》 要素的是_______。",
			"question": [
				"业务公章",
				"持有人签名",
				"持有人身份证号码"
			],
			"answer": "3"
		},
		{
			"title": "每张《 假币收缴凭证》 最多可以填写_______个不同的冠字号码。",
			"question": [
				"1",
				"2",
				"5",
				"8"
			],
			"answer": "3"
		},
		{
			"title": "对交存的_______特殊残缺、 污损人民币， 归入相应的券别。",
			"question": [
				"全额兑换",
				"半额兑换",
				"不予兑换"
			],
			"answer": "1"
		},
		{
			"title": "第三套人民币10元的水印图案为_______。",
			"question": [
				"天安门",
				"空心五星",
				"国旗五星",
				"五星布币"
			],
			"answer": "1"
		},
		{
			"title": "对于存储的冠字号码不能与取款人取款业务信息关联的， 应在《 查询结果通知书》 中注明查询过程， 其中采用_______的， 应对具体方式进行解释。",
			"question": [
				"逆向查询",
				"精确查询",
				"模糊查询"
			],
			"answer": "2"
		}
	];

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "中国人民银行是中华人民共和国的_______。",
			"question": [
				"中央银行",
				"国家银行",
				"政策性银行"
			],
			"answer": 1
		},
		{
			"title": "人民币的单位为_______，人民币辅币单位为_______。",
			"question": [
				"元，角分",
				"分，角元",
				"角，元分"
			],
			"answer": 1
		},
		{
			"title": "中国人民银行已发行的人民币中_______有3元纸币。",
			"question": [
				"第一套",
				"第二套",
				"第三套"
			],
			"answer": 2
		},
		{
			"title": "第五套人民币2005年版公告发行时间是_______。",
			"question": [
				"2005年9月1日",
				"2005年8月31日",
				"2005年10月1日"
			],
			"answer": 2
		},
		{
			"title": "中国人民银行成立于_______。",
			"question": [
				"1947年",
				"1948年",
				"1949年",
				"1950年"
			],
			"answer": 2
		},
		{
			"title": "人民币的简写符号是_______。",
			"question": [
				"＄",
				"￡",
				"￥"
			],
			"answer": 3
		},
		{
			"title": "第五套人民币纸币正面的无色荧光面额数字在紫外光的照射下呈_______。",
			"question": [
				"灰色",
				"绿色",
				"橘黄色",
				"金色"
			],
			"answer": 3
		},
		{
			"title": "银行业金融机构反假货币联络会议是国务院反假货币工作联席会议的延伸,在_______指导下开展工作。",
			"question": [
				"国务院反假货币工作联席会议",
				"中国人民银行",
				"国务院"
			],
			"answer": 1
		},
		{
			"title": "第五套人民币中的手感线是_______防伪特征。",
			"question": [
				"公众",
				"专业",
				"专家",
				"以上均是"
			],
			"answer": 1
		},
		{
			"title": "为完善币制，满足市场货币流通的需要，第五套人民币1999年版在第四套人民币的基础上，新增加了_______面额纸币。",
			"question": [
				"5元",
				"20元",
				"50元"
			],
			"answer": 2
		},
		{
			"title": "第三套人民币中______技术在当时处于国际领先地位。",
			"question": [
				"水印",
				"凹版印刷",
				"对印",
				"多色接线印刷"
			],
			"answer": 4
		},
		{
			"title": "从人民币产品到流通中现金需要经过的环节是_______。",
			"question": [
				"印钞厂——业务库——发行库——企业和个人",
				"印钞厂——发行库——业务库——企业和个人",
				"印钞厂——企业和个人——发行库——业务库",
				"印钞厂——企业和个人——业务库——发行库"
			],
			"answer": 2
		},
		{
			"title": "白水印又称为_______水印。",
			"question": [
				"多层次",
				"多色调",
				"像素",
				"高光"
			],
			"answer": 4
		},
		{
			"title": "2005版第五套人民币100元的冠字号码是_______。",
			"question": [
				"双横号码",
				"双色异型横号码",
				"双色异型竖号码",
				"横竖双号码"
			],
			"answer": 2
		},
		{
			"title": "1990版第四套人民币100元的无色荧光图文位于_______。",
			"question": [
				"正面",
				"背面",
				"正面和背面",
				"以上均否"
			],
			"answer": 1
		},
		{
			"title": "第五套人民币50元纸币的光变面额数字的颜色变化是由_______。",
			"question": [
				"蓝变金",
				"金变绿",
				"绿变蓝",
				"金变紫"
			],
			"answer": 2
		},
		{
			"title": "鉴别人民币纸币的方法之一是&quot;手摸&quot;，2005版第五套人民币100元表面文字及主要图案有凹凸感，这种&quot;凹凸&quot;效果产生于_______印刷方式。",
			"question": [
				"普通胶印",
				"雕刻凹版",
				"凸版印刷",
				"丝网印刷"
			],
			"answer": 2
		},
		{
			"title": "我国是从第四套人民币_______版的100元、50元纸币上开始使用安全线技术的。",
			"question": [
				"1980年",
				"1984年",
				"1988年",
				"1990年"
			],
			"answer": 4
		},
		{
			"title": "第五套人民币100元和50元纸币的水印采用的是毛泽东头像，20元、10元纸币的水印是_______。",
			"question": [
				"毛泽东头像、荷花",
				"荷花、月季花",
				"长江三峡、月季花",
				"荷花、长江三峡"
			],
			"answer": 2
		},
		{
			"title": "第五套人民币100元纸币的光变面额数字的颜色变化是由_______。",
			"question": [
				"蓝变金",
				"金变绿",
				"绿变蓝"
			],
			"answer": 3
		},
		{
			"title": "2005版第五套人民币中的_______具有白水印特征。",
			"question": [
				"100元、50元",
				"100元、50元、20元",
				"100元、50元、20元、10元",
				"100元、50元、20元、10元、5元"
			],
			"answer": 4
		},
		{
			"title": "第五套人民币各面额纸币上的隐形面额数字在票面的_______。",
			"question": [
				"正面左下方",
				"正面右下方",
				"正面右上方",
				"正面左上方"
			],
			"answer": 3
		},
		{
			"title": "第五套人民币主景人像采用_______技术。",
			"question": [
				"手工雕刻头像",
				"机器雕刻头像",
				"手工结合机器雕刻头像",
				"以上均不是"
			],
			"answer": 1
		},
		{
			"title": "1999版第五套人民币纸张中的彩色纤维是由_______纤维组成的。",
			"question": [
				"红色和黄色",
				"红色和蓝色",
				"黄色和蓝色",
				"绿色和蓝色"
			],
			"answer": 2
		},
		{
			"title": "第五套人民币的无色荧光纤维需要在_______光下观察。",
			"question": [
				"紫外",
				"红外",
				"透射",
				"偏振"
			],
			"answer": 1
		},
		{
			"title": "第五套人民币正背互补对印图案需要在_______光下观察。",
			"question": [
				"紫外",
				"红外",
				"透射",
				"偏振"
			],
			"answer": 3
		},
		{
			"title": "第五套人民币5元正面的国徽图案采用_______方式印刷。",
			"question": [
				"凸印",
				"丝印",
				"胶印",
				"凹印"
			],
			"answer": 4
		},
		{
			"title": "第五套人民币100元正面采用了______，具有中国传统历史文化特色和民族特色的纹饰。",
			"question": [
				"中国的漆器花纹",
				"少数民族的挑绣花纹",
				"青铜饕殄的纹路",
				"中国传统瓷器的花纹"
			],
			"answer": 1
		},
		{
			"title": "伪造、变造的人民币由_______统一销毁。",
			"question": [
				"国务院",
				"中国人民银行",
				"财政部"
			],
			"answer": 2
		},
		{
			"title": "凡办理人民币存取款业务的金融机构应_______为公众兑换残缺、污损人民币，不得拒绝兑换。",
			"question": [
				"无偿",
				"按面值的5%收取兑换费用",
				"按面值的10%收取兑换费用"
			],
			"answer": 1
		}
	];

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cost.json": 36,
		"./costgw.json": 37,
		"./department.json": 17,
		"./departmentgw.json": 38,
		"./dpt_xian.json": 39,
		"./party3.json": 40,
		"./party5.json": 41,
		"./quality.json": 18,
		"./safe.json": 42,
		"./xian.json": 43,
		"./xian_leader.json": 44
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 47;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//公共资源
	__webpack_require__(5);
	__webpack_require__(26);
	__webpack_require__(12);

	function initDom() {
		//此处设置一个较长数值，数据载入完毕后再显示
		$("#fakeLoader").fakeLoader({
			timeToHide: 600000, //Time in milliseconds for fakeLoader disappear
			bgColor: "#d7eefe",
			spinner: "spinner7"
		});
		$('.fl').parent().append('<p class="center" style="position:absolute;width:100%;top:60%;color:#445">载入中...</p>');
	}
	initDom();

	var exam = __webpack_require__(24);
	var WINDOWTITLE = __webpack_require__(53);
	var PAPER = __webpack_require__(25);
	var util = __webpack_require__(50);
	var uid = util.getUrlParam('uid');
	var sid = util.getUrlParam('sid');

	if (sid != null) {
		exam.examPaper = PAPER[sid];
		document.title = WINDOWTITLE[sid];
	}

	var app = function() {
		var rendPaper = function() {

			$('#fullpage').fullpage({
				navigation: (uid == -1) || exam.myErrNums > 10 ? false : true,
				onLeave: function(index, nextIndex, direction) {
					if (index > exam.lastPage && (direction == 'down')) {
						$('.iSlider-arrow').hide();
					}
					//存储用户当前看到第几页
					localStorage.setItem(exam.examPaper + '_' + sid, index + 1 - exam.hideNum);
				},
				afterLoad: function(anchor, index) {
					if (index == exam.lastPage) {
						$('.iSlider-arrow').hide();
					} else {
						$('.iSlider-arrow').show();
					}

					exam.curPage = index;
				}
			});

			//全屏加载完毕
			if (!exam.loadComplete) {
				$("#fakeLoader").hide();
				document.getElementById('autoplay').play();

				//载入数据
				exam.lastPage = localStorage.getItem(exam.examPaper + '_' + sid);
				if (!(exam.lastPage == null)) {
					$.fn.fullpage.moveTo(exam.lastPage); // - offset);
				}

			}
		};

		function getNormalErrPaper(question, errorList) {

			//只抽取maxAnswerNum个
			exam.maxAnswerNum = Math.max(question.length, exam.maxAnswerNum);

			//我的错题
			var str = '';
			if (uid == -1) { //显示所有题库
				//question.length
				//管3答题 显示前200道
				for (i = 0; i < exam.maxAnswerNum; i++) {
					//console.log(question[exam.myError[i]]);
					if (!util.isPaperHide(i)) {
						$('#fullpage').append(util.getExamTemplateByObj(question[i], 0, i + 1));
					}
				}

				//var str = '<div class="weui_opr_area"><p class="weui_btn_area"><a href="javascript:$.fn.fullpage.moveTo(1);" class="weui_btn weui_btn_primary" >返回首页</a></p></div>';
				var str = '<div class="weui_opr_area"><p class="weui_btn_area"><div class="weui-row">' +
					'<div class="weui-col-30"><a href="javascript:;" name="hidethis" class="weui_btn weui_btn_plain_primary">隐藏此题</a></div>' +
					'<div class="weui-col-30"><a href="javascript:;" name="showAll" class="weui_btn weui_btn_plain_primary">显示所有</a></div>' +
					'<div class="weui-col-30"><a href="javascript:$.fn.fullpage.moveTo(1);" class="weui_btn weui_btn_plain_primary">返回首页</a></div>' +
					'	</p></div></div>';

				$('.answer-num').parent().append(str);

			} else {
				var len = errorList.length;
				for (i = 0; i < len; i++) {
					//console.log(question[exam.myError[i]]);
					if (typeof question[errorList[i]] != 'undefined') {
						$('#fullpage').append(util.getExamTemplateByObj(question[errorList[i]], 0, i + 1));
					}
				}
			}
		}

		function getPaper() {
			var question = __webpack_require__(47)("./" + exam.examPaper + '.json');
			//普通答题，直接载入即可
			if (exam.type == '0') {
				getNormalErrPaper(question, exam.myError);
			} else {
				//过关类型，需按关卡分别载入数据
				var err = exam.myError;
				for (var key in err) {
					var id = parseInt(key, 10);
					getNormalErrPaper(question['part' + id].data, err[key]);
				}
			}

			//间隔背景
			exam.lastPage = exam.myErrNums;
			// for (i = 0; i < exam.lastPage; i++) {
			// 	exam.secColor[i] = (i % 2) ? '#fff' : '#445';
			// }

			document.getElementById('autoplay').play();
			rendPaper();
		}

		function initApp() {
			if (uid == -1) {
				getPaper();
			} else {
				$.ajax({
					url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getMyErrs&sportid=' + sid + '&uid=' + uid,
					async: false,
					dataType: "jsonp",
					callback: "JsonCallback"
				}).done(function(obj) {

					$('[name="username"]').text(obj.user_name);

					if (Number.parseInt(obj.score) > 100) {
						$('[name="userscore"]').text('没有参与本次答题活动');
					} else {
						$('[name="userscore"]').text('获得了' + obj.score + '分。');
					}

					if (obj.sportType == '1') {
						exam.myError = JSON.parse(obj.errors);
					} else {
						exam.myErrNums = 100 - Number.parseInt(obj.score);
						if (exam.myErrNums > 0) {
							$('[name="errTips"]').text('做错' + exam.myErrNums + '道题,最终');
							$('[name="myErrTips"]').text('接下来我们来看看这' + exam.myErrNums + '道题目的正确答案。');
							exam.myError = obj.errors.split(',');
							exam.myErrNums = exam.myError.length;
						}
					}
					getPaper();
				});
			}
		}

		$('#fullpage').on('click', '[name="hidethis"]', function() {
			/* Act on the event */
			//载入数据
			var key = exam.examPaper + '_errlist_' + sid;
			//var key = 'party3-errlist-2';
			var errList = localStorage.getItem(key);
			//console.log(errList);
			var curID = $('.answer-num:nth(' + (exam.curPage - 1) + ')').text().replace('第', '').replace('题', '').trim();
			if (errList == null) {
				localStorage.setItem(key, curID);
			} else {
				localStorage.setItem(key, errList + ',' + curID);
			}
			exam.hideNum++;
		});

		$('#fullpage').on('click', '[name="showAll"]', function() {
			/* Act on the event */
			var key = exam.examPaper + '_errlist_' + sid;
			//var key = 'party3-errlist-2';
			localStorage.removeItem(key);
			window.location.href = window.location.href;
		});

		return {
			init: function() {
				initApp();
			}
		};
	}();

	jQuery(document).ready(function() {
		app.init();
	});

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports) {

		function getUrlParam(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
			if (r !== null) return decodeURI(r[2]);
			return -1; //返回参数值
		}

		function getExamTemplateByObj(data, mode, i, obj) {
			var ques = [];
			var arr = [];
			var answerAttr = ['A', 'B', 'C', 'D'];
			//选项乱序
			if (typeof(data.question) == 'undefined') {
				return;
			}
			arr = getRandomArr(data.question.length);
			var oldOrder = [];
			arr.map(function(arrData, id) {
				oldOrder[arrData] = id;
			});
			var str = '<div class="section background_main_error">' +
				'<h1 class="title answer-num ' + /*(i % 2 ? '' : 'white-font')+*/ '" style="fontSize:2em;">第<span>' + i + '</span>题</h1>';
			if (mode) {
				str += '<h3 class="weui_cells_title">错误人数：<span>' + obj.nums + '人 </span>( ' + obj.percent + '% )</h3>';
			}

			str += '<h3 class="weui_cells_title">正确答案:<span>' + answerAttr[Number.parseInt(oldOrder[data.answer - 1])] + '</h3>' +
				'<div class="weui_cells_title ' + /*(i % 2 ? '' : 'white-font')+*/ '">' + data.title + '</div>' +
				'<div class="weui_cells weui_cells_checkbox weui_cells_dark weui_cells_dark_myerr" data-id=' + (i - 1) + ' data-answer=' + (oldOrder[data.answer - 1] + 1) + '>';

			data.question.map(function(qTitle, idx) {
				ques[idx] = '';
				ques[idx] += '    <label class="weui_cell weui_check_label">';
				ques[idx] += '<div class="weui_cell_hd">';
				ques[idx] += '    <input type="radio" class="weui_check" name="radio' + (i - 1) + '"' + ((idx == data.answer - 1) ? 'checked' : ' ') + '>';
				ques[idx] += '    <i class="weui_icon_checked"></i>';
				ques[idx] += '</div>';
				ques[idx] += '<div class="weui_cell_bd weui_cell_primary" data-value=' + oldOrder[idx] + '>';
				ques[idx] += ((idx == data.answer - 1) ? '<p style="font-weight:bold;color: rgb(255, 16, 80);">' : '    <p>') + qTitle + '</p>';
				ques[idx] += '</div></label>';
			});

			var strQues = '';
			for (var j = 0; j < data.question.length; j++) {
				strQues += ques[arr[j]];
			}
			//选项乱序 -END

			str += strQues + '</div></div>';
			return str;
		}

		//数组随机排序
		function randomsort(a, b) {
			return Math.random() > 0.5 ? -1 : 1;
		}

		function getRandomArr(len) {
			var arr = [];
			for (var i = 0; i < len; i++) {
				arr.push(i);
			}
			return arr.sort(randomsort);
		}
		
		function isPaperHide(idx,exam) {
			var key = exam.examPaper + '_errlist_' + sid;
			var errList = localStorage.getItem(key);
			if (errList == null) {
				return false;
			} else {
				var errArrList = errList.split(',');
				var isFind = false
				for (var i = 0; !isFind && i < errArrList.length; i++) {
					if (idx + 1 == errArrList[i]) {
						isFind = true;
					}
				}
				return isFind;
			}
		}
			
		module.exports ={
			getUrlParam:getUrlParam,
			getExamTemplateByObj:getExamTemplateByObj,
			isPaperHide:isPaperHide
		}

/***/ },
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports) {

	var WINDOWTITLE = ['安全月答题总结', '“两学一做” 学习教育党建知识微信答题活动', '“两学一做” 学习教育党建知识微信答题活动', '成钞公司2016年“成本管理月”微信答题总结', '长城公司2016年“成本管理月”微信答题总结', '“两学一做” 学习教育党建知识微信答题活动','商洛市反假货币宣传知识竞赛', '成钞公司2016年“质量月”微信答题总结']
	module.exports = WINDOWTITLE;

/***/ }
/******/ ]);