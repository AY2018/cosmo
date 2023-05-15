function Ayoub(){
    let Ayoub = document.getElementById('Ayoub');
    let Fouad = document.getElementById('Fouad');
    let Cedric = document.getElementById('Cedric');
    let Renata = document.getElementById('Renata');
    let Afif = document.getElementById('Afif');

    Ayoub.style.display = 'flex';
    Fouad.style.display = 'none';
    Cedric.style.display = 'none';
    Renata.style.display = 'none';
    Afif.style.display = 'none';


    let AyoubBtn = document.getElementById('AyoubBtn');
    let FouadBtn = document.getElementById('FouadBtn');
    let CedricBtn = document.getElementById('CedricBtn');
    let RenataBtn = document.getElementById('RenataBtn');
    let AfifBtn = document.getElementById('AfifBtn');

    AyoubBtn.style.opacity = '1';
    FouadBtn.style.opacity = '0';
    CedricBtn.style.opacity = '0';
    RenataBtn.style.opacity = '0';
    AfifBtn.style.opacity = '0';
}




function Fouad(){
    let Ayoub = document.getElementById('Ayoub');
    let Fouad = document.getElementById('Fouad');
    let Cedric = document.getElementById('Cedric');
    let Renata = document.getElementById('Renata');
    let Afif = document.getElementById('Afif');

    Fouad.style.display = 'flex';
    Ayoub.style.display = 'none';
    Cedric.style.display = 'none';
    Renata.style.display = 'none';
    Afif.style.display = 'none';

    let AyoubBtn = document.getElementById('AyoubBtn');
    let FouadBtn = document.getElementById('FouadBtn');
    let CedricBtn = document.getElementById('CedricBtn');
    let RenataBtn = document.getElementById('RenataBtn');
    let AfifBtn = document.getElementById('AfifBtn');

    FouadBtn.style.opacity = '1';
    AyoubBtn.style.opacity = '0';
    CedricBtn.style.opacity = '0';
    RenataBtn.style.opacity = '0';
    AfifBtn.style.opacity = '0';
}


function Renata(){
    let Ayoub = document.getElementById('Ayoub');
    let Fouad = document.getElementById('Fouad');
    let Cedric = document.getElementById('Cedric');
    let Renata = document.getElementById('Renata');
    let Afif = document.getElementById('Afif');

    Renata.style.display = 'flex';
    Ayoub.style.display = 'none';
    Cedric.style.display = 'none';
    Fouad.style.display = 'none';
    Afif.style.display = 'none';

    let AyoubBtn = document.getElementById('AyoubBtn');
    let FouadBtn = document.getElementById('FouadBtn');
    let CedricBtn = document.getElementById('CedricBtn');
    let RenataBtn = document.getElementById('RenataBtn');
    let AfifBtn = document.getElementById('AfifBtn');

    RenataBtn.style.opacity = '1';
    AyoubBtn.style.opacity = '0';
    CedricBtn.style.opacity = '0';
    FouadBtn.style.opacity = '0';
    AfifBtn.style.opacity = '0';
}


function Afif(){
    let Ayoub = document.getElementById('Ayoub');
    let Fouad = document.getElementById('Fouad');
    let Cedric = document.getElementById('Cedric');
    let Renata = document.getElementById('Renata');
    let Afif = document.getElementById('Afif');

    Afif.style.display = 'flex';
    Ayoub.style.display = 'none';
    Cedric.style.display = 'none';
    Fouad.style.display = 'none';
    Renata.style.display = 'none';

    let AyoubBtn = document.getElementById('AyoubBtn');
    let FouadBtn = document.getElementById('FouadBtn');
    let CedricBtn = document.getElementById('CedricBtn');
    let RenataBtn = document.getElementById('RenataBtn');
    let AfifBtn = document.getElementById('AfifBtn');

    AfifBtn.style.opacity = '1';
    AyoubBtn.style.opacity = '0';
    CedricBtn.style.opacity = '0';
    FouadBtn.style.opacity = '0';
    RenataBtn.style.opacity = '0';
}

function Cedric(){
    let Ayoub = document.getElementById('Ayoub');
    let Fouad = document.getElementById('Fouad');
    let Cedric = document.getElementById('Cedric');
    let Renata = document.getElementById('Renata');
    let Afif = document.getElementById('Afif');

    Cedric.style.display = 'flex';
    Ayoub.style.display = 'none';
    Afif.style.display = 'none';
    Fouad.style.display = 'none';
    Renata.style.display = 'none';

    let AyoubBtn = document.getElementById('AyoubBtn');
    let FouadBtn = document.getElementById('FouadBtn');
    let CedricBtn = document.getElementById('CedricBtn');
    let RenataBtn = document.getElementById('RenataBtn');
    let AfifBtn = document.getElementById('AfifBtn');

    CedricBtn.style.opacity = '1';
    AyoubBtn.style.opacity = '0';
    RenataBtn.style.opacity = '0';
    FouadBtn.style.opacity = '0';
    AfifBtn.style.opacity = '0';
}



function appearNav(){
    let header = document.getElementById('header');
    let nav = document.getElementById('otherNav');

    header.classList.toggle('DarkerHeader');
    nav.classList.toggle('navAppear');
}