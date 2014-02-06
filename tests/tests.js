module("Conversion methods", {
    setup: function () {
        testPxToEm = new PxToEm();
    },
    teardown: function() {
        testPxToEm = {};
    }
});
test( "conversion methods", function() {
    equal(testPxToEm.convertToEms(16), 1, 'convert from pixels to ems')
    equal(testPxToEm.convertToEms(33), 2.0625, 'convert from pixels to ems')

    equal(testPxToEm.convertToPixels(1), 16, 'convert from ems to pixels')
})

module("Conversion methods  with different base font size", {
    setup: function () {
        changeBaseSize = new PxToEm();
        changeBaseSize.basePixelValue = 23;
    },
    teardown: function() {
        changeBaseSize = {};
    }
});
test( "conversion methods with different base size", function() {
    equal(changeBaseSize.convertToEms(16), 0.6957, 'check output is rounded to 4 decimal places')
    equal(changeBaseSize.convertToPixels(2.3456), 53.9488, 'convert from ems to pixels')
})

module("Functional tests", {
    setup: function () {

    }
});