
function init(){
    var canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");
    gl.clearColor(0,0,0,1);
    cone = new Cone(gl, 100);
    render();
}

function render(){
    gl.clear(gl.COLOR_BUFFER_BIT);
    cone.render();
}
window.onload = init;
