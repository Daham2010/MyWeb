// PRELOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 800);
});
/* SMOOTH SCROLL NAVIGATION */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    const headerOffset = 90; // height of fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
function openModal(title, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

document.addEventListener("DOMContentLoaded", () => {

  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  if (!chatInput || !chatBody) return;

  function botReply(message) {
    let reply = "I specialize in luxury web development and UI/UX design.";

    if (message.includes("portfolio")) {
      reply = "You can explore my selected luxury projects in the portfolio section.";
    } 
    else if (message.includes("skills")) {
      reply = "My core skills include Web Development, UI/UX Design, Branding, and AI Automation.";
    } 
    else if (message.includes("contact")) {
      reply = "You can contact me using the form at the bottom of the website.";
    }

    chatBody.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const userText = chatInput.value.toLowerCase();

      chatBody.innerHTML += `<div class="user-msg">${chatInput.value}</div>`;
      chatInput.value = "";

      setTimeout(() => botReply(userText), 600);
    }
  });

});
document.getElementById("chat-input")
const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");

if (chatToggle && chatbot) {
  chatToggle.addEventListener("click", () => {
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
  });
}
document.addEventListener("DOMContentLoaded", () => {

  const chatToggle = document.getElementById("chat-toggle");
  const chatbot = document.getElementById("chatbot");

  if (!chatToggle || !chatbot) {
    console.error("Chatbot elements not found");
    return;
  }

  // Toggle open / close
  chatToggle.addEventListener("click", () => {
    if (chatbot.style.display === "flex") {
      chatbot.style.display = "none";
    } else {
      chatbot.style.display = "flex";
    }
  });

});
const heroText = document.getElementById("heroText");

// Safety check
if (heroText) {

  // Mouse-based parallax synced with 3D motion
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    heroText.style.transform = `
      translate3d(${x}px, ${-y}px, 0)
    `;
  });

}
async function loadBlogs() {
  const res = await fetch("blog/posts/luxury-web-design.md");
  const text = await res.text();

  document.getElementById("blogContent").innerText = text;
}

loadBlogs();
function filterBlogs(query, category) {
  // later replaced with Supabase query
  console.log(query, category);
}

document.getElementById("search").addEventListener("input", e => {
  filterBlogs(e.target.value, category.value);
});
const supabase = supabase.createClient(
  "https://podpzgysgvxcgwhcgqsi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZHB6Z3lzZ3Z4Y2d3aGNncXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NDA0MjQsImV4cCI6MjA4MjQxNjQyNH0.ZncxQDJ2p8kYAcy3b3BNLDpjWAwu7RzhcaOfDMbNwNM"
);
async function fetchBlogs() {
  const { data } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  console.log(data);
}
async function generateBlog(topic) {
  const ai = await fetch("/blog-ai", {
    method: "POST",
    body: JSON.stringify({ message: `Write a blog about ${topic}` })
  });

  const content = await ai.json();

  await supabase.from("blogs").insert({
    title: topic,
    content,
    category: "AI Generated"
  });
}
document.getElementById("aiGenerate").addEventListener("click", async () => {
  const title = document.getElementById("blogTitle").value;

  if (!title) {
    alert("Enter blog title first");
    return;
  }

  const res = await fetch("/ai-blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic: title })
  });

  const data = await res.json();
  document.getElementById("blogContent").value = data.content;
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  document.querySelectorAll(".blog-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
const navSearch = document.getElementById("navSearch");

if (navSearch) {
  navSearch.addEventListener("input", () => {
    const value = navSearch.value.toLowerCase();

    document.querySelectorAll(".blog-card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}

