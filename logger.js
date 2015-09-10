console.log('document.currentScript.hasAttribute("as"): ', document.currentScript.hasAttribute('as'));
console.log('document._currentScript.hasAttribute("as"): ', document._currentScript.hasAttribute('as'));

define(function () {
  return {
    info: function (message) {
      console.log(message);
    }
  };
});
