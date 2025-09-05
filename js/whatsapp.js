// whatsapp.js

// Global WhatsApp phone number
const WHATSAPP_PHONE = "8801625234186";

// Function: open WhatsApp with a given message
function openWhatsApp(message) {
    const url = "https://wa.me/" + WHATSAPP_PHONE + "?text=This+message+is+coming+via+Dacca+PowerHub+Website.%0AHi, " + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

// Function: Send Enquiry Form
function sendEnquiryForm(e) {
    e.preventDefault();

    // Get form values
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const messageExtra = document.getElementById("message").value;

    if (!brand) {
        alert("⚠ Please select a battery brand before submitting.");
        return;
    }

    // Build WhatsApp message
    const fullMessage =
        "I need a battery Replacement.%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Car Model: " + model + "%0A" +
        "Battery Brand: " + brand + "%0A" +
        "Message: " + (messageExtra ? messageExtra : "N/A");

    openWhatsApp(fullMessage);
}
