var todoApp = todoApp || {};
todoApp.todoList = (function($, statusBar, undefined){
    console.log('------- Module loaded: todoApp.todoList ---------');
    var module = {}, app = todoApp;
    var $list = $('#todoList');
    var totalItems = $list.find('li').length;

    var init = function() {
        $list.on('click', '.remove', function(e){
            e.preventDefault();
            var $todoLi = $(this).closest('li');
            module.removeItem($todoLi);
        });

        $('#addTodoButton').on('click', function(){
            module.addItem();
        });

        // set initial message on status bar
        statusBar.updateMessage(totalItems);
    };

    // public
    // ----------------------------------------------------------------
    module.removeItem = function($todoLi){
        $todoLi.remove();
        totalItems = $list.find('li').length;
        statusBar.updateMessage(totalItems);
    };

    module.addItem = function(textValue){
        // allow sending todo via console or (API)
        if(typeof textValue === 'undefined'){
            var $input = $('#addTodoInput');
            textValue = $input.val().trim();
        }
        var trimValue = textValue.replace(/\s/g,'');
        if(trimValue.length > 0){ // check if no words have been added
            $list.append('<li><input type="text" class="hide" value="' + trimValue + '"/><span class="title">' + trimValue + '</span><button type="button" class="update hide">update</button><a href="#" class="remove">x</a></li>');
            totalItems = $list.find('li').length;
            statusBar.updateMessage(totalItems);
        }
        $input.val(''); // clear input
    };


    init();

    return module;

})(jQuery, todoApp.statusBar);