// Unit tests for the helloWorld function
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when executed", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("sayHello", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("sayHello", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});
//^^^step 1&2, exercise #1&2;
//^^exercise#3 #4


describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});