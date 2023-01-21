class Student {
    studCode: number;
    studName: string;

    constructor(code: number, name: string){
        this.studCode=code;
        this.studName=name;
    }

    getGrade(): string {
        return "A+";
    }
}