
var currentLat, currentLon;

/*
 * MAPS
 */

function initHappening() {
    getLocation();
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
       console.log("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    //Initialize draggable marker coordinates
    currentLat = lat;
    currentLon = lon;

    initialize(lat, lon);
}


function initialize(lat, lon) {
    getLocation();
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,

        styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e4e4e4"}]},{"featureType":"landscape.man_made","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#e7e7e7"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"saturation":"-25"},{"color":"#b6b6b6"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":"-15"}]},{"featureType":"poi.attraction","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"color":"#89a392"}]},{"featureType":"poi.business","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#89a392"}]},{"featureType":"poi.government","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#9fbaa9"}]},{"featureType":"poi.medical","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#9fbaa9"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.place_of_worship","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#9fbaa9"}]},{"featureType":"poi.school","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#9fbaa9"}]},{"featureType":"poi.sports_complex","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"saturation":"-25"},{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"saturation":"-25"},{"hue":"#ff0000"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#0078ff"},{"saturation":"-59"},{"lightness":"9"},{"gamma":1}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"hue":"#ff0000"},{"saturation":"55"}]}]


    };

    var mymap = new google.maps.Map(mapCanvas, mapOptions);

    addMarkers(mymap);

    addMyLocation(mymap, lat, lon);

    // KURK
    var image = { // 150 x 248, näpu ots 145, 2
        url: 'http://i.imgur.com/lgy3SYy.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(150, 248),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(145, -20)
    };

    // Add autocomplete listener
    google.maps.event.addDomListener(window, 'load', initializeAutocomplete);

    $("#happening_name").keyup(function() {
        console.log("up");
        if($(this).val() == "") {
             $('#add_happening_btn').attr('disabled','disabled');
        } else {
             $('#add_happening_btn').removeAttr('disabled');
        }
    });
}


function addMarkers(mymap) {
    var happeningList = [];
    happenings.forEach(function(happening) {
        happeningList.push({
            lat: Number(happening.lat),
            lng: Number(happening.lng),
            name: String(happening.name),
            picture: String(happening.picture)
        })
    });

    var mymarker;
    var infoWindow = new google.maps.InfoWindow();

    var markerIcon = {
        url: 'static/images/Pin.svg',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 40)
    };

    for (var i = 0; i < happeningList.length; i++) {
        console.log(happeningList[i].picture);
        var myLatLng = {lat: happeningList[i].lat, lng: happeningList[i].lng};
        mymarker = new google.maps.Marker({
            position: myLatLng,
            map: mymap,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
        });

        google.maps.event.addListener(mymarker, 'click', (function(mymarker, i) {
            return function() {
                if(happeningList[i].picture != '/media/') {
                    var content = "<p class='title-p'>" + happeningList[i].name + '</p><img src="' + happeningList[i].picture + '" class="info-preview">';
                } else {
                    var content = '<p>' + happeningList[i].name + '</p>';
                }
                infoWindow.setContent(content);
                infoWindow.open(mymap, mymarker);
            }
        })(mymarker, i));
    }
}


function addMyLocation(mymap, lat, lon) {
    var myLoc;

    var myLocationIcon = {
        url: 'static/images/Pin_myLocation.svg',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
    };


    myLoc = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: mymap,
        title: "My location",
        //animation: google.maps.Animation.BOUNCE,
        draggable: true,
        icon: myLocationIcon
    });

    google.maps.event.addListener(myLoc, 'dragend', function() {
        var currentPos = myLoc.getPosition();
        currentLat = String(currentPos.lat()).substr(0, 12);
        currentLon = String(currentPos.lng()).substr(0, 12);
    });
}

/*
 * HELPERS
 */

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            alert("Please turn on your GPS and allow our site to use it, otherwise Happening won't work correctly.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            alert("Sorry, we were unable to fetch your location, please try refreshing the page.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            alert("Sorry, we couldn't get your location, please try refreshing the page.")
            break;
        case error.UNKNOWN_ERROR:

            console.log("An unknown error occurred.")
            alert("Sorry, we encountered some kind of error, please try refreshing the page.")
            break;
    }
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#show_picture').attr('src', e.target.result);
            $('#show_picture').css("display","block");
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function initializeAutocomplete() {

    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

function setSliderText() {
    var sliderVal = $('.mdl-slider').val();
    var prefix = '<b>Duration</b>: ';

    $("#duration-value").html(prefix + sliderVal);
};

function showVal(val) {
    var prefix = '<b>Duration</b>: ';
    $("#duration-value").html(prefix + val);
}


/*
 * EVENT BINDINGS
 */

$(document).ready(function() {
   setSliderText();
});


$("#myModal").on("shown.bs.modal", function() {
    $("#lat-field").val(currentLat);
    $("#lng-field").val(currentLon);
});


$("#take_picture").change(function() {
    readURL(this);
});


$('#slider').change(function() {
    setSliderText()
});


//$("#search-button").click(function(e) {
//    e.preventDefault();
//
//    var $search = $('.search');
//
//    if ($search.hasClass('hidden')) {
//        $('.search').removeClass('hidden');
//    } else {
//        $('.search').addClass('hidden');
//    }
//
//});

