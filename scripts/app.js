jQuery(document).ready(function($){
$('.flower-option-test').on({
    'click': function(){
        console.log("got to this point");
        $('#byb-flower-3').attr('src','/Users/rachelsuter/Flora/images/tulip-yellow-3.png');
    }
});
});