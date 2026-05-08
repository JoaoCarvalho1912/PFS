let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let casa = canvas.getContext('2d');
let porta = canvas.getContext('2d');
let janu = canvas.getContext('2d');
let jand = canvas.getContext('2d');
let teto = canvas.getContext('2d');
let sol = canvas.getContext('2d');
let tru = canvas.getContext('2d');
let trd = canvas.getContext('2d');
let arvu = canvas.getContext('2d');
let arvd = canvas.getContext('2d');
let secum = canvas.getContext('2d');
let retaum = canvas.getContext('2d');
let retado = canvas.getContext('2d');
let secdo = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 15;
ctx.fillStyle = 'grey';
ctx.fillRect(0,300,400,400);
ctx.closePath();

casa.beginPath();
casa.lineWidth = 15;
casa.fillStyle = 'rgb(138, 64, 11)';
casa.fillRect(140,198,120,102);
casa.closePath();

porta.beginPath();
porta.lineWidth = 15;
porta.fillStyle = 'rgb(98, 68, 45)';
porta.fillRect(188,252,27,48);
porta.closePath();

janu.beginPath();
janu.lineWidth = 15;
janu.fillStyle = 'rgb(71, 181, 253)';
janu.fillRect(155.5,222,32,30);
janu.closePath();

jand.beginPath();
jand.lineWidth = 15;
jand.fillStyle = 'rgb(71, 181, 253)'; 
jand.fillRect(214,222,32,30);
jand.closePath();

teto.beginPath();
teto.lineWidth = 2;
teto.fillStyle = 'salmon';
teto.moveTo(140,198);
teto.lineTo(200,130);
teto.lineTo(260,198);
teto.fill();
teto.closePath();

sol.beginPath();
sol.lineWidth = 2;
sol.fillStyle = 'rgba(251, 255, 26, 0.94)';
sol.arc(310,90,47.5,2*Math.PI,0);
sol.fill();
sol.closePath();

tru.beginPath();
tru.lineWidth = 15;
tru.fillStyle = 'rgb(138, 64, 11)';
tru.fillRect(50,250,20,50);
tru.closePath();

trd.beginPath();
trd.lineWidth = 15;
trd.fillStyle = 'rgb(138, 64, 11)';
trd.fillRect(345,302,20,50);
trd.closePath();

arvu.beginPath();
arvu.lineWidth = 2;
arvu.fillStyle = 'rgb(26, 151, 9)';
arvu.arc(60,230,26,2*Math.PI,0);
arvu.fill();
arvu.closePath();

arvd.beginPath();
arvd.lineWidth = 2;
arvd.fillStyle = 'rgb(26, 151, 9)';
arvd.arc(355,283,26,2*Math.PI,0);
arvd.fill();
arvd.closePath();

secum.beginPath();
secum.lineWidth = 2;
secum.fillStyle = 'rgb(32, 155, 255)';
secum.arc(0,295,50,1*Math.PI, 0);
secum.fill();
secum.closePath();

retaum.beginPath();
retaum.lineWidth = 15;
retaum.fillStyle = 'rgb(32, 155, 255)';
retaum.fillRect(0,290,50,110);
retaum.closePath();

retado.beginPath();
retado.lineWidth = 15;
retado.fillStyle = 'rgb(32, 155, 255)';
retado.fillRect(0,350,140,50);
retado.closePath();

secdo.beginPath();
secdo.lineWidth = 2;
secdo.fillStyle = 'rgb(32, 155, 255)';
secdo.arc(145,407,57,1*Math.PI, 0);
secdo.fill();
secdo.closePath();