var revealingModule = (function ($) {
  var id = 1;
  var nameModule = "someModule";
  var $nameEl = $('#moduleName');
  var $updateButton = $('#updateName');

  function publicSetName(newName){
    updateName(newName)
  }

  function publicGetName(newName){
    return nameModule;
  }

  function updateName(newName){ // private method
    nameModule = newName; // set private variable
    $nameEl.text(newName);
  }

  function init(){
    $nameEl.text(nameModule);
    $updateButton.on('click', function(){
      updateName($('#nameInput').val());
    });
  }

  init();

  return {
    setName: publicSetName,
    getName: publicGetName
  };
})(jQuery);

