

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


(function ($, Drupal) {
     $.fn.subNav = function (options) {
        const DEFAULT_SELECTORS = {
            navActiveClass: 'active',       // Selected nav item modifier class
            navStickyClass: 'sticky',       // Sticky nav modifier class
            sectionSelector: 'section'       // Section id, class or tag selector
        };

        // Merge options with defaults
        const selectors = $.extend({}, DEFAULT_SELECTORS, options);

        // Set jQuery DOM elements
        const $subNavEQ = this;
        const $navLinks = $subNavEQ.find('a');
        const $sections = $(selectors.sectionSelector);

        const navHeight = $subNavEQ.outerHeight();
        const scrollTopOffset = $sections.first().outerHeight() + navHeight // height calculated

        let currentScrollPosition = 0;
        let sectionOffsetArray = [];


        function initialise() {
            calculateOffsets();
            bindEvents();
        }

        function bindEvents() {
            $navLinks.on('click', onClick);
            $(window).on('scroll', throttle(onScroll, 50));
        }

        function onClick(e) {
            e.preventDefault();
            const targetEl = $(this).attr('href');

            if ($(targetEl).length) {
                selectNavItem(this);

                if (window.scroll) {
                    window.scroll({
                        top: $(targetEl).offset().top - navHeight,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    $('html, body').animate({
                        scrollTop: $(targetEl).offset().top - navHeight
                    });
                }
            }
        }

        function onScroll() {
            var scrollTop = $(document).scrollTop() + navHeight,
                closestPosition = findClosestNumber(scrollTop, sectionOffsetArray);

            // select navbar item
            if (closestPosition !== currentScrollPosition) {
                selectNavItem('.section-offset-' + closestPosition);
                currentScrollPosition = closestPosition;
            }

            // fix navbar
            if (scrollTop > scrollTopOffset) {
                $subNavEQ.addClass(selectors.navStickyClass); // add your code here



                // show and hide nav item button
                if ($(window).width() >= 768) {
                    $("#show").show();

                    $("#show").click(function (e) { // on click expand navigation
                        $(".sticky li h6 a").show(200) && $("#show").hide();
                        e.stopPropagation();
                        /*	$(".active").css("background-color", "#1e2f46");                       
                            $('.lightBox').addClass('lightBoxOverly');
                            $('.lightBox').css({
                                'display': 'block',
                                'position': 'fixed',
                                'z-index': '-1',
                                'height': '100%',
                                'opacity': '0.7',
                                'top': '0',
                                'left': '0',
                                'right': '0',
                                'bottom':'0',
                                'background-color': 'rgba(0,0,0,.7)',
                            });     */
                    });
                    /* *///.dd-lightbox
                    $(document).click(function () {
                        $(".sticky li h6 a").hide() && $(".sticky li h6 a.active").show() && $("#show").show();
                        //$(".lightBox").removeClass("lightBoxOverly");
                        //$(".lightBox").removeAttr("style");

                    });
                    $(document).scroll(function () {
                        $(".sticky li h6 a").hide() && $(".sticky li h6 a.active").show() && $("#show").show();
                        // $(".lightBox").removeClass("lightBoxOverly");
                        // $(".lightBox").removeAttr("style");
                    });
                }

            }

            else {
                $subNavEQ.removeClass(selectors.navStickyClass);
                $("#subNavEQ ul li h6 a").removeAttr("style");// remove inline style
                $("#show").removeAttr("style");
                // $(".lightBox").removeClass("lightBoxOverly");

                // clear hide show button
                $(document).click(function () {
                    $("#show").hide();// for the more menu                  
                });
                $(document).scroll(function () {
                    $("#show").hide();// for the more menu                  
                });
            }
        }



        function calculateOffsets() {
            $sections.each(function (index) {
                const el = $(this)[0];
                const offsetTop = getOffsetTop(el);

                sectionOffsetArray.push(offsetTop);
                getNavItem(el).addClass('section-offset-' + offsetTop);
            });
        }

        function getOffsetTop(el) {
            const rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return Math.round(rect.top + scrollTop);
        }

        function getNavItem(el) {
            return $('#subNavEQ a[href="#' + $(el).attr('id') + '"]');
        }

        function selectNavItem(el) {
            if (!$subNavEQ.hasClass(selectors.navStickyClass)) {
                $subNavEQ.addClass(selectors.navStickyClass);
            }
            $navLinks.removeClass(selectors.navActiveClass);
            $(el).addClass(selectors.navActiveClass);
            $("#subNavEQ ul li h6 a").removeAttr("style");// remove inline style

        }

        function findClosestNumber(num, arr) {
            return arr.reduce(function (prev, curr) {
                return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
            });
        }

        function throttle(func, delay) {
            let timer = 0;

            return function () {
                const context = this,
                    args = [].slice.call(arguments);

                clearTimeout(timer);
                timer = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        }
        initialise();
    };

    if ($('#subNavEQ h6 a').length > 0) {
        $('#subNavEQ li').addClass('padd-LR');
    } else {
        $('#subNavEQ li').removeClass('padd-LR');
    }

    // sticky navigation 
    $(document).ready(function () {
        $('#subNavEQ').subNav();
    });

    $(window).resize(function () {
        $('#subNavEQ').subNav();
    });


    // mobile and tablet view port
    $(document).ready(function () {
        // $(window).resize(function(){

        if ($(window).width() <= 767) {
            // grab the initial top offset of the navigation 
            var subNav = function () {
                var subNavTop = $('#subNavEQ').offset();
                // our function that decides weather the navigation bar should have "fixed" css position or not.
                var scrollTop = $(window).scrollTop() - 81; // our current vertical position from the top           
                // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                // otherwise change it back to relative
                if (scrollTop == subNavTop) {
                    $('#subNavEQ').addClass('animation');
                } else {
                    $('#subNavEQ').removeClass('left');
                    $("#subNavEQ").removeAttr("style");
                }
                if (($('#subNavEQ ul li a').hasClass('active'))) {
                    var activeMenu = $('.active').offset();
                    var activeMenuPostion = activeMenu.left;
                    // third list element offset
                    var first = $("#subNavEQ ul li:nth-child(1)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var firstLeft = first.left;
                    var firstPossion = JSON.stringify(firstLeft); // converted offset object value to string
                    //forth list element offset
                    var second = $("#subNavEQ ul li:nth-child(2)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var secondLeft = second.left;
                    var secondPossion = JSON.stringify(secondLeft); // converted offset object value to string
                    // third list element offset
                    var third = $("#subNavEQ ul li:nth-child(3)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var thirdLeft = third.left;
                    var thirdPossion = JSON.stringify(thirdLeft); // converted offset object value to string
                    //forth list element offset
                    var fourth = $("#subNavEQ ul li:nth-child(4)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var fourthLeft = fourth.left;
                    var fourthPossion = JSON.stringify(fourthLeft); // converted offset object value to string
                    // third list element offset
                    var fifth = $("#subNavEQ ul li:nth-child(3)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var fifthLeft = fifth.left;
                    var fifthPossion = JSON.stringify(fifthLeft); // converted offset object value to string
                    //forth list element offset
                    var six = $("#subNavEQ ul li:nth-child(5)").offset(); // offset valu of the 3rd navigation bar of navigation
                    var sixLeft = six.left;
                    var sixPossion = JSON.stringify(sixLeft); // converted offset object value to string  

                    //if ($(window).innerWidth() <= 425) { 
                    //if ($(window).innerWidth() <= 425) { 
                        if ($(window).width() <= 425 && activeMenuPostion > thirdPossion) {
                            $('#subNavEQ ul').addClass('scrolled');
                            $('.scrolled').css({
                                'left': - 100,
                                'behavior': 'smooth',
                                'transition-property': 'all',
                                'transition-property': 'transform',
                                //'position': 'absolute',                                     
                            });

                            $("#subNavEQ ul").on("swipe",function(){
                                $("#subNavEQ ul").removeAttr("style");
                              });  
                        }
                                
                        else {
                            $("#subNavEQ ul").removeAttr("style");
                        }

                         if (activeMenuPostion > fourthPossion) {
                            $('#subNavEQ ul').addClass('scrolled');
                            $('.scrolled').css({                               
                                'left': -300,
                                'behavior': 'smooth',
                                'transition-property': 'all',
                                'transition-property': 'transform',
                                'transition-duration': '0.2s',                                                               
                            });

                            $("#subNavEQ ul").on("swipe",function(){
                                $("#subNavEQ ul").removeAttr("style");
                              });   
                        }
        
                        else {
                            $("#subNavEQ ul").removeAttr("style");
                        }
                }
            };
            // sticky function 
            subNav();
            // and run it again every time you scroll
            // scroll 

            $(window).scroll(function () { subNav(); });
           // $(window).resize(function () { subNav(); });
         //   $(window).on('resize', function () { subNav().reload(); });
        }

        //  $(window).on('resize',function(){location.reload();});
        /* $(window).bind('resize',function(){
              window.location.href = window.location.href;
         }); */
       
// For the window Refresh
	    var context;
        var $window = $(window);
        // run this right away to set context
        if ($window.width() <= 768) {
            context = 'small';
        }/* else if (768 < $window.width() < 970) {
            context = 'medium';
        } else {
            context = 'large';
        }*/

        // refresh the page only if you're crossing into a context
        // that isn't already set
        $(window).resize(function () {
            if (($window.width() <= 768) && (context != 'small')) {
                //refresh the page
                location.reload();
            } /*else if ((768 < $window.width() < 970) && (context != 'medium')) {
                location.reload();
            } else if (context != 'large') {
                location.reload();
            }*/
        });
    });
})(jQuery, Drupal);

var faq = document.getElementsByClassName("faqItem");
var itemFaq;

for (itemFaq = 0; itemFaq < faq.length; itemFaq++) {
  faq[itemFaq].addEventListener("click", function () {
    this.classList.toggle("active");
    var panelAcc = this.nextElementSibling;
    if (panelAcc.style.maxHeight) {
      panelAcc.style.maxHeight = null;
    } else {
      panelAcc.style.maxHeight = panelAcc.scrollHeight + "px";
    }
  });
}

// Place your frontend scripts here

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
(function ($, Drupal) {

  document.documentElement.setAttribute("data-browser", navigator.userAgent);
  
  $(document).ready(function(){

    for(var i = 0; i <= 9; i++) {   
      if ($(".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .slider-items").length) {
        // Get count of slides
        $(".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .slider-items").on("init reinit", function(event, slick){
          if (slick.slideCount > 0 && !isNaN(slick.slideCount)) {
            var slideMargin = parseInt($(slick.$slides[0]).css('margin-right'));
            var slideTotalWidth = slick.$slides[0].clientWidth + slideMargin;
            var slidesWidth = (slideTotalWidth * slick.slideCount) - slideMargin;

            //check if total width of slides is less than the slider window
            if (slidesWidth < slick.$slider[0].clientWidth ) {
              $(".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] div.carousel-control").addClass("control-hidden");
            }
            else {
              $(".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] div.carousel-control").removeClass("control-hidden");
            }        
          }
        });

        $(".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .slider-items").slick({
          speed: 300,
          slidesToShow: 3.25,
          slidesToScroll: 1,
          
          prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
          nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
          
          infinite: false,
          mobileFirst: true,
          rows: 1,
          variableWidth: true,
          
          responsive: [{
              breakpoint: 1200, //mf min(1200)
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 992,  //mf min(992)
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 767, //mf min(767)
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 576,  //mf min(576)
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                centerMode: true,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {          
              breakpoint: 300,  //mf min(320)
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight[data-eq-spotlight-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            },
            

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]              
        }); 
        
      }
    }

  });  
  
})(jQuery, Drupal);
// Place your frontend scripts here

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
(function ($, Drupal) {

  document.documentElement.setAttribute("data-browser", navigator.userAgent);

  $(document).ready(function(){

    for(var i = 0; i <= 9; i++) { 
      if ($(".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .slider-items").length) {
        // Get count of slides
        $(".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .slider-items").on('init reinit', function(event, slick){
          if (slick.slideCount > 0 && !isNaN(slick.slideCount)) {
            var slideMargin = parseInt($(slick.$slides[0]).css('margin-right'));
            var slideTotalWidth = slick.$slides[0].clientWidth + slideMargin;
            var slidesWidth = (slideTotalWidth * slick.slideCount) - slideMargin;

            //check if total width of slides is less than the slider window
            if (slidesWidth < slick.$slider[0].clientWidth ) {
              $(".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] div.carousel-control").addClass("control-hidden");
            }
            else {
              $(".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] div.carousel-control").removeClass("control-hidden");
            }
          }  
        });
        
        $(".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .slider-items").slick({
          speed: 300,
          slidesToShow: 3.25,
          slidesToScroll: 1,
          
          prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
          nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
          
          infinite: false,
          mobileFirst: true,
          rows: 1,
          variableWidth: true,
          
          responsive: [{
              breakpoint: 1200, //mf min(1200)
              settings: {
                slidesToShow: 2.25,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 992,  //mf min(992)
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 768, //mf min(768)
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {
              breakpoint: 576,  //mf min(576)
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            }, {          
              breakpoint: 300,  //mf min(320)
              settings: {
                slidesToShow: 1, //1.2
                slidesToScroll: 1,
                rows: 1,
                prevArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-prev",  
                nextArrow: ".wp-block-custom-eq-spotlight-large[data-eq-spotlight-large-instance-id = '" + i + "'] .ctrl-next",
                variableWidth: true,
              },
            },
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]              
        });    
        
      }    
    }
    
  });
})(jQuery, Drupal);
(function ($, Drupal) {
var $animation_elements = $('.card');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

// mobile and tablet view port
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
})(jQuery, Drupal);

// Place your frontend scripts here
// Parallax Animaton variant 1
(function ($, Drupal) {
$(window).scroll(function () {

  for (var i = 0; i <= 9; i++) {
    var eqPrallaxV1Top = $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide1");
    if (eqPrallaxV1Top.length) {
      var eqPrallaxV1TopPosition = eqPrallaxV1Top.offset().top;
      var eqPrallaxV1ScrollTop = $(window).scrollTop() + 141;
      var eqPrallaxV1ScrollTopSmallDevice = $(window).scrollTop() + 300;
      if ($(window).width() >= 769 && eqPrallaxV1ScrollTop >= eqPrallaxV1TopPosition) {
        $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide1").css({
          'opacity': 0,
          'transition': 'all 0.9s ease',
        });
      }

      else if ($(window).width() <= 768 && eqPrallaxV1ScrollTopSmallDevice >= eqPrallaxV1TopPosition) {
        $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide1").css({
          'opacity': 0,
          'transition': 'all 0.9s ease',
        });
      }

      else {
        $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide1").css({
          'opacity': 0.93,
          'transition': 'all 0.9s ease',
        });
      }
    }

    // Second content slide
    var eqPrallaxV1SecSlide = $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide2");
    if (eqPrallaxV1SecSlide.length) {
      var eqPrallaxV1SecSlideTop = eqPrallaxV1SecSlide.offset().top + 300 ;
      var eqPrallaxV1SecSlideHeight = $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eq-prallax-v1-slide2").outerHeight();
      if ($(window).scrollTop() >= eqPrallaxV1SecSlideTop + eqPrallaxV1SecSlideHeight - window.innerHeight) {
        //console.log("second parallax section");
        $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eqPrallaxV1SecSlide").css({
          'opacity': 1,
          'transition': 'all 0.9s ease',
        });
      }
      else {
        $(".wp-block-custom-eq-parallax[data-eq-parallax-instance-id = '" + i + "'] .eqPrallaxV1SecSlide").css({
          'opacity': 0,
          'transition': 'all 0.9s ease',
        });
      }
    }
  }
});


  // end
})(jQuery, Drupal);

(function ($, Drupal) {
  eventsSlick();

  function eventsSlick() {
    if ($('.slider_container').length > 0) {
      $(".slider_container").slick({
        dots: false,
        arrows: true,
        slidesToShow: 3.4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2.3
          }
        }, {
          breakpoint: 540,
          settings: {
            slidesToShow: 1.3
          } // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object

        }]
      });
    }
  }
	if($('#stickySidenav.eq-salesforce').length > 0) {
		$("input#email").change(function(){
			if($(this).val() == "") {
				$("#stickySidenav.eq-salesforce .acknowledgement").addClass('hidden');
			}
			else {
				$("#stickySidenav.eq-salesforce .acknowledgement").removeClass('hidden');
			}
		});
		
		document.getElementById("salesform").reset();
		
		$("input:checkbox.opt-1").change(function(){
			if($(".opt-1").is(':checked')) {
				$(".opt-2").prop("disabled", true);
			}
			else {
				$(".opt-2").prop("disabled", false);
			}
		});
		$("input:checkbox.opt-2").change(function(){
			if($(".opt-2").is(':checked')) {
				$(".opt-1").prop("disabled", true);
			}
			else {
				$(".opt-1").prop("disabled", false);
			}
		});
	}
})(jQuery, Drupal);
(function ($, Drupal) {
  
  // script for the youtube video block (hero-landing-v1 block 
  $(document).ready(function() {
    $('.wp-block-custom-eq-hero-landing-v1 .play-button').on('click', function(ev) { 
      $(".wp-block-custom-eq-hero-landing-v1 #iframing").trigger('click');
      $(".wp-block-custom-eq-hero-landing-v1 #iframing").addClass('active');
      $(".wp-block-custom-eq-hero-landing-v1 #iframing")[0].src += "&autoplay=1";
      $(".wp-block-custom-eq-hero-landing-v1 h1").hide();
      
      // video traking start
      var videoURLs = $('.wp-block-custom-eq-hero-landing-v1 .video-player iframe').attr('src');
      var videotitles = $(this).parents('.wp-block-custom-eq-hero-landing-v1').find('h1').html();
      var stripedtitle = videotitles.replace(/<[^>]+>/g, '');
      $.trim(stripedtitle);
      dataLayer.push({
        'event': 'videoPlay',
        'eventCategory': 'content',
        'eventAction': 'video engagement',
        'videoProvider': 'Youtube',
        'videoStatus': 'Open',
        'videoURL': videoURLs,
        'videoTitle': stripedtitle
      });
      // end 
    
      ev.preventDefault(); 

    });
  });
})(jQuery, Drupal);
(function ($, Drupal) {
// script for the Hero video block (hero-landing-v1 block
  $(document).ready(function () {
/*
    for(var i = 1; i <= 9; i++) {
      if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "']").length) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] .play-button").on("click", function (ev) {
          $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] .play-button").hide();
          $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] #iframing" + i + ".video-player").addClass('active');
          $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '" + i + "'] #iframing" + i + ".video-player").get(0).play();
          ev.preventDefault();
        });
      }
    }
*/

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] #iframing1.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '1'] #iframing1.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] #iframing2.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '2'] #iframing2.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] #iframing3.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '3'] #iframing3.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] #iframing4.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '4'] #iframing4.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] #iframing5.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '5'] #iframing5.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] #iframing6.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '6'] #iframing6.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] #iframing7.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '7'] #iframing7.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] #iframing8.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '8'] #iframing8.video-player").get(0).play();
        ev.preventDefault();
      });
    }

    if ($(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9']").length) {
      $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] .play-button").on("click", function (ev) {
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] h1, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] .article-media, .wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] .play-button").hide();
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] #iframing9.video-player").addClass('active');
        $(".wp-block-custom-eq-hero-video[data-eq-hero-video-instance-id = '9'] #iframing9.video-player").get(0).play();
        ev.preventDefault();
      });
    }

  });
})(jQuery, Drupal);
// Place your frontend scripts here

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
(function ($, Drupal) {

  $(document).ready(function(){

    // Get count of slides
    $('.custom-block-eq-spotlight .slider-items').on('init reinit', function(event, slick){
      if (slick.slideCount > 0 && !isNaN(slick.slideCount)) {
        var slideMargin = parseInt($(slick.$slides[0]).css('margin-right'));
        var slideTotalWidth = slick.$slides[0].clientWidth + slideMargin;
        var slidesWidth = (slideTotalWidth * slick.slideCount) - slideMargin;

        //check if total width of slides is less than the slider window
        if (slidesWidth < slick.$slider[0].clientWidth ) {
          $('.custom-block-eq-spotlight div.carousel-control').addClass("control-hidden");
        }
        else {
          $('.custom-block-eq-spotlight div.carousel-control').removeClass("control-hidden");
        }
      }      
    });
    
    $('.custom-block-eq-spotlight .slider-items').slick({
      speed: 300,
      //slidesToShow: 4.5,
      //slidesToScroll: 1,
      //slidesToShow: 6,
      //slidesToScroll: 1,
      
      prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
      nextArrow: '.custom-block-eq-spotlight .ctrl-next',
      
      infinite: false,
      mobileFirst: true,
      rows: 1,
      variableWidth: true,
      
      responsive: [{
          breakpoint: 2560, //mf min(1200)
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 2460, //mf min(1200)
          settings: {
            slidesToShow: 5.8,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 2334, //mf min(1200)
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 2084, //mf min(1200)
          settings: {
            slidesToShow: 4.75,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {             
          breakpoint: 1860, //mf min(1200)
          settings: {
            slidesToShow: 4.6,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 1820, //mf min(1200)
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 1500, //mf min(1200)
          settings: {
            slidesToShow: 4.4,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 1366, //mf min(1200)
          settings: {
            slidesToShow: 4.3,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {        
          breakpoint: 1200, //mf min(1200)
          settings: {
            slidesToShow: 3.09,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 1024, //mf min(1200)
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 992,  //mf min(992)
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 768, //mf min(768)
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {
          breakpoint: 576,  //mf min(576)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        }, {          
          breakpoint: 320,  //mf min(320)
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            rows: 1,
            prevArrow: '.custom-block-eq-spotlight .ctrl-prev',  
            nextArrow: '.custom-block-eq-spotlight .ctrl-next',
            variableWidth: true,
          },
        },
        
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]              
    });    
  });

})(jQuery, Drupal);

// Place your frontend scripts here

//import $ from "jquery";
// Import Slick
//import 'slick-carousel/slick/slick.min';
(function ($, Drupal) {

  $(document).ready(function(){

    $("a.wp-block-button__link:contains('CONTACT LICENSING TEAM')").parent(".wp-block-button.primary").on("click", function() {
      openNav();
    });  
    
    /* Set the width of the side navigation */
    function openNav() {
      $("#stickySidenav").addClass("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
      $("#stickySidenav").removeClass("active");
    }
				//Add Iframe id and alter iframe src and data-src
		if($('.licensing-video').length) {
			$('.licensing-video iframe').attr('id','licensing-yt');
			var frameurl_orig = $('.wp-block-embed__wrapper').find('iframe#licensing-yt').attr('src');
			if(frameurl_orig != undefined) {
				var processedUrl = frameurl_orig.replace('?rel=0','') + "?enablejsapi=1";
				$('.licensing-video iframe').attr('src',processedUrl);
				$('.licensing-video iframe').attr('data-src',processedUrl);
			
				//Iframe on click function
				//$('.wp-block-embed__wrapper iframe#licensing-yt').iframeTracker({
					//blurCallback: function(){
						// Do something when iframe is clicked (like firing an XHR request)
						var frameurl = $('.wp-block-embed__wrapper').find('iframe#licensing-yt').attr('src');
						loadPlayer(frameurl);
					//}
				//});
			}
			// Youtube Video percentage calc, Video progress, status tracking  
			var player; var timer; var timeSpent = []; 
			var timer25; var timer50; var timer75; 
			var timestamp; var timestamp25; var timestamp50; var timestamp75;
			var remainingTime; var remainingTime25; var remainingTime50; var remainingTime75;
			var vidduration; var currentTime; var ytTitle;
			function loadPlayer(frameurl) {
				if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
					var tag = document.createElement('script');
					tag.src = "https://www.youtube.com/iframe_api";
					var firstScriptTag = document.getElementsByTagName('script')[0];
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  		  
					window.onYouTubePlayerAPIReady = function() {
						onYouTubePlayer(frameurl);
					};
				} else {		
					clearTimers();								  	
					onYouTubePlayer(frameurl);			
				}
			}

			function onYouTubePlayer(frameurl) {
				if($('#licensing-yt').length) {
					var yturl = $('#licensing-yt').attr('src');
					var ytid = matchYoutubeUrl(yturl);
					player = new YT.Player('licensing-yt', {
						videoId: ytid,			  
						events: {
							'onReady': onPlayerReady,	
							'onStateChange': onPlayerStateChange,			 
						}
					});
				}
			}

			function matchYoutubeUrl(url){
				var p = '';
				return (url.match(p)) ? RegExp.$1 : false ;
			}

			function onPlayerReady(event) { 
				//event.target.playVideo();
			}

			function onPlayerStateChange(event) {
				var frameid = player.f.id;
				if(ytTitle == undefined) {
					ytTitle = player.playerInfo.videoData['title'];
				}
				if (event.data == 1) {          		   
					if (typeof player.getDuration === "function"){
						vidduration = player.getDuration() ? player.getDuration() : player.playerInfo.duration;
					} else {		
						vidduration = player.playerInfo.duration;
					}
					timestamp = Math.floor(vidduration);
					timestamp25 = timestamp * 0.25;
					timestamp50 = timestamp * 0.5;
					timestamp75 = timestamp * 0.75;
					if (typeof player.getCurrentTime === "function"){
						currentTime = player.getCurrentTime() ? player.getCurrentTime() : player.playerInfo.currentTime;
					} else {
						currentTime = player.playerInfo.currentTime;
					}
					remainingTime = timestamp - currentTime;
					remainingTime25 = timestamp25 - currentTime;
					remainingTime50 = timestamp50 - currentTime;
					remainingTime75 = timestamp75 - currentTime;
					videoanalytics('Progress',frameid);
					record(frameid);
				}else if (event.data == 2) {
					videoanalytics('Paused',frameid);			  			
				}else if (event.data == 0) {
					videoanalytics('Complete',frameid);			
				}else if (event.data == 3) {
					videoanalytics('Buffering',frameid);			
				}else {
					videoanalytics('Not started',frameid);
				}
			}

			// Track the video watched percentage
			function record(frameid){
				if (currentTime <= timestamp25) {
					timer25 = setTimeout(function() {           	 
						percentagewatched('25%',frameid);
					}, remainingTime25 * 1000);		      	 
				}
				if (currentTime <= timestamp50) {
					timer50 = setTimeout(function() {
						percentagewatched('50%',frameid);
					}, remainingTime50 * 1000);
				}
				if (currentTime <= timestamp75) {
					timer75 = setTimeout(function() {
						percentagewatched('75%',frameid);
					}, remainingTime75 * 1000);
				}
			}

			// Clearing the timers 
			function clearTimers() {
				clearTimeout(timer);
				clearTimeout(timer25);
				clearTimeout(timer50);
				clearTimeout(timer75);
				timestamp=0;
				timestamp25=0;
				timestamp50=0;
				timestamp75=0;
			}

			// GTM Tracking for video status - progress, pause, complete  
			function videoanalytics(videostatus,frameid) {
				if($('#licensing-yt').length) {
					var videotitles = ytTitle;
					var videoURLs = $('#licensing-yt').attr('src');
				}
				if(videotitles != undefined) {
					var stripedtitle = videotitles.replace(/<[^>]+>/g, '');
					$.trim(stripedtitle);
					dataLayer.push({
						'event': 'videoPlay',
						'eventCategory': 'content',
						'eventAction': 'video engagement',
						'videoProvider': 'Youtube',
						'videoStatus': videostatus,
						'videoURL': videoURLs,
						'videoTitle': stripedtitle
					});
				}
			}

			// GTM Tracking for video played percentage   
			function percentagewatched(videoPercent,frameid) {

				if($('#licensing-yt').length) { 
					var videotitles = ytTitle;
					var videoURLs = $('#licensing-yt').attr('src');
				}
				if(videotitles != undefined) {
					var stripedtitle = videotitles.replace(/<[^>]+>/g, '');
					$.trim(stripedtitle);
					dataLayer.push({
						'event': 'videoPlay',
						'eventCategory': 'content',
						'eventAction': 'video engagement',
						'videoProvider': 'Youtube',
						'videoPercent': videoPercent, 
						'videoURL': videoURLs,
						'videoTitle': stripedtitle 		
					});
				}
			}
		}
		if($('#stickySidenav.eq-salesforce').length > 0) {
			$( "#salesform" ).submit(function(event) {
				dataLayer.push({
					'event': "formSubmit",
					'eventCategory': "forms",
					'eventAction': "contact us form interaction",
					'eventLabel': "successful form submit",
					'formName': "Licensing Contact us",
					'formMessage': "Thank you"
				});
			});
		}
  });

})(jQuery, Drupal);


function stockResults(json){
  jQuery("a.eq-stock-ticker").each(function() {
    jQuery(this).html('');
  });
}    

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};

  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair = void 0;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');

      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };

  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);

    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);

    if (viewHref && path.substring(0, viewHref.length + 1) === viewHref + '/') {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };

  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);

    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;

      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;

        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = '.js-view-dom-id-' + ajaxViews[i].view_dom_id;
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };

  Drupal.views = {};

  Drupal.views.instances = {};

  Drupal.views.ajaxView = function (settings) {
    var selector = '.js-view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    var ajaxPath = drupalSettings.views.ajax_path;

    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }

    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: { type: 'fullscreen' }
    };

    this.settings = settings;

    this.$exposed_form = $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once('exposed-form').each($.proxy(this.attachExposedFormAjax, this));

    this.$view.filter($.proxy(this.filterNestedViews, this)).once('ajax-pager').each($.proxy(this.attachPagerAjax, this));

    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];

    $('input[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };

  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };

  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };

  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');

    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };

  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();

    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }

    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({ scrollTop: offset.top - 10 }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);
/**
 * @file better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module
 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function(context, settings) {
      // Add highlight class to checked checkboxes for better theming
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes
        .change(function() {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight')
      ;
    }
  };

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');
  }

}) (jQuery, Drupal, drupalSettings);

/**
 * @file auto_submit.js
 *
 * Provides a "form auto-submit" feature for the Better Exposed Filters module.
 */

(function ($, Drupal) {

  /**
   * To make a form auto submit, all you have to do is 3 things:
   *
   * Use the "better_exposed_filters/auto_submit" js library.
   *
   * On gadgets you want to auto-submit when changed, add the
   * data-bef-auto-submit attribute. With FAPI, add:
   * @code
   *  '#attributes' => array('data-bef-auto-submit' => ''),
   * @endcode
   *
   * If you want to have auto-submit for every form element, add the
   * data-bef-auto-submit-full-form to the form. With FAPI, add:
   * @code
   *   '#attributes' => array('data-bef-auto-submit-full-form' => ''),
   * @endcode
   *
   * If you want to exclude a field from the bef-auto-submit-full-form auto
   * submission, add an attribute of data-bef-auto-submit-exclude to the form
   * element. With FAPI, add:
   * @code
   *   '#attributes' => array('data-bef-auto-submit-exclude' => ''),
   * @endcode
   *
   * Finally, you have to identify which button you want clicked for autosubmit.
   * The behavior of this button will be honored if it's ajaxy or not:
   * @code
   *  '#attributes' => array('data-bef-auto-submit-click' => ''),
   * @endcode
   *
   * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are
   * supported. We probably could use additional support for HTML5 input types.
   */
  Drupal.behaviors.betterExposedFiltersAutoSubmit = {
    attach: function(context) {
      // e.keyCode: key
      var ignoredKeyCodes = [
        16, // shift
        17, // ctrl
        18, // alt
        20, // caps lock
        33, // page up
        34, // page down
        35, // end
        36, // home
        37, // left arrow
        38, // up arrow
        39, // right arrow
        40, // down arrow
        9, // tab
        13, // enter
        27  // esc
      ];

      // When exposed as a block, the form #attributes are moved from the form
      // to the block element, thus the second selector.
      // @see \Drupal\block\BlockViewBuilder::preRender
      var selectors = 'form[data-bef-auto-submit-full-form], [data-bef-auto-submit-full-form] form, [data-bef-auto-submit]';

      function triggerSubmit ($target) {
        $target.closest('form').find('[data-bef-auto-submit-click]').click();
      }

      // The change event bubbles so we only need to bind it to the outer form
      // in case of a full form, or a single element when specified explicitly.
      $(selectors, context).addBack(selectors).once('bef-auto-submit').on('change keyup keypress', function (e) {
        var $target = $(e.target);

        // Don't submit on changes to excluded elements or a submit element.
        if ($target.is('[data-bef-auto-submit-exclude], :submit')) {
          return true;
        }
        // Use debounce to prevent excessive submits on text field changes.
        // Navigation key presses are ignored.
        else if ($target.is(':text:not(.hasDatepicker), textarea') && $.inArray(e.keyCode, ignoredKeyCodes) === -1) {
          Drupal.debounce(triggerSubmit, 500)($target);
        }
        // Only trigger submit if a change was the trigger (no keyup).
        else if (e.type === 'change') {
          triggerSubmit($target);
        }
      });
    }
  }

}(jQuery, Drupal));

