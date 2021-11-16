$(document).ready(function(){
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

    // Fill vase with flowers on loading page if flowers have already been added 
    if (sessionStorage.getItem("bybFlowerCtr") != 0) {
        var ctr = sessionStorage.getItem("bybFlowerCtr");
        var i = 0;
        while (i < sessionStorage.getItem("bybFlowerCtr")) {
            i++;
            flowerId = sessionStorage.getItem("bybFlower"+i)
            img = 

            $('#byb-flower-'+i).attr('src', flowers[flowerId-1].image[i-1]);
            
        }

    }
});
