function start(){

   $("#menu a:first").click();

}

$(window).on("load", start);

function loadpage(e){
    
    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");
    
    var href = $(this).attr("href");
    $("#content").load(href); /*jQuery PROOF OF CONCEPT*/ 
}

$(document).on("click", "#menu a", loadpage);

/* PROOF OF CONCEPT
$.ajax({
    url: "index.html",
    type: "GET",
    success: function(){
        
    }
})
*/


