//var title = document.querySelector('.title');
//var courseFeatureElements = document.querySelectorAll('.course-feature');
//var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

var firebaseConfig = {
    apiKey: "AIzaSyBqR8w2NzQsx9Bi1KDKDzKrgxF_cZgdawo",
    authDomain: "mobileweb-313e5.firebaseapp.com",
    databaseURL: "https://mobileweb-313e5.firebaseio.com",
    projectId: "mobileweb-313e5",
    storageBucket: "mobileweb-313e5.appspot.com",
    messagingSenderId: "486468352596",
    appId: "1:486468352596:web:05086f7651838ec7818bc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("pass");

    const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

    alert("Sign Up");
  }

  function signin(){
    alert("tes");
    var email=document.getElementById("email");
    var password=document.getElementById("pass");

    const promise=auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

    alert("Login ");
  }


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

function storeRecipe(){}

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

