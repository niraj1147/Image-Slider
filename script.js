const slider = document.querySelectorAll(".slider");
const main = document.getElementById("main");
var num = 1;

main.innerHTML = `
 <img src="https://picsum.photos/id/${num}/1000/500" class="slider" alt="">`;

const goPrev = () => {
    if(num === 0){
        return;
    }
    num--;
    // main.innerHTML = `<p> Loading </p>`;
    main.innerHTML = `
 <img src="https://picsum.photos/id/${num}/1000/500" class="slider" alt="">`;
}
const goNext = () => {
    if(num === 704){
        return;
    }
    // main.innerHTML = `<p> Loading </p>`;

    num++;
    main.innerHTML = `
<img src="https://picsum.photos/id/${num}/1000/500" class="slider" alt="">`;
    
}
