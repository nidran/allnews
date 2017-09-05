$(function(){
  var sources=["the-times-of-india","the-telegraph", "the-verge", "bloomberg", "cnn","hacker-news","mashable","mirror", "recode"]
  var $outerUl=$('#outerUl');
  var $orders=$('#orders');
  
  var key='1741b22c28f6458392dedd92c33cb4e7';
//   $.each(sources, function(index, value)  {
//       // requrl='https://newsapi.org/v1/articles?source='+value+'&apiKey='+key;
//       $outerUl.append('<li>'+value+'</li>');    
// });

  $.each(sources, function(index, value)  {
      requrl='https://newsapi.org/v1/articles?source='+value+'&apiKey='+key;
      // $outerUl.append('<li><h2>'+value+'</h2></li>');    

     
      requestJSON(requrl, function(json) {  
        $orders.append('<li><h2>'+ value.replace(/-/g, " ").toUpperCase()+'</h2></li>')
      
        $.each(json['articles'], function(index, value){

          // console.log(value);
          var author=value.author || " ";
          var title=value.title || " ";
          var description=value.description || " ";
          var url=value.url || " ";
          var publishedAt=value.publishedAt || " ";
          var imgUrl=value.urlToImage || " ";
          
          $orders.append('<li> <img src="'+imgUrl+'"</img> <h3><a href="'+url+'">'+title+'</a><br></h3><h4><br>'+author+'</h4><h5><br>'+description+'</h5></br>');

        })
        
  
    });
    
        
 }); // end requestJSON Ajax call
   // end click event handler
  
  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});