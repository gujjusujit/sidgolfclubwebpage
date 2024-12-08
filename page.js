var crsr=document.querySelector("#cursor")
var crsrb=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-10+"px"
    crsr.style.top=dets.y-10+"px"
    crsrb.style.left=dets.x-200+"px"
    crsrb.style.top=dets.y-200+"px"
})


gsap.to("#nav",{
    background:"#000",
    duration:"0.5",
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroler:"#body",
        markers:true,
        start:"top -10px",
        end:"top -11px",
        scrub:1
    }
})
gsap.to("#main",{
    background:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroler:"#body",
        markers:true,
        scrub:2,
        start:"top -30%",
        end:"top -80%"
    }
})
