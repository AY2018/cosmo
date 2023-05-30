let btnPage0 = document.getElementById('btnPage0');
let btnPage1 = document.getElementById('btnPage1');
let btnPage2 = document.getElementById('btnPage2');

btnPage0.addEventListener('click', function(event) {
    event.preventDefault();
    let url = this.href;

    document.body.classList.add('locked');
    this.classList.add('animatedFusee');

    setTimeout(function() {
        window.location.href = url;
    }, 250);

    setTimeout(function() {
        document.body.classList.remove('locked');
    }, 350); // Matches the animation duration (1.6s)
});

btnPage1.addEventListener('click', function(event) {
    event.preventDefault();
    let url = this.href;

    document.body.classList.add('locked');
    this.classList.add('animatedFusee');

    setTimeout(function() {
        window.location.href = url;
    }, 250);

    setTimeout(function() {
        document.body.classList.remove('locked');
    }, 350); // Matches the animation duration (1.6s)
});

btnPage2.addEventListener('click', function(event) {
    event.preventDefault();
    let url = this.href;

    document.body.classList.add('locked');
    this.classList.add('animatedFusee');

    setTimeout(function() {
        window.location.href = url;
    }, 250);

    setTimeout(function() {
        document.body.classList.remove('locked');
    }, 350); // Matches the animation duration (1.6s)
});
