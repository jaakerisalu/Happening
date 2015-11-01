
var currentLat, currentLon;

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

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            xconsole.log("An unknown error occurred.")
            break;
    }
}

function initialize(lat, lon) {
    getLocation();
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mymap = new google.maps.Map(mapCanvas, mapOptions);

    var testList = [];
    happenings.forEach(function(happening) {
        testList.push({
            lat: Number(happening.lat),
            lng: Number(happening.lng),
            name: String(happening.name)
        })
    });

    var mymarker, myLoc;

    var image = { // 150 x 248, näpu ots 145, 2
        url: 'http://i.imgur.com/lgy3SYy.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(150, 248),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(145, -20)
    };

    myLoc = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: mymap,
        title: "My location",
        animation: google.maps.Animation.BOUNCE,
        draggable: true,
        icon: image
    });

    for (var i = 0; i < testList.length; i++) {
        var myLatLng = {lat: testList[i].lat, lng: testList[i].lng};
        mymarker = new google.maps.Marker({
            position: myLatLng,
            map: mymap,
            title: testList[i].name,
            animation: google.maps.Animation.DROP
        });
    }

    google.maps.event.addListener(myLoc, 'dragend', function() {
        var currentPos = myLoc.getPosition();
        currentLat = String(currentPos.lat()).substr(0, 12);
        currentLon = String(currentPos.lng()).substr(0, 12);
  });

}


$("#myModal").on("shown.bs.modal", function() {
    $("#lat-field").val(currentLat);
    $("#lng-field").val(currentLon);
});

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

$("#take_picture").change(function(){
    readURL(this);
});


