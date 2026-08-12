document.addEventListener("DOMContentLoaded", (event) => {
 gsap.registerPlugin(ScrollTrigger)

  gsap.from(".loader-count h2", {
    y: 100,
    opacity: 0,
    duration: 1.7,
    onComplete: () => {
      gsap.to(".loader-count h2", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        onComplete: tl.play(),
      });
    },
  });

  const tl = gsap.timeline({
    paused: true,
  });

  //   gsap.set(["h1","p"],{
  //     yPercent:110,
  // })

  tl.to(".loader", {
    yPercent: 100,
    duration: 2,
    ease: "expo.out",
  })
    .from(
      ".hero-img",
      {
        scale: 1.5,
        duration: 2,
        ease: "expo.out",
      },
      "-=1.1",
    )
    .from(
      ".hero-img img",
      {
        x: 50,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
      },
      "-=2.1",
    ).from(".right",{
        opacity:0,
        y:30,
        duration:2,
        ease:"expo.out",
    },"-=1.1").from("#float-heading",{
        opacity:0,
        y:30,
        duration:2,
        ease:"expo.out",
    },"-=1.1")

    .from(
      "nav",
      {
        opacity: 0,
        x: 20,
        duration: 1,
      },
      "-=1.1",
    )
    .from(".left h2", {
      y: 20,
      opacity: 0,
      duration: 1,
    },"-=2.1")
    .from(".left p", {
      y: 20,
      opacity: 0,
      duration: 1,
    },"-=2.1")
    .from(".left .btn", {
      y: 20,
      opacity: 0,
      duration: 1,
    },"-=1.1")



 gsap.from(".about-img img",{
   x:-100,
   opacity: 0,
   duration:1.2,
   delay:1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:".about-img img",
        markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:3,
    }
 })
 gsap.from("#about .about-para",{
   x:100,
   opacity: 0,
   duration:1.2,
   delay:1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:"#about .about-para",
        markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:3,
    }
 })


  gsap.from(".skill-box",{
   x:100,
   opacity: 0,
   duration:1.2,
//    delay:1,
   	stagger:1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:".skill-box",
        markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:3,
    }
 })
 
 gsap.from("#skills .skill-heading h3",{
   x:-100,
   opacity: 0,
   duration:1.2,
   delay:1,
   	stagger:1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:"#skills .skill-heading h3",
        markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:3,
    }
 })



 gsap.from(".project-card",{
   x:-100,
   opacity: 0,
   duration:1.2,
//    delay:1,
   	stagger:1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:".project-card",
        markers:true,
        start:"top top",
        // end:"top 10%",
        // scrub:3,
    }
 })
});
