const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

console.log("\ninitial survey result\n");
console.table(customer);

customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = "3195551234";
customer['zipCode'] = "63132";
customer['favoriteFlavors'] = ["coffee", "strawberry", "matcha"];

console.log("\nafter fixing survey problem\n");
console.table(customer);

delete customer['zipCode'];
delete customer['favoriteStore'];

console.log("\nafter deleting keys and its values \n");
console.table(customer);

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = 5.32

console.log("\nafter adding new keys and its values \n");
console.table(customer);

console.log("\nprinting all the keys of customer object\n");
for (key in customer) {
    console.log(`${key}`);   

}