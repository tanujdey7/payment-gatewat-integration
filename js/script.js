function payment() {
  var amt = document.getElementById('amount').value*100;
  var options = {
    "key": "rzp_test_L5aaES5fAUkb2I",
    "amount": amt, // Example: 2000 paise = INR 20
    "name": "Tanuj Dey",
  "handler": function (response) {
    console.log(response);
      // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
    },
  };
  console.log(options);
  var propay = new Razorpay(options);
propay.open();
}