var someModule = (function ($) {
  var id = 1;
  var moduleName = "someModule";

  // set module name in DOM
  $('#moduleName').text(moduleName);

  return {
    setName: function(newName){
        this.moduleName = newName;
    },
    getName: function(){
        return this.moduleName;
    },
    updateName: function(){
      var newName = $('#nameInput').val();
      this.setName(newName);
      $('#moduleName').text(newName);
    },
    log: function(msg){
        console.log(msg);
    }
  };
})(jQuery);

