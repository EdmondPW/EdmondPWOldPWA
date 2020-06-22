//var title = document.querySelector('.title');
//var courseFeatureElements = document.querySelectorAll('.course-feature');
//var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

 var firebaseConfig = {
    apiKey: "AIzaSyABQG0uk7MI0upKCVegOMF_3bjIwvxDQgM",
    authDomain: "resepsaver.firebaseapp.com",
    databaseURL: "https://resepsaver.firebaseio.com",
    projectId: "resepsaver",
    storageBucket: "resepsaver.appspot.com",
    messagingSenderId: "104620766512",
    appId: "1:104620766512:web:47b12acaedf67edff144f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("pass");

    const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(function(err{
                            alert("Gagal SignUp");
                            });
    )

    alert("Sign Up");
    window.location.href="login.html";
  }

  function signin(){
    //alert("tes");
    var email=document.getElementById("email");
    var password=document.getElementById("pass");

    const promise=auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(function(err{
                            alert("Gagal Login");
                            });
    )
    auth.onAuthStateChanged(function(res){
        if(res){
            window.location.href="index.html";
        }
    }
  }


$( "#inputSearch" ).click(function() {
  var searchInput = document.getElementById("Search_Recipe").value;
  alert(searchInput);
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

