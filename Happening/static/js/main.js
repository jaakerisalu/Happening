


function initHappening() {
    getLocation()
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
       console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    initialize(lat, lon);
}

function initialize(lat, lon) {
    getLocation();
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas, mapOptions)

    //TEST
    var testLoc1 = {
        lat: 59.4364280000,
        lng: 24.7553350000
    };

    var testLoc2 = {
        lat: 59.4322490000,
        lng: 24.7619500000
    };

    var testLoc3 = {
        lat: 59.4348892000,
        lng: 24.7472201000
    };

    var testList = [testLoc1, testLoc2, testLoc3];

    var marker, myLoc;

    myLoc = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: map,
        title: "My location",
        animation: google.maps.Animation.DROP
    });

    for (var i = 0; i < testList.length; i++) {
        var myLatLng = {lat: testList[i].lat, lng: testList[i].lng};
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
    }
}

