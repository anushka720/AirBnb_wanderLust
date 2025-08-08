mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 12 // starting zoom
});


const marker = new mapboxgl.Marker({color: 'black'})
// listing.geometry.coordinates
.setLngLat(listing.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.location}</h4><p>Land here! after booking;)</p>`
    )
)
.addTo(map);


