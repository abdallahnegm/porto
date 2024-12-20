let switcherLis = document.querySelectorAll(".switch li");
let boxes = Array.from(document.querySelectorAll('.box'))

switcherLis.forEach((li => {
    li.addEventListener('click', removeActive)
    li.addEventListener('click', manageboxes)
}))

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageboxes() {
    boxes.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.type).forEach((el) => {
        el.style.display = "block";
    });
}

let btn = document.getElementById("btn")
window.onscroll = function () {
    if (scrollY >= 100) {
        // btn.style.display='block'
        btn.classList.remove('hide')
    }
    else {
        // btn.style.display='none'
        btn.classList.add('hide')
    }
}
btn.onclick = function () {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
var owl = $('.owl-carousel#ser');
owl.owlCarousel({
    // items:3,
    loop:true,
    // margin:70,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});