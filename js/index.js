$(window).scroll(function () {
    $('#primary-nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    // $('#secondary-nav').toggleClass('fixed', $(this).scrollTop() > $('#secondary-nav').offset().top);

});

const countEl = document.getElementById('counter');



function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/PsgAdmission-2022/mscbsc/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}
function getVisitCount() {
    fetch('https://api.countapi.xyz/get/PsgAdmission-2022/mscbsc')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        }
        )
}
if (!sessionStorage.getItem("visited")) {
    sessionStorage.setItem("visited", 1);
    updateVisitCount();
} else {
    getVisitCount();
}