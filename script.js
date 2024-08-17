let screenWidth = document.body.offsetWidth;
let screenHeight = document.body.offsetHeight;

let noBtn = document.querySelector('.noBtn');
let yesBtn = document.querySelector('.yesBtn');
let text = document.querySelector('h1');
let picture = document.querySelector('#avatar');
function move(){
    let flag = false;

    while(!flag){
        let randX = Math.random() * screenWidth;
        let randY = Math.random() * screenHeight;

        noBtn.style.left = randX + 'px';
        noBtn.style.top = randY + 'px';

        flag  = true;
    }
}

noBtn.addEventListener('mouseenter', ()=>{
    move();
});

noBtn.addEventListener('click', ()=>{
    move();
});

yesBtn.addEventListener('click', ()=>{

    text.textContent = 'yayyyy ';
    noBtn.style.display = 'none';
    avatar.src = './happy.webp';


});
