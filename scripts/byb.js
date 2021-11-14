var bybFlowerCtr;
if (sessionStorage.getItem("bybFlowerCtr") == null) {
    bybFlowerCtr = 0;
    sessionStorage.setItem("bybFlowerCtr", 0);
    console.log("setting bybFlowerCtr...");
    console.log("session" + sessionStorage.getItem("bybFlowerCtr"));
} else {
    bybFlowerCtr = sessionStorage.getItem("bybFlowerCtr");
}

console.log("session" + sessionStorage.getItem("bybFlowerCtr"));

console.log(bybFlowerCtr);


jQuery(document).ready(function($){
    var img;
    
    $('.flower-option-test').on({
        'click': function(){
            console.log("got to this point");
            $('#byb-flower-3').attr('src','../images/flowers/tulip-purple-3.png');
        }
    });

    $('#rose-lavender').on({
        'click': function(){
            
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/rose-lavender-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src', img);
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#rose-orange').on({
        'click': function(){

            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/rose-orange-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/rose-orange-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#rose-red').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/rose-red-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/rose-red-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#carnation-pink').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/carnation-pink-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/carnation-pink-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#carnation-purple').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/carnation-purple-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/carnation-purple-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#carnation-white').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/carnation-white-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/carnation-white-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#tulip-peach').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/tulip-peach-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/tulip-peach-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#tulip-purple').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/tulip-purple-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/tulip-purple-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
    $('#tulip-yellow').on({
        'click': function(){
            if (sessionStorage.getItem("bybFlowerCtr") < 3) {
                bybFlowerCtr++;
                img = "../images/flowers/tulip-yellow-"+bybFlowerCtr+".png";
                $('#byb-flower-'+bybFlowerCtr).attr('src','../images/flowers/tulip-yellow-'+bybFlowerCtr+'.png');
                sessionStorage.setItem("bybFlowerItem"+bybFlowerCtr, img);
            }

            console.log("ctr:" + bybFlowerCtr);
            sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
            console.log("session " + sessionStorage.getItem("bybFlowerCtr"));
        }
    });
});
