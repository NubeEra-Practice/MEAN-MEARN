class Car{
    engine: string;

    constructor(engine: string){
        this.engine=engine;
    }

    display(): void{
        console.log("Function displays Engine: "+ this.engine);
    }
}

var o1 =new Car("NubeEra");

console.log("Reading Engine Value: "+o1.engine);