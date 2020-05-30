
$(document).ready(function(){ 
    $("#btnAgendar").click(function() { 
      $("#modal").fadeIn("slow");
    });
  
    $("#fecharModal").click(function() { 
      $("#modal").fadeOut("slow"); 
    });

    $("#fecharModal2").click(function() { 
      $("#modal").fadeOut("slow"); 
    });
});

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
        delay: 3500,
        stopOnLastSlide: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});