function addToCart(itemNum) {
    //alert("Clicked! " + itemNum + document.cookie);

    var ctr = (document.cookie = "cartCtr")+1;
    var Item = "Item"+ctr;

    document.cookie = Item + "=" +itemNum;
    console.log(document.cookie);
  }