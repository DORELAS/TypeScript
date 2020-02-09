class  person <TYPE1, TYPE2>{

    constructor(public value1: TYPE1, public value2: TYPE2) {

     this.value1 = value1;
     this.value2 = value2;
    }
}

let person1 = new person<string, number> ("Dorela", 22);
let person2 = new person<boolean, string> (true, "ok"); 

var bashkesi: Array<boolean> = [true, false];