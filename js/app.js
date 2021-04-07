//navbar
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');


burger.onclick = ()=>{
    navbar.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-list');
    burger.querySelector('i').classList.toggle('fa-times');
};

let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);