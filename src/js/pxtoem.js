function PxToEm() {
    this.basePixelValue = 16;
};

PxToEm.prototype.convertToEms = function(pixelValue) {
    return (pixelValue / this.basePixelValue).toFixed(4);
}

PxToEm.prototype.convertToPixels = function(emsValue) {
    return (emsValue * this.basePixelValue).toFixed(4);
}



