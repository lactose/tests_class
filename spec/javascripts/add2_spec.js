//= require add
//
// ^ note we are requiring a file from the assets directory, thus whatever
// is exposed as a variable, we will have access to here.

// You can also run code before and after each test, for setup and teardown

describe("Array", function () {
    var a, b;

    beforeEach(function () {
        a = [1, 2, 3];
        b = [20, 30, 40];
    });

    afterEach(function () {
        a = [];
        b = [];
    });

    it("should reverse the array", function () {
        a.reverse().should.eql([3, 2, 1]);
    });
});


describe("Module addition", function () {
    it("should add the numbers together with our module");
});

