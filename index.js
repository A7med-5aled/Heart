let contentEL = document.querySelector('.content');
let bodyEl =  document.querySelector('body');
const phrases = ['مع تحياتي بالشفاء العاجل' , 'لمعده داوود اللفته' ,
'وراسه الي نطح بيها المروحه' , 'واحلي مسا علي فخاده '];
let i=0 , j=0;
const colorChar = ['0', '1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7'
                 ,'8' ,'9' ,'a' ,'b' ,'c', 'd' ,'e' ,'f'];
 function getRandomColor (){
   let color='#';
    for(let i = 0 ;i < 6;i++){
        color+= colorChar[Math.floor(Math.random()*colorChar.length)];
    }
    return color;
} ;

function show (){
    if(j === phrases[i].length){
        i += 1;
        j = 0;
        contentEL.style.color = getRandomColor();
    }
    if(i=== phrases.length){
        j = 0;
        i = 0;
    }
    contentEL.innerHTML = `<h1>  ${phrases[i].slice(0,j+1)} </h1>`
    j++;
    setTimeout(show,400)
    
}
show();


bodyEl.addEventListener('touchmove', function(e){
   
    let span = document.createElement('span');
    let top = e.touches[0].pageY;
    let left =e.touches[0].pageX;
    const random = Math.floor(Math.random()*100);
    span.style.width = random + 'px';
    span.style.height = random +'px';
    span.style.left = left +'px';
    span.style.top = top +'px';
    console.log( left , top);
    bodyEl.appendChild(span);
    setTimeout(()=> {
        span.remove();
    },3000)
})


bodyEl.addEventListener('mousemove' , (e)=> {
    const span = document.createElement('span');
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const random = Math.floor(Math.random()*100);
    span.style.width = random + 'px';
    span.style.height = random +'px';
    span.style.top = yPos +'px';
    span.style.left = xPos +'px';
    bodyEl.appendChild(span);
    setTimeout( ()=> {
        span.remove();
    },3000);
})

bodyEl.addEventListener('click', function(e){
   
    let span = document.createElement('span');
    let top = e.touches[0].pageY;
    let left =e.touches[0].pageX;
    const random = Math.floor(Math.random()*100);
    span.style.width = random + 'px';
    span.style.height = random +'px';
    span.style.left = left +'px';
    span.style.top = top +'px';


    console.log( left , top);

    bodyEl.appendChild(span);
    setTimeout(()=> {
        span.remove();
    },3000)
})





// const contentEL = document.querySelector('.content');
// const bodyEl = document.querySelector('body');
// const phrases = ['مع تحياتي بالشفاء العاجل', 'لمعده داوود اللفته', 'وراسه الي نطح بيها المروحه', 'واحلي مسا علي فخاده'];
// let i = 0, j = 0;

// const colorChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// function getRandomColor() {
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += colorChar[Math.floor(Math.random() * colorChar.length)];
//     }
//     return color;
// }

// function show() {
//     if (j === phrases[i].length) {
//         i += 1;
//         j = 0;
//         contentEL.style.color = getRandomColor();
//     }
//     if (i === phrases.length) {
//         i = 0;
//     }
//     contentEL.innerHTML = `<h1>${phrases[i].slice(0, j + 1)}</h1>`;
//     j++;
//     setTimeout(show, 400);
// }

// show();

// function createSpan(left, top) {
//     let span = document.createElement('span');
//     span.style.left = left + 'px';
//     span.style.top = top + 'px';
//     bodyEl.appendChild(span);
//     setTimeout(() => {
//         span.remove();
//     }, 3000);
// }

// bodyEl.addEventListener('touchmove', function (e) {
//     let top = e.touches[0].pageY;
//     let left = e.touches[0].pageX;
//     createSpan(left, top);
// });

// bodyEl.addEventListener('click', function (event) {
//     let top = event.pageY;
//     let left = event.pageX;
//     createSpan(left, top);
// });

// bodyEl.addEventListener('mousemove', function (event) {
//     let top = event.pageY;
//     let left = event.pageX;
//     createSpan(left, top);
// });

