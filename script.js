document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const roadmapBtn = document.getElementById("roadmapBtn");

if (roadmapBtn) {
  roadmapBtn.addEventListener("click", () => {
    openRoadmapGenerator();
  });
}

function openRoadmapGenerator() {
  const goal = prompt("🎯 What skill do you want to learn? (e.g., Web Dev, AI)");
  if (!goal) return;

  const time = prompt("⏱️ How many hours per day can you study?");
  if (!time) return;

  const roadmap = `
🚀 Your AI Roadmap for ${goal}

Week 1: Fundamentals
Week 2: Hands-on Practice
Week 3: Mini Projects
Week 4: Real-World Project + Portfolio

Daily Time: ${time} hrs/day
`;

  alert(roadmap);
}
document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.padding = "14px 22px";
  toast.style.background = "rgba(0,0,0,0.85)";
  toast.style.color = "#fff";
  toast.style.borderRadius = "10px";
  toast.style.fontSize = "14px";
  toast.style.zIndex = "999";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

let isSignIn = true;

const authForm = document.getElementById("authForm");

if (authForm) {
  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    showToast(
      isSignIn
        ? "✅ Signed in successfully!"
        : "🎉 Account created successfully!"
    );
  });
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function generateFromMenu() {
  const goal = document.getElementById("goalInput").value;
  const time = document.getElementById("timeInput").value;

  if (!goal || !time) {
    showToast("⚠ Please enter goal and time");
    return;
  }

  alert(`
🚀 Custom Learning Plan

Goal: ${goal}
Daily Time: ${time} hrs

Week 1 → Core fundamentals
Week 2 → Hands-on practice
Week 3 → Mini projects
Week 4 → Real-world project + resume

XP, streaks & analytics enabled ⚡
  `);

  toggleMenu();
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}
function goToResume() {
  window.location.href = "resume.html";
}
function goToProgress() {
  window.location.href = "track-progress.html";
}
function goToXP() {
  window.location.href = "track-xp.html";
}
function goToStreaks() {
  window.location.href = "streaks.html";
}
function goToSkills() {
  window.location.href = "skill-proficiency.html";
}
function goToAnalytics() {
  window.location.href = "analytics.html";
}
if (window.location.pathname.includes("analytics.html")) {

  setInterval(() => {
    document.getElementById("activeMinutes").innerText =
      Math.floor(Math.random() * 60) + 100;

    document.getElementById("xpSession").innerText =
      Math.floor(Math.random() * 20) + 40;

    document.getElementById("focusScore").innerText =
      Math.floor(Math.random() * 20) + 70 + "%";

    document.getElementById("skillEfficiency").innerText =
      Math.floor(Math.random() * 15) + 70 + "%";

    const feed = document.getElementById("activityFeed");
    const activities = [
      "Completed CSS lesson",
      "Earned +25 XP",
      "Watched React tutorial",
      "Updated skill proficiency",
      "Maintained daily streak 🔥"
    ];

    const li = document.createElement("li");
    li.innerText = activities[Math.floor(Math.random() * activities.length)];
    feed.prepend(li);

    if (feed.children.length > 5) {
      feed.removeChild(feed.lastChild);
    }

  }, 3000);
}
function generateRoadmap() {
  const goal = document.getElementById("roadmapGoal").value;
  const time = document.getElementById("roadmapTime").value;
  const output = document.getElementById("roadmapOutput");

  if (!goal || !time) {
    showToast("⚠ Please enter goal and time");
    return;
  }

  output.innerHTML = `
    <h2>🚀 ${goal} Roadmap</h2>
    <ul>
      <li><b>Week 1:</b> Fundamentals & basics</li>
      <li><b>Week 2:</b> Hands-on practice</li>
      <li><b>Week 3:</b> Mini projects</li>
      <li><b>Week 4:</b> Real-world project + portfolio</li>
    </ul>
    <p>⏱ Daily Time: <b>${time} hrs/day</b></p>
    <p>⚡ XP, streaks & analytics enabled</p>
  `;
}
