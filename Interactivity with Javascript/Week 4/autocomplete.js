function billingFunction() {

    // If checked
    if (document.getElementById("same").checked) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }

    // If not checked
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}