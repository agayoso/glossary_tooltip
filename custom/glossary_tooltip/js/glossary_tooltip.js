(function ($, Drupal) {
  Drupal.behaviors.glossaryTooltip = {
    attach: function (context, settings) {
      $('.glossary-highlight', context).tooltip({
        items: '.glossary-highlight',
        content: function () {
          return $(this).data('description');
        }
      });
    }
  };
})(jQuery, Drupal);