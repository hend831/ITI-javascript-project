
$(document).ready(function() {
    var slides = $("#slideshow img");
    var currentSlide = 0;
    var slideInterval;
  
    // Start the slideshow
    startSlideshow();
  
    // Next button click event
    $("#next-button").click(function() {
      nextSlide();
      clearInterval(slideInterval); // Stop the automatic slideshow
    });
  
    // Previous button click event
    $("#prev-button").click(function() {
      prevSlide();
      clearInterval(slideInterval); // Stop the automatic slideshow
    });
    startSlideshow();
    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 1500); // Change slide every 3 seconds
    }
  
    function nextSlide() {
      // Hide the current slide
      slides.eq(currentSlide).removeClass("active");
  
      // Move to the next slide
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Show the next slide
      slides.eq(currentSlide).addClass("active");
    }
  
    function prevSlide() {
      // Hide the current slide
      slides.eq(currentSlide).removeClass("active");
  
      // Move to the previous slide
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  
      // Show the previous slide
      slides.eq(currentSlide).addClass("active");
    }


    
  });


  function readMorFun1() {
    
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } 
    else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
    
  }

  function readMorFun2(){
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } 
    else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
  }

  function readMorFun3(){
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "Read more";
      moreText3.style.display = "none";
    } 
    else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Read less";
      moreText3.style.display = "inline";
    }
  }


