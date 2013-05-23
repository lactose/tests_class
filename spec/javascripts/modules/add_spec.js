//= require add
//
// ^ note we are requiring a file from the assets directory, thus whatever
// is exposed as a variable, we will have access to here.

describe("Module addition", function () {
    var module;

    beforeEach(function () {
        module = Object.create(Linc.Add);
    });

    it("should add the numbers together with our module", function () {
        module.add(1, 2).should.equal(3);
    });
});

