const messagesBlock = document.getElementById("messages");
const sendBtn = document.getElementById("sendMessage");
const input = document.getElementById("messageInput");
const usernameInput = document.getElementById("username");

function loadMessages() {
  messagesBlock.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

  messages.forEach(m => {
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `<strong>${m.user}:</strong> ${m.text}`;
    messagesBlock.appendChild(div);
  });

  messagesBlock.scrollTop = messagesBlock.scrollHeight;
}

sendBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  const user = usernameInput.value.trim() || "Гость";
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push({ user, text });
  localStorage.setItem("chatMessages", JSON.stringify(messages));

  input.value = "";
  loadMessages();
};

loadMessages();