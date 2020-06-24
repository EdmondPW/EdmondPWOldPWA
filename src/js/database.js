
var firebaseConfig = {
          apiKey: "AIzaSyABQG0uk7MI0upKCVegOMF_3bjIwvxDQgM",
          authDomain: "resepsaver.firebaseapp.com",
          databaseURL: "https://resepsaver.firebaseio.com",
          projectId: "resepsaver",
          storageBucket: "resepsaver.appspot.com",
          messagingSenderId: "104620766512",
          appId: "1:104620766512:web:47b12acaedf67edff144f5"
        };

        //usahakan initialize firebase jadi sebuah function
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.auth.Auth.Persistence.LOCAL;

        const auth=firebase.auth();

         function cekIfLoginOrNot(){
            firebase.auth().onAuthStateChanged(function(res){
            if(res){
              alert("Welcome")
            }
            else{
              alert("You must sign in")
              window.location.href="./login";
            }
           })
         }

        function signup(){
          console.log("tes");
          var email=document.getElementById("email");
          var password=document.getElementById("pass");

          const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
          promise.catch(function(err){
             alert("Gagal SignUp");
          });

          alert("Sign Up");
          window.location.href="./login";
        }

        function signin(){
          //alert("tes");
          var email=document.getElementById("email");
          var password=document.getElementById("pass");

          const promise=auth.signInWithEmailAndPassword(email.value,password.value);
          promise.catch(function(err){
                                  alert("Gagal Login");
                                  });
          auth.onAuthStateChanged(function(res){
              if(res){
                  window.location.href="index.html";
              }
          })
        }

        function saveRecipie(){
          
        }

        function unSaveRecipe(){
          
        }
        
