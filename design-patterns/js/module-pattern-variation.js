var someModule = (function ($) {
  var module = {};

  // Private
  var id = 1, moduleName = "someModule";

  // Public
  module.publicProperty = 'SomeValue';
  module.getName = function(){
    this.moduleName = newName;
  };
  module.setName = function(nameValue){
    this.moduleName = nameValue;
    $('#moduleName').text(nameValue);
  };
  module.updateName = function(){
    module.setName($('#nameInput').val());
  };
  module.init = function(){
    module.setName(moduleName);
    $('#updateName').on('click', function(){
        module.setName($('#nameInput').val());
    });
  }

  // set module name
  module.init();

  return module;
})(jQuery);


