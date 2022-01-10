/* create and manage persons */
let itemId = 0

function Person(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.id = ++itemId;
    this.relation = [];
    this.setRelation = function(relation) {

        this.relation.push(relation);
    }


}

var benjamin = new Person('Benjamin', 23, 'male');
var sophie = new Person('Sophie', 30, 'female');
var paul = new Person('Paul', 26, 'male');
var franck = new Person('Franck', 50, 'male');
var mathieu = new Person('Mathieu', 10, 'male');
var aurore = new Person('Aurore', 30, 'female');
var moi = new Person('moi', 36, 'female');

function addRelation(one, two) {
    one.setRelation(two);
    two.setRelation(one);
}
addRelation(benjamin, paul);
addRelation(moi, sophie);
addRelation(benjamin, moi);
addRelation(franck, paul);
addRelation(mathieu, aurore);
addRelation(sophie, moi);
addRelation(benjamin, paul);
addRelation(benjamin, moi);


function checkRelation(primaryRelations, secondaryName) {
    primaryRelations.forEach(checkByName);

    function checkByName(item) {
        if (item.name = secondaryName) {
            relationBetweenTwo = true;
            return relationBetweenTwo
        }
    }
    if (relationBetweenTwo) {
        return true
    }

}