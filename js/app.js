const btn = document.querySelector('.mobile-menu');
const modal = document.querySelector('.menu-modal');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', () =>{
    modal.style.display = 'block';
    container.classList.add('after');
});

closeBtn.addEventListener("click", () =>{
    modal.style.display = 'none';
    modal.style.transition = "visibility 0s 2s, opacity 2s linear";
    container.classList.remove('after');
})