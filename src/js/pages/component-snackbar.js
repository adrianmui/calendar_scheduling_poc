$(document).ready(function(){
    $('.snackbar-btn').click(function(e) {
        e.preventDefault();
        var pos = $(this).attr('data-pos');
        var actionText = $(this).attr('data-actionText');
        var actionColor = $(this).attr('data-actionColor');
        if (actionText === undefined)
            actionText = 'Dismiss';
        if (actionColor === undefined)
            actionColor = '#FF8A80';
        var showAction = $(this).attr('data-showActionButton');
        if (showAction === undefined)
            showAction = true;
        else if (showAction == 'true')
            showAction = true;
        else
            showAction = false;

        Snackbar.show({
            text: 'Welcome! Thanks for checking out Snackbar',
            showActionButton: showAction,
            actionText: actionText,
            actionTextColor: actionColor,
            backgroundColor: '#232323',
            width: 'auto',
            pos: pos
        });
    });

    $('.snackbar-btn-callback').click(function() {
      Snackbar.show({
        text: 'I have a custom callback when action button is clicked.',
        width: '475px',
        onActionClick: function(element) {
          //Set opacity of element to 0 to close Snackbar
          $(element).css('opacity', 0);
          Snackbar.show({
            text: 'Thanks for clicking the  <strong>Dismiss</strong>  button!',
            showActionButton: false
          });
        }
      });
    });

})(jQuery);
