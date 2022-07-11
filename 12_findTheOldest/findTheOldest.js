const findTheOldest = function(object) {
    let oldestPerson = null;
    let oldestAge = 0;
    for(const element of object){

        if (element.yearOfDeath == null){
            const currentYear = new Date().getFullYear();
            element.yearOfDeath = currentYear;
              
        }
        if ((element.yearOfDeath - element.yearOfBirth) > oldestAge){
            oldestPerson = element;
            oldestAge = element.yearOfDeath - element.yearOfBirth;
    }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
