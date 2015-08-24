var someModule = {
    id: 1,
    moduleName: 'someModule',
    log: function(msg){
        console.log(msg);
    }
};

(function($) {
    
    $('#moduleName').text(someModule.moduleName);
    $('#updateName').on('click',function(){
        someModule.moduleName = $('#nameInput').val();
        $('#moduleName').text(someModule.moduleName);
    });
})(jQuery);
