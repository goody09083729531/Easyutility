fetch("https://api.flutterwave.com/v3/bill-categories", {
    method: "GET",
    headers: {
        "Authorization": "Bearer FLWSECK_TEST-a97727137a809380e5754af876fcae89-X",
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});