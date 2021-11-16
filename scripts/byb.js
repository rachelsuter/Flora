
// Count flowers in vase
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

    // JSON with flower information
    var flowers = [
        {
            "flowerId": 1,
            "name": "rose-lavender",
            "image": ["../images/flowers/rose-lavender-1.png", "../images/flowers/rose-lavender-2.png", "../images/flowers/rose-lavender-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 2,
            "name": "rose-orange",
            "image": ["../images/flowers/rose-orange-1.png", "../images/flowers/rose-orange-2.png", "../images/flowers/rose-orange-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 3,
            "name": "rose-red",
            "image": ["../images/flowers/rose-red-1.png", "../images/flowers/rose-red-2.png", "../images/flowers/rose-red-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 4,
            "name": "carnation-pink",
            "image": ["../images/flowers/carnation-pink-1.png", "../images/flowers/carnation-pink-2.png", "../images/flowers/carnation-pink-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 5,
            "name": "carnation-purple",
            "image": ["../images/flowers/carnation-purple-1.png", "../images/flowers/carnation-purple-2.png", "../images/flowers/carnation-purple-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 6,
            "name": "carnation-white",
            "image": ["../images/flowers/carnation-white-1.png", "../images/flowers/carnation-white-2.png", "../images/flowers/carnation-white-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 7,
            "name": "tulip-peach",
            "image": ["../images/flowers/tulip-peach-1.png", "../images/flowers/tulip-peach-2.png", "../images/flowers/tulip-peach-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 8,
            "name": "tulip-purple",
            "image": ["../images/flowers/tulip-purple-1.png", "../images/flowers/tulip-purple-2.png", "../images/flowers/tulip-purple-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 9,
            "name": "tulip-yellow",
            "image": ["../images/flowers/tulip-yellow-1.png", "../images/flowers/tulip-yellow-2.png", "../images/flowers/tulip-yellow-3.png"],
            "meaning": "",
            "tags": "passion, romance"
        }
    ];

    /*var flowers = $.getJSON("flowers.json", function(){
        console.log()
    }) */

    var img;
    
    var flowerOptionsWrapper = document.getElementById('flower-option-btns-container');
    flowerOptionsWrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'A';
        if (!isButton) {
          return;
        }
      
        var flowerId = event.target.id;

        //If vase is not full
        if (sessionStorage.getItem("bybFlowerCtr") < 3) {
            bybFlowerCtr++;

            img = flowers[flowerId-1].image[bybFlowerCtr-1];
            console.log(img);

            // Place image at correct position in vase 
            $('#byb-flower-'+bybFlowerCtr).attr('src', img);

            // Save flower id into session variable bybFlower#
            sessionStorage.setItem("bybFlower"+bybFlowerCtr, flowerId);
            console.log("bybFlower"+bybFlowerCtr + " : " +sessionStorage.getItem("bybFlower"+bybFlowerCtr));
        }

        sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
        console.log("session " + sessionStorage.getItem("bybFlowerCtr"));

      })

});
