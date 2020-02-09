var Person;
(function (Person) {
    Person.name = "dorela";
    function njeri() {
        return "Une jam Dorela Sinjari!";
    }
    Person.njeri = njeri;
})(Person || (Person = {}));
console.log(Person.njeri());
