function initMap(){

    const ubication = new Localizacion(()=>{

        const options = {
            center: {
                lat: ubication.latitude,
                lng: ubication.longitude
                
            },
            zoom: 15
        }
        var map = document.getElementById('map');
        const mapa =new google.maps.Map(map, options);
    });
}