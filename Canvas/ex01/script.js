let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let ctxd = canvas.getContext('2d');
let ctxt = canvas.getContext('2d');
let ctxq = canvas.getContext('2d');
let lum = canvas.getContext("2d");
let lumd = canvas.getContext("2d");
let lumt = canvas.getContext("2d");
let cir = canvas.getContext("2d");
let cird = canvas.getContext("2d");
let cirt = canvas.getContext("2d");
let txt = canvas.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 15;
ctx.fillStyle = 'red';
ctx.fillRect(5,5,65,65);
ctx.closePath();

ctxd.beginPath();
ctxd.lineWidth = 15;
ctxd.fillStyle = 'rgb(50, 0, 160)';
ctxd.fillRect(530,5,65,65);
ctxd.closePath();

ctxt.beginPath();
ctxt.lineWidth = 15;
ctxt.fillStyle = 'yellow';
ctxt.fillRect(5,530,65,65);
ctxt.closePath();

ctxq.beginPath();
ctxq.lineWidth = 15;
ctxq.fillStyle = 'darkgreen';
ctxq.fillRect(530,530,65,65);
ctxq.closePath();

// linhas
lum.beginPath();
lum.strokeStyle = 'rgb(220, 42, 42)';
lum.lineWidth = 2;
lum.moveTo(6, 6);
lum.lineTo(594, 594);
lum.stroke();
lum.closePath();

lumd.beginPath();
lumd.strokeStyle = 'rgb(50, 0, 160)';
lumd.lineWidth = 2;
lumd.moveTo(594, 6);
lumd.lineTo(6, 594);
lumd.stroke();
lumd.closePath();

lumt.beginPath();
lumt.strokeStyle = 'limegreen';
lumt.lineWidth = 2;
lumt.moveTo(0, 297);
lumt.lineTo(600, 297);
lumt.stroke();
lumt.closePath();

// circulos
cir.beginPath();
cir.lineWidth = 2;
cir.strokeStyle = 'limegreen';
cir.arc(300,299,100,0*Math.PI,1*Math.PI);
cir.stroke();
cir.closePath();

cird.beginPath();
cird.lineWidth = 2;
cird.strokeStyle = 'limegreen';
cird.fillStyle = 'yellow';
cird.arc(115,200,28.5,0*Math.PI,2*Math.PI);
cird.stroke();
cird.fill();
cird.closePath();

cirt.beginPath();
cirt.lineWidth = 2;
cirt.strokeStyle = 'limegreen';
cirt.fillStyle = 'yellow';
cirt.arc(485,200,28.5,0*Math.PI,2*Math.PI);
cirt.stroke();
cirt.fill();
cirt.closePath();

txt.beginPath();
txt.fillStyle = 'black';
txt.strokeStyle = 'black';
txt.font = "40px Arial";
txt.fillText("Desenvolvimento Web", 103, 100);
txt.fillStyle = 'black';
txt.fill();
txt.closePath();