function start(){

   

}

$(window).on("load", start);

function loadpage(e){
    
    e.preventDefault();
    $(this).addClass("active")
    alert("!")
}

$(documents).on("click", "#menu a", loadpage);

