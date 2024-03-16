// var btn = document.querySelector("")
// var fcs = document.querySelector("#page2 #form #fcs")
// var p = document.querySelector("#page1 #center p")

// btn.addEventListener("click",function(){
//     p.textcontent = "Hello";
// })

// var tl = gsap.timeline()

// tl.from("#nav",{
//     y:-40,
//     opacity:0,
//     delay:0.2,
//     duration:0.6,
//     stagger:0.2,
// })

// tl.from("#center p", {
//     x:-150,
//     // scale:0 ,
//     // fontsize :0,
//     opacity:0,
//     delay:0.1,
//     duration:0.6,
//     stagger:0.1,
//     scrub:2
// })

// tl.from("#search button", {
//     x:-150,
//     // scale:0 ,
//     // fontsize :0,
//     opacity:0,
//     delay:-0.5,
//     duration:0.6,
//     stagger:0,
//     scrub:2
// })

// tl.from("#page2 form", {
//     y:100,
//     // scale:0 ,
//     // fontsize :0,
//     opacity:0,
//     delay:1,
//     duration:0.6,
//     stagger:0,
//     scrollTrigger:{
//         trigger:"form",
//         scroller:"page2",
//         scrub:3,
//         marker:true,
//         start:"top 10%",
//         end: "top 100%",
//         // pin:true
//     }
// })

document.getElementById("#btn").addEventListener("click",function(){
    document.getElementById("#fcs").focus();
})