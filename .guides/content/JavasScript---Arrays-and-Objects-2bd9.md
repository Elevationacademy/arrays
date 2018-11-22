# Intro

In this lesson we're going to cover an extremely popular and fundamental **data structures**: Arrays.

A data structure, as the name suggests, is a structure (some way) for holding and managing data.

Unlike simple variables which only allow us to hold one piece of data (some text, a number, a boolean) - data structures allow us to hold several pieces of data, and allow us to access and manipulate that data in different ways.

In this lesson we will cover **Arrays**, which are effectively just lists.

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

See the first exercise in [this codepen](https://codepen.io/ElevationPen/pen/VVQzMM) to double check your work.

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

See the second exercise in [this codepen](https://codepen.io/ElevationPen/pen/VVQzMM) to double check your work.

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

See the third exercise in [this codepen](https://codepen.io/ElevationPen/pen/VVQzMM) to double check your work.

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

See the fourth exercise in [this codepen](https://codepen.io/ElevationPen/pen/VVQzMM) to double check your work.


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

### Reference Types

As opposed to **strings**, **numbers**, and **booleans** which are all primitive types, **arrays are reference types**.

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

JS now says "listen here buddy, arrays can become very long, and I don't want to waste memory on the exact same data!"

So instead of creating _new_ memory, JS will just say "hey, I'll just associate between `nums` and `numbers` - whatever you do to one I'll do to the other."

---

That's it for arrays...for now!