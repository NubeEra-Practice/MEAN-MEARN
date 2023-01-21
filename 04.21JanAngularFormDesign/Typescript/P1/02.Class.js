var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.getGrade = function () {
        return "A+";
    };
    return Student;
}());
