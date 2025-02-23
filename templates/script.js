const socket = new WebSocket("ws://localhost:8080/ws");

if (!localStorage.getItem("username")) {
    const username = prompt("Enter your username:");
    localStorage.setItem("username", username);
}

const currentUser = localStorage.getItem("username");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") sendMessage();
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") return;

    const msgObject = {
        username: currentUser,
        text: message
    };

    socket.send(JSON.stringify(msgObject));
    messageInput.value = "";
}
let lastDisplayedDate = ""; // Store the last displayed date

socket.onmessage = function (event) {
    const msgData = JSON.parse(event.data);
    const chatBox = document.getElementById("chat-box");

    // Show the date only if it hasn't been displayed yet
    if (lastDisplayedDate !== msgData.date) {
        lastDisplayedDate = msgData.date; // Update the last displayed date

        const dateSeparator = document.createElement("div");
        dateSeparator.classList.add("date-separator");
        dateSeparator.innerText = msgData.date;
        chatBox.appendChild(dateSeparator);
    }

    const msgElement = document.createElement("div");
    msgElement.classList.add("message");

    if (msgData.username === currentUser) {
        msgElement.classList.add("sent"); // Sent messages on right
    } else {
        msgElement.classList.add("received"); // Received messages on left
    }

    msgElement.innerHTML = `
        <div class="bubble">
            <strong>${msgData.username}</strong><br>
            ${msgData.text}
            <small class="timestamp">${msgData.timestamp}</small>
        </div>
    `;

    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
};
