var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
      types: ['geocode'],
      /*componentRestrictions: {
       country: "USA"
      }*/
    });
      
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var near_place = autocomplete.getPlace();
    });

});

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(states[networkState] == 'No network connection' || states[networkState] == 'Unknown connection'){
        return false;
    }else{
        return true;
    }
}

function offlineMode() {
    if ($("#online-toast").hasClass("show")) {
        $("#online-toast").removeClass("show");
    }
    if ($("#offline-toast").length > 0) {
        $("#offline-toast").addClass("show");
    }
    else {
        offlineModeToast();
    }
    $(".toast-box.tap-to-close").click(function () {
        $(this).removeClass("show");
    });
}

function requiredField(val){
    var value   = $.trim(val);
    var number  = value[0];

    if (number == '0') { $('#phoneNumber').val('62'+$('#phoneNumber').val().substr(1));}
    if (number == '8') { $('#phoneNumber').val('628'+$('#phoneNumber').val().substr(1));}
}