
- hasOwnProperty
- typeof
- prototype
- for(var x in obj) {}



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

// Literal Notation
var spencer = {
  age: 22,
  country: "United States"
};


// Object Constructor Notation
var spencer2 = new Object();
	//using dot notation
	spencer2.age = 22;
	spencer2.country = "United States";

var spencer3 = new Object();
	// using bracket notation
	spencer3["age"] = 22;
	spencer3["country"] = "United States";


// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}
// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");








function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, name, breed){
    this.age = age;
    this.name = name;
    this.breed = breed;
}

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log(sally.name +" sally's species is " + sally.species + " and she is " + sally.age + " years old." );
console.log(holden.name +" holden's species is " + holden.species + " and he is " + holden.age + " years old." );


function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return 2 * this.height + 2 * this.width;
  }
  
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();



function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();


// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);




// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);


// loop through our new array
for(var i=0; i<family.length; i++){
    console.log(family[i].name);
}


// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    if(person1.age > person2.age){
        return person1.age;
    }
    else {
        return person2.age;
    }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));






// Literal Notation
var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";

var spencer3 = new Object();
spencer3["age"] = 22;
spencer3["country"] = "United States";


var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age = snoopy["age"];


// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");



function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // define a perimeter method here
    this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    }
};


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = new Array();
contacts[0] = bob;
contacts[1] = mary;

console.log(contacts[1].phoneNumber);


var contacts = [bob, mary];

// printPerson added here
function printPerson(person){
    console.log(person.firstName +' '+ person.lastName);
}

printPerson(contacts[0]);
printPerson(contacts[1]);




var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list(){
    var contactsLength = contacts.length;
    for(var i=0; i<contactsLength; i++){
        printPerson(contacts[i]);
    }
}

list();




var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }   
}

search("Jones");





var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }   
}

function add(firstName, lastName, phoneNumber, email){
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };    
}

add("Jack", "Black", "666-7777", "jack.b@mail.com");
list();



var james = {
    // add properties to this object!
    job : "programmer",
    married: false    
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);



function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!");
    };
}

var user = new Person("Codecademy Student",false);
user.speak();


// constructor vs literal notation
var someObj = {

aProperty: value,
someMethod: function(some, params) { }

};


var james = {
    job: "programmer",
    married: false,
    speak: function(text) {
        console.log("Hello, I am feeling "+ text);
    }
};

james.speak("great");
james.speak("just okay");



var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a "+ this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();



Who's in Your Bracket?
And finally, let's go over retrieving property values. Throughout this section, we've been using dot notation to get the value of an object's property:

someObj.propName;
However, remember that we can also use bracket notation:

someObj["propName"];
An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names:

var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty];
The last line is exactly the same as using someObj["propName"];.




var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);





// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"



var myObj = {
    // finish myObj
    name: "name",
    maried: false
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false




var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty("shorts")){
    console.log(suitcase.shorts);
}



var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc){
    console.log(property);
}


List ALL the Properties!
We've just seen how to print all of an object's property names with a for-in loop. But how do we print out all the values associated with every property? Surprise! The for-in loop will be our friend again! Let's get there slowly. Our dog object can help us.

var dog = {
species: "bulldog",
age: 3,
color: brown
};
First, remember that
dog.species = dog["species"] = "bulldog";

And if we say:

var x = "species";

then

dog[x] = "bulldog";

We see that by assigning the property name to a variable, we can then use the variable name in bracket notation to get the property's value. So to get all the values from the dog object, we would use the for-in loop and the bracket notation we just saw above. See the hint to see the code to print the property values for dog.




var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for(var property in nyc){
    console.log(nyc[property]);
}




function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}




Teach Snoopy
So we know that a class will have certain properties and methods, but what keeps track of what a given class can or can't do? What a class has or doesn't have? That is the job of the prototype.

JavaScript automatically defines the prototype for class with a constructor. For example, our Dog constructor ensures that the Dog prototype has a breed property. Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.

We know we can add methods to objects, and in line 7 we add the bark method to buddy. Hit run and you will see one "Woof" printed when buddy barks. Notice what happens when we try to get snoopy to bark in line 17 though. Even though snoopy is of the class Dog, he doesn't know how to bark because only buddy had bark added as a method.


function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

snoopy.bark = function(){
    console.log("au");
};
snoopy.bark();



function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Jonatas", 40);
printPersonName(me);




Prototype to the Rescue
Here we have very similar code as last time, but there is an important difference. Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

Click run this time, and both buddy and snoopy can bark just fine! Snoopy can bark too even though we haven't added a bark method to that object. How is this so? Because we have now changed the prototype for the class Dog. This immediately teaches all Dogs the new method.

In general, if you want to add a method to a class such that all members of the class can use it, we use the following syntax to extend the prototype:

className.prototype.newMethod =

function() {
statements;
};



function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();



function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function(){
    console.log("Meow!");
}

// add code here to make the cats meow!
cheshire.meow();
gary.meow();


// create your Animal class here
function Animal(name,numLegs){
    this.name = name;
    this.numLegs = numLegs;
}
// create the sayName method for Animal
Animal.prototype.sayName = function(){
    console.log("Hi my name is "+ this.name);
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();



// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();





// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("sally");
penguin.sayName();




function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("joe");

console.log(emperor.numLegs);



Up the Food-I-mean-Prototype Chain
A penguin is an animal and an emperor penguin is a penguin. Are emperor penguins animals too? Of course!

The "prototype chain" in JavaScript knows this as well. If JavaScript encounters something it can't find in the current class's methods or properties, it looks up the prototype chain to see if it's defined in a class that it inherits from. This keeps going upwards until it stops all the way at the top: the mighty Object.prototype (more on this later). By default, all classes inherit directly from Object, unless we change the class's prototype, like we've been doing for Penguin and Emperor.




// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true



function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.
var myAge = john.age;




Private Variables
Good! But what if an object wants to keep some information hidden?

Just as functions can have local variables which can only be accessed from within that function, objects can have private variables. Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class.

The Person class has been modified to have a private variable called bankBalance. Notice that it looks just like a normal variable, but it is defined inside the constructor for Person without using this, but instead using var. This makes bankBalance a private variable.


function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 
var john = new Person("John","C",30);

// try to print his bankBalance
console.log(john.bankBalance);
// => undefined


function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);
// prints => undefined

// create a new variable myBalance that calls getBalance()
myBalance = john.getBalance();
console.log(myBalance);




Private Methods
Why did that code work? An object's private variables can only be accessed by other methods that are part of that same object. So, we just used an object's public method to access a private variable!

Methods can also be private within a class and inaccessible outside of the class. Changing this.returnBalance from the last exercise to var returnBalance makes this method private. If you run the program trying to access the method you get an undefined error this time.

The way to access a private method is similar to accessing a private variable. You must create a public method for the class that returns the private method.

Instructions
Create a method called askTeller within the Person class that returns the returnBalance method. This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.

Because askTeller returns a method, we need to call it to make it any use. This is what var myBalance = myBalanceMethod(); does.

?
Hint
Your method should resemble how we defined getBalance last time—you should use this.askTeller = function() { }. Don't declare askTeller with var.

You return method the same way that you would return simple variables. Be careful not to call the method though and leave out parentheses in your return statement!


function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
        return returnBalance;   
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);




function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);




var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var x in languages) {
    if(typeof languages[x] === "string"){
        console.log(languages[x]);
    }
}


function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a "+ this.breed +" dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();




So Meta I Can't Take It!
Do you remember how we said every JavaScript object has some baggage associated with it? Part of this baggage was the hasOwnProperty method available to all objects. Now let's see where this came from...

If we have just a plain object (i.e., not created from a class constructor), recall that it automatically inherits from Object.prototype. Could this be where we get hasOwnProperty from? How can we check?

Instructions

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);



Private Eye
Recall that:

Public properties can be accessed from outside the class
Private properties can only be accessed from within the class
Using constructor notation, a property declared as this.property = "someValue;" will be public, whereas a property declared with var property = "hiddenValue;" will be private.

In this exercise, hit run and you'll see that all your grades are exposed! You really just want people to know your overall GPA.



function StudentReport() {
    this.grade1 = 4;
    this.grade2 = 2;
    this.grade3 = 1;
    this.getGPA = function() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());




//Create the object called cashRegister 
//and initialize its total property
var cashRegister = {
    total: 0
}

//Using dot notation change the total property
cashRegister.total = 2.99;

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


var cashRegister = {
    total: 0,
    //insert the add method here    
    add: function(itemCost){
        this.total += itemCost;
    },    
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
            
        case "chocolate":
            this.add(0.45);
            break;        
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");

cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");

//Show the total bill
console.log('Your bill is '+cashRegister.total);





var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity=1) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate");


//Show the total bill
console.log('Your bill is '+cashRegister.total);


var cashRegister = {
    total:0,
    //Dont forget to add your property
    lastTransactionAmount: 0,
    
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
    }    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();

cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);



// create a constructor for the StaffMember class
var StaffMember = function(name, discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("me",20);



function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("me",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));



