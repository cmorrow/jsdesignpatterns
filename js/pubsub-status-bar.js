var todoApp = todoApp || {};

todoApp.statusBar = (function($, undefined){
    var module = {}, app = todoApp;
    $statusBar = $('#contentWrapper').find('.status-bar');

    module.init = function() {

        var removeAddSubscriber = function( msg, data ){
            var statusMessage = msg + ': ' + data;
            var $msg = $statusBar.find('.msg.top');
            if(msg === 'todo.removed' || msg === 'todo.empty'){
                $msg.addClass('removed');
            }else{
                $msg.removeClass('removed');
                // updated empty message
                var $msgEmpty = $statusBar.find('.msg.empty');
                $msgEmpty.addClass('hide');
            }
            $msg.text(statusMessage);
        };

        // Subscribe to all todo topics
        var allTodos = PubSub.subscribe( 'todo', removeAddSubscriber );

        var emptyList = PubSub.subscribe( 'todo.empty', function(){
            var $msgEmpty = $statusBar.find('.msg.empty');
            $msgEmpty.removeClass('hide');
        });

        // var token = $.Topic( 'todoRemoved').subscribe( personSubscriber );
    }

    module.init();

    return module;

})(jQuery);