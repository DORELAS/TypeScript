interface Persona {

    emer: string;
    // ? PERPARA EMRIT E BEN JO TE SIGURT PRANINE E VARIABLES
    mosha?: number;

    person(mbiemer: string): void;
}

interface Persona2 extends Persona {
    
    // Nese deshirojme ta bejme te detyrueshme pranine e variablit mosha e rishkruajme ne kete interface 
    mosha: number;

}

const njeri: Persona = {

    emer: 'Dorela',
    person() {
      console.log(`${this.emer} ka moshen ${this.mosha}.`);
    }
}

const njeri1: Persona2 = {

    emer: 'Dorela',
    mosha: 22,
    
    person() {
      console.log(`${this.emer} ka moshen ${this.mosha}.`);
    }
}

function gjenerojmeTEDHENA (te_dhena:any) {

    console.log(`${te_dhena.emer} ka moshen ${te_dhena.mosha}.`);
}
gjenerojmeTEDHENA(njeri);