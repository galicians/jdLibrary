describe("a library for DOM manipulation", function() {
    var $;

    beforeEach(function() {
        $ = new jdLibrary
    });

    it("knows when a selector is a class", function() {
        expect($.isClass('.Class')).toEqual(true);
    });
    it("knows when a selector is an id", function() {
        expect($.isId('#Id')).toEqual(true);
    });
    it("knows when a selector is a tag", function() {
        expect($.isTag('Tag')).toEqual(true);
    });
    it("returns an element by Id", function() {
        expect($.getById('#some_id')).tobeDefined;
    })
    // it("returns elements by Tag Name")
    // it("returns elements by class name")
    // it("querySelectorAll")
});