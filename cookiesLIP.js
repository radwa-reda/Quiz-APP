// Function to create cookies
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // to string
    var encodedValue = encodeURIComponent(value);

    document.cookie = name + "=" + encodedValue + expires + "; path=/";

}


  // Function to get cookies
  function getCookies(name) {
    var cookiesArr = document.cookie.split(';');
    var flag = null; 
    for (var i = 0; i < cookiesArr.length; i++) {
        var keyCheck = cookiesArr[i].trim().split('=');

        if (keyCheck[0] === name) {
            flag = keyCheck[1];
            break;  // Break out of the loop once the cookie is found
        }
    }
    if (flag === null) {
        throw ("Cookie with name '" + name + "' does not exist");
    }

    return flag;
}

  


  // Function to delete cookies 
  function deleteCookies(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/";
  }

// Function to allCookieList 
 function allCookieList() {
    var cookies = document.cookie.split(';');
    var stored={};
  
    for(var i=0; i<cookies.length ;i++){

        var cookiename = cookies[i].split('=');
        var userN=cookiename[0];
        var userV=cookiename[1];
       // add data to stored object
        stored[userN]= userV;
       // console.log(stored);
    }
    return stored;  
  }
  
// Function to hasCookie
function hasCookie(name) {
  var cookiesArr = document.cookie.split(';');
  var flag = false;

  for (var i = 0; i < cookiesArr.length; i++) {
      var keyCheck = cookiesArr[i].split("=");

      if (keyCheck[0].trim() === name) {
          flag = true;
          break; // Break out of the loop once the cookie is found
      }
  }

  return flag;
}

