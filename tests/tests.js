module("Conversion methods", {
    setup: function () {
        testPxToEm = new PxToEm();
    },
    teardown: function () {
        testPxToEm = {};
    }
});
test("conversion methods", 3, function () {
    equal(testPxToEm.convertToEms(16), 1, 'convert from pixels to ems')
    equal(testPxToEm.convertToEms(33), 2.0625, 'convert from pixels to ems')

    equal(testPxToEm.convertToPixels(1), 16, 'convert from ems to pixels')
})

module("Conversion methods with different base font size", {
    setup: function () {
        changeBaseSize = new PxToEm();
        changeBaseSize.basePixelValue = 23;
    },
    teardown: function () {
        changeBaseSize = {};
    }
});
test("conversion methods with different base size", 2,  function () {
    equal(changeBaseSize.convertToEms(16), 0.6957, 'check output is rounded to 4 decimal places')
    equal(changeBaseSize.convertToPixels(2.3456), 53.9488, 'convert from ems to pixels')
});

module("DOM events", {
    setup: function () {
        $('<input id="base" type="number" required value="16" /> \
            <input id="pixel" type="number" /> \
            <input id="em" type="number" />').appendTo('#qunit-fixture');

        testPxToEm = new PxToEm();
        testPxToEm.init();
    },
    teardown: function () {
        testPxToEm = {};
    }
});
test("pixel input dom event", 1, function () {
    $('#pixel').val('10').trigger('keyup');
    equal( $('#em').val() , '0.625', 'em to pixel conversion')
});

test("em input dom event", 1,  function () {
    $('#em').val('2').trigger('keyup');
    equal( $('#pixel').val() , '32', 'pixel to em conversion')
});


test("Change base value input. Pixels and em calculations reflect change", 3, function () {
    equal( $('#base').val() , '16', 'base value before being changed')
    $('#base').val('20').trigger('keyup');

    $('#pixel').val('10').trigger('keyup');
    equal( $('#em').val() , '0.5', 'em value after base value is changed')

    $('#em').val('0.7').trigger('keyup');
    equal( $('#pixel').val() , '14', 'pixel value after base value is changed')
});
