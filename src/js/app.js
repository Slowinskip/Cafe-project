const app = {
    initFlicker: function() {
        var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: 5000,
        wrapAround: true,
        prevNextButtons: false,
        });    
    },
};


app.initFlicker();