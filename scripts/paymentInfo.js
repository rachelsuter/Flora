$(document).ready(function(){
    $('#billingAddressCheckbox').attr('checked','checked');

    $("#billingAddressCheckbox").change(function() {
        if ( $(this).is(':checked') ) {
            $("#billingAddress").hide();
            $('#address').removeAttr('required');
            $('#country').removeAttr('required');
            $('#zipcode').removeAttr('required');
            $('#city').removeAttr('required');
            $('#state').removeAttr('required');
        } else {
            $("#billingAddress").show();
            $('#address').attr('required','required');
            $('#country').attr('required','required');
            $('#zipcode').attr('required','required');
            $('#city').attr('required','required');
            $('#state').attr('required','required');
        }
    });

    /*if ($("#billingAddressCheckbox").is(':checked')) {
        $('#address').removeAttr('required');
        $('#country').removeAttr('required');
        $('#zipcode').removeAttr('required');
        $('#city').removeAttr('required');
        $('#state').removeAttr('required');
    } else {
        $('#address').attr('required','required');
        $('#country').attr('required','required');
        $('#zipcode').attr('required','required');
        $('#city').attr('required','required');
        $('#state').attr('required','required');
    }*/
})

function checkout() {
    swal({
        title: "Your order has been placed!",
        text: "Order #1234",
        buttons: {
            remove: {
                text: "Return to Home",
                className: "confirm-btn-color",
              }
        }
        /*buttons: ["Cancel", "Start Over"],
        dangerMode: true,*/
      })
      .then((willDelete) => {
        if (willDelete) {
            location.href="index.html";
        } else {
          //swal("Your imaginary file is safe!");
          location.href="index.html";
        }
      });


      clearCart();

      
}

function clearCart() {
   

    defaultBouquetCtr = parseInt(sessionStorage.getItem("defaultBouquetCtr"));
    var i = 0;
    while (i < defaultBouquetCtr) {
        if(sessionStorage.getItem("defaultBouquet"+i) != null) {
            sessionStorage.removeItem("defaultBouquet"+i);
        }

        if (sessionStorage.getItem("qtyOf"+i) != null) {
            sessionStorage.removeItem("qtyOf"+i);
        }
        i++;
    }

    customBouquetCtr = parseInt(sessionStorage.getItem("customBouquetInCartCtr"));
    var j = 0;
    while (j  < customBouquetCtr) {
        if(sessionStorage.getItem("customItem"+j) != null) {
            sessionStorage.removeItem("customItem"+j); 
        }
        if (sessionStorage.getItem("qty"+j) != null) {
            sessionStorage.removeItem("qty"+j);
        }
        j++;
    }

    sessionStorage.setItem("defaultBouquetCtr", 0);
    sessionStorage.setItem("customBouquetInCartCtr", 0);

    sessionStorage.setItem("cartTotal", 0);

}