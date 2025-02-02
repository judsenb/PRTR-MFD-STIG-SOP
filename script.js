function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("toggleBtn");
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
        toggleBtn.innerHTML = "&#x2192;"; 
    } else {
        toggleBtn.innerHTML = "&#x2190;"; 
    }
}
let collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(button => {
    button.addEventListener("click", function () {
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
    });
});
function openPasswordPopup() {
    document.getElementById("passwordPopup").style.display = "block";
}
function closePasswordPopup() {
    document.getElementById("passwordPopup").style.display = "none";
}
function formatMACAddress(input) {
    let value = input.value.toUpperCase().replace(/[^A-F0-9]/g, "");
    let formatted = "";  
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 2 === 0 && i < 12) {
            formatted += ":";
        }
        formatted += value[i];
    }
    input.value = formatted.substring(0, 17);
}
function generatePassword() {
    let macInput = document.getElementById("macInput").value.trim();
    let macRegex = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/;
    if (!macRegex.test(macInput)) {
        alert("Invalid MAC Address format! Ensure it's in the format: AA:BB:CC:DD:EE:FF");
        return;
    }
    let hashedPassword = CryptoJS.MD5(macInput).toString();
    document.getElementById("generatedPassword").innerText = `Generated Password: ${hashedPassword.substring(0, 10)}`;
}
document.getElementById("macInput").addEventListener("input", function () {
    formatMACAddress(this);
});
function updateProgressBar() {
    let checkboxes = document.querySelectorAll(".check-item");
    let checkedCount = document.querySelectorAll(".check-item:checked").length;
    let totalCount = checkboxes.length;
    let progress = (checkedCount / totalCount) * 100;

    document.getElementById("progress-fill").style.width = progress + "%";
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".check-item").forEach(checkbox => {
        checkbox.addEventListener("change", updateProgressBar);
    });
});
