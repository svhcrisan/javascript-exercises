/*
window.onload=function() {
    alert("The page is loaded");
    var link = document.getElementById("google-link");
    link.onclick = function() {
        console.log("Clicked on link3rfbgfv ");
    }
}

window.onload=function() {
    alert("Suprascriere.");
}

var link = document.getElementById("google-link");
link.addEventListener("mouseenter", function(event) {
    console.log("Hover on link: ", event.target.text)
});

link.addEventListener("mouseenter",
    function() {
        console.log("Hover once");
    },
    {once: true}
);

var link = document.getElementById("google-link");



link.addEventListener("mouseenter", eventHandler, false);

function eventHandler() {
    console.log("Event handler, hellooo!");
}


link.removeEventListener("mouseenter", eventHandler);


console.log(typeof null);


var link = document.getElementById("google-link");

function eventHandler(event) {
    console.log(event.type + "on:", event.target.nodeName);
}

window.addEventListener("click", function(){
    this.document.documentElement.requestFullscreen();
});

document.addEventListener("fullscreenchange", eventHandler);
link.addEventListener("mouseout", eventHandler);
*/
var link = document.getElementById("button");
var event = new Event("build");

window.addEventListener("build", function(event) {
    alert("Al 3-lea click.");
}, false);
var count = 0;
link.addEventListener("click", function(eee) {
    count++;
    if(count === 3) {
        window.dispatchEvent(event);
        count = 0;
    }


}, false);






/*
var container = document.getElementById("container");
var page = document.getElementById("page");

function eventHandler(event) {
    console.log(event.type + "on:" + event.currentTarget.id);

}

page.addEventListener("click", eventHandler, true);
container.addEventListener("click", eventHandler);

var link = document.getElementById();

*/