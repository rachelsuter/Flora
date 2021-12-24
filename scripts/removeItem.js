function removeDefaultBouquet(itemNum) {

    if(sessionStorage.getItem("qtyOf"+itemNum) == 1) {
        swal({
            title: "Are you sure you want to remove this item?",
            buttons: {
                remove: {
                    text: "Remove",
                    className: "confirm-btn-color",
                  },
                cancel: true,
                
    
            }
          })
          .then((willDelete) => {
            if (willDelete) {
                confirmDefaultRemove(itemNum);
            } else {
              //swal("Your imaginary file is safe!");
            }
          });
    } else {
        confirmDefaultRemove(itemNum);
    }
}

function confirmDefaultRemove(itemNum){
    console.log("itemNum " + itemNum);
    
    defaultBouquetCtr = parseInt(sessionStorage.getItem("defaultBouquetCtr"));
    var i = 0;
    var removed = 0;
    while (i <= defaultBouquetCtr) {
        console.log(i + sessionStorage.getItem("defaultBouquet"+i));

        if(sessionStorage.getItem("defaultBouquet"+i) == itemNum) {
            console.log("in here");
            qty = sessionStorage.getItem("qtyOf"+itemNum);
            qty--;
            sessionStorage.setItem("qtyOf"+itemNum, qty);

            if (removed == 0) {

                cartTotal = sessionStorage.getItem("cartTotal");
                cartTotal = cartTotal - 34;
                sessionStorage.setItem("cartTotal", cartTotal);

                console.log("removing defaultBouquet"+i);
                sessionStorage.removeItem("defaultBouquet"+i);

                removed = 1;
            } 
        }
        i++;
    }
    location.reload();
}

function removeCustomBouquet(itemNum) {
    if(sessionStorage.getItem("qty"+itemNum) == 1) {
        swal({
            title: "Are you sure you want to remove this item?",
            buttons: {
                remove: {
                    text: "Remove",
                    className: "confirm-btn-color",
                  },
                cancel: true,
                
    
            }
          })
          .then((willDelete) => {
            if (willDelete) {
                confirmCustomRemove(itemNum);
            } else {
              //swal("Your imaginary file is safe!");
            }
          });
    } else {
        confirmCustomRemove(itemNum);
    }
    //confirmCustomRemove(itemNum);
}

function confirmCustomRemove(itemNum) {
    console.log("itemNum " + itemNum);
    customBouquetCtr = parseInt(sessionStorage.getItem("customBouquetInCartCtr"));
    console.log("customCtr: " + customBouquetCtr);

    var i = 0;
    var removed = 0;
    while (i <= customBouquetCtr) {
        console.log(i + sessionStorage.getItem("customItem"+i));

        if (sessionStorage.getItem("customItem"+i) == itemNum) {
           /* console.log("Found! " + sessionStorage.getItem("customItem"+i) + "==" + itemNum);
            console.log("removing customBouquet"+i);
            sessionStorage.removeItem("customItem"+i);*/

            qty = sessionStorage.getItem("qty"+itemNum);
            qty--;
            sessionStorage.setItem("qty"+itemNum, qty);

            if (removed == 0) {

                cartTotal = sessionStorage.getItem("cartTotal");
                cartTotal = cartTotal - 45;
                sessionStorage.setItem("cartTotal", cartTotal);

                console.log("removing customBouquet"+i);
                sessionStorage.removeItem("customItem"+i);

                removed = 1;
            } 
        }

        i++;
    }
    location.reload();

    /*
    customBouquetCtr = parseInt(sessionStorage.getItem("customBouquetInCartCtr"));    
    var i = 0;
    var removed = 0;
    while (i <= customBouquetCtr) {
        console.log(i + sessionStorage.getItem("customItem"+i));

        if(sessionStorage.getItem("customItem"+i) == itemNum) {
            console.log("in here");
            qty = sessionStorage.getItem("qty"+itemNum);
            qty--;
            sessionStorage.setItem("qty"+itemNum, qty);

            if (removed == 0) {

                cartTotal = sessionStorage.getItem("cartTotal");
                cartTotal = cartTotal - 45;
                sessionStorage.setItem("cartTotal", cartTotal);

                console.log("removing defaultBouquet"+i);
                sessionStorage.removeItem("customItem"+i);

                removed = 1;
            } 
        }
        i++;
    }
    if (customBouquetCtr == 0) {
        customBouquetCtr--;
        sessionStorage.setItem("customBouquetInCartCtr",customBouquetCtr);
    }
    location.reload();
    */
}