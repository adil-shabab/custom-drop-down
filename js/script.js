function show(language) {
    document.querySelector('.textbox').value = language
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}