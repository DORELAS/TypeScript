let Car = {

    brand: 'BMV',
    engine: 3.4,
    run: function() {
        alert("blahh blahh blahh");
    }
}

let emer: string;
let mosha: number;
let saktesia: boolean;

emer = 'Dorela';
mosha = 22;
saktesia = true;

class Person {

 personi: string | undefined;
}


let mbiemer: any = 'Sinjari';
mbiemer = 123;

let person: any[] = ['Dorela', 'Sinjari', 22];
person = [true];

let person2 = ['Dorela', 'Sinjari', 22];
person2 = ['true', 23];

// Caktojme tipin e vlerave nese duam
function shuma(val1:number, val2:number):number {

    let shume: number = val1 + val2;
    return shume;
} 
shuma(5, 15);

function shpjego():string {

    console.log("Holla ti aty!");
    return 'Dori';
}

let variabel = () => 'Dorela';
variabel = shpjego;

// OBJEKT
let lende: {letersi: string, fzike: number} = {

    letersi: "disa",
    fzike: 21
}; 

//UNION TYPE

let nota: number | string | boolean;
nota = true;
nota = "pese";
nota = 10;

