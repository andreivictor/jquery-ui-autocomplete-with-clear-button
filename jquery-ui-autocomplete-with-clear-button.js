/* ================================================
 * jquery-ui-autocomplete-with-clear-button.js v0.0.1
 *
 * Extends jQuery UI Autocomplete widget with a button that clears the value of the autocomplete input.
 * The following options are available:
 * - `clearButton` -  type: Boolean, default: true - adds a button that will clear the autocomplete input
 * - `clearButtonHtml`- type: String, default: '&times;' - the content of the button
 * - `clearButtonPosition` - type: Object|Boolean, default: {my: "right center", at: "right center"} - an object with the parameters needed to position the button using jQuery UI Position (http://api.jqueryui.com/position/). Set it to `false` if you want to position the button via CSS.
 * ============================================= */
;(function($) {

  $.widget( "ui.autocomplete", $.ui.autocomplete, {

    // extend default options
    options : {
      clearButton: true,
      clearButtonHtml: '&times;',
      clearButtonPosition: {
        my: "right center",
        at: "right center"
      }
    },

    _create: function() {

      var self = this;

      // Invoke the parent widget's method.
      self._super();

      if ( self.options.clearButton ) {
        self._createClearButton();
      }

    },

    _createClearButton: function() {

      var self = this;

      self.clearElement = $("<span>")
                        .attr( "tabindex", "-1" )
                        .addClass( "ui-autocomplete-clear" )
                        .html( self.options.clearButtonHtml )
                        .appendTo( self.element.parent() );

      if ( self.options.clearButtonPosition !== false && typeof self.options.clearButtonPosition === 'object' ) {
        if ( typeof self.options.clearButtonPosition.of === 'undefined' ) {
            self.options.clearButtonPosition.of = self.element;
        }
        self.clearElement.position( self.options.clearButtonPosition);
      }

      self._on( self.clearElement, {
        click: function() {
          self.element.val('').focus();
          self._hideClearButton();
        }
      });

      self.element.addClass('ui-autocomplete-input-has-clear');

      self._on( self.element, {
        input: function() {
          if ( self.element.val()!=="" ) {
            self._showClearButton();
          } else {
            self._hideClearButton();
          }
        }
      });

      self._on( self.menu.element, {
        menuselect: function() {
          self._showClearButton();
        }
      });

      // show clearElement if input has some content on initialization
      if( self.element.val()!=="" ) {
        self._showClearButton();
      } else {
        self._hideClearButton();
      }

    },

    _showClearButton: function() {
      this.clearElement.css({'display': 'inline-block'});
    },

    _hideClearButton: function() {
      this.clearElement.css({'display': 'none'});
    }

  });

})(window.jQuery);