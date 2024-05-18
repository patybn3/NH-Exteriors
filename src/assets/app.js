'use strict'

function checkScroll(){
    const scrolling = $('.navbar').height()
    const main = $('.main-page').offset().top;
    const windows = $(window).scrollTop()

    if(windows > scrolling && windows < main){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

$(window).scroll(function() {
  $('.navbar').trigger('reset')

  if ( $(this).scrollTop() >= 500 ) {
    $('.navbar').addClass('scrolled-main');
  } else if ( $(this).scrollTop() <= 540) {
    $('.navbar').removeClass('scrolled-main')
  }
});


$(window).scroll(function() {
  $('.navbar-blog').trigger('reset')

  if ( $(this).scrollTop() >= 50 ) {
    $('.navbar-blog').addClass('scrolled-main');
  } else if ( $(this).scrollTop() <= 70) {
    $('.navbar-blog').removeClass('scrolled-main')
  }
});

$(window).scroll(function() {
  $('.news-letter-blog').trigger('reset')

  if ( $(this).scrollTop() >= 50 ) {
    $('.news-letter-blog').addClass('scrolled-main-blog');
  } else if ( $(this).scrollTop() <= 70) {
    $('.news-letter-blog').removeClass('scrolled-main-blog')
  }
});

$('.a-to-c').on('click', function () {
  $('.list-a-c').show()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.d-to-f').on('click', function () {
  $('.list-d-f').show()
  $('.list-a-c').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.g-to-i').on('click', function () {
  $('.list-g-i').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.j-to-l').on('click', function () {
  $('.list-j-l').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.m-to-o').on('click', function () {
  $('.list-m-o').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.p-to-r').on('click', function () {
  $('.list-p-r').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-s-u').hide()
  $('.list-v-z').hide()
})

$('.s-to-u').on('click', function () {
  $('.list-s-u').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-v-z').hide()
})

$('.v-to-z').on('click', function () {
  $('.list-v-z').show()
  $('.list-a-c').hide()
  $('.list-d-f').hide()
  $('.list-g-i').hide()
  $('.list-j-l').hide()
  $('.list-m-o').hide()
  $('.list-p-r').hide()
  $('.list-s-u').hide()
})

$('.all-cities').on('click', function () {
  $('.list-s-u').show()
  $('.list-a-c').show()
  $('.list-d-f').show()
  $('.list-g-i').show()
  $('.list-j-l').show()
  $('.list-m-o').show()
  $('.list-p-r').show()
  $('.list-v-z').show()
})

$(document).ready(function(){
  $('#myInput').on('keyup', function() {
    const value = $(this).val().toLowerCase()
    $('.cities-column').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    $('.cities-list').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    $('.each-city').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})


window.addEventListener("DOMContentLoaded", function() {


  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form");
  let button = document.getElementById("my-form-button");
  let status = document.getElementById("my-form-status");
  let statusError = document.getElementById("my-form-status-error");
  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: none ";
    status.innerHTML = "Your message has been sent. Thank you!";
  }

  function error() {
    statusError.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// submit contact forms
$('#my-form-button').on('click', function () {
  $('.form').trigger('reset')
  $("#my-form-status-error").trigger('reset')
  $("#my-form-status").trigger('reset')
  $("#my-form-status-error").show()
  $("#my-form-status").show()

  setTimeout(() => {
    $("#my-form-status-error").fadeOut()
    $("#my-form-status").fadeOut()
  }, 3000)
})
