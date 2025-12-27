document.addEventListener("DOMContentLoaded", () => {

  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  async function sendToAI(message) {
    chatBody.innerHTML += `<div class="bot-msg">Typing...</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;

    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    chatBody.lastChild.remove();
    chatBody.innerHTML += `<div class="bot-msg">${data.reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && chatInput.value.trim()) {
      const userText = chatInput.value;

      chatBody.innerHTML += `<div class="user-msg">${userText}</div>`;
      chatInput.value = "";

      sendToAI(userText);
chatBody.innerHTML += `<div class="bot-msg">${data.reply}</div>`;
const botDiv = document.createElement("div");
botDiv.className = "bot-msg";
chatBody.appendChild(botDiv);
typeMessage(botDiv, data.reply);

    }
  });

});
function typeMessage(element, text) {
  let index = 0;
  element.innerHTML = "";

  const interval = setInterval(() => {
    element.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(interval);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 25);
}

