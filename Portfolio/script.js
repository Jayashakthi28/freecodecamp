document.querySelector("#ham-burg").addEventListener("click",function (){
    let b=document.querySelector("#navbar");
    if(b.className=='navbar'){
        b.className='navbar collapse';
        document.querySelector('#ham-burg').style.transform='rotate(180deg)';
        document.getElementById('ham-burg').style.animationName='rotater1';
    }
    else{
        b.className='navbar';
        document.querySelector('#ham-burg').style.transform='rotate(0deg)';
        document.getElementById('ham-burg').style.animationName='rotater';
    }
})