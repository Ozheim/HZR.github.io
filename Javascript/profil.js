const mainDiv = document.querySelector(".main-div");
const video = document.querySelector(".video-background");
const back = document.querySelector(".back");

back.addEventListener("click", (e) => {
  e.preventDefault();

  video.src = "../assets/video-reverse2.webm";
  video.classList.add("reverse");
  video.load();

  video.playbackRate = 2;
  video.play();

  mainDiv.classList.add("shrink");

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});

const a = document.querySelectorAll("a:not(.back)"); // prend tout les liens sauf .back pour eviter le conflit anuimation

a.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    mainDiv.classList.add("hidden");

    video.playbackRate = 2.0;
    video.classList.add("zoomIn");

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1720);
  });
});


const preloadVideo = (src) => {
  const video = document.createElement("video");
  video.src = src;
  video.preload = "auto";
  video.style.display = "none";
  document.body.appendChild(video);
};

document.addEventListener("DOMContentLoaded", () => {
  preloadVideo("/assets/video2.webm");
  preloadVideo("/assets/video-reverse2.webm");
});
