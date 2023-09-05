const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function mouseMouse (){
    window.addEventListener("mousemove", function(dets){
        
        document.querySelector("#mouse-cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

mouseMouse();




function firstPageAnima(){
    var tl = gsap.timeline();
    tl.from(".nav", {
        y: "-10",
        opacity : 0,
        ease: Expo.easeInOut,
        duration: 2,
    })
}

firstPageAnima();





document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var difrotate = 0;

    elem.addEventListener("mousemove", function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        

        gsap.to(elem.querySelector("img"),{
            opacity: .9,
            ease: Power3,
            top: diff,
            left: dets.clientX, 
            rotate: gsap.utils.clamp(-20, 20, diffrotate),
        })
    })
})



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var difrotate = 0;

    elem.addEventListener("mouseleave", function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        

        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            
        })
    })
})