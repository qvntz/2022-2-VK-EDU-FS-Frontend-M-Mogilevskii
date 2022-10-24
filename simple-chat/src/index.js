import "./reset.css";
import "./index.css";

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat");

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener("DOMContentLoaded", getMessagesFromLocalStorage.bind(this))
document.addEventListener('keypress', handleKeyPress);

function getMessagesFromLocalStorage () {
    let messages = localStorage.getItem("messages") || "[]";
    messages = JSON.parse(messages);
    for (const message of messages) {
        createMessage(message);
    }
}

function saveMessageToLocalStorage (message) {
    let messages = localStorage.getItem("messages") || "[]";
    messages = JSON.parse(messages);
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}

function createMessage(message) {
    const messageBlock = document.createElement("div")
    messageBlock.className = "message";
    const text = document.createElement("div");
    text.innerText = message.text;
    const time = document.createElement("div");
    time.className = "message-time";
    time.innerText = message.time;
    messageBlock.append(...[text, time]);
    chat.prepend(messageBlock);
}

function handleSubmit (event) {
    event.preventDefault();
    const message = {
        "text": input.value,
        "time": `${new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"})}`,
    };
    if (message.text === "") {
        return;
    }
    createMessage(message);
    saveMessageToLocalStorage(message);
    input.value = "";
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    }
}


