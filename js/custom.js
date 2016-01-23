console.log("exectuted custom js");


$(function() {
    var layout = $(".mdl-layout__content");
    var st = 0;
    $( layout ).scroll(function() {
        st = $(layout).scrollTop();
        
        console.log(st);
    });
    
});