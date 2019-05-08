/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding, If we are in a gobal scope, or not bound to any specifically previoiusly adresed object this is bound to the window object in the broweser, or the console in node 
* 2. Implicit binding, Whenever we call this while inside an specific object, this refers to the object. If we call it in a function of this object, the same applies.
* 3. New Binding, If we call a constructor the this keyword refers to the new obect. we can use it for example to initialze its variables
* 4. Explicit Binding, We can also set this explicitly by putting the object we want as this as the parameter of the apply or call method 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const House = {

    address: "ABC-Street",
    city: "Tokyo",
    height: 100,

    demolish: function () {
        this.height = 0;
    }
}
// code example for Implicit Binding

// Principle 3
function City(name, inhabitantcount, country, mayor){
    this.name = name;
    this.inhabitantcount = inhabitantcount;
    this.country = country;
    this.mayor = mayor;

    let newMayor = function(newMayor){
        mayor = newMayor;
        console.log(`The new mayor of ${this.name} is ${newMayor}`)
    }
}
// code example for New Binding

// Principle 4
let london ={
    name: "london",
    inhabitantcount: "many",
    country: "UK",
    mayor: "currently abandoned"
}

City.newMayor.call(london, "Inaki");
// code example for Explicit Binding