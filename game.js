let liv=10;
let c=Math.round(Math.random()*100);

function find(){
    let a=Number(document.getElementById("number").value);
    console.log(a);
    let z=document.getElementById("live");
    let b=document.getElementById("message");
    liv--;
    z.innerHTML=liv;
    if(a==c && liv>0){
         location.href="win.html";
    }
    else if(liv<1 && a!=c){
         location.href="lose.html";
    }
    else if(a>c){
        b.innerHTML="Oops value is high!";
    }
    else if(a<c){
        b.innerHTML="Oops value is low!";
    }
}