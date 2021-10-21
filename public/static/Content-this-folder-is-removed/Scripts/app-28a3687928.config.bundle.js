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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	// module
	angular.module('ea5', [
	        'ui.bootstrap',
	        'ui.router',
	        'ui.mask',
	        'youtube-embed',
	        'ui.validate'
	])
	    .constant('toastr', toastr)
	    .constant('MarkerWithLabel', MarkerWithLabel)
	    .run(startup);
	
	startup.$inject = ['urlParameters'];
	
	function startup(urlParameters) {
	    urlParameters.capture('ilsid'); // ILSID
	    urlParameters.capture(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_group', 'utm_term']); // Marketing variables
	    urlParameters.capture('mkwid'); // use this to display paid search
	}
	
	// routing
	__webpack_require__(3);
	
	// cross cutting pieces
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	
	// controllers for routing
	__webpack_require__(30);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(41);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	
	// other
	__webpack_require__(66);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	
	// 3PL
	__webpack_require__(79);
	
	//Roommates
	__webpack_require__(81);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = angular;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	__webpack_require__(4);
	
	angular
	    .module('ea5')
	    .config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
	
	    $stateProvider
	        .modalState('guestCard', {
	            abstract: true,
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.html',
	            controller: 'guestCardController',
	            controllerAs: 'vm'
	        })
	        .state('guestCard.contactInfo', {
	            url: '/contactInfo',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.contactInfo.html',
	            controller: 'contactInfoController',
	            controllerAs: 'cvm'
	        })
	        .state('guestCard.scheduleAppointment', {
	            url: '/scheduleAppointment',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.scheduleAppointment.html',
	            controller: 'scheduleAppointmentController',
	            controllerAs: 'cvm'
	        })
	        .state('guestCard.bookTour', {
	            url: '/bookTour',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.bookTour.html',
	            controller: 'bookTourController',
	            controllerAs: 'cvm'
	        })
	        .state('guestCard.emailTour', {
	            url: '/emailTour',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.emailTour.html',
	            controller: 'emailTourController',
	            controllerAs: 'cvm'
	        })
	        .state('guestCard.selectDateTime', {
	            url: '/selectdatetime',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCard.selectdatetime.html',
	            controller: 'selectDateTimeController',
	            controllerAs: 'cvm'
	        })
	        .modalState('chatForm', {
	            abstract: true,
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'chatForm.html',
	            controller: 'chatFormController',
	            controllerAs: 'vm'
	        })
	        .state('chatForm.chatInfo', {
	            url: '/chatInfo',
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'chatForm.chatInfo.html',
	            controller: 'chatInfoController',
	            controllerAs: 'cvm'
	        })
	        .modalState('search', {
	            url: '/search',
	            params: {
	                modalSize: 'sm',
	                modalClass: 'search-modal',
	                backdropClass: 'search-backdrop'
	            },
	            templateUrl: 'search.html',
	            controller: 'modalSearchController',
	            controllerAs: 'search'
	        })
	        .modalState('mediaGallery', {
	            url: '/mediaGallery',
	            params: {
	                modalSize: 'lg',
	                modalClass: 'media-gallery-modal',
	                backdropClass: 'media-gallery-backdrop',
	                gotoCategory: 'All',
	                gotoSlide: 0,
	                unitGallery: null,
	                gotoMediaId: -1,
	                gotoFirstOfType: ''
	            },
	            templateUrl: 'mediagallery.html',
	            controller: 'mediaGalleryController',
	            controllerAs: 'media'
	        })
	        .modalState('restrictions', {
	            url: '/restrictions',
	            params: {
	                modalSize: 'md',
	                modalClass: 'restrictions-modal',
	                backdropClass: 'restrictions-backdrop'
	            },
	            templateUrl: 'restrictions.html',
	            controller: 'restrictionsController',
	            controllerAs: 'vm'
	        })
	        .modalState('findRoommate', {
	            url: '/findRoommate',
	            params: {
	                modalSize: 'lg',
	                propertyId: null,
	                propertyName: null,
	                marketName: null,
	                marketRoommateCount: null,
	                profiles: null,
	                hideImages: null
	            },
	            templateUrl: 'find-roommate.html',
	            controller: 'findRoommateController',
	            controllerAs: 'vm'
	        })
	        .modalState('contactRoommate', {
	            url: '/contactRoommate',
	            params: {
	                modalSize: 'md',
	                profileId: null,
	                recipientName: null,
	                recipientProfileId: null,
	                recipientEmail: null
	            },
	            templateUrl: 'contact-roommate.html',
	            controller: 'contactRoommateController',
	            controllerAs: 'vm'
	        })
	        .modalState('disableProfile', {
	            url: '/disableProfile',
	            params: {
	                modalSize: 'md',
	                profileId: null,
	                metroURL: null
	            },
	            templateUrl: 'disable-profile.html',
	            controller: 'disableProfileController',
	            controllerAs: 'vm'
	        })
	        .state('default', {
	            url: '/',
	            onEnter: function () {
	                console.log('default');
	            }
	        })
	        .state('guestCardV3', {
	            abstract: true,
	            params: {
	                propertyId: null,
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null
	            },
	            templateUrl: 'guestCardV3.html',
	            controller: 'guestCardV3Controller',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.contact', {
	            url: '/contact/{guestCardInitiateType}',
	            params: {
	                guestCardInitiateType: null,
	                'bookTourPath': false,
	                'fromScheduleTime': false
	            },
	            templateUrl: 'guestCardV3.contactInfo.html',
	            controller: 'contactInfoV3Controller',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.contactunit', {
	            url: '/contactunit/{beds}/{baths}/{bldgRequested}/{unitRequested}/{unitprice}/{floorplan}/{sqrft}/{guestCardCommentType}/{guestCardInitiateType}',
	            params: {
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null,
	                bookTourPath: false
	            },
	            templateUrl: 'guestCardV3.contactInfo.html',
	            controller: 'contactInfoV3Controller',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.scheduledate', {
	            url: '/schedule',
	            params: {
	                'bookTourPath': false,
	                'rescheduleTour': false
	            },
	            templateUrl: 'guestCardV3.scheduledate.html',
	            controller: 'scheduleDayController',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.scheduletime', {
	            url: '/scheduletime',
	            params: {
	                'bookTourPath': false,
	                'rescheduleTour': false,
	                'bookNearby': false,
	                'bookNearbySuggestion': {}
	            },
	            templateUrl: 'guestCardV3.scheduletime.html',
	            controller: 'scheduleTimeController',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.booktourv3', {
	            url: '/booktourv3/{type}/{guestCardInitiateType}',
	            params: {
	                type: null, //newtour or rescheduletour
	                guestCardInitiateType: null,
	                bookTourPath: true
	            },
	            templateUrl: 'guestCardV3.booktourv3.html',
	            controller: 'bookTourV3Controller',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.booktourunit', {
	            url: '/booktourunit/{type}/{beds}/{baths}/{bldgRequested}/{unitRequested}/{unitprice}/{floorplan}/{sqrft}/{guestCardCommentType}/{guestCardInitiateType}',
	            params: {
	                type: null, //newtour or rescheduletour
	                beds: -1,
	                baths: -1,
	                bldgRequested: null,
	                unitRequested: null,
	                unitprice: null,
	                floorplan: null,
	                sqrft: null,
	                guestCardCommentType: null,
	                guestCardInitiateType: null,
	                bookTourPath: true
	            },
	            templateUrl: 'guestCardV3.booktourv3.html',
	            controller: 'bookTourV3Controller',
	            controllerAs: 'vm'
	        })
	        .state('guestCardV3.booknearby', {
	            url: '/booknearby/{id}/{apptTime}',
	            params: {
	                "data": {}
	            },
	            templateUrl: 'guestCardV3.booknearby.html',
	            controller: 'bookNearbyController',
	            controllerAs: 'vm'
	        })
	        .state('rescheduleTour', {
	            url: '/reschedule/{guid}',
	            params: {
	                guid: null
	            },
	            templateUrl: 'rescheduleTour.html',
	            controller: 'rescheduleTourController',
	            controllerAs: 'vm'
	        })
	        .state('acknowledgement', {
	            url: '/acknowledgement/{guid}/{propid}',
	            params: {
	                guid: null,
	                propid: null
	            },
	            templateUrl: 'acknowledgement.html',
	            controller: 'tourController',
	            controllerAs: 'vm'
	        })
	        .state('invitequestion', {
	            url: '/invitequestion/{guid}',
	            params: {
	                guid: null
	            },
	            templateUrl: 'invitequestion.html',
	            controller: 'tourController',
	            controllerAs: 'vm'
	        })
	        .state('selfguidedguest', {
	            url: '/selfguidedguest/{guid}',
	            params: {
	                guid: null
	            },
	            templateUrl: 'inviteform.html',
	            controller: 'tourController',
	            controllerAs: 'vm'
	        })
	        .state('selfguidedthankyou', {
	            url: '/selfguidedthankyou',
	            templateUrl: 'thankyou.html',
	            controller: 'tourController',
	            controllerAs: 'vm'
	        });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var _ = __webpack_require__(5);
	
	angular
	    .module('ea5')
	    .config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
	    $stateProvider.modalState = function stateModal(name, options) {
	        var props = ['template', 'templateUrl', 'templateProvider', 'controller', 'controllerProvider', 'controllerAs'];
	
	        var modalOptions = _.pick(options, props);
	        options = _.omit(options, props);
	
	        options.views = {
	            'modal@': modalOptions
	        };
	        
	        options.onEnter = onEnter;
	        options.onExit = onExit;
	
	        options.resolve = angular.extend({}, options.resolve, {
	            getModal: getModal,
	        });
	
	
	        var modal;
	
	        onEnter.$inject = ['$uibModal', '$stateParams'];
	        function onEnter($uibModal, $stateParams) {
	            // model opens before state template/controller is applied
	            modal = $uibModal.open({
	                template: '<div ui-view="modal"></div>',
	                size: $stateParams.modalSize || 'lg',
	                windowClass: $stateParams.modalClass || '',
	                backdropClass: $stateParams.backdropClass || ''
	        });
	        }
	
	        function onExit() {
	            modal.close();
	        }
	
	        function getModal() {
	            return function () {
	                return modal;
	            };
	        }
	
	        return $stateProvider.state(name, options);
	    };
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = _;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .config(toastrConfig);
	
	toastrConfig.$inject = ['toastr'];
	
	function toastrConfig(toastr) {
	    toastr.options.timeOut = 4000;
	    toastr.options.positionClass = 'toast-top-center';
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5Carousel', ea5Carousel);
	
	function ea5Carousel() {
	    var directive = {
	        link: link,
	        restrict: 'A',
	        scope: {
	            ea5CarouselOpts: '='
	        }
	    };
	
	    return directive;
	
	    function link(scope, element, attrs) {
	        var $carousel = $(element);
	
	        var options = scope.ea5CarouselOpts || {
	            keyboard: true
	        };
	
	        $carousel.on('slide.bs.carousel', handleCarouselSlide);
	        if (options.keyboard) $(document).bind('keyup', handleKeyboardNavigation);
	
	        function handleCarouselSlide(e) {
	            var activeSlide = $carousel.find('.item.active');
	            if (!activeSlide.length > 0) return;
	
	            var video = $(activeSlide).find('iframe');
	            if (!video.length > 0) return;
	
	            // replace src to stop video (starting it over)
	            var $video = $(video);
	            $video.attr('src', $video.attr('src'));
	        }
	
	        function handleKeyboardNavigation(e) {
	            if (!$carousel.is(':visible')) return;
	
	            if (e.which === 39) {
	                $carousel.carousel('next');
	            }
	            else if (e.which === 37) {
	                $carousel.carousel('prev');
	            }
	        }
	    }
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5LazySrc', LazySrc);
	
	LazySrc.$inject = ['$timeout'];
	
	function LazySrc($timeout) {
		var directive = {
			link: link,
			scope: {
			    ea5LazySrc: '@',
	            ea5SrcOnError: '@'
			},
			restrict: 'A'
		};
	
		return directive;
	
		function link(scope, element, attrs) {
		    $timeout(function () {
		        element.bind('error', function () {
		            if (!scope.ea5SrcOnError) return;
	
		            if (attrs.src !== scope.ea5SrcOnError) {
		                attrs.$set('src', scope.ea5SrcOnError);
		            }
		        });
	
			    element.attr("src", scope.ea5LazySrc);
		    });
		}
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5LazyBg', ea5LazyBg);
	
	ea5LazyBg.$inject = ['$timeout'];
	
	function ea5LazyBg($timeout) {
	    var directive = {
	        link: link,
	        scope: {
	            ea5LazyBg: '@'
	        },
	        restrict: 'A'
	    };
	
	    return directive;
	
	    function link(scope, element) {
	        $timeout(function () {
	            element.css({'background-image' : 'url(' + scope.ea5LazyBg + ')'});
	        });
	    }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5ScrollTo', ea5ScrollTo);
	
	function ea5ScrollTo() {
	    var directive = {
	        bindToController: true,
	        controller: Controller,
	        controllerAs: 'vm',
	        link: link,
	        scope: {
	            ea5ScrollTo: '@',
	            ea5AnalyticsCategory: '@',
	            ea5AnalyticsAction: '@',
	            ea5AnalyticsLabel: '@'
	
	        },
	        restrict: 'A'
	    };
	
	    Controller.$inject = ['$scope', '$anchorScroll', '$location'];
	
	    return directive;
	
	    function Controller($scope, $anchorScroll, $location) {
	        var vm = this;
	
	        $scope.scrollTo = scrollTo;
	
	        function scrollTo($event) {
	            ga('send', 'event', vm.ea5AnalyticsCategory, vm.ea5AnalyticsAction, vm.ea5AnalyticsLabel);
	            // stop navigation
	            $event.preventDefault();
	
	            // remove #
	            var target = vm.ea5ScrollTo.replace(/^#/gi, '');
	
	            // set window hash
	            $location.hash(target);
	            $scope.$apply();
	
	            // scroll to offset
	            $anchorScroll.yOffset = $('#subnav').innerHeight();
	            $anchorScroll();
	        }
	    }
	
	    function link(scope, element, attrs) {
	        element.bind('click', scope.scrollTo);
	    }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5CollapseText', ['$window', '$timeout', ea5CollapseText]);
	
	
	function ea5CollapseText($window, $timeout) {
	    var directive = {
	        compile: compile,
	        template: '<a></a>',
	        replace: true,
	        scope: {
	            ea5CollapseText: '@',
	            expandMessage: '@',
	            collapseMessage: '@',
	            display: '@'
	        },
	        restrict: 'A'
	    };
	    return directive;
	
	    function compile(tElement, tAttr) {
	        tElement.attr('role', 'button');
	        tElement.attr('data-toggle', 'collapse');
	        tElement.attr('aria-expanded', 'false');
	        tElement.attr('data-target', '#' + tAttr.ea5CollapseText);
	        return {
	            post: function postLink(scope, element, attr, ctrl) {
	                var message = element.prepend(scope.expandMessage);
	                var targetElement = $('#' + scope.ea5CollapseText);
	                collapseIfMediaMobile();
	
	                function collapseIfMediaMobile() {
	                    if (element.is(':visible')) {
	                        if (!targetElement.hasClass('collapse')) {
	                            targetElement.addClass('collapse');
	                        }
	                    } else {
	                        if (targetElement.hasClass('collapse')) {
	                            targetElement[0].classList.remove('collapse');
	                        }
	                        if (targetElement.hasClass('in')) {
	                            targetElement[0].classList.remove('in');
	                            message.text(scope.expandMessage);
	                        }
	                    }
	                }
	
	                angular.element($window).bind('resize', function() {
	                    $timeout(function() {
	                        collapseIfMediaMobile();
	                    }, 300);
	                });
	
	                element.bind('click', function() {
	                    if (targetElement.hasClass('in')) {
	                        message.text(scope.expandMessage);
	                    } else {
	                        message.text(scope.collapseMessage);
	                    }
	                });
	            }
	        }
	    }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	
	angular.module('ea5')
	    .filter('arrayFilter', arrayFilter);
	
	function arrayFilter() {
	    return function (items, array, property) {
	        var filtered = [];
	        if (typeof property !== 'string') {
	            angular.forEach(items, function (item) {
	                if (_.contains(array, item)) filtered.push(item);
	            });
	        } else {
	            angular.forEach(items, function (item) {
	                if (_.contains(array, item[property])) filtered.push(item);
	            });
	        }
	
	        return filtered;
	    }
	}
	
	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	
	angular.module('ea5')
	    .filter('anyInArrayFilter', anyInArrayFilter);
	
	function anyInArrayFilter() {
	    return function (items, filter, arrayProperty) {
	        return _.filter(items, function (item) {return _.contains(item[arrayProperty], filter) });
	    }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = ea5;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .factory('dataservice', dataservice);
	
	dataservice.$inject = ['$http', '$location', '$q', '$httpParamSerializer', '$httpParamSerializerJQLike', 'exception', 'logger'];
	
	function dataservice($http, $location, $q, $httpParamSerializer, $httpParamSerializerJQLike, exception, logger) {
	    var isPrimed = false;
	    var primePromise;
	
	    var service = {
	        getPropertyById: getPropertyById,
	        getBookNearbySuggestions: getBookNearbySuggestions,
	        getTourTimesById: getTourTimesById,
	        postGuestCard: postGuestCard,
	        postProvisionalGuestCard: postProvisionalGuestCard,
	        logTourTimeRequest: logTourTimeRequest,
	        getSearchIndex: getSearchIndex,
	        ready: ready,
	        findRoommate: findRoommate,
	        contactRoommate: contactRoommate,
	        disableProfile: disableProfile,
	        getPreviousTour: getPreviousTour,
	        rescheduleTour: rescheduleTour,
	        cancelTour: cancelTour,
	        getSelfGuidedTour: getSelfGuidedTour,
	        agreeToTerms: agreeToTerms,
	        saveProspectGuests: saveProspectGuests
	    }
	    return service;
	
	    //GuestCard Data Requests
	    function getPropertyById(id) {
	        var idString = id.toString();
	        if (!idString.startsWith("b"))
	            idString = "b" + idString;
	        var deferred = $q.defer();
	        $http.get('/api/guestcardapi/GetGuestCardByPropertyId?propertyId=' + idString)
	            .then(getGuestCardDataComplete)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function getGuestCardDataComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function getBookNearbySuggestions(id, apptTime) {
	        if (!id.startsWith("b"))
	            id = "b" + id;
	        var deferred = $q.defer();
	        $http.get('/api/guestcardapi/GetSuggestedNearbyPropertyByPropertyIdAndApptTime?propertyId=' + id +"&apptTime=" + apptTime)
	            .then(getGuestCardDataComplete)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function getGuestCardDataComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function getTourTimesById(id) {
	        var deferred = $q.defer();
	        $http.get('/api/AppointmentSlotsApi/GetSlotsForProperty?propertyId=' + id)
	            .then(getTimeData)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function getTimeData(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function postGuestCard(data) {
	        var deferred = $q.defer();
	        $http.post('/api/guestcardapi/savecontact', data)
	            .then(postGuestCardComplete)
	            .catch(function (message) {
	                exception.catcher('Failed to submit guestcard')(message);
	                deferred.reject();
	            });
	
	        function postGuestCardComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function postProvisionalGuestCard(data) {
	        var deferred = $q.defer();
	        $http.post('/api/guestcardapi/saveprovisionalcontact', data)
	            .then(postProvisionalGuestCardComplete)
	            .catch(function () {
	                deferred.reject();
	            });
	
	        function postProvisionalGuestCardComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function logTourTimeRequest(data) {
	        var deferred = $q.defer();
	        $http.post('/api/guestcardapi/logTourTimeRequest', data)
	            .then(logTourTimeRequestComplete)
	            .catch(function () {
	                deferred.reject();
	            });
	
	        function logTourTimeRequestComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    //Search Data Requests
	
	    function getSearchIndex() {
	        var deferred = $q.defer();
	        $http.get('/api/SiteSearchApi/GetSiteSearch')
	            .then(getSiteSearchComplete)
	            .catch(function (message) {
	                exception.catcher('failed to get sitesearch data')(message);
	                deferred.reject();
	            });
	
	        function getSiteSearchComplete(response) {
	            deferred.resolve(response.data.SearchIndexItems);
	        }
	
	        return deferred.promise;
	    }
	
	
	    function prime() {
	        // This function can only be called once.
	        if (primePromise) {
	            return primePromise;
	        }
	
	        primePromise = $q.when(true).then(success);
	        return primePromise;
	
	        function success() {
	            isPrimed = true;
	            logger.info('Primed data');
	        }
	    }
	
	    function ready(nextPromises) {
	        var readyPromise = primePromise || prime();
	
	        return readyPromise
	            .then(function () { return $q.all(nextPromises); })
	            .catch(exception.catcher('"ready" function failed'));
	    }
	
	    //Roommate requests
	    function findRoommate(data) {
	        var deferred = $q.defer();
	        $http.post('/api/roommatesapi/findroommate', data)
	            .then(findRoommateComplete)
	            .catch(function (message) {
	                var errorMsg = 'Failed to find roommates';
	                if (message.data.length > 0) {
	                    errorMsg = errorMsg + ' - ' + message.data;
	                }
	                exception.catcher(errorMsg)(message);
	                deferred.reject();
	            });
	
	        function findRoommateComplete(response) {
	            deferred.resolve(response);
	        }
	
	        return deferred.promise;
	    }
	
	    function contactRoommate(data) {
	        var deferred = $q.defer();
	        $http.post('/api/roommatesapi/createroommatecontact', data)
	            .then(contactRoommateComplete)
	            .catch(function (message) {
	                var errorMsg = 'Oops! There was an issue in contacting this potential roommate. Please try again in a few minutes.';
	                if (message.data.length > 0) {
	                    errorMsg = errorMsg + ' - ' + message.data;
	                }
	                exception.catcher(errorMsg)(message);
	                deferred.reject();
	            });
	
	        function contactRoommateComplete(response) {
	            deferred.resolve(response);
	        }
	
	        return deferred.promise;
	    }
	
	    function disableProfile(data) {
	        var deferred = $q.defer();
	        $http.post('/api/roommatesapi/disableprofile', data)
	            .then(disableProfileComplete)
	            .catch(function (message) {
	                var errorMsg = 'Disable profile was unsuccessful.';
	                if (message.data.length > 0) {
	                    errorMsg = errorMsg + ' - ' + message.data;
	                }
	                exception.catcher(errorMsg)(message);
	                deferred.reject();
	            });
	
	        function disableProfileComplete(response) {
	            deferred.resolve(response);
	        }
	
	        return deferred.promise;
	    }
	
	    //get existing schedule appointment(s)
	    function getPreviousTour(guid) {
	        var deferred = $q.defer();
	        $http.get('/api/guestcardapi/GetAppointments?emailguid=' + guid)
	            .then(getPreviousTourData)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function getPreviousTourData(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function rescheduleTour(data) {
	        var deferred = $q.defer();
	        $http({
	            url: '/api/guestcardapi/RescheduleAppointment',
	            method: 'POST',
	            data: data,
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        }).then(getPreviousTourData)
	        .catch(function (message) {
	            exception.catcher('Failed to obtain data for selected property')(message);
	            deferred.reject();
	        });
	
	        function getPreviousTourData(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function cancelTour(appointmentID,password) {
	        var deferred = $q.defer();
	        var canceldata = {
	            "appointmentID": appointmentID,
	            "password": password
	        };
	        $http({
	            url: '/api/guestcardapi/CancelAppointment',
	            method: 'POST',
	            data: canceldata,
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        })
	            .then(returnCancel)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function returnCancel(response) {
	            deferred.resolve(response.data);
	        }
	        return deferred.promise;
	    }
	
	    function getSelfGuidedTour(guid, rmpropid) {
	        var deferred = $q.defer();
	        $http.get('/api/selfguidedtourapi/GetStartupValues?emailguid=' + guid + '&propid=' + rmpropid)
	            .then(getSelfGuidedTourComplete)
	            .catch(function (message) {
	                exception.catcher('Failed to obtain data for selected property')(message);
	                deferred.reject();
	            });
	
	        function getSelfGuidedTourComplete(response) {
	            deferred.resolve(response.data);
	        }
	
	        return deferred.promise;
	    }
	
	    function agreeToTerms(data) {
	        var deferred = $q.defer();
	        //$http.post('/api/selfguidedtourapi/AgreeToTerms?emailguid=' + guid + '&initials=' + initials)
	        $http({
	            url: '/api/selfguidedtourapi/AgreeToTerms',
	            method: 'POST',
	            data: data,
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        })
	            .then(agreeToTermsComplete)
	            .catch(function (message) {
	                var errorMsg = 'Agree to Terms was unsuccessful.' ;
	                if (message.data.length > 0) {
	                    console.log(message.data);
	                    errorMsg = errorMsg + ' - ' + message.data;
	                }
	                exception.catcher(errorMsg)(message);
	                deferred.reject();
	            });
	
	        function agreeToTermsComplete(response) {
	            deferred.resolve(response);
	        }
	
	        return deferred.promise;
	    }
	
	    function saveProspectGuests(guid,guestdata) {
	        var deferred = $q.defer();
	        $http({
	            url: '/api/selfguidedtourapi/SaveProspectGuests?emailGuid=' + guid,
	            method: 'POST',
	            data: guestdata,
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        })
	        .then(saveProspectGuestsComplete)
	        .catch(function (message) {
	            var errorMsg = 'Add Self Guided guests was unsuccessful.';
	            if (message.data.length > 0) {
	                errorMsg = errorMsg + ' - ' + message.data;
	            }
	            exception.catcher(errorMsg)(message);
	            deferred.reject();
	        });
	
	        function saveProspectGuestsComplete(response) {
	            deferred.resolve(response);
	        }
	
	        return deferred.promise;
	    }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .factory('exception', exception);
	
	exception.$inject = ['logger'];
	
	function exception(logger) {
	    var service = {
	        catcher: catcher
	    };
	    return service;
	
	    function catcher(message) {
	        return function (reason) {
	            logger.error(message, reason);
	        };
	    }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .factory('logger', logger);
	
	logger.$inject = ['$log', 'toastr'];
	
	function logger($log, toastr) {
	    var service = {
	        showToasts: true,
	
	        error: error,
	        info: info,
	        success: success,
	        warning: warning,
	
	        log: $log.log
	    };
	
	    return service;
	
	    function error(message, data, title) {
	        toastr.error(message, title);
	        $log.error('Error: ' + message, data);
	    }
	
	    function info(message, data, title) {
	        toastr.info(message, title);
	        $log.info('Info: ' + message, data);
	    }
	
	    function success(message, data, title) {
	        toastr.success(message, title);
	        $log.info('Success: ' + message, data);
	    }
	
	    function warning(message, data, title) {
	        toastr.warning(message, title);
	        $log.warn('Warning: ' + message, data);
	    }
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .factory('sessionStorage', sessionStorage);
	
	sessionStorage.$inject = ['$window'];
	
	function sessionStorage($window) {
	    return {
	        get: get,
	        set: set,
	        remove: remove
	    };
	
	    function get(key) {
	        if (typeof ($window.sessionStorage) === 'undefined') return null;
	
	        return JSON.parse($window.sessionStorage.getItem(key));
	    }
	
	    function set(key, value) {
	        if (typeof ($window.sessionStorage) === 'undefined') return;
	
	        $window.sessionStorage.setItem(key, JSON.stringify(value));
	    }
	
	    function remove(key) {
	        $window.sessionStorage.removeItem(key);
	    }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .factory('urlParameters', urlParameters);
	
	urlParameters.$inject = ['sessionStorage'];
	
	function urlParameters(sessionStorage) {
	    return {
	        capture: capture,
	        get: get
	    };
	
	    function capture(parameters) {
	        if (typeof parameters === 'undefined') return;
	
	        if (typeof parameters === 'string') parameters = [parameters];
	
	        parameters.forEach(function(parameter) {
	            var value = getParameterByName(parameter);
	
	            if (value) sessionStorage.set('ea5.' + parameter.toLowerCase(), value);
	        });
	    }
	
	    function get(parameter) {
	        return sessionStorage.get('ea5.' + parameter.toLowerCase());
	    }
	
	    function getParameterByName(name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]").toLowerCase();
	        var paramString = location.search;
	
	        if (paramString === "" && location.hash.match(".+\\?.+")) {
	            paramString = location.hash.substr(location.hash.search("\\?.+"));
	        }
	
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	            results = regex.exec(paramString.toLowerCase());
	        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	    }
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .factory('tourTimeSelection', tourTimeSelection);
	
	function tourTimeSelection() {
	    return {
	        get: get
	    };
	
	    function get(apptDate) {
	        console.log('tourTimeSelection!!!');
	        var now = new Date();
	        var earliestTime = new Date();
	        earliestTime.setHours(06, 30, 00);
	        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	
	        if (apptDate) {
	            if (apptDate.getTime() === today.getTime() && earliestTime.getTime() < now.getTime()) {
	                return createTimes(now);
	            } else {
	                var starttime = earliestTime;
	                return createTimes(starttime);
	            }
	        }
	    }
	
	    function createTimes(start) {
	        var nowhours = start.getHours();
	        var nowminutes = start.getMinutes();
	        var hourperiod;
	        var hournumeric;
	        var times = [];
	
	        if (nowminutes >= 0 && nowminutes < 30) {
	            nowminutes = 30;
	        } else {
	            nowminutes = 0;
	            nowhours++;
	        }
	
	        for (var i = nowhours; i < 24; i += 1) {
	            //get ante/post meridiem times
	            if (i < 12) {
	                hourperiod = ' AM';
	            } else {
	                hourperiod = ' PM';
	            }
	            if (i <= 12) {
	                hournumeric = i;
	            } else {
	                hournumeric = i - 12;
	            }
	
	            for (var y = nowminutes; y <= 30; y += 30) {
	                var minsText;
	                if (y === 0) {
	                    minsText = '00';
	                } else {
	                    minsText = y.toString();
	                }
	                var newTime = hournumeric + ":" + minsText + hourperiod;
	                times.push(newTime);
	                if (nowminutes >= 0 && nowminutes < 30) {
	                    nowminutes = 30;
	                } else {
	                    nowminutes = 0;
	                }
	                //if time is 11PM, break 30 min loop;
	                if (i === 23) {
	                    y += 30;
	                }
	            }
	        }
	
	        return times;
	    }
	}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var google = __webpack_require__(21);
	
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	
	angular
	    .module('ea5')
	    .directive('ea5MapLink', ea5MapLink);
	
	function ea5MapLink() {
	    var directive = {
	        scope: {},
	        restrict: 'E',
	        controller: controller,
	        controllerAs: 'dvm',
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true
	    }
	
	    return directive;
	
	    function controller() {
	        var vm = this;
	        vm.map = {};
	        vm.lockedMarkers = [];
	        vm.markers = [];
	        vm.mapBounds = new google.maps.LatLngBounds();
	        vm.setMap = setMap;
	        vm.addLockedMarker = addLockedMarker;
	        vm.addMarker = addMarker;
	        vm.showMarkers = showMarkers;
	        vm.hideMarkers = hideMarkers;
	        vm.showMarker = showMarker;
	        vm.hideMarker = hideMarker;
	        vm.deleteMarkersBeyondBounds = deleteMarkersBeyondBounds;
	        vm.boundsToVisible = boundsToVisible;
	
	        function setMap(map) {
	            vm.map = map;
	            vm.map.initialized = true;
	            vm.showMarkers(vm.lockedMarkers);
	            vm.showMarkers(vm.markers);
	            if (typeof vm.map.exploreMode === 'undefined' || !vm.map.exploreMode) {
	                if (vm.markers.length) {
	                    vm.map.fitBounds(vm.mapBounds);
	                }
	            }
	        }
	
	        function addLockedMarker(marker) {
	            vm.lockedMarkers.push(marker);
	            vm.mapBounds.extend(marker.getPosition());
	            if (vm.map.initialized) {
	                marker.setMap(vm.map);
	            }
	        }
	
	        function addMarker(marker) {
	            vm.markers.push(marker);
	            vm.mapBounds.extend(marker.getPosition());
	            if (vm.map.initialized) {
	                vm.showMarker(marker);
	            }
	        }
	
	        function showMarkers(markers) {
	            angular.forEach(markers, function (marker) {
	                marker.setMap(vm.map);
	            });
	        }
	
	        function hideMarkers(markers) {
	            angular.forEach(markers, function (marker) {
	                marker.setMap(null);
	            });
	        }
	
	        function showMarker(marker) {
	            marker.setMap(vm.map);
	        }
	
	        function hideMarker(marker) {
	            marker.setMap(null);
	        }
	
	        function deleteMarkersBeyondBounds() {
	            var refreshedMarkers = [];
	            angular.forEach(vm.markers, function (marker) {
	                if ((vm.map.getBounds().contains(marker.getPosition()))) {
	                    refreshedMarkers.push(marker);
	                } else {
	                    vm.hideMarker(marker);
	                }
	            });
	            vm.markers = [];
	            vm.markers = refreshedMarkers;
	        }
	
	        function boundsToVisible() {
	            vm.mapBounds = new google.maps.LatLngBounds();
	            angular.forEach(vm.lockedMarkers, function (marker) {
	                vm.mapBounds.extend(marker.getPosition());
	            });
	            angular.forEach(vm.markers, function (marker) {
	                if (marker.getMap() != null) {
	                    vm.mapBounds.extend(marker.getPosition());
	                }
	            });
	        }
	    }
	}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = google;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var google = __webpack_require__(21);
	
	angular.module('ea5')
	    .directive('ea5LinkedMap', ea5LinkedMap);
	
	ea5LinkedMap.$inject = ['$timeout', '$filter'];
	
	function ea5LinkedMap($timeout, $filter) {
	    var directive = {
	        require: '^ea5MapLink',
	        link: link,
	        template: '<div class="map"></div>',
	        scope: {
	            lat: '@',
	            lon: '@',
	            zoom: '@',
	            scrollable: '@',
	            draggable: '@',
	            styles: '@',
	            hideControls: '@',
	            showControlsOnHover: '@',
	            showTransitLayer: '@',
	            pollBounds: '@',
	            mapLimits: '=',
	            exploreMode: '=',
	            fitToPins: '='
	        },
	        restrict: 'EA'
	    };
	    return directive;
	
	    function link(scope, element, attrs, ctrl) {
	        if (typeof scope.lat === 'undefined' || typeof scope.lon === 'undefined') throw Error("Map requires a center property w/ [latitude, longitude]");
	        if (typeof scope.zoom === 'undefined') throw Error('Map requires a zoom level');
	
	        // lets browser finish loading before loading map
	        $timeout(function () {
	            createMap(scope, element, ctrl);
	        });
	    }
	
	    function createMap(scope, element, ctrl) {
	        var map = new google.maps.Map(element[0].children[0],
	        {
	            maxZoom: 20,
	            scrollwheel: (typeof scope.scrollable === 'undefined') ? true : scope.scrollable.toLowerCase() !== 'false',
	            draggable: (typeof scope.draggable === 'undefined') ? true : scope.draggable.toLowerCase() !== 'false',
	            styles: defaultStyles.concat(scope.styles || []),
	            mapTypeControl: typeof scope.hideControls === 'undefined' ? true : scope.hideControls.toLowerCase() === 'false',
	            zoomControl: typeof scope.hideControls === 'undefined' ? true : scope.hideControls.toLowerCase() === 'false',
	            streetViewControl: typeof scope.hideControls === 'undefined' ? true : scope.hideControls.toLowerCase() === 'false',
	            exploreMode: scope.exploreMode
	        });
	
	        if (typeof scope.showTransitLayer === 'undefined' || scope.showTransitLayer.toLowerCase() !== 'false') {
	            var transitLayer = new google.maps.TransitLayer();
	            transitLayer.setMap(map);
	        }
	
	        if (typeof scope.showControlsOnHover !== 'undefined' && scope.showControlsOnHover.toLowerCase() !== 'false') {
	            showControlsOnHover(map);
	        }
	
	        if (typeof scope.pollBounds !== 'undefined' && scope.pollBounds.toLowerCase() !== 'false') {
	            watchBoundsChange(scope, map, ctrl);
	            map.updateMarkers = true;
	        }
	
	        var newZoom = -1;
	        if (!scope.exploreMode) {
	            google.maps.event.addDomListener(window, 'load', function () {
	                map.fitBounds(ctrl.mapBounds);
	                // set map zoom
	                setZoom();
	            });
	        }
	
	        ctrl.setMap(map);
	
	        function watchBoundsChange(scope, map, ctrl) {
	            if (scope.exploreMode && typeof scope.mapLimits !== 'undefined' && scope.mapLimits !== {}) {
	                map.fitBounds(scope.mapLimits);
	            }
	            element.on('click', function () {
	                exploreModeSet(scope, map, ctrl);
	            });
	
	            google.maps.event.addListener(map, 'dragend', function () {
	                exploreModeSet(scope, map, ctrl);
	            });
	
	            // run the first time
	            google.maps.event.addListenerOnce(map, 'idle', function () {
	
	                // TODO: something like this, but it doesn't work when the viewport width < 1420px. every refresh zooms the map out more
	                //var currentBounds = map.getBounds();
	                //if (typeof currentBounds !== 'undefined' && currentBounds !== {} && currentBounds !== scope.mapLimits && scope.exploreMode && typeof scope.mapLimits !== 'undefined' && scope.mapLimits !== {})
	                //    scope.mapLimits = currentBounds;
	
	                // do this once on page load. offload it for later so that we know the markers have been loaded
	                $timeout(function() {
	                    refreshMarkers();
	                    if (map.exploreMode !== true) logMapData();
	                });
	            });
	
	            // recurring call on map idle
	            google.maps.event.addListener(map, 'idle', function () {
	
	                if (map.exploreMode !== true) {
	
	                    // not explore mode, this continuously fires
	                    map.fitBounds(ctrl.mapBounds);
	                    // set map zoom
	                    setZoom();
	                } else {
	                    // if explore mode, this will only fire on map move/zoom
	                    refreshMarkers();
	                    logMapData();
	                }
	            });
	
	            function logMapData() {
	                // log map center
	                if (map.center) {
	                    var lat = map.center.lat();
	                    var lon = map.center.lng();
	                    var zoom = map.zoom;
	                    var markerCount = ctrl.markers.length;
	
	                    // diagnostics: log map information to console
	                    console.log('c: (' + lat + ', ' + lon + '), z: ' + zoom + ', m: ' + markerCount);
	
	                    ga('send', 'event', 'SRP Map', 'Pan', markerCount);
	                }
	            }
	        }
	
	        function setZoom() {
	            if (newZoom === -1) {
	                newZoom = map.zoom + parseInt(scope.zoom);
	            }
	            map.setZoom(newZoom);
	
	            if (scope.fitToPins && scope.fitToPins === true) return;
	
	            if (parseFloat(scope.lat) !== 0 && parseFloat(scope.lon) !== 0) map.setCenter({
	                lat: parseFloat(scope.lat), lng: parseFloat(scope.lon)
	            });
	        }
	
	        function showControlsOnHover(map) {
	            var showControls = { mapTypeControl: true, zoomControl: true, streetViewControl: true };
	            var hideControls = { mapTypeControl: false, zoomControl: false, streetViewControl: false };
	
	            google.maps.event.addDomListener(map.getDiv(), 'mouseover', function (e) {
	                e.cancelBubble = true;
	                if (!map.hover) {
	                    map.hover = true;
	                    map.setOptions(showControls);
	                }
	            });
	            google.maps.event.addDomListener(document.getElementsByTagName('body')[0], 'mouseover', function (e) {
	                if (map.hover) {
	                    map.hover = false;
	                    map.setOptions(hideControls);
	                }
	            });
	        }
	
	        function exploreModeSet(scope, map, ctrl) {
	            var mapBounds = map.getBounds();
	            $timeout(function () {
	                scope.exploreMode = map.exploreMode = true;
	                scope.mapLimits = mapBounds;
	                ctrl.mapBounds = mapBounds;
	                ctrl.deleteMarkersBeyondBounds();
	
	                // move marker refresh to map 'idle' event
	            }, 0);
	        }
	
	        function refreshMarkers() {
	            ctrl.markers = $filter('orderBy')(ctrl.markers, centerPointSort);
	
	            angular.forEach(ctrl.markers, function (marker, i) {
	                marker.labelContent = (i + 1);
	                if (typeof marker.label === 'undefined') return;
	                marker.label.setContent();
	                google.maps.event.trigger(marker, 'labelChange');
	            });
	
	            function centerPointSort(marker) {
	                var center = ctrl.map.getCenter();
	                var position = marker.getPosition();
	
	                if (typeof center !== 'undefined' && typeof position !== 'undefined') {
	                    return (Math.pow(position.lat() - center.lat(), 2) + Math.pow(position.lng() - center.lng(), 2));
	                }
	
	                return false;
	            }
	        }
	    }
	}
	
	//todo: setup an option for overriding styles
	//var defaultStyles = [
	//    {}
	//];
	var defaultStyles = [{
	    "featureType": "administrative",
	    "elementType": "labels.text.fill",
	    "stylers": [{
	        "color": "#444444"
	    }]
	}, {
	    "featureType": "landscape",
	    //"elementType": "all",
	    //"stylers": [{
	    //    "color": "#f2f2f2"
	    //}]
	    "stylers": [
	        {
	            "hue": "#f2f2f2"
	        },
	        {
	            "saturation": -100
	        },
	        {
	            "lightness": 50
	        },
	        {
	            "gamma": 1
	        }
	    ]
	}, {
	    "featureType": "poi",
	    "elementType": "all",
	    "stylers": [{
	        "visibility": "on"
	    }]
	}, {
	    "featureType": "poi.business",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	}, {
	    "featureType": "poi.place_of_worship",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	},
	 {
	     "featureType": "road",
	     "elementType": "all",
	     "stylers": [{
	         "saturation": -100
	     }, {
	         "lightness": 45
	     }]
	 }, {
	     "featureType": "road.highway",
	     "elementType": "geometry.stroke",
	     "stylers": [{
	         "color": "#f0e7d1"
	     }, {
	         "weight": "1"
	     },
	     { "lightness": -5 }]
	 }, {
	     "featureType": "road.highway",
	     "elementType": "labels.text.fill",
	     "stylers": [{
	         "color": "#c0c0c0"
	     }]
	 }, {
	     "featureType": "road.highway",
	     "elementType": "geometry.fill",
	     "stylers": [{
	         "color": "#f2e9d3"
	     },
	         { "lightness": 20 }
	     ]
	 }, {
	     "featureType": "road.highway",
	     "elementType": "labels",
	     "stylers": [
	         {
	             "visibility": "on"
	         }
	     ]
	 },
	{
	    "featureType": "road.arterial",
	    "elementType": "labels.icon",
	    "stylers": [{
	        "visibility": "off"
	    }]
	},
	//{
	
	//    "featureType": "transit",
	//    "elementType": "all",
	//    "stylers": [{
	//        "visibility": "off"
	//    }]
	//}, 
	{
	    "featureType": "transit.line",
	    "elementType": "labels.text",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	},
	{
	    "featureType": "water",
	    "elementType": "all",
	    "stylers": [{
	        "color": "#d2dee1"
	    }, {
	        "visibility": "on"
	    }]
	}];


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var google = __webpack_require__(21);
	
	angular.module('ea5')
	    .directive('ea5LinkedMarker', ea5LinkedMarker);
	ea5LinkedMarker.$inject = ['$timeout'];
	
	function ea5LinkedMarker($timeout) {
	    var directive = {
	        require: '^ea5MapLink',
	        link: link,
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true,
	        scope: {
	            lat: '@',
	            lon: '@',
	            icon: '@',
	            isHoverFocus: '@',
	            focusIcon: '@',
	            isPrimary: '@',
	            label: '@',
	            linkedLabel: '=',
	            crossSellClick: '@',
	            srpClick: '@'
	        },
	        restrict: 'EA'
	    };
	
	    return directive;
	
	    function link(scope, element, attrs, ctrl) {
	        $timeout(function () {
	            initMarker(scope, element, ctrl);
	        });
	    }
	
	
	    function initMarker(scope, element, ctrl) {
	        var icons = generateMarkerIcons(scope.icon, scope.focusIcon, scope.isHoverFocus, scope.isPrimary);
	
	        if (typeof scope.label === 'undefined' && typeof scope.linkedLabel === 'undefined') {
	            scope.marker = new google.maps.Marker({
	                position: new google.maps.LatLng(scope.lat,
	                    scope.lon),
	                icon: icons.blurIcon
	            });
	
	        } else {
	            scope.marker = new MarkerWithLabel({
	                position: new google.maps.LatLng(scope.lat,
	                    scope.lon),
	                icon: icons.blurIcon,
	                labelAnchor: new google.maps.Point(14, 14),
	                labelClass: 'map-marker map-marker-blur',
	                labelContent: scope.linkedLabel || scope.label
	            });
	        }
	
	
	        if (typeof scope.linkedLabel !== 'undefined') {
	            addLabelChange(scope);
	        }
	
	        addMapIconHover(scope.marker, element);
	
	        if (typeof scope.isHoverFocus != 'undefined' && scope.isHoverFocus) {
	            addHover(element, scope.marker, icons.blurIcon, icons.focusIcon, (typeof scope.label !== 'undefined' || typeof scope.linkedLabel !== 'undefined'));
	        }
	
	        if (typeof scope.crossSellClick !== 'undefined') {
	            addClickExpand(scope.marker, scope.crossSellClick);
	        }
	        if (typeof scope.srpClick !== 'undefined') {
	            addClickScrollTo(scope.marker, scope.srpClick);
	        }
	
	        if (typeof scope.isPrimary != 'undefined' && scope.isPrimary) {
	            ctrl.addLockedMarker(scope.marker);
	        } else {
	            ctrl.addMarker(scope.marker);
	        };
	
	    }
	
	    /* MAP LINK INTERACTIVITY */
	    function addHover(element, marker, blurIcon, focusIcon, hasLabel) {
	        var originalZIndex = marker.zIndex;
	        marker.addListener('mouseover', function () {
	            marker.setIcon(focusIcon);
	            marker.setZIndex(1000);
	            if (hasLabel) {
	                marker.labelClass = 'map-marker map-marker-focus';
	                marker.label.draw();
	            }
	        });
	
	        marker.addListener('mouseout', function () {
	            marker.setIcon(blurIcon);
	            marker.setZIndex(originalZIndex);
	            if (hasLabel) {
	                marker.labelClass = 'map-marker map-marker-blur';
	                marker.label.draw();
	            }
	        });
	
	        element.addClass('map-hover-target');
	        element.bind('mouseover', function () { google.maps.event.trigger(marker, 'mouseover') });
	        element.bind('mouseout', function () { google.maps.event.trigger(marker, 'mouseout') });
	    }
	
	    function addClickExpand(marker, target) {
	        $(target).collapse({toggle: false, parent: '#cross-sell-accordion' });
	        marker.addListener('click', function () {
	            $(target).collapse('show');
	        });
	    }
	
	    function addClickScrollTo(marker, target) {
	        marker.addListener('click', function () {
	            var offset = $(target).parents('#property-listings').scrollTop();
	            offset = offset + $(target).parent('.property').position().top;
	            $(target).parents('#property-listings').scrollTop(offset);
	        });
	    }
	
	    /* highlight corisponding business in nearby list on map icon hover */
	    function addMapIconHover(marker,linkedLabel) {
	        marker.addListener('mouseover', function () {
	            $(linkedLabel).addClass('mapHover');
	        });
	        marker.addListener('mouseout', function () {
	            $(linkedLabel).removeClass('mapHover');
	        });
	        
	    }
	
	    /* GENERATE MARKERS ON MAP */
	    function generateMarkerIcons(blurIcon, focusIcon, isHoverFocus, isPrimary) { //scope.icon, scope.focusIcon, scope.isHoverFocus, scope.isPrimary
	        var icons = {
	            focusIcon: {},
	            blurIcon: {}
	        },
	        dimension = {
	            size: {
	                height: 25,
	                width: 25
	            },
	            scale: {
	                height: 75,
	                width: 25
	            },
	            origin: {
	                x: 0,
	                y: 50,
	                yOffset: 25
	            },
	            zindex: 0
	        }
	
	        if (typeof isPrimary != 'undefined' && isPrimary) {
	            dimension.size.height = 37;
	            dimension.size.width = 37;
	            dimension.scale.height = 74;
	            dimension.scale.width = 37;
	            dimension.origin.x = 0;
	            dimension.origin.y = 0;
	            dimension.origin.yOffset = 37;
	        }
	
	        if (typeof blurIcon != 'undefined' && blurIcon) {
	            icons.blurIcon.url = blurIcon;
	            icons.blurIcon.size = { height: dimension.size.height, width: dimension.size.width };
	            icons.blurIcon.scaledSize = { height: dimension.scale.height, width: dimension.scale.width };
	            icons.blurIcon.origin = { x: dimension.origin.x, y: dimension.origin.y };
	        } else {
	            icons.blurIcon.path = google.maps.SymbolPath.CIRCLE;
	            icons.blurIcon.scale = 8;
	            icons.blurIcon.fillOpacity = 0;
	            icons.blurIcon.strokeOpacity = 0;
	        }
	
	        if (typeof isHoverFocus != 'undefined' && isHoverFocus) {
	            if (typeof focusIcon != 'undefined' && focusIcon) {
	                icons.focusIcon.url = focusIcon;
	                icons.focusIcon.size = { height: dimension.size.height, width: dimension.size.width };
	                icons.focusIcon.scaledSize = { height: dimension.scale.height, width: dimension.scale.width };
	                icons.focusIcon.origin = { x: dimension.origin.x, y: dimension.origin.yOffset };
	            } else {
	                icons.focusIcon.path = google.maps.SymbolPath.CIRCLE;
	                icons.focusIcon.scale = 8;
	                icons.focusIcon.fillOpacity = 0;
	                icons.focusIcon.strokeOpacity = 0;
	            }
	        }
	
	        return icons;
	    }
	
	    function addLabelChange(scope) {
	        google.maps.event.addListener(scope.marker, 'labelChange', function (){
	            $timeout(function () {
	                scope.linkedLabel = scope.marker.labelContent;
	            }, 0, true);
	        });
	    }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	angular.module('ea5')
	    .directive('ea5ResponsiveMarkers', ea5ResponsiveMarkers);
	
	ea5ResponsiveMarkers.$inject = ['$timeout', '$window'];
	
	//directive hides all non-locked markers on parent map if element is not visible on resize or load.
	function ea5ResponsiveMarkers($timeout, $window) {
	    var directive = {
	        require: '^ea5MapLink',
	        template: '<div></div>',
	        replace: true,
	        link: link,
	        restrict: 'E'
	    };
	    return directive;
	
	    function link(scope, element, attr, ctrl) {
	        angular.element($window).bind('resize', function () {
	            $timeout(function () {
	                // check visibility on resize.
	                hideMarkersIfHidden(element, ctrl);
	                ctrl.map.fitBounds(ctrl.mapBounds);
	            });
	        });
	
	        if (ctrl.mapInitialized) {
	            hideMarkersIfHidden(element, ctrl);
	            ctrl.map.fitBounds(ctrl.mapBounds);
	        } else {
	            $timeout(function () {
	                hideMarkersIfHidden(element, ctrl);
	                ctrl.map.fitBounds(ctrl.mapBounds);
	            }, 100);
	        }
	        function hideMarkersIfHidden(element, ctrl) {
	            if (element.is(':visible')) {
	                ctrl.showMarkers(ctrl.markers);
	                ctrl.boundsToVisible();
	            } else {
	                ctrl.hideMarkers(ctrl.markers);
	                ctrl.boundsToVisible();
	            }
	        }
	    }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var ea5 = __webpack_require__(13); // webpack
	
	ga('send', 'pageview');
	
	
	// Content Grouping
	var contentGrouping = GetUaContentGrouping(ea5.analytics.contentGrouping);
	var contentGroup = GetUaContentGroup(ea5.analytics.contentGroup);
	
	// page-level. formerly custom variables
	var pageLevelKey = GetUaPageLevelKey(ea5.analytics.pageLevelKey);
	var pageLevelValue = GetUaPageLevelValue(ea5.analytics.pageLevelValue);
	
	
	var category = GetUaCategory(ea5.analytics.category);
	var action = GetUaAction(ea5.analytics.action);
	var label = GetUaLabel(ea5.analytics.label);
	
	$(document).ready(function () {
	    if (label != '' && label != undefined) {
	
	        if (contentGroup != '' && contentGroup != undefined) {
	            // WI 1257 hide Content Grouping and Custom Dimensions
	            // ga('set', contentGrouping, contentGroup);
	        }
	        if (pageLevelKey != '' && pageLevelKey != undefined) {
	            if (pageLevelValue != '' && pageLevelValue != undefined) {
	                // WI 1257 hide Content Grouping and Custom Dimensions
	                //ga('set', 'dimension2', pageLevelKey);
	                //ga('set', 'dimension3', pageLevelValue);
	            }
	        }
	        ga('send', 'event', category, action, label, { nonInteraction: true });
	    }
	});
	
	$('body').on('activate.bs.scrollspy', function () {
	    var target = $($(arguments[0].target).children()[0]).attr('href');
	    //console.log(target);
	    var tileName = GetTileName(target);
	    ga('send', 'event', 'Brochure Scroll', tileName, label);
	})
	
	function GetTileName(rawTile) {
	    // format the tile name
	    if (!rawTile) return 'N/A';
	
	    var tileName = rawTile.replace('#', '');
	    tileName = tileName.replace('-tile', '');
	    tileName = tileName.replace('-', ' ');
	    tileName = tileName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	    return tileName;
	}
	
	function GetUaCategory(ea5AnalyticsCategory) {
	    var category = 'Unknown';
	    if (ea5AnalyticsCategory != '' && ea5AnalyticsCategory != undefined) {
	        category = ea5AnalyticsCategory;
	    }
	    return category;
	}
	
	function GetUaAction(ea5AnalyticsAction) {
	    var action = 'Unknown';
	    if (ea5AnalyticsAction != '' && ea5AnalyticsAction != undefined) {
	        action = ea5AnalyticsAction;
	    }
	    return action;
	}
	
	function GetUaLabel(ea5AnalyticsLabel) {
	    var label = 'Unknown-' + ea5.analytics.pageRawUrl;
	    if (ea5AnalyticsLabel != '' && ea5AnalyticsLabel != undefined) {
	        label = ea5AnalyticsLabel;
	    }
	    return label;
	}
	
	function GetUaContentGrouping(ea5AnalyticsContentGrouping) {
	    var contentGrouping = 'Unknown';
	    if (ea5AnalyticsContentGrouping != '' && ea5AnalyticsContentGrouping != undefined) {
	        contentGrouping = ea5AnalyticsContentGrouping;
	    }
	    return contentGrouping;
	}
	function GetUaContentGroup(ea5AnalyticsContentGroup) {
	    var contentGroup = 'Unknown';
	    if (ea5AnalyticsContentGroup != '' && ea5AnalyticsContentGroup != undefined) {
	        contentGroup = ea5AnalyticsContentGroup;
	    }
	    return contentGroup;
	}
	function GetUaPageLevelKey(ea5AnalyticsPageLevelKey) {
	    var pageLevelKey = 'Unknown';
	    if (ea5AnalyticsPageLevelKey != '' && ea5AnalyticsPageLevelKey != undefined) {
	        pageLevelKey = ea5AnalyticsPageLevelKey;
	    }
	    return pageLevelKey;
	}
	function GetUaPageLevelValue(ea5AnalyticsPageLevelValue) {
	    var pageLevelValue = 'Unknown';
	    if (ea5AnalyticsPageLevelValue != '' && ea5AnalyticsPageLevelValue != undefined) {
	        pageLevelValue = ea5AnalyticsPageLevelValue;
	    }
	    return pageLevelValue;
	}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5AnalyticsClick', ea5AnalyticsClick);
	
	ea5AnalyticsClick.$inject = [];
	
	function ea5AnalyticsClick() {
	    var directive = {
	        link: link,
	        scope: {
	            ea5AnalyticsCategory: '@',
	            ea5AnalyticsAction: '@',
	            ea5AnalyticsLabel: '@',
	            ea5AnalyticsContentGrouping: '@',
	            ea5AnalyticsContentGroup: '@',
	            ea5AnalyticsPageLevelKey: '@',
	            ea5AnalyticsPageLevelValue: '@'
	        },
	        restrict: 'A'
	    };
	
	    return directive;
	
	    function link(scope, element, attrs) {
	        element.bind('click', clickHandler);
	
	        function clickHandler() {
	
	            if (attrs.ea5AnalyticsContentGroup != '' && attrs.ea5AnalyticsContentGroup != undefined) {
	                // WI 1257 hide Content Grouping and Custom Dimensions
	                // ga('set', attrs.ea5AnalyticsContentGrouping, attrs.ea5AnalyticsContentGroup);
	            }
	            if (attrs.ea5AnalyticsPageLevelKey != '' && attrs.ea5AnalyticsPageLevelKey != undefined) {
	                if (attrs.ea5AnalyticsPageLevelValue != '' && attrs.ea5AnalyticsPageLevelValue != undefined) {
	                    // WI 1257 hide Content Grouping and Custom Dimensions
	                    //ga('set', 'dimension2', attrs.ea5AnalyticsPageLevelKey);
	                    //ga('set', 'dimension3', attrs.ea5AnalyticsPageLevelValue);
	                }
	            }
	            ga('send', 'event', attrs.ea5AnalyticsCategory, attrs.ea5AnalyticsAction, attrs.ea5AnalyticsLabel);
	        };
	    }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5Expandable', ea5Expandable);
	
	function ea5Expandable() {
	    var directive = {
	        link: link,
	        restrict: 'A'
	    };
	
	    return directive;
	
	    function link(scope, element, attrs) {
	        var $expander = element.find('.expander');
	        var $expandable = element.find('ul.nav');
	
	        if (attrs.ea5IsExpanded === 'true') {
	            $expander.addClass('glyphicon-chevron-down');
	            $expandable.show();
	        } else {
	            $expander.addClass('glyphicon-chevron-right');
	            $expandable.hide();
	        }
	
	        $expander.bind('click', toggleExpanded);
	
	        function toggleExpanded(e) {
	            if ($expander.hasClass('glyphicon-chevron-right')) {
	                $expander.removeClass('glyphicon-chevron-right');
	                $expander.addClass('glyphicon-chevron-down');
	            } else {
	                $expander.removeClass('glyphicon-chevron-down');
	                $expander.addClass('glyphicon-chevron-right');
	            }
	            
	            $expandable.toggle();
	
	            e.stopPropagation();
	        }
	    }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .factory('pagerService', pagerService);
	
	function pagerService() {
	    // service definition
	    var service = {};
	
	    service.getPager = getPager;
	
	    return service;
	
	    // service implementation
	    function getPager(totalItems, currentPage, pageSize) {
	        // default to first page
	        currentPage = currentPage || 1;
	
	        // default page size is 10
	        pageSize = pageSize || 10;
	
	        // calculate total pages
	        var totalPages = Math.ceil(totalItems / pageSize);
	
	        var startPage, endPage;
	        if (totalPages <= 10) {
	            // less than 10 total pages so show all
	            startPage = 1;
	            endPage = totalPages;
	        } else {
	            // more than 10 total pages so calculate start and end pages
	            if (currentPage <= 6) {
	                startPage = 1;
	                endPage = 10;
	            } else if (currentPage + 4 >= totalPages) {
	                startPage = totalPages - 9;
	                endPage = totalPages;
	            } else {
	                startPage = currentPage - 5;
	                endPage = currentPage + 4;
	            }
	        }
	
	        // calculate start and end item indexes
	        var startIndex = (currentPage - 1) * pageSize;
	        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
	
	        // create an array of pages to ng-repeat in the pager control
	        var pages = _.range(startPage, endPage + 1);
	
	        // return object with all pager properties required by the view
	        return {
	            totalItems: totalItems,
	            currentPage: currentPage,
	            pageSize: pageSize,
	            totalPages: totalPages,
	            startPage: startPage,
	            endPage: endPage,
	            startIndex: startIndex,
	            endIndex: endIndex,
	            pages: pages
	        };
	    }
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	
	angular.module('ea5')
	    .filter('processUnitParam', processUnitParam);
	
	function processUnitParam() {
	    return function (input) {
	        if (input) {
	            var chars = [...input];
	            var output = '';
	            for (var i = 0; i < chars.length; i++) {
	                if (chars[i] !== '/') {
	                    output += chars[i];
	                } else {
	                    output += '-';
	                }
	            }
	            return output;
	        }
	        return "";
	    };
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(34);
	
	
	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var levenshtein = __webpack_require__(33);
	var _ = __webpack_require__(5);
	
	angular
	    .module('ea5')
	    .controller('modalSearchController', modalSearchController);
	
	modalSearchController.$inject = ['$state', '$filter', 'getModal', 'dataservice'];
	
	function modalSearchController($state, $filter, getModal, dataservice) {
		var modal = getModal();
	
		modal.result
	        .then(function () {
	            $state.go('default', null, { location: 'replace' });
	        })
	        .catch(function () {
	            $state.go('default', null, { location: 'replace' });
	        });
	
	
		var vm = this;
		vm.query = '';
		vm.siteSearch = [];
	
	    dataservice.getSearchIndex().then(function(data) {
	        vm.siteSearch = data;
	    });
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	__webpack_require__(32);
	
	angular.module('ea5')
	    .filter('searchFilter', searchFilter);
	
	searchFilter.$inject = ['$filter'];
	
	function searchFilter($filter) {
	    return function (matches, filter) {
	        //do simpler searches for possible zipcode matches
	        var zipRegex = /^\d{5}$/;
	        var reducedMatchArray = [];
	
	        var matchGroups = _.groupBy(matches, function (x) {
	            return x.KeyType;
	        });
	
	        
	
	        if (filter.length < 2) return [];
	
	
	        if (filter.length < 3) {
	            if (matchGroups["shortkeyword"] != null) {
	                var shortkeyWordResults =
	                    $filter('levenshteinFilter')(matchGroups["shortkeyword"], filter.toLowerCase());
	                reducedMatchArray = [].concat.apply([],
	                    shortkeyWordResults.map(function(item) { return item.Results; }));
	                return _.take(_.uniq(reducedMatchArray, 'Url'), 20);
	            }
	            return [];
	        }
	
	
	        if (filter.match(zipRegex)) {
	            // do exact filter if zip code
	            var zipResults = $filter('filter')(matchGroups["zip"], filter, true);
	            reducedMatchArray = [].concat.apply([], zipResults.map(function (item) { return item.Results; }));
	        } else {
	            if (matchGroups["keyword"] != null) {
	                var keyWordResults = $filter('levenshteinFilter')(matchGroups["keyword"], filter.toLowerCase());
	                reducedMatchArray = [].concat.apply([], keyWordResults.map(function(item) { return item.Results; }));
	            }
	
	            var textResults = $filter('levenshteinFilter')(matchGroups["name"], filter.toLowerCase());
	            reducedMatchArray = reducedMatchArray.concat.apply(reducedMatchArray, textResults.map(function (item) { return item.Results; }));
	        }
	
	        // remove matches after highest rated that are duplicates
	        return _.take(_.uniq(reducedMatchArray, 'Url'), 20);
	    }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var levenshtein = __webpack_require__(33);
	var _ = __webpack_require__(5);
	
	angular.module('ea5')
	    .filter('levenshteinFilter', levenshteinFilter);
	
	function levenshteinFilter() {
	    function editDistance(a, b) {
	        return levenshtein(a, b, true);
	    };
	
	    function withinThreshold(threshold, dist) {
	        return dist < threshold;
	    };
	
	    function firstChars(i, str) {
	        return str.substr(0, i);
	    };
	
	    return function (matches, filter) {
	        // remove spaces from query for percent match (since matches are per word)
	        var threshold = filter.replace(/\s+/g, '').length * (1 - .8);
	
	        var filtered = matches.map(function (x) {
	            // prepare lookup array for current phrase
	            var key = _.words(x.Key.toLowerCase());
	            // itterate through query words
	            var score = _.words(filter)
	                .map(function (query) {
	                    return key.map(function (word) {
	                        // assess words in query against words in phrase
	                        return editDistance(query, firstChars(query.length, word));
	                    }).reduce(function (prev, current) {
	                        // find best match word in phrase for each query word
	                        return Math.min(prev, current);
	                    });
	                }).reduce(function (prev, current) {
	                    // sum distance of each query word from best match
	                    return prev + current;
	                }, 0);
	            return {
	                match: x,
	                score: score,
	                isMatch: withinThreshold(threshold, score)
	            };
	        }).filter(function (result) { return result.isMatch });
	
	        return _.sortBy(filtered, function (x) {
	            return x.score;
	        }).map(function (x) { return x.match });
	    };
	}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	var cache,
	    codes;
	
	cache = [];
	codes = [];
	
	function levenshtein(value, other, insensitive) {
	    var length,
	        lengthOther,
	        code,
	        result,
	        distance,
	        distanceOther,
	        index,
	        indexOther;
	
	    if (value === other) {
	        return 0;
	    }
	
	    length = value.length;
	    lengthOther = other.length;
	
	    if (length === 0) {
	        return lengthOther;
	    }
	
	    if (lengthOther === 0) {
	        return length;
	    }
	
	    if (insensitive) {
	        value = value.toLowerCase();
	        other = other.toLowerCase();
	    }
	
	    index = 0;
	
	    while (index < length) {
	        codes[index] = value.charCodeAt(index);
	        cache[index] = ++index;
	    }
	
	    indexOther = 0;
	
	    while (indexOther < lengthOther) {
	        code = other.charCodeAt(indexOther);
	
	        result = distance = indexOther++;
	
	        index = -1;
	
	        while (++index < length) {
	            distanceOther = code === codes[index] ? distance : distance + 1;
	
	            distance = cache[index];
	
	            cache[index] = result = distance > result
	                ? distanceOther > result
	                    ? result + 1
	                    : distanceOther
	                : distanceOther > distance
	                    ? distance + 1
	                    : distanceOther;
	        }
	    }
	
	    return result;
	}
	
	module.exports = levenshtein;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('searchBox', searchBox);
	
	function searchBox() {
	    var directive = {
	        compile: compile,
	        restrict: 'A'
	    }
	    return directive;
	
	    function compile(tElement) {
	        tElement.find('input').keydown(function (e) {
	            if (e.which === 40) { // down nav
	                var menu = $('.search-item');
	                menu.off('keydown');
	                menu.on('keydown', function (e) {
	                    if (e.which === 40) { // down
	                        $(this).parent().next().find('.search-item').focus();
	                    }
	                    if (e.which === 38) { // up
	                        $(this).parent().prev().find('.search-item').focus();
	                    }
	                });
	                tElement.find('.search-item:first').focus();
	            }
	        });
	    }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	__webpack_require__(34);
	
	
	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var levenshtein = __webpack_require__(33);
	var _ = __webpack_require__(5);
	
	angular
	    .module('ea5')
	    .controller('searchController', SearchController);
	
	SearchController.$inject = ['$filter'];
	
	function SearchController($filter) {
	    var vm = this;
	    vm.query = '';
	    vm.siteSearch = [];
	
	    if (typeof ea5.siteSearch !== 'undefined' && ea5.siteSearch.length) {
	        vm.siteSearch = ea5.siteSearch;
	    }
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	
	// functionality
	__webpack_require__(37);
	
	angular
	    .module('ea5')
	    .controller('mediaGalleryController', mediaGalleryController);
	
	mediaGalleryController.$inject = ['$scope', '$sce', '$state', 'getModal', '$filter', '$window'];
	
	function mediaGalleryController($scope, $sce, $state, getModal, $filter, $window) {
	    var vm = this;
	    vm.filter = 'All';
	    vm.filtered = [];
	    vm.setFilter = setFilter;
	    vm.pageRight = pageRight;
	    vm.pageLeft = pageLeft;
	    vm.entrySlide = 0;
	    vm.gotoMediaId = -1;
	    vm.gotoFirstOfType = '';
	
	    vm.Photos = [];
	    vm.Videos = [];
	    vm.Matterports = [];
	    vm.Zillows = [];
	    vm.CommunityMap = [];
	
	    init();
	
	    // handle case where vm.entrySlide gets out of sync from Bootstrap's changes vs Angular's watch
	    $scope.$watch(function () {
	        return vm.entrySlide;
	    }, function (value) {
	        $('#media-gallery-carousel .item.active').removeClass('active');
	    });
	
	    function updateFiltered() {
	        vm.filtered = $filter('orderBy')($filter('anyInArrayFilter')(vm.media, vm.filter, 'MediaTags'), 'DisplayOrder');
	        vm.entrySlide = 0;
	        $('#media-gallery-carousel .item').removeClass('active');
	        $('#media-gallery-carousel .item:first').addClass('active');
	        $('#carousel-navigator .slider-item').removeClass('active');
	        $('#carousel-navigator .slider-item:first').addClass('active');
	    }
	
	    function setFilter(group) {
	        vm.filter = group;
	        $scope.$broadcast('scrollerReset');
	        // call again to update
	        updateFiltered();
	    };
	    function pageRight() {
	        $scope.$broadcast('pageGalleryRight');
	    }
	    function pageLeft() {
	        $scope.$broadcast('pageGalleryLeft');
	    }
	
	    var modal = getModal();
	
	    modal.result
	        .then(function () {
	            $state.go('default', null, { location: 'replace' });
	        })
	        .catch(function () {
	            $state.go('default', null, { location: 'replace' });
	        });
	
	    vm.media = _.compact(
	        (_.map(vm.Photos,
	            function (media) {
	                media.type = "photo";
	                media.Key = null;
	                return media;
	            })
	            ).concat(
	                _.map(vm.Videos,
	                function (media) {
	                   media.type = "video";
	                   media.Key = media.Key;
	                   media.ImageUrl = 'https://img.youtube.com/vi/' + media.Key + '/2.jpg';
	                   return media;
	                })
	            ).concat(
	                _.map(vm.CommunityMap,
	                function (media) {
	                   media.type = "communityMap";
	                   return media;
	                })
	            ).concat(
	                //if($window.width > )
	                _.map(vm.Matterports,
	                function (media) {
	                   media.type = "matterport";
	                   media.Key = media.Key;
	                   media.Src = $sce.trustAsResourceUrl("https://my.matterport.com/show/?m=" + media.Key);
	                   media.ImageUrl = "https://media.equityapartments.com/image/upload/v1/Content/icon-matterport.png";
	                   return media;
	                })
	            ).concat(
	            //if($window.width > )
	            _.map(vm.Zillows,
	                function (media) {
	                    media.type = "zillow";
	                    media.Key = media.Key;
	                    media.Src = $sce.trustAsResourceUrl("https://www.zillow.com/view-3d-home/" + media.Key);
	                    media.ImageUrl = "https://media.equityapartments.com/image/upload/v1/Content/icon-matterport.png";
	                    return media;
	                })
	            )
	        );
	
	    updateFiltered();
	
	    // if valid mediaId is specified
	    var mediaIndex = _.findIndex(vm.filtered, function (mediaProperty) {
	        return mediaProperty.MediaId === vm.gotoMediaId;
	    });
	    // if not found and has 'first of type' setting
	    if (mediaIndex < 0 && vm.gotoFirstOfType !== '') {
	        mediaIndex = _.findIndex(vm.filtered, function (mediaProperty) {
	            return mediaProperty.type === vm.gotoFirstOfType;
	        });
	    }
	
	    if (mediaIndex >= 0) {
	        vm.entrySlide = mediaIndex;
	    }
	
	    vm.Groups = _.union(_.map(vm.media, function (item) {
	        return item.MediaTags;
	    }));
	
	    vm.test = _.uniq([].concat.apply([], _.map(vm.media, function (media) {
	        return media.MediaTags;
	    })));
	
	    function init() {
	        vm.Photos = ea5.mediaGallery.Photos;
	        vm.Videos = ea5.mediaGallery.Videos;
	        vm.CommunityMap = ea5.mediaGallery.CommunityMap;
	        vm.Matterports = ea5.mediaGallery.Matterports;
	        vm.Zillows = ea5.mediaGallery.Zillows;
	
	        if ($state.params.unitGallery) {
	
	            var availableUnits = _.map(ea5.unitAvailability.BedroomTypes, function (type) {
	                return type.AvailableUnits;
	            });
	
	            var selectedUnit = _.find(_.compact([].concat.apply([], availableUnits), ea5.unitAvailability.PremiumUnits), function (unit) {
	                var isLedger = unit.LedgerId === $state.params.unitGallery.ledgerId;
	                if (!isLedger) return false;
	
	                var isBuilding = unit.BuildingId === $state.params.unitGallery.buildingId;
	                if (!isBuilding) return false;
	
	                var isUnit = unit.UnitId === $state.params.unitGallery.unitId;
	                if (!isUnit) return false;
	
	                return true;
	            });
	
	            // add floorplan
	            var photos = _.map(selectedUnit.Photos.concat([{
	                Alt: selectedUnit.FloorplanName,
	                Caption: 'Floorplan',
	                Id: -1,
	                ImageUrl: selectedUnit.Floorplan,
	                DisplayOrder: -1,
	                type: 'floorplan'
	            }]), function (photo) {
	                photo.MediaTags = ['Unit Gallery'];
	                photo.type = 'photo';
	                return photo;
	            });
	            var videos = _.map(selectedUnit.Videos, function (video) {
	                video.MediaTags = ['Unit Gallery'];
	                video.type = 'video';
	                return video;
	            });
	            if ($window.innerWidth > 731) {
	                var matterports = _.map(selectedUnit.Matterports,
	                function (matterport) {
	                    matterport.MediaTags = ['Unit Gallery'];
	                    matterport.type = 'matterport';
	                    return matterport;
	                });
	            }
	            if ($window.innerWidth > 731) {
	                var zillows = _.map(selectedUnit.Zillows,
	                    function (zillow) {
	                        zillow.MediaTags = ['Unit Gallery'];
	                        zillow.type = 'zillow';
	                        return zillow;
	                    });
	            }
	            
	
	            $sce.trustAsResourceUrl('https://my.matterport.com/show/?m=YVbM94FtQfE');
	
	            vm.Photos = photos;
	            vm.Videos = videos;
	            vm.Matterports = matterports;
	            vm.Zillows = zillows;
	
	            updateFiltered();
	        }
	
	        vm.filter = $state.params.gotoCategory;
	        vm.entrySlide = $state.params.gotoSlide;
	        vm.gotoMediaId = $state.params.gotoMediaId;
	        vm.gotoFirstOfType = $state.params.gotoFirstOfType;
	    }
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5MediaScroller', ea5MediaScroller);
	
	function ea5MediaScroller() {
	    var directive = {
	        link: link,
	        scope: {
	            scrollRight: '@',
	            scrollLeft: '@',
	            ea5AnalyticsCategory: '@',
	            ea5AnalyticsAction: '@',
	            ea5AnalyticsLabel: '@'
	
	        },
	        replace: true,
	        restrict: 'A'
	    };
	    return directive;
	
	    function link(scope, element, attrs) {
	        scope.scrollerPosition = 0;
	        scope.sliderItems = [];
	        scope.maxScrollerItem = 0;
	
	        scope.$on('scrollerReset', function () {
	            scope.scrollerPosition = 0;
	        });
	
	        scope.$on('pageGalleryRight', function () {
	            ga('send', 'event', attrs.ea5AnalyticsCategory, attrs.ea5AnalyticsAction, attrs.ea5AnalyticsLabel);
	            pageGallery(1);
	        });
	
	        scope.$on('pageGalleryLeft', function () {
	            ga('send', 'event', attrs.ea5AnalyticsCategory, attrs.ea5AnalyticsAction, attrs.ea5AnalyticsLabel);
	            pageGallery(-1);
	        });
	
	        function pageGallery(direction) {
	            scope.sliderItems = element.find('.slider-item');
	            setMaxScrollerPosition();
	            var newItemIndex = _.indexOf(scope.sliderItems, element.find('.active')[0]) + direction;
	            if (direction < 0 && newItemIndex < 0) newItemIndex = scope.sliderItems.length - 1;
	            if (direction > 0 && newItemIndex > scope.sliderItems.length - 1) newItemIndex = 0;
	            var newActiveItem = $(scope.sliderItems[newItemIndex]);
	            var viewMin = $(element).scrollLeft();
	            var viewMax = viewMin + element.outerWidth();
	            if (newActiveItem.position().left > viewMax || newActiveItem.position().left < viewMin) {
	                scope.scrollerPosition = newItemIndex > scope.maxScrollerItem ? scope.maxScrollerItem : newItemIndex;
	            };
	        }
	
	        scope.$watch(function () { return element.find('.slider-item').length }, function () {
	            scope.sliderItems = element.find('.slider-item');
	        });
	
	        scope.$watch('scrollerPosition', function (newPosition) {
	            var newActiveItem = $(scope.sliderItems[newPosition]);
	            if (typeof newActiveItem === 'undefined') return;
	            element.animate({ scrollLeft: newActiveItem.position().left }, 100);
	        });
	
	        $(scope.scrollRight).bind('click', function () {
	            setMaxScrollerPosition();
	            scope.scrollerPosition = scope.scrollerPosition + 1 < scope.maxScrollerItem ? scope.scrollerPosition + 1 : scope.maxScrollerItem;
	        });
	        $(scope.scrollLeft).bind('click', function () {
	            scope.scrollerPosition = scope.scrollerPosition > 0 ? scope.scrollerPosition - 1 : 0;
	        });
	
	        function setMaxScrollerPosition() {
	            var maxScrollerPosition = element[0].scrollWidth - element.outerWidth();
	            scope.maxScrollerItem = _.indexOf(scope.sliderItems, (_.find(scope.sliderItems, function (item) { return $(item).position().left > maxScrollerPosition; })));
	        }
	    }
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	
	angular.module('ea5')
	    .controller('restrictionsController', restrictionsController);
	
	restrictionsController.$inject = ['$state', '$scope', 'getModal'];
	
	function restrictionsController($state, $scope, getModal) {
	    var vm = this;
	    var modal = getModal();
	
	    modal.result
	        .then(function () {
	            $state.go('default', null, { location: 'replace' });
	        })
	        .catch(function () {
	            $state.go('default', null, { location: 'replace' });
	        });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	__webpack_require__(41);
	
	angular
	    .module('ea5')
	    .controller('guestCardController', GuestCardController);
	
	GuestCardController.$inject = ['$state', '$scope', 'getModal', 'dataservice', 'sessionStorage', 'urlParameters', '$timeout', '$filter'];
	
	function GuestCardController($state, $scope, getModal, dataservice, sessionStorage, urlParameters, $timeout, $filter) {
	    var vm = this;
	    var modal = getModal();
	    vm.minMoveinDate = new Date();
	    vm.formData = {};
	    vm.schedule = {};
	    vm.scheduleFiltered = {};
	    vm.propertyInfo = {};
	    vm.mainPhone = {};
	    vm.setFormMarketingParams = setFormMarketingParams;
	    vm.setFormStateParams = setFormStateParams;
	    vm.loadFormData = loadFormData;
	    vm.loadFormData();
	
	    vm.showAppointment = false;
	    vm.selectedDate = moment();
	    vm.selectedTime = moment();
	    vm.startingDateIndex = 0;
	    vm.selectedDateIndex = 0;
	    vm.nearestTimeIndex = 0;
	    vm.previousDayLastTime = 0;
	
	    vm.UseNewScheduleAppointmentUi = ea5.template;
	    vm.ui2019 = ea5.ui2019;
	
	    modal.result
	        .then(function () {
	            $state.go('default', null, { location: 'replace' });
	        })
	        .catch(function () {
	            $state.go('default', null, { location: 'replace' });
	        });
	
	    function loadFormData() {
	        var isLoaded = typeof ea5.contactProperty !== 'undefined';
	        var isParam = typeof $state.params.propertyId !== 'undefined' && $state.params.propertyId;
	        if (!isLoaded && !isParam) $state.go('default', null, { location: 'replace' });;
	        if (isParam && (!isLoaded || !_.endsWith(ea5.contactProperty.PropertyId, $state.params.propertyId))) {
	            dataservice.getPropertyById($state.params.propertyId).then(
	                function (data) {
	                    $timeout(function () {
	                        
	                        data.ContactProperty.GuestCardInitiateType = $state.params.guestCardInitiateType;
	                        vm.formData = data.ContactProperty;
	                        setFormContactInfo(vm.formData);
	                        vm.propertyInfo = data.PropertyInfo;
	                        vm.mainPhone = data.Hero.MainPhone;
	                        vm.schedule = data.ScheduleData;
	                        vm.scheduleFiltered = $filter('currentTimeFilter')(vm.schedule);
	                        //vm.schedule = ea5.schedule; //force usage of in page json model
	
	                        if (typeof vm.formData !== 'undefined') {
	                            if (vm.formData.Movein === 'undefined') {
	                                vm.formData.Movein = '';
	                            }
	                        }
	                        vm.setFormMarketingParams(vm.formData);
	                        vm.setFormStateParams(vm.formData);
	                    });
	                    isLoaded = true;
	                }).catch(
	                function () {
	                    $state.go('default', null, { location: 'replace' });
	                });
	
	        } else {
	            vm.formData = ea5.contactProperty;
	            setFormContactInfo(vm.formData);
	            vm.propertyInfo = ea5.propertyInfo;
	            if (ea5.hero.MainPhone !== 'undefined') {
	                vm.mainPhone = ea5.hero.MainPhone;
	            }
	            vm.schedule = ea5.schedule;
	            vm.scheduleFiltered = $filter('currentTimeFilter')(vm.schedule);
	            vm.setFormMarketingParams(vm.formData);
	            vm.setFormStateParams(vm.formData);
	        }
	    }
	
	    function setFormMarketingParams(form) {
	        // ils
	        var ilsId = urlParameters.get('ilsid');
	        if (ilsId) form.IlsId = ilsId;
	
	        // marketing
	        var utmSource = urlParameters.get('utm_source');
	        if (utmSource) form.UtmSource = utmSource;
	
	        var utmMedium = urlParameters.get('utm_medium');
	        if (utmMedium) form.UtmMedium = utmMedium;
	
	        var utmCampaign = urlParameters.get('utm_campaign');
	        if (utmCampaign) form.UtmCampaign = utmCampaign;
	
	        var utmContent = urlParameters.get('utm_content');
	        if (utmContent) form.UtmContent = utmContent;
	
	        var utmGroup = urlParameters.get('utm_group');
	        if (utmGroup) form.UtmGroup = utmGroup;
	    }
	
	    function setFormContactInfo(form) {
	        var storedFormData = sessionStorage.get('ea5.guestCard');
	
	        if (!storedFormData) return;
	
	        form.FirstName = storedFormData.FirstName;
	        form.LastName = storedFormData.LastName;
	        form.Email = storedFormData.Email;
	        form.Phone = storedFormData.Phone;
	        form.Movein = storedFormData.Movein ? new Date(storedFormData.Movein) : '';
	        form.AdditionalComments = storedFormData.AdditionalComments || '';
	    }
	
	    function setFormStateParams(form) {
	        if ($state.params.beds !== -1) {
	            form.Beds = +$state.params.beds;
	        }
	        if ($state.params.baths !== -1) {
	            form.Baths = +$state.params.baths;
	        }
	        if ($state.params.bldgRequested) {
	            form.BldgRequested = $state.params.bldgRequested;
	        }
	        if ($state.params.unitRequested) {
	            form.UnitRequested = $state.params.unitRequested;
	        }
	        if ($state.params.unitprice) {
	            form.UnitPrice = $state.params.unitprice;
	        }
	        if ($state.params.floorplan) {
	            form.FloorplanName = $state.params.floorplan;
	        }
	        if ($state.params.sqrft) {
	            form.SqFt = $state.params.sqrft;
	        }
	        if ($state.params.guestCardCommentType) {
	            form.GuestCardCommentType = $state.params.guestCardCommentType;
	        }
	        if ($state.params.guestCardInitiateType) {
	            form.GuestCardInitiateType = $state.params.guestCardInitiateType;
	        }
	    }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = moment;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular.module('ea5')
	    .filter('currentTimeFilter', currentTimeFilter);
	
	function currentTimeFilter() {
	    return function (days) {
	
	        var now = moment(); // get current time
	        var today = moment(0, 'HH');    // gets today's date (starting at midnight)
	
	        var currentDay = _.find(days, function (day) {
	            return day.Day.Date === now.format('MM/DD/YYYY');
	        });
	
	        if (currentDay) {    // check if current day exists in the data
	
	            var open = moment(currentDay.Day.Open, 'MM/DD/YYYY hh:mm AA');
	            var close = moment(currentDay.Day.Close, 'MM/DD/YYYY hh:mm AA');
	            var isClosed = currentDay.Day.Closed || now > close;
	            var isAlmostClosed = !isClosed && now.hour() >= 17;  // check if after 5pm
	
	            // find the maximum of either the current time or the open time and add 2 hours. extra moment() call is to clone to avoid mutation
	            var minAppointmentDate = moment(moment.max(now, open)).add(2, 'hours');
	            // if the requested time is before open, set min appointment date to 2 hours after open
	            if (now.isBefore(open)) {
	                minAppointmentDate = moment(open).add(1, 'hours');
	            }
	
	            // remove all time slots that fall before the minimum appointment date
	            _.remove(currentDay.TimeSlots, function (timeSlot) {
	                var timeSlotDate = moment(currentDay.Day.Date + ' ' + timeSlot, 'MM/DD/YYYY hh:mm AA');
	                return timeSlotDate < minAppointmentDate;
	            });
	
	            // get next open day
	            var nextOpenDay = _.find(days, function (day) {
	                return day.Day.Closed === false
	                    && moment(day.Day.Date, 'MM/DD/YYYY') >= moment(today).add(1, 'days');
	            });
	
	            if (nextOpenDay) {  // check if there is a next day available. this should be a non-closed day
	
	                open = moment(nextOpenDay.Day.Open, 'MM/DD/YYYY hh:mm AA');
	
	                // add 1 hours to the open date
	                minAppointmentDate = moment(open).add(1, 'hours');
	                //DIME20398 if (isAlmostClosed || isClosed) minAppointmentDate.set('hour', 13);   // set to 1pm if the office is currently closed
	
	                // remove all time slots that fall before the minimum appointment date
	                _.remove(nextOpenDay.TimeSlots, function (timeSlot) {
	                    var timeSlotDate = moment(nextOpenDay.Day.Date + ' ' + timeSlot, 'MM/DD/YYYY hh:mm AA');
	                    return timeSlotDate < minAppointmentDate;
	                });
	            }
	        }
	
	        return days;
	    }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('guestCardV3Controller', GuestCardV3);
	
	GuestCardV3.$inject = ['$state', '$scope', '$window', 'dataservice', 'sessionStorage', 'urlParameters', '$timeout', '$filter'];
	
	function GuestCardV3($state, $scope, $window, dataservice, sessionStorage, urlParameters, $timeout, $filter) {
	    var vm = this;
	    vm.minMoveinDate = new Date();
	    vm.formData = {};
	    vm.schedule = {};
	    vm.scheduleFiltered = {};
	    vm.propertyInfo = {};
	    vm.mainPhone = {};
	    vm.showAppointment = false;
	    vm.selectedDate = moment(); 
	    vm.selectedTime = moment();
	    vm.startingDateIndex = 0;
	    vm.selectedDateIndex = 0;
	    vm.nearestTimeIndex = 0;
	    vm.previousDayLastTime = 0;
	    vm.availableDates = [];
	    vm.availableDays = [];
	    vm.bookTour = false;
	    vm.rescheduleTour = false;
	    vm.tourType = '0';
	    vm.success = false;
	
	    vm.loadFormData = loadFormData;
	    vm.loadTimes = loadTimes;
	    vm.submit = contactNow;
	    vm.setFormMarketingParams = setFormMarketingParams;
	    vm.setFormStateParams = setFormStateParams;
	    vm.setTourType = setTourType;
	    vm.resetTourType = resetTourType;
	    vm.getIsBookNearby = getIsBookNearby;
	
	    vm.UseNewScheduleAppointmentUi = ea5.template;
	
	    vm.loadFormData();
	
	    function loadFormData() {
	        var isLoaded = typeof ea5.contactProperty !== 'undefined';
	        var isParam = typeof $state.params.propertyId !== 'undefined' && $state.params.propertyId;
	        if ($state.params.fromScheduleTime ) {
	            vm.formData = sessionStorage.get('ea5.guestCard');
	            setFormContactInfo(vm.formData);
	            return;
	        }
	        if (!isLoaded && !isParam) $state.go('default', null, { location: 'replace' });
	        if (isParam && (!isLoaded || !_.endsWith(ea5.contactProperty.PropertyId, $state.params.propertyId))) {
	            dataservice.getPropertyById($state.params.propertyId).then(
	                function (data) {
	                    $timeout(function () {
	                        data.ContactProperty.GuestCardInitiateType = $state.params.guestCardInitiateType;
	                        vm.formData = data.ContactProperty;
	                        setFormContactInfo(vm.formData);
	                        vm.propertyInfo = data.PropertyInfo;
	                        vm.mainPhone = data.Hero.MainPhone;
	                        vm.schedule = data.ScheduleData;
	                        //vm.scheduleFiltered = $filter('currentTimeFilter')(vm.schedule);
	
	                        if (typeof vm.formData !== 'undefined') {
	                            if (vm.formData.Movein === 'undefined') {
	                                vm.formData.Movein = '';
	                            }
	                        }
	                        //vm.setFormMarketingParams(vm.formData);
	                        //vm.setFormStateParams(vm.formData);
	                        
	                    });
	                    isLoaded = true;
	                }).catch(
	                    function () {
	                        $state.go('default', null, { location: 'replace' });
	                    });
	
	        } else {
	            vm.formData = ea5.contactProperty;
	            vm.formData.GuestCardInitiateType = $state.params.guestCardInitiateType;
	            setFormContactInfo(vm.formData);
	            vm.propertyInfo = ea5.propertyInfo;
	            if (ea5.hero.MainPhone !== 'undefined') {
	                vm.mainPhone = ea5.hero.MainPhone;
	            }
	            //vm.schedule = ea5.schedule;
	            //vm.scheduleFiltered = $filter('currentTimeFilter')(vm.schedule);
	            //vm.setFormMarketingParams(vm.formData);
	            //vm.setFormStateParams(vm.formData);
	        }
	        
	        
	        vm.scheduleFiltered = $filter('currentTimeFilter')(vm.schedule);
	        vm.setFormMarketingParams(vm.formData);
	        vm.setFormStateParams(vm.formData);
	    }
	
	    function getDates(data) {
	        //vm.availableDates = data;
	        //vm.availableDays = [];
	        sessionStorage.set('ea5.availableDates', {});
	        var availableDays = [];
	        for (var i = 0; i < data.length; i++) {
	            if (data[i].length !== 0) {
	                var datestring = moment(data[i][0].Time).format('YYYY-MM-DD');
	                availableDays.push(datestring);
	            }
	        }
	        sessionStorage.set('ea5.availableDates', data);
	        sessionStorage.set('ea5.availableDays', availableDays);
	    }
	
	    function loadTimes() {
	        if (!vm.propertyId && typeof ea5.contactProperty !== 'undefined') {
	            vm.propertyId = ea5.contactProperty.PropertyId.substring(1);
	        }
	        dataservice.getTourTimesById(vm.propertyId).then(
	            function success(data) {
	                isLoaded = true;
	                getDates(data);
	            }).catch(
	                function () {
	                    console.log('dataservice.getTourTimesById error');
	                }
	            );
	    }
	    loadTimes();
	
	    function setFormMarketingParams(form) {
	        // ils
	        var ilsId = urlParameters.get('ilsid');
	        if (ilsId) form.IlsId = ilsId;
	
	        // marketing
	        var utmSource = urlParameters.get('utm_source');
	        if (utmSource) form.UtmSource = utmSource;
	
	        var utmMedium = urlParameters.get('utm_medium');
	        if (utmMedium) form.UtmMedium = utmMedium;
	
	        var utmCampaign = urlParameters.get('utm_campaign');
	        if (utmCampaign) form.UtmCampaign = utmCampaign;
	
	        var utmContent = urlParameters.get('utm_content');
	        if (utmContent) form.UtmContent = utmContent;
	
	        var utmGroup = urlParameters.get('utm_group');
	        if (utmGroup) form.UtmGroup = utmGroup;
	    }
	
	    function setFormContactInfo(form) {
	        var storedFormData = sessionStorage.get('ea5.guestCard');
	
	        if (!storedFormData) return;
	
	        form.FirstName = storedFormData.FirstName;
	        form.LastName = storedFormData.LastName;
	        form.Email = storedFormData.Email;
	        form.Phone = storedFormData.Phone;
	        form.Movein = storedFormData.Movein ? new Date(storedFormData.Movein) : '';
	        form.AdditionalComments = storedFormData.AdditionalComments || '';
	    }
	
	    function setFormStateParams(form) {
	        if ($state.params.beds && $state.params.beds !== -1) {
	            form.Beds = +$state.params.beds;
	        }
	        if ($state.params.baths && $state.params.baths !== -1) {
	            form.Baths = +$state.params.baths;
	        }
	        if ($state.params.bldgRequested) {
	            form.BldgRequested = $state.params.bldgRequested;
	        }
	        if ($state.params.unitRequested) {
	            form.UnitRequested = $state.params.unitRequested;
	        }
	        if ($state.params.unitprice) {
	            form.UnitPrice = $state.params.unitprice;
	        }
	        if ($state.params.floorplan) {
	            form.FloorplanName = $state.params.floorplan;
	        }
	        if ($state.params.sqrft) {
	            form.SqFt = $state.params.sqrft;
	        }
	        if ($state.params.guestCardCommentType) {
	            form.GuestCardCommentType = $state.params.guestCardCommentType;
	        }
	        if ($state.params.guestCardInitiateType) {
	            form.GuestCardInitiateType = $state.params.guestCardInitiateType;
	        }
	    }
	
	    function setTourType(typeid, key) {
	        var storagePath = 'ea5.' + key;
	        sessionStorage.set(storagePath, typeid);
	        vm.tourType = typeid;
	    }
	
	    function resetTourType() {
	        vm.formData.ApptDate = null;
	        sessionStorage.set('ea5.firstTourType', "0");
	        sessionStorage.set('ea5.secondTourType', "0");
	        sessionStorage.set('ea5.appointments', {});
	    }
	
	    function getIsBookNearby() {
	        var completedBookNearby = false;
	        var bookNearbyData = sessionStorage.get('ea5.bookNearbyData');
	        if (bookNearbyData && bookNearbyData.originalPropertyId && bookNearbyData.nearbyPropertyId === vm.formData.propertyId) {
	            completedBookNearby = true;
	        }
	        return completedBookNearby;
	    }
	
	    function contactNow(thankyoutype) {
	        if (vm.loading) return; // break early if already running
	        if (vm.success) return;
	
	        vm.loading = true;
	
	        dataservice.postGuestCard(vm.formData).then(
	            function success(data) {
	                vm.success = true;  // set success to not allow more submissions
	
	                if (data.AppointmentConfirmation) {
	                    var appointments = sessionStorage.get('ea5.appointments');
	                    if (!Array.isArray(appointments)) {
	                        appointments = [];
	                    }
	                    appointments.push(data.AppointmentConfirmation);
	                    sessionStorage.set('ea5.appointments', appointments);
	                }
	
	                var bookNearbyData = sessionStorage.get('ea5.bookNearbyData');
	                var completedBookNearby = getIsBookNearby();
	                sessionStorage.set('ea5.bookNearbyData', {});
	
	                //if (!completedBookNearby) {
	                //    vm.formData.firstTourType = getTourType();
	                //    sessionStorage.set('ea5.tours.firstTourType', vm.formData.firstTourType);
	                //    var firstTourType = sessionStorage.set('ea5.firstTourType', typeid);
	                //} else {
	                //    firstTourType = sessionStorage.get('ea5.firstTourType');
	                //    vm.formData.secondTourType = setTourType('1');
	                //    sessionStorage.set('ea5.secondTourType', vm.formData.secondTourType);
	                //    var secondTourType = vm.formData.secondTourType;
	                //}
	
	                var firstTourType = sessionStorage.get('ea5.firstTourType');
	                var secondTourType = sessionStorage.get('ea5.secondTourType');
	
	                //clear appointment data
	                //vm.formData.ApptDate = null;
	                vm.formData.ApptTime = null;
	                vm.formData.Beds = -1;
	                vm.formData.Baths = -1;
	                vm.formData.BldgRequested = null;
	                vm.formData.UnitRequested = null;
	                vm.formData.UnitPrice = null;
	                vm.formData.FloorplanName = null;
	                vm.formData.SqFt = null;
	                vm.formData.GuestCardCommentType = null;
	                vm.formData.GuestCardInitiateType = null;
	                sessionStorage.set('ea5.availableDates', {});
	                sessionStorage.set('ea5.availableDays', {});
	
	                // persist to session storage to pre-fill form next time
	                sessionStorage.set('ea5.guestCard', vm.formData);
	
	                var guestCard = sessionStorage.get('ea5.guestCard');
	                //var href = '/thankyouv3/' + vm.formData.PropertyId + '/' + data + (typeof (ea5.DocumentId) !== 'undefined' ? '/' + ea5.DocumentId : '' + '/' + thankyoutype);
	
	                var category = 'Guest Card Completed';
	                var action = GetGuestCardAction(guestCard.GuestCardInitiateType);
	                var label = guestCard.PropertyName;
	
	                ga('send', 'event', category, action, label, {
	                    'hitCallback': createFunctionWithTimeout(function () {
	                        if (completedBookNearby) {
	                            var thankyouPageHref = '/thankyouv3/' + bookNearbyData.originalPropertyId +
	                                '/' + bookNearbyData.originalAppointmentDateTimeString +
	                                '/' + (typeof ea5.DocumentId !== 'undefined' ? ea5.DocumentId : vm.formData.PropertyId) +
	                                '/' + firstTourType +
	                                '/' + bookNearbyData.nearbyPropertyId +
	                                '/' + data.AppointmentConfirmation.LegacyDateTimeString +
	                                '/' + secondTourType;
	                            resetTourType();
	                            $window.location.href = thankyouPageHref;
	                        }
	                        else if (data.BookNearbySuggestion) {
	                            $state.go('^.booknearby',
	                                {
	                                    id: vm.formData.PropertyId,
	                                    apptTime: data.AppointmentConfirmation.LegacyDateTimeString,
	                                    data: data
	                                },
	                                { location: 'replace' });
	                            vm.loading = false;
	                            vm.success = false;
	                        } else {
	                            var href = '/thankyouv3/' + vm.formData.PropertyId +
	                                '/' + data.AppointmentConfirmation.LegacyDateTimeString +
	                                '/' + (typeof ea5.DocumentId !== 'undefined' ? ea5.DocumentId : vm.formData.PropertyId) +
	                                '/' + firstTourType;
	                            resetTourType();
	                            $window.location.href = href;
	                        }
	                    })
	                });
	
	                // don't set loading = false since we've succeeded
	            }).catch(function (error) {
	                vm.loading = false;
	            });
	    }
	
	    function createFunctionWithTimeout(callback, opt_timeout) {
	        var called = false;
	        setTimeout(callback, opt_timeout || 1000);
	        return function () {
	            if (!called) {
	                called = true;
	                callback();
	            }
	        };
	    }
	
	    function GetGuestCardAction(guestCardInitiateTypeId) {
	        var guestCardAction = 'unknown';
	
	        switch (guestCardInitiateTypeId) {
	            case 0:
	                guestCardAction = 'unknown';
	                break;
	            case 1:
	                guestCardAction = 'Snap Nav'; // (_SubNavPartial.cshtml)
	                break;
	            case 2:
	                guestCardAction = 'Hero'; //  (_HeroPartial.cshtml)
	                break;
	            case 3:
	                guestCardAction = 'Unit'; // (_UnitAvailabilityPartial.cshtml)
	                break;
	            case 4:
	                guestCardAction = 'Unavailable Bedrooms'; //  (_UnitAvailabilityPartial.cshtml)
	                break;
	            case 5:
	                guestCardAction = 'Unavailable Floorplans'; // (_UnavailableFloorplan.cshtml)
	                break;
	            case 6:
	                guestCardAction = 'Cross Sell'; // (_CrossSellPartial.cshtml)
	                break;
	            case 7:
	                guestCardAction = 'SRP'; // (_PropertyMap.cshtml)
	                break;
	            case 8:
	                guestCardAction = 'Review'; // (_HeaderPartial.cshtml)
	                break;
	            default:
	                break;
	        }
	        return guestCardAction;
	    }
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('contactInfoController', ContactInfoController);
	
	ContactInfoController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', 'tourTimeSelection'];
	
	function ContactInfoController($scope, $state, $window, dataservice, sessionStorage, tourTimeSelection) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    
	    vm.loading = false;
	    vm.success = false;
	    vm.submit = contactNow;
	    vm.addtour = addTour;
	    vm.processTour = processTour;
	    vm.filltourtimes = fillTourTimes;  
	    vm.clearAppointment = clearAppointment;
	    vm.disableTimeSelection = true;   
	    vm.tourTimes = [];
	    vm.timeComparisonCollection = [];
	    vm.scheduleDateMatchIndex = 0;
	
	    vm.calendarOptions = setCalendarOptions();
	
	    function setCalendarOptions() {
	        return {
	            minDate: new Date(),
	            showWeeks: false
	        };
	    }
	
	    function ui2019Redirect() {
	        if (typeof vm.parent.ui2019 !== 'undefined' && vm.parent.ui2019) {
	            var redirect = "/guestcard/" + ea5.contactProperty.PropertyId + "#/contact/0";
	            window.location.assign(redirect);
	        }
	    }
	    ui2019Redirect();
	
	    vm.calendar = {
	        today: moment(0, 'HH'),
	        open: false,
	        toggle: open,
	        isAtLeastToday: isAtLeastToday
	    }
	
	    vm.calendartour = {
	        today: moment(0, 'HH'),
	        open: false,
	        toggle: open,
	        isAtLeastToday: isAtLeastToday
	    }
	
	    function contactNow() {
	        if (vm.loading) return; // break early if already running
	        if (vm.success) return;
	
	        vm.loading = true;
	
	        // empty date selection if ONLY a date is selected
	        if(vm.parent.formData.ApptDate && !vm.parent.formData.ApptTime) {
	            vm.parent.formData.ApptDate = null;
	        }
	
	        //check ApptDate and ApptTime
	        if (vm.parent.formData.ApptDate && vm.parent.formData.ApptTime) {
	            var result = processTour();
	            if (!result) {
	                dataservice.postProvisionalGuestCard(vm.parent.formData);
	                $state.go('^.bookTour', null, { location: 'replace' });
	                return;
	            }
	        }
	
	        dataservice.postGuestCard(vm.parent.formData).then(
	                function success(data) {
	                    vm.success = true;  // set success to not allow more submissions
	
	                    sessionStorage.set('ea5.guestCard', vm.parent.formData); // persist to session storage to pre-fill form next time
	
	                    var guestCard = sessionStorage.get('ea5.guestCard');
	                    var href = '/thankyou/' + vm.parent.formData.PropertyId + '/' + data.AppointmentConfirmation.LegacyDateTimeString + (typeof (ea5.DocumentId) !== 'undefined' ? '/' + ea5.DocumentId : '');
	
	                    var category = 'Guest Card Completed';
	                    var action = GetGuestCardAction(guestCard.GuestCardInitiateType);
	                    var label = guestCard.PropertyName;
	
	                    ga('send', 'event', category, action, label, {
	                        'hitCallback': createFunctionWithTimeout(function () {
	                            $window.location.href = href;
	                        })
	                    });
	
	                    // don't set loading = false since we've succeeded
	                }).catch(function (error) {
	                    vm.loading = false;
	                });
	    }
	
	    function processTour() {
	
	        /* references to global values in guestCard.controller */
	        var apptDate = vm.parent.formData.ApptDate;
	        var apptTime = vm.parent.formData.ApptTime;
	
	        /* manual date/time validation */
	        if (!apptDate || !apptTime) {
	            $('.error-tourdate').removeClass('ng-hide');
	            $('.error-date-time').removeClass('ng-hide');
	            return;
	        } else {
	            dataservice.logTourTimeRequest(vm.parent.formData); /* save date/time selections to server */
	            $('.error-tourdate').addClass('ng-hide');
	            $('.error-date-time').addClass('ng-hide');
	        }
	
	        /* store Moment versions of selected date and time */
	        vm.parent.selectedDate = moment(apptDate);
	        vm.parent.selectedTime = moment('01/01/1970 ' + apptTime, 'M-D-YYYY hh:mm:ss a');
	
	        /* boolean if date and time selections match a date and time in ea5.schedule */
	        var isTimeMatch = false; 
	
	        /* attempt to match date selection to ea5.schedule dates */
	        for (var i = 0; i < vm.parent.scheduleFiltered.length; i++) {
	            var scheduleDateToMatch = moment(vm.parent.scheduleFiltered[i].Day.Date);
	            var scheduleTimeToMatch;
	
	            if (vm.parent.selectedDate.isSame(scheduleDateToMatch)) {
	
	                vm.scheduleDateMatchIndex = i;
	                vm.timeComparisonCollection = []; /*reset time comnparison collection*/
	
	                /*time match*/
	                for (var j = 0; j < vm.parent.scheduleFiltered[i].TimeSlots.length; j++) {
	
	                    scheduleTimeToMatch = moment('01/01/1970 ' + vm.parent.scheduleFiltered[i].TimeSlots[j], 'M-D-YYYY hh:mm:ss a');
	
	                    if (vm.parent.selectedTime.isSame(scheduleTimeToMatch)) {
	                        isTimeMatch = true;
	                    } else {
	                        setNearestTime(vm.timeComparisonCollection, vm.parent.selectedTime, scheduleTimeToMatch);
	                    }
	                }
	                break;
	
	            } else {
	
	                vm.scheduleDateMatchIndex = vm.parent.scheduleFiltered.length;
	                vm.timeComparisonCollection = [];/*reset time comnparison collection*/
	
	            }
	
	        }
	
	        /*selected appointment matches available appointment list*/
	        if (isTimeMatch) {
	            vm.parent.showAppointment = true;
	            
	            return true;
	        }
	
	        /*selected appointment doesn't match, show time selection modal*/
	        setTimeSelectionVariables();
	
	        if (apptDate && apptTime) {
	            return false;
	        }
	    }
	
	    function addTour() {
	        var tourResult = processTour();
	        if (typeof (tourResult) !== 'undefined') {
	            if (tourResult) {
	                dataservice.postProvisionalGuestCard(vm.parent.formData);
	            } else {
	                dataservice.postProvisionalGuestCard(vm.parent.formData);
	                $state.go('^.bookTour', null, { location: 'replace' });
	            }
	        }       
	    }
	
	    function setTimeSelectionVariables() {
	        /* Determine the variables that bookTourGrid.directive will use to 
	         * set up the time selection grid */
	
	        var lastTimeslot = moment();
	
	        /* matching selection date is today */
	        if (vm.scheduleDateMatchIndex === 0) {
	            lastTimeslot = moment('01/01/1970 ' + vm.parent.scheduleFiltered[0].TimeSlots[vm.parent.scheduleFiltered[0].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.parent.scheduleFiltered[0].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                //vm.parent.startingDateIndex = 0; REF
	                vm.parent.selectedDateIndex = 1;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.parent.scheduleFiltered[0].TimeSlots.length;
	            } else {
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	            } 
	        }
	
	        /* matching selection date is tomorrow */
	        if (vm.scheduleDateMatchIndex === 1) {
	            lastTimeslot = moment('01/01/1970 ' + vm.parent.scheduleFiltered[1].TimeSlots[vm.parent.scheduleFiltered[1].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.parent.scheduleFiltered[1].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                vm.parent.startingDateIndex = 1;
	                vm.parent.selectedDateIndex = 2;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.parent.scheduleFiltered[1].TimeSlots.length;
	            } else {
	                vm.parent.startingDateIndex = 0;
	                vm.parent.selectedDateIndex = 1;
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	                vm.parent.previousDayLastTime = vm.parent.scheduleFiltered[0].TimeSlots.length;
	            }
	        }
	
	        /* matching selection date is other date in range*/
	        if (vm.scheduleDateMatchIndex > 1 && vm.scheduleDateMatchIndex < vm.parent.scheduleFiltered.length) {
	            lastTimeslot = moment('01/01/1970 ' + vm.parent.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots[vm.parent.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.parent.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                vm.parent.startingDateIndex = vm.scheduleDateMatchIndex;
	                vm.parent.selectedDateIndex = vm.scheduleDateMatchIndex + 1;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.parent.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length;
	            } else {
	                vm.parent.startingDateIndex = vm.scheduleDateMatchIndex - 1;
	                vm.parent.selectedDateIndex = vm.scheduleDateMatchIndex;
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	                vm.parent.previousDayLastTime = vm.parent.scheduleFiltered[vm.scheduleDateMatchIndex - 1].TimeSlots.length - 1;
	            }
	        }
	
	        /* matching selection date is outside of ea5.schedule range */
	        if (vm.scheduleDateMatchIndex >= vm.parent.scheduleFiltered.length) {
	            vm.parent.startingDateIndex = vm.parent.scheduleFiltered.length - 1;
	            vm.parent.selectedDateIndex = vm.parent.scheduleFiltered.length - 1;
	            vm.parent.nearestTimeIndex = vm.parent.scheduleFiltered[vm.parent.scheduleFiltered.length - 1].TimeSlots.length - 1;
	        }
	
	    };
	
	    /* add the diff value (milliseconds) of 2 Moments to the supplied array */
	    function setNearestTime(array, selectedTime, scheduleTimeToMatch) {
	        var timeDiff = Math.abs(scheduleTimeToMatch.diff(selectedTime));
	        array.push(timeDiff);
	        
	    }
	    
	    /* get the index of the lowest value (in milliseconds) in a supplied array */
	    function getNearestTimeMatch(array) {
	        return _.indexOf(array, _.min(array));
	    }
	
	    function fillTourTimes() {
	        vm.tourTimes = tourTimeSelection.get(vm.parent.formData.ApptDate);
	    }
	
	    function createFunctionWithTimeout(callback, opt_timeout) {
	        var called = false;
	        setTimeout(callback, opt_timeout || 1000);
	        return function () {
	            if (!called) {
	                called = true;
	                callback();
	            }    
	        }
	    }
	
	    function open() {
	        this.open = !this.open;
	    }
	
	    function isAtLeastToday(scope, field) {
	        if (!field.$value) return true;
	
	        return moment(field.$value) >= vm.calendar.today;
	        }
	
	    function clearAppointment() {
	        vm.parent.formData.ApptDate = '';
	        vm.parent.formData.ApptTime = '';
	        vm.parent.showAppointment = !vm.parent.showAppointment;
	    }
	
	    function GetGuestCardAction(guestCardInitiateTypeId) {
	        var guestCardAction = 'unknown';
	
	        switch (guestCardInitiateTypeId) {
	            case 0:
	                guestCardAction = 'unknown';
	                break;
	            case 1:
	                guestCardAction = 'Snap Nav'; // (_SubNavPartial.cshtml)
	                break;
	            case 2:
	                guestCardAction = 'Hero'; //  (_HeroPartial.cshtml)
	                break;
	            case 3:
	                guestCardAction = 'Unit'; // (_UnitAvailabilityPartial.cshtml)
	                break;
	            case 4:
	                guestCardAction = 'Unavailable Bedrooms'; //  (_UnitAvailabilityPartial.cshtml)
	                break;
	            case 5:
	                guestCardAction = 'Unavailable Floorplans'; // (_UnavailableFloorplan.cshtml)
	                break;
	            case 6:
	                guestCardAction = 'Cross Sell' // (_CrossSellPartial.cshtml)
	                break;
	            case 7:
	                guestCardAction = 'SRP'; // (_PropertyMap.cshtml)
	                break;
	            case 8:
	                guestCardAction = 'Review'; // (_HeaderPartial.cshtml)
	                break;
	            default:
	                break;
	        }
	        return guestCardAction;
	    }
	}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('contactInfoV3Controller', ContactInfoController);
	
	ContactInfoController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', 'tourTimeSelection'];
	
	function ContactInfoController($scope, $state, $window, dataservice, sessionStorage, tourTimeSelection) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    
	    //vm.loading = false;
	    vm.success = false;
	    vm.schedule = scheduleAppointment;
	    vm.photos = ea5.mosaic.Photos;
	    vm.bookTourPath = $state.params.bookTourPath;
	    vm.calendarOptions = setCalendarOptions();
	
	    function setCalendarOptions() {
	        return {
	            minDate: new Date(),
	            showWeeks: false
	        };
	    }
	
	    vm.calendar = {
	        today: moment(0, 'HH'),
	        open: false,
	        toggle: open,
	        isAtLeastToday: isAtLeastToday
	    };
	
	    function scheduleAppointment() {
	        if (vm.loading) return; // break early if already running
	        if (vm.success) return;
	
	        vm.loading = true;
	
	        dataservice.postProvisionalGuestCard(vm.parent.formData).then(
	            function success(data) {
	                if (vm.bookTourPath !== true) {
	                    sessionStorage.set('ea5.guestCard', vm.parent.formData); // persist to session storage to pre-fill form next time
	                    $state.go('^.scheduledate', null, { location: 'replace' });
	                } else {
	                    vm.parent.submit('notour');
	                }
	            }
	        );
	    }
	
	    function open() {
	        this.open = !this.open;
	    }
	
	    function isAtLeastToday(scope, field) {
	        if (!field.$value) return true;
	
	        return moment(field.$value) >= vm.calendar.today;
	        }
	
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	__webpack_require__(46);
	
	angular
	    .module('ea5')
	    .controller('scheduleAppointmentController', ScheduleAppointmentController);
	
	ScheduleAppointmentController.$inject = ['$scope','$state'];
	
	function ScheduleAppointmentController($scope, $state) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    redirect();
	    vm.setSelectedTime = setSelectedTime;
	    vm.parent.setFormStateParams(vm.parent.formData);
	
	    function setSelectedTime(day, time) {
	        vm.parent.formData.ApptDate = day;
	        vm.parent.formData.ApptTime = time;
	    }
	
	    function redirect() {
	        //if (vm.parent.UseNewScheduleAppointmentUi === 'True') {
	        //    $state.go('^.selectDateTime', null, { location: 'replace' });
	        //}
	        if (typeof vm.parent.ui2019 !== 'undefined' && vm.parent.ui2019) {
	            var redirect = "/guestcard/" + ea5.contactProperty.PropertyId + "#/booktourv3/newtour/2";
	            window.location.assign(redirect);
	        }
	    }
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	__webpack_require__(47);
	
	angular
	    .module('ea5')
	    .directive('ea5AppointmentGrid', ea5AppointmentGrid);
	
	ea5AppointmentGrid.$inject = ['$timeout'];
	
	function ea5AppointmentGrid($timeout) {
	    var directive = {
	        restrict: 'A',
	        scope: {},
	        controller: controller,
	        controllerAs: 'dvm',
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true
	    }
	    return directive;
	
	    function controller() {
	        var vm = this;
	        vm.days = [];
	        vm.select = select;
	        vm.addDay = addDay;
	        vm.daysLength = 6;
	        vm.hoursLength = 6;
	        vm.daysStart = 0;
	
	        function assessDays() {
	            angular.forEach(vm.days, function (item, index) {
	                if (index >= +vm.daysStart && index < +vm.daysStart + vm.daysLength) {
	                    item.element.addClass('visible-day');
	                } else {
	                    if (item.element.hasClass('visible-day')) {
	                        item.element.removeClass('visible-day');
	                    };
	                }
	            });
	        };
	
	        function assessHours(day) {
	            angular.forEach(day.hours, function (hour, index) {
	                hour = $(hour);
	                if (index >= +day.hoursStart && index < +day.hoursStart + vm.hoursLength) {
	                    hour.addClass('visible-hour');
	                } else {
	                    if (hour.hasClass('visible-hour')) {
	                        hour.removeClass('visible-hour');
	                    };
	                    if (!day.hourPageSet) {
	                        var prev = $('<a class="appt-btn appt-btn-hour appt-hour-up"></a>').insertBefore(day.element.children('ul'));
	                        var next = $('<a class="appt-btn appt-btn-hour appt-hour-down"></a>').insertAfter(day.element.children('ul'));
	                        prev.addClass('disabled');
	                        next.bind('click', function () {
	                            if (day.hours.length > day.hoursStart + vm.hoursLength) {
	                                hoursPage(+1, day);
	                                if (day.hours.length <= day.hoursStart + vm.hoursLength) {
	                                    next.addClass('disabled');
	                                }
	                                if (prev.hasClass('disabled') && day.hoursStart > 0) {
	                                    prev.removeClass('disabled');
	                                }
	
	                            } else {
	                                next.addClass('disabled');
	                            }
	                        });
	
	                        prev.bind('click', function () {
	                            if (day.hoursStart > 0) {
	                                hoursPage(-1, day);
	                                if (day.hoursStart === 0) {
	                                    prev.addClass('disabled');
	                                }
	                                if (next.hasClass('disabled') && day.hours.length >= day.hoursStart + vm.hoursLength) {
	                                    next.removeClass('disabled');
	                                }
	                            } else {
	                                prev.addClass('disabled');
	                            }
	                        });
	                        day.hourPageSet = true;
	                    }
	                };
	            });
	        };
	
	        function initDay(day) {
	            var index = vm.days.indexOf(day);
	            if (index >= +vm.daysStart && index < +vm.daysStart + vm.daysLength) {
	                day.element.addClass('visible-day');
	            } else if (!vm.dayPageSet) {
	                var next = $('<a class="appt-btn appt-btn-day appt-day-right"></a>').appendTo(day.element.parent());
	                var prev = $('<a class="appt-btn appt-btn-day appt-day-left"></a>').prependTo(day.element.parent());
	
	                prev.addClass('disabled');
	                next.bind('click', function () {
	                    if (vm.days.length > vm.daysStart + vm.daysLength) {
	                        daysPage(+vm.daysLength);
	                        if (vm.days.length <= vm.daysStart + vm.daysLength) {
	                            next.addClass('disabled');
	                        }
	                        if (prev.hasClass('disabled') && vm.daysStart > 0) {
	                            prev.removeClass('disabled');
	                        }
	
	                    } else {
	                        next.addClass('disabled');
	                    }
	                });
	
	                prev.bind('click', function () {
	                    if (vm.daysStart > 0) {
	                        daysPage(-vm.daysLength);
	                        if (vm.daysStart === 0) {
	                            prev.addClass('disabled');
	                        }
	                        if (next.hasClass('disabled') && vm.days.length > vm.daysStart + vm.daysLength) {
	                            next.removeClass('disabled');
	                        }
	                    } else {
	                        prev.addClass('disabled');
	                    }
	                });
	
	                vm.dayPageSet = true;
	            }
	            assessHours(day);
	        };
	
	        function daysPage(num) {
	            vm.daysStart += num;
	            assessDays();
	        }
	        function hoursPage(num, day) {
	            day.hoursStart += num;
	            assessHours(day);
	        }
	        function select(item) {
	            angular.forEach(vm.days, function (day) {
	                angular.forEach(day.hours, function (tile) {
	                    $(tile).attr('selected', false);
	                });
	            });
	            item.attr('selected', true);
	        }
	
	        function addDay(day) {
	            day.hoursStart = 0;
	            vm.days.push(day);
	            $timeout(function () {
	                initDay(day);
	            });
	        };
	    }
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	
	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5AppointmentDay', ea5AppointmentDay);
	
	function ea5AppointmentDay() {
	    var directive = {
	        require: '^ea5AppointmentGrid',
	        link: link,
	        controller: controller,
	        controllerAs: 'cvm',
	        scope: {},
	        restrict: 'A',
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true
	    }
	
	    controller.$inject = ['$scope']; 
	
	    return directive;
	
	    function link (scope, element, attrs, ctrl) {
	        scope.applyHourSelect = applyHourSelect;
	        scope.day = {
	            element: element,
	            hours: []
	        }
	        ctrl.addDay(scope.day);
	
	        function applyHourSelect(hour) {
	            hour.bind('click', function () {
	                ctrl.select(hour);
	            });
	        }
	    }
	
	    function controller($scope) {
	        var vm = this;
	        vm.addHour = addHour;
	
	        function addHour(hour) {
	            $scope.day.hours.push(hour);
	            $scope.applyHourSelect(hour);
	        }
	    }
	}
	
	__webpack_require__(46);
	
	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5AppointmentHour', ea5AppointmentHour);
	
	function ea5AppointmentHour() {
	    var directive = {
	        require: '^ea5AppointmentDay',
	        link: link,
	        scope: {},
	        restrict: 'A',
	        template: '<li ng-transclude></li>',
	        transclude: true,
	        replace: true
	    }
	    return directive;
	
	    function link(scope, element, attrs, ctrl) {
	        ctrl.addHour(element);
	    }
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('scheduleDayController', ScheduleDayController);
	
	ScheduleDayController.$inject = ['$scope', '$state', 'sessionStorage'];
	
	function ScheduleDayController($scope, $state, sessionStorage) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.loading = false;
	    vm.success = false;
	    vm.tourDate = null;
	    vm.isMovein = isMovein;
	    vm.calendarOptions = setCalendarOptions();
	    vm.calendarVisible = false;
	    vm.bookTourPath = $state.params.bookTourPath;
	    vm.rescheduleTour = $state.params.rescheduleTour;
	    vm.availableDays;
	    vm.resetAppointmentStorage = resetAppointmentStorage;
	
	    vm.resetAppointmentStorage();
	
	    function resetAppointmentStorage() {
	        vm.availableDays = sessionStorage.get('ea5.availableDays');
	        sessionStorage.set('ea5.appointments', {});
	    }
	
	    function setCalendarOptions() {        
	        return {
	            minDate: new Date(),
	            showWeeks: false,
	            dateDisabled: getDisabledDates
	        };
	    }
	
	    angular.element(function () {
	        console.log('page loading completed');
	        vm.calendarVisible = true;
	    });
	
	    // Returns true if date is in available dates list, false in other case
	    function isDateAvailable(date) {
	        if (vm.availableDays.indexOf(date.toISOString().substr(0, 10)) !== -1) {
	            return true;
	        }
	        return false;
	    }
	    // Returns false if date should be disabled
	    function getDisabledDates(dateAndMode) {
	        var date = dateAndMode.date,
	            mode = dateAndMode.mode;
	        return mode === 'day' && !isDateAvailable(date);
	    }
	
	    function isMovein() {
	        if (vm.parent.formData.Movein !== '' && vm.parent.formData.Movein !== null) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	    
	    //watch for date selection from UI Bootstrap Date Picker
	    $scope.$watch('vm.tourDate', function () {
	        if (vm.tourDate !== null) {
	            vm.parent.formData.ApptDate = moment(vm.tourDate).format('MM/DD/YYYY');
	            sessionStorage.set('ea5.guestCard', vm.parent.formData); // persist to session storage
	            var params = {
	                'bookTourPath': vm.bookTourPath,
	                'rescheduleTour': vm.rescheduleTour
	            };
	            $state.go('^.scheduletime', params, { location: 'replace' });
	        }
	    });
	
	    //function getDates(data, dateAndMode) {
	    //    vm.parent.availableDates = data;
	    //    console.log(vm.parent.availableDates);
	    //    for (var i = 0; i < vm.parent.availableDates.length; i++) {
	    //        if (vm.parent.availableDates[i].length !== 0) {
	    //            var datestring = moment(vm.parent.availableDates[i][0].Time).format('YYYY-MM-DD');
	    //            vm.parent.availableDays.push(datestring);
	    //        }
	    //    }
	    //    getDisabledDates(dateAndMode);
	    //}
	
	    //function loadTimes(dateAndMode) {
	    //    if (typeof ea5.contactProperty !== 'undefined') {
	    //        vm.propertyId = ea5.contactProperty.PropertyId.substring(1);
	    //    }
	    //    dataservice.getTourTimesById(vm.propertyId).then(
	    //        function success(data) {
	    //            isLoaded = true;
	    //            getDates(data, dateAndMode);
	    //        }).catch(
	    //            function () {
	    //                console.log('dataservice.getTourTimesById error');
	    //            }
	    //        );
	    //}
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('scheduleTimeController', ScheduleTimeController);
	
	ScheduleTimeController.$inject = ['$scope', '$state', 'dataservice', '$window', 'sessionStorage'];
	
	function ScheduleTimeController($scope, $state, dataservice, $window, sessionStorage) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.guestCard = sessionStorage.get('ea5.guestCard');
	    vm.bookNearbyData = sessionStorage.get('ea5.bookNearbyData');
	    vm.propertyId;
	    vm.tourDate = {};
	    vm.tourTime = {};
	    vm.selectedDay = {};
	    vm.selectedTab = '0';
	    vm.selectTab = selectTab;
	    vm.splitTabs = {};
	    vm.bookTourPath = $state.params.bookTourPath;
	    vm.rescheduleTour = $state.params.rescheduleTour;
	    vm.bookNearby = $state.params.bookNearby;
	    vm.bookNearbySuggestion = $state.params.bookNearbySuggestion;
	    vm.scheduleTime = true;
	    vm.selfTour = true;
	    vm.selfTourOnly = false;
	    vm.agentTour = true;
	    vm.virtualTour = true;
	    vm.availableDates = [];
	    vm.times = [];
	    vm.timesMorning = [];
	    vm.timesAfternoon = [];
	    vm.timesEvening = [];
	    vm.visibleSelfTour = vm.parent.propertyInfo.SelfTour;
	    vm.visibleAgentTour = vm.parent.propertyInfo.AgentTour;
	    vm.visibleVirtualTour = vm.parent.propertyInfo.VirtualTour;
	    vm.visibleMorning = false;
	    vm.visibleAfternoon = false;
	    vm.visibleEvening = false;
	    vm.selectedMorning = '';
	    vm.selectedAfternoon = '';
	    vm.selectedEvening = '';
	    vm.chooseDay = changeDate;
	    vm.getTimes = getTimes;
	    vm.getSelfTourAvailability = getSelfTourAvailability;
	    vm.setSelectedTime = setSelectedTime;
	    vm.selectSelfTour = selectSelfTour;
	    vm.selectAgentTour = selectAgentTour;
	    vm.selectVirtualTour = selectVirtualTour;
	    vm.selectTour = selectTour;
	    vm.formatTourTimes = formatTourTimes;
	    
	    vm.rescheduleData = sessionStorage.get('ea5.reschedule');
	    vm.isIsBookNearby = vm.parent.getIsBookNearby();
	
	    //Day picker calendar options
	    $scope.options = {
	        minDate: new Date(),
	        showWeeks: false
	    };
	
	    loadTimes();
	    
	    function changeDate() {
	        vm.parent.formData.ApptDate = null;
	        var params = {
	            'bookTourPath': vm.bookTourPath,
	            'rescheduleTour': vm.rescheduleTour
	        };
	        $state.go('^.scheduledate', params, { location: 'replace' });
	    }
	
	    function selectTab(tabnumber) {
	        //show selected tab
	        vm.selectedTab = tabnumber;
	        //reset tab buttons
	        vm.selectedMorning = '';
	        vm.selectedAfternoon = '';
	        vm.selectedEvening = '';
	        //set visual button state
	        if (vm.selectedTab === '1') {
	            vm.selectedMorning = 'active';
	        }
	        if (vm.selectedTab === '2') {
	            vm.selectedAfternoon = 'active';
	        }
	        if (vm.selectedTab === '3') {
	            vm.selectedEvening = 'active';
	        }
	    }
	
	    function setSelectedTime(time) {
	        resetTimeButtons();
	        time.selected = 'active';
	        var scheduletime = moment(time.Time).utcOffset(time.Time).format('h:mm A');
	        var isSelfGuidedOnly = formatTourTimes(time);
	        vm.guestCard.ApptTime = scheduletime;
	        sessionStorage.set('ea5.guestCard', vm.parent.formData); // persist to session storage
	
	        if (time.SelfGuidedTour) {
	            vm.selfTour = false; //boolean logic is reversed to set ng-disabled
	        } else {
	            vm.selfTour = true;
	        }
	        if (time.AgentTour && !isSelfGuidedOnly) {
	            vm.agentTour = false; //boolean logic reversed to set ng-disabled
	        } else {
	            vm.agentTour = true;        }
	        if (time.VirtualTour && !isSelfGuidedOnly) {
	            vm.virtualTour = false; //boolean logic reversed to set ng-disabled
	        } else {
	            vm.virtualTour = true;
	        }
	    }
	
	    function formatTourTimes(timeslot) {
	        if (timeslot.SelfGuidedTour && vm.visibleSelfTour && (!timeslot.AgentTour || !vm.visibleAgentTour) && (!timeslot.VirtualTour || !vm.visibleVirtualTour)) {
	            vm.selfTourOnly = true;
	            return true;
	        } else {
	            return false;
	        }
	    }
	
	    function selectSelfTour() {
	        vm.guestCard.SelfGuidedAppointment = true;
	        if (!vm.isIsBookNearby) {
	            vm.parent.setTourType('1', 'firstTourType');
	        } else {
	            vm.parent.setTourType('1', 'secondTourType');
	        }
	        selectTour();
	    }
	    function selectAgentTour() {
	        if (!vm.isIsBookNearby) {
	            vm.parent.setTourType('2', 'firstTourType');
	        } else {
	            vm.parent.setTourType('2', 'secondTourType');
	        }
	        selectTour();
	    }
	    function selectVirtualTour() {
	        vm.guestCard.VirtualTour = true;
	        if (!vm.isIsBookNearby) {
	            vm.parent.setTourType('3', 'firstTourType');
	        } else {
	            vm.parent.setTourType('3', 'secondTourType');
	        }
	        selectTour();
	    } 
	    function selectTour() {
	        sessionStorage.set('ea5.guestCard', vm.guestCard);
	        vm.parent.formData = vm.guestCard;
	
	        if (vm.rescheduleTour) {
	            reschedule(vm.rescheduleData.Id, vm.rescheduleData.Password, vm.parent.formData, vm.rescheduleData.Email, vm.guestCard.SelfGuidedAppointment, vm.guestCard.VirtualTour);
	            return;
	        }
	        if (vm.bookTourPath !== true) {
	            vm.parent.submit('notour');
	        } else {
	            var params = {
	                guestCardInitiateType: vm.parent.formData.guestCardInitiateType,
	                'bookTourPath': vm.bookTourPath,
	                'fromScheduleTime': true
	            };
	            $state.go('^.contact', params, { location: 'replace' });
	        }
	    }
	
	    function reschedule(appointmentID, password, contactdto, email, selfGuidedAppointment, virtualTour) {
	        var timestring = contactdto.ApptDate + " " + contactdto.ApptTime;
	        var apptTime = moment(timestring).format();
	        var apptdata = {
	            "appointmentID": appointmentID, "password": password, "contactModel": {
	                "ApptTime": apptTime,
	                "Email": email,
	                "SelfGuidedAppointment": selfGuidedAppointment,
	                "VirtualTour": virtualTour
	            }
	        };
	        dataservice.rescheduleTour(apptdata).then(
	            function success(data) {
	                //clear appointment data
	                vm.parent.formData.ApptDate = null;
	                vm.parent.formData.ApptTime = null;
	                // persist to session storage to pre-fill form next time
	                sessionStorage.set('ea5.reschedule', {});
	                var locationstring = '/rescheduletour#/reschedule/' + vm.rescheduleData.Guid;
	                $window.location.assign(locationstring);
	            }).catch(function (error) {
	                vm.loading = false;
	            });
	    }
	
	    function resetTimeButtons() {
	        for (i = 0; i < vm.times.length; i++) {
	            vm.times[i].selected = '';
	        }
	        for (i = 0; i < vm.timesMorning.length; i++) {
	            vm.timesMorning[i].selected = '';
	        }
	        for (i = 0; i < vm.timesAfternoon.length; i++) {
	            vm.timesAfternoon[i].selected = '';
	        }
	        for (i = 0; i < vm.timesEvening.length; i++) {
	            vm.timesEvening[i].selected = '';
	        }
	    }
	
	    function loadTimes() {
	        //get current property ID
	        if (!vm.isIsBookNearby) {
	            vm.propertyId = ea5.contactProperty.PropertyId.substring(1);
	        } else {
	            vm.propertyId = vm.bookNearbyData.nearbyPropertyId.substring(1);
	        }
	
	        vm.tourDate = vm.parent.formData.ApptDate;
	        vm.availableDates = vm.parent.availableDates;
	        if (vm.availableDates.length !== 0) {
	            getTimes();
	            getSelfTourAvailability();
	        } else {
	            dataservice.getTourTimesById(vm.propertyId).then(
	                function success(data) {
	                    isLoaded = true;
	                    vm.availableDates = data;
	                    getTimes();
	                    getSelfTourAvailability();
	                }).catch(
	                    function () {
	                        console.log('dataservice.getTourTimesById error');
	                    }
	                );
	        }
	        
	    }
	
	    function getTimes() {
	        var selectedDay = moment(vm.tourDate);
	
	        for (var i = 0; i < vm.availableDates.length; i++) {
	            var timeslength = vm.availableDates[i].length;
	
	            // Prune timeslots that have already happened
	            if (timeslength > 0 && moment(vm.availableDates[i][0].Time) < moment()) {
	                vm.availableDates[i] = vm.availableDates[i].filter(d => moment(d.Time) > moment());
	                timeslength = vm.availableDates[i].length;
	            }
	
	            if (timeslength > 0) {
	                var matchDay = moment(vm.availableDates[i][0].Time);
	                if (matchDay.isSame(selectedDay, 'day')) {
	                    vm.selectedDay = vm.availableDates[i];
	                    if (timeslength < 12) {
	                        for (j = 0; j < timeslength; j++) {
	                            vm.times.push(vm.availableDates[i][j]);
	                            vm.times.map(function (item) {
	                                item.selected = '';
	                            });
	                        }
	                        vm.selectedTab = '4';
	                        vm.splitTabs = false;
	                    } else {
	                        var offset = moment.parseZone(vm.availableDates[i][0].Time).utcOffset();
	                        var morningCutoff = moment(selectedDay).utcOffset(offset, true).add(11, 'hours');
	                        var afternoonCutoff = moment(selectedDay).utcOffset(offset, true).add(17, 'hours');
	                        var hiddenMorningSlots = 0;
	                        var hiddenAfternoonSlots = 0;
	                        var hiddenEveningSlots = 0;
	                        for (j = 0; j < timeslength; j++) {
	                            var time = vm.availableDates[i][j];
	                            var momentTime = moment(time.Time);
	
	                            if (momentTime <= morningCutoff) {
	                                vm.timesMorning.push(time);
	                                vm.timesMorning.map(function (item) {
	                                    item.selected = '';
	                                });
	                                if (((!vm.visibleAgentTour && !vm.virtualTour) && !time.SelfGuidedTour) || (!vm.visibleSelfTour && !time.AgentTour)) {
	                                    hiddenMorningSlots++;
	                                }
	                            }
	                            if (momentTime > morningCutoff && momentTime < afternoonCutoff) {
	                                vm.timesAfternoon.push(time);
	                                vm.timesAfternoon.map(function (item) {
	                                    item.selected = '';
	                                });
	                                if (((!vm.visibleAgentTour && !vm.virtualTour) && !time.SelfGuidedTour) || (!vm.visibleSelfTour && !time.AgentTour)) {
	                                    hiddenAfternoonSlots++;
	                                }
	                            }
	                            if (momentTime >= afternoonCutoff) {
	                                vm.timesEvening.push(time);
	                                vm.timesEvening.map(function (item) {
	                                    item.selected = '';
	                                });
	                                if (((!vm.visibleAgentTour && !vm.virtualTour) && !time.SelfGuidedTour) || (!vm.visibleSelfTour && !time.AgentTour)) {
	                                    hiddenEveningSlots++;
	                                }
	                            }
	                        }
	                        vm.splitTabs = true;
	                        if (vm.timesMorning.length > 0 && hiddenMorningSlots < vm.timesMorning.length) {
	                            vm.visibleMorning = true;
	                        }
	                        if (vm.timesAfternoon.length > 0 && hiddenAfternoonSlots < vm.timesAfternoon.length) {
	                            vm.visibleAfternoon = true;
	                        }
	                        if (vm.timesEvening.length > 0 && hiddenEveningSlots < vm.timesEvening.length) {
	                            vm.visibleEvening = true;
	                        }
	                    }
	                }
	            }
	        }
	    }
	
	    function getSelfTourAvailability() {
	        //reset tour type values
	        vm.guestCard.SelfGuidedAppointment = false;
	        vm.guestCard.VirtualTour = false;
	
	        //for (i = 0; i < vm.selectedDay.length; i++) {
	        //    if (vm.selectedDay[i].SelfGuidedTour === true) {
	        //        vm.visibleSelfTour = true;
	        //    }
	        //    if (vm.selectedDay[i].AgentTour === true) {
	        //        vm.visibleAgentTour = true;
	        //    }
	        //}
	        //if global flags in CC are off
	        if (!vm.parent.propertyInfo.SelfTour) {
	            vm.visibleSelfTour = false;
	        }
	        if (!vm.parent.propertyInfo.AgentTour) {
	            vm.visibleAgentTour = false;
	        }
	    }  
	}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('bookTourV3Controller', BookTourV3Controller);
	
	BookTourV3Controller.$inject = ['$scope', '$state', 'dataservice', 'sessionStorage'];
	
	function BookTourV3Controller($scope, $state, dataservice, sessionStorage) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.loading = false;
	    vm.success = false;
	    vm.tourDate = null;
	    vm.type = $state.params.type                                                ;
	    vm.bookTourPath = false;
	    vm.rescheduleTour = false;
	    //loadTimes();
	    init();
	
	    function init() {
	        vm.bookTourPath = $state.params.bookTourPath;
	        vm.parent.formData.GuestCardInitiateType = $state.params.guestCardInitiateType;
	        if (vm.type !== null) {
	            if (vm.type === 'newtour') {
	                vm.bookTourPath = true;
	                loadTimes();
	                return;
	            }
	            if (vm.type === 'rescheduletour') {
	                vm.bookTourPath = true;
	                vm.rescheduleTour = true;
	                loadTimes();
	                return;
	            }
	        }
	    }
	
	    function getDates(data) {
	        var availableDays = [];
	        sessionStorage.set('ea5.availableDates', []);
	        sessionStorage.set('ea5.availableDays', []);
	        for (var i = 0; i < data.length; i++) {
	            if (data[i].length !== 0) {
	                var datestring = moment(data[i][0].Time).format('YYYY-MM-DD');
	                availableDays.push(datestring);
	            }
	        }
	        sessionStorage.set('ea5.availableDates', data);
	        sessionStorage.set('ea5.availableDays', availableDays);
	        //if (ea5.contactProperty.startingPoint === "tour") {
	        //    vm.parent.bookTourPath = true;
	        //}
	        var params = {
	            'bookTourPath': vm.bookTourPath,
	            'rescheduleTour': vm.rescheduleTour
	        };
	        $state.go('^.scheduledate', params , { location: 'replace' });
	    }
	
	    function loadTimes() {
	        if (typeof ea5.contactProperty !== 'undefined') {
	            vm.propertyId = ea5.contactProperty.PropertyId.substring(1);
	        }
	        dataservice.getTourTimesById(vm.propertyId).then(
	            function success(data) {
	                isLoaded = true;
	                getDates(data);
	            }).catch(
	                function () {
	                    console.log('dataservice.getTourTimesById error');
	                }
	            );
	    }
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('bookNearbyController', BookNearbyController);
	
	BookNearbyController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', '$timeout'];
	
	function BookNearbyController($scope, $state, $window, dataservice, sessionStorage, $timeout) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.selectedDateString;
	    vm.selectedTimeString;
	    //vm.loadCrossSellData = loadCrossSellData;
	    vm.declineNearby = skipBookNearby;
	
	    vm.propertyId = $state.params.id;
	    vm.appointmentDateTimeString = $state.params.apptTime;
	
	    vm.bookNearbySuggestion = {};
	    vm.nearbyPropertyId;
	    vm.nearbyPropertyInfo;
	    vm.nearbyPropertyUrl;
	    vm.nearbyPropertyPhoto;
	    vm.suggestedTimes;
	    vm.nearbyVirtualTour;
	    vm.nearbySelfTour;
	    vm.nearbyAgentTour;
	    vm.disableSelfTour = true;
	    vm.disableAgentTour = true;
	
	    vm.loadNearbySuggestion = loadNearbySuggestion;
	    vm.populateModelFromData = populateModelFromData;
	    vm.setSelectedTime = setSelectedTime;
	    vm.selectSelfTour = selectSelfTour;
	    vm.selectAgentTour = selectAgentTour;
	    vm.selectVirtualTour = selectVirtualTour;
	    vm.pickDifferentTime = pickDifferentTime;
	    vm.storeBookNearbyData = storeBookNearbyData;
	
	    vm.loadNearbySuggestion();
	
	    //vm.loadCrossSellData();
	
	    function loadNearbySuggestion() {
	        //get tour type from local storage
	        vm.parent.tourType = sessionStorage.get('ea5.firstTourType');
	        //get selected tour date from local storage
	        var selectedDate = sessionStorage.get('ea5.appointments');
	        //reset unit form values
	        vm.parent.formData.GuestCardCommentType = null
	        vm.parent.formData.GuestCardInitiateType = null
	        vm.parent.formData.BldgRequested = null;
	        vm.parent.formData.UnitRequested = null;
	        vm.parent.formData.UnitPrice = null;
	        vm.parent.formData.FloorplanName = null;
	        vm.parent.formData.SqFt = null;
	        var selectedDateMoment = moment(selectedDate[0].DateTime);
	        vm.selectedDateString = selectedDateMoment.utcOffset(selectedDate[0].DateTime).format('MM/DD/YYYY');
	        vm.selectedTimeString = selectedDateMoment.format('h:mm A');
	        sessionStorage.set('ea5.appointments', {});
	
	        const dataFromParams = $state.params.data.BookNearbySuggestion;
	        if (dataFromParams) {
	            vm.populateModelFromData(dataFromParams);
	            return;
	        }
	
	        dataservice.getBookNearbySuggestions($state.params.id, $state.params.apptTime).then(
	            function (data) {
	                $timeout(function () {
	                    vm.populateModelFromData(data);
	                });
	            }).catch(
	                function () {
	                    $state.go('default', null, { location: 'replace' });
	                });
	
	        //GA conversion success
	        ga('send', 'event', 'Guest Card Thank You', 'View', ea5.PropertyInfo.Name);
	    }
	
	    function populateModelFromData(bookNearbySuggestion) {
	        vm.bookNearbySuggestion = bookNearbySuggestion;
	        vm.nearbyPropertyId = bookNearbySuggestion.Id;
	        vm.nearbyPropertyInfo = bookNearbySuggestion.Property.PropertyInfo;
	        vm.parent.propertyInfo = vm.nearbyPropertyInfo;
	        vm.nearbyPropertyUrl = bookNearbySuggestion.BrochureUrl;
	        vm.nearbyPropertyPhoto = bookNearbySuggestion.Photo;
	        vm.suggestedTimes = bookNearbySuggestion.SuggestedTimes;
	        vm.showSelfTour = bookNearbySuggestion.SuggestedTimes.LocalTimeSlots.some(t => t.SelfGuidedTour);
	        vm.showAgentTour = bookNearbySuggestion.SuggestedTimes.LocalTimeSlots.some(t => t.AgentTour);
	        vm.nearbySelfTour = bookNearbySuggestion.Property.PropertyInfo.SelfTour;
	        vm.nearbyAgentTour = bookNearbySuggestion.Property.PropertyInfo.AgentTour;
	        vm.nearbyVirtualTour = bookNearbySuggestion.Property.PropertyInfo.VirtualTour;
	        vm.disableSelfTour = true;
	        vm.disableAgentTour = true;
	        vm.disableVirtualTour = true;
	    }
	
	    function setFormContactInfo(form) {
	        var storedFormData = sessionStorage.get('ea5.guestCard');
	
	        if (!storedFormData) return;
	
	        form.FirstName = storedFormData.FirstName;
	        form.LastName = storedFormData.LastName;
	        form.Email = storedFormData.Email;
	        form.Phone = storedFormData.Phone;
	        form.Movein = storedFormData.Movein ? new Date(storedFormData.Movein) : '';
	        form.AdditionalComments = storedFormData.AdditionalComments || '';
	    }
	
	    function skipBookNearby() {
	        var tourType = sessionStorage.get('ea5.firstTourType');
	        var href = '/thankyouv3/' + vm.propertyId + '/' + vm.appointmentDateTimeString + '/null/' + tourType;
	        $window.location.href = href;
	    }
	
	
	    function resetTimeButtons() {
	        for (i = 0; i < vm.suggestedTimes.LocalTimeSlots.length; i++) {
	            vm.suggestedTimes.LocalTimeSlots[i].selected = '';
	        }
	        vm.disableSelfTour = true;
	        vm.disableAgentTour = true;
	        vm.disableVirtualTour = true;
	    }
	
	    function setSelectedTime(time) {
	        resetTimeButtons();
	        time.selected = 'active';
	        var scheduletime = moment(time.Time).utcOffset(time.Time).format('h:mm A');
	        vm.parent.formData.ApptTime = scheduletime;
	        vm.parent.propertyId = vm.nearbyPropertyId;
	        vm.parent.formData.propertyId = vm.nearbyPropertyId;
	        sessionStorage.set('ea5.guestCard', vm.parent.formData); // persist to session storage
	        if (time.SelfGuidedTour) {
	            vm.disableSelfTour = false;
	        }
	        if (time.AgentTour) {
	            vm.disableAgentTour = false;
	        }
	        if (time.VirtualTour) {
	            vm.disableVirtualTour = false;
	        }
	    }
	
	    function selectSelfTour() {
	        vm.parent.formData.SelfGuidedAppointment = true;
	        vm.parent.formData.VirtualTour = false;
	        vm.parent.setTourType('1', 'secondTourType');
	        submitNearbyTour();
	    }
	    function selectAgentTour() {
	        vm.parent.formData.SelfGuidedAppointment = false;
	        vm.parent.formData.VirtualTour = false;
	        vm.parent.setTourType('2', 'secondTourType');
	        submitNearbyTour();
	    }
	    function selectVirtualTour() {
	        vm.parent.formData.VirtualTour = true;
	        vm.parent.formData.SelfGuidedAppointment = false;
	        vm.parent.setTourType('3', 'secondTourType');
	        submitNearbyTour();
	    } 
	    function submitNearbyTour() {
	        storeBookNearbyData();
	        vm.parent.submit('nearbytour');
	    }
	
	    function pickDifferentTime() {
	        vm.parent.bookTour = false;
	        vm.parent.propertyId = vm.nearbyPropertyId.substring(1);
	        vm.parent.formData.propertyId = vm.nearbyPropertyId;
	        vm.parent.formData.ApptDate = moment(vm.suggestedTimes.LocalTimeSlots[0].Time).format('MM/DD/YYYY');
	        sessionStorage.set('ea5.guestCard', vm.parent.formData);
	        storeBookNearbyData();
	        vm.parent.loadTimes();
	        vm.parent.bookingNearby = true;
	        vm.parent.bookNearbySuggestion = vm.bookNearbySuggestion;
	        var params = {
	            'bookNearby': true,
	            'bookNearbySuggestion': vm.bookNearbySuggestion
	        };
	        $state.go('^.scheduletime', params, { location: 'replace' });
	    }
	    function storeBookNearbyData() {
	        var tmp = {};
	        tmp.originalPropertyId = vm.propertyId;
	        tmp.originalAppointmentDateTimeString = vm.appointmentDateTimeString;
	        tmp.nearbyPropertyId = vm.nearbyPropertyId;
	        sessionStorage.set('ea5.bookNearbyData', tmp);
	    }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('rescheduleTourController', RescheduleTourController);
	
	RescheduleTourController.$inject = ['$state', 'dataservice', '$window', 'sessionStorage'];
	
	function RescheduleTourController($state, dataservice, $window, sessionStorage) {
	    var vm = this;
	    vm.appointmentData = {};
	    vm.propertyAppointmentInfo = {};
	    vm.rescheduleAppointment = rescheduleAppointment;
	    vm.cancelAppointment = cancelAppointment;
	    vm.loading = false;
	    vm.success = false;
	    vm.guid = $state.params.guid;
	    vm.tours = [];
	
	    getTours();
	
	    function getTours() {
	        dataservice.getPreviousTour(vm.guid).then(
	            function success(data) {
	                vm.tours = data;
	                console.log(vm.tours);
	            }).catch(
	                function () {
	                    console.log('could not return tours for: ' + vm.guid);
	                }
	            );
	    }
	
	    function rescheduleAppointment(tour) {
	        console.log(tour);
	        var reschedultdata = {
	            Id: tour.Id,
	            Email: tour.Email,
	            PropertyId: tour.PropertyId,
	            DateTime: tour.DateTime,
	            Status: tour.Status,
	            RmActionId: tour.RmActionId,
	            Password: tour.Password,
	            Guid: vm.guid,
	            VirtualTour: vm.VirtualTour,
	            SelfGuidedTour: vm.SelfGuidedTour
	            
	        };
	        sessionStorage.set('ea5.reschedule', reschedultdata);
	        var locationstring = '/guestcard/b' + tour.PropertyId + '/tour#/booktourv3/rescheduletour/0';
	        $window.location.assign(locationstring);
	    }
	
	    function cancelAppointment(tour) {
	        dataservice.cancelTour(tour.Id,tour.Password).then(
	            function success(data) {
	                location.reload();
	            }).catch(
	                function () {
	                    console.log('could not return tours for: ' + vm.guid);
	                }
	            );
	    }
	
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	__webpack_require__(54);
	
	angular
	    .module('ea5')
	    .controller('bookTourController', BookTourController);
	
	BookTourController.$inject = ['$state','$scope'];
	
	function BookTourController($state,$scope) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.setSelectedTime = setSelectedTime;
	    vm.parent.setFormStateParams(vm.parent.formData);
	
	    function setSelectedTime(day, time) {
	        vm.parent.formData.ApptDate = day;
	        vm.parent.formData.ApptTime = time;
	        vm.parent.showAppointment = true;
	        $state.go('^.contactInfo', null, { location: 'replace' });
	    }
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var moment = __webpack_require__(40);
	__webpack_require__(55);
	
	angular
	    .module('ea5')
	    .directive('ea5BookTourGrid', ea5BookTourGrid);
	
	ea5BookTourGrid.$inject = ['$timeout'];
	
	function ea5BookTourGrid($timeout) {
	    var directive = {
	        restrict: 'A',
	        scope: {
	            nearestTimeIndex: "=",
	            startingDateIndex: '=',
	            selectedDateIndex: '=',
	            previousDayLastTime: "="
	        },
	        controller: controller,
	        controllerAs: 'dvm',
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true,
	        bindToController: true
	    }
	    return directive;
	
	    function controller() {
	        var vm = this; 
	        vm.days = [];
	        vm.select = select;
	        vm.addDay = addDay;
	        vm.daysLength = 5;
	        vm.hoursLength = 5;
	
	        function assessDays() {
	
	            angular.forEach(vm.days, function (item, index) {
	                if (index >= +vm.startingDateIndex && index < +vm.startingDateIndex + vm.daysLength) {
	                    item.element.addClass('visible-day');
	                } else {
	                    if (item.element.hasClass('visible-day')) {
	                        item.element.removeClass('visible-day');
	                    }
	                }
	            });
	        };
	
	        function assessHours(day, isPreviousDay, isToday) {
	            var dayIndex = vm.days.indexOf(day);
	
	            /* if first day in collection is previous to selected day, initalize times to end of collection */
	            if (dayIndex === vm.selectedDateIndex - 1 && !day.hourPageSet) {
	                day.hoursStart = day.hours.length - 5;
	            }
	            
	            angular.forEach(day.hours, function (hour, index) {
	
	                hour = $(hour);
	
	                /* find and highlight the time nearest to the users selected time from GC/Book Tour form */
	                if (dayIndex === vm.selectedDateIndex) {  
	                    if (!day.hourPageSet) {
	
	                        if (vm.nearestTimeIndex === 3) {
	                            day.hoursStart = 1;
	                        }
	                        if (vm.nearestTimeIndex > 3 && vm.nearestTimeIndex < day.hours.length - 2) {                           
	                            day.hoursStart = vm.nearestTimeIndex - 2;
	                        }
	                        if (vm.nearestTimeIndex >= day.hours.length - 2) {
	                            day.hoursStart = day.hours.length - 5;
	                        }
	                    }
	                    if (index === vm.nearestTimeIndex) {
	                        hour.addClass('selection');
	                    }
	                    
	                }              
	
	                if (index >= +day.hoursStart && index < +day.hoursStart + vm.hoursLength) {
	                    hour.addClass('visible-hour');
	                } else {
	                    if (hour.hasClass('visible-hour')) {
	                        hour.removeClass('visible-hour');
	                    }
	                    if (!day.hourPageSet) {
	                        var prev = $('<a class="appt-btn appt-btn-hour appt-hour-up col-sm-1"></a>').insertBefore(day.element.children('ul'));
	                        var next = $('<a class="appt-btn appt-btn-hour appt-hour-down col-sm-1"></a>').insertAfter(day.element.children('ul'));
	                        prev.addClass('disabled');
	
	                        if (!day.hourPageSet) {
	                            
	                            if (day.hours.length <= day.hoursStart + vm.hoursLength) {
	                                next.addClass('disabled');
	                            }
	                            if (prev.hasClass('disabled') && day.hoursStart > 0 && day.hours.length > 5) {
	                                prev.removeClass('disabled');
	                            }
	                        }
	
	                        next.bind('click', function () {
	                            if (day.hours.length > day.hoursStart + vm.hoursLength) {
	                                hoursPage(+1, day);
	                                if (day.hours.length <= day.hoursStart + vm.hoursLength) {
	                                    next.addClass('disabled');
	                                }
	                                if (prev.hasClass('disabled') && day.hoursStart > 0) {
	                                    prev.removeClass('disabled');
	                                }
	
	                            } else {
	                                next.addClass('disabled');
	                            }
	                        });
	
	                        prev.bind('click', function () {
	                            if (day.hoursStart > 0) {
	                                hoursPage(-1, day);
	                                if (day.hoursStart === 0) {
	                                    prev.addClass('disabled');
	                                }
	                                if (next.hasClass('disabled') && day.hours.length >= day.hoursStart + vm.hoursLength) {
	                                    next.removeClass('disabled');
	                                }
	                            } else {
	                                prev.addClass('disabled');
	                            }
	                        });
	                        day.hourPageSet = true;
	                    }
	                };
	            });
	        };
	
	        function initDay(day) {
	            
	            var index = vm.days.indexOf(day);
	            if (index >= +vm.startingDateIndex && index < +vm.startingDateIndex + vm.daysLength) {
	                day.element.addClass('visible-day');
	            } else if (!vm.dayPageSet) {
	                var prev = $('<div class="col-sm-6 appt-btn-container hidden-xs"><div class="appt-btn appt-btn-day appt-day-left"></div><a class="appt-link-left">previous days</a></div>').appendTo(day.element.parent().parent());
	                var next = $('<div class="col-sm-6 appt-btn-container hidden-xs"><div class="appt-btn appt-btn-day appt-day-right"></div><a class="appt-link-right">next days</a></div>').appendTo(day.element.parent().parent());
	
	                prev.addClass('disabled');
	
	                if (!vm.dayPageSet) {
	                    if (vm.days.length <= vm.startingDateIndex + vm.daysLength) {
	                        next.addClass('disabled');
	                    }
	
	                    if (prev.hasClass('disabled') && vm.startingDateIndex > 0) {
	                        prev.removeClass('disabled');
	                    }
	                }
	
	                next.bind('click', function () {
	                    if (vm.days.length > vm.startingDateIndex + vm.daysLength) {
	                        daysPage(+vm.daysLength);
	                        if (vm.days.length <= vm.startingDateIndex + vm.daysLength) {
	                            next.addClass('disabled');
	                        }
	                        
	                        if (prev.hasClass('disabled') && vm.startingDateIndex > 0) {
	                            prev.removeClass('disabled');
	                        }
	
	                    } else {
	                        next.addClass('disabled');
	                    }
	                });
	
	                prev.bind('click', function () {
	                    if (vm.startingDateIndex > 0) {
	                        daysPage(-vm.daysLength);
	                        if (vm.startingDateIndex === 0) {
	                            prev.addClass('disabled');
	                        }
	
	                        if (next.hasClass('disabled') && vm.days.length > vm.startingDateIndex + vm.daysLength) {
	                            next.removeClass('disabled');
	                        }
	                    } else {
	                        prev.addClass('disabled');
	                    }
	                });
	                
	                vm.dayPageSet = true;
	            }
	
	            assessHours(day);
	
	        };
	
	        function daysPage(num) {
	            vm.startingDateIndex += num;
	            assessDays();
	        }
	        function hoursPage(num, day) {
	            day.hoursStart += num;
	            assessHours(day);
	        }
	        function select(item) {
	            angular.forEach(vm.days, function (day) {
	                angular.forEach(day.hours, function (tile) {
	                    $(tile).attr('selected', false);
	                });
	            });
	            item.attr('selected', true);
	        }
	
	        function addDay(day) {
	            day.hoursStart = 0;
	            vm.days.push(day);
	            $timeout(function () {
	                initDay(day);
	            });
	        }
	    }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	
	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5BookTourDay', ea5BookTourDay);
	
	function ea5BookTourDay() {
	    var directive = {
	        require: '^ea5BookTourGrid',
	        link: link,
	        controller: controller,
	        controllerAs: 'cvm',
	        scope: {},
	        restrict: 'A',
	        template: '<div ng-transclude></div>',
	        transclude: true,
	        replace: true
	    }
	
	    controller.$inject = ['$scope'];
	
	    return directive;
	
	    function link(scope, element, attrs, ctrl) {
	        scope.applyHourSelect = applyHourSelect;
	        scope.day = {
	            element: element,
	            hours: []
	        }
	        ctrl.addDay(scope.day);
	
	        function applyHourSelect(hour) {
	            hour.bind('click', function () {
	                ctrl.select(hour);
	            });
	        }
	    }
	
	    function controller($scope) {
	        var vm = this;
	        vm.addHour = addHour;
	
	        function addHour(hour) {
	            $scope.day.hours.push(hour);
	            $scope.applyHourSelect(hour);
	        }
	    }
	}
	
	__webpack_require__(54);
	
	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5BookTourHour', ea5BookTourHour);
	
	function ea5BookTourHour() {
	    var directive = {
	        require: '^ea5BookTourDay',
	        link: link,
	        scope: {},
	        restrict: 'A',
	        template: '<li ng-transclude></li>',
	        transclude: true,
	        replace: true
	    }
	    return directive;
	
	    function link(scope, element, attrs, ctrl) {
	        ctrl.addHour(element);
	    }
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('emailTourController', EmailTourController);
	
	EmailTourController.$inject = ['$state', '$scope'];
	
	function EmailTourController($state, $scope) {
	    var vm = this;
	    vm.parent = $scope.vm;
	
	    redirect();
	
	    function redirect() {
	        if (vm.parent.UseNewScheduleAppointmentUi === 'True') {
	            $state.go('^.selectDateTime', null, { location: 'replace' });
	        } else {
	            $state.go('^.scheduleAppointment', null, { location: 'replace' }); 
	        }
	    }
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var moment = __webpack_require__(40);
	__webpack_require__(41);
	
	angular
	    .module('ea5')
	    .controller('selectDateTimeController', SelectDateTimeController);
	
	SelectDateTimeController.$inject = ['$scope', '$state', '$filter', 'tourTimeSelection', 'dataservice'];
	
	function SelectDateTimeController($scope, $state, $filter, tourTimeSelection, dataservice) {
	    var vm = this;
	    vm.parent = $scope.vm;
	    vm.scheduleFiltered = $filter('currentTimeFilter')(vm.parent.schedule);
	    vm.filltourtimes = fillTourTimes;
	    vm.addtour = addTour;
	    vm.tourTimes = [];
	    //vm.timeComparison = [];
	    vm.timeComparisonCollection = [];
	    vm.scheduleDateMatchIndex = 0;
	
	    vm.calendar = {
	        today: moment(0, 'HH'),
	        open: false,
	        toggle: open,
	        isAtLeastToday: isAtLeastToday
	    }
	
	    function addTour() {
	
	        /* references to global values in guestCard.controller */
	        var apptDate = vm.parent.formData.ApptDate;
	        var apptTime = vm.parent.formData.ApptTime;
	
	        /* manual date/time validation */
	        if (!apptDate || !apptTime) {
	            $('.error-tourdate').removeClass('ng-hide');
	            $('.error-date-time').removeClass('ng-hide');
	            return;
	        } else {
	            dataservice.logTourTimeRequest(vm.parent.formData); /* save date/time selections to server */
	            $('.error-tourdate').addClass('ng-hide');
	            $('.error-date-time').addClass('ng-hide');
	        }
	
	        /* store Moment versions of selected date and time */
	        vm.parent.selectedDate = moment(apptDate);
	        vm.parent.selectedTime = moment('01/01/1970 ' + apptTime, 'M-D-YYYY hh:mm:ss a');
	
	        /* boolean if date and time selections match a date and time in ea5.schedule */
	        var isTimeMatch = false;
	
	        /* attempt to match date selection to ea5.schedule dates */
	        for (var i = 0; i < vm.scheduleFiltered.length; i++) {
	            var scheduleDateToMatch = moment(vm.scheduleFiltered[i].Day.Date);
	            var scheduleTimeToMatch;
	
	            if (vm.parent.selectedDate.isSame(scheduleDateToMatch)) {
	
	                vm.scheduleDateMatchIndex = i;
	                vm.timeComparisonCollection = []; /*reset time comnparison collection*/
	
	                /*time match*/
	                for (var j = 0; j < vm.scheduleFiltered[i].TimeSlots.length; j++) {
	
	                    scheduleTimeToMatch = moment('01/01/1970 ' + vm.scheduleFiltered[i].TimeSlots[j], 'M-D-YYYY hh:mm:ss a');
	
	                    if (vm.parent.selectedTime.isSame(scheduleTimeToMatch)) {
	                        isTimeMatch = true;
	                    } else {
	                        setNearestTime(vm.timeComparisonCollection, vm.parent.selectedTime, scheduleTimeToMatch);
	                    }
	                }
	                break;
	
	            } else {
	
	                vm.scheduleDateMatchIndex = vm.scheduleFiltered.length;
	                vm.timeComparisonCollection = [];/*reset time comnparison collection*/
	
	            }
	
	        }
	
	        /*selected appointment matches available appointment list*/
	        if (isTimeMatch) {
	            vm.parent.showAppointment = true;
	            $state.go('^.contactInfo', null, { location: 'replace' });
	            return;
	        }
	
	        /*selected appointment doesn't match, show time selection modal*/
	        setTimeSelectionVariables();
	
	        if (apptDate && apptTime) {
	            dataservice.postProvisionalGuestCard(vm.parent.formData);
	            $state.go('^.bookTour', null, { location: 'replace' });
	        }
	    }
	
	    function setTimeSelectionVariables() {
	        /* Determine the variables that bookTourGrid.directive will use to 
	         * set up the time selection grid */
	
	        var lastTimeslot = moment();
	
	        /* matching selection date is today */
	        if (vm.scheduleDateMatchIndex === 0) {
	            lastTimeslot = moment('01/01/1970 ' + vm.scheduleFiltered[0].TimeSlots[vm.scheduleFiltered[0].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.scheduleFiltered[0].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                //vm.parent.startingDateIndex = 0; REF
	                vm.parent.selectedDateIndex = 1;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.scheduleFiltered[0].TimeSlots.length;
	            } else {
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	            }
	        }
	
	        /* matching selection date is tomorrow */
	        if (vm.scheduleDateMatchIndex === 1) {
	            lastTimeslot = moment('01/01/1970 ' + vm.scheduleFiltered[1].TimeSlots[vm.scheduleFiltered[1].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.scheduleFiltered[1].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                vm.parent.startingDateIndex = 1;
	                vm.parent.selectedDateIndex = 2;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.scheduleFiltered[1].TimeSlots.length;
	            } else {
	                vm.parent.startingDateIndex = 0;
	                vm.parent.selectedDateIndex = 1;
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	                vm.parent.previousDayLastTime = vm.scheduleFiltered[0].TimeSlots.length;
	            }
	        }
	
	        /* matching selection date is other date in range*/
	        if (vm.scheduleDateMatchIndex > 1 && vm.scheduleDateMatchIndex < vm.scheduleFiltered.length) {
	            lastTimeslot = moment('01/01/1970 ' + vm.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots[vm.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length - 1], 'M-D-YYYY hh:mm:ss a');
	            if (vm.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length === 0 || vm.parent.selectedTime.isAfter(lastTimeslot)) {
	                vm.parent.startingDateIndex = vm.scheduleDateMatchIndex;
	                vm.parent.selectedDateIndex = vm.scheduleDateMatchIndex + 1;
	                //vm.parent.nearestTimeIndex = 0; REF
	                vm.parent.previousDayLastTime = vm.scheduleFiltered[vm.scheduleDateMatchIndex].TimeSlots.length;
	            } else {
	                vm.parent.startingDateIndex = vm.scheduleDateMatchIndex - 1;
	                vm.parent.selectedDateIndex = vm.scheduleDateMatchIndex;
	                vm.parent.nearestTimeIndex = getNearestTimeMatch(vm.timeComparisonCollection);
	                vm.parent.previousDayLastTime = vm.scheduleFiltered[vm.scheduleDateMatchIndex - 1].TimeSlots.length - 1;
	            }
	        }
	
	        /* matching selection date is outside of ea5.schedule range */
	        if (vm.scheduleDateMatchIndex >= vm.scheduleFiltered.length) {
	            vm.parent.startingDateIndex = vm.scheduleFiltered.length - 1;
	            vm.parent.selectedDateIndex = vm.scheduleFiltered.length - 1;
	            vm.parent.nearestTimeIndex = vm.scheduleFiltered[vm.scheduleFiltered.length - 1].TimeSlots.length - 1;
	        }
	
	    };
	
	    /* add the diff value (milliseconds) of 2 Moments to the supplied array */
	    function setNearestTime(array, selectedTime, scheduleTimeToMatch) {
	        var timeDiff = Math.abs(scheduleTimeToMatch.diff(selectedTime));
	        array.push(timeDiff);
	
	    }
	
	    /* get the index of the lowest value (in milliseconds) in a supplied array */
	    function getNearestTimeMatch(array) {
	        return _.indexOf(array, _.min(array));
	    }
	
	    function fillTourTimes() {
	        vm.tourTimes = tourTimeSelection.get(vm.parent.formData.ApptDate);
	    }
	
	    function open() {
	        this.open = !this.open;
	    }
	
	    function isAtLeastToday(scope, field) {
	        if (!field.$value) return true;
	
	        return moment(field.$value) >= vm.calendar.today;
	    }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('tourController', TourController);
	
	TourController.$inject = ['$state', 'dataservice', '$window', 'sessionStorage'];
	
	function TourController($state, dataservice, $window, $location, sessionStorage) {
	    var vm = this;
	    vm.guid = $state.params.guid;
	    vm.rmpropid = $state.params.propid;
	    vm.propName = ea5.propertyName;
	    vm.isPrimary;
	    vm.agreedToTerms;
	    vm.disableSubmit = true;
	    vm.termAgreement = false;
	    vm.initialsError = false;
	    vm.initialsValid = false;
	    vm.initials;
	    vm.firstName;
	    vm.lastName;
	    vm.email;
	    vm.firstnameError;
	    vm.lastnameError;
	    vm.emailError;
	    vm.guests = [];
	    
	    vm.initialsRegExString = /^[a-zA-Z]{1,3}$/;
	    vm.emailRegexString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
	
	    vm.validateInitials = validateInitials;
	    vm.submitAcknowledgement = submitAcknowledgement;
	    vm.addGuest = addGuest;
	    vm.removeGuest = removeGuest;
	    vm.submitGuests = submitGuests;
	    vm.gotoGuests = gotoGuests;
	    vm.gotoThankyou = gotoThankyou;
	    vm.downloadTerms = downloadTerms;
	
	    if (vm.guid && vm.rmpropid) {
	        initializeAgreementView();
	    }
	
	    function initializeAgreementView() {
	        dataservice.getSelfGuidedTour(vm.guid,vm.rmpropid).then(
	            function success(data) {
	                vm.isPrimary = data.isPrimary;
	                vm.agreedToTerms = data.agreedToTerms;
	                //if agreement was previously signed
	                if (vm.agreedToTerms === 1) {
	                    vm.gotoThankyou();
	                }
	            }).catch(function (error) {
	                console.log(error);
	            });
	    }
	
	    function submitAcknowledgement() {
	        if (vm.termAgreement && vm.initialsValid) {
	            var data = {
	                emailGuid: vm.guid,
	                initials: vm.initials
	            }
	            dataservice.agreeToTerms(data).then(
	                function success(data) {
	                    if (vm.isPrimary === 1) {
	                        var params = {
	                            'guid': vm.guid,
	                        };
	                        // Temporarily disable adding of guests per task #328
	                        //$state.go('invitequestion', params, { location: 'replace' });
	                        vm.gotoThankyou();
	                    } else {
	                        vm.gotoThankyou();
	                    }
	                }).catch(
	                    function () {
	                        console.log('could not submit acknowledgement for: ' + vm.guid);
	                    }
	                );  
	        };
	    }
	
	    function validateInitials() {
	        vm.initialsError = !vm.initials || vm.initials.length < 2 || !vm.initialsRegExString.test(vm.initials);
	        if (!vm.initialsError) {
	            vm.initialsValid = true;
	            vm.disableSubmit = false;
	            return true;
	        } else {
	            vm.initialsValid = false;
	            vm.disableSubmit = true;
	            return false;
	        }
	    }
	
	    function addGuest() {
	        var success = validateGuest();
	        if (success) {
	            var data = {
	                FirstName: vm.firstName,
	                LastName: vm.lastName,
	                Email: vm.email
	            }
	            vm.guests.push(data);
	            vm.firstName = null;
	            vm.lastName = null;
	            vm.email = null;
	        };
	    }
	
	    function removeGuest(email) {
	        var index = vm.guests.indexOf(email);
	        if (index !== -1) vm.guests.splice(index, 1);
	    }
	
	    function validateGuest() {
	        vm.firstnameError = !vm.firstName ? 'First Name required' : null;
	        vm.lastnameError = !vm.lastName ? 'Last Name required' : null;
	        vm.emailError = vm.email && !vm.emailRegexString.test(vm.email) ? 'Please enter a valid email address' : null;
	
	        if (!vm.firstnameError && !vm.lastnameError && !vm.emailError) { return true;
	        } else { return false; }
	        
	    }
	
	    function submitGuests() {
	        var valid = vm.guests.length > 0;
	        if (valid) {
	            dataservice.saveProspectGuests(vm.guid,vm.guests).then(
	                function success(data) {
	                    gotoThankyou();
	                }).catch(
	                    function () {
	                        console.log('Could not add guests for: ' + vm.guid);
	                    }
	                ); 
	        };
	    }
	
	    function gotoGuests() {
	        var params = {
	            'guid': vm.guid,
	        };
	        $state.go('selfguidedguest', params, { location: 'replace' });
	    }
	
	    function gotoThankyou() {
	        $state.go('selfguidedthankyou', null, { location: 'replace' });
	    }
	
	    function downloadTerms() {
	        windowObjectReference = window.open(
	            "https://media.equityapartments.com/image/upload/v1589295260/CommunityDocuments/Self_Guided_Tour_Acknowledgement_Release_Waiver.pdf",
	            "Self Guided Tour Acknowledgement Release Waiver",
	            "resizable,scrollbars,status"
	        );
	    }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var google = __webpack_require__(21);
	
	angular.module('ea5')
	    .controller('Srp', Srp);
	
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	
	Srp.$inject = ['$scope', '$location'];
	
	function Srp($scope, $location) {
	
	    var vm = this;
	    vm.properties = ea5.srp.MetroArea.Properties;
	    vm.initialProperties = ea5.srp.Srp.PropertyIds;
	    vm.mapBounds = {};
	    vm.exploreMode = false;
	
	    // sets initial map position if linked
	    if ($location.path() === '/view') {
	        vm.exploreMode = true;
	
	        // We need to move the two corners slightly closer together or google maps will zoom out a level. 
	        // A better approach might've been to use centerpoint and zoom level instead of southwest/northeast corners
	        var latDiff = +$location.search().latmax - +$location.search().latmin;
	        var lonDiff = +$location.search().lonmax - +$location.search().lonmin;
	        var latEpsilon = latDiff * .07;
	        var lonEpsilon = lonDiff * .07;
	        
	        vm.mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(+$location.search().latmin+latEpsilon, +$location.search().lonmin + lonEpsilon), new google.maps.LatLng(+$location.search().latmax - latEpsilon, +$location.search().lonmax - lonEpsilon));
	    }
	
	    // keeps track of srp map positoin in url for future linking
	    $scope.$watch('vm.mapBounds', function (newValue, oldValue) {
	        if (newValue === oldValue) return;
	        $location.path('view');
	        $location.search('latmax', newValue.getNorthEast().lat());
	        $location.search('lonmax', newValue.getNorthEast().lng());
	        $location.search('latmin', newValue.getSouthWest().lat());
	        $location.search('lonmin', newValue.getSouthWest().lng());
	        $scope.$$postDigest(function () {
	            $location.search();
	        });
	    });
	}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular.module('ea5')
	    .directive('ea5PropertyListing', ea5PropertyListing);
	
	function ea5PropertyListing() {
	    var directive = {
	        templateUrl: templateUrl,
	        controller: controller,
	        bindToController: true,
	        controllerAs: 'vm',
	        scope: {
	            property: '=',
	            label: '@',
	            limits: '='
	        },
	        restrict: 'E'
	    };
	
	    controller.$inject = ['urlParameters','dataservice'];
	
	    return directive;
	
	    function controller(urlParameters, dataservice) {
	        var vm = this;
	        vm.property.label = vm.label;
	        vm.propdata = {};
	        getProp();
	        // get ils phone number
	        var ilsPhone = getIlsPhoneNumber();
	        if (ilsPhone) {
	            vm.property.Phone = ilsPhone;
	        } else {
	            // get paid search phone number
	            var paidSearchPhone = getPaidSearchPhoneNumber();
	            if (paidSearchPhone) {
	                vm.property.Phone = paidSearchPhone;
	            }
	        }
	        
	        function getIlsPhoneNumber() {
	            var ilsId = parseInt(urlParameters.get('ilsid'));
	            if (isNaN(ilsId)) return null;
	
	            var phone = vm.property.IlsPhones.filter(function (phone) {
	                return phone.IlsId === ilsId;
	            })[0];
	
	            if (!phone) return null;
	
	            return phone.PhoneNumber;
	        }
	
	        function getPaidSearchPhoneNumber() {
	            // debug. delete the cookie
	            //document.cookie = "IsPaidSearch=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	
	            var isPaidSearch = getCookie("IsPaidSearch");
	            if (isPaidSearch === "true") {
	                // there is a cookie. set paid. do not reset date
	
	                // debug
	                // console.log("cookie: " + isPaidSearch);
	
	                var cookiePhone = vm.property.PaidSearchPhone;
	
	                if (!cookiePhone) return null;
	
	                return cookiePhone;
	            } else {
	                // there is no cookie, check for param
	
	                // debug
	                 //console.log("no cookie");
	
	                var mkwId = urlParameters.get('mkwid');
	
	                // debug
	                 //console.log("mkwId: " + mkwId);
	
	                if (!mkwId) {
	                    // there is no param
	                    return null;
	                } else {
	                    // there is param, set cookie
	
	                    // debug
	                    // console.log("setting cookie");
	
	                    isPaidSearch = "true";
	                    setCookie("IsPaidSearch", isPaidSearch, 180);
	                    var phone = vm.property.PaidSearchPhone;
	
	                    if (!phone) return null;
	
	                    return phone;
	                }
	            }
	        }
	
	        function getProp() {
	            dataservice.getPropertyById(vm.property.Id).then(
	                function (data) {
	                    vm.propdata = data;
	                    console.log(vm.propdata);
	                }).catch(
	                    function () {
	                        $state.go('default', null, { location: 'replace' });
	                    });
	        }
	    }
	
	    function templateUrl(tElement, tAttr) {
	        return tAttr.templateUrl;
	    }
	
	}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	
	angular.module('ea5')
	    .filter('bedArray', bedArray);
	
	function bedArray() {
	    return function (items) {
	        var low = [];
	        var high = [];
	        items.sort(function (x, y) {
	            if (x.BedroomCount > y.BedroomCount) return 1;
	            if (x.BedroomCount < y.BedroomCount) return -1;
	            return 0;
	        });
	
	        angular.forEach(items, function (item) {
	            if (item.BedroomCount < 3) {
	                low.push(item);
	            } else {
	                high.push(item);
	            }
	        });
	        var filtered = low.concat(high[high.length - 1]);
	        return filtered;
	    }
	}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	
	angular.module('ea5')
	    .filter('beds', beds);
	
	function beds() {
	    return function (beds) {
	        var value = +beds;
	        if (!isNaN(value)) {
	            switch (value) {
	                case 0:
	                    return 'Studio';
	                case 1:
	                case 2:
	                case 3:
	                    return value + ' Bed';
	                default:
	                    return '3+ Bed';
	            }
	        }
	        return '';
	    }
	}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var google = __webpack_require__(21);
	
	angular.module('ea5')
	    .filter('fitBounds', fitBounds);
	
	function fitBounds() {
	    return function (mapItems, mapBounds) {
	        var filtered = [];
	        angular.forEach(mapItems, function (mapItem) {
	            var itemLatLng = new google.maps.LatLng(mapItem.Coordinates.Latitude, mapItem.Coordinates.Longitude);
	            if (mapBounds.contains(itemLatLng)) {
	                filtered.push(mapItem);
	            }
	        });
	        return filtered;
	    }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	
	angular.module('ea5')
	    .filter('markerSorter', markerSorter);
	
	function markerSorter() {
	    return function (items, field) {
	        var filtered = [];
	        angular.forEach(items, function (item) {
	            filtered.push(item);
	        });
	        filtered.sort(function (a, b) {
	            return (parseInt(a.label) > parseInt(b.label) ? 1 : -1);
	        });
	        return filtered;
	    };
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	
	angular.module('ea5')
	    .controller('UnitAvailability', UnitAvailability);
	
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	
	function UnitAvailability() {
	    var vm = this;
	    console.log(ea5.unitAvailability);
	    vm.data = ea5.unitAvailability;
	    vm.view = 'cardCondensed.html';
	    if (vm.data.DefaultView === 'Test2017') {
	        vm.view = 'cardExpanded2017.html';
	    }
	    if (vm.data.DefaultView === 'Test2019') {
	        vm.view = 'cardExpanded2019.html';
	    }
	    if (vm.data.DefaultView === 'table') {
	        vm.view = 'tableCondensed.html';
	    }
	    vm.BedroomTypes = mapBedroomTypes(vm.data.BedroomTypes);
	    //vm.PremiumUnits = mapUnits(ea5.unitAvailability.PremiumUnits,'');
	    vm.PremiumUnits = ea5.unitAvailability.PremiumUnits.map(function(unit) {
	        unit.TemplateUrl = 'premiumUnit.html'; 
	        unit.Visible = true;
	        return unit;
	    });
	
	    function mapUnits(units) {
	        return units.map(function (unit) {
	            unit.TemplateUrl = vm.view; // default
	            unit.Visible = true;
	            return unit;
	        });
	    };
	
	    function mapBedroomTypes(bedroomTypes) {
	        return bedroomTypes.map(function(bedroomType) {
	            bedroomType.ViewMore = false;
	            bedroomType.Visible = true;
	
	            bedroomType.toggleViewMore = function(e) {
	                bedroomType.ViewMore = !bedroomType.ViewMore;
	
	                // don't continue if you just expanded list
	                if (bedroomType.ViewMore) return;
	
	                var offset = $(e.target).closest('.panel').offset();
	                var yPosition = offset.top - $('#subnav').innerHeight(); // subtract subnav from offset
	
	                $('html,body').animate({
	                    scrollTop: yPosition
	                }, 1000);
	            };
	
	            bedroomType.AvailableUnits = mapUnits(bedroomType.AvailableUnits);
	
	            return bedroomType;
	        });
	    };
	}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var $ = __webpack_require__(68);
	
	angular
	    .module('ea5')
	    .directive('ea5Unit', ea5Unit);
	
	function ea5Unit() {
	    var directive = {
	        template: '<ng-include src="vm.getTemplateUrl()"></ng-include>',
	        bindToController: true,
	        controllerAs: 'vm',
	        restrict: 'E',
	        scope: {
	            value: '=',
	            tableCondensedUrl: '@',
	            cardCondensedUrl: '@'
	        },
	        controller: controller
	    };
	
	    return directive;
	
	    function controller() {
	        var vm = this;
	        var counter = 0;
	
	        vm.contract = contract;
	        vm.expand = expand;
	        vm.getTemplateUrl = getTemplateUrl;
	        vm.templateUrl = '';
	
	        activate();
	
	        function activate() {
	            vm.Unit = vm.value;
	            vm.templateUrl = vm.Unit.TemplateUrl;
	
	            templateOnResize.call(vm);
	            $(window).on('resize', templateOnResize.bind(vm));
	        }
	
	        function contract() {
	            vm.templateUrl = vm.PrevTemplateUrl;
	        }
	
	        function expand(template) {
	            var category = 'Unit details';
	            var action = 'Expand';	
	            var label = ea5.analytics.label;
	            ga('send', 'event', category, action, label); // TFS 1150
	            vm.PrevTemplateUrl = vm.templateUrl; // store off previous version
	            vm.templateUrl = template;
	        }
	
	        function getTemplateUrl() {
	            return vm.templateUrl;
	        }
	
	        function templateOnResize(e) {
	            var isMobile = window.matchMedia('(max-width: 992px)').matches; // media query
	
	            // state hasn't changed, return early
	            if (isMobile === vm.WasMobile) return;
	
	            if (isMobile) { // match mobile case, up to md
	                vm.templateUrl = vm.tableCondensedUrl;
	            } else if (typeof vm.WasMobile !== 'undefined') {
	                vm.templateUrl = vm.cardCondensedUrl;
	            }
	
	            vm.WasMobile = isMobile;
	        };
	    };
	}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5FeaturedExpanded', ea5FeaturedExpanded);
	
	function ea5FeaturedExpanded() {
	
	    var directive = {
	        template: '<ng-include src="vm.unit.ExtendedTemplateUrl"></ng-include>',
	        bindToController: true,
	        controllerAs: 'vm',
	        controller: controller,
	        scope: {
	            unit: '=',
	            expandTemplateUrl: '@',
	            contractTemplateUrl: '@'
	},
	        restrict: 'E'
	    };
	
	    return directive;
	
	    function controller() {
	        var vm = this;
	        vm.unit.ExtendedTemplateUrl = vm.contractTemplateUrl;
	
	        vm.expand = expand;
	        vm.contract = contract;
	
	        function expand() {
	            vm.unit.ExtendedTemplateUrl = vm.expandTemplateUrl;
	        }
	
	        function contract() {
	            vm.unit.ExtendedTemplateUrl = vm.contractTemplateUrl;
	
	        }
	    }
	}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5Collapsible', Collapsible);
	
	Collapsible.$inject = ['$timeout'];
	
	function Collapsible($timeout) {
	
	    var directive = {
	        link: link,
	        restrict: 'A',
	        scope: {
	            value: '@'
	        }
	    };
	
	    return directive;
	
	    function link(scope, element) {
	        $timeout(function () {
	            if (window.matchMedia('(max-width: 992px)').matches) {  // match mobile case, up to md
	                var $element = $(element);
	                $element.find('.collapse').collapse('hide');
	            }
	        });
	    }
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5OrdinalNumber', OrdinalNumber);
	
	function OrdinalNumber() {
	    return {
	        template: '{{::vm.integral}}<span ng-if="::(vm.ordinal)" class="ordinal">{{::vm.ordinal}}</span>',
	        bindToController: true,
	        controllerAs: 'vm',
	        scope: {
	            value: '@'
	        },
	        controller: function () {
	            var vm = this;
	            (function activate() {
	                vm.integral = vm.value;
	                vm.ordinal = getGetOrdinal(vm.integral);
	            })();
	        }
	    };
	
	    function getGetOrdinal(n) {
	        var s=["th","st","nd","rd"],
	            v=n%100;
	        return (s[(v-20)%10]||s[v]||s[0]);
	    }
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5TeamCarousel', ea5TeamCarousel);
	
	function ea5TeamCarousel() {
	    var directive = {
	        compile: compile
	    };
	    return directive;
	    function compile(element, attr) {
	        element.find('.item').each(function (index) {
	            if (index === 0) {
	                $(this).siblings(':last').children(':first-child').clone().prependTo($(this));
	                $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	            } else {
	                $(this).prev().children(':nth-child(2)').clone().prependTo($(this));
	                if ($(this).next().length > 0) {
	                    $(this).next().children(':first-child').clone().appendTo($(this));
	                } else {
	                    $(this).siblings(':first').children(':nth-child(2)').clone().appendTo($(this));
	                }
	            }
	        });
	    }
	}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .controller('UnavailableUnits', UnavailableUnits);
	
	function UnavailableUnits() {
	    var vm = this;
	    vm.toggleUnavailableUnits = false;
	    vm.unavailableUnitGroups = [];
	}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5MobilePopup', ea5MobilePopup);
	
	function ea5MobilePopup() {
	    var directive = {
	        compile: compile,
	        replace: true,
	        restrict: 'E'
	    };
	    return directive;
	    
	    function compile(tElement, tAttr) {
	        $(tAttr.target).bind('click', function (e) {
	            e.stopPropagation();
	            tElement.addClass('open');
	            $('body').bind('click', closeMenu);
	        });
	
	        function closeMenu(e) {
	            var target = $(e.target);
	            if (target.hasClass(tAttr.hideButton) || !(target === tElement || target.parents('#' + tAttr.id).length > 0)) {
	                tElement.removeClass('open');
	                $('body').unbind('click', closeMenu);
	            }
	        }
	    }
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('communityMap', communityMap);
	
	communityMap.$inject = ['$timeout'];
	
	function communityMap($timeout) {
	    var directive = {
	        link: link,
	        restrict: 'A'
	    };
	    return directive;
	
	    function link(elem,scope) {
	        $timeout(function () {
	            // scope is the image itself. 
	            // need to change so that zoom component is loaded for only the currently displayed image.
	            // use Video as example
	            // $(scope).on('mouseover', function () { console.log('scope') });
	            $('.communityMapImage').smoothZoom({
	                width: '100%',
	                height: 525,
	                zoom_SINGLE_STEP: false,
	                background_COLOR: '#999999'
	            });
	        });
	    }
	}
	//this removes applied zoom component
	//$('.communityMapImage').smoothZoom('destroy');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5Phone', ea5Phone);
	
	function ea5Phone() {
	    var directive = {
	        controller: controller,
	        controllerAs: 'vmp',
	        link: link,
	        restrict: 'A'
	    };
	
	    controller.$inject = ['urlParameters'];
	
	    return directive;
	
	    function controller(urlParameters) {
	        var vmp = this;
	
	        vmp.getPhone = getPhone;
	
	        function getPhone() {
	            // get ils phone number
	            var ilsPhone = getIlsPhoneNumber();
	            if (ilsPhone) {
	                return ilsPhone;
	            } else {
	                // get paid search phone number
	                var paidSearchPhone = getPaidSearchPhoneNumber();
	                if (paidSearchPhone) {
	                    return paidSearchPhone;
	                }
	            }
	
	            return vmp.defaultPhone;
	
	            function getIlsPhoneNumber() {
	                if (!vmp.ilsPhones) return null;
	
	                var ilsId = parseInt(urlParameters.get('ilsid'));
	                if (isNaN(ilsId)) return null;
	                
	                var phone = vmp.ilsPhones.filter(function (phone) {
	                    return phone.IlsId === ilsId;
	                })[0];
	
	                if (!phone) return null;
	
	                return phone.PhoneNumber;
	            }
	
	            function getPaidSearchPhoneNumber() {
	                if (!vmp.paidSearchPhone) return null;
	
	                // debug
	                //document.cookie = "IsPaidSearch=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	
	                var isPaidSearch = getCookie("IsPaidSearch");
	                if (isPaidSearch == "true") {
	                    // there is a cookie. set paid. do not reset date
	
	                    // debug
	                    //console.log("cookie: " + isPaidSearch);
	
	                    var cookiePhone = vmp.paidSearchPhone;
	
	                    if (!cookiePhone) return null;
	
	                    return cookiePhone;
	                } else {
	                    // there is no cookie, check for param
	
	                    // debug
	                    // console.log("no cookie");
	
	                    var mkwId = urlParameters.get('mkwid');
	
	                    // debug
	                    // console.log("mkwId: " + mkwId);
	
	                    if (!mkwId) {
	                        // there is no param
	                        return null;
	                    } else {
	                        // there is param, set cookie
	
	                        // debug
	                        // console.log("setting cookie");
	                        isPaidSearch = "true";
	                        setCookie("IsPaidSearch", isPaidSearch, 180);
	                        var phone = vmp.paidSearchPhone;
	
	                        if (!phone) return null;
	
	                        return phone;
	                    }
	                }
	            }
	        }
	    }
	
	    function link(scope, element, attrs) {
	        scope.vmp.defaultPhone = attrs.defaultPhone;
	        scope.vmp.ilsPhones = JSON.parse(attrs.ilsPhones);
	        scope.vmp.paidSearchPhone = attrs.paidSearchPhone;
	    }
	
	}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	angular
	    .module('ea5')
	    .directive('ea5Hero', ea5Hero);
	
	function ea5Hero() {
	    var directive = {
	        link: link,
	        restrict: 'A',
	        scope: {
	            ea5HeroOpts: '='
	        }
	    };
	
	    return directive;
	
	    function link(scope, element, attrs) {
	        var $carousel = $(element),
	            carouselActive = false;
	
	        var options = scope.ea5CarouselOpts || {
	            keyboard: true
	        };
	
	        $carousel.on('slide.bs.carousel', handleCarouselSlide);
	        if (options.keyboard) $(document).bind('keyup', handleKeyboardNavigation);
	
	        function handleCarouselSlide(e) {
	            //load carousel image on first interaction
	            if (!carouselActive) {
	                $carousel.find('.differed')
	                    .each(function() {
	                        var $link = $(this),
	                        $src = $link.attr('ea5-data-bg');
	                        $link.css({ 'background-image': 'url(' + $src + ')' });
	                        $link.children().attr('src', $src);
	                    });
	                carouselActive = true;
	            }
	            
	            var activeSlide = $carousel.find('.item.active');
	            if (!activeSlide.length > 0) return;
	        }
	
	        function handleKeyboardNavigation(e) {
	            if (!$carousel.is(':visible')) return;
	
	            if (e.which === 39) {
	                $carousel.carousel('next');
	            }
	            else if (e.which === 37) {
	                $carousel.carousel('prev');
	            }
	        }
	    }
	}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('ea5MobileCall', ea5MobileCall);
	
	function ea5MobileCall() {
	    var directive = {
	        link: link,
	        restrict: 'A'
	    };
	
	    return directive;
	
	    function link(scope, element, attrs) {
	
	        element.bind('click', conversion);
	
	        function conversion() {
	            var phone = 'tel:' + attrs.defaultPhone;
	            // OLD TRACKING CODE goog_report_conversion(phone);
	            gtag('event', 'conversion', { 'send_to': 'AW-1060388987/ppdKCJy7-20Q-4DR-QM' });
	            //OLD TRACKING CODE trigger_floodlight_tag('cardsub', 'flood0');
	            gtag('event', 'conversion', { 'allow_custom_scripts': true, 'send_to': 'DC-6677643/cardsub/flood0+standard' });
	            window.uetq = window.uetq || [];
	            window.uetq.push({ 'ec': 'Phone Call Initiated' });
	        };
	
	    }
	}
	


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	module.exports = 'youtube-embed';


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	/* global YT */
	angular.module('youtube-embed', [])
	.service ('youtubeEmbedUtils', ['$window', '$rootScope', function ($window, $rootScope) {
	    var Service = {}
	
	    // adapted from http://stackoverflow.com/a/5831191/1614967
	    var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
	    var timeRegexp = /t=(\d+)[ms]?(\d+)?s?/;
	
	    function contains(str, substr) {
	        return (str.indexOf(substr) > -1);
	    }
	
	    Service.getIdFromURL = function getIdFromURL(url) {
	        var id = url.replace(youtubeRegexp, '$1');
	
	        if (contains(id, ';')) {
	            var pieces = id.split(';');
	
	            if (contains(pieces[1], '%')) {
	                // links like this:
	                // "http://www.youtube.com/attribution_link?a=pxa6goHqzaA&amp;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare"
	                // have the real query string URI encoded behind a ';'.
	                // at this point, `id is 'pxa6goHqzaA;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare'
	                var uriComponent = decodeURIComponent(pieces[1]);
	                id = ('http://youtube.com' + uriComponent)
	                        .replace(youtubeRegexp, '$1');
	            } else {
	                // https://www.youtube.com/watch?v=VbNF9X1waSc&amp;feature=youtu.be
	                // `id` looks like 'VbNF9X1waSc;feature=youtu.be' currently.
	                // strip the ';feature=youtu.be'
	                id = pieces[0];
	            }
	        } else if (contains(id, '#')) {
	            // id might look like '93LvTKF_jW0#t=1'
	            // and we want '93LvTKF_jW0'
	            id = id.split('#')[0];
	        }
	
	        return id;
	    };
	
	    Service.getTimeFromURL = function getTimeFromURL(url) {
	        url = url || '';
	
	        // t=4m20s
	        // returns ['t=4m20s', '4', '20']
	        // t=46s
	        // returns ['t=46s', '46']
	        // t=46
	        // returns ['t=46', '46']
	        var times = url.match(timeRegexp);
	
	        if (!times) {
	            // zero seconds
	            return 0;
	        }
	
	        // assume the first
	        var full = times[0],
	            minutes = times[1],
	            seconds = times[2];
	
	        // t=4m20s
	        if (typeof seconds !== 'undefined') {
	            seconds = parseInt(seconds, 10);
	            minutes = parseInt(minutes, 10);
	
	        // t=4m
	        } else if (contains(full, 'm')) {
	            minutes = parseInt(minutes, 10);
	            seconds = 0;
	
	        // t=4s
	        // t=4
	        } else {
	            seconds = parseInt(minutes, 10);
	            minutes = 0;
	        }
	
	        // in seconds
	        return seconds + (minutes * 60);
	    };
	
	    Service.ready = false;
	
	    function applyServiceIsReady() {
	        $rootScope.$apply(function () {
	            Service.ready = true;
	        });
	    };
	
	    // If the library isn't here at all,
	    if (typeof YT === "undefined") {
	        // ...grab on to global callback, in case it's eventually loaded
	        $window.onYouTubeIframeAPIReady = applyServiceIsReady;
	        console.log('Unable to find YouTube iframe library on this page.')
	    } else if (YT.loaded) {
	        Service.ready = true;
	    } else {
	        YT.ready(applyServiceIsReady);
	    }
	
	    return Service;
	}])
	.directive('youtubeVideo', ['$window', 'youtubeEmbedUtils', function ($window, youtubeEmbedUtils) {
	    var uniqId = 1;
	
	    // from YT.PlayerState
	    var stateNames = {
	        '-1': 'unstarted',
	        0: 'ended',
	        1: 'playing',
	        2: 'paused',
	        3: 'buffering',
	        5: 'queued'
	    };
	
	    var eventPrefix = 'youtube.player.';
	
	    $window.YTConfig = {
	        host: 'https://www.youtube.com'
	    };
	
	    return {
	        restrict: 'EA',
	        scope: {
	            videoId: '=?',
	            videoUrl: '=?',
	            player: '=?',
	            playerVars: '=?',
	            playerHeight: '=?',
	            playerWidth: '=?'
	        },
	        link: function (scope, element, attrs) {
	            // allows us to $watch `ready`
	            scope.utils = youtubeEmbedUtils;
	
	            // player-id attr > id attr > directive-generated ID
	            var playerId = attrs.playerId || element[0].id || 'unique-youtube-embed-id-' + uniqId++;
	            element[0].id = playerId;
	
	            // Attach to element
	            scope.playerHeight = scope.playerHeight || 390;
	            scope.playerWidth = scope.playerWidth || 640;
	            scope.playerVars = scope.playerVars || {};
	
	            // YT calls callbacks outside of digest cycle
	            function applyBroadcast () {
	                var args = Array.prototype.slice.call(arguments);
	                scope.$apply(function () {
	                    scope.$emit.apply(scope, args);
	                });
	            }
	
	            function onPlayerStateChange (event) {
	                var state = stateNames[event.data];
	                if (typeof state !== 'undefined') {
	                    applyBroadcast(eventPrefix + state, scope.player, event);
	                }
	                scope.$apply(function () {
	                    scope.player.currentState = state;
	                });
	            }
	
	            function onPlayerReady (event) {
	                applyBroadcast(eventPrefix + 'ready', scope.player, event);
	            }
	
	            function onPlayerError (event) {
	                applyBroadcast(eventPrefix + 'error', scope.player, event);
	            }
	
	            function createPlayer () {
	                var playerVars = angular.copy(scope.playerVars);
	                playerVars.start = playerVars.start || scope.urlStartTime;
	                var player = new YT.Player(playerId, {
	                    height: scope.playerHeight,
	                    width: scope.playerWidth,
	                    videoId: scope.videoId,
	                    playerVars: playerVars,
	                    events: {
	                        onReady: onPlayerReady,
	                        onStateChange: onPlayerStateChange,
	                        onError: onPlayerError
	                    }
	                });
	
	                player.id = playerId;
	                return player;
	            }
	
	            function loadPlayer () {
	                if (scope.videoId || scope.playerVars.list) {
	                    if (scope.player && typeof scope.player.destroy === 'function') {
	                        scope.player.destroy();
	                    }
	
	                    scope.player = createPlayer();
	                }
	            };
	
	            var stopWatchingReady = scope.$watch(
	                function () {
	                    return scope.utils.ready
	                        // Wait until one of them is defined...
	                        && (typeof scope.videoUrl !== 'undefined'
	                        ||  typeof scope.videoId !== 'undefined'
	                        ||  typeof scope.playerVars.list !== 'undefined');
	                },
	                function (ready) {
	                    if (ready) {
	                        stopWatchingReady();
	
	                        // URL takes first priority
	                        if (typeof scope.videoUrl !== 'undefined') {
	                            scope.$watch('videoUrl', function (url) {
	                                scope.videoId = scope.utils.getIdFromURL(url);
	                                scope.urlStartTime = scope.utils.getTimeFromURL(url);
	
	                                loadPlayer();
	                            });
	
	                        // then, a video ID
	                        } else if (typeof scope.videoId !== 'undefined') {
	                            scope.$watch('videoId', function () {
	                                scope.urlStartTime = null;
	                                loadPlayer();
	                            });
	
	                        // finally, a list
	                        } else {
	                            scope.$watch('playerVars.list', function () {
	                                scope.urlStartTime = null;
	                                loadPlayer();
	                            });
	                        }
	                    }
	            });
	
	            scope.$watchCollection(['playerHeight', 'playerWidth'], function() {
	                if (scope.player) {
	                    scope.player.setSize(scope.playerWidth, scope.playerHeight);
	                }
	            });
	
	            scope.$on('$destroy', function () {
	                scope.player && scope.player.destroy();
	            });
	        }
	    };
	}]);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var google = __webpack_require__(21);
	
	angular.module('ea5')
	    .controller('Roommates', Roommates);
	
	__webpack_require__(82);
	
	Roommates.$inject = ['$scope', '$window', '$filter', 'pagerService'];
	
	function Roommates($scope, $window, $filter, pagerService) {
	    var vm = this;
	    vm.data = ea5.roommatesList;
	    $scope.name = vm.data.Profile.FirstName;
	    $scope.profileId = vm.data.Profile.ProfileId;
	    $scope.profilePicture = getProfileUrl(vm.data.Profile.PhotoName, vm.data.Profile.PhotoVersion);
	    $scope.showNearbyCommunities = vm.data.Profile.ShowNearbyCommunities;
	    $scope.showingContactedMatches = false;
	    $scope.showAlert = showAlert(new Date(vm.data.Profile.MoveInLatestDate));
	
	    $scope.neighborhoodPotentialMatches = vm.data.NeighborhoodPotentialMatches;
	    angular.forEach($scope.neighborhoodPotentialMatches, function (match, key) {
	        match.PhotoUri = getProfileUrl(match.PhotoName, match.PhotoVersion);
	    });
	
	    $scope.propertyPotentialMatches = vm.data.PropertyPotentialMatches;
	    angular.forEach($scope.propertyPotentialMatches, function (match, key) {
	        match.PhotoUri = getProfileUrl(match.PhotoName, match.PhotoVersion);
	    });
	
	    if ($scope.showNearbyCommunities) {
	        $scope.roommateMatches = $scope.neighborhoodPotentialMatches;
	    } else {
	        $scope.roommateMatches = $scope.propertyPotentialMatches;
	    }
	    $scope.profileProperties = vm.data.Profile.ProfileProperties;
	    $scope.propertyNeighborhoodMapping = vm.data.PropertyNeighborhoodMapping;
	    
	    function showAlert(moveInLatestDate) {
	        var alertDate = new Date(moveInLatestDate.getTime() - (7 * 24 * 60 * 60 * 1000));
	        return Date.now() > alertDate;
	    }
	
	    function getProfileUrl(name, version) {
	        if (version == null) {
	            return "https://media.equityapartments.com/image/upload/e_brightness:-99/v1549395433/Roommates/UI/userprofile.png";
	        }
	        else {
	            return "https://media.equityapartments.com/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_black/" + version + "/Roommates/ProfilePictures/" + name + ".png";
	        }
	    }
	
	    $scope.filterRoommatesList = function (switchValue) {
	        var matches = [];
	        var showingNearbyCommunities = $scope.showNearbyCommunities;
	        if (!switchValue) {
	            showingNearbyCommunities = !showingNearbyCommunities;
	        }
	        if (showingNearbyCommunities) {
	            if (switchValue) {
	                $scope.showNearbyCommunities = false;
	            }
	            if (!$scope.selectedOption) {
	                $scope.roommateMatches = $scope.propertyPotentialMatches;
	            } else {
	                $scope.roommateMatches = getPropertyMatches(matches);
	            }
	        } else {
	            if (switchValue) {
	                $scope.showNearbyCommunities = true;
	            }
	            if (!$scope.selectedOption) {
	                $scope.roommateMatches = $scope.neighborhoodPotentialMatches;
	            } else {
	                matches = getNeighborhoodMatches(matches);
	                $scope.roommateMatches = matches;
	            }
	        }
	        if ($scope.showingContactedMatches) {
	            $scope.roommateMatches = $filter('filter')($scope.roommateMatches, { 'Contacted': true });
	            $scope.roommateMatches = $filter('orderBy')($scope.roommateMatches, '-ContactedDate');
	        }
	        setPage(1);
	    }
	
	    $scope.showContactedMatches = function () {
	        if ($scope.showingContactedMatches) {
	            $scope.showingContactedMatches = false;
	            if (!$scope.selectedOption) {
	                $scope.filterRoommatesList(false);
	            }
	            else {
	                $scope.filterByCommunity();
	            }
	        }
	        else {
	            $scope.showingContactedMatches = true;
	            $scope.roommateMatches = $filter('filter')($scope.roommateMatches, { 'Contacted': true });
	            $scope.roommateMatches = $filter('orderBy')($scope.roommateMatches, '-ContactedDate');
	        }
	        setPage(1);
	    }
	
	    $scope.filterByCommunity = function () {
	        var matches = [];
	        if (!$scope.selectedOption) {
	            if ($scope.showNearbyCommunities) {
	                $scope.roommateMatches = $scope.neighborhoodPotentialMatches;
	            } else {
	                $scope.roommateMatches = $scope.propertyPotentialMatches;
	            }
	
	        } else {
	            if ($scope.showNearbyCommunities) {
	                matches = getNeighborhoodMatches(matches);
	            }
	            else {
	                matches = getPropertyMatches(matches);
	            }
	            $scope.roommateMatches = matches;
	        }
	        if ($scope.showingContactedMatches) {
	            $scope.roommateMatches = $filter('filter')($scope.roommateMatches, { 'Contacted': true });
	            $scope.roommateMatches = $filter('orderBy')($scope.roommateMatches, '-ContactedDate');
	        }
	        setPage(1);
	    }
	
	    function getPropertyMatches(matches) {
	        angular.forEach($scope.propertyPotentialMatches, function (value, key) {
	            if ($scope.propertyPotentialMatches[key].ProfileProperties.indexOf($scope.selectedOption) > -1) {
	                matches.push($scope.propertyPotentialMatches[key]);
	            }
	        });
	        return matches;
	    }
	
	    function getNeighborhoodMatches(matches) {
	        //find neighborhood mapping from $scope.selectedOption property.
	        var neighborhood = $scope.propertyNeighborhoodMapping[$scope.selectedOption];
	        //concat all the profiles that have index > -1 for that neighborhood.
	        angular.forEach($scope.neighborhoodPotentialMatches, function (value, key) {
	            if (value.ProfileNeighborhoods.indexOf(neighborhood) > -1 && matches.indexOf(value) === -1) {
	                matches = matches.concat($scope.neighborhoodPotentialMatches[key]);
	            }
	        });
	        return matches;
	    }
	
	
	    //pagination
	    vm.pager = {};
	    vm.setPage = setPage;
	    initPagination();
	    function initPagination() {
	        // initialize to page 1
	        vm.setPage(1);
	    }
	    function setPage(page) {
	        if (page < 1 || (vm.pager.totalPages != 0 && page > vm.pager.totalPages)) {
	            return;
	        }
	
	        // get pager object from service
	        vm.pager = pagerService.getPager($scope.roommateMatches.length, page, 10);
	
	        // get current page of items
	        if (!$scope.showingContactedMatches) {
	            $scope.roommateMatches = $filter('orderBy')($scope.roommateMatches, 'ModifiedDate', true);
	        }
	        vm.matches = $scope.roommateMatches.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
	
	        //while paging scroll to top.
	        $window.scrollTo(0, angular.element('#profilePicture').offsetTop);
	    }
	
	    addEventListener('markPotentialRoommateAsContacted', function (event) {
	        var contactedRoommate = $filter('filter')($scope.roommateMatches, { 'ProfileId': parseInt(event.detail.recipientProfileId) });
	        contactedRoommate[0].Contacted = true;
	    });
	}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	
	angular
	    .module('ea5')
	    .directive('readMore', function () {
	        return {
	            restrict: 'A',
	            transclude: true,
	            replace: true,
	            template: '<p></p>',
	            scope: {
	                moreText: '@',
	                lessText: '@',
	                words: '@',
	                ellipsis: '@',
	                char: '@',
	                limit: '@',
	                content: '@'
	            },
	            link: function (scope, elem, attr, ctrl, transclude) {
	                var moreText = angular.isUndefined(scope.moreText) ? '<a class="read-more"> MORE </a>' : '<a class="read-more">' + scope.moreText + '</a>',
	                    lessText = angular.isUndefined(scope.lessText) ? '<a class="read-less"> LESS </a>' : '<a class="read-less">' + scope.lessText + '</a>',
	                    ellipsis = angular.isUndefined(scope.ellipsis) ? '' : scope.ellipsis,
	                    limit = angular.isUndefined(scope.limit) ? 150 : scope.limit;
	
	                attr.$observe('content', function (str) {
	                    readmore(str);
	                });
	
	                transclude(scope.$parent, function (clone, scope) {
	                    readmore(clone.text().trim());
	                });
	
	                function readmore(text) {
	
	                    var text = text,
	                        orig = text,
	                        regex = /\s+/gi,
	                        charCount = text.length,
	                        wordCount = text.trim().replace(regex, ' ').split(' ').length,
	                        countBy = 'char',
	                        count = charCount,
	                        foundWords = [],
	                        markup = text,
	                        more = '';
	
	                    if (!angular.isUndefined(attr.words)) {
	                        countBy = 'words';
	                        count = wordCount;
	                    }
	
	                    if (countBy === 'words') { // Count words
	
	                        foundWords = text.split(/\s+/);
	
	                        if (foundWords.length > limit) {
	                            text = foundWords.slice(0, limit).join(' ') + ellipsis;
	                            more = foundWords.slice(limit, count).join(' ');
	                            markup = text + moreText + '<span class="more-text">' + more + lessText + '</span>';
	                        }
	
	                    } else { // Count characters
	
	                        if (count > limit) {
	                            text = orig.slice(0, limit) + ellipsis;
	                            more = orig.slice(limit, count);
	                            markup = text + moreText + '<span class="more-text">' + more + lessText + '</span>';
	                        }
	
	                    }
	
	                    elem.append(markup);
	                    elem.find('.read-more').on('click', function () {
	                        $(this).hide();
	                        elem.find('.more-text').addClass('show').slideDown();
	                    });
	                    elem.find('.read-less').on('click', function () {
	                        elem.find('.read-more').show();
	                        elem.find('.more-text').hide().removeClass('show');
	                    });
	
	                }
	            }
	        };
	    });

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('findRoommateController', FindRoommateController);
	
	FindRoommateController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', 'tourTimeSelection'];
	
	function FindRoommateController($scope, $state, $window, dataservice, sessionStorage, tourTimeSelection) {
	    
	    //get params
	    $scope.propertyId = $state.params.propertyId;
	    $scope.propertyName = $state.params.propertyName;
	    $scope.marketName = $state.params.marketName;
	    $scope.marketRoommateCount = $state.params.marketRoommateCount;
	    $scope.profiles = angular.fromJson($state.params.profiles);
	    $scope.hideImages = ($state.params.hideImages == 'True' || $state.params.hideImages == 'true');
	
	    angular.forEach($scope.profiles, function (match, key) {
	        match.PhotoUri = getProfileUrl(match.PhotoName, match.PhotoVersion);
	    });
	
	    //set values
	    $scope.profilesFound = $scope.profiles.length >= 2;
	    $scope.requestProcessed = false;
	    $scope.alreadyMember = false;
	    $scope.newMember = false;
	    $scope.submit = findRoommate;
	
	    $scope.hasRoommateCount = false;
	    if ($scope.marketRoommateCount > 9)
	    {
	        $scope.hasRoommateCount = true;
	    }
	
	
	    function findRoommate() {
	        var email = angular.element('#userEmail').val();
	        var requestData = { email: email, pid: $scope.propertyId }
	        dataservice.findRoommate(requestData).then(
	            function success(response) {
	                $scope.requestProcessed = true;
	                if (response.status === 200) {
	                    $scope.alreadyMember = true;
	                } else if (response.status === 201) {
	                    $scope.newMember = true;
	                    gtag('event', 'conversion', { 'send_to': 'AW-1060388987/__KGCPuO-5YBEPuA0fkD' });
	                    gtag('event', 'conversion', { 'allow_custom_scripts': true, 'send_to': 'DC-6677643/cardsub/newrcoun+unique' });
	                    window.uetq = window.uetq || [];
	                    window.uetq.push({ 'ec': 'Roommate', 'ea': 'Form Submission' })
	                }
	
	                angular.element('#roommateLoginModalLeftSide').addClass("left-hand-side-confirmation");
	
	                //DELETE following line after testing is over and/or email sending functionality is implemented. 
	                //angular.element('#pageUrl').append(response.data.url);
	
	            }).catch(function (error) {
	
	            });
	    }
	
	    function getProfileUrl(name, version) {
	        if ((version == null) || $scope.hideImages) {
	            return "https://media.equityapartments.com/image/upload/e_brightness:-99/v1549395433/Roommates/UI/userprofile.png";
	        }
	        else {
	            return "https://media.equityapartments.com/image/upload/c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_black/" + version + "/Roommates/ProfilePictures/" + name + ".png";
	        }
	    }
	}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('contactRoommateController', ContactRoommateController);
	
	ContactRoommateController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', 'tourTimeSelection'];
	
	function ContactRoommateController($scope, $state, $window, dataservice, sessionStorage, tourTimeSelection) {
	    //get params
	    $scope.profileId = $state.params.profileId;
	    $scope.recipientName = $state.params.recipientName;
	    $scope.recipientProfileId = $state.params.recipientProfileId;
	    $scope.recipientEmail = $state.params.recipientEmail;
	    $scope.recipientId = $state.params.recipientId;
	    $scope.senderId = $state.params.senderId;
	    
	    //model
	    $scope.message = '';
	    $scope.placeholder = "Ex: I saw your profile on EquityApartments.com...";
	    $scope.submit = contactRoommate;
	    $scope.successfullyContacted = false;
	    
	    function contactRoommate() {
	        var message = removeChars($scope.message);
	        var requestData = { profileId: $scope.profileId, message: message, recipientProfileId: $scope.recipientProfileId, senderId: $scope.senderId, recipientId: $scope.recipientId};
	        dataservice.contactRoommate(requestData).then(
	            function success(response) {
	                if (response.status == 200) {
	                    // contacted successfully
	                    $scope.successfullyContacted = true;
	                    dispatchEvent(new CustomEvent('markPotentialRoommateAsContacted', { detail: { recipientProfileId: $scope.recipientProfileId } }));
	                }
	                else if (response.status == 400) {
	                    // bad request
	                }
	            }).catch(function (error) {
	
	            });
	    }
	
	    function removeChars(inputString) {
	        var chars = "a-zA-Z0-9,.\?\!\$% \(\)@:/*+;\"-";
	        var regex = new RegExp('[^' + chars + ']', 'g');
	        return inputString.replace(regex, '');
	    }
	}


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var ea5 = __webpack_require__(13);
	var _ = __webpack_require__(5);
	var moment = __webpack_require__(40);
	
	angular
	    .module('ea5')
	    .controller('disableProfileController', DisableProfileController);
	
	DisableProfileController.$inject = ['$scope', '$state', '$window', 'dataservice', 'sessionStorage', 'tourTimeSelection'];
	
	function DisableProfileController($scope, $state, $window, dataservice, sessionStorage, tourTimeSelection) {
	   //get params
	    if ($state.params.profileId == null) {
	        var urlString = window.location.pathname;
	        $scope.acctId = urlString.replace("/roommates/matches/", "");
	    }
	
	    $scope.profileId = $state.params.profileId;
	    $scope.metroURL = $state.params.metroURL;
	
	    //model
	    $scope.comments = null;
	    $scope.submit = disableProfile;
	    $scope.successfullyDisabled = false;
	    $scope.returnToHomepage = returnToHomepage;
	   
	
	    function disableProfile() {
	        var comments = removeChars($scope.comments);
	        var requestData = { profileId: $scope.profileId, comments: comments, acctId: $scope.acctId };
	        dataservice.disableProfile(requestData).then(
	            function success(response) {
	                if (response.status == 200) {
	                    // disabled successfully
	                    $scope.successfullyDisabled = true;
	                }
	                else if (response.status == 400) {
	                    // bad request
	                }
	            }).catch(function (error) {
	
	            });
	    }
	
	    function removeChars(inputString) {
	        var chars = "a-zA-Z0-9,.\?\!\$% \(\)@:/*+;\"-";
	        var regex = new RegExp('[^' + chars + ']', 'g');
	        if (!inputString) {
	            return "";
	        }
	        return inputString.replace(regex, '');
	    }
	
	    function returnToHomepage() {
	
	        var returnURL = $scope.metroURL;
	
	        if (returnURL == null)
	        {
	            returnURL = "/";
	        }
	
	        window.location.href = returnURL;
	    }
	}


/***/ })
/******/ ]);
//# sourceMappingURL=app.config.bundle.js.map