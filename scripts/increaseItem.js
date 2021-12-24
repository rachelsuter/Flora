function increaseDefaultBouquet(itemNum) {
    qty = sessionStorage.getItem("qtyOf"+itemNum); 
    qty++;
    sessionStorage.setItem("qtyOf"+itemNum, qty);

    numBouquets = sessionStorage.getItem("defaultBouquetCtr");
    numBouquets++;
    sessionStorage.setItem("defaultBouquet" + numBouquets, itemNum);

    sessionStorage.setItem("defaultBouquetCtr", numBouquets);


    cartTotal = parseInt(sessionStorage.getItem("cartTotal"));
    cartTotal = cartTotal + 34;
    sessionStorage.setItem("cartTotal", cartTotal);

    $("#row" + itemNum + "qty").html("<button class='qty-btn' onclick=removeDefaultBouquet("+itemNum+");>-</button>"+sessionStorage.getItem("qtyOf"+itemNum)+"<button class='qty-btn' onclick=increaseDefaultBouquet("+itemNum+");>+</button>");   
    //$("#row" + itemNum + "price").html("$"+(34 * parseInt(sessionStorage.getItem("qtyOf"+itemNum))));  

    location.reload();
}

function increaseCustomBouquet(itemNum) {

    //increase qty of item
    qty = sessionStorage.getItem("qty"+itemNum); 
    qty++;
    sessionStorage.setItem("qty"+itemNum, qty);

    //increase total custom bouquets
    numBouquets = sessionStorage.getItem("customBouquetInCartCtr");
    numBouquets++;

    //create new custom bouquet
    sessionStorage.setItem("customItem" + numBouquets, itemNum);

    sessionStorage.setItem("customBouquetInCartCtr", numBouquets);


    cartTotal = parseInt(sessionStorage.getItem("cartTotal"));
    cartTotal = cartTotal + 45;
    sessionStorage.setItem("cartTotal", cartTotal);

    $("#row" + itemNum + "qty").html("<button class='qty-btn' onclick=removeCustomBouquet("+itemNum+");>-</button>"+sessionStorage.getItem("qty"+itemNum)+"<button class='qty-btn' onclick=increaseCustomBouquet("+itemNum+");>+</button>");   
    //$("#row" + itemNum + "price").html("$"+(34 * parseInt(sessionStorage.getItem("qtyOf"+itemNum))));  

    location.reload();
}