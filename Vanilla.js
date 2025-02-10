function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    // Append user message
    let userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatbox.appendChild(userMessage);

    // Bot response logic
    let botMessage = document.createElement("p");
    botMessage.innerHTML = `<strong>Bot:</strong> ${getBotResponse(userInput)}`;
    chatbox.appendChild(botMessage);

    // Clear input field
    document.getElementById("userInput").value = "";
}

// Simple chatbot response system
function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("hello")) return "Hello! How can I help?";
    if (input.includes("services")) return "We offer Web Dev, cloud computing and Cybersecurity.";
    if (input.includes("contact")) return "You can reach us at support@itcompany.com.";
    return "I'm not sure how to respond to that.";
}
function startChat() {
    document.getElementById("chatbot").style.display = "block";
}
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});
