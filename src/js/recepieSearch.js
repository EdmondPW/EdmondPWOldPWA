$( "#inputSearch" ).click(function() {
    var searchInput = document.getElementById("Search_Recipe").value;
    alert(searchInput);
    
    fetch("https://edamam-recipe-search.p.rapidapi.com/search?q="+searchInput, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
                "x-rapidapi-key": "ed79f9f0b7msh65c44d70d45c322p1f8f63jsne93f7593dc3d"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
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
