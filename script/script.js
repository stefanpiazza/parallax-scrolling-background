var backgroundPositionBack = 0,
    backgroundPositionMiddle = 0,
    backgroundPositionFront = 0,   
    backgroundPositionSnow = 0;   

setInterval(function () {
    backgroundPositionBack += 1;
    document.getElementById('back-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionBack + 'px, 0, 0)';

    if (backgroundPositionBack % window.innerWidth === 0) {
        backgroundPositionBack = 0;
    }
}, 500);

setInterval(function () {
    backgroundPositionMiddle += 1;
    document.getElementById('middle-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionMiddle + 'px, 0, 0)';

    if (backgroundPositionMiddle % window.innerWidth === 0) {
        backgroundPositionMiddle = 0;
    }
}, 50);

setInterval(function () {
    backgroundPositionFront += 1;
    document.getElementById('front-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionFront + 'px, 0, 0)';

    if (backgroundPositionFront % window.innerWidth === 0) {
        backgroundPositionFront = 0;
    }
}, 10);

setInterval(function () {
    backgroundPositionSnow += 1;
    document.getElementById('snow-wrapper').style.webkitTransform = 'translate3d(0,' + backgroundPositionSnow + 'px, 0)';    

    if (backgroundPositionSnow % window.innerHeight === 0) {
        backgroundPositionSnow = 0;
    }
}, 50);

window.addEventListener('resize', function () {
    backgroundPositionBack = 0;
    backgroundPositionMiddle = 0;
    backgroundPositionFront = 0;
    backgroundPositionSnow = 0;

    document.getElementById('back-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionBack + 'px, 0, 0)';
    document.getElementById('middle-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionMiddle + 'px, 0, 0)';
    document.getElementById('front-wrapper').style.webkitTransform = 'translate3d(' + backgroundPositionFront + 'px, 0, 0)';    
    document.getElementById('snow-wrapper').style.webkitTransform = 'translate3d(0,' + backgroundPositionSnow + 'px, 0)';    
});