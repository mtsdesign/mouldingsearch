$('#searchArea').keyup(function () {
 var searchField =  $('#search').val();
 var myExp = new RegExp(searchField,"i");
 $.getJSON('assets/json/frintonMouldings.json', function (data){
   var output = "<ul class = 'searchResults'>"
   $.each(data, function (key, val) {
     if ((val.Reference.search(myExp) != -1)|| (val.Description.search(myExp) != -1)) {
       var lowerCaseRef = val.Reference.toLowerCase();
       console.log(lowerCaseRef);
       output += "<li class='searchResultItems'> <h3>"+val.Reference+"</h3><h4>Price/Meter £"+val.Price+"</h4> <img src = 'http://www.frintonmouldings.com/res/"+lowerCaseRef+".jpg'></img><img src = 'http://www.frintonmouldings.com/res/"+val.Reference+".jpg'></img><p>Description: "+val.Description+"</p><p>Width: "+val.Width+"mm</p> </li>"
     };
   });
   output += "</ul>";
   $('#update').html(output);
 });

});
