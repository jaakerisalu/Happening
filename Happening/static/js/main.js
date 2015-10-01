


function initHappening() {
    getLocation();
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
    console.log(happenings);
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
            lng: Number(happening.lng)
        })
    });

    var mymarker, myLoc;

    myLoc = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: mymap,
        title: "My location",
        animation: google.maps.Animation.DROP,
        draggable: true,
        icon: 'http://static1.squarespace.com/static/55161d9ae4b04d5c3199b773/t/557313f2e4b0573e63459c2b/1433605107485/pickleperson.jpg'
    });

    for (var i = 0; i < testList.length; i++) {
        var myLatLng = {lat: testList[i].lat, lng: testList[i].lng};
        mymarker = new google.maps.Marker({
            position: myLatLng,
            map: mymap,
            title: 'Hello World!',
            animation: google.maps.Animation.DROP
        });
    }
}

