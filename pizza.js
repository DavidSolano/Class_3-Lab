function calculate()
{
    //ask the pizza cost
    let pizzaCost = parseFloat(prompt("What is the cost of your pizza?"))

    //ask how many toppings have been added
    let toppingsAmount = parseFloat(prompt("how many toppings have you added?"))

    //how many people are splitting the pizza
    let peopleAmount = parseFloat(prompt("how many people are there?"))

    //maths

    //multiply toppings times topping price
    let toppingCost = toppingsAmount * 1.25;

    //add the cost of the pizza times the toppings
    let totalCost = pizzaCost + toppingCost;

    //get what each person has to pay
    let total = totalCost / peopleAmount;

    //output
    alert(`The total you will each have to pay is $${total.toFixed(2)} for the pizza`)
}