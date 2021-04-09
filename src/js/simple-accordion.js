/*!
 * Simple Accordion v1.0.0 by @rickycourtes - https://rickycourtes.com
 * License - https://rickycourtes.com/accordion/license
 */

(function () {
  'use strict';

  function SimpleAccordion(options) {

    let _this = this;
    let defaultOptions = {
      selector: ".accordion",
      singleExpand: false,
      expandOnFocus: false
    }

    options = {...defaultOptions, ...options};

    this.init = function() {

      if (typeof(options.selector) == 'string') {
        this.selector = document.querySelector(options.selector);
      } else {
        this.selector = options.selector;
      }

      if (!this.selector) {
        if (console) {
          console.error('Invalid element for Simple Accordion: ' + (queryElement || element));
        }
        return;
      }

      this.prepareControls();
    }

    this.togglePanel = function(e) {
      var accordionHeader = this;

      var content = document.getElementById(accordionHeader.getAttribute('aria-controls'));
      if (!content) return;

      let isExpanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;

      if (options.singleExpand) {
        var activeHeader = document.querySelector('.accordion_header[aria-expanded="true"]');
        if (activeHeader && activeHeader != this) {
          activeHeader.setAttribute('aria-expanded', 'false');
        }
      }

      accordionHeader.setAttribute('aria-expanded', !isExpanded);
    }

    this.prepareControls = function() {
      this.headers = this.selector.querySelectorAll('.accordion_header');
      this.headers.forEach(function(header, index) {
        var panel = header.nextElementSibling;
        var headers = document.querySelectorAll('.accordion_header');
        var headerIndex = Array.prototype.slice.call(headers).indexOf(header) + 1;

        header.id = 'accordion-header-' + headerIndex;
        header.setAttribute('aria-controls','accordion-panel-' + headerIndex);
        header.setAttribute('aria-expanded', 'false');
        header.addEventListener("click", _this.togglePanel, false);

        panel.id = 'accordion-panel-' + headerIndex;
        panel.setAttribute('aria-labelledby','accordion-header-' + headerIndex);
      });
    }

    this.init();
  }

  // Add lightweight jQuery wrapper
  
  if (window.jQuery) {
    var $ = window.jQuery;
    $.fn['simpleAccordion'] = function(options) {
      options = options || {};
      return this.each(function() {
        if (!$.data(this, 'simpleAccordion')) {
          options.selector = this;
          $.data(this, 'simpleAccordion', new SimpleAccordion(options));
        }
      });
    };
  }
  
}());
