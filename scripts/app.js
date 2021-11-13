jQuery(document).ready(function($){
$('.flower-option-test').on({
    'click': function(){
        console.log("got to this point");
        $('#byb-flower-3').attr('src','../images/tulip-yellow-3.png');
    }
});
});


function sendToPage(){
    var input = document.getElementById("search").value;
    //alert(input);
    location.href = "shop.html";
}
