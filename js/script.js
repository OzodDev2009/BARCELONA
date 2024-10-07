function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    console.log(navLinks);
}

document.getElementById("toggleButton").addEventListener("click", function () {
    const textElement = document.getElementById("hiddenText");
    textElement.classList.toggle("expanded");

    console.log(textElement);
});

const audioButton = document.getElementById('audioButton');
const audio = document.getElementById('audio');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = "Pause Audio"; 
        audioButton.classList.add('playing'); 
    } else {
        audio.pause(); 
        audioButton.textContent = "Play Sound";
        audioButton.classList.remove('playing'); 
    }
}

audioButton.addEventListener('click', toggleAudio); 

function toggleTab(event, tabName) {
    const tabContent = document.getElementById(tabName);
    const tabButton = event.currentTarget;

    if (tabContent.style.display === 'flex') {
        tabContent.style.display = 'none';
        tabButton.classList.remove('active');
    } else {
        const allTabs = document.querySelectorAll('.tab-content');
        allTabs.forEach(tab => tab.style.display = 'none');

        const allButtons = document.querySelectorAll('.tab');
        allButtons.forEach(button => button.classList.remove('active'));

        tabContent.style.display = 'flex';
        tabButton.classList.add('active');
    }

    console.log(tabContent);
    console.log(tabButton);
}

let isPlaying = false;

