let resultButtons = document.getElementById('resultButtons');
let photoButtons = document.getElementById('photoButtons');
let resultContent = document.querySelector('.result-content');
let photoContent = document.querySelector('.photo-content');

resultButtons.addEventListener("click", function(){
    resultButtons.style.borderBottom = "2px solid #fff";
    photoButtons.style.borderBottom = "none";
    resultContent.classList.add("block");
    photoContent.classList.remove("block");
});

photoButtons.addEventListener("click", function(){
    photoButtons.style.borderBottom = "2px solid #fff";
    resultButtons.style.borderBottom = "none";
    photoContent.classList.add("block");
    resultContent.classList.remove("block");
});

