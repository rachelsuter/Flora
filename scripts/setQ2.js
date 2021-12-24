$(document).ready(function(){
    $("a").click(function(){
        var person =  $.trim($(this).text());
        sessionStorage.setItem("q2", person);

        //If they skip bedroom type question, store "bedroom" in cookie instead of "skip >>"
        if(person == "SKIP >"){
            sessionStorage.setItem("q2", "other");
        }
    });
});