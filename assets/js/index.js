function toogleNavbar() {
    // let var const
    let nav = document.getElementById('navbar-nav');
    nav.style.display = '';

    console.log(nav.style.display);
    if(nav.style.display == '' || nav.style.display == 'none'){
        nav.style.display = 'flex';
    }
    else{
        nav.style.display = none;
    }
}