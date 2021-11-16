
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
            "name": "Lavender Rose",
            "image": ["../images/flowers/rose-lavender-1.png", "../images/flowers/rose-lavender-2.png", "../images/flowers/rose-lavender-3.png"],
            "icon": "../images/flower-icons/rose-icon-lavender.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 2,
            "name": "Orange Rose",
            "image": ["../images/flowers/rose-orange-1.png", "../images/flowers/rose-orange-2.png", "../images/flowers/rose-orange-3.png"],
            "icon": "../images/flower-icons/rose-icon-orange.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 3,
            "name": "Red Rose",
            "image": ["../images/flowers/rose-red-1.png", "../images/flowers/rose-red-2.png", "../images/flowers/rose-red-3.png"],
            "icon": "../images/flower-icons/rose-red-lavender.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 4,
            "name": "Pink Carnation",
            "image": ["../images/flowers/carnation-pink-1.png", "../images/flowers/carnation-pink-2.png", "../images/flowers/carnation-pink-3.png"],
            "icon": "../images/flower-icons/carnation-icon-pink.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 5,
            "name": "Purple Carnation",
            "image": ["../images/flowers/carnation-purple-1.png", "../images/flowers/carnation-purple-2.png", "../images/flowers/carnation-purple-3.png"],
            "icon": "../images/flower-icons/carnation-icon-purple.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 6,
            "name": "White Carnation",
            "image": ["../images/flowers/carnation-white-1.png", "../images/flowers/carnation-white-2.png", "../images/flowers/carnation-white-3.png"],
            "icon": "../images/flower-icons/carnation-icon-white.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 7,
            "name": "Peach Tulip",
            "image": ["../images/flowers/tulip-peach-1.png", "../images/flowers/tulip-peach-2.png", "../images/flowers/tulip-peach-3.png"],
            "icon": "../images/flower-icons/tulip-icon-peach.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 8,
            "name": "Purple Tulip",
            "image": ["../images/flowers/tulip-purple-1.png", "../images/flowers/tulip-purple-2.png", "../images/flowers/tulip-purple-3.png"],
            "icon": "../images/flower-icons/tulip-icon-purple.png",
            "meaning": "",
            "tags": "passion, romance"
        },
        {
            "flowerId": 9,
            "name": "Yellow Tulip",
            "image": ["../images/flowers/tulip-yellow-1.png", "../images/flowers/tulip-yellow-2.png", "../images/flowers/tulip-yellow-3.png"],
            "icon": "../images/flower-icons/tulip-icon-yellow.png",
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
            icon = flowers[flowerId-1].icon;
            flowerName = flowers[flowerId-1].name;
            console.log(img);

            // Place image at correct position in vase 
            $('#byb-flower-'+bybFlowerCtr).attr('src', img);

            // Add added flowers to side 
            $("#flowers-table").append("<tr id='row" + bybFlowerCtr + "'></tr>");
            console.log("got here");
            $("#row" + bybFlowerCtr).append("<td><img class='icon-resize' src="+icon+"/></td>");
            $("#row" + bybFlowerCtr).append("<td>"+flowerName+"</td>");
            $("#row" + bybFlowerCtr).append("<td><a onclick='removeFlower("+bybFlowerCtr+")'><img class='icon-resize' src='../images/icons/trash-icon.png'</a></td>");

            // Save flower id into session variable bybFlower#
            sessionStorage.setItem("bybFlower"+bybFlowerCtr, flowerId);
            console.log("bybFlower"+bybFlowerCtr + " : " +sessionStorage.getItem("bybFlower"+bybFlowerCtr));
        }

        sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
        console.log("session " + sessionStorage.getItem("bybFlowerCtr"));

      })
});


function removeFlower(position) {
    console.log("position " + position);
}