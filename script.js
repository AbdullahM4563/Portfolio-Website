// Script for any additional interactivity (e.g., animations or light/dark mode)
console.log("Portfolio website script running");

// Example: Toggle dark/light mode functionality (optional)
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

