var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.display = function () {
        console.log("Function displays Engine: " + this.engine);
    };
    return Car;
}());
var o1 = new Car("NubeEra");
console.log("Reading Engine Value: " + o1.engine);
