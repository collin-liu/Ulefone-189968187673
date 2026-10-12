(function () {
    var gs = document.getElementById('gs');
    if (gs) { gs.style.top = '86px'; }
})();


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('site-control').addEventListener('click', function() {
        this.classList.toggle('clicked-menu');
    });
});


document.getElementById('armorspec').addEventListener('click', function () {
    /**window.scrollTo(0, 0);**/
    document.getElementById('featurescontent').style.display = 'none';
    document.getElementById('speccontent').style.display = 'block';
    document.getElementById('armorspec').classList.add('active-button');
    document.getElementById('features').classList.remove('active-button');
    document.querySelectorAll('.faq_nav .wide').forEach(function (el) {
        el.style.display = '';
    });
    setTimeout(function () {
        const navBarHeight = 60;
        const speccontent = document.getElementById('speccontent');
        const targetTop = speccontent.getBoundingClientRect().top + window.pageYOffset - navBarHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }, 100);
});
