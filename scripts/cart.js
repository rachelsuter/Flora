var products = [
    {
        "itemNum": 1,
        "name": "Optimist",
        "image": "../images/bouquets/optimist.png",
        "meaning": "This bouquet is perfect for Mother's Day. The flowers within it show love and adoraction.",
        "price": 34
    },
    {
        "itemNum": 2,
        "name": "The Firecracker",
        "image": "../images/bouquets/the-firecracker.png",
        "meaning": "The bold flowers within this bouquet show love, passion, and devotion.",
        "price": 34
    },
    {
        "itemNum": 3,
        "name": "Refresh",
        "image": "../images/bouquets/refresh.png",
        "meaning": "The flowers in this bouquet show love and appreciation.",
        "price": 34
    },
    {
        "itemNum": 4,
        "name": "Pearl",
        "image": "../images/bouquets/pearl.png",
        "meaning": "This bouquet shows pure, familial love.",
        "price": 34
    },
    {
        "itemNum": 5,
        "name": "Momenta",
        "image": "../images/bouquets/momenta.png",
        "meaning": "These flowers show love and devotion.",
        "price": 34
    },
    {
        "itemNum": 6,
        "name": "Carnelian",
        "image": "../images/bouquets/carnelian.png",
        "meaning": "This bouquet sends the message of happiness.",
        "price": 34
    },
    {
        "itemNum": 7,
        "name": "Cafe Azul",
        "image": "../images/bouquets/cafe-azul.png",
        "meaning": "These flowers show warmth and thinking of someone.",
        "price": 34
    },
    {
        "itemNum": 8,
        "name": "The Prism",
        "image": "../images/bouquets/the-prism.png",
        "meaning": "The bold flowers within this bouquet show love, passion, and devotion.",
        "price": 34
    }
];
    
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
    

function decreaseDefaultQty(defaultId) {
    console.log("qtyOf"+defaultId + ": " +sessionStorage.getItem("qtyOf"+defaultId));
    qty = sessionStorage.getItem("qtyOf"+defaultId);
    qty--;
    sessionStorage.setItem("qtyOf"+defaultId, qty);
    console.log("qtyOf"+defaultId + ": " +sessionStorage.getItem("qtyOf"+defaultId));

    $("#row" + itemNum + "qty").html("<button onclick=decreaseDefaultQty("+defaultId+");>-</button>"+sessionStorage.getItem("qtyOf"+defaultId)+"<button onclick=increaseDefaultQty("+defaultId+");>+</button>");   
}

function decreaseCustomQty(customId) {

}