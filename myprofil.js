let imgsfile = document.querySelector("#imgsfile");
let imgsfiles = document.querySelector(".user");
let icons = document.querySelector(".user i");
// document.addEventListener("DOMContentLoaded", getLocal);
let searchBox = document.querySelector(".searchBox");
let searchInput = document.querySelector("#searchInput");
let searchItemBtn = document.querySelector(".searchItem");
let lessons = document.querySelector("#lessons");
let option = document.querySelector("option");
let videoAbout = document.querySelectorAll(".videoAbout");
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
// <<<<<<< HEAD

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
profil_name.innerHTML = localStorage.getItem("username");

// =======
function showMenu() {
  aside.classList.add("hideaside");
}

function hideMenu() {
  aside.classList.remove("hideaside");
}

menu_show_btn.addEventListener("click", function() {
  showMenu();
});
menu_hide_btn.addEventListener("click", function() {
  hideMenu();
});

let file;
let img = document.createElement("img");
img.style.width = "50px";
img.style.height = "50px";
img.style.borderRadius = "100%";
imgsfile.addEventListener("change", function(e) {
  let filed = URL.createObjectURL(e.target.files[0]);
  img.src = filed;
  imgsfiles.append(img);
  console.log("img");
  console.log("clicked");
  console.log(img);
  imgsfile.style.display = "none";
  icons.style.display = "none";
  function local(todo) {
    let todos;
    if (localStorage.getItem("icon") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("icon"));
    }
    todos.push(todo);
    localStorage.setItem("icon", JSON.stringify(todos));
  }

  local(img.src);
  let saved = (imgsfile.style.display = "none");
  let saveds = (icons.style.display = "none");
  localStorage.setItem("style", saved, saveds);
  localStorage.getItem("style");
});

let savedVideo = document.querySelector(".savedVideo");

function getLocals() {
  let todos;
  if (localStorage.getItem("video") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("video"));
  }
  // let videos = document.querySelector(".video");
  let videoCreate = document.createElement("div");
  videoCreate.classList.add("videoCreate");
  let savedVideo = document.querySelector(".savedVideo");
  todos.forEach(function(todo) {
    let video = document.createElement("video");
    let videolclass = document.createElement("div");
    videolclass.classList.add("video");
    savedVideo.append(videoCreate);
    videoCreate.append(videolclass);
    videolclass.append(video);
    let play = document.createElement("button");
    videolclass.append(play);
    video.src;
    play.innerHTML = "ijro etish";
    play.addEventListener("click", () => {
      if (play.innerHTML === "ijro etish") {
        play.innerHTML = "pause";
        video.play();
      } else {
        video.pause();
        play.innerHTML = "ijro etish";
      }
    });
    video.src = todo;
  });
}
getLocals();
