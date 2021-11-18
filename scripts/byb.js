
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
            "meaning": "1",
            "tags": "passion, romance"
        },
        {
            "flowerId": 2,
            "name": "Orange Rose",
            "image": ["../images/flowers/rose-orange-1.png", "../images/flowers/rose-orange-2.png", "../images/flowers/rose-orange-3.png"],
            "icon": "../images/flower-icons/rose-icon-orange.png",
            "meaning": "2",
            "tags": "passion, romance"
        },
        {
            "flowerId": 3,
            "name": "Red Rose",
            "image": ["../images/flowers/rose-red-1.png", "../images/flowers/rose-red-2.png", "../images/flowers/rose-red-3.png"],
            "icon": "../images/flower-icons/rose-icon-red.png",
            "meaning": "3",
            "tags": "passion, romance"
        },
        {
            "flowerId": 4,
            "name": "Pink Carnation",
            "image": ["../images/flowers/carnation-pink-1.png", "../images/flowers/carnation-pink-2.png", "../images/flowers/carnation-pink-3.png"],
            "icon": "../images/flower-icons/carnation-icon-pink.png",
            "meaning": "4",
            "tags": "passion, romance"
        },
        {
            "flowerId": 5,
            "name": "Purple Carnation",
            "image": ["../images/flowers/carnation-purple-1.png", "../images/flowers/carnation-purple-2.png", "../images/flowers/carnation-purple-3.png"],
            "icon": "../images/flower-icons/carnation-icon-purple.png",
            "meaning": "5",
            "tags": "passion, romance"
        },
        {
            "flowerId": 6,
            "name": "White Carnation",
            "image": ["../images/flowers/carnation-white-1.png", "../images/flowers/carnation-white-2.png", "../images/flowers/carnation-white-3.png"],
            "icon": "../images/flower-icons/carnation-icon-white.png",
            "meaning": "6",
            "tags": "passion, romance"
        },
        {
            "flowerId": 7,
            "name": "Peach Tulip",
            "image": ["../images/flowers/tulip-peach-1.png", "../images/flowers/tulip-peach-2.png", "../images/flowers/tulip-peach-3.png"],
            "icon": "../images/flower-icons/tulip-icon-peach.png",
            "meaning": "7",
            "tags": "passion, romance"
        },
        {
            "flowerId": 8,
            "name": "Purple Tulip",
            "image": ["../images/flowers/tulip-purple-1.png", "../images/flowers/tulip-purple-2.png", "../images/flowers/tulip-purple-3.png"],
            "icon": "../images/flower-icons/tulip-icon-purple.png",
            "meaning": "8",
            "tags": "passion, romance"
        },
        {
            "flowerId": 9,
            "name": "Yellow Tulip",
            "image": ["../images/flowers/tulip-yellow-1.png", "../images/flowers/tulip-yellow-2.png", "../images/flowers/tulip-yellow-3.png"],
            "icon": "../images/flower-icons/tulip-icon-yellow.png",
            "meaning": "9",
            "tags": "passion, romance"
        }
    ];

    if (sessionStorage.getItem("bybFlowerCtr") > 0) {
        $('#start-over-btn').removeAttr('disabled');
        $('#add-to-cart-btn').removeAttr('disabled');
        console.log("disabled");
    } else {
        $('#start-over-btn').attr('disabled','disabled');
        $('#add-to-cart-btn').attr('disabled','disabled');
        console.log("enabled");
    }

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
            meaning = flowers[flowerId-1].meaning;
            console.log(img);

            // Place image at correct position in vase 
            $('#byb-flower-'+bybFlowerCtr).attr('src', img);

            // Add added flowers to side 
            $("#flowers-table").append("<tr id='row" + bybFlowerCtr + "'></tr>");
            console.log("got here");
            $("#row" + bybFlowerCtr).append("<td><img class='icon-resize' src="+icon+"/></td>");
            $("#row" + bybFlowerCtr).append("<td>"+flowerName+"</td>");
            $("#row" + bybFlowerCtr).append("<td><a onclick='areYouSureRemove("+bybFlowerCtr+")'><img class='icon-resize' src='../images/icons/trash-icon-white.png'</a></td>");

            
            $("#col3-content").append("<p id='meaning" + bybFlowerCtr + "'></p>");
            $("#meaning" + bybFlowerCtr).append(meaning);

            // Save flower id into session variable bybFlower#
            sessionStorage.setItem("bybFlower"+bybFlowerCtr, flowerId);
            console.log("bybFlower"+bybFlowerCtr + " : " +sessionStorage.getItem("bybFlower"+bybFlowerCtr));
        }

        sessionStorage.setItem("bybFlowerCtr", bybFlowerCtr);
        console.log("session " + sessionStorage.getItem("bybFlowerCtr"));

        // Disable start over button & add to cart btn if no flowers in vase
        if (sessionStorage.getItem("bybFlowerCtr") > 0) {
            $('#start-over-btn').removeAttr('disabled');
            $('#add-to-cart-btn').removeAttr('disabled');
            console.log("disabled");
        } else {
            $('#start-over-btn').attr('disabled','disabled');
            $('#add-to-cart-btn').attr('disabled','disabled');
            console.log("enabled");
        }
    

      })
});


function areYouSureRemove(position) {
    swal({
        title: "Are you sure you want to remove this flower?",
        buttons: {
            remove: {
                text: "Remove",
                className: "confirm-btn-color",
              },
            cancel: true,
            

        }
        /*buttons: ["Cancel", "Start Over"],
        dangerMode: true,*/
      })
      .then((willDelete) => {
        if (willDelete) {
          removeFlower(position);
        } else {
          //swal("Your imaginary file is safe!");
        }
      });
}

function removeFlower(position) {
    ctr = sessionStorage.getItem("bybFlowerCtr");
    console.log(sessionStorage.getItem("bybFlowerCtr"));

    console.log("position " + position);

    // Remove flower from left list when clicking trash
    var row = (document).getElementById("row"+position);
    row.parentNode.removeChild(row);

    // Depending on position of flower being removed, remove session storage for last flower 
    // and replace removed flower with flower above it
    if (position == 3) {
        sessionStorage.removeItem("bybFlower"+position);
        
    } else if (position == 2) {
        if (ctr == 2) {
            sessionStorage.removeItem("bybFlower"+position);
        } else if (ctr == 3) {
            pos3 = sessionStorage.getItem("bybFlower3");
            sessionStorage.setItem("bybFlower2", pos3)
        }
    } else if (position == 1) {
        if (ctr == 1) {
            sessionStorage.removeItem("bybFlower"+position);
        } else if (ctr == 2) {
            pos2 = sessionStorage.getItem("bybFlower2");
            sessionStorage.setItem("bybFlower1", pos2)
        } else if (ctr == 3) {
            pos3 = sessionStorage.getItem("bybFlower3");
            pos2 = sessionStorage.getItem("bybFlower2");
            sessionStorage.setItem("bybFlower2", pos3)
            sessionStorage.setItem("bybFlower1", pos2)
        }
    }

    location.reload();
    
    ctr--;
    sessionStorage.setItem("bybFlowerCtr", ctr);
}

function areYouSureStartOver() {
    swal({
        title: "Are you sure you want to start over?",
        text: "Once you start over, you will not be able to recover this bouquet.",
        /*icon: "../images/icons/start-over-icon.png",*/
        buttons: {
            startOver: {
                text: "Start Over",
                className: "confirm-btn-color",
              },
            cancel: true,
            

        }
        /*buttons: ["Cancel", "Start Over"],
        dangerMode: true,*/
      })
      .then((willDelete) => {
        if (willDelete) {
          startOver();
        } else {
          //swal("Your imaginary file is safe!");
        }
      });
}

function startOver(){
    
    sessionStorage.removeItem("bybFlower1");
    sessionStorage.removeItem("bybFlower2");
    sessionStorage.removeItem("bybFlower3");
    sessionStorage.setItem("bybFlowerCtr", 0);
    location.reload();
}


function addCustomBouquetToCart() {
    ctr = sessionStorage.getItem("customBouquetInCartCtr");
    ctr++;
    sessionStorage.setItem("customBouquetInCartCtr", ctr);

    
    // Add flower id # to string called customId#
    // If flower doesn't exist, add 0

    flower1 = sessionStorage.getItem("bybFlower1");
    sessionStorage.removeItem("bybFlower1");

    if (sessionStorage.getItem("bybFlower2") == null) {
        flower2 = 0;
    } else {
        flower2 = sessionStorage.getItem("bybFlower2");
        sessionStorage.removeItem("bybFlower2");
    }

    if (sessionStorage.getItem("bybFlower3") == null) {
        flower3 = 0;
    } else {
        flower3 = sessionStorage.getItem("bybFlower3");
        sessionStorage.removeItem("bybFlower3");
    } 

    // customItem# = ###
    //var flowersInBouquet = sessionStorage.getItem("bybFlower1")+sessionStorage.getItem("bybFlower2")+sessionStorage.getItem("bybFlower3");
    
    var flowersInBouquet = flower1+flower2+flower3;
    sessionStorage.setItem("customItem"+ctr, flowersInBouquet);

    console.log(typeof sessionStorage.getItem("customItem"+ctr));


    sessionStorage.setItem("bybFlowerCtr", 0);
    location.reload();
}