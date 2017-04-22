# jQuery UI Autocomplete with clear button

Extends jQuery UI Autocomplete widget with a button that clears away the current value of the autocomplete &lt;input&gt; element.

The following options are available:

- `clearButton` -  type: Boolean, default: `true` - adds a button that will clear the autocomplete input
- `clearButtonHtml`- type: String, default: `'&times;'` - the content of the button
- `clearButtonPosition` - type: Object|Boolean, default: `{my: "right center", at: "right center"}` - an object with the parameters needed to position the button using **jQuery UI Position** (http://api.jqueryui.com/position/). Set it to `false` if you want to position the button via CSS.

## Demo ##

Demo available on [Codepen](http://codepen.io/andreivictor/pen/GmZWEJ). 

## Usage ##
Initialize the autocomplete the same as before. 

```javascript
$("input").autocomplete({
    // options 
});
```

## Setup ##

#### Javascript ####
Include the script after jQuery UI's main javascript file:
```html
<script src="jquery-ui.js"></script>
<script src="jquery-ui-autocomplete-with-clear-button.js"></script>
```

#### CSS / SASS ####
Include `jquery-ui-autocomplete-with-clear-button.css ` in your project or use the `.scss` file:
```html
<link rel="stylesheet" href="jquery-ui-autocomplete-with-clear-button.css" media="all" />
```

```sass
@import "jquery-ui-autocomplete-with-clear-button";
```
