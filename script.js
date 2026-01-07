function buyNow(amount, pay) {
  fetch("http://localhost:5000/create-transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: amount,
      pay: pay
    })
  })
  .then(response => response.json())
  .then(data => {
    // Redirect to transaction page
    window.location.href =
      `transaction.html?txId=${data.txId}&amount=${data.amount}&pay=${data.pay}`;
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Backend not running");
  });
}
