const cardsTech = document.querySelectorAll('.technologies');
const menu = document.querySelector('#menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener("click", () => {
    menu.classList.remove("ssm:max-lg:invisible");
    menu.classList.remove("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:invisible");
});

close.addEventListener("click", () => {
    menu.classList.add("ssm:max-lg:opacity-0");
    menu.classList.add("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:opacity-0");
});

cardsTech.forEach(card => {
    card.addEventListener('mousemove', (evt) => {
        const {layerX, layerY} = evt;

        const height = card.clientHeight;
        const width = card.clientWidth;

        const yRotation = (
            (layerX - width / 2) / width) * 10;
        
        const xRotation = (
            (layerY - height / 2) / height) * 10;

        const string = `
            perspective(500px)
            scale(1.03)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            `
        
        card.style.transform = string;
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = `
            perspective(500px)
            scale(1)
            rotateX(0)
            rotateY(0)`;
    });
});