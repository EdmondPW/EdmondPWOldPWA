
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
          var email='';
         function cekIfLoginOrNot(){
            firebase.auth().onAuthStateChanged(function(res){
            if(res){
                    alert("Welcome")
                    var user = firebase.auth().currentUser;
                    email='';
                    if (user != null) {
                      email = user.email;
                    }
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
          window.location.href="../../login";
        }

        function signin(){
          //alert("tes");
          var email=document.getElementById("email");
          var password=document.getElementById("pass");
           firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                      .then(function() {
                         const promise=auth.signInWithEmailAndPassword(email.value,password.value);
                              promise.catch(function(err){
                                                      alert("Gagal Login");
                                                      });
                              auth.onAuthStateChanged(function(res){
                                  if(res){
                                      window.location.href="../index.html";
                                  }
                               })
                        //return promise;
                      })
                      .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                      });
          
        }

        function saveRecipie(){
          
        }

        function getRecipe(){
            database=firebase.database();
            var ref=database.ref('resepfavorit');
            ref.on('value', goData, errData);
        }
          function getData(data){
                    var dataresep=data.val();
                    var keys=Object.keys(dataresep);
                    console.log(keys);
                    
          }

          function errData(err){
                console.log("Error: ");
                console.log(err);
          }
        
