var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax({});

const controller = new ScrollMagic.Controller();

tl.from("blockquote", .5, {x:200, opacity: 0})
tl.from("span", 1, {width:0}, "=-.1");
tl.from('#anna', 1, {x: -200, opacity:0}, "=-1");
tl.from('#andrej', 1, {x:200, opacity:0}, "=-1");

tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", 0.5, {
    scale:1.03,
    borderColor: 'purple',
    borderWidth:12,
});


const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".sticky")
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote",
})
    .setTween(tl2)
        .addTo(controller);


function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
}