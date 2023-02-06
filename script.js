let counter= 0;
let slide= document.querySelectorAll('.slide');
let slides= Array.from(slide);

slides.forEach((slide, index)=>{
    slide.style.left= `${index*100}%`;
});


let perv_button= document.getElementById('prev_button');
let next_button= document.getElementById('next_button');


next_button.addEventListener('click',()=>{
    counter += 1;
    if (counter <=3){
        slide_image();
    }else{
        counter=0;
        slide_image();
    }
});

perv_button.addEventListener('click', ()=>{
    counter -= 1;
    if (counter >=0){
        slide_image();
    }else{
        counter=3;
        slide_image();
    }
});

let slide_image=()=>{
    slides.forEach((slide)=>{
        slide.style.transform =`translateX(-${counter*100}%)`;
    })
}