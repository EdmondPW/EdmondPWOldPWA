
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
          var indexdetail=0;
          var indexdetailtemp=0;
         function cekIfLoginOrNot(){
            firebase.auth().onAuthStateChanged(function(res){
            if(res){
                    //alert("Welcome")
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
            ref.on('value', getData, errData);
        }
          function getData(data){
                    var dataresep=data.val();
                    var keys=Object.keys(dataresep);
                    console.log(keys);
                    var showstored=document.getElementById('showresep');
                    for(var i=0;i<keys.length;i++){
                              var k = keys[i];
                              console.log(dataresep[k].email);
                              //showstored.innerHTML += i + "<br>";
                              if(email==dataresep[k].email){
                                    showstored.innerHTML += " <div class='card mb-3' style='width: 18rem;'> <img id='img' class='card-img-top' src='"+dataresep[k].image+"'<div class='card-block'> <h4 class='card-title'>"+dataresep[k].label+"</h4> <p class='card-text'> Kalori: "+dataresep[k].kalori+" </p><button onclick='detail("+i+")' id='detail"+i+"' value='"+i+"' class='btn btn-primary' style='align: center'>Detail</button> </div> </div>";
                              }
                    }
          }

          function errData(err){
                console.log("Error: ");
                console.log(err);
          }
             function detail(idx){
                       alert("Detail idx before: "+indexdetail);
                         indexdetail=document.getElementById("detail"+idx).value;
                         localStorage.idx   = indexdetail;
                       alert("Detail idx: "+indexdetail);
                              window.location.href="../../detail";
                    }
          indexdetailtemp=indexdetail;
          function showDetail(){
                    indexdetailtemp=localStorage.getItem("idx");
                    alert("SHOW Detail :"+indexdetailtemp);
          }
            function getDetailResep(){
                      database=firebase.database();
                      var ref=database.ref('resepfavorit');
                      ref.on('value', getDataDetail, errDataDetail);
                  }

             function getDataDetail(data){
                              indexdetail= localStorage.getItem("idx");
                              alert(indexdetail);
                              var detailresep=data.val();
                              var keys=Object.keys(detailresep);
                              //console.log(keys);
                              var showdetailresep=document.getElementById('showdetail');
                              console.log("Index detail: "+indexdetail);
                              var k=keys[indexdetail];
                              showdetailresep.innerHTML += "<center><img src='"+detailresep[k].image+"' style='width:200px;'></center><div class='row'><div class='col-md-4'><br><h2>"+detailresep[k].label+"<p>"+detailresep[k].resep+"</p></div>"     
                              for(var i=0;i<keys.length;i++){
                                        var k = keys[i];
                                        console.log("Nilai K: "+k)
                                        console.log(detailresep[k].email);
                                        //showstored.innerHTML += i + "<br>";
                                        console.log("Testing detail");
                                        if(email==detailresep[k].email && indexdetail==i){
                                                 console.log("Detail: "+detailresep[k].label);
                                         //showdetailresep.innerHTML += "<center><img src='"+detailresep[k].image+"'></center><div class='row'><div class='col-md-4'><br><h2>"+detailresep[k].label+"<p>"+detailresep[k].resep+"</p></div>"     
                                        }
                              }
                    }
          function errDataDetail(err){
                console.log("Error: ");
                console.log(err);
          }
