var flowers = [
    {
        "flowerId": 1,
        "name": "Lavender Rose",
        "image": ["../images/flowers/rose-lavender-1.png", "../images/flowers/rose-lavender-2.png", "../images/flowers/rose-lavender-3.png"],
        "icon": "../images/flower-icons/rose-icon-lavender.png",
        "meaning": "Lavender roses signify love and adoration.",
        "tags": "love, adoration"
    },
    {
        "flowerId": 2,
        "name": "Orange Rose",
        "image": ["../images/flowers/rose-orange-1.png", "../images/flowers/rose-orange-2.png", "../images/flowers/rose-orange-3.png"],
        "icon": "../images/flower-icons/rose-icon-orange.png",
        "meaning": "Orange roses signify adoration and send the message 'I'm proud of you'.",
        "tags": "adoration, proud"
    },
    {
        "flowerId": 3,
        "name": "Red Rose",
        "image": ["../images/flowers/rose-red-1.png", "../images/flowers/rose-red-2.png", "../images/flowers/rose-red-3.png"],
        "icon": "../images/flower-icons/rose-icon-red.png",
        "meaning": "Red roses symbolize passion and romance.",
        "tags": "passion, romance"
    },
    {
        "flowerId": 4,
        "name": "Pink Carnation",
        "image": ["../images/flowers/carnation-pink-1.png", "../images/flowers/carnation-pink-2.png", "../images/flowers/carnation-pink-3.png"],
        "icon": "../images/flower-icons/carnation-icon-pink.png",
        "meaning": "Pink carnations show gratitude, fondness, and mother-like love.",
        "tags": "gratitude, fondness, mother"
    },
    {
        "flowerId": 5,
        "name": "Purple Carnation",
        "image": ["../images/flowers/carnation-purple-1.png", "../images/flowers/carnation-purple-2.png", "../images/flowers/carnation-purple-3.png"],
        "icon": "../images/flower-icons/carnation-icon-purple.png",
        "meaning": "Purple carnations show condolence or sorrow.",
        "tags": "condolence, sorry"
    },
    {
        "flowerId": 6,
        "name": "White Carnation",
        "image": ["../images/flowers/carnation-white-1.png", "../images/flowers/carnation-white-2.png", "../images/flowers/carnation-white-3.png"],
        "icon": "../images/flower-icons/carnation-icon-white.png",
        "meaning": "White carnations show a pure form of love and are a symbol of good luck.",
        "tags": "pure, luck"
    },
    {
        "flowerId": 7,
        "name": "Peach Tulip",
        "image": ["../images/flowers/tulip-peach-1.png", "../images/flowers/tulip-peach-2.png", "../images/flowers/tulip-peach-3.png"],
        "icon": "../images/flower-icons/tulip-icon-peach.png",
        "meaning": "Peach tulips symbolize loyalty and gratitude.",
        "tags": "loyalty, gratitude"
    },
    {
        "flowerId": 8,
        "name": "Purple Tulip",
        "image": ["../images/flowers/tulip-purple-1.png", "../images/flowers/tulip-purple-2.png", "../images/flowers/tulip-purple-3.png"],
        "icon": "../images/flower-icons/tulip-icon-purple.png",
        "meaning": "Purple tulips represent admiration and can send a congratulatory message.",
        "tags": "admiration, congratulations"
    },
    {
        "flowerId": 9,
        "name": "Yellow Tulip",
        "image": ["../images/flowers/tulip-yellow-1.png", "../images/flowers/tulip-yellow-2.png", "../images/flowers/tulip-yellow-3.png"],
        "icon": "../images/flower-icons/tulip-icon-yellow.png",
        "meaning": "Yellow tulips show cheer and happiness.",
        "tags": "cheer, happy"
    }
];

$(document).ready(function(){
    console.log("q1 "+sessionStorage.getItem("q1"));
    console.log("q2 "+sessionStorage.getItem("q2"));
    console.log("q3 "+sessionStorage.getItem("q3"));

    var q1 = sessionStorage.getItem("q1").toLowerCase();
    var q2 = sessionStorage.getItem("q2").toLowerCase();
    var q3 = sessionStorage.getItem("q3").toLowerCase().split(",");

    var answers = [q1, q2, q3[0], q3[1], q3[2]];
    console.log(answers);

    var flowersMatches = [0,0,0,0,0,0,0,0,0,0];

    var i = 0;
    var j = 0;
    while (i <= answers.length) {
        while (j <= flowersMatches.length) {
            console.log(typeof flowers[j].tags);
            //console.log(typeof answers[i]);
            console.log(flowers[j].tags);
            if ((flowers[j+1].tags).includes(answers[i])) {
                console.log(flowers[j].tags);
                flowers[j]++;
            }
            j++;
        }
        i++;
    }
});