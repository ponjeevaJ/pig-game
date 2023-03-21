'use strict';
// selecting the value from the html of score
 const sco1=document.querySelector('.up1val');
 const sco2=document.querySelector('.up2val');
 const die=document.querySelector('.center');
 const button1=document.querySelector('.but1 ');
 const button2=document.querySelector('.but2');
 const button3=document.querySelector('.but3');
 const values=document.querySelector('.value');
 const store1=document.querySelector('.in1val');
 const store2=document.querySelector('.in2val');
 const result=document.querySelector('.col');
 const score=document.querySelector('.number');
const button4=document.querySelector('.fix');
let g=0;
let c=0;
let a=0;
let d=0;
let e=0;
let f=0;
let b=0;
let rl=0;
// button4.addEventListener('click',function(){
// g++;
//  if(g>=1){

 let current1=0;
 let current2=1;
//  const val=document.querySelector('.center');
 //fix the element as zero in starting
 let ans= Math.trunc(Math.random()*6);

 sco1.textContent=a;
 sco2.textContent=a;
 die.classList.add('center');
 // rolling function
button2.addEventListener('click',function(){
    if(rl===1){
const a=Math.trunc(Math.random()*6+1);
die.classList.remove('center1');
values.textContent=a;
if(a!==1){
b+=a;
if(c==0){
    store1.textContent=b;
}
else if(c==1){
    store2.textContent=b;
}
}
else{
if(a===1&&c===0){
    current1=1;
    current2=0;
    c++;
   b=0;
   store1.textContent=0;
}
else if(a===1&&c===1){
    current1=0;
    current2=1;
    c--;
    b=0;
    store2.textContent=0;
}
}
    }
    else{
        alert("set the time")
    }
})
// holding and add change the player
button3.addEventListener('click',function(){
        if(c===0){
            store1.textContent=b;
            current1=1;
            current2=0;
            c++;
            if(b>d){
            sco1.textContent=b;
            d=b;
            }
           b=0;
           store2.textContent=0;
        }
      else if(c===1){
        store2.textContent=b;
            current1=0;
            current2=1;
            c--;
            if(b>e){
          sco2.textContent=b;
            e=b; 
            }
           b=0;
           store1.textContent=0;
     }
     if(e>=75){
        document.querySelector('.wing').textContent="player 2 win";  
    }
    else if(d>=75){
        document.querySelector('.wing').textContent="player 1 win";
    }
    die.classList.add('center1');
    })

    //settimeout//
    let z=0;
    let timer;
    const timeText=document.querySelector('.time_diaplay');
const startGameTime=function(times){
    const tick=function(){
        const min=String(Math.trunc(time/60)).padStart(2,0);
        const sec=String(Math.trunc(time%60)).padStart(2,0);
        timeText.textContent=`${min}:${sec}`;
        if(time===60)
        {
            timeText.style.color="red";
        }
        if(time===0)
        {
            if(e>d){
                document.querySelector('.wing').textContent="player 2 win";  
            }
            else if(d>e){
                document.querySelector('.wing').textContent="player 1 win";
            }
            else if(d===e){
                document.querySelector('.wing').textContent="Game tie....";
            }
            die.classList.add('center1');
            return;
        }
        else
        {
            time--;
        }
    };
    let time=times;
    tick();
     timer=setInterval(tick,1000);
    return timer;
};

// startGameTime();
    //settimeout//

    // new game function
// }

// else{
//    console.log("enter the value")
// }
// });

 button1.addEventListener('click',function(){
        sco1.textContent= 0;
        sco2.textContent= 0;
        store1.textContent= 0;
        store2.textContent=0 ;
        die.classList.add('center1');
        e=0;
        d=0;
        b=0;
        g=0;
        current1=0;
        current2=1;
        c=0;
        f=0;
        z=1;
        rl=0;
        clearInterval(timer);
        document.querySelector('.wing').textContent="";
        timeText.textContent=`00:00`;
    });
   
    const setTime=document.querySelector('.start');
    const setTimeGet=document.querySelector('.num');
    setTime.addEventListener('click',function(e){
        e.preventDefault();
        clearInterval(timer);
        let time=setTimeGet.value;
        if(time>0){
         time=time*60;
        startGameTime(time);
        sco1.textContent= 0;
        sco2.textContent= 0;
        store1.textContent= 0;
        store2.textContent=0 ;
        die.classList.add('center1');
        rl=1;
        e=0;
        d=0;
        b=0;
        g=0;
        current1=0;
        current2=1;
        c=0;
        f=0;
        }
        else
        {
            alert("set the time");
        }
        setTimeGet.value="";
    });

