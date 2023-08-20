
var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", function(event) {
    mainImg.src = event.target.src;
  });
}







// Function to be called when "Add To Cart" button is clicked
function buyingSucceeded() {
    var productDetails = {
        imageSrc: document.querySelector('#MainImg').src,
        productName: document.querySelector('.pname').textContent,
        productPrice: parseFloat(document.querySelector('.pprice').textContent),
        quantity: parseInt(document.querySelector('.quantity').value)
    };

    localStorage.setItem('productInfo', JSON.stringify(productDetails));
    console.log('Product details stored in localStorage hend:', productDetails);
}
