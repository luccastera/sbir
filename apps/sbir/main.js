// ==========================================================================
// Project:   Sbir
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

function createCookie(name, value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 50 * 60 * 1000 ));
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name  + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var result = "";
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      result = c.substring(nameEQ.length, c.length);
    } else {
      result = "";
    }
  }
  return result;
}

if (!window.localStorage) {
  localStorage = (function() {
    return {
      setItem: function(key, value) {
        createCookie(key,value, 3000);
      },
      getItem: function(key) {
        return readCookie(key);
      }
    }
  })
}

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Sbir.main = function main() {
  Sbir.statechart.initStatechart();
} ;

function main() { Sbir.main(); }
