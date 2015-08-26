var todoApp = todoApp || {};
todoApp.todoList = (function($, PubSub, undefined){
    var module = {}, app = todoApp;
    var $list = $('#todoList');

    // private
    var removeTodo = function($todoLi){
        var todoName = $todoLi.find('.title').text();
        $todoLi.remove();
        PubSub.publish( 'todo.removed', todoName );
        if($list.find('li').length === 0){
            PubSub.publish( 'todo.empty', '' );
        }
        // $.Topic( 'todoRemoved').publish(personName);
    };

    var init = function() {
        $list.on('click', '.remove', function(e){
            e.preventDefault();
            var $todoLi = $(this).closest('li');
            removeTodo($todoLi);
        });

        $('#addTodoButton').on('click', function(){
            module.addTodo();
        });
    }

    // public
    // ----------------------------------------------------------------
    module.addTodo = function(textValue){
        // allow sending todo via console or (API)
        if(typeof textValue === 'undefined'){
            var $input = $('#addTodoInput');
            textValue = $input.val().trim();
        }
        var trimValue = textValue.replace(/\s/g,'');
        if(trimValue.length > 0){ // check if no words have been added
            $list.append('<li><input type="text" class="hide" value="' + trimValue + '"/><span class="title">' + trimValue + '</span><button type="button" class="update hide">update</button><a href="#" class="remove">x</a></li>');
        }
        $input.val(''); // clear input

        // Publish event
        PubSub.publish( 'todo.added', trimValue );
    };


    init();

    return module;

})(jQuery, PubSub);