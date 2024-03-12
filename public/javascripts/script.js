var moon = document.querySelector(".fa-moon");
// var nav_links = document.querySelectorAll(".nav-link");
var navbar_brand = document.querySelector(".navbar-brand");

moon.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
        navbar_brand.style.color = "white !important"; // Add !important
    } 
    else if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        moon.style.backgroundColor = "black";
       
        navbar_brand.style.color = "white !important"; // Add !important
    }
});


gsap.from(".mid-left",{
    x:"-100%",
    scale:0,
    duration:0.1,
    scrollTrigger:{
        trigger:".mid-left",
        scroller:"body",
        start:"top 300%",
        scrub:0.8
    }
    
    
})
gsap.from(".traverse",{
    x:"100%",
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".mid-right",
        scroller:"body",
        start:"top 300%",
        scrub:0.8


    }
    
})
gsap.from(".traverse1",{
    x:"100%",
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".traverse1",
        scroller:"body",
        start:"top 300%",
        scrub:0.8


    }
    
})

gsap.from(".text",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".text",
        scroller:"body",
        start:"top 70%",
        scrub:0.8
    }
    
    
})
gsap.from(".text1",{
    duration:0.1,
    opacity:0.1,
    scrollTrigger:{
        trigger:".text",
        scroller:"body",
        start:"top 10%",
        scrub:0.8
    }
    
    
})

gsap.to(".image", {
    scaleX: -1, // Flips the image horizontally
    boxShadow: "5px 5px  20px rgba(270, 270, 0, 0.5)", // Add shadow effect
    duration: 0.7, // Adjust as needed
    scrollTrigger: {
        trigger: ".image",
        start: "top 100%", // Adjust the scroll start point as needed
        end: "bottom 60%", // Adjust the scroll end point as needed
        scrub: 2 // Smooth scrolling effect
    }


})
gsap.to(".round", {
    x: "+=10", // Move 20 pixels to the right
    duration: 0.5, // Adjust as needed
    yoyo: true, // Reverses the animation to create a ping-pong effect
    repeat: -1 // Repeats the animation indefinitely
});
gsap.to(".middle-right", {
 x:"-20%",
 duration: 1,
 opacity : 0.8,
 scrollTrigger: {
    trigger: ".middle-right",
    start: "top 100%", // Adjust the scroll start point as needed
    end: "bottom 60%", // Adjust the scroll end point as needed
    scrub: 2 // Smooth scrolling effect
}


});
gsap.to(".middle-right1", {
    x: "-20%", // Move the element 20% to the left
    opacity: 0.8, // Set opacity to 0.8
    duration: 1, // Animation duration
    scrollTrigger: {
        trigger: ".middle-right1",
        start: "top 100%", // Adjust the scroll start point as needed
        end: "bottom 40%", // Adjust the scroll end point as needed
        scrub: 2 // Smooth scrolling effect
    }
});


gsap.to(".image1", {
    scaleX: -1, // Flips the image horizontally
    boxShadow: "5px 5px  20px rgba(255, 165, 0, 0.5)", // Add shadow effect
    duration: 0.7, // Adjust as needed
    scrollTrigger: {
        trigger: ".image1",
        start: "top 100%", // Adjust the scroll start point as needed
        end: "bottom 60%", // Adjust the scroll end point as needed
        scrub: 2 // Smooth scrolling effect
    }


})



// gsap.from(".mid-left1",{
//     x:"-100%",
//     scale:0,
//     duration:0.1,
//     scrollTrigger:{
//         trigger:".mid-left1",
//         scroller:"body",
//         start:"top 300%",
//         scrub:0.8
//     }
    
    
// })

gsap.from(".mid-left2",{
    x:"100%",
    scale:0,
    duration:0.1,
    scrollTrigger:{
        trigger:".mid-left2",
        scroller:"body",
        start:"top 300%",
        scrub:0.8
    }
    
    
})

gsap.from(".traversed",{
    x:"-100%",
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".traversed",
        scroller:"body",
        start:"top 300%",
        scrub:0.8


    }
    
})
gsap.from(".traverse2",{
    x:"-100%",
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".traverse2",
        scroller:"body",
        start:"top 300%",
        scrub:0.8


    }
    
})