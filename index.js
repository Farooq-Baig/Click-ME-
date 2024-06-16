let am = 60;


let btn = document.querySelector(".btn");
let btnE1 = document.querySelector(".btn").getBoundingClientRect();
let Xcenter = (btnE1.left + btnE1.right) / 2;
let Ycenter = (btnE1.top + btnE1.bottom) / 2;


window.addEventListener('resize',function(event){
    btn = document.querySelector(".btn");
    btnE1 = document.querySelector(".btn").getBoundingClientRect();
    Xcenter = (btnE1.left + btnE1.right) / 2;
    Ycenter = (btnE1.top + btnE1.bottom) / 2;
}, true);   

btn.addEventListener('mouseup' , (e) =>{
    let xx = Xcenter;
    let yy = Ycenter;

    for(let i = 0; i < am; i++ ){
        createCircles(xx , yy , 30);
    } 
});

btn.addEventListener('mousedown' ,() =>{
    let particle = document.querySelectorAll('particle');
    if(particle.length > 0) {
        particle.forEach((part) =>{
         part.remove();
        })
    }

})

function createCircles(x,y,tuSam){
    let particle = document.createElement('particle');
    document.body.appendChild(particle);


    let size = Math.floor(Math.random() * 15);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;


    let destinationX = x + (Math.random() - 0.5 ) * tuSam *15;
    let destinationY = y + (Math.random() - 0.5 ) * tuSam *15;

    let rotate = (Math.random() + 1) *tuSam *10;

    let animation = particle.animate([
        {
            transform:`translate3d(${x - tuSam}px, ${y - tuSam}px ,0)`,
            opacity:1
        },
        {
            transform: `translate3d(${destinationX - size}px, ${destinationY - size}px,0) translateX(${tuSam}px)`,
            opacity : 1
        },
        {
            transform: `translate3d(${destinationX}px, ${destinationY}px,0) rotateZ(${rotate}deg) translateX(${tuSam}px)`,
            opacity:0
        }

],
    {
           duration: 10 + Math.random() * 2000,
           easing: 'ease-out',
           delay: Math.random() * 200
    }
);

   animation.onfinish = () => {
    particle.remove();
   }
}