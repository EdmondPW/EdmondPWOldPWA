//var title = document.querySelector('.title');
//var courseFeatureElements = document.querySelectorAll('.course-feature');
//var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

$( "#inputSearch" ).click(function() {
  var searchInput = document.getElementById("Search_Recipe").value;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr="+searchInput,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "ed79f9f0b7msh65c44d70d45c322p1f8f63jsne93f7593dc3d"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});

function searchRecipe(){
  
}


var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

