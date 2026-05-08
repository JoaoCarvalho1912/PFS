let canvas = document.getElementById('canvas');
let qp = canvas.getContext("2d");
let qv = canvas.getContext("2d");
let qaz = canvas.getContext("2d");
let qam = canvas.getContext("2d");
let qamd = canvas.getContext("2d");
let qpr = canvas.getContext("2d");
let qprd = canvas.getContext("2d");
let qps = canvas.getContext("2d");
let qpsd = canvas.getContext("2d");
let retav = canvas.getContext("2d");
let retaz = canvas.getContext("2d");
let retavd = canvas.getContext("2d");
let retac = canvas.getContext("2d");
let qv2 = canvas.getContext("2d");
let circvdp = canvas.getContext("2d");
let circvdd = canvas.getContext("2d");
let circvde = canvas.getContext("2d");
let circcian = canvas.getContext("2d");
let circmaiorvd = canvas.getContext("2d"); 
let circamard = canvas.getContext("2d"); 
let circamare = canvas.getContext("2d"); 
let semicircvdd = canvas.getContext("2d");
let semicircvde = canvas.getContext("2d");

qp.beginPath();
qp.lineWidth = 2;
qp.strokeStyle = 'black';
qp.strokeRect(18,17, 365, 365);
qp.stroke();
qp.closePath();

qv.beginPath();
qv.lineWidth = 2;
qv.fillStyle = 'red';
qv.fillRect(312,18, 70, 70);
qv.fill();
qv.closePath();

qv2.beginPath();
qv2.lineWidth = 2;
qv2.fillStyle = 'red';
qv2.fillRect(155,200, 50, 50);
qv2.fill();
qv2.closePath();

qaz.beginPath();
qaz.lineWidth = 2;
qaz.fillStyle = 'blue';
qaz.fillRect(19,18, 70, 70);
qaz.fill();
qaz.closePath();

qam.beginPath();
qam.lineWidth = 2;
qam.fillStyle = 'yellow';
qam.fillRect(19,310, 35, 70);
qam.fill();
qam.closePath();

qamd.beginPath();
qamd.lineWidth = 2;
qamd.fillStyle = 'yellow';
qamd.fillRect(54,345, 35, 35);
qamd.fill();
qamd.closePath();

qpr.beginPath();
qpr.lineWidth = 2;
qpr.fillStyle = 'black';
qpr.fillRect(347,311, 35, 70);
qpr.fill();
qpr.closePath();

qprd.beginPath();
qprd.lineWidth = 2;
qprd.fillStyle = 'black';
qprd.fillRect(312,347, 35, 35);
qprd.fill();
qprd.closePath();

qps.beginPath();
qps.lineWidth = 2;
qps.fillStyle = 'cyan';
qps.fillRect(19,165, 35, 70);
qps.fill();
qps.closePath();

qpsd.beginPath();
qpsd.lineWidth = 2;
qpsd.fillStyle = 'cyan';
qpsd.fillRect(347,185, 35, 35);
qpsd.fill();
qpsd.closePath();

retav.beginPath();
retav.lineWidth = 2;
retav.moveTo(345,50);
retav.lineTo(201, 200);
retav.strokeStyle = "red";
retav.stroke();
retav.closePath();

retaz.beginPath();
retaz.lineWidth = 2;
retaz.moveTo(50,50);
retaz.lineTo(202, 200);
retaz.strokeStyle = "blue";
retaz.stroke();
retaz.closePath();

retavd.beginPath();
retavd.lineWidth = 2;
retavd.moveTo(19,201);
retavd.lineTo(382, 201);
retavd.strokeStyle = "limegreen";
retavd.stroke();
retavd.closePath(); 

retac.beginPath();
retac.lineWidth = 2;
retac.moveTo(205,201);
retac.lineTo(205,382);
retac.strokeStyle = "grey";
retac.stroke();
retac.closePath(); 

circvdp.beginPath();
circvdp.lineWidth = 2;
circvdp.arc(200, 200, 71, 1* Math.PI, 0 );
circvdp.strokeStyle = "limegreen";
circvdp.stroke();
circvdp.closePath();

circvdd.beginPath();
circvdd.lineWidth = 2;
circvdd.arc(222, 200, 78, -0.95/3* Math.PI, 0 );
circvdd.strokeStyle = "limegreen";
circvdd.stroke();
circvdd.closePath();

circvde.beginPath();
circvde.lineWidth = 2;
circvde.arc(176, 200, 78, 1* Math.PI, -1.37/2*Math.PI );
circvde.strokeStyle = "limegreen";
circvde.stroke();
circvde.closePath();

circcian.beginPath();
circcian.lineWidth = 3;
circcian.arc(200, 160, 17, 2* Math.PI, 0*Math.PI );
circcian.strokeStyle = "blue";
circcian.fillStyle = "cyan";
circcian.stroke();
circcian.fill();
circcian.closePath();

circmaiorvd.beginPath();
circmaiorvd.lineWidth = 3;
circmaiorvd.arc(200, 381, 50, 1* Math.PI, 0*Math.PI );
circmaiorvd.strokeStyle = "limegreen";
circmaiorvd.fillStyle = "cyan";
circmaiorvd.stroke();
circmaiorvd.fill();
circmaiorvd.closePath();

circamard.beginPath();
circamard.lineWidth = 3;
circamard.arc(285, 285, 17, 2* Math.PI, 0*Math.PI );
circamard.strokeStyle = "limegreen";
circamard.fillStyle = "yellow";
circamard.stroke();
circamard.fill();
circamard.closePath();

circamare.beginPath();
circamare.lineWidth = 3;
circamare.arc(95, 285, 17, 2* Math.PI, 0*Math.PI );
circamare.strokeStyle = "limegreen";
circamare.fillStyle = "yellow";
circamare.stroke();
circamare.fill();
circamare.closePath();

semicircvde.beginPath();
semicircvde.lineWidth = 2;
semicircvde.arc(200, 380, 95, 1* Math.PI, -0.97/2*Math.PI );
semicircvde.strokeStyle = "limegreen";
semicircvde.stroke();
semicircvde.closePath();

semicircvdd.beginPath();
semicircvdd.lineWidth = 2;
semicircvdd.arc(210, 380, 70, -1.05/2* Math.PI, 0*Math.PI );
semicircvdd.strokeStyle = "limegreen";
semicircvdd.stroke();
semicircvdd.closePath();