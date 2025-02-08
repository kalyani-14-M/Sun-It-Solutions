// Show chatbot
function startChat() {
    document.getElementById("chatbot").style.display = "block";
}

// Handle contact form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});
