# Intro

In this lesson we're going to cover two extremely popular and fundamental **data structures**: Arrays and Objects.

A data structure, as the name suggests, is a structure (some way) for holding and managing data.

Unlike simple variables which only allow us to hold one piece of data (some text, a number, a boolean) - data structures allow us to hold several pieces of data, and allow us to access and manipulate that data in different ways.

In this lesson we will cover **Arrays**, which are effectively just lists, and **Objects**, which work like a dictionary you could find in the library.

We use data structures because it is inconceivable to hold all of our information in simple variables. Imagine we had a website with even just 1,000 users.
It would be absurd to hold all of the data we have about them like this:

```javascript
const user1Name = "Christopher"
let user1Age = 8
let user1Hobby1: "Playing with animals"
let user1Hobby2: "Exploring the world"
const user1IsMillenial: false

const user2Name = // ...
```

Right? We'd never be able to keep track. So without further ado, let's see what JS has to offer to help us hold lots of data in one place ~

As with every lesson, try out everything on your own too.

# Arrays

In JS, an **array** is just a fancy term for a list of items. The syntax looks like this:

```javascript
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
```

*   Like with variables, we start with an identifier, in this case a `let`
*   Again like a variable, we have to give a name to our array - here we've call this `companies`, since it is a list of companies
*   Next we use `=` for **assignment**, again nothing new here
*   And finally we actually define the array

*   We start with an opening bracket, `[`
*   Then our **comma-separated** items (in this case a few strings)
*   And finally our closing bracket, `]`

You can have arrays with any amount of items. We can determine the number of items in the array using `.length`, like so:

```javascript
console.log(companies.length) // will print 4, because there are four companies in this array
```

An array that has no items is called an **empty array** - its length will be zero.

```javascript
let myFriends = [] // an empty array
```

The `companies` array from before is known as an **array of strings** - because all of its values are strings. That said, arrays in JS can have multiple types:

```javascript
let infoAboutTesla = ["Tesla", 5000, true, "best"]
```

**That said** - we generally want to limit our arrays to one type.

Since arrays have many elements, we need a way to **access** this data. To do this, we need to understand the concept of array **indexes**.

## Indexing and accessing arrays

Let's look at `companies` again:

```javascript
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
```

Here, the value `Tesla` is in the **0th index**, `Amazon` is in the **1st index**, etc.

An **index** is the position of an item in the array, from left to right, starting at 0.

The system of counting from 0 is known as **zero-based indexing** and is prevalent in virtually all programming languages, including JS.

Knowing this, I can print out the value of `Microsoft` by doing this:

```javascript
console.log(companies[3]);
```

I've just **accessed** the element in the **3rd index** of the array, which if we're counting 0..1..2..3 is exactly where `Microsoft` is. Try and see!

That's the syntax for accessing certain elements - but of course we can put anything in those square brackets `[ ]` so long as it **evaluates** to a number. For instance:

```javascript
console.log(companies[6-4]);
```

The expression `6 - 4` evaluates to `2`, so the above is virtually the same as `companies[2]`, which is...?

If, however, you try to access an index that does not exist, you will receive `undefined`:

```javascript
console.log(companies[4]) // prints undefined
```

This should make sense because at the 4th index we _haven't yet defined_ any values for `companies`

**Spot check:** Create an array called `myStuff` and insert 3 strings into it. Then, console log the second item in the array.

```javascript
const myStuff = ["Squid hat", "Portrait of a wizard", "Passport"]

console.log(myStuff[1]) // index 1 == second item
```

### Variables from Arrays

Note that **we can initialize new variables with data accessed from an array**. For instance:

```javascript
const firstCompany = companies[0]
console.log(firstCompany) // prints "Tesla"
console.log(firstCompany == companies[0]) // prints true
```

What we've done here is accessed the value of the first element in `companies`, then stored it inside a variable called `firstCompany` - this is a totally legitimate way of initializing variables.

By the way, we can use `.length` to access the _last_ element of an array.  
**Since `.length` gives us the length of an array, then `.length - 1` will always be the index of the last element:**

```javascript
const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
console.log(plants.length) // prints 5

let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
console.log(plants[lastIndex]) // prints "Yew"
console.log(plants[4]) // the same
```

Write a bit of code that, given the `plants` array, prints out "The first plant is Oak, and the last one is Yew" - you should be able to do this in one line.

```javascript
console.log("The first plant is " + plants[0] + " and the last plant is " + plants[plants.length - 1])
```

### Updating Arrays

Now that we have this knowledge of indexes, we can do something else too. We can update or **overwrite** values in an array. What do you think this will do?

```javascript
companies[1] = "Twitter";
console.log(companies[1]);
```

It will print out "Twitter" - that's because "Amazon" **was** in the first index, but now we overwrote it.  
In fact, `console.log` the whole array and you should see that it's changed altogether!

We can also reset the entire array\*, as we would with a variable, like this:

###### \*Only if the array has a `let` identifier

```javascript
companies = ["Samsung", "Kellogg", "Coca-Cola", "J.P Morgan"]
```

Now our entire `companies` array is different. The original `"Tesla"`, `"Amazon"`, etc are all gone entirely.

### Push (adding to an array)

What about adding new items to an array? That's where the `push` method comes in. Like this:

```javascript
companies.push("Blizzard Entertainment");
```

Syntax is straight forward: `nameOfArray` followed by `.push(..)` - and add whatever you want inside the parentheses.

Now check out `console.log(companies[4])` (assuming you haven't changed anything else in the array)

Remember that **`push` always adds the element to the end of the array**.

To add to the beginning of an array, use `unshift` - same syntax as `push`

**Spot check:** Using your `myStuff` array, add the last item to the beginning, and the first item to the end.  
If your array was `["a", "b", "c"]`, then now it should be `["c", "a", "b", "c", "a"]`

```javascript
const myStuff = ["Squid hat", "Portrait of a wizard", "Passport"]

const lastItem = myStuff[myStuff.length - 1]
const firstItem = myStuff[0]

myStuff.unshift(lastItem)
myStuff.push(firstItem)

console.log(myStuff) // prints ["Passport", "Squid hat", "Portrait of a wizard", "Passport", "Squid hat"]
```

You can also add several items with this (albeit uncommon) syntax:

```javascript
companies.push("Fox Entertainment", "Marvel Studios", "Rolex");
```

We again use commas to separate our items, but in this case notice there are no brackets. The above would add those three strings to the end of `companies`; try it out yourself and see.

This is uncommon syntax because generally we don't want to add groups of individual items. However, we do sometimes want to add one array to another. Say I had these two arrays:

```javascript
let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]
```

Say that after their interviews, all the `candidates` passed with flying colors and we want to add them to the `employees` array. Here's a cool way that **ECMAScript 2015, also known as ES6** (a version of JS that came out in 2015) gives us:

```javascript
employees.push(...candidates)
```

This is called **spread syntax**, or the spread operator, and what it does\* is expand arrays in-place, so that the following two are virtually the same:

###### \*among other things we'll learn about in the future

```javascript
employees.push(...candidates)
employees.push(candidates[0], candidates[1], candidates[2])
```

This _is_ useful because we often deal with arrays, and combining arrays is a common task.

**Spot check:** Duplicate your `myStuff` array using `...`  
For instance, if it was `["a", "b", "c"]`, it should now be `["a", "b", "c", "a", "b", "c"]`

```javascript
const myStuff = ["Squid hat", "Portrait of a wizard", "Passport"]

myStuff.push(...myStuff)
console.log(myStuff) //prints ["Squid hat", "Portrait of a wizard", "Passport", "Squid hat", "Portrait of a wizard", "Passport"]
```

### Splice (removing from an array)

As for removing items from arrays, it's a little more involved but still straightforward.  
There is a method called `splice`, and it needs two things:

1.  Where to start removing
2.  How many to remove from that point

```javascript
companies.splice(1, 1)
```

That's saying "go to the 1st index, and remove 1 item from there". Test it out, then `console.log` your array again and see for yourself what happened.

When you use `splice`, the method will **return**\* the item(s) that you removed from the array. See this:

###### \*We'll learn about what **return** means exactly when we get to functions

```javascript
let fridge = ["Milk", "Eggplant", "Truffle", "Edible shoe"]
let removedItem = fridge.splice(3, 1)

console.log(removedItem) // prints ["Edible shoe"]
console.log(fridge) // prints ["Milk", "Eggplant", "Truffle"] 
```

So not only does `splice` remove from an array, it also gives you the value(s) of the item(s) you removed. No matter how many items you remove, **you will receive an array in return**. Try this out for yourself.

Another note about **splicing**, if you do not indicate the second input (i.e. how many items to remove), then `splice` will remove everything from the the start you indicated and onwards:

```javascript
let badHabbits = ["Pizza", "Sugars", "White bread"]
let removedHabbits = badHabbits.splice(1)

console.log(removedHabbits) // prints ["Sugars", "White bread"]
console.log(badHabbits)// prints ["Pizza"]... can't get rid of that
```

See that? Because we told `splice` to start removing at index 1, but didn't tell it how many to remove, it removed everything from 1 and onward.

Note that the `badHabbits` array stays as an array, even though we've removed everything except for 1 element.

**Spot check:** remove everything except for the _last_ item from this array: `["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]`  
The array should look like this in the end: `["life"]`

```javascript
const associations = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

associations.splice(0, associations.length - 1)
console.log(associations) // prints ["life"]
```

The `splice` can also be used to add new elements in the array at a specific index, but you can figure that out by yourself using [this documentation](https://www.w3schools.com/jsref/jsref_splice.asp) ;)

**Note on `const` vs. `let` with arrays:** You can still `push`, `splice`, and update certain indexes in arrays no matter the identifier - but if it's a `const` you **cannot** reassign the value of the array entirely. In other words:

```javascript
const people = ["Fred", "George", "Ron"]

people = ["Roger", "Alan", "Hewitt"] // this will throw an error
people[0] = "Alex" // allowed
people.push("Bellinda") // allowed
people.splice(2, 1) // allowed
```

We'll get to some more exercises with arrays at the end of the lesson, but try this out for now:

You are a Doctor who studies genetics, and you have some data about a patient's genes. The following array is a list of one strand of the patient's DNA, which you know is problematic:

```javascript
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
```

You have a tool called CRUD which you can use to manipulate the above array. Here are your instructions for healing your patient:

Create a new strand of genes (a new array) based off the `genes` strand above. You **cannot create new genes**\*, only copy the existing ones above.  
That means that if you want to access the `"GLMN"` gene, you must access `genes[1]`, for example.

###### \*Except for "FXT", explained below

The new strand should be built like this:

*   The first two genes should be the same as those in `genes`
*   Replace `"RLF"` with `"CRYZ"`
*   Remove `"AZIN2"` from where it is, and insert two of them at the end of the strand
*   Once you've done all of the above, add the gene `"FXT"` to the _beginning_ of the strand

*   The `"FXT"` gene is unstable so you may only add it _once the other genes are in place!_

**Hint:** Start with an empty array, and then use the methods you learned so far to complete this procedure.  
Good luck, the patient is waiting.

If you've done it right, your new array should look like this:

```javascript	
[ 'FXT', 'ACADM', 'GLMN', 'CRYZ', 'RLF', 'AZIN2', 'AZIN2' ]
```

Here is one possible solution (only look after you've tried yourself):

Notice how the only indexes this solution uses are the first (0) and last (length - 1) - it is good practice to do this. It is bad practice to target specific indexes arbitrarily.

```javascript
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newStrand = []

const firstTwo = genes.splice(0, 2)
const lastGene = genes.splice(genes.length - 1)

newStrand.push(...firstTwo)
newStrand.push(...lastGene)
newStrand.push(genes[0]) //remember we spliced the first 2, so now "RLF" is first
newStrand.push(genes[genes.length - 1], genes[genes.length - 1]) //again, since we spliced the last one, "AZIN2" is now last
newStrand.unshift("FXT")

console.log(newStrand)
```

Make sure all of this makes sense to you

# Objects

An object is a **key-value** store.  
That means that unlike an **array** that holds items in a position (index 0, index 1...), in objects we have a unique **key** that is referencing some **value**.

Let's look at a simple example:

```javascript
let person = {
  name: "Mariah",
  occupation: "Gangster"
}
```

The syntax of an object, as you can see, is straightforward:

*   Declare a variable
*   Give it a name
*   Wrap it in **curly braces**
*   Add **key**\-**value** pairs

*   Keys don't have to have quotes around them (unless you have special characters)
*   Values do (if they are strings)

In the above example, our **keys** are `name` and `occupation`, and their corresponding values are `Mariah` and `Gangster`

So if I wanted to access `person`'s `occupation`, I would do:

```javascript
console.log(person.occupation) // prints "Gangster"
```

That's nice.  
Objects help us store information that should be together in a coherent way. Imagine I had to use an **array** to store this information. I would have something like this:

```javascript
const names = ["Mariah", "James", "Luke"]
const occupations = ["Gangster", "Preacher", "Hero"]
```

Let's say we wanted to print "Mariah is a Gangster". With the arrays, we'd have to do this:

```javascript
console.log(names[0] + " is a " + occupations[0])
```

*   We have to access two separate arrays
*   We have to make sure that all the elements are in matching indexes
*   The code is bloated by brackets
*   If someone else comes and reads this code, they have no idea what is in `names[0]` or `occupations[0]`

Not bueno. However with this object:

```javascript
let person = {
  name: "Mariah",
  occupation: "Gangster"
}
```

We could just do the following:

```javascript
console.log(person.name + " is a " + person.occupation)
```

This is more readable, and we don't have to worry about the position of anything! **Objects have no order** - they just have keys and values.

Note that the **value** of any key can be _anything_. Strings, numbers, booleans, _arrays_, _other objects_, even functions\*!

###### \*We'll go over this in another lesson

Let's look at an object with an array inside:

```javascript
const bag = {
  weight: 10,
  owner: "Larissa",
  items: ["Pen", "Bottle", "Book"]
}
```

If we want to access all the items in the array, simple:

```javascript
console.log(bag.items) // prints ["Pen", "Bottle", "Book"]
```

Now say we wanted to get the bottle:

```javascript
console.log(bag.items[1]) // "Bottle"
```

By accessing `bag.items`, it's as if we now have an array with all of the items. Therefore, we can access it the same way we access arrays - with an index!

We'll see a more in depth example of this later in the lesson.

**Spot check 1**: create a `car` object with three properties:

*   `color` - string
*   `numWheels` - number
*   `isFancy` - boolean

And give it some values.

```javascript
let car = {...}
```

Now print out all those values in a sentence: "The brown car has four wheels. It is fancy" ( or "It is not fancy", depending on `isFancy` )

Try this out for yourself before peeking at the solution. Ask the instructor if you don't get it.

###### **Hint:** you'll need an if-else using the isFancy boolean

```javascript
const car = {
  color: "brown",
  numWheels: 4,
  isFancy: true
}

console.log("The " + car.color + " car has " + car.numWheels + " wheels.")

if(car.isFancy){
  console.log("It is fancy")
}
else{
  console.log("It is not fancy")
}
```

**Spot check 2:** create an object with the following properties:

*   `item` - string
*   `toBeginning` - boolean
*   `items` - array

If `toBeginning` is `true`, insert `item` to the beginning of `items`, otherwise, insert it at the end.

```javascript
const library = {
    item: "Of Mice and Men",
    toBeginning: true,
    items: ["The Little Prince", "The Alchemist", "Harry Potter"]
}

if(library.toBeginning){
    library.items.unshift(library.item)
}
else{
    library.items.push(library.item)
}

console.log(library.items) //prints ["Of Mice and Men", "The Little Prince", "The Alchemist", "Harry Potter"]
```

### Dot Notation vs. Bracket Notation

There are a couple of way to **access object properties** (properties are the same as keys):

What we saw up to now is called **dot notation** - that is using the variable name, `person`, a dot, and then the property we want.  
So to get "Mariah" we just do `person.name`

The other way is similar, but with different syntax: `person["name"]`

The result is exactly the same, but sometimes you **have** to use bracket notation, **when you have dynamic property names**.

For instance, say we had this object:

```javascript
const greetings = {
  day: "Good morning!",
  night: "Good night ~"
}
```

..and we needed to select `day` or `night` dynamically, based on the time of day.

We could do something like this:

```javascript
let timeOfDay = ""

if(new Date().getHours() < 12){ //don't worry about the `Date` syntax for now
  timeOfDay = "day"
}
else if(new Date.getHours() > 18){
  timeOfDay = "night"
}

console.log(greetings[timeOfDay])
```

Note that in this case we access the `greeting` object with a variable. This is totally fine because `timeOfDay` holds the value of "day" or "night" - both of which are **keys** inside of `greetings`

Whether you use dot or bracket notation, if you try to access a key that doesn't exist in the object, then you will get `undefined`. In the example from before, if the `new Date.getHours()` resolves into something between 12 and 18 - we'll get `undefined`! Here is another example:

```javascript
const table = {
  numLegs: 4,
  color: "Wood brown"
}

console.log(table.yearPurchased) // prints undefined
console.log(table["yearPurchased"]) // still undefined
```

This is similar to trying to access an index that doesn't exist in an array - it's not yet defined!


### Adding Values

To add values to an existing object, there is no special method like with arrays. See this example:

```javascript
const animalCounts = {
  lion: 2,
  zebra: 11,
  ostrich: 1,
  tortoise: 4
}

//Suddenly the zoo acquired two dozen eagles

animalCounts.eagle = 24
//or
animalCounts["eagle"] = 24
```

The reason we must have quotes in the second version is because otherwise JS would think that `eagles` is a variable, which it isn't. So this is one case where bracket notation is required.

Generally speaking, **we don't usually add key-values to an existing object**.  
We modify them all the time, but usually we'll set an object up with whatever properties it needs, and that's it.

This makes sense, because usually objects represent certain entities in our application (like a User), and those entities don't usually change
For instance, a User will always have a name, email, and birthday - but if we decided that's all the data we want about a user, then that's usually it.

**Spot check:** given the following code:

```javascript
const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
```

Write some code that gives human the key-value pair of name: "Goojibear", using the variables above.

```javascript
human[babyNameKey] = babyNameValue
console.log(human) //prints {age: 0, name: "Goojibear"}

//In this case, dot notation would be simpler, but this is just an example:
human.name = "Goojibear"
```

### Replacing Values

As with arrays, we can also replace the values in objects, given their keys. For example, in this object:

```javascript
let instructor = {
  age: 27
}
```

If we wanted to change `age`'s value to 28 we could do any of the following:

```javascript
instructor.age += 1
instructor["age"] += 1
instructor.age++
instructor["age"]++
instructor.age = 28
instructor["age"] = 28
```

We can do any of these because once you access an object's value, **it's basically a normal variable** - more about that in a second.

**Spot check:** modify the `human` object from before - give it a normal name

Console log `human` to make sure it worked.

### Objects vs. Variables

Let's discuss this notion of objects-as-variables again.
Once you create an object - it's just a normal variable. That means you can use it in functions, arrays, in loops, etc. For example:

```javascript
let apple = {
  color: "red",
  name: "apple"
}

let cheese = {
  color: "yellow",
  name: "cheese"
}

let foods = [apple, cheese]

console.log(foods[0].name) // apple
console.log(foods[1].color) // yellow
```

Breaking it down:

*   Lines 1-9: creating two objects
*   Line 11: creating an array with some values inside - yes, objects in arrays!
*   Lines 13-14: accessing object values, _from the array_

Let's look at line 13 real quick. One step at a time:

```javascript
console.log(food[0])
```

This is fine, right? It will just print whatever is the first item in the array `food` - in this case, it is the entire `apple` object.

Now remember, if we do:

```javascript
console.log(apple.name)
```

It's just **accessing** the object's `name` property.  
  
Since `food[0]` **is the exact same** as `apple`  
Then `food[0].name` **is the exact same** as `apple.name`

**Spot check:** how would you extract the color of `apple`, from the `foods` array?

```javascript
foods[0].color
```

Great. Now let's go back to our `bag` example from before, and add a twist:

```javascript
const bag = {
  weight: 10,
  owner: "Larissa",
  items: [                   // an array with objects in it!
    {item: "Pen", count: 2},
    {item: "Bottle", count: 1},
    {item: "Book", count: 3}
  ]
}
```

  
If your mind is a little blown now, no worries. Let's take it one step at a time:

*   Line 1: initialize an object called `bag`
*   Line 2: give the bag a key of `weight` with a value of 10

*   We could access this using `bag.weight` - no problem

*   Line 4: give the `bag` a key of `items`, with a value of an **array**

*   If we console log `bag.items` we'll see the whole array which ends on line 8

*   Lines 5-7: instead of inserting numbers/strings into the array, we're inserting **objects**

*   Each object in the array has the same two **keys**, but with different **values**
*   These objects don't have a name. We would access them as we access array elements: `items[0]`

Say we wanted to know how many books Larissa has in her bag, we'd do this:

```javascript
console.log(bag.items[2].count) // prints 3
```

Again, take it one step at a time:

```javascript
bag.items // the whole items array:
          //[{item: "Pen", count: 2}, {...}, {...}]


bag.items[2] // the item at index #2:
             //{item: "Book", count: 3}
             //remember we access arrays with indexes!

bag.items[2].count // the count of the item at index #2
```

Boom. Objects.

**Spot check:** get the name of the first item in the bag. You should be able to do this no problem ~

```javascript
bag.items[0].item
```

### Reference Types

As opposed to **strings**, **numbers**, and **booleans** which are all primitive types, **arrays and objects are reference types**.

Check this code out:

```javascript
let numbers = [1, 2, 3]
let nums = numbers

nums[0] = 50
```

No big deal here - now when we print `nums`, we should see `[50, 2, 3]` - right?

And when we `console.log(numbers)`?

We will _also_ see `[50, 2, 3]`! Test it out yourself, it's incredible.

The reason this happens is that **JS does not create a new space in memory for reference types. Instead, it references an existing space, if possible.**

Think about it this way: we defined and initialized a `numbers` array with certain values.  
Then we defined a `nums` array _with the value `numbers`!_

JS now says "listen here buddy, arrays can become very l{Check It!|assessment}(test-1169498200)
ong, and I don't want to waste memory on the exact same data!"

So instead of creating _new_ memory, JS will just say "hey, I'll just associate between `nums` and `numbers` - whatever you do to one I'll do to the other."

The same applies to objects, which are also reference types. Try something like this out for yourself:

```javascript
let person = {
  firstName: "Dopple",
  lastName: "Ganger"
}

let p = person
p.firstName= "Chappy"

console.log(p)
console.log(person)
```