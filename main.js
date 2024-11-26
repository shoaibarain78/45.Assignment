//TASK 2
/* Personal Message: Store a person’s name in a variable, and print a message to that person.Your message should be simple, such as, “Hello
Eric, would you like to learn some Python today?” */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
//TASK 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//in lowercase
var personName = "Imran Ali";
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//TASK 4
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//TASK 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstien";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//TASK 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName = " \t\n  John Doe  \n\t ";
console.log("Orignal:", personName);
console.log("Stripped:", personName.trim());
//TASK 7 & 8
/* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//TASK 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber));
//TASK 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//author: [Imran Ali].
//date: [ Sunday, April, 12, 2024 ].
// task 9: printing my favorite number.
//let favoriteNumber: number = 7;
//revealing my favorite number in a message format.
//console.log(`My favorite number is ${favoriteNumber}`);
//TASK 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Imran", "Shoaib", "Ab aziz", "Muzammil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//TASK 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Imran", "Shoaib", "Ab aziz", "Muzammil"];
var message = "Do you like earn money in online";
console.log(names[0] + ' ' + message);
console.log(names[1] + ' ' + message);
console.log(names[2] + ' ' + message);
console.log(names[3] + ' ' + message);
//TASK 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["honda civic", "heavy bike", "audi"];
transportation.map(function (items) { return console.log("\"i would like to own a ".concat(items)); });
//TASK 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestArr = ["Shoaib", "Ab aziz", "Muzammil"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, ", you are invited to dinner "))); });
//TASK 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guestArr = ["Imran", "Shoaib", "Ab aziz", "Muzammil"];
var canNotAttend = "Imran";
console.log(canNotAttend + " " + "can not attend the dinner.");
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var newGuest = "Ahmed";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// • Print a second set of invitation messages, one for each person who is still in your list.
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " \"you are invited to dinner\""));
});
//TASK 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var guestArr = ["Ahmed", "Shoaib", "Ab aziz", "Muzammil"];
var canNotAttend = "Shoaib";
var newGuest = "Saleem";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " I found a bigger dinner table so i am invited  more peoples"));
});
//• Add one new guest to the beginning of your array.
var guestBeg = "Saqib";
guestArr.unshift(guestBeg);
console.log(guestArr);
//• Add one new guest to the middle of your array. 
var middleGuest = "Rehan";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//• Use append() to add one new guest to the end of your list. 
guestArr.push("Farhan");
console.log(guestArr);
//• Print a new set of invitation messages, one for each person in your list.
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in a more people list on dinner"));
});
//TASK 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guests = ["Imran", "Ahsan", "Saleem", "Sufiyan", "Shoaib"];
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Due to limited space, only two people can be invited for dinner.");
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you are no longer invited to dinner."));
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach(guest);
{
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
;
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
//TASK 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var placeToVisit = ["Saudi Arabia", "America", "Canada", "Italy", "Pakistan"];
//• Print your array in its original order.
console.log("Original order:", __spreadArray([], placeToVisit, true).sort());
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], placeToVisit, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placeToVisit);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", __spreadArray([], placeToVisit, true).sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", placeToVisit);
//• Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorted in alphabetical order:", placeToVisit);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placeToVisit);
//TASK 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var invitations = ["Imran", "Ahsan"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
//TASK 20
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
 cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
var city = ["Shahdadpur", "Sanghar", "Lahore", "Karachi", "Hyderabad"];
console.log("List Of City:");
console.log(city);
//TASK 21 
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person = { name: "Imran", fnmae: "male", age: 20 };
console.log(person);
//TASK 22
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
var seasons = ["spring", "summer", "autumn", "winter"];
//console.log(seasons {3});
console.log(seasons[3]);
//TASK 23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
var car = "subaru";
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car != 'honda city'? predict true");
console.log(car != 'honda city');
console.log("Is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("Is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("Is car.length == 6? predict true");
console.log(car.length == 6);
console.log("Is car.length != 10? predict true");
console.log(car.length != 10);
console.log("Is 48 < 8 ? predict false ");
console.log(48 < 8);
console.log("Is 3 >= 2 ? predict true ");
console.log(3 >= 2);
console.log("Is 80 >= 90 ? predict false ");
console.log(80 > 90);
console.log("Is car == 'subaru' && car.length == 5? predict false ");
console.log(car == 'subaru' && car.length == 5);
//TASK 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
var name_1 = "Imran";
var name_2 = "Imran Ali";
var name_3 = "Mr Imran";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
//• Tests using the lower case function
if (name_1 != name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var age_1 = 15;
var age_2 = 20;
if (age_1 == 15) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote for older category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
//• Tests using "and" and "or" operators
if (age_1 == 15 && age_2 == 20) {
    console.log("person is eligible for vote");
}
if (age_1 == 15 || age_2 != 20) {
    console.log("person is not eligible for vote");
}
//• Test whether an item is in a array
var country = ["Pakistan", "India", "Japan", "China"];
if (country.includes("pakistan")) {
    console.log("pakistan is in list");
}
//• Test whether an item is not in a array
if (!country.includes("america")) {
    console.log("america is not include in an array");
}
//TASK 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color = "green";
if (alien_color == "green")
    console.log("you earned 5 points");
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "red";
if (alien_color == "red")
    console.log("no output");
//TASK 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• Write one version of this program that runs the if block and another that runs the else block.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
var alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
var alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
//TASK 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//• If the alien is green, print a message that the player earned 5 points.
var alien_color = "green";
if (alien_color == "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("player just earned 15 points");
}
//• If the alien is yellow, print a message that the player earned 10 points.
var alien_color = "yellow";
if (alien_color == "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("player just earned 15 points");
}
//• If the alien is red, print a message that the player earned 15 points.
var alien_color = "red";
if (alien_color == "green") {
    console.log("player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("player just earned 10 points");
}
else {
    console.log("player just earned 15 points");
}
//TASK 28
///Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
var age = 1;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
var age = 2;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
var age = 4;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
var age = 13;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
var age = 20;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//• If the person is age 65 or older, print a message that the person is an elder.
var age = 65;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}
//TASK 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favoriteFruits = ["Mango", "Banana", "watermilon", "apple", "kiwi"];
if (favoriteFruits.includes("Mango")) {
    console.log("Mango");
}
if (favoriteFruits.includes("Apple")) {
    console.log("you really like strawberry");
}
if (favoriteFruits.includes("Banana")) {
    console.log("Banana");
}
if (favoriteFruits.includes("kiwi")) {
    console.log("you really like a strawberry");
}
if (favoriteFruits.includes("watermilon")) {
    console.log("watermilon");
}
//TASK 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var users = ["eric", "imran", "shoaib", "muzammil", "admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
}
//TASK 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["eric", "imran", "shoaib", "muzammil", "admin"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
//TASK 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Eric", "imran", "Shoaib", "Muzammil", "admin"];
var new_users = ["admin", "imran", "Ahsan", "Saleem", "Ab aziz"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still in available list"));
    }
}
//TASK 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//TASK 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favoritePizza = ["chesse", "meat", "BBQ chicken"];
for (var _d = 0, favoritePizza_1 = favoritePizza; _d < favoritePizza_1.length; _d++) {
    var pizza = favoritePizza_1[_d];
    console.log(pizza);
}
console.log("\n");
for (var _e = 0, favoritePizza_2 = favoritePizza; _e < favoritePizza_2.length; _e++) {
    var pizza = favoritePizza_2[_e];
    console.log("I really like ".concat(pizza, " pizza!"));
}
console.log("\n I really love pizza");
//TASK 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["cheetah", "lion", "dog"];
for (var _f = 0, animals_1 = animals; _f < animals_1.length; _f++) {
    var animal = animals_1[_f];
    console.log(animal);
}
console.log("\n");
for (var _g = 0, animals_2 = animals; _g < animals_2.length; _g++) {
    var animal = animals_2[_g];
    console.log("A ".concat(animal, " has a tail!"));
}
console.log("\n all of these are great pet! but i like cheetah more");
//TASK 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, text) {
    console.log("you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt("large", "\"i love coding\"");
makeShirt("medium", "\"i need a big shirt\"");
//TASK 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love coding'; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
makeShirt();
makeShirt('medium');
//different message
makeShirt('small', 'I need a big shirt to wear');
//TASK 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Karachi');
describe_city('australia', 'europe');
describe_city('sanghar', 'is in sindh');
//TASK 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = cityCountry('lahore', 'pakistan');
var c2 = cityCountry('mumbai', 'india');
var c3 = cityCountry('london', 'australia');
console.log(c1);
console.log(c2);
console.log(c3);
//TASK 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    var dictioneries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictioneries;
}
var album = makeAlbum("imran", "light");
console.log(album);
album = makeAlbum("hamza", "red wave");
console.log(album);
album = makeAlbum("hussain", "seenbreeze");
console.log(album);
//TASK 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["imran", "hasnain", "asad"];
show_magicians(magician);
//TASK 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great';
    }
}
var magicians2 = ["imran", "saqib", "rehan"];
make_great(magicians2);
show_magicians(magicians2);
[];
string[];
{
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
var magicians3 = ["imran", "saqib", "rehan"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
//TASK 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich imran");
sandwich('tomato', 'capsium', 'chicken');
sandwich('cheese', 'beef');
sandwich('mayo sause', 'chicken', 'garlic');
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("civic", "honda", { color: "golden", year: "2024" });
console.log(mycar);
