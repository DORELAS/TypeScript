class Peme {

    // private NUK PERDOREN JASHT KLASES TE CAKTUAR
    // protected NUK PERDOREN JASHTE KLASES TE CAKTUAR APO TE BERE extend

    constructor(public gjethe: string, private gjethe2: string, protected gjethe3: string) {

        this.gjethe = gjethe;
    }
//NE TYPESCRIPT FUNKSIONET NUK DEKLAROHEN ME FJALEN function
    public leviz() {

     console.log(`${this.gjethe} eshte duke levizur!`);
    }
}

let pema = new Peme("Gjethe Jeshile ", "Gjethe e verdhe", "Gjethe e kuqe");
pema.leviz();
