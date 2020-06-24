$( "#inputSearch" ).click(function() {
    var searchInput = document.getElementById("Search_Recipe").value;
    var calories=[];
    var images=[];
    var ingredients=[];
    var totaltime=[];
    var label=[];
    var totali=1;
    var totalj=1;
    alert(searchInput);
    var show=document.getElementById('resep');
    var div2=document.getElementById('j');
    var bum=document.getElementById('bumbu');
    fetch("https://edamam-recipe-search.p.rapidapi.com/search?q="+searchInput, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
				"x-rapidapi-key": "e737ff4f0fmsha2a34344d4ba3abp1f5b7ajsn2dff9f48a3bb"
			}
		})
        .then(response => response.json()).then(function(data){
        	for(i in data.hits){
        	 show.innerHTML += " <div class='card mb-3' style='width: 18rem;'> <img id='img' class='card-img-top' src='"+data.hits[i].recipe.image+"'><div class='card-block'> <h4 class='card-title'>"+data.hits[i].recipe.label+"</h4> <p class='card-text'> Kalori: "+data.hits[i].recipe.calories+" </p><a href='#' id='save"+i+"' class='btn btn-primary' style='align: center'>Save Recipe</a> </div> </div>";
        		for(j in data.hits[i].recipe.ingredientLines){
        		console.log("Bumbu: "+data.hits[i].recipe.ingredientLines[j]);
        		data.hits[i].recipe.ingredientLines[j]
        		
        		}
        		calories.push(data.hits[i].recipe.calories)
        		images.push(data.hits[i].recipe.image);
        		totaltime.push(data.hits[i].recipe.totalTime);
        		label.push(data.hits[i].recipe.label);
        		
        	}
        });
        
       
        console.log(label);
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
