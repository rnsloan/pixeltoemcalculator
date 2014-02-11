function PxToEm() {
    this.basePixelValue = 16;
    this.pixelInput = document.getElementById('pixel');
    this.emInput = document.getElementById('em');
};

PxToEm.prototype.convertToEms = function (pixelValue) {
    var convertedEmsFloat = parseFloat( (pixelValue / this.basePixelValue).toFixed(4) );
    return Math.abs(convertedEmsFloat);
}

PxToEm.prototype.convertToPixels = function (emsValue) {
    var convertedPixelFloat = parseFloat( (emsValue * this.basePixelValue).toFixed(4) );
    return Math.abs(convertedPixelFloat);
}

PxToEm.prototype.updateEmValue = function (context) {
    //simulating/testing native keyup events is difficult
    $('#pixel').on('change', function () {
        var pixelValue = context.pixelInput.value;
        context.emInput.value = context.convertToEms(pixelValue);
    });
}

PxToEm.prototype.updatePixelValue = function (context) {
    $('#em').on('change', function () {
        var emValue = context.emInput.value;
        context.pixelInput.value = context.convertToPixels(emValue);
    });
}

PxToEm.prototype.updatBaseValue = function (context) {
    $('#base').on('change', function () {
        context.basePixelValue = document.getElementById('base').value;
    });
}

PxToEm.prototype.init = function () {
    this.updateEmValue(this);
    this.updatePixelValue(this);
    this.updatBaseValue(this);
}