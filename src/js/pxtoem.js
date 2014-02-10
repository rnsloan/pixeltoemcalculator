function PxToEm() {
    this.basePixelValue = 16;
};

PxToEm.prototype.convertToEms = function (pixelValue) {
    return (pixelValue / this.basePixelValue).toFixed(4);
}

PxToEm.prototype.convertToPixels = function (emsValue) {
    return (emsValue * this.basePixelValue).toFixed(4);
}

PxToEm.prototype.updateEmValue = function (context) {
    var pixelInput = document.getElementById('pixel');
    var emInput = document.getElementById('em');

    //simulating/testing native keyup events is difficult
    $('#pixel').on('keyup', function() {
        var pixelValue = pixelInput.value;
        emInput.value = context.convertToEms(pixelValue);
    });
}

PxToEm.prototype.updatEmValue = function (context) {
    var pixelInput = document.getElementById('pixel');
    var emInput = document.getElementById('em');

    //simulating/testing native keyup events is difficult
    $('#em').on('keyup', function() {
        var emValue = emInput.value;
        pixelInput.value = context.convertToPixels(emValue);
    });
}

PxToEm.prototype.init = function () {
    this.updateEmValue(this);
    this.updatEmValue(this);
}