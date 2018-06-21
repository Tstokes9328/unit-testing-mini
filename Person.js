class Person {
    constructor(birthyear){
        this.dateObj = new Date(`01/01/${birthyear}`);
        this.birthyear = birthyear;
    }

    calculateAge(birthday){
        let ageDifMs = Date.now() - birthday.getTime();
        //milliseconds from epoch --> Jan 1, 1970
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    isMillenial(){
        return this.birthyear >= 1982;
    }

    isRetired(){
        let age = this.calculateAge(this.dateObj);
        return age >= 65;
    }
}

module.exports = Person;