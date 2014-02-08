function PxToEm() {
    this.basePixelValue = 16;
};

PxToEm.prototype.convertToEms = function (pixelValue) {
    return (pixelValue / this.basePixelValue).toFixed(4);
}

PxToEm.prototype.convertToPixels = function (emsValue) {
    return (emsValue * this.basePixelValue).toFixed(4);
}

PxToEm.prototype.updateEmValue = function () {
    var that = this;

    var baseInput = document.getElementById('base');
    var pixelInput = document.getElementById('pixel');
    var emInput = document.getElementById('em');

    pixelInput.addEventListener('keyup', function () {
        var pixelValue = pixelInput.value;
        emInput.value = that.convertToEms(pixelValue);
    }, false);
}

PxToEm.prototype.init = function () {
    this.updateEmValue();
}