let searchBox = document.querySelector('.searchBox')
let searchInput = document.querySelector('#searchInput')
let searchItemBtn = document.querySelector('.searchItem')
let lessons = document.querySelector('#lessons')
let option = document.querySelector('option')
let videoAbout = document.querySelectorAll('.videoAbout')
let video = document.querySelectorAll('.video')
function search_Item() {
    searchInput.addEventListener('input', function () {
        if (searchInput.value.length > 1) {
            let searchInput = document.querySelector('#searchInput').value
            searchInput = searchInput.toLowerCase();
            let video = document.querySelectorAll('.video')
            for (i = 0; i < video.length; i++) {
                if (!video[i].innerHTML.toLowerCase().includes(searchInput)) {
                    video[i].style.display = "none";
                }
                else {
                    video[i].style.display = "list-item";
                }
            }
        }
    })
}
search_Item()

window.addEventListener('scroll', function () {
    if (this.scrollY > 60) {
        searchBox.classList.add('sticky')
    } else {
        searchBox.classList.remove('sticky')
    }
})

let menu_hide_btn = document.querySelector('.menu_hide_btn')
let menu_show_btn = document.querySelector('.menu_show_btn')
let main = document.querySelector('main')
let aside = document.querySelector('aside')
function showMenu() {
    aside.classList.add('hideaside')
}
function hideMenu() {
    aside.classList.remove('hideaside')
}

menu_show_btn.addEventListener('click', function () {
    showMenu()
})
menu_hide_btn.addEventListener('click', function () {
    hideMenu()
})