function search_Item() {
  searchInput.addEventListener("input", function() {
    if (searchInput.value.length > 1) {
      let searchInput = document.querySelector("#searchInput").value;
      searchInput = searchInput.toLowerCase();
      let video = document.querySelectorAll(".videos");
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

let like = document.querySelector("#like");
let dislike = document.querySelector("#dislike");
let forlike_btn = document.querySelector(".forlike_btn");
let fordislike_btn = document.querySelector(".fordislike_btn");
let liked = 1;
let disliked = 1;
like.addEventListener("click", function() {
  like.classList.toggle("addlike");
  if (like.classList.contains("addlike")) {
    forlike_btn.innerHTML = liked = +1;
  } else {
    forlike_btn.innerHTML = liked -= 1;
  }
  fordislike_btn.innerHTML = 0;
  dislike.classList.remove("add_dislike");
  localStorage.setItem(
    "like",
    (forlike_btn.innerHTML = liked = +1),
    like.classList.add("addlike")
  );
  localStorage.setItem(
    "dislike",
    (fordislike_btn.innerHTML = disliked = 0),
    dislike.classList.add("add_dislike")
  );
});
forlike_btn.innerHTML = localStorage.getItem(
  "like",
  like.classList.add("addlike")
);
dislike.addEventListener("click", function() {
  dislike.classList.toggle("add_dislike");
  if (dislike.classList.contains("add_dislike")) {
    fordislike_btn.innerHTML = disliked = +1;
  } else {
    fordislike_btn.innerHTML = disliked -= 1;
  }
  forlike_btn.innerHTML = 0;
  like.classList.remove("addlike");
  localStorage.setItem("dislike", (fordislike_btn.innerHTML = disliked = +1));
  localStorage.setItem(
    "like",
    (forlike_btn.innerHTML = liked = 0),
    like.classList.add("addlike")
  );
});
fordislike_btn.innerHTML = localStorage.getItem(
  "dislike",
  dislike.classList.add("add_dislike")
);
let stars = document.querySelectorAll(".stars i");
console.log(stars);
let currentBall = 1;
function ball() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function() {
      stars[i].classList.add("starsball");
      if (stars[i].classList.contains("starsball")) {
        stars[i].classList.add("starsball");
      }
    });
  }
}
ball();

let header_video = document.querySelector(".header_video"),
  playbtn = document.querySelector("#play"),
  pausebtn = document.querySelector("#pause");
// video Play

header_video.src = "";
function play() {
  header_video.play();
}
function pause() {
  header_video.pause();
}

playbtn.addEventListener("click", function() {
  play();
});
pausebtn.addEventListener("click", function() {
  pause();
});

let items = document.querySelectorAll("#items");
function header_videos() {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      header_video.setAttribute("src", `${items[i].src}`);
      localStorage.setItem("video", header_video.src);
    });
    header_video.setAttribute("src", localStorage.getItem("video"));
  }
}

header_videos();
