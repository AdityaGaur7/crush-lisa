

/*let btn = document.getElementById("no");*/

let cnt=0;

let lft=0;

let tp=0;



var f1 = ()=>{
    
    
// mov=mov+5;
    
// cnt=cnt+5;
    
    
cnt=cnt+10;
    
if(cnt<25){
    lft=lft+5;

    
    
    // rgt=rgt+10;
    // btm=btm+10;
    
    
    
    document.getElementById("no").style.left=lft+'vw';

    // document.getElementById("no").style.right=rgt+'vw';
    
    // document.getElementById("no").style.bottom=btm+'vh';
   
    
    
    
}else if(cnt>=25 && cnt<=50){
    
    tp=tp+5;
    
    
    document.getElementById("no").style.top=tp+'vh';
    
}
else if(cnt>50 && cnt<75){
    
    lft=lft-5;
    
    document.getElementById("no").style.left=-lft+'vw';
}
else if(cnt>=75  && cnt<100){
    tp=tp-5;
    document.getElementById("no").style.top=-tp+'vh';
}
else if(cnt>100){
    cnt=0;
  
    
}
    
    
}




let f3=()=>{
    f2();
    setInterval(() => {
        f2();
    }, 14500);
}
let f2=()=>{
    setTimeout(() => {
        lisa1.src="img/crush2.gif";
    }, 0000);
    setTimeout(() => {
        lisa1.src="img/crush1.gif";
    }, 4000);
    
    setTimeout(() => {
        lisa1.src="img/crush3.gif";
    }, 7000);
    setTimeout(() => {
        lisa1.src="img/crush4.gif";
    }, 10000);
    // setTimeout(() => {
    //     lisa1.src="img/crush5.gif";
    // }, 15000);

    
    
    
    
}
// let t =0;

// let f2=()=>{

//     setInterval(() => {

//         t = t+1;
//     }, 1000);


//     if(t>=5 && t<10){

//         lisa1.src="img/crush1.gif";

//     }else if(t>=10 && t<20)
//     {

//         lisa1.src="img/crush4.gif";
//     }

// }








// function f2() {


//     let time = 0;

//     setInterval(() => {

//         time++;

//     }, 1000);


//     if (time > 3) {

//         lisa1.src = "img/crush1.gif";
//     }
// }















