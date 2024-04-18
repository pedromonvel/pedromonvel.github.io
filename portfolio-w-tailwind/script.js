const cardsTech = document.querySelectorAll('.technologies');
const menu = document.querySelector('#menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener("click", () => {
    menu.classList.remove("ssm:max-lg:invisible");
    menu.classList.remove("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:invisible");
})

close.addEventListener("click", () => {
    menu.classList.add("ssm:max-lg:opacity-0");
    menu.classList.add("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:opacity-0");
})

function activarEfecto3D() {
    const cardsTech = document.querySelectorAll('.technologies');

    cardsTech.forEach(cardTech => {
        const height = cardTech.clientHeight;
        const width = cardTech.clientWidth;

        function mouseMoveHandler(evt) {
            const {layerX, layerY} = evt

            const yRotation = (
                (layerX - width / 2) / width
            ) * 5

            const xRotation = (
                (layerY - height / 2) / height
            ) * 5

            const string = `
            perspective(500px)
            scale(1.008)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)`

            cardTech.style.transform = string
        }

        function mouseOutHandler() {
            cardTech.style.transform = `
            perspective(500px)
            scale(1)
            rotateX(0)
            rotateY(0)`
        }

        cardTech.addEventListener('mousemove', mouseMoveHandler);
        cardTech.addEventListener('mouseout', mouseOutHandler);
    });
}

function desactivarEfecto3D() {
    const cardsTech = document.querySelectorAll('.technologies');
    cardsTech.forEach(cardTech => {
        cardTech.style.transform = 'none';
        cardTech.removeEventListener('mousemove', mouseMoveHandler);
        cardTech.removeEventListener('mouseout', mouseOutHandler);
    });
}

window.addEventListener('load', () => {
    if (window.innerWidth > 1024) {
        activarEfecto3D();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        activarEfecto3D();
    } else {
        desactivarEfecto3D();
    }
});
