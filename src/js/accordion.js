/*!
 * Accordion v1.0.6 by @rickycourtes - https://rickycourtes.com/accordion
 * License - https://rickycourtes.com/accordion/license
 */

(function () {
  'use strict';

  function Accordion(options) {
    let _this = this;
    let defaultOptions = {
      selector: ".accordion",
      singleExpand: false,
      expandAll: false,
    }

    options = {...defaultOptions, ...options};

    this.init = function() {
      if (typeof(options.selector) == 'string') {
        this.selector = document.querySelector(options.selector);
      } else {
        this.selector = options.selector;
      }

      if (!this.selector) {
        if (console) console.error('Invalid element for Accordion: ' + this.selector);
        return;
      }

      this.prepareControls();
    }
    
    this.togglePanel = function(e) {
      e.preventDefault();
      var header = this;
      var panel = document.getElementById(header.getAttribute('aria-controls'));
      if (!panel) return;

      if (options.singleExpand) {
        var activeHeader = _this.selector.querySelector('.accordion-header[aria-expanded="true"]');
        if (activeHeader && activeHeader != header) {
          var activePanel = activeHeader.nextElementSibling;
          activeHeader.setAttribute('aria-expanded', 'false');
          activePanel.classList.remove('open');
        }
      }

      let isExpanded = header.getAttribute('aria-expanded') === 'true' || false;
      header.setAttribute('aria-expanded', !isExpanded);
      panel.classList.toggle('open');
    }

    this.prepareControls = function() {
      this.headers = this.selector.querySelectorAll('.accordion-header');
      this.headers.forEach(function(header) {
        var panel = header.nextElementSibling;
        var docHeaders = document.querySelectorAll('.accordion-header');
        var headerIndex = Array.prototype.slice.call(docHeaders).indexOf(header) + 1;
   
        header.id = 'accordion-header-' + headerIndex;
        header.setAttribute('aria-controls','accordion-panel-' + headerIndex);
        header.setAttribute('aria-expanded', options.expandAll);
        header.addEventListener("click", _this.togglePanel, false);
        
        panel.id = 'accordion-panel-' + headerIndex;
        panel.setAttribute('aria-labelledby','accordion-header-' + headerIndex);
        if (options.expandAll) panel.classList.add('open');
      });
    }

    this.init();
  }
  
  if (window.jQuery) {
    var $ = window.jQuery;
    $.fn['accordion'] = function(options) {
      options = options || {};
      return this.each(function() {
        if (!$.data(this, 'accordion')) {
          options.selector = this;
          $.data(this, 'accordion', new Accordion(options));
        }
      });
    };
  }
  
}());