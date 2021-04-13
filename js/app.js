//navbar
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');


burger.onclick = ()=>{
    navbar.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-list');
    burger.querySelector('i').classList.toggle('fa-times');
};



const counterDiv = document.querySelector('#counter');
const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            let output1 = 0;
            let output2 = 0;
            let output3 = 0;
            let output4 = 0;

            const enrolledTimer = setInterval(() => {
                document.querySelector('#enrolled').textContent = `${output1}+`;
                if (output1 === 500) {
                    clearInterval(enrolledTimer);
                } else {
                    output1+=10;
                }
            }, 10);

            const recommendedTimer = setInterval(() => {
                document.querySelector('#recommended').textContent = `${output2}+`;
                if (output2 === 25) {
                    clearInterval(recommendedTimer);
                } else {
                    output2++;
                }
            }, 100);

            const partnersTimer = setInterval(() => {
                document.querySelector('#partners').textContent = `${output3}+`;
                if (output3 === 9) {
                    clearInterval(partnersTimer);
                } else {
                    output3++;
                }
            }, 100);

            const experienceTimer = setInterval(() => {
                document.querySelector('#experience').textContent = `${output4}+`;
                if (output4 === 10) {
                    clearInterval(experienceTimer);
                } else {
                    output4++;
                }
            }, 100);
        }
    });
}, slideObserverOptions);

slideObserver.observe(counterDiv);


//countdown 
let countdownDate = new Date("May 30, 2021 17:00:00").getTime();
const x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = parseInt(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = parseInt(Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = parseInt(Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = parseInt(Math.floor(distance % (1000 * 60)) / (1000));

    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#minute').innerHTML = minutes;
    document.querySelector('#second').innerHTML = seconds;

}, 1000);
