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
        "tags": "gratitude, fondness, mother, thank you"
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
        "tags": "loyalty, gratitude, thank you"
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
var flowersMatches = [0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
    console.log("q1 "+sessionStorage.getItem("q1"));
    console.log("q2 "+sessionStorage.getItem("q2"));
    console.log("q3 "+sessionStorage.getItem("q3"));

    var q1 = sessionStorage.getItem("q1").toLowerCase();
    var q2 = sessionStorage.getItem("q2").toLowerCase();
    var q3 = sessionStorage.getItem("q3").toLowerCase().split(", ");

    var answers = [q1, q2, q3[0], q3[1], q3[2]];
    console.log(answers);


 
   /* console.log("TEST");
    console.log(flowers[0].tags);
    console.log(flowers[1].tags);
    console.log(flowers[2].tags);
    console.log(flowers[3].tags);
    console.log(flowers[4].tags);
    console.log(flowers[5].tags);
    console.log(flowers[6].tags);
    console.log(flowers[7].tags);
    console.log(flowers[8].tags);
    //console.log(flowers[9].tags);
    console.log("TEST");*/


   /* var k = 0;
    while (i < answers.length) {
        console.log("answers at " +i+ ": " + answers[i]);
        while (j < flowers.length) {

            console.log("answers: " + answers[k]);
            if ((flowers[j].tags).includes(answers[k])) {
                console.log("tags: " + flowers[j].tags);
                //console.log("answers: " + answers[i]);
                flowersMatches[j]++;
            }
            j++;
            k++;
        }
        k = 0;
        i++;
    }
    console.log(flowersMatches); */
   
    var j = 0;

    while (j < flowers.length) {
        if (flowers[j].tags.includes(answers[2])) {
            flowersMatches[j]++;
        }
        if (flowers[j].tags.includes(answers[3])) {
            flowersMatches[j]++;
        }
        if (flowers[j].tags.includes(answers[4])) {
            flowersMatches[j]++;
        } else {

        }
        j++;
    }
    console.log(flowersMatches);

    var topThree = [0,1,3];

    var i = 0;
    while (i < flowersMatches.length) {
        if (flowersMatches[i]>=flowersMatches[topThree[0]]) {
            topThree[2] = topThree[1];
            topThree[1] = topThree[0];
            topThree[0] = i;
        }
        i++;
    }
    console.log(topThree);

    $('#byb-flower-1').attr('src', flowers[topThree[0]].image[0]);
    $('#byb-flower-2').attr('src', flowers[topThree[1]].image[1]);
    $('#byb-flower-3').attr('src', flowers[topThree[2]].image[2]);
    $('#quiz-meaning-1').html(flowers[topThree[0]].meaning);
    $('#quiz-meaning-2').html(flowers[topThree[1]].meaning);
    $('#quiz-meaning-3').html(flowers[topThree[2]].meaning);

});