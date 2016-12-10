var dataAll = new Array();
var dataCurrent = new Array();

var markers = [];

var myOptions = {
    center: new google.maps.LatLng(-8.907032, -76.647413),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('container'), myOptions);
