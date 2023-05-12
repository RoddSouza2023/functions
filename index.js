const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//create function that takes obj as parameter (0)
function totalPrescriptionPriceCalculator(obj) {

    //CREATE variable that has the product of the number of refills and price of medication (1)
    let price = obj.pricePerRefill * obj.refills;

    //APPLY conditionals (2)
    //check to see if object subscription is true, if so apply discount to original value (2.1)
    if (obj.subscription) { 
        price *= 0.75 
    } 
    //check to see if object has coupon, if so apply additional discount (2.2)
    if (obj.coupon) {
        price -= 10;
    }

    //RETURN the desired output string, in this case will use console.log to get the printed result instead of a return (3)
    console.log(`Your grand total is ${price}.`);
}

totalPrescriptionPriceCalculator(timmy);
totalPrescriptionPriceCalculator(sarah);
totalPrescriptionPriceCalculator(rocky);
