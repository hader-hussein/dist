//conent-us//
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
///
$(document).ready(function(){
  $(".component-team-slider").owlCarousel(
    {
      // rtl: true,
      // // ltr: true,
      autoplay:true,
      autoplayhoverpause: true,
      autoplaytimeout:100,
      items:2,
      // loop:true,
      nav:true,
      responsive:{
        0:{
          items:1,
          dots:false
        },
        485:{
          items:2,
          dots:false
        },
        728:{
          items:3,
          dots:false
        },
        960:{
          items:3,
          dots:false
        },
        1200:{
          items:2,
          dots:true,
          
        },
      }
    }
  );

  ////
  $('.carousel-caption p ').addClass('animated fadeInUp');
  $('.carousel-caption h5 ').addClass('animated fadeInLeft');
  $('.title ').addClass('animated fadeInLeft');

  $(window).scroll(function () {
   

  if ($(window).scrollTop() >= 9000 ){
    $('.img-our-project ').addClass('animated fadeInRight');

      // debugger;
      $('.component-our-Mission').addClass('animated fadeInUp');
  }
});})
//activ-link-nav//
const currentlocation = location.href; 
const menuitem = document.querySelectorAll('.nav-light .nav-link');
 const menulength = menuitem.length
for (let i = 0; i<menulength; i++){
 if(menuitem[i].href === currentlocation) {
   menuitem[i].className = "active" 
    }
}
////
$(window).on('load',function(){
  var delayMs = 500; // delay in milliseconds
  
  setTimeout(function(){

      $('#exampleModal').modal('show');
  }, delayMs);
});
$("#exampleModal").on('shown.bs.modal', function(){
  /* Show the body scrollbar. */
  document.body.style.overflow = "auto";
});
$(window).scroll(function () {
  $('#exampleModal').modal('hide');

});
///6-3-2022//
filterSelection("all-a")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all-a") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
$('.buton-unit').on('click', function() {
  $('.buton-unit').parent().removeClass('active');
  $(this).parent().addClass('active');
});

// ******************VIDEO*****************************
