$(document).ready(function(){

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
                "icon": "../images/flower-icons/rose-icon-red.png",
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

    // Fill vase with flowers on loading page if flowers have already been added 
    if (sessionStorage.getItem("bybFlowerCtr") != 0) {
        var ctr = sessionStorage.getItem("bybFlowerCtr");
        var i = 0;
        while (i < sessionStorage.getItem("bybFlowerCtr")) {
            i++;
            flowerId = sessionStorage.getItem("bybFlower"+i)
            icon = flowers[flowerId-1].icon;
            flowerName = flowers[flowerId-1].name;

            // Add flower to correct position in vase
            $('#byb-flower-'+i).attr('src', flowers[flowerId-1].image[i-1]);

            // Add added flowers to side 
            $("#flowers-table").append("<tr id='row" + i + "'></tr>");
            console.log("got here");
            $("#row" + i).append("<td><img class='icon-resize' src="+icon+"/></td>");
            $("#row" + i).append("<td>"+flowerName+"</td>");
            $("#row" + i).append("<td><a onclick='removeFlower("+i+")'><img class='icon-resize' src='../images/icons/trash-icon.png'</a></td>");

            
        }

    }
});