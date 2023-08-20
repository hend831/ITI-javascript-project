

$(document).ready(function() {
    var cartTable = $('#cartTable');

    var storedProductInfo = localStorage.getItem('productInfo');
    if (storedProductInfo) {
        var productDetails = JSON.parse(storedProductInfo);

        var newRow = $('<tr class="shopList">').append(
            $('<td>').html('<a href="#"><i class="far fab fa-times-circle"></i></a>'),
            $('<td>').html('<img src="' + productDetails.imageSrc + '" alt="">'),
            $('<td>').text(productDetails.productName),
            $('<td>').text(productDetails.productPrice.toFixed(2)),
            $('<td>').html('<input type="number" value="' + productDetails.quantity + '">')
        );

        cartTable.append(newRow);
    }
});
   