
$('#chk').click(function () {
    $('#cadastroCPF').prop('disabled', function(i, v) { return !v; });
});

var $currentlySelected = null;
var selected = [];

$('#selectable').selectable({
    start: function(event, ui) {
        $currentlySelected = $('#selectable .ui-selected');
    },
    stop: function(event, ui) {
        for (var i = 0; i < selected.length; i++) {
            if ($.inArray(selected[i], $currentlySelected) >= 0) {
              $(selected[i]).removeClass('ui-selected');
            }
        }
        selected = [];
    },
    selecting: function(event, ui) {
        $currentlySelected.addClass('ui-selected'); // re-apply ui-selected class to currently selected items
    },
    selected: function(event, ui) {
        selected.push(ui.selected); 
    }
});

var swiperLogin = new Swiper ('.swiper-container, .swiper-login', {
    loop: false,    
    autoplay: {
        delay: 2500,
        stopOnLastSlide: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});


// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });
// }

// $('#homeMenu').click(function() {
//     mudaSlider();
// });
// $('#fecharLogin').click(function() {
//     mudaSlider();
// });

// function mudaSlider() {
//     if($('.home-menu').hasClass('slide-down')) {
//         $('.home-menu').addClass('slide-up', 800);
//         $('.home-menu').removeClass('slide-down'); 
//     } else {
//         $('.home-menu').removeClass('slide-up');
//         $('.home-menu').addClass('slide-down', 800); 
//     }
// }