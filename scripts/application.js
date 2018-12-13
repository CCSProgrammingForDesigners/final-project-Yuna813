const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let cw = canvas.width = 700,
    cx = cw / 2;
let ch = canvas.height = 700,
    cy = ch / 2;
c.translate(-200, 0);
c.fillStyle = "white";

let mouse = {}


let rects = [{
        c: '#CEF19E',
        data: [500, 100, 100, 100]
    },
    {
        c: '#A7DDA7',
        data: [250, 100, 100, 100]
    },
    {
        c: '#78BE97',
        data: [500, 500, 100, 100]
    },
    {
        c: '#398689',
        data: [700, 600, 100, 100]
    },
    {
        c: '#0B476D',
        data: [800, 100, 100, 100]
    }
]



rects.forEach(r => {
    c.fillRect(...r.data);
})

canvas.addEventListener("mousemove", (evt) => {
    // clear the canvas
    c.clearRect(200, 0, cw, ch);
    mouse = oMousePos(canvas, evt);
    //for each rect in the rects array
    rects.forEach((r, i) => {
        c.beginPath();
        // draw the rect
        c.rect(...r.data);
        // if thr mouse is inside the rect
        if (c.isPointInPath(mouse.x, mouse.y)) {
            // fill the rect with the color in the rects array 
            c.fillStyle = r.c; //color

            // fill the rect
            c.beginPath();
            c.fillRect(...r.data);
        } else {

            // if the mouse is not in the rects array let it be white
            c.fillStyle = "white";
            c.fillRect(...r.data);
        }
    })
})

// a function to detect the mouse position on the canvas
function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}

// show video
const image = document.getElementById("image")
console.log(image)
var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
colors.on('track', function (event) {
    if (event.data.length === 0) {
        // No colors were detected in this frame.
    } else {
        event.data.forEach(function (rect) {
            // rect.x, rect.y, rect.height, rect.width, rect.color
            console.log(rect)

        });
    }
});
tracking.track('#myVideo', colors, {
    camera: true
});