/* V2

function setProgress(percent) {
  const progress = document.querySelector('.progress');
  progress.style.width = percent + '%';
}

// Example usage: setProgress(50);

*/

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}
/*
const img = document.querySelector("#profile img");
if (html.classList.contains("party")) {
  img.setAttribute("src", "./assets/party-profile.png");
  img.setAttribute("alt", "Party");
} else {
  img.setAttribute("src", "./assets/vinil-profile.png");
  img.setAttribute("alt", "Vinil");
}

const videoElement = document.querySelector("#video-container video");
const source = videoElement.querySelector("source");

if (videoElement.classList.contains("vinil")) {
  source.setAttribute("src", "./assets/party.mp4");
  videoElement.classList.remove("vinil");
  videoElement.classList.add("party");
  videoElement.poster = "./assets/party.jpg";
}
else {
  source.setAttribute("src", "./assets/vinil.mp4");
  videoElement.classList.remove("party");
  videoElement.classList.add("vinil");
  videoElement.poster = "./assets/vinil.jpg";

}
videoElement.load();

const animations = document.querySelectorAll(".animation");
for (const animation of animations) {
  animation.classList.toggle("party-border");
}
*/