document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();
});

async function loadProfileData() {
    const response = await fetch('/profile-data');
    if (response.ok) {
        const data = await response.json();
        console.log(data);

        // document.getElementById('username').textContent = data.username; 등등
    } else {
        console.log(response.status);
    }
}