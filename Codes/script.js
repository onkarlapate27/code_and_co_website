function toTop() {
    document.documentElement.scrollTop = 0;
}

let topButton = document.getElementById('topButton');
let navi = document.getElementById('navBar');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 60) {

        topButton.addEventListener('click', toTop);
        topButton.style.display = "block";
        navi.className = 'navigation--scroll';
    } else {
        topButton.style.display = "none";
        navi.className = 'navigation';
    }
};