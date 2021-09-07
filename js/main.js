$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

// Jqurey Modal Video Plugin Code
$(".video-play-btn").modalVideo();

//Owl Carousel Jqurey Plugin
// Feature Carousel
$(document).ready(function () {
  $(".fearures-carousel ").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // screenshotes-carousel
  $(".screenshotes-carousel ").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  //Testimonial-carousel
  $(".testimonial-carousel ").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //Team Membar-carousel
  $(".team-carousel ").owlCarousel({
    loop: true,
    margin: 0,
    // autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// counter up
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });
});

// Toggle theme Light & Dark Mode
function toggleTheme() {
  if (localStorage.getItem("shala-theme") !== null) {
    if (localStorage.getItem("shala-theme") === "dark") {
      $("body").addClass("dark");
    } else {
      $("body").removeClass("dark");
    }
  }
  updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click", function () {
  $("body").toggleClass("dark");
  if ($("body").hasClass("dark")) {
    localStorage.setItem("shala-theme", "dark");
  } else {
    localStorage.setItem("shala-theme", "light");
  }
  updateIcon();
});

function updateIcon() {
  if ($("body").hasClass("dark")) {
    $(".toggle-theme i").removeClass("fa-moon");
    $(".toggle-theme i").addClass("fa-sun");
  } else {
    $(".toggle-theme i").removeClass("fa-sun");
    $(".toggle-theme i").addClass("fa-moon");
  }
}
