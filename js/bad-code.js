$(document).ready(function(){

    // begin spaghetti code
    $('#addTodoButton').on('click', function(){
        var $input = $('#addTodoInput');
        var inputValue = $input.val().trim();
        var trimValue = inputValue.replace(/\s/g,'');
        // bad practice #2 below
        if(trimValue.length > 0){ // check if no words have been added
            $('#todoList').append('<li><input type="text" class="hide" value="' + inputValue + '"/><span class="title">' + inputValue + '</span><button type="button" class="update hide">update</button><a href="#" class="remove">x</a></li>');
        }
        $input.val(''); // clear input
    });

    $('#todoList').on('click', '.remove', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.closest('li').remove();
    });

    $('#todoList li .edit').on('click', function(){
        $(this).closest('li').find('input').removeClass('hide');
        $(this).closest('li').find('.title, .remove').addClass('hide');
    });

    $('#todoList li .update').on('click', function(){
        $(this).closest('li').find('input').addClass('hide');
        $(this).closest('li').find('.title, .remove').removeClass('hide');
    });


});