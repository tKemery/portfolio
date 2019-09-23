document.getElementById('js-burger').addEventListener('click', function(){
    let element = document.getElementById('js-burger-pop');
    console.log(element);
    element.classList.toggle('hidden');
});

document.getElementById('js-burger-pop').addEventListener('mouseout', function(){
    this.classList.toggle('hidden');
});