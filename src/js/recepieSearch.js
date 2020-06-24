    var simpan_arr = new Array();
    var searchInput='';
    var calories=[];
    var images=[];
    var ingredients=[];
    var totaltime=[];
    var label=[];
    var totali=0;
    var totalj=[];
$( "#inputSearch" ).click(function() {
		totali=0;
		totalj=[];
		searchInput='';
		calories=[];
	    images=[];
	    ingredients=[];
	    totaltime=[];
	    label=[];
	    searchInput = document.getElementById("Search_Recipe").value;
	    alert(searchInput);
	    var show=document.getElementById('resep');
	    var imageresep=document.getElementById('imageresep');
	    var namaresep=document.getElementById('namaresep');
	    show.innerHTML="";
	    fetch("https://edamam-recipe-search.p.rapidapi.com/search?q="+searchInput, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
					"x-rapidapi-key": "e737ff4f0fmsha2a34344d4ba3abp1f5b7ajsn2dff9f48a3bb"
				}
			})
	        .then(response => response.json()).then(function(data){
	        	 for(i in data.hits){
	        		totali=totali+1;
	        		console.log(i);
	        		var countj=0;
	        		var temp_ing=[];
	        		//simpan_arr.push(i);
	        		//console.log(total);
	        		//ingredients.push(data.hits[i].recipe.ingredientLines);
	        		//console.log(i);
	        		 show.innerHTML += " <div class='card mb-3' style='width: 18rem;'> <img id='img' class='card-img-top' src='"+data.hits[i].recipe.image+"'<div class='card-block'> <h4 class='card-title'>"+data.hits[i].recipe.label+"</h4> <p class='card-text'> Kalori: "+data.hits[i].recipe.calories+" </p><button onclick='save("+i+")' id='save"+i+"' value='"+i+"' class='btn btn-primary' style='align: center'>Save Recipe</button> </div> </div>";
	        		for(j in data.hits[i].recipe.ingredientLines){
	        			countj=countj+1;
	        			console.log("Bumbu: "+data.hits[i].recipe.ingredientLines[j]);
	        			temp_ing.push(data.hits[i].recipe.ingredientLines[j]);
	        		}
	        		ingredients.push(temp_ing);
	        		totalj.push(countj);
	        		calories.push(data.hits[i].recipe.calories)
	        		images.push(data.hits[i].recipe.image);
	        		totaltime.push(data.hits[i].recipe.totalTime);
	        		label.push(data.hits[i].recipe.label);
	        		 
	        	}
	        	//simpar_arr=data.hits;
	        	console.log("Total = "+totali);
	        	console.log(ingredients);
	        	
	        });
	        
	        //console.log(ingredients);

//     var searchInput = document.getElementById("Search_Recipe").value;
//     alert(searchInput);
    
//     fetch("https://edamam-recipe-search.p.rapidapi.com/search?q="+searchInput, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
//                 "x-rapidapi-key": "ed79f9f0b7msh65c44d70d45c322p1f8f63jsne93f7593dc3d"
//             }
//         })
//         .then(response => response.json()).then(data=>console.log(data.hits[0].recipe.calories));
//                 {
//             response.json().then(function(d){
//                 for(i in d.hits){
//                     console.log(i);
//                 }
//             }
//          })
//         .catch(err => {
//             console.log(err);
//         });
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://edamam-recipe-search.p.rapidapi.com/search?q="+searchInput,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
//             "x-rapidapi-key": "ed79f9f0b7msh65c44d70d45c322p1f8f63jsne93f7593dc3d"
//         }
//     }

//     $.ajax(settings).done(function (response) {
//         console.log(response.hits);
//     });
    //var settings = {
      //"async": true,
      //"crossDomain": true,
      //"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr="+searchInput,
      //"method": "GET",
      //"headers": {
        //"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        //"x-rapidapi-key": "ed79f9f0b7msh65c44d70d45c322p1f8f63jsne93f7593dc3d"
      //}
    //}
  
    //$.ajax(settings).done(function (response) {
      //console.log(response);
    //});
  });
  function save(idx){
  	console.log("Total I: "+totali);
  	console.log("Total J: "+totalj);
  	var index=document.getElementById("save"+idx).value;
  	var sizej=totalj[index];
  	console.log("index: "+index);
  	console.log("sizej: "+sizej);
  	console.log("Label index: "+label[index]);
  	//console.log(ingredients[index]);
  	var resepsave='';
  	var ingredients_arr=ingredients[index];
  	for(i in ingredients_arr){
  		console.log(ingredients_arr[i]);
  	}
  	resepsave=ingredients_arr.toString();
  	console.log(resepsave)
  	var firebaseConfig = {
	    apiKey: "AIzaSyABQG0uk7MI0upKCVegOMF_3bjIwvxDQgM",
	    authDomain: "resepsaver.firebaseapp.com",
	    databaseURL: "https://resepsaver.firebaseio.com",
	    projectId: "resepsaver",
	    storageBucket: "resepsaver.appspot.com",
	    messagingSenderId: "104620766512",
	    appId: "1:104620766512:web:47b12acaedf67edff144f5"
	  };
	  //firebase.initializeApp(firebaseConfig);
	  console.log(firebase);
		var database=firebase.database();  
		var ref=database.ref('resepfavorit');
		var data={
			email: "edmond@mail.com",
			label: label[index],
			kalori: calories[index],
			image: images[index],
			resep: resepsave
		  }
		 ref.push(data);
  	}
