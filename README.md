# Accordion

Lightweight, fully accessible accordions!

## Install

### Download

+ CSS:
  - [accordion.min.css](https://unpkg.com/@rickycourtes/accordion/dist/accordion.min.css) minified, or
  - [accordion.css](https://unpkg.com/@rickycourtes/accordion/dist/accordion.css) un-minified
  
+ JavaScript:
  - [accordion.min.js](https://unpkg.com/@rickycourtes/accordion/dist/accordion.min.js) minified, or
  - [accordion.js](https://unpkg.com/@rickycourtes/accordion/dist/accordion.js) un-minified

### CDN

Link directly to the Accordion files on unpkg.

``` html 
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/@rickycourtes/accordion/dist/accordion.min.css">
```
``` html
<!-- JavaScript -->
<script src="https://unpkg.com/@rickycourtes/accordion/dist/accordion.min.js"></script>
```

### Package Managers

Install with npm: `npm install @rickycourtes/accordion`

## Usage

Accordion works with a container element and a set of child cell elements

``` html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <div class="accordion-header--label">Accordion Label 1</div>
    </button>
    <div class="accordion-panel">
      <div class="accordion-panel-wrap">
        <p>Accordion Content 1</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      <div class="accordion-header--label">Accordion Label 2</div>
    </button>
    <div class="accordion-panel">
      <div class="accordion-panel-wrap">
        <p>Accordion Content 2</p>
      </div>
    </div>
  </div>
</div>
```

### Options

#### Initiate with Vanilla JavaScript

You can use Accordion with Vanilla JS by calling `new Accordion()`. The `Accordion()` constructor accepts an options object where you can specify the selector and other options.

``` js
var accordion = new Accordion({
  selector: '.accordion', // Selector can be a string for an idividual element
  singleExpand: false, // Allows only one panel to be exapnded at a time
  expandAll: false // Expands all child panels on load
});

// OR

var elem = document.querySelector('.accordion');
var accordion = new Accordion({
  selector: elem // Allows individual element to be passed instead of a string
});

```
#### Initiate with jQuery

You can use Accordion as a jQuery plugin: `$('selector').accordion()`
This will apply the plugin to all matching selectors with the same class.

``` html
<!-- JavaScript -->
<script src="https://unpkg.com/jquery@3.3.1/dist/jquery.min.js"></script>
<script src="https://unpkg.com/@rickycourtes/accordion/dist/accordion.min.js"></script>
```
``` js
$('.accordion').accordion({
  singleExpand: true
});
```

---

By [Ricky Courtes](https://rickycourtes.com)
