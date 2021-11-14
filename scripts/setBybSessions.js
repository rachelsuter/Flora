$(document).ready(function(){

    if (sessionStorage.getItem("bybFlowerCtr") != 0) {
        var ctr = sessionStorage.getItem("bybFlowerCtr");
        /*$('#byb-flower-1').attr('src','../images/flowers/rose-lavender-1.png');
        $('#byb-flower-2').attr('src','../images/flowers/rose-lavender-2.png');
        $('#byb-flower-3').attr('src','../images/flowers/rose-lavender-3.png');*/

        var i = 0;
        while (i < sessionStorage.getItem("bybFlowerCtr")) {
            i++;
            $('#byb-flower-'+i).attr('src', sessionStorage.getItem("bybFlowerItem"+i));
            
        }

    }
});
