document.getElementById('js-burger').addEventListener('click', function(){
    let element = document.getElementById('js-burger-pop');
    element.classList.toggle('hidden');
}); // opens the sub nav menu after the user clicks the burger menu

document.getElementById('js-contact').addEventListener('click', function(){
    this.innerHTML = 'tkemery7@gmail.com';
}); // toggles the value of text to show email when 'Contact Me' is clicked 

document.getElementById('js-contact-me').addEventListener('mouseover', function(){
    if (this.text === 'Contact Me'){
        this.innerHTML = 'tkemery7@gmail.com';
    }
    else {
        this.innerHTML = 'Contact Me'
    }
}); // toggles the value of text to show email when 'Contact Me' is moused over

document.getElementById('header').addEventListener('click', function(){
    let element = document.getElementById('js-burger-pop');

    if (element.classList.contains('hidden')){
        return;
    } else {
        element.classList.toggle('hidden');
    }
}); // when on mobile, will toggle sub-nav to hidden if displayed when user clicks in header element

document.getElementById('main').addEventListener('click', function(){
    let element = document.getElementById('js-burger-pop');

    if (element.classList.contains('hidden')){
        return;
    } else {
        element.classList.toggle('hidden');
    }
}); // when on mobile, will toggle sub-nav to hidden if displayed when user clicks in main element


