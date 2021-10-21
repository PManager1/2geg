/*
Custom JS file for handling mailchimp related functionalities
*/

(function ($) {
  Drupal.behaviors.ge_add_to_calendar = {
    attach: function (context, settings) {
      $(document).ready(function (event) {
        if ($(".eq-add-calendar-wrapper")) {
          $(".eq-pop-calendar", context).on("click", function (event) {
            var popup = $(this).siblings(".eq-add-to-calendar");
            event.stopPropagation();
            popup.toggleClass("show");
          });
          $(document, context).click(function () {
            var popup = $(".eq-pop-calendar").siblings(".eq-add-to-calendar");
            if (popup.hasClass("show")) {
              popup.removeClass("show");
            }
          });
          $(".eq-outlook", context).on("click", function (event) {
            var basePath = drupalSettings.ge_base_path.basepath;
            var title = $(this).parents("#eq-add-to-calendar").attr('data-title');
            var dates = $(this).parents("#eq-add-to-calendar").attr('data-dates');
            var links = $(this).parents("#eq-add-to-calendar").attr('data-link');
            var body = $(this).parents("#eq-add-to-calendar").attr('data-body');
            var split_dates = dates.split(" , ");

            $.ajax({
              cache: false,
              type: 'POST',
              data: {
                summary: title,
                datestart: split_dates['0'],
                dateend: split_dates['1'],
                urlevent: links,
                body: body,
              },
              url: basePath + "eq-download-ics",
              success: function (response, status) {
                var link = document.createElement("a");
                link.href = 'data:text/calendar;charset=utf8,' + escape(response);
                link.download = "ge-event.ics";
                link.click();
              }
            });
            var popup = $(this).parents(".eq-add-to-calendar");
            event.stopPropagation();
            popup.toggleClass("show");
          });

          $(".eq-icalendar", context).on("click", function (event) {
            var basePath = drupalSettings.ge_base_path.basepath;
            var title = $(this).parents("#eq-add-to-calendar").attr('data-title');
            var dates = $(this).parents("#eq-add-to-calendar").attr('data-dates');
            var links = $(this).parents("#eq-add-to-calendar").attr('data-link');
            var body = $(this).parents("#eq-add-to-calendar").attr('data-body');
            var split_dates = dates.split(" , ");

            $.ajax({
              cache: false,
              type: 'POST',
              data: {
                summary: title,
                datestart: split_dates['0'],
                dateend: split_dates['1'],
                urlevent: links,
                body: body,
              },
              url: basePath + "eq-download-ics",
              success: function (response, status) {
                var link = document.createElement("a");
                link.href = 'data:text/calendar;charset=utf8,' + escape(response);
                link.download = "ge-event.ics";
                link.click();
              }
            });
            var popup = $(this).parents(".eq-add-to-calendar");
            event.stopPropagation();
            popup.toggleClass("show");
          });

          $(".eq-add-to-google", context).on("click", function (event) {
            var basePath = drupalSettings.ge_base_path.basepath;
            var title = $(this).parents("#eq-add-to-calendar").attr('data-title');
            var dates = $(this).parents("#eq-add-to-calendar").attr('data-dates');
            var links = $(this).parents("#eq-add-to-calendar").attr('data-link');
            var body = $(this).parents("#eq-add-to-calendar").attr('data-body');
            var split_dates = dates.split(" , ");

            $.ajax({
              cache: false,
              type: 'POST',
              data: {
                summary: title,
                datestart: split_dates['0'],
                dateend: split_dates['1'],
                urlevent: links,
                body: body,
              },
              url: basePath + "eq-google-calendar",
              success: function (response, status) {
                window.open(response);
              }
            });
            var popup = $(this).parents(".eq-add-to-calendar");
            event.stopPropagation();
            popup.toggleClass("show");
          });

          $(".eq-add-to-yahoo", context).on("click", function (event) {
            var basePath = drupalSettings.ge_base_path.basepath;
            var title = $(this).parents("#eq-add-to-calendar").attr('data-title');
            var dates = $(this).parents("#eq-add-to-calendar").attr('data-dates');
            var links = $(this).parents("#eq-add-to-calendar").attr('data-link');
            var body = $(this).parents("#eq-add-to-calendar").attr('data-body');
            var split_dates = dates.split(" , ");

            $.ajax({
              cache: false,
              type: 'POST',
              data: {
                summary: title,
                datestart: split_dates['0'],
                dateend: split_dates['1'],
                urlevent: links,
                body: body,
              },
              url: basePath + "eq-yahoo-calendar",
              success: function (response, status) {
                window.open(response);
              }
            });
            var popup = $(this).parents(".eq-add-to-calendar");
            event.stopPropagation();
            popup.toggleClass("show");
          });
        }
      });
    }
  };

})(jQuery);
/*
Custom JS file for handling mailchimp related functionalities
*/

(function ($) {
  Drupal.behaviors.eq_mailchimp = {
    attach: function (context, settings) {
      $("a.atcb-item-link").attr('href', function (i, a) {
        var evtlink = decodeURIComponent(a);
        var sysTzone = drupalSettings.eq_mailchimp_subscription.eq_mailchimp.timezone;
        var etzone = $('.ir-events__field-event-timezone .field__item').html();

        if (etzone != null) {
          evtlink = evtlink.replace("e[0][timezone]=" + sysTzone, "e[0][timezone]=" + etzone);
        }

        //evtlink = encodeURIComponent(evtlink);		 
        return evtlink;
      });
      if ($('#webform-submission-eq-technical-careers-issues-add-form').length > 0) {
        $('#edit-please-select-whether-or-not-you-work-for-eq-nonge', context).click(function () {
          var url = 'https://google.com';
          window.open(url, '_blank');
        });
      }

      $("#eq-mailchimp-button", context).click(function () {
        var emailField = $('#eq-mailchimp-email').val();
        $("#eq-mailchimp-email").css('border', 'none');
        $("#eq-mailchimp-fname").css('border', 'none');
        $("#eq-mailchimp-lname").css('border', 'none');
        $("#eq-mailchimp-zip").css('border', 'none');
        $("#eq-mail-message .alert-dismissible").removeClass('alert-danger');
        $("#eq-mail-message .alert-dismissible .response-msg").html('');
        if ($('#eq-mailchimp-fname').val() == '') {
          $("#eq-mail-message").css("display", "block");
          $("#eq-mail-message .alert-dismissible").addClass('alert-danger');
          $("#eq-mail-message .alert-dismissible .response-msg").html('Please enter First Name.');
          $("#eq-mailchimp-fname").css('border', '1px solid red');
          $("#eq-mailchimp-fname").focus();
        } else if ($('#eq-mailchimp-lname').val() == '') {
          $("#eq-mail-message").css("display", "block");
          $("#eq-mail-message .alert-dismissible").addClass('alert-danger');
          $("#eq-mail-message .alert-dismissible .response-msg").html('Please enter last Name.');
          $("#eq-mailchimp-lname").css('border', '1px solid red');
          $("#eq-mailchimp-lname").focus();
        } else if ($('#eq-mailchimp-email').val() == '' || (isEmail($('#eq-mailchimp-email').val()) == false)) {
          //clear the email field message
          $("#eq-mail-message").css("display", "block");
          $("#eq-mail-message .alert-dismissible").addClass('alert-danger');
          $("#eq-mail-message .alert-dismissible .response-msg").html('Please enter a valid Email Address.');
          $("#eq-mailchimp-email").css('border', '1px solid red');
          $("#eq-mailchimp-email").focus();
        } 
        // else if ($('#eq-mailchimp-zip').val() == '' || $.isNumeric($('#eq-mailchimp-zip').val()) == false) {
        //   $("#eq-mail-message").css("display", "block");
        //   $("#eq-mail-message .alert-dismissible").addClass('alert-danger');
        //   $("#eq-mail-message .alert-dismissible .response-msg").html('Please enter valid zip code.');
        //   $("#eq-mailchimp-zip").css('border', '1px solid red');
        //   $("#eq-mailchimp-zip").focus();
        // }
         else {
          irsubscribe_mail();
        }
      });

      function irsubscribe_mail() {
        var basePath = drupalSettings.eq_mailchimp_subscription.eq_mailchimp.basepath;
        $.ajax({
          cache: false,
          type: 'POST',
          data: {
            email: $('#eq-mailchimp-email').val(),
            fname: $('#eq-mailchimp-fname').val(),
            lname: $('#eq-mailchimp-lname').val(),
            zip: $('#eq-mailchimp-zip').val(),
          },
          url: basePath + 'eq-mailchimp-subscribe',
          success: function (response, status) {
            var msgbox = document.getElementById("eq-mail-message");
            //msgbox.innerHTML = response;
            if (status === 'success') {
              $("#eq-mail-message").show();
              $("#eq-mail-message .alert-dismissible").removeClass('alert-danger');
              $("#eq-mail-message .alert-dismissible").addClass('alert-success');
              if ($('.alert-dismissible').length) {
                $("#eq-mail-message .alert-dismissible .response-msg").html(response);
              }
              //	var stringReponse = response.includes("Thanks for your subscription");
              $("#eq-mailchimp-fname").val('');
              $("#eq-mailchimp-lname").val('');
              $("#eq-mailchimp-email").val('');
              $("#eq-mailchimp-zip").val('');
              $("#eq-mailchimp-email").focus();
              if (stringReponse == true) {
                dataLayer.push({
                  "event": "formSubmit",
                  "eventCategory": "forms",
                  "eventAction": "newsletter sign-up",
                  "eventLabel": "sign-up successful",
                  "formName": "GE Brief",
                  "formMessage": response
                });
              } else {
                dataLayer.push({
                  "event": "formSubmit",
                  "eventCategory": "forms",
                  "eventAction": "newsletter sign-up",
                  "eventLabel": "sign-up failed",
                  "formName": "GE Brief",
                  "formMessage": response
                });
              }
            } else {
              dataLayer.push({
                'event': "formSubmit",
                'eventCategory': "forms",
                'eventAction': "newsletter sign-up",
                'eventLabel': "sign-up failed",
                'formName': "GE Brief",
                'formMessage': response
              });
            }
          }
        });
      }

      function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

    }
  };

})(jQuery);
/**
 * @file
 * The Lazy-load behavior.
 */

(function (Drupal) {

  'use strict';

  Drupal.behaviors.lazy = {
    attach: function (context, settings) {
      var utils = {
        extend: function (obj, src) {
          Object.keys(src).forEach(function (key) {
            obj[key] = src[key];
          });
          return obj;
        },
        hasClass: function (el, className) {
          return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
        },
        addClass: function (el, className) {
          if (el.classList) {
            el.classList.add(className);
          } else if (!hasClass(el, className)) {
            el.className += ' ' + className;
          }
        },
        removeClass: function (el, className) {
          if (el.classList) {
            el.classList.remove(className);
          } else {
            el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
          }
        },
        once: function (selector, context) {
          return (context || document).querySelector(selector);
        },
        loadScript: function (url) {
          var script = document.createElement('script'),
            scripts = document.getElementsByTagName('script')[0];
          script.src = url;
          script.async = true;
          scripts.parentNode.insertBefore(script, scripts);
        }
      };

      if (utils.once('body', context)) {
        var lazysizes = settings.lazy.lazysizes || {};

        if (('loading' in HTMLImageElement.prototype) && settings.lazy.preferNative) {
          // Lazy-loading is natively supported and preferred.
          var element = context.querySelectorAll('[loading="lazy"]');
          element.forEach(function (el) {
            if (el.hasAttribute(lazysizes.srcAttr)) {
              el.src = el.getAttribute(lazysizes.srcAttr);
              el.removeAttribute(lazysizes.srcAttr);
            }
            if (el.hasAttribute(lazysizes.srcsetAttr)) {
              el.srcset = el.getAttribute(lazysizes.srcsetAttr);
              el.removeAttribute(lazysizes.srcsetAttr);
            }
            if (el.hasAttribute(lazysizes.sizesAttr)) {
              el.sizes = el.getAttribute(lazysizes.sizesAttr);
              el.removeAttribute(lazysizes.sizesAttr);
            }
            utils.removeClass(el, lazysizes.lazyClass);
            utils.addClass(el, lazysizes.loadedClass);

            // If parent element is a <picture> element, then there should be
            // <source> element(s) as well.
            var sources = el.parentNode.querySelectorAll('source');
            sources.forEach(function (source) {
              if (source.hasAttribute(lazysizes.srcsetAttr)) {
                source.srcset = source.getAttribute(lazysizes.srcsetAttr);
                source.removeAttribute(lazysizes.srcsetAttr);
              }
              if (source.hasAttribute(lazysizes.sizesAttr)) {
                source.sizes = source.getAttribute(lazysizes.sizesAttr);
                source.removeAttribute(lazysizes.sizesAttr);
              }
            });
          });
        } else {
          // 1. Lazysizes configuration.
          window.lazySizesConfig = window.lazySizesConfig || {};
          window.lazySizesConfig = utils.extend(window.lazySizesConfig, lazysizes);
          // 2. Load all selected lazysizes plugins.
          if (!Object.entries) {
            Object.entries = function (obj) {
              var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i);
              while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
              }
              return resArray;
            };
          }
          Object.entries(lazysizes.plugins).forEach(function (path) {
            utils.loadScript(settings.path.baseUrl + 'libraries/lazysizes/plugins/' + path[1] + '.min.js');
          });
          // 3. Load the lazysizes library.
          utils.loadScript(settings.path.baseUrl + 'libraries/lazysizes/lazysizes.min.js');
        }
      }
    }
  };

})(Drupal);

/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./form", "./version"], a) : a(jQuery)
}(function (a) {
  return a.ui.formResetMixin = {
    _formResetHandler: function () {
      var b = a(this);
      setTimeout(function () {
        var c = b.data("ui-form-reset-instances");
        a.each(c, function () {
          this.refresh()
        })
      })
    },
    _bindFormResetHandler: function () {
      if (this.form = this.element.form(), this.form.length) {
        var a = this.form.data("ui-form-reset-instances") || [];
        a.length || this.form.on("reset.ui-form-reset", this._formResetHandler), a.push(this), this.form.data("ui-form-reset-instances", a)
      }
    },
    _unbindFormResetHandler: function () {
      if (this.form.length) {
        var b = this.form.data("ui-form-reset-instances");
        b.splice(a.inArray(this, b), 1), b.length ? this.form.data("ui-form-reset-instances", b) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
      }
    }
  }
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../escape-selector", "../form-reset-mixin", "../labels", "../widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.checkboxradio", [a.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function () {
      var b, c, d = this,
        e = this._super() || {};
      return this._readType(), c = this.element.labels(), this.label = a(c[c.length - 1]), this.label.length || a.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        d.originalLabel += 3 === this.nodeType ? a(this).text() : this.outerHTML
      }), this.originalLabel && (e.label = this.originalLabel), b = this.element[0].disabled, null != b && (e.disabled = b), e
    },
    _create: function () {
      var a = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), a && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function () {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
        },
        blur: function () {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
        }
      })
    },
    _readType: function () {
      var b = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === b && /radio|checkbox/.test(this.type) || a.error("Can't create checkboxradio on element.nodeName=" + b + " and element.type=" + this.type)
    },
    _enhance: function () {
      this._updateIcon(this.element[0].checked)
    },
    widget: function () {
      return this.label
    },
    _getRadioGroup: function () {
      var b, c = this.element[0].name,
        d = "input[name='" + a.ui.escapeSelector(c) + "']";
      return c ? (b = this.form.length ? a(this.form[0].elements).filter(d) : a(d).filter(function () {
        return 0 === a(this).form().length
      }), b.not(this.element)) : a([])
    },
    _toggleClasses: function () {
      var b = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", b), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", b)._toggleClass(this.icon, null, "ui-icon-blank", !b), "radio" === this.type && this._getRadioGroup().each(function () {
        var b = a(this).checkboxradio("instance");
        b && b._removeClass(b.label, "ui-checkboxradio-checked", "ui-state-active")
      })
    },
    _destroy: function () {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
    },
    _setOption: function (a, b) {
      if ("label" !== a || b) return this._super(a, b), "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", b), void(this.element[0].disabled = b)) : void this.refresh()
    },
    _updateIcon: function (b) {
      var c = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = a("<span>"), this.iconSpace = a("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (c += b ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, b ? "ui-icon-blank" : "ui-icon-check")) : c += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", c), b || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
    },
    _updateLabel: function () {
      var a = this.label.contents().not(this.element[0]);
      this.icon && (a = a.not(this.icon[0])), this.iconSpace && (a = a.not(this.iconSpace[0])), a.remove(), this.label.append(this.options.label)
    },
    refresh: function () {
      var a = this.element[0].checked,
        b = this.element[0].disabled;
      this._updateIcon(a), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a), null !== this.options.label && this._updateLabel(), b !== this.options.disabled && this._setOptions({
        disabled: b
      })
    }
  }]), a.ui.checkboxradio
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../widget"], a) : a(jQuery)
}(function (a) {
  var b = /ui-corner-([a-z]){2,6}/g;
  return a.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function () {
      this._enhance()
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh()
    },
    _destroy: function () {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
    },
    _initWidgets: function () {
      var b = this,
        c = [];
      a.each(this.options.items, function (d, e) {
        var f, g = {};
        if (e) return "controlgroupLabel" === d ? (f = b.element.find(e), f.each(function () {
          var b = a(this);
          b.children(".ui-controlgroup-label-contents").length || b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
        }), b._addClass(f, null, "ui-widget ui-widget-content ui-state-default"), void(c = c.concat(f.get()))) : void(a.fn[d] && (g = b["_" + d + "Options"] ? b["_" + d + "Options"]("middle") : {
          classes: {}
        }, b.element.find(e).each(function () {
          var e = a(this),
            f = e[d]("instance"),
            h = a.widget.extend({}, g);
          if ("button" !== d || !e.parent(".ui-spinner").length) {
            f || (f = e[d]()[d]("instance")), f && (h.classes = b._resolveClassesValues(h.classes, f)), e[d](h);
            var i = e[d]("widget");
            a.data(i[0], "ui-controlgroup-data", f ? f : e[d]("instance")), c.push(i[0])
          }
        })))
      }), this.childWidgets = a(a.unique(c)), this._addClass(this.childWidgets, "ui-controlgroup-item")
    },
    _callChildMethod: function (b) {
      this.childWidgets.each(function () {
        var c = a(this),
          d = c.data("ui-controlgroup-data");
        d && d[b] && d[b]()
      })
    },
    _updateCornerClass: function (a, b) {
      var c = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
        d = this._buildSimpleOptions(b, "label").classes.label;
      this._removeClass(a, null, c), this._addClass(a, null, d)
    },
    _buildSimpleOptions: function (a, b) {
      var c = "vertical" === this.options.direction,
        d = {
          classes: {}
        };
      return d.classes[b] = {
        middle: "",
        first: "ui-corner-" + (c ? "top" : "left"),
        last: "ui-corner-" + (c ? "bottom" : "right"),
        only: "ui-corner-all"
      } [a], d
    },
    _spinnerOptions: function (a) {
      var b = this._buildSimpleOptions(a, "ui-spinner");
      return b.classes["ui-spinner-up"] = "", b.classes["ui-spinner-down"] = "", b
    },
    _buttonOptions: function (a) {
      return this._buildSimpleOptions(a, "ui-button")
    },
    _checkboxradioOptions: function (a) {
      return this._buildSimpleOptions(a, "ui-checkboxradio-label")
    },
    _selectmenuOptions: function (a) {
      var b = "vertical" === this.options.direction;
      return {
        width: !!b && "auto",
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (b ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (b ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": b ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (b ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        } [a]
      }
    },
    _resolveClassesValues: function (c, d) {
      var e = {};
      return a.each(c, function (f) {
        var g = d.options.classes[f] || "";
        g = a.trim(g.replace(b, "")), e[f] = (g + " " + c[f]).replace(/\s+/g, " ")
      }), e
    },
    _setOption: function (a, b) {
      return "direction" === a && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(a, b), "disabled" === a ? void this._callChildMethod(b ? "disable" : "enable") : void this.refresh()
    },
    refresh: function () {
      var b, c = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), b = this.childWidgets, this.options.onlyVisible && (b = b.filter(":visible")), b.length && (a.each(["first", "last"], function (a, d) {
        var e = b[d]().data("ui-controlgroup-data");
        if (e && c["_" + e.widgetName + "Options"]) {
          var f = c["_" + e.widgetName + "Options"](1 === b.length ? "only" : d);
          f.classes = c._resolveClassesValues(f.classes, e), e.element[e.widgetName](f)
        } else c._updateCornerClass(b[d](), d)
      }), this._callChildMethod("refresh"))
    }
  })
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./controlgroup", "./checkboxradio", "../keycode", "../widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function () {
      var a, b = this._super() || {};
      return this.isInput = this.element.is("input"), a = this.element[0].disabled, null != a && (b.disabled = a), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (b.label = this.originalLabel), b
    },
    _create: function () {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function (b) {
          b.keyCode === a.ui.keyCode.SPACE && (b.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
        }
      })
    },
    _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
    },
    _updateTooltip: function () {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
    },
    _updateIcon: function (b, c) {
      var d = "iconPosition" !== b,
        e = d ? this.options.iconPosition : c,
        f = "top" === e || "bottom" === e;
      this.icon ? d && this._removeClass(this.icon, null, this.options.icon) : (this.icon = a("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), d && this._addClass(this.icon, null, c), this._attachIcon(e), f ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = a("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(e))
    },
    _destroy: function () {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
    },
    _attachIconSpace: function (a) {
      this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace)
    },
    _attachIcon: function (a) {
      this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon)
    },
    _setOptions: function (a) {
      var b = void 0 === a.showLabel ? this.options.showLabel : a.showLabel,
        c = void 0 === a.icon ? this.options.icon : a.icon;
      b || c || (a.showLabel = !0), this._super(a)
    },
    _setOption: function (a, b) {
      "icon" === a && (b ? this._updateIcon(a, b) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === a && this._updateIcon(a, b), "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !b), this._updateTooltip()), "label" === a && (this.isInput ? this.element.val(b) : (this.element.html(b), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(a, b), "disabled" === a && (this._toggleClass(null, "ui-state-disabled", b), this.element[0].disabled = b, b && this.element.blur())
    },
    refresh: function () {
      var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      a !== this.options.disabled && this._setOptions({
        disabled: a
      }), this._updateTooltip()
    }
  }), a.uiBackCompat !== !1 && (a.widget("ui.button", a.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function () {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
    },
    _setOption: function (a, b) {
      return "text" === a ? void this._super("showLabel", b) : ("showLabel" === a && (this.options.text = b), "icon" === a && (this.options.icons.primary = b), "icons" === a && (b.primary ? (this._super("icon", b.primary), this._super("iconPosition", "beginning")) : b.secondary && (this._super("icon", b.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
    }
  }), a.fn.button = function (b) {
    return function () {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? b.apply(this, arguments) : (a.ui.checkboxradio || a.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
        icon: !1
      }) : this.checkboxradio.apply(this, arguments))
    }
  }(a.fn.button), a.fn.buttonset = function () {
    return a.ui.controlgroup || a.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments))
  }), a.ui.button
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./version"], a) : a(jQuery)
}(function (a) {
  return a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], a) : a(jQuery)
}(function (a) {
  var b = !1;
  return a(document).on("mouseup", function () {
    b = !1
  }), a.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var b = this;
      this.element.on("mousedown." + this.widgetName, function (a) {
        return b._mouseDown(a)
      }).on("click." + this.widgetName, function (c) {
        if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
      }), this.started = !1
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function (c) {
      if (!b) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
        var d = this,
          e = 1 === c.which,
          f = !("string" != typeof this.options.cancel || !c.target.nodeName) && a(c.target).closest(this.options.cancel).length;
        return !(e && !f && this._mouseCapture(c)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          d.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
          return d._mouseMove(a)
        }, this._mouseUpDelegate = function (a) {
          return d._mouseUp(a)
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0))
      }
    },
    _mouseMove: function (b) {
      if (this._mouseMoved) {
        if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
        if (!b.which)
          if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(b)
      }
      return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
    },
    _mouseUp: function (c) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, b = !1, c.preventDefault()
    },
    _mouseDistanceMet: function (a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0
    }
  })
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../plugin", "../safe-active-element", "../safe-blur", "../scroll-parent", "../version", "../widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.draggable", a.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function (a, b) {
      this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function () {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
    },
    _mouseCapture: function (b) {
      var c = this.options;
      return !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blurActiveElement(b), this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0))
    },
    _blockFrames: function (b) {
      this.iframeBlocks = this.document.find(b).map(function () {
        var b = a(this);
        return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
      })
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function (b) {
      var c = a.ui.safeActiveElement(this.document[0]),
        d = a(b.target);
      d.closest(c).length || a.ui.safeBlur(c)
    },
    _mouseStart: function (b) {
      var c = this.options;
      return this.helper = this._createHelper(b), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === a(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
    },
    _refreshOffsets: function (a) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: a.pageX - this.offset.left,
        top: a.pageY - this.offset.top
      }
    },
    _mouseDrag: function (b, c) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
        var d = this._uiHash();
        if (this._trigger("drag", b, d) === !1) return this._mouseUp(new a.Event("mouseup", b)), !1;
        this.position = d.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
    },
    _mouseStop: function (b) {
      var c = this,
        d = !1;
      return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        c._trigger("stop", b) !== !1 && c._clear()
      }) : this._trigger("stop", b) !== !1 && this._clear(), !1
    },
    _mouseUp: function (b) {
      return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.trigger("focus"), a.ui.mouse.prototype._mouseUp.call(this, b)
    },
    cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new a.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this
    },
    _getHandle: function (b) {
      return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
    },
    _setHandleClassName: function () {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
    },
    _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle")
    },
    _createHelper: function (b) {
      var c = this.options,
        d = a.isFunction(c.helper),
        e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
      return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function (b) {
      "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
        left: +b[0],
        top: +b[1] || 0
      }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },
    _isRootNode: function (a) {
      return /(html|body)/i.test(a.tagName) || a === this.document[0]
    },
    _getParentOffset: function () {
      var b = this.offsetParent.offset(),
        c = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
        top: 0,
        left: 0
      }), {
        top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var a = this.element.position(),
        b = this._isRootNode(this.scrollParent[0]);
      return {
        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function () {
      var b, c, d, e = this.options,
        f = this.document[0];
      return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
    },
    _convertPositionTo: function (a, b) {
      b || (b = this.position);
      var c = "absolute" === a ? 1 : -1,
        d = this._isRootNode(this.scrollParent[0]);
      return {
        top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
        left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
      }
    },
    _generatePosition: function (a, b) {
      var c, d, e, f, g = this.options,
        h = this._isRootNode(this.scrollParent[0]),
        i = a.pageX,
        j = a.pageY;
      return h && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
        top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
        left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _trigger: function (b, c, d) {
      return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), a.ui.plugin.add("draggable", "connectToSortable", {
    start: function (b, c, d) {
      var e = a.extend({}, c, {
        item: d.element
      });
      d.sortables = [], a(d.options.connectToSortable).each(function () {
        var c = a(this).sortable("instance");
        c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
      })
    },
    stop: function (b, c, d) {
      var e = a.extend({}, c, {
        item: d.element
      });
      d.cancelHelperRemoval = !1, a.each(d.sortables, function () {
        var a = this;
        a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
          position: a.placeholder.css("position"),
          top: a.placeholder.css("top"),
          left: a.placeholder.css("left")
        }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
      })
    },
    drag: function (b, c, d) {
      a.each(d.sortables, function () {
        var e = !1,
          f = this;
        f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function () {
          return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
        })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function () {
          return c.helper[0]
        }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function () {
          this.refreshPositions()
        }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function () {
          this.refreshPositions()
        }))
      })
    }
  }), a.ui.plugin.add("draggable", "cursor", {
    start: function (b, c, d) {
      var e = a("body"),
        f = d.options;
      e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
    },
    stop: function (b, c, d) {
      var e = d.options;
      e._cursor && a("body").css("cursor", e._cursor)
    }
  }), a.ui.plugin.add("draggable", "opacity", {
    start: function (b, c, d) {
      var e = a(c.helper),
        f = d.options;
      e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
    },
    stop: function (b, c, d) {
      var e = d.options;
      e._opacity && a(c.helper).css("opacity", e._opacity)
    }
  }), a.ui.plugin.add("draggable", "scroll", {
    start: function (a, b, c) {
      c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
    },
    drag: function (b, c, d) {
      var e = d.options,
        f = !1,
        g = d.scrollParentNotHidden[0],
        h = d.document[0];
      g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
    }
  }), a.ui.plugin.add("draggable", "snap", {
    start: function (b, c, d) {
      var e = d.options;
      d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function () {
        var b = a(this),
          c = b.offset();
        this !== d.element[0] && d.snapElements.push({
          item: this,
          width: b.outerWidth(),
          height: b.outerHeight(),
          top: c.top,
          left: c.left
        })
      })
    },
    drag: function (b, c, d) {
      var e, f, g, h, i, j, k, l, m, n, o = d.options,
        p = o.snapTolerance,
        q = c.offset.left,
        r = q + d.helperProportions.width,
        s = c.offset.top,
        t = s + d.helperProportions.height;
      for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, r < i - p || q > j + p || t < k - p || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
        snapItem: d.snapElements[m].item
      })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = Math.abs(k - t) <= p, f = Math.abs(l - s) <= p, g = Math.abs(i - r) <= p, h = Math.abs(j - q) <= p, e && (c.position.top = d._convertPositionTo("relative", {
        top: k - d.helperProportions.height,
        left: 0
      }).top), f && (c.position.top = d._convertPositionTo("relative", {
        top: l,
        left: 0
      }).top), g && (c.position.left = d._convertPositionTo("relative", {
        top: 0,
        left: i - d.helperProportions.width
      }).left), h && (c.position.left = d._convertPositionTo("relative", {
        top: 0,
        left: j
      }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = Math.abs(k - s) <= p, f = Math.abs(l - t) <= p, g = Math.abs(i - q) <= p, h = Math.abs(j - r) <= p, e && (c.position.top = d._convertPositionTo("relative", {
        top: k,
        left: 0
      }).top), f && (c.position.top = d._convertPositionTo("relative", {
        top: l - d.helperProportions.height,
        left: 0
      }).top), g && (c.position.left = d._convertPositionTo("relative", {
        top: 0,
        left: i
      }).left), h && (c.position.left = d._convertPositionTo("relative", {
        top: 0,
        left: j - d.helperProportions.width
      }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
        snapItem: d.snapElements[m].item
      })), d.snapElements[m].snapping = e || f || g || h || n)
    }
  }), a.ui.plugin.add("draggable", "stack", {
    start: function (b, c, d) {
      var e, f = d.options,
        g = a.makeArray(a(f.stack)).sort(function (b, c) {
          return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
        });
      g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function (b) {
        a(this).css("zIndex", e + b)
      }), this.css("zIndex", e + g.length))
    }
  }), a.ui.plugin.add("draggable", "zIndex", {
    start: function (b, c, d) {
      var e = a(c.helper),
        f = d.options;
      e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
    },
    stop: function (b, c, d) {
      var e = d.options;
      e._zIndex && a(c.helper).css("zIndex", e._zIndex)
    }
  }), a.ui.draggable
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../disable-selection", "../plugin", "../version", "../widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.resizable", a.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function (a) {
      return parseFloat(a) || 0
    },
    _isNumber: function (a) {
      return !isNaN(parseFloat(a))
    },
    _hasScroll: function (b, c) {
      if ("hidden" === a(b).css("overflow")) return !1;
      var d = c && "left" === c ? "scrollLeft" : "scrollTop",
        e = !1;
      return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
    },
    _create: function () {
      var b, c = this.options,
        d = this;
      this._addClass("ui-resizable"), a.extend(this, {
        _aspectRatio: !!c.aspectRatio,
        aspectRatio: c.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, b = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(b), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(b), this._proportionallyResize()), this._setupHandles(), c.autoHide && a(this.element).on("mouseenter", function () {
        c.disabled || (d._removeClass("ui-resizable-autohide"), d._handles.show())
      }).on("mouseleave", function () {
        c.disabled || d.resizing || (d._addClass("ui-resizable-autohide"), d._handles.hide())
      }), this._mouseInit()
    },
    _destroy: function () {
      this._mouseDestroy();
      var b, c = function (b) {
        a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
        position: b.css("position"),
        width: b.outerWidth(),
        height: b.outerHeight(),
        top: b.css("top"),
        left: b.css("left")
      }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
    },
    _setOption: function (a, b) {
      switch (this._super(a, b), a) {
        case "handles":
          this._removeHandles(), this._setupHandles()
      }
    },
    _setupHandles: function () {
      var b, c, d, e, f, g = this.options,
        h = this;
      if (this.handles = g.handles || (a(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = a(), this.handles.constructor === String)
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), d = this.handles.split(","), this.handles = {}, c = 0; c < d.length; c++) b = a.trim(d[c]), e = "ui-resizable-" + b, f = a("<div>"), this._addClass(f, "ui-resizable-handle " + e), f.css({
          zIndex: g.zIndex
        }), this.handles[b] = ".ui-resizable-" + b, this.element.append(f);
      this._renderAxis = function (b) {
        var c, d, e, f;
        b = b || this.element;
        for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {
          mousedown: h._mouseDown
        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c])
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = f && f[1] ? f[1] : "se")
      }), g.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
    },
    _removeHandles: function () {
      this._handles.remove()
    },
    _mouseCapture: function (b) {
      var c, d, e = !1;
      for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
      return !this.options.disabled && e
    },
    _mouseStart: function (b) {
      var c, d, e, f = this.options,
        g = this.element;
      return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: c,
        top: d
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: g.width(),
        height: g.height()
      }, this.originalSize = this._helper ? {
        width: g.outerWidth(),
        height: g.outerHeight()
      } : {
        width: g.width(),
        height: g.height()
      }, this.sizeDiff = {
        width: g.outerWidth() - g.width(),
        height: g.outerHeight() - g.height()
      }, this.originalPosition = {
        left: c,
        top: d
      }, this.originalMousePosition = {
        left: b.pageX,
        top: b.pageY
      }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), this._addClass("ui-resizable-resizing"), this._propagate("start", b), !0
    },
    _mouseDrag: function (b) {
      var c, d, e = this.originalMousePosition,
        f = this.axis,
        g = b.pageX - e.left || 0,
        h = b.pageY - e.top || 0,
        i = this._change[f];
      return this._updatePrevProperties(), !!i && (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1)
    },
    _mouseStop: function (b) {
      this.resizing = !1;
      var c, d, e, f, g, h, i, j = this.options,
        k = this;
      return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
        width: k.helper.width() - f,
        height: k.helper.height() - e
      }, h = parseFloat(k.element.css("left")) + (k.position.left - k.originalPosition.left) || null, i = parseFloat(k.element.css("top")) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
        top: i,
        left: h
      })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
    },
    _updatePrevProperties: function () {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      }
    },
    _applyChanges: function () {
      var a = {};
      return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
    },
    _updateVirtualBoundaries: function (a) {
      var b, c, d, e, f, g = this.options;
      f = {
        minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
        maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
        minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
        maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
      }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), this._vBoundaries = f
    },
    _updateCache: function (a) {
      this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
    },
    _updateRatio: function (a) {
      var b = this.position,
        c = this.size,
        d = this.axis;
      return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
    },
    _respectSize: function (a) {
      var b = this._vBoundaries,
        c = this.axis,
        d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
        e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
        f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
        g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
        h = this.originalPosition.left + this.originalSize.width,
        i = this.originalPosition.top + this.originalSize.height,
        j = /sw|nw|w/.test(c),
        k = /nw|ne|n/.test(c);
      return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
    },
    _getPaddingPlusBorderDimensions: function (a) {
      for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; b < 4; b++) c[b] = parseFloat(d[b]) || 0, c[b] += parseFloat(e[b]) || 0;
      return {
        height: c[0] + c[2],
        width: c[1] + c[3]
      }
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length)
        for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
          height: c.height() - this.outerDimensions.height || 0,
          width: c.width() - this.outerDimensions.width || 0
        })
    },
    _renderProxy: function () {
      var b = this.element,
        c = this.options;
      this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++c.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function (a, b) {
        return {
          width: this.originalSize.width + b
        }
      },
      w: function (a, b) {
        var c = this.originalSize,
          d = this.originalPosition;
        return {
          left: d.left + b,
          width: c.width - b
        }
      },
      n: function (a, b, c) {
        var d = this.originalSize,
          e = this.originalPosition;
        return {
          top: e.top + c,
          height: d.height - c
        }
      },
      s: function (a, b, c) {
        return {
          height: this.originalSize.height + c
        }
      },
      se: function (b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
      },
      sw: function (b, c, d) {
        return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
      },
      ne: function (b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
      },
      nw: function (b, c, d) {
        return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
      }
    },
    _propagate: function (b, c) {
      a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), a.ui.plugin.add("resizable", "animate", {
    stop: function (b) {
      var c = a(this).resizable("instance"),
        d = c.options,
        e = c._proportionallyResizeElements,
        f = e.length && /textarea/i.test(e[0].nodeName),
        g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
        h = f ? 0 : c.sizeDiff.width,
        i = {
          width: c.size.width - h,
          height: c.size.height - g
        },
        j = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
        k = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null;
      c.element.animate(a.extend(i, k && j ? {
        top: k,
        left: j
      } : {}), {
        duration: d.animateDuration,
        easing: d.animateEasing,
        step: function () {
          var d = {
            width: parseFloat(c.element.css("width")),
            height: parseFloat(c.element.css("height")),
            top: parseFloat(c.element.css("top")),
            left: parseFloat(c.element.css("left"))
          };
          e && e.length && a(e[0]).css({
            width: d.width,
            height: d.height
          }), c._updateCache(d), c._propagate("resize", b)
        }
      })
    }
  }), a.ui.plugin.add("resizable", "containment", {
    start: function () {
      var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
        j = i.options,
        k = i.element,
        l = j.containment,
        m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
      m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
        left: 0,
        top: 0
      }, i.containerPosition = {
        left: 0,
        top: 0
      }, i.parentData = {
        element: a(document),
        left: 0,
        top: 0,
        width: a(document).width(),
        height: a(document).height() || document.body.parentNode.scrollHeight
      }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, d) {
        c[a] = i._num(b.css("padding" + d))
      }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
        height: b.innerHeight() - c[3],
        width: b.innerWidth() - c[1]
      }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
        element: m,
        left: d.left,
        top: d.top,
        width: g,
        height: h
      }))
    },
    resize: function (b) {
      var c, d, e, f, g = a(this).resizable("instance"),
        h = g.options,
        i = g.containerOffset,
        j = g.position,
        k = g._aspectRatio || b.shiftKey,
        l = {
          top: 0,
          left: 0
        },
        m = g.containerElement,
        n = !0;
      m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
    },
    stop: function () {
      var b = a(this).resizable("instance"),
        c = b.options,
        d = b.containerOffset,
        e = b.containerPosition,
        f = b.containerElement,
        g = a(b.helper),
        h = g.offset(),
        i = g.outerWidth() - b.sizeDiff.width,
        j = g.outerHeight() - b.sizeDiff.height;
      b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
        left: h.left - e.left - d.left,
        width: i,
        height: j
      }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
        left: h.left - e.left - d.left,
        width: i,
        height: j
      })
    }
  }), a.ui.plugin.add("resizable", "alsoResize", {
    start: function () {
      var b = a(this).resizable("instance"),
        c = b.options;
      a(c.alsoResize).each(function () {
        var b = a(this);
        b.data("ui-resizable-alsoresize", {
          width: parseFloat(b.width()),
          height: parseFloat(b.height()),
          left: parseFloat(b.css("left")),
          top: parseFloat(b.css("top"))
        })
      })
    },
    resize: function (b, c) {
      var d = a(this).resizable("instance"),
        e = d.options,
        f = d.originalSize,
        g = d.originalPosition,
        h = {
          height: d.size.height - f.height || 0,
          width: d.size.width - f.width || 0,
          top: d.position.top - g.top || 0,
          left: d.position.left - g.left || 0
        };
      a(e.alsoResize).each(function () {
        var b = a(this),
          d = a(this).data("ui-resizable-alsoresize"),
          e = {},
          f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        a.each(f, function (a, b) {
          var c = (d[b] || 0) + (h[b] || 0);
          c && c >= 0 && (e[b] = c || null)
        }), b.css(e)
      })
    },
    stop: function () {
      a(this).removeData("ui-resizable-alsoresize")
    }
  }), a.ui.plugin.add("resizable", "ghost", {
    start: function () {
      var b = a(this).resizable("instance"),
        c = b.size;
      b.ghost = b.originalElement.clone(), b.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: c.height,
        width: c.width,
        margin: 0,
        left: 0,
        top: 0
      }), b._addClass(b.ghost, "ui-resizable-ghost"), a.uiBackCompat !== !1 && "string" == typeof b.options.ghost && b.ghost.addClass(this.options.ghost), b.ghost.appendTo(b.helper)
    },
    resize: function () {
      var b = a(this).resizable("instance");
      b.ghost && b.ghost.css({
        position: "relative",
        height: b.size.height,
        width: b.size.width
      })
    },
    stop: function () {
      var b = a(this).resizable("instance");
      b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
    }
  }), a.ui.plugin.add("resizable", "grid", {
    resize: function () {
      var b, c = a(this).resizable("instance"),
        d = c.options,
        e = c.size,
        f = c.originalSize,
        g = c.originalPosition,
        h = c.axis,
        i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
        j = i[0] || 1,
        k = i[1] || 1,
        l = Math.round((e.width - f.width) / j) * j,
        m = Math.round((e.height - f.height) / k) * k,
        n = f.width + l,
        o = f.height + m,
        p = d.maxWidth && d.maxWidth < n,
        q = d.maxHeight && d.maxHeight < o,
        r = d.minWidth && d.minWidth > n,
        s = d.minHeight && d.minHeight > o;
      d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((o - k <= 0 || n - j <= 0) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n))
    }
  }), a.ui.resizable
});
/*! jQuery UI - v1.12.1 - 2017-03-31
 * http://jqueryui.com
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "./button", "./draggable", "./mouse", "./resizable", "../focusable", "../keycode", "../position", "../safe-active-element", "../safe-blur", "../tabbable", "../unique-id", "../version", "../widget"], a) : a(jQuery)
}(function (a) {
  return a.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (b) {
          var c = a(this).css(b).offset().top;
          c < 0 && a(this).css("top", b.top - c)
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function () {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
    },
    _init: function () {
      this.options.autoOpen && this.open()
    },
    _appendTo: function () {
      var b = this.options.appendTo;
      return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
    },
    _destroy: function () {
      var a, b = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
    },
    widget: function () {
      return this.uiDialog
    },
    disable: a.noop,
    enable: a.noop,
    close: function (b) {
      var c = this;
      this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        c._trigger("close", b)
      }))
    },
    isOpen: function () {
      return this._isOpen
    },
    moveToTop: function () {
      this._moveToTop()
    },
    _moveToTop: function (b, c) {
      var d = !1,
        e = this.uiDialog.siblings(".ui-front:visible").map(function () {
          return +a(this).css("z-index")
        }).get(),
        f = Math.max.apply(null, e);
      return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0), d && !c && this._trigger("focus", b), d
    },
    open: function () {
      var b = this;
      return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(a.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        b._focusTabbable(), b._trigger("focus")
      }), this._makeFocusTarget(), void this._trigger("open"))
    },
    _focusTabbable: function () {
      var a = this._focusedElement;
      a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).trigger("focus")
    },
    _keepFocus: function (b) {
      function c() {
        var b = a.ui.safeActiveElement(this.document[0]),
          c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
        c || this._focusTabbable()
      }
      b.preventDefault(), c.call(this), this._delay(c)
    },
    _createWrapper: function () {
      this.uiDialog = a("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function (b) {
          if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
          if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
            var c = this.uiDialog.find(":tabbable"),
              d = c.filter(":first"),
              e = c.filter(":last");
            b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function () {
              e.trigger("focus")
            }), b.preventDefault()) : (this._delay(function () {
              d.trigger("focus")
            }), b.preventDefault())
          }
        },
        mousedown: function (a) {
          this._moveToTop(a) && this._focusTabbable()
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      })
    },
    _createTitlebar: function () {
      var b;
      this.uiDialogTitlebar = a("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function (b) {
          a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
        }
      }), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
        label: a("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function (a) {
          a.preventDefault(), this.close(a)
        }
      }), b = a("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(b, "ui-dialog-title"), this._title(b), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": b.attr("id")
      })
    },
    _title: function (a) {
      this.options.title ? a.text(this.options.title) : a.html("&#160;")
    },
    _createButtonPane: function () {
      this.uiDialogButtonPane = a("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
    },
    _createButtons: function () {
      var b = this,
        c = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (a.each(c, function (c, d) {
        var e, f;
        d = a.isFunction(d) ? {
          click: d,
          text: c
        } : d, d = a.extend({
          type: "button"
        }, d), e = d.click, f = {
          icon: d.icon,
          iconPosition: d.iconPosition,
          showLabel: d.showLabel,
          icons: d.icons,
          text: d.text
        }, delete d.click, delete d.icon, delete d.iconPosition, delete d.showLabel, delete d.icons, "boolean" == typeof d.text && delete d.text, a("<button></button>", d).button(f).appendTo(b.uiButtonSet).on("click", function () {
          e.apply(b.element[0], arguments)
        })
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
    },
    _makeDraggable: function () {
      function b(a) {
        return {
          position: a.position,
          offset: a.offset
        }
      }
      var c = this,
        d = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (d, e) {
          c._addClass(a(this), "ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
        },
        drag: function (a, d) {
          c._trigger("drag", a, b(d))
        },
        stop: function (e, f) {
          var g = f.offset.left - c.document.scrollLeft(),
            h = f.offset.top - c.document.scrollTop();
          d.position = {
            my: "left top",
            at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
            of: c.window
          }, c._removeClass(a(this), "ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
        }
      })
    },
    _makeResizable: function () {
      function b(a) {
        return {
          originalPosition: a.originalPosition,
          originalSize: a.originalSize,
          position: a.position,
          size: a.size
        }
      }
      var c = this,
        d = this.options,
        e = d.resizable,
        f = this.uiDialog.css("position"),
        g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: d.maxWidth,
        maxHeight: d.maxHeight,
        minWidth: d.minWidth,
        minHeight: this._minHeight(),
        handles: g,
        start: function (d, e) {
          c._addClass(a(this), "ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
        },
        resize: function (a, d) {
          c._trigger("resize", a, b(d))
        },
        stop: function (e, f) {
          var g = c.uiDialog.offset(),
            h = g.left - c.document.scrollLeft(),
            i = g.top - c.document.scrollTop();
          d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
            my: "left top",
            at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
            of: c.window
          }, c._removeClass(a(this), "ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
        }
      }).css("position", f)
    },
    _trackFocus: function () {
      this._on(this.widget(), {
        focusin: function (b) {
          this._makeFocusTarget(), this._focusedElement = a(b.target)
        }
      })
    },
    _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this)
    },
    _untrackInstance: function () {
      var b = this._trackingInstances(),
        c = a.inArray(this, b);
      c !== -1 && b.splice(c, 1)
    },
    _trackingInstances: function () {
      var a = this.document.data("ui-dialog-instances");
      return a || (a = [], this.document.data("ui-dialog-instances", a)), a
    },
    _minHeight: function () {
      var a = this.options;
      return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
    },
    _position: function () {
      var a = this.uiDialog.is(":visible");
      a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
    },
    _setOptions: function (b) {
      var c = this,
        d = !1,
        e = {};
      a.each(b, function (a, b) {
        c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b)
      }), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
    },
    _setOption: function (b, c) {
      var d, e, f = this.uiDialog;
      "disabled" !== b && (this._super(b, c), "appendTo" === b && this.uiDialog.appendTo(this._appendTo()), "buttons" === b && this._createButtons(), "closeText" === b && this.uiDialogTitlebarClose.button({
        label: a("<a>").text("" + this.options.closeText).html()
      }), "draggable" === b && (d = f.is(":data(ui-draggable)"), d && !c && f.draggable("destroy"), !d && c && this._makeDraggable()), "position" === b && this._position(), "resizable" === b && (e = f.is(":data(ui-resizable)"), e && !c && f.resizable("destroy"), e && "string" == typeof c && f.resizable("option", "handles", c), e || c === !1 || this._makeResizable()), "title" === b && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
    },
    _size: function () {
      var a, b, c, d = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
        height: "auto",
        width: d.width
      }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
        minHeight: b,
        maxHeight: c,
        height: "auto"
      }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var b = a(this);
        return a("<div>").css({
          position: "absolute",
          width: b.outerWidth(),
          height: b.outerHeight()
        }).appendTo(b.parent()).offset(b.offset())[0]
      })
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _allowInteraction: function (b) {
      return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length
    },
    _createOverlay: function () {
      if (this.options.modal) {
        var b = !0;
        this._delay(function () {
          b = !1
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function (a) {
            b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable())
          }
        }), this.overlay = a("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
      }
    },
    _destroyOverlay: function () {
      if (this.options.modal && this.overlay) {
        var a = this.document.data("ui-dialog-overlays") - 1;
        a ? this.document.data("ui-dialog-overlays", a) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
      }
    }
  }), a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function () {
      this._super(), this.uiDialog.addClass(this.options.dialogClass)
    },
    _setOption: function (a, b) {
      "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(b), this._superApply(arguments)
    }
  }), a.ui.dialog
});
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({
        modal: false
      });
    };
    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };
    dialog.close = closeDialog;

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({
          display: 'none'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"></div>').appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);

! function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function (t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 1)
}([function (e, t, n) {
  "use strict";
  n.r(t),
    function (e) {
      for (var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, o = 0; o < i.length; o += 1)
        if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
          r = 1;
          break
        } var s = n && window.Promise ? function (e) {
        var t = !1;
        return function () {
          t || (t = !0, window.Promise.resolve().then((function () {
            t = !1, e()
          })))
        }
      } : function (e) {
        var t = !1;
        return function () {
          t || (t = !0, setTimeout((function () {
            t = !1, e()
          }), r))
        }
      };

      function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
      }

      function l(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
      }

      function c(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
      }

      function u(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body
        }
        var t = l(e),
          n = t.overflow,
          i = t.overflowX,
          r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(c(e))
      }
      var f = n && !(!window.MSInputMethodContext || !document.documentMode),
        d = n && /MSIE 10/.test(navigator.userAgent);

      function h(e) {
        return 11 === e ? f : 10 === e ? d : f || d
      }

      function p(e) {
        if (!e) return document.documentElement;
        for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
      }

      function g(e) {
        return null !== e.parentNode ? g(e.parentNode) : e
      }

      function m(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? e : t,
          r = n ? t : e,
          o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && p(s.firstElementChild) !== s ? p(l) : l;
        var c = g(e);
        return c.host ? m(c.host, t) : m(e, g(t).host)
      }

      function v(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
          n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
          var i = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
      }

      function y(e, t) {
        var n = "x" === t ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
      }

      function b(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
      }

      function _(e) {
        var t = e.body,
          n = e.documentElement,
          i = h(10) && getComputedStyle(n);
        return {
          height: b("Height", t, n, i),
          width: b("Width", t, n, i)
        }
      }
      var w = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        E = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
          }
        }(),
        T = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        },
        C = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        };

      function x(e) {
        return C({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
        })
      }

      function S(e) {
        var t = {};
        try {
          if (h(10)) {
            t = e.getBoundingClientRect();
            var n = v(e, "top"),
              i = v(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
          } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
          },
          o = "HTML" === e.nodeName ? _(e.ownerDocument) : {},
          s = o.width || e.clientWidth || r.right - r.left,
          a = o.height || e.clientHeight || r.bottom - r.top,
          c = e.offsetWidth - s,
          u = e.offsetHeight - a;
        if (c || u) {
          var f = l(e);
          c -= y(f, "x"), u -= y(f, "y"), r.width -= c, r.height -= u
        }
        return x(r)
      }

      function D(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = h(10),
          r = "HTML" === t.nodeName,
          o = S(e),
          s = S(t),
          a = u(e),
          c = l(t),
          f = parseFloat(c.borderTopWidth, 10),
          d = parseFloat(c.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var p = x({
          top: o.top - s.top - f,
          left: o.left - s.left - d,
          width: o.width,
          height: o.height
        });
        if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
          var g = parseFloat(c.marginTop, 10),
            m = parseFloat(c.marginLeft, 10);
          p.top -= f - g, p.bottom -= f - g, p.left -= d - m, p.right -= d - m, p.marginTop = g, p.marginLeft = m
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = v(t, "top"),
            r = v(t, "left"),
            o = n ? -1 : 1;
          return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(p, t)), p
      }

      function A(e) {
        if (!e || !e.parentElement || h()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
        return t || document.documentElement
      }

      function N(e, t, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = {
            top: 0,
            left: 0
          },
          s = r ? A(e) : m(e, t);
        if ("viewport" === i) o = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = D(e, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : v(n),
            a = t ? 0 : v(n, "left");
          return x({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: r,
            height: o
          })
        }(s, r);
        else {
          var a = void 0;
          "scrollParent" === i ? "BODY" === (a = u(c(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
          var f = D(a, s, r);
          if ("HTML" !== a.nodeName || function e(t) {
              var n = t.nodeName;
              if ("BODY" === n || "HTML" === n) return !1;
              if ("fixed" === l(t, "position")) return !0;
              var i = c(t);
              return !!i && e(i)
            }(s)) o = f;
          else {
            var d = _(e.ownerDocument),
              h = d.height,
              p = d.width;
            o.top += f.top - f.marginTop, o.bottom = h + f.top, o.left += f.left - f.marginLeft, o.right = p + f.left
          }
        }
        var g = "number" == typeof (n = n || 0);
        return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
      }

      function I(e, t, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = N(n, i, o, r),
          a = {
            top: {
              width: s.width,
              height: t.top - s.top
            },
            right: {
              width: s.right - t.right,
              height: s.height
            },
            bottom: {
              width: s.width,
              height: s.bottom - t.bottom
            },
            left: {
              width: t.left - s.left,
              height: s.height
            }
          },
          l = Object.keys(a).map((function (e) {
            return C({
              key: e
            }, a[e], {
              area: (t = a[e], t.width * t.height)
            });
            var t
          })).sort((function (e, t) {
            return t.area - e.area
          })),
          c = l.filter((function (e) {
            var t = e.width,
              i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
          })),
          u = c.length > 0 ? c[0].key : l[0].key,
          f = e.split("-")[1];
        return u + (f ? "-" + f : "")
      }

      function k(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return D(n, i ? A(t) : m(t, n), i)
      }

      function O(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
          width: e.offsetWidth + i,
          height: e.offsetHeight + n
        }
      }

      function L(e) {
        var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function (e) {
          return t[e]
        }))
      }

      function j(e, t, n) {
        n = n.split("-")[0];
        var i = O(e),
          r = {
            width: i.width,
            height: i.height
          },
          o = -1 !== ["right", "left"].indexOf(n),
          s = o ? "top" : "left",
          a = o ? "left" : "top",
          l = o ? "height" : "width",
          c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[L(a)], r
      }

      function P(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
      }

      function H(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex((function (e) {
            return e[t] === n
          }));
          var i = P(e, (function (e) {
            return e[t] === n
          }));
          return e.indexOf(i)
        }(e, "name", n))).forEach((function (e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = e.function || e.fn;
          e.enabled && a(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e))
        })), t
      }

      function M() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          e.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = j(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
      }

      function R(e, t) {
        return e.some((function (e) {
          var n = e.name;
          return e.enabled && n === t
        }))
      }

      function q(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
          var r = t[i],
            o = r ? "" + r + n : e;
          if (void 0 !== document.body.style[o]) return o
        }
        return null
      }

      function W() {
        return this.state.isDestroyed = !0, R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
      }

      function F(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
      }

      function B(e, t, n, i) {
        n.updateBound = i, F(e).addEventListener("resize", n.updateBound, {
          passive: !0
        });
        var r = u(e);
        return function e(t, n, i, r) {
          var o = "BODY" === t.nodeName,
            s = o ? t.ownerDocument.defaultView : t;
          s.addEventListener(n, i, {
            passive: !0
          }), o || e(u(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
      }

      function U() {
        this.state.eventsEnabled || (this.state = B(this.reference, this.options, this.state, this.scheduleUpdate))
      }

      function V() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
          e.removeEventListener("scroll", t.updateBound)
        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
      }

      function K(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
      }

      function z(e, t) {
        Object.keys(t).forEach((function (n) {
          var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (i = "px"), e.style[n] = t[n] + i
        }))
      }
      var Q = n && /Firefox/i.test(navigator.userAgent);

      function $(e, t, n) {
        var i = P(e, (function (e) {
            return e.name === t
          })),
          r = !!i && e.some((function (e) {
            return e.name === n && e.enabled && e.order < i.order
          }));
        if (!r) {
          var o = "`" + t + "`",
            s = "`" + n + "`";
          console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
      }
      var G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Y = G.slice(3);

      function X(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Y.indexOf(e),
          i = Y.slice(n + 1).concat(Y.slice(0, n));
        return t ? i.reverse() : i
      }
      var J = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
      };

      function Z(e, t, n, i) {
        var r = [0, 0],
          o = -1 !== ["right", "left"].indexOf(i),
          s = e.split(/(\+|\-)/).map((function (e) {
            return e.trim()
          })),
          a = s.indexOf(P(s, (function (e) {
            return -1 !== e.search(/,|\s/)
          })));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map((function (e, i) {
          var r = (1 === i ? !o : o) ? "height" : "width",
            s = !1;
          return e.reduce((function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
          }), []).map((function (e) {
            return function (e, t, n, i) {
              var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
              if (!o) return e;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i
                }
                return x(a)[t] / 100 * o
              }
              if ("vh" === s || "vw" === s) {
                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
              }
              return o
            }(e, r, t, n)
          }))
        }))).forEach((function (e, t) {
          e.forEach((function (n, i) {
            K(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
          }))
        })), r
      }
      var ee = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = t.split("-")[1];
                if (i) {
                  var r = e.offsets,
                    o = r.reference,
                    s = r.popper,
                    a = -1 !== ["bottom", "top"].indexOf(n),
                    l = a ? "left" : "top",
                    c = a ? "width" : "height",
                    u = {
                      start: T({}, l, o[l]),
                      end: T({}, l, o[l] + o[c] - s[c])
                    };
                  e.offsets.popper = C({}, s, u[i])
                }
                return e
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (e, t) {
                var n = t.offset,
                  i = e.placement,
                  r = e.offsets,
                  o = r.popper,
                  s = r.reference,
                  a = i.split("-")[0],
                  l = void 0;
                return l = K(+n) ? [+n, 0] : Z(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (e, t) {
                var n = t.boundariesElement || p(e.instance.popper);
                e.instance.reference === n && (n = p(n));
                var i = q("transform"),
                  r = e.instance.popper.style,
                  o = r.top,
                  s = r.left,
                  a = r[i];
                r.top = "", r.left = "", r[i] = "";
                var l = N(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                var c = t.priority,
                  u = e.offsets.popper,
                  f = {
                    primary: function (e) {
                      var n = u[e];
                      return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), T({}, e, n)
                    },
                    secondary: function (e) {
                      var n = "right" === e ? "left" : "top",
                        i = u[n];
                      return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), T({}, n, i)
                    }
                  };
                return c.forEach((function (e) {
                  var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  u = C({}, u, f[t](e))
                })), e.offsets.popper = u, e
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (e) {
                var t = e.offsets,
                  n = t.popper,
                  i = t.reference,
                  r = e.placement.split("-")[0],
                  o = Math.floor,
                  s = -1 !== ["top", "bottom"].indexOf(r),
                  a = s ? "right" : "bottom",
                  l = s ? "left" : "top",
                  c = s ? "width" : "height";
                return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (e, t) {
                var n;
                if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var i = t.element;
                if ("string" == typeof i) {
                  if (!(i = e.instance.popper.querySelector(i))) return e
                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var r = e.placement.split("-")[0],
                  o = e.offsets,
                  s = o.popper,
                  a = o.reference,
                  c = -1 !== ["left", "right"].indexOf(r),
                  u = c ? "height" : "width",
                  f = c ? "Top" : "Left",
                  d = f.toLowerCase(),
                  h = c ? "left" : "top",
                  p = c ? "bottom" : "right",
                  g = O(i)[u];
                a[p] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - g)), a[d] + g > s[p] && (e.offsets.popper[d] += a[d] + g - s[p]), e.offsets.popper = x(e.offsets.popper);
                var m = a[d] + a[u] / 2 - g / 2,
                  v = l(e.instance.popper),
                  y = parseFloat(v["margin" + f], 10),
                  b = parseFloat(v["border" + f + "Width"], 10),
                  _ = m - e.offsets.popper[d] - y - b;
                return _ = Math.max(Math.min(s[u] - g, _), 0), e.arrowElement = i, e.offsets.arrow = (T(n = {}, d, Math.round(_)), T(n, h, ""), n), e
              },
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (e, t) {
                if (R(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = N(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                  i = e.placement.split("-")[0],
                  r = L(i),
                  o = e.placement.split("-")[1] || "",
                  s = [];
                switch (t.behavior) {
                  case J.FLIP:
                    s = [i, r];
                    break;
                  case J.CLOCKWISE:
                    s = X(i);
                    break;
                  case J.COUNTERCLOCKWISE:
                    s = X(i, !0);
                    break;
                  default:
                    s = t.behavior
                }
                return s.forEach((function (a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  i = e.placement.split("-")[0], r = L(i);
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    f = Math.floor,
                    d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                    h = f(c.left) < f(n.left),
                    p = f(c.right) > f(n.right),
                    g = f(c.top) < f(n.top),
                    m = f(c.bottom) > f(n.bottom),
                    v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                  (d || v || b) && (e.flipped = !0, (d || v) && (i = s[l + 1]), b && (o = function (e) {
                    return "end" === e ? "start" : "start" === e ? "end" : e
                  }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, j(e.instance.popper, e.offsets.reference, e.placement)), e = H(e.instance.modifiers, e, "flip"))
                })), e
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = e.offsets,
                  r = i.popper,
                  o = i.reference,
                  s = -1 !== ["left", "right"].indexOf(n),
                  a = -1 === ["top", "left"].indexOf(n);
                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = x(r), e
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (e) {
                if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  n = P(e.instance.modifiers, (function (e) {
                    return "preventOverflow" === e.name
                  })).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                  if (!0 === e.hide) return e;
                  e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                } else {
                  if (!1 === e.hide) return e;
                  e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                }
                return e
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (e, t) {
                var n = t.x,
                  i = t.y,
                  r = e.offsets.popper,
                  o = P(e.instance.modifiers, (function (e) {
                    return "applyStyle" === e.name
                  })).gpuAcceleration;
                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var s = void 0 !== o ? o : t.gpuAcceleration,
                  a = p(e.instance.popper),
                  l = S(a),
                  c = {
                    position: r.position
                  },
                  u = function (e, t) {
                    var n = e.offsets,
                      i = n.popper,
                      r = n.reference,
                      o = Math.round,
                      s = Math.floor,
                      a = function (e) {
                        return e
                      },
                      l = o(r.width),
                      c = o(i.width),
                      u = -1 !== ["left", "right"].indexOf(e.placement),
                      f = -1 !== e.placement.indexOf("-"),
                      d = t ? u || f || l % 2 == c % 2 ? o : s : a,
                      h = t ? o : a;
                    return {
                      left: d(l % 2 == 1 && c % 2 == 1 && !f && t ? i.left - 1 : i.left),
                      top: h(i.top),
                      bottom: h(i.bottom),
                      right: d(i.right)
                    }
                  }(e, window.devicePixelRatio < 2 || !Q),
                  f = "bottom" === n ? "top" : "bottom",
                  d = "right" === i ? "left" : "right",
                  h = q("transform"),
                  g = void 0,
                  m = void 0;
                if (m = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && h) c[h] = "translate3d(" + g + "px, " + m + "px, 0)", c[f] = 0, c[d] = 0, c.willChange = "transform";
                else {
                  var v = "bottom" === f ? -1 : 1,
                    y = "right" === d ? -1 : 1;
                  c[f] = m * v, c[d] = g * y, c.willChange = f + ", " + d
                }
                var b = {
                  "x-placement": e.placement
                };
                return e.attributes = C({}, b, e.attributes), e.styles = C({}, c, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (e) {
                var t, n;
                return z(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                })), e.arrowElement && Object.keys(e.arrowStyles).length && z(e.arrowElement, e.arrowStyles), e
              },
              onLoad: function (e, t, n, i, r) {
                var o = k(r, t, e, n.positionFixed),
                  s = I(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", s), z(t, {
                  position: n.positionFixed ? "fixed" : "absolute"
                }), n
              },
              gpuAcceleration: void 0
            }
          }
        },
        te = function () {
          function e(t, n) {
            var i = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            w(this, e), this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update)
            }, this.update = s(this.update.bind(this)), this.options = C({}, e.Defaults, r), this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, r.modifiers)).forEach((function (t) {
              i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
            })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
              return C({
                name: e
              }, i.options.modifiers[e])
            })).sort((function (e, t) {
              return e.order - t.order
            })), this.modifiers.forEach((function (e) {
              e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            })), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
          }
          return E(e, [{
            key: "update",
            value: function () {
              return M.call(this)
            }
          }, {
            key: "destroy",
            value: function () {
              return W.call(this)
            }
          }, {
            key: "enableEventListeners",
            value: function () {
              return U.call(this)
            }
          }, {
            key: "disableEventListeners",
            value: function () {
              return V.call(this)
            }
          }]), e
        }();
      te.Utils = ("undefined" != typeof window ? window : e).PopperUtils, te.placements = G, te.Defaults = ee, t.default = te
    }.call(this, n(3))
}, function (e, t, n) {
  n(2), e.exports = n(6)
}, function (e, t, n) {
  "use strict";
  n.r(t);
  n(0), n(4);
  ! function (e) {
    e(".navbar-expand-lg .navbar-toggler").on("click", (function () {
      e(this).closest("header").toggleClass("active-nav"), e("body").toggleClass("active-menuoverlay"), e(this).toggleClass("collapsed"), e(".mobile-navbar .wrap_overlay").toggleClass("show")
    })), e("ul.nav--list--level1 > li .active-arrow a.mobilenav-link, ul.nav--list--level1 > li .active-arrow span.mobilenav-link").click((function (t) {
      e("ul.nav--list--level1 li").removeClass("is-active"), e(this).closest("li").find("ul").length > 0 && (t.preventDefault(), e(this).closest("li").addClass("is-active"), e(this).closest("ul.nav--list--level1").addClass("is-active"), e(this).closest(".wrap_overlay").addClass("is-active"))
    }));
    var t, n = 0,
      i = e(".header.sticky--float--header");
    e(window).scroll((function () {
      var t = e(this).scrollTop();
      t > 250 ? t > n ? i.removeClass("floating--header") : i.addClass("floating--header") : i.removeClass("floating--header"), n = t
    })), (e("ul.nav--list--level2 li a.back--btn").length ? "true" : "false") && e("ul.nav--list--level2 li a.back--btn").on("click", (function (t) {
      t.preventDefault(), e(this).closest("li.is-active").toggleClass("is-active"), e(this).closest("ul.nav--list--level1").removeClass("is-active"), e(this).closest(".wrap_overlay").removeClass("is-active")
    }));
    var r, o = e("body");

    function s() {
      var t = e(window).height() + 54;
      e(".navbar-nav.first--level .nav-item").find(".dropdown-menu").css("height", t), e(".mobile-navbar.overlay .inner--wrapper").css("height", t - 81)
    }
    e(".navbar-nav li.nav-item").on("mouseenter", (function () {
      e("body").addClass("menu-active"), e(".navbar-nav li.nav-item a.nav-link").css("opacity", ".5"), e(this).find("a.nav-link").css("opacity", "1"), e(this).addClass("active"), e(this).closest(".navbar-collapse").siblings(".eq-nav-icons-desktop").addClass("in-active");
      var n = o[0].clientWidth - r;
      n += "px", e(window).scrollTop(t), e("body").css("margin-right", n), e(".header.sticky--float--header nav.eq-menu-main .container-fluid").css({
        "margin-right": n,
        transition: "0s"
      })
    })).on("mouseleave", (function () {
      e("body").css("margin-right", "0"), e(".header.sticky--float--header nav.eq-menu-main .container-fluid").css("margin-right", "0"), e("body").removeClass("menu-active"), e(".navbar-nav li.nav-item a.nav-link").css("opacity", "1"), e(this).find("a.nav-link").css("opacity", "1"), e(this).removeClass("active"), e(this).closest(".navbar-collapse").siblings(".eq-nav-icons-desktop").removeClass("in-active")
    })), e(".eq-nav-icons-desktop li.nav-item").on("mouseenter", (function () {
      e(this).closest(".eq-nav-icons-desktop").siblings(".navbar-collapse").find("ul.first--level").addClass("in-active"), e(".eq-nav-icons-desktop li.nav-item a.nav-link").not("#eq-search-component-init").css("opacity", ".5"), e(this).find("a.nav-link").not("#eq-search-component-init").css("opacity", "1")
    })).on("mouseleave", (function () {
      e(this).closest(".eq-nav-icons-desktop").siblings(".navbar-collapse").find("ul.first--level").removeClass("in-active"), e(".eq-nav-icons-desktop li.nav-item a.nav-link").not("#eq-search-component-init").css("opacity", "1"), e(this).find("a.nav-link").not("#eq-search-component-init").css("opacity", "1")
    })), e(".navbar-nav li.nav-item").each((function () {
      e(this).on("mouseenter", (function () {
        e(this).find("> *").length > 1 ? e(this).closest("ul.navbar-nav").removeClass("dd-bg-inactive", 300) : e(this).closest("ul.navbar-nav").addClass("dd-bg-inactive", 300)
      }))
    })), s(), e(window).resize((function () {
      s()
    }));
    var a = e(".navbar-nav.first--level .nav-item .dropdown-menu .second--level li");

    function l(t) {
      var n = new Array;
      e(t).each((function () {
        e(this).css("min-height", "0"), e(this).css("max-height", "none"), e(this).css("height", "auto"), n.push(e(this).height())
      }));
      var i = Math.max.apply(Math, n);
      e(t).each((function () {
        e(this).css("height", i + "px")
      }))
    }

    function c() {
      e(".grid-tile");
      e(".pannel_download").click((function (t) {
        e(this).parents(".grid-tile").removeClass("panel_active"), e(this).parents(".grid-tile").toggleClass("panel_active")
      })), e(".pannel_download.back").click((function (t) {
        e(this).parents(".grid-tile").removeClass("panel_active")
      }))
    }
    a.on("mouseenter click", (function () {
      var t = e(".dd-content-block").height();
      a.find(".second-level-description").height() > t && (t = a.find(".second-level-description").height()), e(".dd-content-block").height(t), a.find(".second-level-description").height(t)
    })).on("mouseleave", (function () {})), e(window).bind("load resize", (function () {
      var t = null,
        n = e(".navbar-nav.first--level .nav-item").find(".dropdown-menu").outerWidth();
      if (null !== t && window.clearTimeout(t), t = setTimeout((function () {
          l(e(".leadership-body .body-container ul li button")), l(e(".archive-main-wrapper ul li .eq-sidebar-links")), l(e(".card-body-leader p.caption")), l(e(".related-pages .row h4")), e(".navbar-expand-lg .navbar-nav").find(".dd-bg").outerWidth(n), o = e("body"), r = o[0].offsetWidth
        }), 120), e("section.leadership-team")) {
        var i = "";
        e(".card-body-leader").each((function (t) {
          "" == i ? i = e(this).height() : i < e(this).height() && (i = e(this).height())
        })), e(".card-body-leader").each((function (t) {
          e(this).height(i)
        }))
      }
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e(document).find(".sticky--float--header").addClass("sticky--header--hide"), e(document).find(".dd-light-mask").addClass("hide")) : (e(document).find(".sticky--float--header").removeClass("sticky--header--hide"), e(document).find(".dd-light-mask").removeClass("hide"))
    })).resize(), e(window).bind("scroll load resize", (function () {
      t = e(this).scrollTop()
    })).resize(), e(window).resize((function () {
      if (e("section.leadership-team")) {
        var t = "";
        e(".card-body-leader").each((function (t) {
          e(this).height("auto")
        })), e(".card-body-leader").each((function (n) {
          "" == t ? t = e(this).height() : t < e(this).height() && (t = e(this).height())
        })), e(".card-body-leader").each((function (n) {
          e(this).height(t)
        }))
      }
    })), e(document).ready((function () {
      if (e(document).ajaxComplete((function (t) {
          c(),
            function (t) {
              if (e(t)) {
                var n = "";
                e(t).each((function (t) {
                  e(this).height("auto")
                })), e(t).each((function (t) {
                  "" == n ? n = e(this).height() : n < e(this).height() && (n = e(this).height())
                })), e(t).each((function (t) {
                  e(this).height(n)
                }))
              }
            }(e("#governance-landing-cards  .card-body-leader")), e("#governance-clear-filter").click((function () {
              e(".governance-exposed select").val("All").trigger("change")
            }))
        })), e("[data-attribute-replace]").length > 0) {
        var t = "";
        e("[data-attribute-replace=true]").each((function (n) {
          if (t = (t = e(this).attr("data-attribute-replace-id")).replace("replace_", ""), e('[data-attribute-replace-id="' + t + '"]').length > 0) e('[data-attribute-replace-id="' + t + '"]').replaceWith(e(this)), e(this).addClass("active");
          else {
            var i = "block--views-block--" + e(this).attr("data-attribute-replace-id");
            i = "." + i.replace(/_/g, "-"), e(this).parents(i).remove()
          }
        }))
      }
      e("#governance-clear-filter").click((function () {
        e(".governance-exposed select").val("All").trigger("change")
      }))
    })), e("#print-bio").click((function () {
      window.print()
    })), c(), Drupal.behaviors.ge_unified_script = {
      attach: function (t, n) {
        if (e("#webform-submission-general-inquiry-add-form", t).ready((function () {
            e("#webform-submission-general-inquiry-add-form", t).find("div.webform-confirmation").length > 0 && dataLayer.push({
              event: "formSubmit",
              eventCategory: "forms",
              eventAction: "contact us form interaction",
              eventLabel: "successful form submit",
              formName: "GE - Contact us",
              formMessage: "Thank you"
            })
          })), e("#webform-submission-business-add-form", t).ready((function () {
            e("#webform-submission-business-add-form", t).find("div.webform-confirmation").length > 0 && dataLayer.push({
              event: "formSubmit",
              eventCategory: "forms",
              eventAction: "contact us form interaction",
              eventLabel: "successful form submit",
              formName: "GE - Contact us",
              formMessage: "Thank you"
            })
          })), e("#webform-submission-careers-add-form", t).ready((function () {
            e("#webform-submission-careers-add-form", t).find("div.webform-confirmation").length > 0 && dataLayer.push({
              event: "formSubmit",
              eventCategory: "forms",
              eventAction: "contact us form interaction",
              eventLabel: "successful form submit",
              formName: "GE - Contact us",
              formMessage: "Thank you"
            })
          })), e("#webform-submission-press-add-form", t).ready((function () {
            e("#webform-submission-press-add-form", t).find("div.webform-confirmation").length > 0 && dataLayer.push({
              event: "formSubmit",
              eventCategory: "forms",
              eventAction: "contact us form interaction",
              eventLabel: "successful form submit",
              formName: "GE - Contact us",
              formMessage: "Thank you"
            })
          })), e(".social-media-links--platforms.platforms.vertical a", t).click((function () {
            var t = e(this).attr("title");
            "EQDPI Facebook page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "facebook",
              sharedContent: "profile homepage",
              pageLocation: "left sidebar"
            }), "EQDPI Twitter page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "twitter",
              sharedContent: "profile homepage",
              pageLocation: "left sidebar"
            }), "EQDPI LinkedIn page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "linkedin",
              sharedContent: "profile homepage",
              pageLocation: "left sidebar"
            })
          })), e("footer .social-media-links--platforms.platforms.inline.horizontal a", t).click((function () {
            var t = e(this).attr("title");
            "EQDPI Facebook page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "facebook",
              sharedContent: "profile homepage",
              pageLocation: "footer"
            }), "EQDPI Twitter page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "twitter",
              sharedContent: "profile homepage",
              pageLocation: "footer"
            }), "EQDPI LinkedIn page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "linkedin",
              sharedContent: "profile homepage",
              pageLocation: "footer"
            }), "EQDPI YouTube page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "youtube",
              sharedContent: "profile homepage",
              pageLocation: "footer"
            }), "EQDPI Instagram page" == t && dataLayer.push({
              event: "socialShare",
              eventCategory: "content",
              eventAction: "social share intention",
              socialPlatform: "instagram",
              sharedContent: "profile homepage",
              pageLocation: "footer"
            })
          })), e(".events-reports-wrapper .generic_slick")) {
          var i = "";
          e(".events-reports-wrapper .generic_slick .card_wrapper.equalize-height-wrapper", t).each((function (t) {
            "" == i ? i = e(this).outerHeight() : i < e(this).outerHeight() && (i = e(this).outerHeight())
          })), e(".events-reports-wrapper .generic_slick .card_wrapper.equalize-height-wrapper", t).outerHeight(i)
        }

        function r() {
          if (e(".eq-investor-subnavigation").length > 0) {
            e(".eq-investor-subnavigation .sub-nav-qualize a", t).each((function (t) {
              e(this).removeAttr("style")
            }));
            var n = window.location.pathname,
              i = 0,
              r = 0;
            e(".eq-investor-subnavigation .sub-nav-qualize a", t).each((function (t) {
              var o = e(this).attr("href");
              n == o && (e(this).removeClass("button-secondary-light"), e(this).addClass("button-primary"));
              var s = e(this).text().length;
              s >= i && (i = s, e(this).width() >= r && (r = e(this).width()))
            })), e(".eq-investor-subnavigation .sub-nav-qualize a", t).each((function (t) {
              e(this).width(r)
            }))
          }
        }
        r(), e(window, t).resize((function () {
          r()
        }))
      }
    }, e(window).bind("load resize", (function () {
      e("div.block--covid19banner").length && e(window).width() < 768 && e("div.landing-page main.eq-main").css("padding-top", "60px")
    })), jQuery(".evidon_cookie").click((function () {
      event.preventDefault(), window.evidon.notice.showOptions()
    })), e(".diversity-data-container .diversity-data-select #edit-field-data-value").change((function () {
      var t = e(".diversity-data-container .diversity-data-select #edit-field-data-value option:selected").val();
      e(".diversity-data-container .diversity-data-select #edit-field-data-value option").each((function () {
        e(this).val() == t ? e(".diversity-data-container .diversity-data-table ." + t).addClass("active") : e(".diversity-data-container .diversity-data-table ." + e(this).val()).removeClass("active")
      }))
    }))
  }(jQuery)
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  ! function (e, t, n) {
    "use strict";

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        })))), i.forEach((function (t) {
          o(e, t, n[t])
        }))
      }
      return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend";

    function l(e) {
      var n = this,
        i = !1;
      return t(this).one(c.TRANSITION_END, (function () {
        i = !0
      })), setTimeout((function () {
        i || c.triggerTransitionEnd(n)
      }), e), this
    }
    var c = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        do {
          e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute("data-target");
        if (!t || "#" === t) {
          var n = e.getAttribute("href");
          t = n && "#" !== n ? n.trim() : ""
        }
        try {
          return document.querySelector(t) ? t : null
        } catch (e) {
          return null
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var n = t(e).css("transition-duration"),
          i = t(e).css("transition-delay"),
          r = parseFloat(n),
          o = parseFloat(i);
        return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
      },
      reflow: function (e) {
        return e.offsetHeight
      },
      triggerTransitionEnd: function (e) {
        t(e).trigger(a)
      },
      supportsTransitionEnd: function () {
        return Boolean(a)
      },
      isElement: function (e) {
        return (e[0] || e).nodeType
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = t[i],
              s = o && c.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
          } var a
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
      }
    };
    t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
      bindType: a,
      delegateType: a,
      handle: function (e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    };
    var u = t.fn.alert,
      f = {
        CLOSE: "close.bs.alert",
        CLOSED: "closed.bs.alert",
        CLICK_DATA_API: "click.bs.alert.data-api"
      },
      d = "alert",
      h = "fade",
      p = "show",
      g = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, n.dispose = function () {
          t.removeData(this._element, "bs.alert"), this._element = null
        }, n._getRootElement = function (e) {
          var n = c.getSelectorFromElement(e),
            i = !1;
          return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + d)[0]), i
        }, n._triggerCloseEvent = function (e) {
          var n = t.Event(f.CLOSE);
          return t(e).trigger(n), n
        }, n._removeElement = function (e) {
          var n = this;
          if (t(e).removeClass(p), t(e).hasClass(h)) {
            var i = c.getTransitionDurationFromElement(e);
            t(e).one(c.TRANSITION_END, (function (t) {
              return n._destroyElement(e, t)
            })).emulateTransitionEnd(i)
          } else this._destroyElement(e)
        }, n._destroyElement = function (e) {
          t(e).detach().trigger(f.CLOSED).remove()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              r = i.data("bs.alert");
            r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
          }))
        }, e._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this)
          }
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }]), e
      }();
    t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), t.fn.alert = g._jQueryInterface, t.fn.alert.Constructor = g, t.fn.alert.noConflict = function () {
      return t.fn.alert = u, g._jQueryInterface
    };
    var m = t.fn.button,
      v = "active",
      y = "btn",
      b = "focus",
      _ = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      E = 'input:not([type="hidden"])',
      T = ".active",
      C = ".btn",
      x = {
        CLICK_DATA_API: "click.bs.button.data-api",
        FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
      },
      S = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.toggle = function () {
          var e = !0,
            n = !0,
            i = t(this._element).closest(w)[0];
          if (i) {
            var r = this._element.querySelector(E);
            if (r) {
              if ("radio" === r.type)
                if (r.checked && this._element.classList.contains(v)) e = !1;
                else {
                  var o = i.querySelector(T);
                  o && t(o).removeClass(v)
                } if (e) {
                if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                r.checked = !this._element.classList.contains(v), t(r).trigger("change")
              }
              r.focus(), n = !1
            }
          }
          n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && t(this._element).toggleClass(v)
        }, n.dispose = function () {
          t.removeData(this._element, "bs.button"), this._element = null
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.button");
            i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }]), e
      }();
    t(document).on(x.CLICK_DATA_API, _, (function (e) {
      e.preventDefault();
      var n = e.target;
      t(n).hasClass(y) || (n = t(n).closest(C)), S._jQueryInterface.call(t(n), "toggle")
    })).on(x.FOCUS_BLUR_DATA_API, _, (function (e) {
      var n = t(e.target).closest(C)[0];
      t(n).toggleClass(b, /^focus(in)?$/.test(e.type))
    })), t.fn.button = S._jQueryInterface, t.fn.button.Constructor = S, t.fn.button.noConflict = function () {
      return t.fn.button = m, S._jQueryInterface
    };
    var D = "carousel",
      A = ".bs.carousel",
      N = t.fn[D],
      I = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      k = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      O = "next",
      L = "prev",
      j = "left",
      P = "right",
      H = {
        SLIDE: "slide.bs.carousel",
        SLID: "slid.bs.carousel",
        KEYDOWN: "keydown.bs.carousel",
        MOUSEENTER: "mouseenter.bs.carousel",
        MOUSELEAVE: "mouseleave.bs.carousel",
        TOUCHSTART: "touchstart.bs.carousel",
        TOUCHMOVE: "touchmove.bs.carousel",
        TOUCHEND: "touchend.bs.carousel",
        POINTERDOWN: "pointerdown.bs.carousel",
        POINTERUP: "pointerup.bs.carousel",
        DRAG_START: "dragstart.bs.carousel",
        LOAD_DATA_API: "load.bs.carousel.data-api",
        CLICK_DATA_API: "click.bs.carousel.data-api"
      },
      M = "carousel",
      R = "active",
      q = "slide",
      W = "carousel-item-right",
      F = "carousel-item-left",
      B = "carousel-item-next",
      U = "carousel-item-prev",
      V = "pointer-event",
      K = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        ITEM_IMG: ".carousel-item img",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
      },
      z = {
        TOUCH: "touch",
        PEN: "pen"
      },
      Q = function () {
        function e(e, t) {
          this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(K.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
        }
        var n = e.prototype;
        return n.next = function () {
          this._isSliding || this._slide(O)
        }, n.nextWhenVisible = function () {
          !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }, n.prev = function () {
          this._isSliding || this._slide(L)
        }, n.pause = function (e) {
          e || (this._isPaused = !0), this._element.querySelector(K.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, n.cycle = function (e) {
          e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, n.to = function (e) {
          var n = this;
          this._activeElement = this._element.querySelector(K.ACTIVE_ITEM);
          var i = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding) t(this._element).one(H.SLID, (function () {
              return n.to(e)
            }));
            else {
              if (i === e) return this.pause(), void this.cycle();
              var r = e > i ? O : L;
              this._slide(r, this._items[e])
            }
        }, n.dispose = function () {
          t(this._element).off(A), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, n._getConfig = function (e) {
          return e = s({}, I, e), c.typeCheckConfig(D, e, k), e
        }, n._handleSwipe = function () {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            t > 0 && this.prev(), t < 0 && this.next()
          }
        }, n._addEventListeners = function () {
          var e = this;
          this._config.keyboard && t(this._element).on(H.KEYDOWN, (function (t) {
            return e._keydown(t)
          })), "hover" === this._config.pause && t(this._element).on(H.MOUSEENTER, (function (t) {
            return e.pause(t)
          })).on(H.MOUSELEAVE, (function (t) {
            return e.cycle(t)
          })), this._config.touch && this._addTouchEventListeners()
        }, n._addTouchEventListeners = function () {
          var e = this;
          if (this._touchSupported) {
            var n = function (t) {
                e._pointerEvent && z[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
              },
              i = function (t) {
                e._pointerEvent && z[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                  return e.cycle(t)
                }), 500 + e._config.interval))
              };
            t(this._element.querySelectorAll(K.ITEM_IMG)).on(H.DRAG_START, (function (e) {
              return e.preventDefault()
            })), this._pointerEvent ? (t(this._element).on(H.POINTERDOWN, (function (e) {
              return n(e)
            })), t(this._element).on(H.POINTERUP, (function (e) {
              return i(e)
            })), this._element.classList.add(V)) : (t(this._element).on(H.TOUCHSTART, (function (e) {
              return n(e)
            })), t(this._element).on(H.TOUCHMOVE, (function (t) {
              return function (t) {
                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
              }(t)
            })), t(this._element).on(H.TOUCHEND, (function (e) {
              return i(e)
            })))
          }
        }, n._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
            case 37:
              e.preventDefault(), this.prev();
              break;
            case 39:
              e.preventDefault(), this.next()
          }
        }, n._getItemIndex = function (e) {
          return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(K.ITEM)) : [], this._items.indexOf(e)
        }, n._getItemByDirection = function (e, t) {
          var n = e === O,
            i = e === L,
            r = this._getItemIndex(t),
            o = this._items.length - 1;
          if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
          var s = (r + (e === L ? -1 : 1)) % this._items.length;
          return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, n._triggerSlideEvent = function (e, n) {
          var i = this._getItemIndex(e),
            r = this._getItemIndex(this._element.querySelector(K.ACTIVE_ITEM)),
            o = t.Event(H.SLIDE, {
              relatedTarget: e,
              direction: n,
              from: r,
              to: i
            });
          return t(this._element).trigger(o), o
        }, n._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var n = [].slice.call(this._indicatorsElement.querySelectorAll(K.ACTIVE));
            t(n).removeClass(R);
            var i = this._indicatorsElement.children[this._getItemIndex(e)];
            i && t(i).addClass(R)
          }
        }, n._slide = function (e, n) {
          var i, r, o, s = this,
            a = this._element.querySelector(K.ACTIVE_ITEM),
            l = this._getItemIndex(a),
            u = n || a && this._getItemByDirection(e, a),
            f = this._getItemIndex(u),
            d = Boolean(this._interval);
          if (e === O ? (i = F, r = B, o = j) : (i = W, r = U, o = P), u && t(u).hasClass(R)) this._isSliding = !1;
          else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
            this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
            var h = t.Event(H.SLID, {
              relatedTarget: u,
              direction: o,
              from: l,
              to: f
            });
            if (t(this._element).hasClass(q)) {
              t(u).addClass(r), c.reflow(u), t(a).addClass(i), t(u).addClass(i);
              var p = parseInt(u.getAttribute("data-interval"), 10);
              p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
              var g = c.getTransitionDurationFromElement(a);
              t(a).one(c.TRANSITION_END, (function () {
                t(u).removeClass(i + " " + r).addClass(R), t(a).removeClass(R + " " + r + " " + i), s._isSliding = !1, setTimeout((function () {
                  return t(s._element).trigger(h)
                }), 0)
              })).emulateTransitionEnd(g)
            } else t(a).removeClass(R), t(u).addClass(R), this._isSliding = !1, t(this._element).trigger(h);
            d && this.cycle()
          }
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.carousel"),
              r = s({}, I, t(this).data());
            "object" == typeof n && (r = s({}, r, n));
            var o = "string" == typeof n ? n : r.slide;
            if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
            else if ("string" == typeof o) {
              if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
              i[o]()
            } else r.interval && r.ride && (i.pause(), i.cycle())
          }))
        }, e._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var r = t(i)[0];
            if (r && t(r).hasClass(M)) {
              var o = s({}, t(r).data(), t(this).data()),
                a = this.getAttribute("data-slide-to");
              a && (o.interval = !1), e._jQueryInterface.call(t(r), o), a && t(r).data("bs.carousel").to(a), n.preventDefault()
            }
          }
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return I
          }
        }]), e
      }();
    t(document).on(H.CLICK_DATA_API, K.DATA_SLIDE, Q._dataApiClickHandler), t(window).on(H.LOAD_DATA_API, (function () {
      for (var e = [].slice.call(document.querySelectorAll(K.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
        var r = t(e[n]);
        Q._jQueryInterface.call(r, r.data())
      }
    })), t.fn[D] = Q._jQueryInterface, t.fn[D].Constructor = Q, t.fn[D].noConflict = function () {
      return t.fn[D] = N, Q._jQueryInterface
    };
    var $ = "collapse",
      G = t.fn[$],
      Y = {
        toggle: !0,
        parent: ""
      },
      X = {
        toggle: "boolean",
        parent: "(string|element)"
      },
      J = {
        SHOW: "show.bs.collapse",
        SHOWN: "shown.bs.collapse",
        HIDE: "hide.bs.collapse",
        HIDDEN: "hidden.bs.collapse",
        CLICK_DATA_API: "click.bs.collapse.data-api"
      },
      Z = "show",
      ee = "collapse",
      te = "collapsing",
      ne = "collapsed",
      ie = "width",
      re = "height",
      oe = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
      },
      se = function () {
        function e(e, t) {
          this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var n = [].slice.call(document.querySelectorAll(oe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
              s = c.getSelectorFromElement(o),
              a = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                return t === e
              }));
            null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
          }
          this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        var n = e.prototype;
        return n.toggle = function () {
          t(this._element).hasClass(Z) ? this.hide() : this.show()
        }, n.show = function () {
          var n, i, r = this;
          if (!(this._isTransitioning || t(this._element).hasClass(Z) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(oe.ACTIVES)).filter((function (e) {
              return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(ee)
            }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
            var o = t.Event(J.SHOW);
            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
              n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
              var s = this._getDimension();
              t(this._element).removeClass(ee).addClass(te), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
              var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, (function () {
                t(r._element).removeClass(te).addClass(ee).addClass(Z), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger(J.SHOWN)
              })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
            }
          }
        }, n.hide = function () {
          var e = this;
          if (!this._isTransitioning && t(this._element).hasClass(Z)) {
            var n = t.Event(J.HIDE);
            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
              var i = this._getDimension();
              this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(Z);
              var r = this._triggerArray.length;
              if (r > 0)
                for (var o = 0; o < r; o++) {
                  var s = this._triggerArray[o],
                    a = c.getSelectorFromElement(s);
                  null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass(Z) || t(s).addClass(ne).attr("aria-expanded", !1))
                }
              this.setTransitioning(!0), this._element.style[i] = "";
              var l = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, (function () {
                e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(J.HIDDEN)
              })).emulateTransitionEnd(l)
            }
          }
        }, n.setTransitioning = function (e) {
          this._isTransitioning = e
        }, n.dispose = function () {
          t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, n._getConfig = function (e) {
          return (e = s({}, Y, e)).toggle = Boolean(e.toggle), c.typeCheckConfig($, e, X), e
        }, n._getDimension = function () {
          return t(this._element).hasClass(ie) ? ie : re
        }, n._getParent = function () {
          var n, i = this;
          c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
          var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            o = [].slice.call(n.querySelectorAll(r));
          return t(o).each((function (t, n) {
            i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
          })), n
        }, n._addAriaAndCollapsedClass = function (e, n) {
          var i = t(e).hasClass(Z);
          n.length && t(n).toggleClass(ne, !i).attr("aria-expanded", i)
        }, e._getTargetFromElement = function (e) {
          var t = c.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              r = i.data("bs.collapse"),
              o = s({}, Y, i.data(), "object" == typeof n && n ? n : {});
            if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
              if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
              r[n]()
            }
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return Y
          }
        }]), e
      }();
    t(document).on(J.CLICK_DATA_API, oe.DATA_TOGGLE, (function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = c.getSelectorFromElement(this),
        r = [].slice.call(document.querySelectorAll(i));
      t(r).each((function () {
        var e = t(this),
          i = e.data("bs.collapse") ? "toggle" : n.data();
        se._jQueryInterface.call(e, i)
      }))
    })), t.fn[$] = se._jQueryInterface, t.fn[$].Constructor = se, t.fn[$].noConflict = function () {
      return t.fn[$] = G, se._jQueryInterface
    };
    var ae = "dropdown",
      le = t.fn[ae],
      ce = new RegExp("38|40|27"),
      ue = {
        HIDE: "hide.bs.dropdown",
        HIDDEN: "hidden.bs.dropdown",
        SHOW: "show.bs.dropdown",
        SHOWN: "shown.bs.dropdown",
        CLICK: "click.bs.dropdown",
        CLICK_DATA_API: "click.bs.dropdown.data-api",
        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
        KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
      },
      fe = "disabled",
      de = "show",
      he = "dropup",
      pe = "dropright",
      ge = "dropleft",
      me = "dropdown-menu-right",
      ve = "position-static",
      ye = '[data-toggle="dropdown"]',
      be = ".dropdown form",
      _e = ".dropdown-menu",
      we = ".navbar-nav",
      Ee = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Te = "top-start",
      Ce = "top-end",
      xe = "bottom-start",
      Se = "bottom-end",
      De = "right-start",
      Ae = "left-start",
      Ne = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
      },
      Ie = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
      },
      ke = function () {
        function e(e, t) {
          this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        var i = e.prototype;
        return i.toggle = function () {
          if (!this._element.disabled && !t(this._element).hasClass(fe)) {
            var i = e._getParentFromElement(this._element),
              r = t(this._menu).hasClass(de);
            if (e._clearMenus(), !r) {
              var o = {
                  relatedTarget: this._element
                },
                s = t.Event(ue.SHOW, o);
              if (t(i).trigger(s), !s.isDefaultPrevented()) {
                if (!this._inNavbar) {
                  if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                  var a = this._element;
                  "parent" === this._config.reference ? a = i : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass(ve), this._popper = new n(a, this._menu, this._getPopperConfig())
                }
                "ontouchstart" in document.documentElement && 0 === t(i).closest(we).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(de), t(i).toggleClass(de).trigger(t.Event(ue.SHOWN, o))
              }
            }
          }
        }, i.show = function () {
          if (!(this._element.disabled || t(this._element).hasClass(fe) || t(this._menu).hasClass(de))) {
            var n = {
                relatedTarget: this._element
              },
              i = t.Event(ue.SHOW, n),
              r = e._getParentFromElement(this._element);
            t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(de), t(r).toggleClass(de).trigger(t.Event(ue.SHOWN, n)))
          }
        }, i.hide = function () {
          if (!this._element.disabled && !t(this._element).hasClass(fe) && t(this._menu).hasClass(de)) {
            var n = {
                relatedTarget: this._element
              },
              i = t.Event(ue.HIDE, n),
              r = e._getParentFromElement(this._element);
            t(r).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(de), t(r).toggleClass(de).trigger(t.Event(ue.HIDDEN, n)))
          }
        }, i.dispose = function () {
          t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
        }, i.update = function () {
          this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, i._addEventListeners = function () {
          var e = this;
          t(this._element).on(ue.CLICK, (function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle()
          }))
        }, i._getConfig = function (e) {
          return e = s({}, this.constructor.Default, t(this._element).data(), e), c.typeCheckConfig(ae, e, this.constructor.DefaultType), e
        }, i._getMenuElement = function () {
          if (!this._menu) {
            var t = e._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(_e))
          }
          return this._menu
        }, i._getPlacement = function () {
          var e = t(this._element.parentNode),
            n = xe;
          return e.hasClass(he) ? (n = Te, t(this._menu).hasClass(me) && (n = Ce)) : e.hasClass(pe) ? n = De : e.hasClass(ge) ? n = Ae : t(this._menu).hasClass(me) && (n = Se), n
        }, i._detectNavbar = function () {
          return t(this._element).closest(".navbar").length > 0
        }, i._getOffset = function () {
          var e = this,
            t = {};
          return "function" == typeof this._config.offset ? t.fn = function (t) {
            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
          } : t.offset = this._config.offset, t
        }, i._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          return "static" === this._config.display && (e.modifiers.applyStyle = {
            enabled: !1
          }), e
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.dropdown");
            if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, e._clearMenus = function (n) {
          if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
            for (var i = [].slice.call(document.querySelectorAll(ye)), r = 0, o = i.length; r < o; r++) {
              var s = e._getParentFromElement(i[r]),
                a = t(i[r]).data("bs.dropdown"),
                l = {
                  relatedTarget: i[r]
                };
              if (n && "click" === n.type && (l.clickEvent = n), a) {
                var c = a._menu;
                if (t(s).hasClass(de) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                  var u = t.Event(ue.HIDE, l);
                  t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), t(c).removeClass(de), t(s).removeClass(de).trigger(t.Event(ue.HIDDEN, l)))
                }
              }
            }
        }, e._getParentFromElement = function (e) {
          var t, n = c.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode
        }, e._dataApiKeydownHandler = function (n) {
          if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(_e).length)) : ce.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(fe))) {
            var i = e._getParentFromElement(this),
              r = t(i).hasClass(de);
            if (r && (!r || 27 !== n.which && 32 !== n.which)) {
              var o = [].slice.call(i.querySelectorAll(Ee));
              if (0 !== o.length) {
                var s = o.indexOf(n.target);
                38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
              }
            } else {
              if (27 === n.which) {
                var a = i.querySelector(ye);
                t(a).trigger("focus")
              }
              t(this).trigger("click")
            }
          }
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return Ne
          }
        }, {
          key: "DefaultType",
          get: function () {
            return Ie
          }
        }]), e
      }();
    t(document).on(ue.KEYDOWN_DATA_API, ye, ke._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, _e, ke._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, ke._clearMenus).on(ue.CLICK_DATA_API, ye, (function (e) {
      e.preventDefault(), e.stopPropagation(), ke._jQueryInterface.call(t(this), "toggle")
    })).on(ue.CLICK_DATA_API, be, (function (e) {
      e.stopPropagation()
    })), t.fn[ae] = ke._jQueryInterface, t.fn[ae].Constructor = ke, t.fn[ae].noConflict = function () {
      return t.fn[ae] = le, ke._jQueryInterface
    };
    var Oe = t.fn.modal,
      Le = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
      },
      je = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      },
      Pe = {
        HIDE: "hide.bs.modal",
        HIDDEN: "hidden.bs.modal",
        SHOW: "show.bs.modal",
        SHOWN: "shown.bs.modal",
        FOCUSIN: "focusin.bs.modal",
        RESIZE: "resize.bs.modal",
        CLICK_DISMISS: "click.dismiss.bs.modal",
        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
        CLICK_DATA_API: "click.bs.modal.data-api"
      },
      He = "modal-dialog-scrollable",
      Me = "modal-scrollbar-measure",
      Re = "modal-backdrop",
      qe = "modal-open",
      We = "fade",
      Fe = "show",
      Be = {
        DIALOG: ".modal-dialog",
        MODAL_BODY: ".modal-body",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top"
      },
      Ue = function () {
        function e(e, t) {
          this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Be.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
        }
        var n = e.prototype;
        return n.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e)
        }, n.show = function (e) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            t(this._element).hasClass(We) && (this._isTransitioning = !0);
            var i = t.Event(Pe.SHOW, {
              relatedTarget: e
            });
            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(Pe.CLICK_DISMISS, Be.DATA_DISMISS, (function (e) {
              return n.hide(e)
            })), t(this._dialog).on(Pe.MOUSEDOWN_DISMISS, (function () {
              t(n._element).one(Pe.MOUSEUP_DISMISS, (function (e) {
                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
              }))
            })), this._showBackdrop((function () {
              return n._showElement(e)
            })))
          }
        }, n.hide = function (e) {
          var n = this;
          if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
            var i = t.Event(Pe.HIDE);
            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
              this._isShown = !1;
              var r = t(this._element).hasClass(We);
              if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(Pe.FOCUSIN), t(this._element).removeClass(Fe), t(this._element).off(Pe.CLICK_DISMISS), t(this._dialog).off(Pe.MOUSEDOWN_DISMISS), r) {
                var o = c.getTransitionDurationFromElement(this._element);
                t(this._element).one(c.TRANSITION_END, (function (e) {
                  return n._hideModal(e)
                })).emulateTransitionEnd(o)
              } else this._hideModal()
            }
          }
        }, n.dispose = function () {
          [window, this._element, this._dialog].forEach((function (e) {
            return t(e).off(".bs.modal")
          })), t(document).off(Pe.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, n.handleUpdate = function () {
          this._adjustDialog()
        }, n._getConfig = function (e) {
          return e = s({}, Le, e), c.typeCheckConfig("modal", e, je), e
        }, n._showElement = function (e) {
          var n = this,
            i = t(this._element).hasClass(We);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(He) ? this._dialog.querySelector(Be.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass(Fe), this._config.focus && this._enforceFocus();
          var r = t.Event(Pe.SHOWN, {
              relatedTarget: e
            }),
            o = function () {
              n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
            };
          if (i) {
            var s = c.getTransitionDurationFromElement(this._dialog);
            t(this._dialog).one(c.TRANSITION_END, o).emulateTransitionEnd(s)
          } else o()
        }, n._enforceFocus = function () {
          var e = this;
          t(document).off(Pe.FOCUSIN).on(Pe.FOCUSIN, (function (n) {
            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
          }))
        }, n._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard ? t(this._element).on(Pe.KEYDOWN_DISMISS, (function (t) {
            27 === t.which && (t.preventDefault(), e.hide())
          })) : this._isShown || t(this._element).off(Pe.KEYDOWN_DISMISS)
        }, n._setResizeEvent = function () {
          var e = this;
          this._isShown ? t(window).on(Pe.RESIZE, (function (t) {
            return e.handleUpdate(t)
          })) : t(window).off(Pe.RESIZE)
        }, n._hideModal = function () {
          var e = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
            t(document.body).removeClass(qe), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(Pe.HIDDEN)
          }))
        }, n._removeBackdrop = function () {
          this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
        }, n._showBackdrop = function (e) {
          var n = this,
            i = t(this._element).hasClass(We) ? We : "";
          if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"), this._backdrop.className = Re, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(Pe.CLICK_DISMISS, (function (e) {
                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
              })), i && c.reflow(this._backdrop), t(this._backdrop).addClass(Fe), !e) return;
            if (!i) return void e();
            var r = c.getTransitionDurationFromElement(this._backdrop);
            t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(r)
          } else if (!this._isShown && this._backdrop) {
            t(this._backdrop).removeClass(Fe);
            var o = function () {
              n._removeBackdrop(), e && e()
            };
            if (t(this._element).hasClass(We)) {
              var s = c.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(s)
            } else o()
          } else e && e()
        }, n._adjustDialog = function () {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, n._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, n._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, n._setScrollbar = function () {
          var e = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT)),
              i = [].slice.call(document.querySelectorAll(Be.STICKY_CONTENT));
            t(n).each((function (n, i) {
              var r = i.style.paddingRight,
                o = t(i).css("padding-right");
              t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
            })), t(i).each((function (n, i) {
              var r = i.style.marginRight,
                o = t(i).css("margin-right");
              t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
            }));
            var r = document.body.style.paddingRight,
              o = t(document.body).css("padding-right");
            t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
          }
          t(document.body).addClass(qe)
        }, n._resetScrollbar = function () {
          var e = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT));
          t(e).each((function (e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
          }));
          var n = [].slice.call(document.querySelectorAll("" + Be.STICKY_CONTENT));
          t(n).each((function (e, n) {
            var i = t(n).data("margin-right");
            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
          }));
          var i = t(document.body).data("padding-right");
          t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
        }, n._getScrollbarWidth = function () {
          var e = document.createElement("div");
          e.className = Me, document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t
        }, e._jQueryInterface = function (n, i) {
          return this.each((function () {
            var r = t(this).data("bs.modal"),
              o = s({}, Le, t(this).data(), "object" == typeof n && n ? n : {});
            if (r || (r = new e(this, o), t(this).data("bs.modal", r)), "string" == typeof n) {
              if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
              r[n](i)
            } else o.show && r.show(i)
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return Le
          }
        }]), e
      }();
    t(document).on(Pe.CLICK_DATA_API, Be.DATA_TOGGLE, (function (e) {
      var n, i = this,
        r = c.getSelectorFromElement(this);
      r && (n = document.querySelector(r));
      var o = t(n).data("bs.modal") ? "toggle" : s({}, t(n).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var a = t(n).one(Pe.SHOW, (function (e) {
        e.isDefaultPrevented() || a.one(Pe.HIDDEN, (function () {
          t(i).is(":visible") && i.focus()
        }))
      }));
      Ue._jQueryInterface.call(t(n), o, this)
    })), t.fn.modal = Ue._jQueryInterface, t.fn.modal.Constructor = Ue, t.fn.modal.noConflict = function () {
      return t.fn.modal = Oe, Ue._jQueryInterface
    };
    var Ve = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ke = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      ze = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Qe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function $e(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
          var i = o[e],
            s = i.nodeName.toLowerCase();
          if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(t["*"] || [], t[s] || []);
          a.forEach((function (e) {
            (function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n)) return -1 === Ve.indexOf(n) || Boolean(e.nodeValue.match(ze) || e.nodeValue.match(Qe));
              for (var i = t.filter((function (e) {
                  return e instanceof RegExp
                })), r = 0, o = i.length; r < o; r++)
                if (n.match(i[r])) return !0;
              return !1
            })(e, l) || i.removeAttribute(e.nodeName)
          }))
        }, a = 0, l = o.length; a < l; a++) s(a);
      return i.body.innerHTML
    }
    var Ge = "tooltip",
      Ye = t.fn.tooltip,
      Xe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Je = ["sanitize", "whiteList", "sanitizeFn"],
      Ze = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
      },
      et = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      },
      tt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Ke
      },
      nt = "show",
      it = "out",
      rt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      },
      ot = "fade",
      st = "show",
      at = ".tooltip-inner",
      lt = ".arrow",
      ct = "hover",
      ut = "focus",
      ft = "click",
      dt = "manual",
      ht = function () {
        function e(e, t) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
        }
        var i = e.prototype;
        return i.enable = function () {
          this._isEnabled = !0
        }, i.disable = function () {
          this._isEnabled = !1
        }, i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }, i.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var n = this.constructor.DATA_KEY,
                i = t(e.currentTarget).data(n);
              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
            } else {
              if (t(this.getTipElement()).hasClass(st)) return void this._leave(null, this);
              this._enter(null, this)
            }
        }, i.dispose = function () {
          clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, i.show = function () {
          var e = this;
          if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
          var i = t.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            t(this.element).trigger(i);
            var r = c.findShadowRoot(this.element),
              o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
            if (i.isDefaultPrevented() || !o) return;
            var s = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(ot);
            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
              u = this._getAttachment(l);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
              placement: u,
              modifiers: {
                offset: this._getOffset(),
                flip: {
                  behavior: this.config.fallbackPlacement
                },
                arrow: {
                  element: lt
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t)
              }
            }), t(s).addClass(st), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
            var d = function () {
              e.config.animation && e._fixTransition();
              var n = e._hoverState;
              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === it && e._leave(null, e)
            };
            if (t(this.tip).hasClass(ot)) {
              var h = c.getTransitionDurationFromElement(this.tip);
              t(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(h)
            } else d()
          }
        }, i.hide = function (e) {
          var n = this,
            i = this.getTipElement(),
            r = t.Event(this.constructor.Event.HIDE),
            o = function () {
              n._hoverState !== nt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            };
          if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
            if (t(i).removeClass(st), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ft] = !1, this._activeTrigger[ut] = !1, this._activeTrigger[ct] = !1, t(this.tip).hasClass(ot)) {
              var s = c.getTransitionDurationFromElement(i);
              t(i).one(c.TRANSITION_END, o).emulateTransitionEnd(s)
            } else o();
            this._hoverState = ""
          }
        }, i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate()
        }, i.isWithContent = function () {
          return Boolean(this.getTitle())
        }, i.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-tooltip-" + e)
        }, i.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, i.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(t(e.querySelectorAll(at)), this.getTitle()), t(e).removeClass(ot + " " + st)
        }, i.setElementContent = function (e, n) {
          "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = $e(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
        }, i.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
        }, i._getOffset = function () {
          var e = this,
            t = {};
          return "function" == typeof this.config.offset ? t.fn = function (t) {
            return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
          } : t.offset = this.config.offset, t
        }, i._getContainer = function () {
          return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }, i._getAttachment = function (e) {
          return et[e.toUpperCase()]
        }, i._setListeners = function () {
          var e = this;
          this.config.trigger.split(" ").forEach((function (n) {
            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
              return e.toggle(t)
            }));
            else if (n !== dt) {
              var i = n === ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                r = n === ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
              t(e.element).on(i, e.config.selector, (function (t) {
                return e._enter(t)
              })).on(r, e.config.selector, (function (t) {
                return e._leave(t)
              }))
            }
          })), t(this.element).closest(".modal").on("hide.bs.modal", (function () {
            e.element && e.hide()
          })), this.config.selector ? this.config = s({}, this.config, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle()
        }, i._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, i._enter = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ut : ct] = !0), t(n.getTipElement()).hasClass(st) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
            n._hoverState === nt && n.show()
          }), n.config.delay.show) : n.show())
        }, i._leave = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ut : ct] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = it, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
            n._hoverState === it && n.hide()
          }), n.config.delay.hide) : n.hide())
        }, i._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1
        }, i._getConfig = function (e) {
          var n = t(this.element).data();
          return Object.keys(n).forEach((function (e) {
            -1 !== Je.indexOf(e) && delete n[e]
          })), "number" == typeof (e = s({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
            show: e.delay,
            hide: e.delay
          }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Ge, e, this.constructor.DefaultType), e.sanitize && (e.template = $e(e.template, e.whiteList, e.sanitizeFn)), e
        }, i._getDelegateConfig = function () {
          var e = {};
          if (this.config)
            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
          return e
        }, i._cleanTipClass = function () {
          var e = t(this.getTipElement()),
            n = e.attr("class").match(Xe);
          null !== n && n.length && e.removeClass(n.join(""))
        }, i._handlePopperPlacementChange = function (e) {
          var t = e.instance;
          this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, i._fixTransition = function () {
          var e = this.getTipElement(),
            n = this.config.animation;
          null === e.getAttribute("x-placement") && (t(e).removeClass(ot), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.tooltip"),
              r = "object" == typeof n && n;
            if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return tt
          }
        }, {
          key: "NAME",
          get: function () {
            return Ge
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.tooltip"
          }
        }, {
          key: "Event",
          get: function () {
            return rt
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.tooltip"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return Ze
          }
        }]), e
      }();
    t.fn.tooltip = ht._jQueryInterface, t.fn.tooltip.Constructor = ht, t.fn.tooltip.noConflict = function () {
      return t.fn.tooltip = Ye, ht._jQueryInterface
    };
    var pt = "popover",
      gt = t.fn.popover,
      mt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      vt = s({}, ht.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      yt = s({}, ht.DefaultType, {
        content: "(string|element|function)"
      }),
      bt = "fade",
      _t = "show",
      wt = ".popover-header",
      Et = ".popover-body",
      Tt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      },
      Ct = function (e) {
        var n, i;

        function o() {
          return e.apply(this, arguments) || this
        }
        i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
        var s = o.prototype;
        return s.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, s.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-popover-" + e)
        }, s.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, s.setContent = function () {
          var e = t(this.getTipElement());
          this.setElementContent(e.find(wt), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(Et), n), e.removeClass(bt + " " + _t)
        }, s._getContent = function () {
          return this.element.getAttribute("data-content") || this.config.content
        }, s._cleanTipClass = function () {
          var e = t(this.getTipElement()),
            n = e.attr("class").match(mt);
          null !== n && n.length > 0 && e.removeClass(n.join(""))
        }, o._jQueryInterface = function (e) {
          return this.each((function () {
            var n = t(this).data("bs.popover"),
              i = "object" == typeof e ? e : null;
            if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
              n[e]()
            }
          }))
        }, r(o, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return vt
          }
        }, {
          key: "NAME",
          get: function () {
            return pt
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover"
          }
        }, {
          key: "Event",
          get: function () {
            return Tt
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.popover"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return yt
          }
        }]), o
      }(ht);
    t.fn.popover = Ct._jQueryInterface, t.fn.popover.Constructor = Ct, t.fn.popover.noConflict = function () {
      return t.fn.popover = gt, Ct._jQueryInterface
    };
    var xt = "scrollspy",
      St = t.fn[xt],
      Dt = {
        offset: 10,
        method: "auto",
        target: ""
      },
      At = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      },
      Nt = {
        ACTIVATE: "activate.bs.scrollspy",
        SCROLL: "scroll.bs.scrollspy",
        LOAD_DATA_API: "load.bs.scrollspy.data-api"
      },
      It = "dropdown-item",
      kt = "active",
      Ot = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
      },
      Lt = "offset",
      jt = "position",
      Pt = function () {
        function e(e, n) {
          var i = this;
          this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Ot.NAV_LINKS + "," + this._config.target + " " + Ot.LIST_ITEMS + "," + this._config.target + " " + Ot.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(Nt.SCROLL, (function (e) {
            return i._process(e)
          })), this.refresh(), this._process()
        }
        var n = e.prototype;
        return n.refresh = function () {
          var e = this,
            n = this._scrollElement === this._scrollElement.window ? Lt : jt,
            i = "auto" === this._config.method ? n : this._config.method,
            r = i === jt ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
            var n, o = c.getSelectorFromElement(e);
            if (o && (n = document.querySelector(o)), n) {
              var s = n.getBoundingClientRect();
              if (s.width || s.height) return [t(n)[i]().top + r, o]
            }
            return null
          })).filter((function (e) {
            return e
          })).sort((function (e, t) {
            return e[0] - t[0]
          })).forEach((function (t) {
            e._offsets.push(t[0]), e._targets.push(t[1])
          }))
        }, n.dispose = function () {
          t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, n._getConfig = function (e) {
          if ("string" != typeof (e = s({}, Dt, "object" == typeof e && e ? e : {})).target) {
            var n = t(e.target).attr("id");
            n || (n = c.getUID(xt), t(e.target).attr("id", n)), e.target = "#" + n
          }
          return c.typeCheckConfig(xt, e, At), e
        }, n._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, n._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, n._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, n._process = function () {
          var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if (this._scrollHeight !== t && this.refresh(), e >= n) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i)
          } else {
            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
          }
        }, n._activate = function (e) {
          this._activeTarget = e, this._clear();
          var n = this._selector.split(",").map((function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })),
            i = t([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass(It) ? (i.closest(Ot.DROPDOWN).find(Ot.DROPDOWN_TOGGLE).addClass(kt), i.addClass(kt)) : (i.addClass(kt), i.parents(Ot.NAV_LIST_GROUP).prev(Ot.NAV_LINKS + ", " + Ot.LIST_ITEMS).addClass(kt), i.parents(Ot.NAV_LIST_GROUP).prev(Ot.NAV_ITEMS).children(Ot.NAV_LINKS).addClass(kt)), t(this._scrollElement).trigger(Nt.ACTIVATE, {
            relatedTarget: e
          })
        }, n._clear = function () {
          [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
            return e.classList.contains(kt)
          })).forEach((function (e) {
            return e.classList.remove(kt)
          }))
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.scrollspy");
            if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "Default",
          get: function () {
            return Dt
          }
        }]), e
      }();
    t(window).on(Nt.LOAD_DATA_API, (function () {
      for (var e = [].slice.call(document.querySelectorAll(Ot.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);
        Pt._jQueryInterface.call(i, i.data())
      }
    })), t.fn[xt] = Pt._jQueryInterface, t.fn[xt].Constructor = Pt, t.fn[xt].noConflict = function () {
      return t.fn[xt] = St, Pt._jQueryInterface
    };
    var Ht = t.fn.tab,
      Mt = {
        HIDE: "hide.bs.tab",
        HIDDEN: "hidden.bs.tab",
        SHOW: "show.bs.tab",
        SHOWN: "shown.bs.tab",
        CLICK_DATA_API: "click.bs.tab.data-api"
      },
      Rt = "dropdown-menu",
      qt = "active",
      Wt = "disabled",
      Ft = "fade",
      Bt = "show",
      Ut = ".dropdown",
      Vt = ".nav, .list-group",
      Kt = ".active",
      zt = "> li > .active",
      Qt = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      $t = ".dropdown-toggle",
      Gt = "> .dropdown-menu .active",
      Yt = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.show = function () {
          var e = this;
          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(qt) || t(this._element).hasClass(Wt))) {
            var n, i, r = t(this._element).closest(Vt)[0],
              o = c.getSelectorFromElement(this._element);
            if (r) {
              var s = "UL" === r.nodeName || "OL" === r.nodeName ? zt : Kt;
              i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
            }
            var a = t.Event(Mt.HIDE, {
                relatedTarget: this._element
              }),
              l = t.Event(Mt.SHOW, {
                relatedTarget: i
              });
            if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
              o && (n = document.querySelector(o)), this._activate(this._element, r);
              var u = function () {
                var n = t.Event(Mt.HIDDEN, {
                    relatedTarget: e._element
                  }),
                  r = t.Event(Mt.SHOWN, {
                    relatedTarget: i
                  });
                t(i).trigger(n), t(e._element).trigger(r)
              };
              n ? this._activate(n, n.parentNode, u) : u()
            }
          }
        }, n.dispose = function () {
          t.removeData(this._element, "bs.tab"), this._element = null
        }, n._activate = function (e, n, i) {
          var r = this,
            o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Kt) : t(n).find(zt))[0],
            s = i && o && t(o).hasClass(Ft),
            a = function () {
              return r._transitionComplete(e, o, i)
            };
          if (o && s) {
            var l = c.getTransitionDurationFromElement(o);
            t(o).removeClass(Bt).one(c.TRANSITION_END, a).emulateTransitionEnd(l)
          } else a()
        }, n._transitionComplete = function (e, n, i) {
          if (n) {
            t(n).removeClass(qt);
            var r = t(n.parentNode).find(Gt)[0];
            r && t(r).removeClass(qt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
          }
          if (t(e).addClass(qt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(Ft) && e.classList.add(Bt), e.parentNode && t(e.parentNode).hasClass(Rt)) {
            var o = t(e).closest(Ut)[0];
            if (o) {
              var s = [].slice.call(o.querySelectorAll($t));
              t(s).addClass(qt)
            }
            e.setAttribute("aria-expanded", !0)
          }
          i && i()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              r = i.data("bs.tab");
            if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
              if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
              r[n]()
            }
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }]), e
      }();
    t(document).on(Mt.CLICK_DATA_API, Qt, (function (e) {
      e.preventDefault(), Yt._jQueryInterface.call(t(this), "show")
    })), t.fn.tab = Yt._jQueryInterface, t.fn.tab.Constructor = Yt, t.fn.tab.noConflict = function () {
      return t.fn.tab = Ht, Yt._jQueryInterface
    };
    var Xt = t.fn.toast,
      Jt = {
        CLICK_DISMISS: "click.dismiss.bs.toast",
        HIDE: "hide.bs.toast",
        HIDDEN: "hidden.bs.toast",
        SHOW: "show.bs.toast",
        SHOWN: "shown.bs.toast"
      },
      Zt = "fade",
      en = "hide",
      tn = "show",
      nn = "showing",
      rn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      },
      on = {
        animation: !0,
        autohide: !0,
        delay: 500
      },
      sn = '[data-dismiss="toast"]',
      an = function () {
        function e(e, t) {
          this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
        }
        var n = e.prototype;
        return n.show = function () {
          var e = this;
          t(this._element).trigger(Jt.SHOW), this._config.animation && this._element.classList.add(Zt);
          var n = function () {
            e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Jt.SHOWN), e._config.autohide && e.hide()
          };
          if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
            var i = c.getTransitionDurationFromElement(this._element);
            t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
          } else n()
        }, n.hide = function (e) {
          var n = this;
          this._element.classList.contains(tn) && (t(this._element).trigger(Jt.HIDE), e ? this._close() : this._timeout = setTimeout((function () {
            n._close()
          }), this._config.delay))
        }, n.dispose = function () {
          clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Jt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
        }, n._getConfig = function (e) {
          return e = s({}, on, t(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
        }, n._setListeners = function () {
          var e = this;
          t(this._element).on(Jt.CLICK_DISMISS, sn, (function () {
            return e.hide(!0)
          }))
        }, n._close = function () {
          var e = this,
            n = function () {
              e._element.classList.add(en), t(e._element).trigger(Jt.HIDDEN)
            };
          if (this._element.classList.remove(tn), this._config.animation) {
            var i = c.getTransitionDurationFromElement(this._element);
            t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
          } else n()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              r = i.data("bs.toast");
            if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
              if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
              r[n](this)
            }
          }))
        }, r(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.3.1"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return rn
          }
        }, {
          key: "Default",
          get: function () {
            return on
          }
        }]), e
      }();
    t.fn.toast = an._jQueryInterface, t.fn.toast.Constructor = an, t.fn.toast.noConflict = function () {
        return t.fn.toast = Xt, an._jQueryInterface
      },
      function () {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }(), e.Util = c, e.Alert = g, e.Button = S, e.Carousel = Q, e.Collapse = se, e.Dropdown = ke, e.Modal = Ue, e.Popover = Ct, e.Scrollspy = Pt, e.Tab = Yt, e.Toast = an, e.Tooltip = ht, Object.defineProperty(e, "__esModule", {
        value: !0
      })
  }(t, n(5), n(0))
}, function (e, t, n) {
  var i;
  ! function (t, n) {
    "use strict";
    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, (function (n, r) {
    "use strict";
    var o = [],
      s = n.document,
      a = Object.getPrototypeOf,
      l = o.slice,
      c = o.concat,
      u = o.push,
      f = o.indexOf,
      d = {},
      h = d.toString,
      p = d.hasOwnProperty,
      g = p.toString,
      m = g.call(Object),
      v = {},
      y = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      b = function (e) {
        return null != e && e === e.window
      },
      _ = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

    function w(e, t, n) {
      var i, r, o = (n = n || s).createElement("script");
      if (o.text = e, t)
        for (i in _)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
      n.head.appendChild(o).parentNode.removeChild(o)
    }

    function E(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
    }
    var T = function (e, t) {
        return new T.fn.init(e, t)
      },
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) {
      var t = !!e && "length" in e && e.length,
        n = E(e);
      return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    T.fn = T.prototype = {
      jquery: "3.4.1",
      constructor: T,
      length: 0,
      toArray: function () {
        return l.call(this)
      },
      get: function (e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function (e) {
        var t = T.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function (e) {
        return T.each(this, e)
      },
      map: function (e) {
        return this.pushStack(T.map(this, (function (t, n) {
          return e.call(t, n, t)
        })))
      },
      slice: function () {
        return this.pushStack(l.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: u,
      sort: o.sort,
      splice: o.splice
    }, T.extend = T.fn.extend = function () {
      var e, t, n, i, r, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[t] = T.extend(c, o, i)) : void 0 !== i && (s[t] = i));
      return s
    }, T.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && g.call(n) === m)
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function (e, t) {
        w(e, {
          nonce: t && t.nonce
        })
      },
      each: function (e, t) {
        var n, i = 0;
        if (x(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(C, "")
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (x(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : f.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return e.length = r, e
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
        return i
      },
      map: function (e, t, n) {
        var i, r, o = 0,
          s = [];
        if (x(e))
          for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
        else
          for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
        return c.apply([], s)
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
      d["[object " + t + "]"] = t.toLowerCase()
    }));
    var S = function (e) {
      var t, n, i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
        w = e.document,
        E = 0,
        T = 0,
        C = le(),
        x = le(),
        S = le(),
        D = le(),
        A = function (e, t) {
          return e === t && (f = !0), 0
        },
        N = {}.hasOwnProperty,
        I = [],
        k = I.pop,
        O = I.push,
        L = I.push,
        j = I.slice,
        P = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        q = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        U = new RegExp("^" + M + "*," + M + "*"),
        V = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        K = new RegExp(M + "|>"),
        z = new RegExp(W),
        Q = new RegExp("^" + R + "$"),
        $ = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + q),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
        G = /HTML$/i,
        Y = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        re = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        oe = function () {
          d()
        },
        se = _e((function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }), {
          dir: "parentNode",
          next: "legend"
        });
      try {
        L.apply(I = j.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
      } catch (e) {
        L = {
          apply: I.length ? function (e, t) {
            O.apply(e, j.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }

      function ae(e, t, i, r) {
        var o, a, c, u, f, p, v, y = t && t.ownerDocument,
          E = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return i;
        if (!r && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
          if (11 !== E && (f = Z.exec(e)))
            if (o = f[1]) {
              if (9 === E) {
                if (!(c = t.getElementById(o))) return i;
                if (c.id === o) return i.push(c), i
              } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
            } else {
              if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
            } if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === E && K.test(e)) {
              for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = _), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + be(p[a]);
              v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
            }
            try {
              return L.apply(i, y.querySelectorAll(v)), i
            } catch (t) {
              D(e, !0)
            } finally {
              u === _ && t.removeAttribute("id")
            }
          }
        }
        return l(e.replace(B, "$1"), t, i, r)
      }

      function le() {
        var e = [];
        return function t(n, r) {
          return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
        }
      }

      function ce(e) {
        return e[_] = !0, e
      }

      function ue(e) {
        var t = h.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function fe(e, t) {
        for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
      }

      function de(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function he(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function me(e) {
        return ce((function (t) {
          return t = +t, ce((function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
          }))
        }))
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }
      for (t in n = ae.support = {}, o = ae.isXML = function (e) {
          var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
          return !G.test(t || n && n.nodeName || "HTML")
        }, d = ae.setDocument = function (e) {
          var t, r, s = e ? e.ownerDocument || e : w;
          return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ue((function (e) {
            return e.className = "i", !e.getAttribute("className")
          })), n.getElementsByTagName = ue((function (e) {
            return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
          })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function (e) {
            return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
          })), n.getById ? (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n, i, r, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function (e, t) {
            var n, i = [],
              r = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[r++];) 1 === n.nodeType && i.push(n);
              return i
            }
            return o
          }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
          }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function (e) {
            p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
          })), ue((function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = h.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
          }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W)
          })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
          } : function (e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, A = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n, i = 0,
              r = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
            if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
            if (r === o) return de(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (; s[i] === a[i];) i++;
            return i ? de(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
          }, h) : h
        }, ae.matches = function (e, t) {
          return ae(e, null, null, t)
        }, ae.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== h && d(e), n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
            var i = y.call(e, t);
            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
          } catch (e) {
            D(t, !0)
          }
          return ae(t, h, null, [e]).length > 0
        }, ae.contains = function (e, t) {
          return (e.ownerDocument || e) !== h && d(e), b(e, t)
        }, ae.attr = function (e, t) {
          (e.ownerDocument || e) !== h && d(e);
          var r = i.attrHandle[t.toLowerCase()],
            o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, ae.escape = function (e) {
          return (e + "").replace(ie, re)
        }, ae.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function (e) {
          var t, i = [],
            r = 0,
            o = 0;
          if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), f) {
            for (; t = e[o++];) t === e[o] && (r = i.push(o));
            for (; r--;) e.splice(i[r], 1)
          }
          return u = null, e
        }, r = ae.getText = function (e) {
          var t, n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else
            for (; t = e[i++];) n += r(t);
          return n
        }, (i = ae.selectors = {
          cacheLength: 50,
          createPseudo: ce,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
            },
            PSEUDO: function (e) {
              var t, n = !e[6] && e[2];
              return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function (e) {
              var t = C[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, (function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              }))
            },
            ATTR: function (e, t, n) {
              return function (i) {
                var r = ae.attr(i, e);
                return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function (e, t, n, i, r) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === i && 0 === r ? function (e) {
                return !!e.parentNode
              } : function (t, n, l) {
                var c, u, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;
                if (m) {
                  if (o) {
                    for (; g;) {
                      for (d = t; d = d[g];)
                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                      p = g = "only" === e && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [s ? m.firstChild : m.lastChild], s && y) {
                    for (b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                      if (1 === d.nodeType && ++b && d === t) {
                        u[e] = [E, h, b];
                        break
                      }
                  } else if (y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b)
                    for (;
                      (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, b]), d !== t)););
                  return (b -= r) === i || b % i == 0 && b / i >= 0
                }
              }
            },
            PSEUDO: function (e, t) {
              var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
              return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
              })) : function (e) {
                return r(e, 0, n)
              }) : r
            }
          },
          pseudos: {
            not: ce((function (e) {
              var t = [],
                n = [],
                i = a(e.replace(B, "$1"));
              return i[_] ? ce((function (e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
              })) : function (e, r, o) {
                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
              }
            })),
            has: ce((function (e) {
              return function (t) {
                return ae(e, t).length > 0
              }
            })),
            contains: ce((function (e) {
              return e = e.replace(te, ne),
                function (t) {
                  return (t.textContent || r(t)).indexOf(e) > -1
                }
            })),
            lang: ce((function (e) {
              return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                function (t) {
                  var n;
                  do {
                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            })),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function (e) {
              return e === p
            },
            focus: function (e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function (e) {
              return !i.pseudos.empty(e)
            },
            header: function (e) {
              return X.test(e.nodeName)
            },
            input: function (e) {
              return Y.test(e.nodeName)
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: me((function () {
              return [0]
            })),
            last: me((function (e, t) {
              return [t - 1]
            })),
            eq: me((function (e, t, n) {
              return [n < 0 ? n + t : n]
            })),
            even: me((function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            })),
            odd: me((function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            })),
            lt: me((function (e, t, n) {
              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
              return e
            })),
            gt: me((function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e
            }))
          }
        }).pseudos.nth = i.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) i.pseudos[t] = he(t);
      for (t in {
          submit: !0,
          reset: !0
        }) i.pseudos[t] = pe(t);

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function _e(e, t, n) {
        var i = t.dir,
          r = t.next,
          o = r || i,
          s = n && "parentNode" === o,
          a = T++;
        return t.first ? function (t, n, r) {
          for (; t = t[i];)
            if (1 === t.nodeType || s) return e(t, n, r);
          return !1
        } : function (t, n, l) {
          var c, u, f, d = [E, a];
          if (l) {
            for (; t = t[i];)
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || s)
                if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                else {
                  if ((c = u[o]) && c[0] === E && c[1] === a) return d[2] = c[2];
                  if (u[o] = d, d[2] = e(t, n, l)) return !0
                } return !1
        }
      }

      function we(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var r = e.length; r--;)
            if (!e[r](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function Ee(e, t, n, i, r) {
        for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
        return s
      }

      function Te(e, t, n, i, r, o) {
        return i && !i[_] && (i = Te(i)), r && !r[_] && (r = Te(r, o)), ce((function (o, s, a, l) {
          var c, u, f, d = [],
            h = [],
            p = s.length,
            g = o || function (e, t, n) {
              for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
              return n
            }(t || "*", a.nodeType ? [a] : a, []),
            m = !e || !o && t ? g : Ee(g, d, e, a, l),
            v = n ? r || (o ? e : p || i) ? [] : s : m;
          if (n && n(m, v, a, l), i)
            for (c = Ee(v, h), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
          if (o) {
            if (r || e) {
              if (r) {
                for (c = [], u = v.length; u--;)(f = v[u]) && c.push(m[u] = f);
                r(null, v = [], c, l)
              }
              for (u = v.length; u--;)(f = v[u]) && (c = r ? P(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f))
            }
          } else v = Ee(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
        }))
      }

      function Ce(e) {
        for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) {
            return e === t
          }), a, !0), f = _e((function (e) {
            return P(t, e) > -1
          }), a, !0), d = [function (e, n, i) {
            var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
            return t = null, r
          }]; l < o; l++)
          if (n = i.relative[e[l].type]) d = [_e(we(d), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
              for (r = ++l; r < o && !i.relative[e[r].type]; r++);
              return Te(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(B, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && be(e))
            }
            d.push(n)
          } return we(d)
      }
      return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
        var n, r, o, s, a, l, c, u = x[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (a = e, l = [], c = i.preFilter; a;) {
          for (s in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = V.exec(a)) && (n = r.shift(), o.push({
              value: n,
              type: r[0].replace(B, " ")
            }), a = a.slice(n.length)), i.filter) !(r = $[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
            value: n,
            type: s,
            matches: r
          }), a = a.slice(n.length));
          if (!n) break
        }
        return t ? a.length : a ? ae.error(e) : x(e, l).slice(0)
      }, a = ae.compile = function (e, t) {
        var n, r = [],
          o = [],
          a = S[e + " "];
        if (!a) {
          for (t || (t = s(e)), n = t.length; n--;)(a = Ce(t[n]))[_] ? r.push(a) : o.push(a);
          (a = S(e, function (e, t) {
            var n = t.length > 0,
              r = e.length > 0,
              o = function (o, s, a, l, u) {
                var f, p, m, v = 0,
                  y = "0",
                  b = o && [],
                  _ = [],
                  w = c,
                  T = o || r && i.find.TAG("*", u),
                  C = E += null == w ? 1 : Math.random() || .1,
                  x = T.length;
                for (u && (c = s === h || s || u); y !== x && null != (f = T[y]); y++) {
                  if (r && f) {
                    for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); m = e[p++];)
                      if (m(f, s || h, a)) {
                        l.push(f);
                        break
                      } u && (E = C)
                  }
                  n && ((f = !m && f) && v--, o && b.push(f))
                }
                if (v += y, n && y !== v) {
                  for (p = 0; m = t[p++];) m(b, _, s, a);
                  if (o) {
                    if (v > 0)
                      for (; y--;) b[y] || _[y] || (_[y] = k.call(l));
                    _ = Ee(_)
                  }
                  L.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                }
                return u && (E = C, c = w), b
              };
            return n ? ce(o) : o
          }(o, r))).selector = e
        }
        return a
      }, l = ae.select = function (e, t, n, r) {
        var o, l, c, u, f, d = "function" == typeof e && e,
          h = !r && s(e = d.selector || e);
        if (n = n || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
            d && (t = t.parentNode), e = e.slice(l.shift().value.length)
          }
          for (o = $.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
            if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = r.length && be(l))) return L.apply(n, r), n;
              break
            }
        }
        return (d || a(e, h))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
      }, n.sortStable = _.split("").sort(A).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
      })), ue((function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      })) || fe("type|href|height|width", (function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      })), n.attributes && ue((function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      })) || fe("value", (function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      })), ue((function (e) {
        return null == e.getAttribute("disabled")
      })) || fe(H, (function (e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      })), ae
    }(n);
    T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
    var D = function (e, t, n) {
        for (var i = [], r = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (r && T(e).is(n)) break;
            i.push(e)
          } return i
      },
      A = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      N = T.expr.match.needsContext;

    function I(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
      return y(t) ? T.grep(e, (function (e, i) {
        return !!t.call(e, i, e) !== n
      })) : t.nodeType ? T.grep(e, (function (e) {
        return e === t !== n
      })) : "string" != typeof t ? T.grep(e, (function (e) {
        return f.call(t, e) > -1 !== n
      })) : T.filter(t, e, n)
    }
    T.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, (function (e) {
        return 1 === e.nodeType
      })))
    }, T.fn.extend({
      find: function (e) {
        var t, n, i = this.length,
          r = this;
        if ("string" != typeof e) return this.pushStack(T(e).filter((function () {
          for (t = 0; t < i; t++)
            if (T.contains(r[t], this)) return !0
        })));
        for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
        return i > 1 ? T.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(O(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(O(this, e || [], !0))
      },
      is: function (e) {
        return !!O(this, "string" == typeof e && N.test(e) ? T(e) : e || [], !1).length
      }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (e, t, n) {
      var i, r;
      if (!e) return this;
      if (n = n || L, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), k.test(i[1]) && T.isPlainObject(t))
            for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return (r = s.getElementById(i[2])) && (this[0] = r, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
    }).prototype = T.fn, L = T(s);
    var P = /^(?:parents|prev(?:Until|All))/,
      H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function M(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    T.fn.extend({
      has: function (e) {
        var t = T(e, this),
          n = t.length;
        return this.filter((function () {
          for (var e = 0; e < n; e++)
            if (T.contains(this, t[e])) return !0
        }))
      },
      closest: function (e, t) {
        var n, i = 0,
          r = this.length,
          o = [],
          s = "string" != typeof e && T(e);
        if (!N.test(e))
          for (; i < r; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break
              } return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
      },
      index: function (e) {
        return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), T.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function (e) {
        return D(e, "parentNode")
      },
      parentsUntil: function (e, t, n) {
        return D(e, "parentNode", n)
      },
      next: function (e) {
        return M(e, "nextSibling")
      },
      prev: function (e) {
        return M(e, "previousSibling")
      },
      nextAll: function (e) {
        return D(e, "nextSibling")
      },
      prevAll: function (e) {
        return D(e, "previousSibling")
      },
      nextUntil: function (e, t, n) {
        return D(e, "nextSibling", n)
      },
      prevUntil: function (e, t, n) {
        return D(e, "previousSibling", n)
      },
      siblings: function (e) {
        return A((e.parentNode || {}).firstChild, e)
      },
      children: function (e) {
        return A(e.firstChild)
      },
      contents: function (e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (I(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
      }
    }, (function (e, t) {
      T.fn[e] = function (n, i) {
        var r = T.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (H[e] || T.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r)
      }
    }));
    var R = /[^\x20\t\r\n\f]+/g;

    function q(e) {
      return e
    }

    function W(e) {
      throw e
    }

    function F(e, t, n, i) {
      var r;
      try {
        e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
    T.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return T.each(e.match(R) || [], (function (e, n) {
          t[n] = !0
        })), t
      }(e) : T.extend({}, e);
      var t, n, i, r, o = [],
        s = [],
        a = -1,
        l = function () {
          for (r = r || e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
        },
        c = {
          add: function () {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              T.each(n, (function (n, i) {
                y(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== E(i) && t(i)
              }))
            }(arguments), n && !t && l()), this
          },
          remove: function () {
            return T.each(arguments, (function (e, t) {
              for (var n;
                (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
            })), this
          },
          has: function (e) {
            return e ? T.inArray(e, o) > -1 : o.length > 0
          },
          empty: function () {
            return o && (o = []), this
          },
          disable: function () {
            return r = s = [], o = n = "", this
          },
          disabled: function () {
            return !o
          },
          lock: function () {
            return r = s = [], n || t || (o = n = ""), this
          },
          locked: function () {
            return !!r
          },
          fireWith: function (e, n) {
            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
          },
          fire: function () {
            return c.fireWith(this, arguments), this
          },
          fired: function () {
            return !!i
          }
        };
      return c
    }, T.extend({
      Deferred: function (e) {
        var t = [
            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          r = {
            state: function () {
              return i
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return r.then(null, e)
            },
            pipe: function () {
              var e = arguments;
              return T.Deferred((function (n) {
                T.each(t, (function (t, i) {
                  var r = y(e[i[4]]) && e[i[4]];
                  o[i[1]]((function () {
                    var e = r && r.apply(this, arguments);
                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                  }))
                })), e = null
              })).promise()
            },
            then: function (e, i, r) {
              var o = 0;

              function s(e, t, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var n, c;
                      if (!(e < o)) {
                        if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        c = n && ("object" == typeof n || "function" == typeof n) && n.then, y(c) ? r ? c.call(n, s(o, t, q, r), s(o, t, W, r)) : (o++, c.call(n, s(o, t, q, r), s(o, t, W, r), s(o, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (r || t.resolveWith)(a, l))
                      }
                    },
                    u = r ? c : function () {
                      try {
                        c()
                      } catch (n) {
                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== W && (a = void 0, l = [n]), t.rejectWith(a, l))
                      }
                    };
                  e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), n.setTimeout(u))
                }
              }
              return T.Deferred((function (n) {
                t[0][3].add(s(0, n, y(r) ? r : q, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : q)), t[2][3].add(s(0, n, y(i) ? i : W))
              })).promise()
            },
            promise: function (e) {
              return null != e ? T.extend(e, r) : r
            }
          },
          o = {};
        return T.each(t, (function (e, n) {
          var s = n[2],
            a = n[5];
          r[n[1]] = s.add, a && s.add((function () {
            i = a
          }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[n[0] + "With"] = s.fireWith
        })), r.promise(o), e && e.call(o, o), o
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = l.call(arguments),
          o = T.Deferred(),
          s = function (e) {
            return function (n) {
              i[e] = this, r[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(i, r)
            }
          };
        if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(r[n] && r[n].then))) return o.then();
        for (; n--;) F(r[n], s(n), o.reject);
        return o.promise()
      }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, T.readyException = function (e) {
      n.setTimeout((function () {
        throw e
      }))
    };
    var U = T.Deferred();

    function V() {
      s.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), T.ready()
    }
    T.fn.ready = function (e) {
      return U.then(e).catch((function (e) {
        T.readyException(e)
      })), this
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || U.resolveWith(s, [T]))
      }
    }), T.ready.then = U.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
    var K = function (e, t, n, i, r, o, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === E(n))
          for (a in r = !0, n) K(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(T(e), n)
          })), t))
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
      },
      z = /^-ms-/,
      Q = /-([a-z])/g;

    function $(e, t) {
      return t.toUpperCase()
    }

    function G(e) {
      return e.replace(z, "ms-").replace(Q, $)
    }
    var Y = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
      this.expando = T.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function (e, t, n) {
        var i, r = this.cache(e);
        if ("string" == typeof t) r[G(t)] = n;
        else
          for (i in t) r[G(i)] = t[i];
        return r
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(R) || []).length;
            for (; n--;) delete i[t[n]]
          }(void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t)
      }
    };
    var J = new X,
      Z = new X,
      ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      te = /[A-Z]/g;

    function ne(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (e) {}
          Z.set(e, t, n)
        } else n = void 0;
      return n
    }
    T.extend({
      hasData: function (e) {
        return Z.hasData(e) || J.hasData(e)
      },
      data: function (e, t, n) {
        return Z.access(e, t, n)
      },
      removeData: function (e, t) {
        Z.remove(e, t)
      },
      _data: function (e, t, n) {
        return J.access(e, t, n)
      },
      _removeData: function (e, t) {
        J.remove(e, t)
      }
    }), T.fn.extend({
      data: function (e, t) {
        var n, i, r, o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (r = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), ne(o, i, r[i]));
            J.set(o, "hasDataAttrs", !0)
          }
          return r
        }
        return "object" == typeof e ? this.each((function () {
          Z.set(this, e)
        })) : K(this, (function (t) {
          var n;
          if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
          this.each((function () {
            Z.set(this, e, t)
          }))
        }), null, t, arguments.length > 1, null, !0)
      },
      removeData: function (e) {
        return this.each((function () {
          Z.remove(this, e)
        }))
      }
    }), T.extend({
      queue: function (e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, T.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = T._queueHooks(e, t);
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
          T.dequeue(e, t)
        }), o)), !i && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return J.get(e, n) || J.access(e, n, {
          empty: T.Callbacks("once memory").add((function () {
            J.remove(e, [t + "queue", n])
          }))
        })
      }
    }), T.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function () {
          var n = T.queue(this, e, t);
          T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
        }))
      },
      dequeue: function (e) {
        return this.each((function () {
          T.dequeue(this, e)
        }))
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n, i = 1,
          r = T.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(t)
      }
    });
    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      se = s.documentElement,
      ae = function (e) {
        return T.contains(e.ownerDocument, e)
      },
      le = {
        composed: !0
      };
    se.getRootNode && (ae = function (e) {
      return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
    });
    var ce = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display")
      },
      ue = function (e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r
      };

    function fe(e, t, n, i) {
      var r, o, s = 20,
        a = i ? function () {
          return i.cur()
        } : function () {
          return T.css(e, t, "")
        },
        l = a(),
        c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
        u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && re.exec(T.css(e, t));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; s--;) T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
        u *= 2, T.style(e, t, u + c), n = n || []
      }
      return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var de = {};

    function he(e) {
      var t, n = e.ownerDocument,
        i = e.nodeName,
        r = de[i];
      return r || (t = n.body.appendChild(n.createElement(i)), r = T.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
    }

    function pe(e, t) {
      for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[o] = he(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
      for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
      return e
    }
    T.fn.extend({
      show: function () {
        return pe(this, !0)
      },
      hide: function () {
        return pe(this)
      },
      toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
          ce(this) ? T(this).show() : T(this).hide()
        }))
      }
    });
    var ge = /^(?:checkbox|radio)$/i,
      me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ve = /^$|^module$|\/(?:java|ecma)script/i,
      ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && I(e, t) ? T.merge([e], n) : n
    }

    function _e(e, t) {
      for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
    var we, Ee, Te = /<|&#?\w+;/;

    function Ce(e, t, n, i, r) {
      for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
        if ((o = e[h]) || 0 === o)
          if ("object" === E(o)) T.merge(d, o.nodeType ? [o] : o);
          else if (Te.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
        T.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      for (f.textContent = "", h = 0; o = d[h++];)
        if (i && T.inArray(o, i) > -1) r && r.push(o);
        else if (c = ae(o), s = be(f.appendChild(o), "script"), c && _e(s), n)
        for (u = 0; o = s[u++];) ve.test(o.type || "") && n.push(o);
      return f
    }
    we = s.createDocumentFragment().appendChild(s.createElement("div")), (Ee = s.createElement("input")).setAttribute("type", "radio"), Ee.setAttribute("checked", "checked"), Ee.setAttribute("name", "t"), we.appendChild(Ee), v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var xe = /^key/,
      Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      De = /^([^.]*)(?:\.(.+)|)/;

    function Ae() {
      return !0
    }

    function Ne() {
      return !1
    }

    function Ie(e, t) {
      return e === function () {
        try {
          return s.activeElement
        } catch (e) {}
      }() == ("focus" === t)
    }

    function ke(e, t, n, i, r, o) {
      var s, a;
      if ("object" == typeof t) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], o);
        return e
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ne;
      else if (!r) return e;
      return 1 === o && (s = r, (r = function (e) {
        return T().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = T.guid++)), e.each((function () {
        T.event.add(this, t, r, i, n)
      }))
    }

    function Oe(e, t, n) {
      n ? (J.set(e, t, !1), T.event.add(e, t, {
        namespace: !1,
        handler: function (e) {
          var i, r, o = J.get(this, t);
          if (1 & e.isTrigger && this[t]) {
            if (o.length)(T.event.special[t] || {}).delegateType && e.stopPropagation();
            else if (o = l.call(arguments), J.set(this, t, o), i = n(this, t), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
          } else o.length && (J.set(this, t, {
            value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
          }), e.stopImmediatePropagation())
        }
      })) : void 0 === J.get(e, t) && T.event.add(e, t, Ae)
    }
    T.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var o, s, a, l, c, u, f, d, h, p, g, m = J.get(e);
        if (m)
          for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(se, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
              return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(R) || [""]).length; c--;) h = g = (a = De.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, u = T.extend({
            type: h,
            origType: g,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && T.expr.match.needsContext.test(r),
            namespace: p.join(".")
          }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), T.event.global[h] = !0)
      },
      remove: function (e, t, n, i, r) {
        var o, s, a, l, c, u, f, d, h, p, g, m = J.hasData(e) && J.get(e);
        if (m && (l = m.events)) {
          for (c = (t = (t || "").match(R) || [""]).length; c--;)
            if (h = g = (a = De.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
              for (f = T.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
              s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
            } else
              for (h in l) T.event.remove(e, h + t[c], n, i, !0);
          T.isEmptyObject(l) && J.remove(e, "handle events")
        }
      },
      dispatch: function (e) {
        var t, n, i, r, o, s, a = T.event.fix(e),
          l = new Array(arguments.length),
          c = (J.get(this, "events") || {})[a.type] || [],
          u = T.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
          for (s = T.event.handlers.call(this, a, c), t = 0;
            (r = s[t++]) && !a.isPropagationStopped();)
            for (a.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, a), a.result
        }
      },
      handlers: function (e, t) {
        var n, i, r, o, s, a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? T(r, this).index(c) > -1 : T.find(r, this, null, [c]).length), s[r] && o.push(i);
              o.length && a.push({
                elem: c,
                handlers: o
              })
            } return c = this, l < t.length && a.push({
          elem: c,
          handlers: t.slice(l)
        }), a
      },
      addProp: function (e, t) {
        Object.defineProperty(T.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function (e) {
        return e[T.expando] ? e : new T.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function (e) {
            var t = this || e;
            return ge.test(t.type) && t.click && I(t, "input") && Oe(t, "click", Ae), !1
          },
          trigger: function (e) {
            var t = this || e;
            return ge.test(t.type) && t.click && I(t, "input") && Oe(t, "click"), !0
          },
          _default: function (e) {
            var t = e.target;
            return ge.test(t.type) && t.click && I(t, "input") && J.get(t, "click") || I(t, "a")
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ne,
      isPropagationStopped: Ne,
      isImmediatePropagationStopped: Ne,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (e) {
        var t = e.button;
        return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, T.event.addProp), T.each({
      focus: "focusin",
      blur: "focusout"
    }, (function (e, t) {
      T.event.special[e] = {
        setup: function () {
          return Oe(this, e, Ie), !1
        },
        trigger: function () {
          return Oe(this, e), !0
        },
        delegateType: t
      }
    })), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, (function (e, t) {
      T.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n, i = this,
            r = e.relatedTarget,
            o = e.handleObj;
          return r && (r === i || T.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    })), T.fn.extend({
      on: function (e, t, n, i) {
        return ke(this, e, t, n, i)
      },
      one: function (e, t, n, i) {
        return ke(this, e, t, n, i, 1)
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each((function () {
          T.event.remove(this, e, n, t)
        }))
      }
    });
    var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      je = /<script|<style|<link/i,
      Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
      return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }

    function Re(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function We(e, t) {
      var n, i, r, o, s, a, l, c;
      if (1 === t.nodeType) {
        if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), c = o.events))
          for (r in delete s.handle, s.events = {}, c)
            for (n = 0, i = c[r].length; n < i; n++) T.event.add(t, r, c[r][n]);
        Z.hasData(e) && (a = Z.access(e), l = T.extend({}, a), Z.set(t, l))
      }
    }

    function Fe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Be(e, t, n, i) {
      t = c.apply([], t);
      var r, o, s, a, l, u, f = 0,
        d = e.length,
        h = d - 1,
        p = t[0],
        g = y(p);
      if (g || d > 1 && "string" == typeof p && !v.checkClone && Pe.test(p)) return e.each((function (r) {
        var o = e.eq(r);
        g && (t[0] = p.call(this, r, o.html())), Be(o, t, n, i)
      }));
      if (d && (o = (r = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
        for (a = (s = T.map(be(r, "script"), Re)).length; f < d; f++) l = r, f !== h && (l = T.clone(l, !0, !0), a && T.merge(s, be(l, "script"))), n.call(e[f], l, f);
        if (a)
          for (u = s[s.length - 1].ownerDocument, T.map(s, qe), f = 0; f < a; f++) l = s[f], ve.test(l.type || "") && !J.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : w(l.textContent.replace(He, ""), l, u))
      }
      return e
    }

    function Ue(e, t, n) {
      for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(be(i)), i.parentNode && (n && ae(i) && _e(be(i, "script")), i.parentNode.removeChild(i));
      return e
    }
    T.extend({
      htmlPrefilter: function (e) {
        return e.replace(Le, "<$1></$2>")
      },
      clone: function (e, t, n) {
        var i, r, o, s, a = e.cloneNode(!0),
          l = ae(e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
          for (s = be(a), i = 0, r = (o = be(e)).length; i < r; i++) Fe(o[i], s[i]);
        if (t)
          if (n)
            for (o = o || be(e), s = s || be(a), i = 0, r = o.length; i < r; i++) We(o[i], s[i]);
          else We(e, a);
        return (s = be(a, "script")).length > 0 && _e(s, !l && be(e, "script")), a
      },
      cleanData: function (e) {
        for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (Y(n)) {
            if (t = n[J.expando]) {
              if (t.events)
                for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
              n[J.expando] = void 0
            }
            n[Z.expando] && (n[Z.expando] = void 0)
          }
      }
    }), T.fn.extend({
      detach: function (e) {
        return Ue(this, e, !0)
      },
      remove: function (e) {
        return Ue(this, e)
      },
      text: function (e) {
        return K(this, (function (e) {
          return void 0 === e ? T.text(this) : this.empty().each((function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          }))
        }), null, e, arguments.length)
      },
      append: function () {
        return Be(this, arguments, (function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
        }))
      },
      prepend: function () {
        return Be(this, arguments, (function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Me(this, e);
            t.insertBefore(e, t.firstChild)
          }
        }))
      },
      before: function () {
        return Be(this, arguments, (function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        }))
      },
      after: function () {
        return Be(this, arguments, (function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        }))
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
        return this
      },
      clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map((function () {
          return T.clone(this, e, t)
        }))
      },
      html: function (e) {
        return K(this, (function (e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !je.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = T.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }), null, e, arguments.length)
      },
      replaceWith: function () {
        var e = [];
        return Be(this, arguments, (function (t) {
          var n = this.parentNode;
          T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this))
        }), e)
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, (function (e, t) {
      T.fn[e] = function (e) {
        for (var n, i = [], r = T(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), T(r[s])[t](n), u.apply(i, n.get());
        return this.pushStack(i)
      }
    }));
    var Ve = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
      Ke = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      ze = new RegExp(oe.join("|"), "i");

    function Qe(e, t, n) {
      var i, r, o, s, a = e.style;
      return (n = n || Ke(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = T.style(e, t)), !v.pixelBoxStyles() && Ve.test(s) && ze.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function $e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function () {
      function e() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
          var e = n.getComputedStyle(u);
          i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var i, r, o, a, l, c = s.createElement("div"),
        u = s.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), a
        },
        pixelPosition: function () {
          return e(), i
        },
        reliableMarginLeft: function () {
          return e(), l
        },
        scrollboxSize: function () {
          return e(), o
        }
      }))
    }();
    var Ge = ["Webkit", "Moz", "ms"],
      Ye = s.createElement("div").style,
      Xe = {};

    function Je(e) {
      var t = T.cssProps[e] || Xe[e];
      return t || (e in Ye ? e : Xe[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
          if ((e = Ge[n] + t) in Ye) return e
      }(e) || e)
    }
    var Ze = /^(none|table(?!-c[ea]).+)/,
      et = /^--/,
      tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      nt = {
        letterSpacing: "0",
        fontWeight: "400"
      };

    function it(e, t, n) {
      var i = re.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function rt(e, t, n, i, r, o) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + oe[s], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= T.css(e, "border" + oe[s] + "Width", !0, r))) : (l += T.css(e, "padding" + oe[s], !0, r), "padding" !== n ? l += T.css(e, "border" + oe[s] + "Width", !0, r) : a += T.css(e, "border" + oe[s] + "Width", !0, r));
      return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
    }

    function ot(e, t, n) {
      var i = Ke(e),
        r = (!v.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
        o = r,
        s = Qe(e, t, i),
        a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Ve.test(s)) {
        if (!n) return s;
        s = "auto"
      }
      return (!v.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + rt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function st(e, t, n, i, r) {
      return new st.prototype.init(e, t, n, i, r)
    }
    T.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Qe(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r, o, s, a = G(t),
            l = et.test(t),
            c = e.style;
          if (l || (t = Je(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
          "string" === (o = typeof n) && (r = re.exec(n)) && r[1] && (n = fe(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
        }
      },
      css: function (e, t, n, i) {
        var r, o, s, a = G(t);
        return et.test(t) || (t = Je(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Qe(e, t, i)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
      }
    }), T.each(["height", "width"], (function (e, t) {
      T.cssHooks[t] = {
        get: function (e, n, i) {
          if (n) return !Ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, i) : ue(e, tt, (function () {
            return ot(e, t, i)
          }))
        },
        set: function (e, n, i) {
          var r, o = Ke(e),
            s = !v.scrollboxSize() && "absolute" === o.position,
            a = (s || i) && "border-box" === T.css(e, "boxSizing", !1, o),
            l = i ? rt(e, t, i, a, o) : 0;
          return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = T.css(e, t)), it(0, n, l)
        }
      }
    })), T.cssHooks.marginLeft = $e(v.reliableMarginLeft, (function (e, t) {
      if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
        marginLeft: 0
      }, (function () {
        return e.getBoundingClientRect().left
      }))) + "px"
    })), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, (function (e, t) {
      T.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
          return r
        }
      }, "margin" !== e && (T.cssHooks[e + t].set = it)
    })), T.fn.extend({
      css: function (e, t) {
        return K(this, (function (e, t, n) {
          var i, r, o = {},
            s = 0;
          if (Array.isArray(t)) {
            for (i = Ke(e), r = t.length; s < r; s++) o[t[s]] = T.css(e, t[s], !1, i);
            return o
          }
          return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
        }), e, t, arguments.length > 1)
      }
    }), T.Tween = st, st.prototype = {
      constructor: st,
      init: function (e, t, n, i, r, o) {
        this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var e = st.propHooks[this.prop];
        return e && e.get ? e.get(this) : st.propHooks._default.get(this)
      },
      run: function (e) {
        var t, n = st.propHooks[this.prop];
        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
      }
    }, st.prototype.init.prototype = st.prototype, st.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function (e) {
          T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, st.propHooks.scrollTop = st.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, T.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, T.fx = st.prototype.init, T.fx.step = {};
    var at, lt, ct = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

    function ft() {
      lt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, T.fx.interval), T.fx.tick())
    }

    function dt() {
      return n.setTimeout((function () {
        at = void 0
      })), at = Date.now()
    }

    function ht(e, t) {
      var n, i = 0,
        r = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
    }

    function pt(e, t, n) {
      for (var i, r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
        if (i = r[o].call(n, t, e)) return i
    }

    function gt(e, t, n) {
      var i, r, o = 0,
        s = gt.prefilters.length,
        a = T.Deferred().always((function () {
          delete l.elem
        })),
        l = function () {
          if (r) return !1;
          for (var t = at || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
          return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: at || dt(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
      for (! function (e, t) {
          var n, i, r, o, s;
          for (n in e)
            if (r = t[i = G(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = T.cssHooks[i]) && "expand" in s)
              for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
            else t[i] = r
        }(u, c.opts.specialEasing); o < s; o++)
        if (i = gt.prefilters[o].call(c, e, u, c.opts)) return y(i.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return T.map(u, pt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c
    }
    T.Animation = T.extend(gt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return fe(n.elem, e, re.exec(t), n), n
          }]
        },
        tweener: function (e, t) {
          y(e) ? (t = e, e = ["*"]) : e = e.match(R);
          for (var n, i = 0, r = e.length; i < r; i++) n = e[i], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
          var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
            d = this,
            h = {},
            p = e.style,
            g = e.nodeType && ce(e),
            m = J.get(e, "fxshow");
          for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
              s.unqueued || a()
            }), s.unqueued++, d.always((function () {
              d.always((function () {
                s.unqueued--, T.queue(e, "fx").length || s.empty.fire()
              }))
            }))), t)
            if (r = t[i], ct.test(r)) {
              if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                g = !0
              }
              h[i] = m && m[i] || T.style(e, i)
            } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = J.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = T.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (d.done((function () {
                p.display = c
              })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
              }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
              display: c
            }), o && (m.hidden = !g), g && pe([e], !0), d.done((function () {
              for (i in g || pe([e]), J.remove(e, "fxshow"), h) T.style(e, i, h[i])
            }))), l = pt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
          t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
        }
      }), T.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
          complete: n || !n && t || y(e) && e,
          duration: e,
          easing: n && t || t && !y(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
      }, T.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(ce).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function (e, t, n, i) {
          var r = T.isEmptyObject(e),
            o = T.speed(t, n, i),
            s = function () {
              var t = gt(this, T.extend({}, e), o);
              (r || J.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = T.timers,
              s = J.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);
            else
              for (r in s) s[r] && s[r].stop && ut.test(r) && i(s[r]);
            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
            !t && n || T.dequeue(this, e)
          }))
        },
        finish: function (e) {
          return !1 !== e && (e = e || "fx"), this.each((function () {
            var t, n = J.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = T.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, T.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          }))
        }
      }), T.each(["toggle", "show", "hide"], (function (e, t) {
        var n = T.fn[t];
        T.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, i, r)
        }
      })), T.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, (function (e, t) {
        T.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i)
        }
      })), T.timers = [], T.fx.tick = function () {
        var e, t = 0,
          n = T.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), at = void 0
      }, T.fx.timer = function (e) {
        T.timers.push(e), T.fx.start()
      }, T.fx.interval = 13, T.fx.start = function () {
        lt || (lt = !0, ft())
      }, T.fx.stop = function () {
        lt = null
      }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, T.fn.delay = function (e, t) {
        return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
          var r = n.setTimeout(t, e);
          i.stop = function () {
            n.clearTimeout(r)
          }
        }))
      },
      function () {
        var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));
        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
      }();
    var mt, vt = T.expr.attrHandle;
    T.fn.extend({
      attr: function (e, t) {
        return K(this, T.attr, e, t, arguments.length > 1)
      },
      removeAttr: function (e) {
        return this.each((function () {
          T.removeAttr(this, e)
        }))
      }
    }), T.extend({
      attr: function (e, t, n) {
        var i, r, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && I(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n, i = 0,
          r = t && t.match(R);
        if (r && 1 === e.nodeType)
          for (; n = r[i++];) e.removeAttribute(n)
      }
    }), mt = {
      set: function (e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), (function (e, t) {
      var n = vt[t] || T.find.attr;
      vt[t] = function (e, t, i) {
        var r, o, s = t.toLowerCase();
        return i || (o = vt[s], vt[s] = r, r = null != n(e, t, i) ? s : null, vt[s] = o), r
      }
    }));
    var yt = /^(?:input|select|textarea|button)$/i,
      bt = /^(?:a|area)$/i;

    function _t(e) {
      return (e.match(R) || []).join(" ")
    }

    function wt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function Et(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    T.fn.extend({
      prop: function (e, t) {
        return K(this, T.prop, e, t, arguments.length > 1)
      },
      removeProp: function (e) {
        return this.each((function () {
          delete this[T.propFix[e] || e]
        }))
      }
    }), T.extend({
      prop: function (e, t, n) {
        var i, r, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (T.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
      T.propFix[this.toLowerCase()] = this
    })), T.fn.extend({
      addClass: function (e) {
        var t, n, i, r, o, s, a, l = 0;
        if (y(e)) return this.each((function (t) {
          T(this).addClass(e.call(this, t, wt(this)))
        }));
        if ((t = Et(e)).length)
          for (; n = this[l++];)
            if (r = wt(n), i = 1 === n.nodeType && " " + _t(r) + " ") {
              for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (a = _t(i)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function (e) {
        var t, n, i, r, o, s, a, l = 0;
        if (y(e)) return this.each((function (t) {
          T(this).removeClass(e.call(this, t, wt(this)))
        }));
        if (!arguments.length) return this.attr("class", "");
        if ((t = Et(e)).length)
          for (; n = this[l++];)
            if (r = wt(n), i = 1 === n.nodeType && " " + _t(r) + " ") {
              for (s = 0; o = t[s++];)
                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
              r !== (a = _t(i)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function (n) {
          T(this).toggleClass(e.call(this, n, wt(this), t), t)
        })) : this.each((function () {
          var t, r, o, s;
          if (i)
            for (r = 0, o = T(this), s = Et(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = wt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
        }))
      },
      hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + _t(wt(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var Tt = /\r/g;
    T.fn.extend({
      val: function (e) {
        var t, n, i, r = this[0];
        return arguments.length ? (i = y(e), this.each((function (n) {
          var r;
          1 === this.nodeType && (null == (r = i ? e.call(this, n, T(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, (function (e) {
            return null == e ? "" : e + ""
          }))), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
        }))) : r ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : _t(T.text(e))
          }
        },
        select: {
          get: function (e) {
            var t, n, i, r = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? o + 1 : r.length;
            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
              if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                if (t = T(n).val(), s) return t;
                a.push(t)
              } return a
          },
          set: function (e, t) {
            for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--;)((i = r[s]).selected = T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), T.each(["radio", "checkbox"], (function () {
      T.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
        }
      }, v.checkOn || (T.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    })), v.focusin = "onfocusin" in n;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
      xt = function (e) {
        e.stopPropagation()
      };
    T.extend(T.event, {
      trigger: function (e, t, i, r) {
        var o, a, l, c, u, f, d, h, g = [i || s],
          m = p.call(e, "type") ? e.type : e,
          v = p.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = h = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[m] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
          if (!r && !d.noBubble && !b(i)) {
            for (c = d.delegateType || m, Ct.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
            l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n)
          }
          for (o = 0;
            (a = g[o++]) && !e.isPropagationStopped();) h = a, e.type = o > 1 ? c : d.bindType || m, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = u && a[u]) && f.apply && Y(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
          return e.type = m, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !Y(i) || u && y(i[m]) && !b(i) && ((l = i[u]) && (i[u] = null), T.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, xt), i[m](), e.isPropagationStopped() && h.removeEventListener(m, xt), T.event.triggered = void 0, l && (i[u] = l)), e.result
        }
      },
      simulate: function (e, t, n) {
        var i = T.extend(new T.Event, n, {
          type: e,
          isSimulated: !0
        });
        T.event.trigger(i, null, t)
      }
    }), T.fn.extend({
      trigger: function (e, t) {
        return this.each((function () {
          T.event.trigger(e, t, this)
        }))
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0)
      }
    }), v.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, (function (e, t) {
      var n = function (e) {
        T.event.simulate(t, e.target, T.event.fix(e))
      };
      T.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this,
            r = J.access(i, t);
          r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1)
        },
        teardown: function () {
          var i = this.ownerDocument || this,
            r = J.access(i, t) - 1;
          r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t))
        }
      }
    }));
    var St = n.location,
      Dt = Date.now(),
      At = /\?/;
    T.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
      It = /\r?\n/g,
      kt = /^(?:submit|button|image|reset|file)$/i,
      Ot = /^(?:input|select|textarea|keygen)/i;

    function Lt(e, t, n, i) {
      var r;
      if (Array.isArray(t)) T.each(t, (function (t, r) {
        n || Nt.test(e) ? i(e, r) : Lt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
      }));
      else if (n || "object" !== E(t)) i(e, t);
      else
        for (r in t) Lt(e + "[" + r + "]", t[r], n, i)
    }
    T.param = function (e, t) {
      var n, i = [],
        r = function (e, t) {
          var n = y(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, (function () {
        r(this.name, this.value)
      }));
      else
        for (n in e) Lt(n, e[n], t, r);
      return i.join("&")
    }, T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map((function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this
        })).filter((function () {
          var e = this.type;
          return this.name && !T(this).is(":disabled") && Ot.test(this.nodeName) && !kt.test(e) && (this.checked || !ge.test(e))
        })).map((function (e, t) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, (function (e) {
            return {
              name: t.name,
              value: e.replace(It, "\r\n")
            }
          })) : {
            name: t.name,
            value: n.replace(It, "\r\n")
          }
        })).get()
      }
    });
    var jt = /%20/g,
      Pt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      qt = /^\/\//,
      Wt = {},
      Ft = {},
      Bt = "*/".concat("*"),
      Ut = s.createElement("a");

    function Vt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, r = 0,
          o = t.toLowerCase().match(R) || [];
        if (y(n))
          for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function Kt(e, t, n, i) {
      var r = {},
        o = e === Ft;

      function s(a) {
        var l;
        return r[a] = !0, T.each(e[a] || [], (function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
        })), l
      }
      return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function zt(e, t) {
      var n, i, r = T.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && T.extend(!0, e, i), e
    }
    Ut.href = St.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: St.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e)
      },
      ajaxPrefilter: Vt(Wt),
      ajaxTransport: Vt(Ft),
      ajax: function (e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, r, o, a, l, c, u, f, d, h, p = T.ajaxSetup({}, t),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
          v = T.Deferred(),
          y = T.Callbacks("once memory"),
          b = p.statusCode || {},
          _ = {},
          w = {},
          E = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (u) {
                if (!a)
                  for (a = {}; t = Mt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = a[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function () {
              return u ? o : null
            },
            setRequestHeader: function (e, t) {
              return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
            },
            overrideMimeType: function (e) {
              return null == u && (p.mimeType = e), this
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (u) C.always(e[C.status]);
                else
                  for (t in e) b[t] = [b[t], e[t]];
              return this
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), x(0, t), this
            }
          };
        if (v.promise(C), p.url = ((e || p.url || St.href) + "").replace(qt, St.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""], null == p.crossDomain) {
          c = s.createElement("a");
          try {
            c.href = p.url, c.href = c.href, p.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), Kt(Wt, p, t, C), u) return C;
        for (d in (f = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), r = p.url.replace(Pt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(jt, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (At.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Ht, "$1"), h = (At.test(r) ? "&" : "?") + "_=" + Dt++ + h), p.url = r + h), p.ifModified && (T.lastModified[r] && C.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || u)) return C.abort();
        if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), i = Kt(Ft, p, t, C)) {
          if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), u) return C;
          p.async && p.timeout > 0 && (l = n.setTimeout((function () {
            C.abort("timeout")
          }), p.timeout));
          try {
            u = !1, i.send(_, x)
          } catch (e) {
            if (u) throw e;
            x(-1, e)
          }
        } else x(-1, "No Transport");

        function x(e, t, s, a) {
          var c, d, h, _, w, E = t;
          u || (u = !0, l && n.clearTimeout(l), i = void 0, o = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
              for (r in a)
                if (a[r] && a[r].test(i)) {
                  l.unshift(r);
                  break
                } if (l[0] in n) o = l[0];
            else {
              for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                  o = r;
                  break
                }
                s || (s = r)
              }
              o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
          }(p, C, s)), _ = function (e, t, n, i) {
            var r, o, s, a, l, c = {},
              u = e.dataTypes.slice();
            if (u[1])
              for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (o = u.shift(); o;)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(s = c[l + " " + o] || c["* " + o]))
                for (r in c)
                  if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                  t = s(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(p, _, C, c), c ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (T.etag[r] = w)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = _.state, d = _.data, c = !(h = _.error))) : (h = E, !e && E || (E = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || E) + "", c ? v.resolveWith(g, [d, E, C]) : v.rejectWith(g, [C, E, h]), C.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? d : h]), y.fireWith(g, [C, E]), f && (m.trigger("ajaxComplete", [C, p]), --T.active || T.event.trigger("ajaxStop")))
        }
        return C
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script")
      }
    }), T.each(["get", "post"], (function (e, t) {
      T[t] = function (e, n, i, r) {
        return y(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
          url: e,
          type: t,
          dataType: r,
          data: n,
          success: i
        }, T.isPlainObject(e) && e))
      }
    })), T._evalUrl = function (e, t) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (e) {
          T.globalEval(e, t)
        }
      })
    }, T.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        })).append(this)), this
      },
      wrapInner: function (e) {
        return y(e) ? this.each((function (t) {
          T(this).wrapInner(e.call(this, t))
        })) : this.each((function () {
          var t = T(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        }))
      },
      wrap: function (e) {
        var t = y(e);
        return this.each((function (n) {
          T(this).wrapAll(t ? e.call(this, n) : e)
        }))
      },
      unwrap: function (e) {
        return this.parent(e).not("body").each((function () {
          T(this).replaceWith(this.childNodes)
        })), this
      }
    }), T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e)
    }, T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, T.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var Qt = {
        0: 200,
        1223: 204
      },
      $t = T.ajaxSettings.xhr();
    v.cors = !!$t && "withCredentials" in $t, v.ajax = $t = !!$t, T.ajaxTransport((function (e) {
      var t, i;
      if (v.cors || $t && !e.crossDomain) return {
        send: function (r, o) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
          t = function (e) {
            return function () {
              t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout((function () {
              t && i()
            }))
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function () {
          t && t()
        }
      }
    })), T.ajaxPrefilter((function (e) {
      e.crossDomain && (e.contents.script = !1)
    })), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          return T.globalEval(e), e
        }
      }
    }), T.ajaxPrefilter("script", (function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), T.ajaxTransport("script", (function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs) return {
        send: function (i, r) {
          t = T("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function (e) {
            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
          }), s.head.appendChild(t[0])
        },
        abort: function () {
          n && n()
        }
      }
    }));
    var Gt, Yt = [],
      Xt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Yt.pop() || T.expando + "_" + Dt++;
        return this[e] = !0, e
      }
    }), T.ajaxPrefilter("json jsonp", (function (e, t, i) {
      var r, o, s, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return s || T.error(r + " was not called"), s[0]
      }, e.dataTypes[0] = "json", o = n[r], n[r] = function () {
        s = arguments
      }, i.always((function () {
        void 0 === o ? T(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Yt.push(r)), s && y(o) && o(s[0]), s = o = void 0
      })), "script"
    })), v.createHTMLDocument = ((Gt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), T.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), o = !n && [], (r = k.exec(e)) ? [t.createElement(r[1])] : (r = Ce([e], t, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
      var i, r, o
    }, T.fn.load = function (e, t, n) {
      var i, r, o, s = this,
        a = e.indexOf(" ");
      return a > -1 && (i = _t(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && T.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done((function (e) {
        o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
      })).always(n && function (e, t) {
        s.each((function () {
          n.apply(this, o || [e.responseText, t, e])
        }))
      }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
      T.fn[t] = function (e) {
        return this.on(t, e)
      }
    })), T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, (function (t) {
        return e === t.elem
      })).length
    }, T.offset = {
      setOffset: function (e, t, n) {
        var i, r, o, s, a, l, c = T.css(e, "position"),
          u = T(e),
          f = {};
        "static" === c && (e.style.position = "relative"), a = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
      }
    }, T.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each((function (t) {
          T.offset.setOffset(this, e, t)
        }));
        var t, n, i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var e, t, n, i = this[0],
            r = {
              top: 0,
              left: 0
            };
          if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
            e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - r.top - T.css(i, "marginTop", !0),
            left: t.left - r.left - T.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map((function () {
          for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
          return e || se
        }))
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, (function (e, t) {
      var n = "pageYOffset" === t;
      T.fn[e] = function (i) {
        return K(this, (function (e, i, r) {
          var o;
          if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
          o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
        }), e, i, arguments.length)
      }
    })), T.each(["top", "left"], (function (e, t) {
      T.cssHooks[t] = $e(v.pixelPosition, (function (e, n) {
        if (n) return n = Qe(e, t), Ve.test(n) ? T(e).position()[t] + "px" : n
      }))
    })), T.each({
      Height: "height",
      Width: "width"
    }, (function (e, t) {
      T.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, (function (n, i) {
        T.fn[i] = function (r, o) {
          var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");
          return K(this, (function (t, n, r) {
            var o;
            return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? T.css(t, n, a) : T.style(t, n, r, a)
          }), t, s ? r : void 0, s)
        }
      }))
    })), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
      T.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    })), T.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), T.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), T.proxy = function (e, t) {
      var n, i, r;
      if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = l.call(arguments, 2), (r = function () {
        return e.apply(t || this, i.concat(l.call(arguments)))
      }).guid = e.guid = e.guid || T.guid++, r
    }, T.holdReady = function (e) {
      e ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = I, T.isFunction = y, T.isWindow = b, T.camelCase = G, T.type = E, T.now = Date.now, T.isNumeric = function (e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, void 0 === (i = function () {
      return T
    }.apply(t, [])) || (e.exports = i);
    var Jt = n.jQuery,
      Zt = n.$;
    return T.noConflict = function (e) {
      return n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Jt), T
    }, r || (n.jQuery = n.$ = T), T
  }))
}, function (e, t) {}]);
(function (id) {
  function append(scriptid, url, async) {
    var d = document,
      sn = 'script',
      f = d.getElementsByTagName(sn)[0];
    if (!f) f = d.head;
    var s = d.createElement(sn);
    s.async = true;
    s.id = scriptid;
    s.src = url;
    f.parentNode.insertBefore(s, f);
  }

  function getRootDomain() {
    var parts = window.location.hostname.split('.');
    if (parts.length === 2) rootDomain = parts[0];
    else if (parts.length > 2) {
      // see if the next to last value is a common tld
      var part = parts[parts.length - 2];
      if (part === 'com' || part === 'co' || part === 'eu') {
        rootDomain = parts[parts.length - 3]; // go back one more
      } else {
        rootDomain = part;
      }
    }

    return rootDomain;
  }

  window.evidon = {};
  window.evidon.id = id;
  var cdn = '//c.evidon.com/',
    rootDomain = getRootDomain(),
    noticecdn = cdn + 'sitenotice/';
  append('evidon-notice', noticecdn + 'evidon-sitenotice-tag.js', false);
  append('evidon-location', cdn + 'geo/country.js', true);
  append('evidon-themes', noticecdn + id + '/snthemes.js', true);
  if (rootDomain) append('evidon-settings', noticecdn + id + '/' + rootDomain + '/settings.js', true);

  window.evidon.priorConsentCallback = function () {
    // add the tags which need to wait for prior consent
    // here.  This should be all your advertising tags and
    // probably most of your social and tracking tags.
  }

  window.evidon.closeCallback = function () {
    // this is executed when a user closes a UI element (banner/barrier) without
    // providing consent.
  }

  window.evidon.consentWithdrawnCallback = function () {
    // this is exeucted if the user withdraws consent and elects to
    // no longer allow technologies to run on the site.
  }
})(3453);
(function ($) {

  Drupal.behaviors.initColorboxDefaultStyle = {
    attach: function (context, settings) {
      $(context).bind('cbox_complete', function () {
        // Only run if there is a title.
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxLoadedContent img', context).bind('mouseover', function () {
            $('#cboxTitle', context).slideDown();
          });
          $('#cboxOverlay', context).bind('mouseover', function () {
            $('#cboxTitle', context).slideUp();
          });
        } else {
          $('#cboxTitle', context).hide();
        }
      });
    }
  };

})(jQuery);

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src =
    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PM823KK');