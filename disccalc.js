function calcDiscount() {
  let userType = document.getElementById("userType").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let discount = 0;

  switch (userType) {
    case "guest":
      discount = 0; //0% discount
      break;
    case "member":
      discount = 0.05; //5% discount
      break;
    case "premium_member":
      discount = 0.1; //10% discount
      break;
    case "employee":
      discount = 0.2; //20% discount
      break;
    default:
      alert("Invalid user type");
      return;
  }

  //Calculate Discount
  let finalAmount = amount - amount * discount;

  //Display Result
  document.getElementById("discountEligible").innerHTML =
    "You're eligible for a " + discount * 100 + "% discount";
  document.getElementById("finalPrice").innerHTML =
    "Your final amount: RM " + finalAmount.toFixed(2);
}
