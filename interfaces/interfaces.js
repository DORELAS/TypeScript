var njeri = {
    emer: 'Dorela',
    mosha: 22,
    person: function () {
        console.log(this.emer + " ka moshen " + this.mosha + ".");
    }
};
function gjenerojmeTEDHENA(te_dhena) {
    console.log(te_dhena.emer + " ka moshen " + te_dhena.mosha + ".");
}
gjenerojmeTEDHENA(njeri);
