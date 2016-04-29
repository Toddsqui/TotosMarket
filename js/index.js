$(document).ready(function() {
   $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",function(data) {
   $("#cont").html("<blockquote><h2>"+ data.quoteText + "</h2></br><p style='float: right; margin-right: 100px;'>"+ ' - ' + data.quoteAuthor +"</p></blockquote>");
   $(".tw").click(function() {
    $(".tw").attr("href",'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor);
      });
    });

    $("#recquote").click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",function(data) {
   $("#cont").html("<blockquote><h2>"+ data.quoteText + "</h2></br><p style='float: right; margin-right: 100px;'>"+ ' - ' + data.quoteAuthor +"</p></blockquote>"); 
   $(".tw").click(function() {
    $(".tw").attr("href",'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor);
      });
    });
  });
});