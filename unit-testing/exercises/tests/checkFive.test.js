let checkFive = require("../checkFive.js");

describe("checkFive", function(){
    test("return 'x is less than 5' with a num<5", function() {
        let result = checkFive(2);
        expect(result).toEqual("2 is less than 5.");
    });

    test("return 'x is equal to 5' when passing 5", function(){
        let result = checkFive(5);
        expect(result).toEqual("5 is equal to 5.");
    });

    test("return 'x is greater than 5' with a num<5", function() {
        let result = checkFive(6);
        expect(result).toEqual("6 is greater than 5.");
    });
});