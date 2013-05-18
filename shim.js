navigator.getUserMedia = navigator.getUserMedia
|| navigator.webkitGetUserMedia
|| navigator.mozGetUserMedia
|| navigator.msGetUserMedia;

attachMedia = function (element, stream) {
    // firefox
    if (navigator.mozGetUserMedia) {
        element.mozSrcObject = stream;
        element.play();
    }
    // chrome
    if (navigator.webkitGetUserMedia) {
        // ensure autoplay
        element.autoplay = true;
        element.src = webkitURL.createObjectURL(stream);
    }
};

onDomReady = function (fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
};

mirror = function (el) {
    if (typeof el.style.webkitTransform === 'string') {
        el.style.webkitTransform = 'scaleX(-1)';
    }
    if (typeof el.style.MozTransform === 'string') {
        el.style.MozTransform = 'scaleX(-1)';
    }
};
