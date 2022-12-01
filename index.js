let searchBox = document.querySelector(".searchBox");
let searchInput = document.querySelector("#searchInput");
let searchItemBtn = document.querySelector(".searchItem");
let lessons = document.querySelector("#lessons");
let option = document.querySelector("option");
let videoAbout = document.querySelectorAll(".videoAbout");
let video = document.querySelectorAll(".video");
let videoTitle = document.querySelectorAll("h3");

function localstorages(i) {
  for (let i = 0; i < videoAbout.length; i++) {
    console.log(videoAbout[i].length);
    videoAbout[i].addEventListener("click", function() {
      localStorage.setItem("keyingi sahifa");
    });
  }
}
// localstorages()

function lengths() {
  videoTitle.forEach(item => {
    if (item.innerText.length > 24) {
      let r = item.innerHTML.slice(0, 27);
      item.innerHTML = r + " . . . ";
    }
  });
}
lengths();

function search_Item() {
  searchInput.addEventListener("input", function() {
    if (searchInput.value.length > 1) {
      let searchInput = document.querySelector("#searchInput").value;
      searchInput = searchInput.toLowerCase();
      let video = document.querySelectorAll(".video");
      for (i = 0; i < video.length; i++) {
        if (!video[i].innerHTML.toLowerCase().includes(searchInput)) {
          video[i].style.display = "none";
        } else {
          video[i].style.display = "list-item";
        }
      }
    }
  });
}
search_Item();

window.addEventListener("scroll", function() {
  if (this.scrollY > 30) {
    searchBox.classList.add("sticky");
  } else {
    searchBox.classList.remove("sticky");
  }
});

let menu_hide_btn = document.querySelector(".menu_hide_btn");
let menu_show_btn = document.querySelector(".menu_show_btn");
let main = document.querySelector("main");
let aside = document.querySelector("aside");

const overlay = document.querySelector(".overlay");
// close modal function
const closeModal = function() {
  aside.classList.remove("hideaside");
  overlay.classList.remove("hide-overlay");
};

// close the modal when the close button and overlay is clicked
menu_hide_btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function() {
  aside.classList.add("hideaside");
  overlay.classList.add("hide-overlay");
};
// open modal event
menu_show_btn.addEventListener("click", openModal);

let profil_name = document.querySelector(".profil_name h3");
profil_name.innerHTML = localStorage.getItem("email");


