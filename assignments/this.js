/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When the immediate outer scope of an object is the Global Scope (eg your function object is not a method nested in an object), the 'this' keyword is bound to the window/console Object. "this" is a contextual tool.
* 2. Adding a dot (.) to an Object adds a layer of context.  Typing myObject.method() gives our method the myObject context
    as opposed to the more global wondow/console Object context. This is done automatically (implicitly).
* 3. Some functions are written in a very specific way to provide a template for new objects (usually incliding this.property) 
    and combined with the 'new' keyword. When these specific functions are invoked with the 'new' keyword, they bind 
    our context helper ('this') to the context of the brand new object just created.
* 4. JS gives us a very short direct ways to explicity bind contexts to the 'this' property of our Objects. For instance:
    ObjectB.call(this,ObjectAattributes);. This statement gives object A two contexts in which to look for attributes.
    ObjectA.attribute_from_A will look in the context of our ObjectA. ObjectA.attribute_B will look in the context of A, and then in the context of ObjectB
    which we have also bound manually (not implicitly).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function global_window(){
    console.log(this);
}
//this_window();

// Principle 2
// code example for Implicit Binding
function not_global_window(){
    return {
    name:'ngw function context',
    identity:function(){
        console.log(`I am not the global window I am ${this.name}`);
    }
} 
}

console.log(not_global_window().identity());//log(functionObject.this_context)


// Principle 3//methods are usually included on .prototype, but not in this example

// code example for New Binding
function badGuyObject (){
    this.name = 'ObJob',
    this.hat = 'Thowing hat!'
    
}
badGuyObject.prototype.my_this_context =  function (){console.log('this is my context',this)};
bond_villain = new badGuyObject();
bond_villain.my_this_context();



// Principle 4
function villainApprentice(apprenticeAttributes){
    //I need all of my master's skills
    badGuyObject.call(this,apprenticeAttributes);
}

villainApprentice.prototype = Object.create(badGuyObject.prototype);

evil_apprentice = new villainApprentice(
    {
    //cant seem to get the __proto__ of this object to console.log()
    
}
);

console.log(evil_apprentice.name)//apprentice ! show me your explicit 'this' binding to your master



// code example for Explicit Binding