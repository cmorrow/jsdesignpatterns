var revealingModule = (function ($) {
  var id = 1; // private
  var nameModule = "someModule"; // private

  function publicSetName(newName){
    updateName(newName);
  }

  function publicGetName(newName){
    return nameModule;
  }

  function updateName(newName){ // private method
    nameModule = newName; // set private variable
  }

  return {
    setName: publicSetName,
    getName: publicGetName
  };
})(jQuery);

