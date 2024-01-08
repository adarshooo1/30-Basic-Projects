function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

smoothScroll();

let cursor = document.querySelector(".cursor");
let movingCursor = document.querySelector("#container");

movingCursor.addEventListener("mousemove", function (val) {
  cursor.style.left = val.x + 10 + "px";
  cursor.style.top = val.y + 10 + "px";
});

// gsap

let animationTrigger = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#container",
    markers: false,
    start: "top 30%",
    end: "top 0%",
    scrub: 3,
  },
});

animationTrigger.to(
  ".page1 h1",
  {
    x: -70,
  },
  "animate"
);

animationTrigger.to(
  ".page1 h2",
  {
    x: 50,
  },
  "animate"
);

animationTrigger.to(
  ".page1 video",
  {
    width: "90%",
  },
  "animate"
);

let changeColorTrigger = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "#container",
    start: "top 90%",
    end: "top -250%",
    markers: true,
    toggleActions: "play reverse play reverse", // Add this line
  },
});

changeColorTrigger.to("#container", {
  backgroundColor: "white",
});

let projectContainers = document.querySelectorAll(".project_1");

projectContainers.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    let dataImage = this.querySelector(".project_text_container").getAttribute(
      "data-image"
    );
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    cursor.style.borderRadius = "0%";
    cursor.style.backgroundImage = `url(${dataImage})`;
    cursor.style.contain = "cover";
  });
});

projectContainers.forEach(function (element) {
  element.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "transparent"; // Use 'this' to refer to the current element
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = "none";
  });
});
