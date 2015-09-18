var todoApp = todoApp || {}; // if app exists use it; else create app object

todoApp.statusBar = (function($, undefined){ // alias jQuery with '$'; add PubSub reference
    console.log('------- Module loaded: todoApp.statusBar ---------');
    var module = {}, app = todoApp;
    $statusBar = $('#contentWrapper').find('.status-bar');

    module.updateMessage = function(totalItems){
        var $msg = $statusBar.find('.msg');
        var message = '';
        if(totalItems !== 0){
            $msg.removeClass('empty');
            message = 'You have ' + totalItems + ' todo items.'
        }else{
            $msg.addClass('empty');
            message = 'You have no todo items. Get busy!';
        }

        $msg.text(message);
    };

    return module;

})(jQuery); // add jQuery, and PubSub for module