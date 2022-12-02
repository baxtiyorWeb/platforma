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

let signUp = document.querySelector(".signUpemail");
signUp.innerHTML = localStorage.getItem("username");
signUp.setAttribute("href", "myProfil.html");
let videosrc = document.querySelectorAll("video");
// video.forEach((item)=>{
  
  for (let i = 0; i < videosrc.length; i++) {
    let a = document.createElement('a')
    a.append(videoAbout[i])
    video[i].append(a);
    a.append(videoAbout[i]);
    a.addEventListener("click", function() {
      // let a = document.createElement("a")
      videoAbout[i].append(videosrc);
      a.setAttribute("href", "./myProfil.html");
      videoAbout[i].append(videosrc);
      // set local//
      local(videosrc[i].src);

    });
    function local(todo) {
      let todos;
      if (localStorage.getItem("video") === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem("video"));
      }
      todos.push(todo);
      localStorage.setItem("video", JSON.stringify(todos));
    }
   
}
