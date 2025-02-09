function makeBubble(){
    var clutter = "";

for (var i = 1; i<=182; i++){
    var run = Math.floor(Math.random()*50)
    clutter += `<div class="bubble">${run}</div>`  
}
document.querySelector('#pbtm').innerHTML=clutter;
}
makeBubble()









