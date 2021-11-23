$(document).ready(function(){
    $("a").click(function(){
        var occasion =  $.trim($(this).text());
        sessionStorage.setItem("q1", occasion);

        //If they skip bedroom type question, store "bedroom" in cookie instead of "skip >>"
        if(occasion == "SKIP >"){
            sessionStorage.setItem("q1", "other");
        }
    });
});