var revealingModule = (function ($) {
  var id = 1;
  var nameModule = "someModule";

  function publicSetName(newName){
    nameModule = newName;
  }

  function publicGetName(newName){
    return nameModule;
  }

  function updateName(){
    // set private variable
    nameModule = $('#nameInput').val();
    // update DOM element
    $('#moduleName').text(nameModule);
  }

  function init(){
    $('#moduleName').text(nameModule);
    $('#updateName').on('click', function(){
      updateName();
    });
  }

  init();

  return {
    setName: publicSetName,
    getName: publicGetName,
    updateName: updateName
  };
})(jQuery);

