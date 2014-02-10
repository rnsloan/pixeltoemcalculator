function PxToEm() {
    this.basePixelValue = 16;
    this.pixelInput = document.getElementById('pixel');
    this.emInput = document.getElementById('em');
};

PxToEm.prototype.convertToEms = function (pixelValue) {
    return (pixelValue / this.basePixelValue).toFixed(4);
}

PxToEm.prototype.convertToPixels = function (emsValue) {
    return (emsValue * this.basePixelValue).toFixed(4);
}

PxToEm.prototype.updateEmValue = function (context) {
    //simulating/testing native keyup events is difficult
    $('#pixel').on('keyup', function () {
        var pixelValue = context.pixelInput.value;
        context.emInput.value = context.convertToEms(pixelValue);
    });
}

PxToEm.prototype.updatEmValue = function (context) {
    $('#em').on('keyup', function () {
        var emValue = context.emInput.value;
        context.pixelInput.value = context.convertToPixels(emValue);
    });
}

PxToEm.prototype.updatBaseValue = function (context) {
    $('#base').on('keyup', function () {
        context.basePixelValue = document.getElementById('base').value;
    });
}

PxToEm.prototype.init = function () {
    this.updateEmValue(this);
    this.updatEmValue(this);
    this.updatBaseValue(this);
}