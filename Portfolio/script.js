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
//owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplatTimeout: 3000,
    dots: false,
    nav: true,
    // navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        620:{
            items:1
        },
        750:{
            items:1
        },
        1080:{
            items:1
        }
    }

})