// Cranky Sticks: everything is drawn on a canvas in your browser. No backend, no APIs.
const CATS={A:"Advice",J:"Joke",L:"Lesson",S:"Satire",R:"Sarcasm",C:"Cranky"};
const PAL=[["Highlighter","#ffe14d","#181818","#e63946"],["Hospital mint","#bdf0dc","#0f2a24","#d62839"],["Blueprint","#1f3aa8","#ffffff","#ffe14d"],["Pink slip","#ffb8d0","#2a0f1c","#1d4ed8"],["Plain paper","#f6f6f1","#111111","#ff5a1f"],["Midnight","#14161f","#f1f1f1","#7cff6b"],["Peach","#ffc9a3","#2b160a","#0b7a75"],["Lilac","#d5c8ff","#1a1033","#e11d48"]];
// Poses: [left upper arm, left forearm, right upper arm, right forearm, left leg, right leg], degrees (0 = down, 180 = up)
const P={st:[-15,-10,15,10,-8,8],sh:[-70,-160,70,160,-8,8],pt:[-40,40,80,85,-8,8],cr:[-30,100,30,-100,-8,8],fp:[-20,-10,25,200,-8,8],rn:[-60,-130,60,20,-40,50],ch:[-150,-170,150,170,-12,12],hp:[-45,40,45,-40,-12,12],lc:[-20,-10,60,150,-8,8],sl:[-5,-3,5,3,-3,3]};
const FONT='"Helvetica Neue",Arial,"Segoe UI",Roboto,sans-serif';
const H=s=>{let h=7;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;return h;};
const FACES={A:"fs",J:"fswd",L:"fs",S:"sf",R:"sf",C:"a"},POSES=Object.keys(P);
const PROPS=["-","mug","phone","book","cloud","bulb","zzz","clock","plant","laptop","coin","-","-"];
const auto=(c,m)=>{const h=H(m);return{c,m,p:POSES[h%POSES.length],f:FACES[c][(h>>3)%FACES[c].length],pr:PROPS[(h>>5)%PROPS.length]};};
const ALL=window.RAW.trim().split("\n").map(l=>{const [c,p,f,pr,m]=l.split("|");return{c,p,f,pr,m};});
(window.RAW2||"").trim().split("\n").forEach(l=>{const i=l.indexOf("|");ALL.push(auto(l.slice(0,i),l.slice(i+1)));});
(window.FMTS||[]).forEach(([c,t,st])=>st.split("|").forEach(x=>ALL.push(auto(c,t.replace("{}",x)))));
const TPL=ALL.map((t,i)=>({...t,n:i+1}));
const $=id=>document.getElementById(id);
let cur=TPL[0];

$("cat").innerHTML='<option value="">All '+TPL.length+'</option>'+Object.entries(CATS).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
$("pal").innerHTML='<option value="auto">Auto</option>'+PAL.map((p,i)=>`<option value="${i}">${p[0]}</option>`).join("");
const list=()=>TPL.filter(t=>!$("cat").value||t.c===$("cat").value);
function fillList(){$("tpl").innerHTML=list().map(t=>`<option value="${t.n}">${String(t.n).padStart(3,"0")} ${t.m.replace("~"," ").slice(0,38)}</option>`).join("");}
function pick(t){cur=t;$("tpl").value=t.n;$("txt").value=t.m;draw();}

function wrapL(x,t,w){const out=[];let line="";t.split(" ").forEach(wd=>{const tt=line?line+" "+wd:wd;if(x.measureText(tt).width>w&&line){out.push(line);line=wd;}else line=tt;});out.push(line);return out;}
function fit(x,t,w,h,s){let lines;for(;s>28;s-=4){x.font=`bold ${s}px ${FONT}`;lines=wrapL(x,t,w);if(lines.length*s*1.15<=h)break;}return{lines,s};}

function fig(x,t,ink,ac,bg){
  const p=P[t.p],L=105;
  x.strokeStyle=ink;x.fillStyle=ink;x.lineWidth=9;x.lineCap=x.lineJoin="round";
  const ln=(a,b,c,d)=>{x.beginPath();x.moveTo(a,b);x.lineTo(c,d);x.stroke();};
  const lim=(sx,sy,a,l)=>{const r=a*Math.PI/180,ex=sx+Math.sin(r)*l,ey=sy+Math.cos(r)*l;ln(sx,sy,ex,ey);return[ex,ey];};
  x.globalAlpha=.3;ln(-280,522,280,522);x.globalAlpha=1;
  ln(0,55,0,330);
  const a=lim(0,115,p[0],L);lim(a[0],a[1],p[1],L);
  const b=lim(0,115,p[2],L),hr=lim(b[0],b[1],p[3],L);
  lim(0,330,p[4],190);lim(0,330,p[5],190);
  // head
  x.fillStyle=bg;x.beginPath();x.arc(0,0,55,0,7);x.fill();x.stroke();
  x.fillStyle=ink;x.lineWidth=6;const f=t.f;
  const dot=ex=>{x.beginPath();x.arc(ex,-6,5.5,0,7);x.fill();};
  if(f==="d")[-18,18].forEach(ex=>{ln(ex-8,-14,ex+8,2);ln(ex+8,-14,ex-8,2);});
  else if(f==="w")[-18,18].forEach(ex=>{x.lineWidth=4;x.beginPath();x.arc(ex,-6,11,0,7);x.stroke();dot(ex);});
  else if(f==="s")[-18,18].forEach(ex=>{ln(ex-10,-6,ex+10,-6);});
  else{dot(-18);dot(18);}
  x.lineWidth=6;
  if(f==="a"){ln(-32,-24,-8,-14);ln(32,-24,8,-14);x.beginPath();x.arc(0,38,14,Math.PI*1.1,Math.PI*1.9);x.stroke();}
  else if(f==="s"){ln(-14,26,6,26);ln(6,26,17,18);}
  else if(f==="d"){ln(-16,26,-5,21);ln(-5,21,5,30);ln(5,30,16,26);}
  else if(f==="w"){x.beginPath();x.arc(0,28,6,0,7);x.stroke();}
  else ln(-14,26,14,26);
  // props
  const [hx,hy]=hr;x.lineWidth=7;x.fillStyle=ac;
  const box=(a,b,c,d)=>{x.fillStyle=ac;x.fillRect(a,b,c,d);x.strokeRect(a,b,c,d);};
  const circ=(cx,cy,r,fill)=>{x.fillStyle=fill;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.stroke();};
  switch(t.pr){
    case"mug":box(hx-22,hy-48,44,52);x.beginPath();x.arc(hx+24,hy-24,13,-1.5,1.5);x.stroke();ln(hx-8,hy-62,hx-4,hy-76);ln(hx+8,hy-62,hx+12,hy-76);break;
    case"phone":box(hx-19,hy-72,38,68);ln(hx-6,hy-62,hx+6,hy-62);break;
    case"book":box(hx-32,hy-52,64,52);ln(hx,hy-52,hx,hy);break;
    case"cloud":circ(-42,-122,30,bg);circ(0,-142,38,bg);circ(44,-120,29,bg);x.fillStyle=bg;x.fillRect(-42,-122,86,30);x.lineWidth=8;x.strokeStyle=ac;x.beginPath();x.moveTo(6,-92);x.lineTo(-14,-58);x.lineTo(3,-62);x.lineTo(-10,-28);x.stroke();break;
    case"bulb":circ(0,-130,32,ac);box(-14,-100,28,22);for(let i=-1;i<2;i++)ln(i*52,-185+Math.abs(i)*28,i*40,-165+Math.abs(i)*22);break;
    case"zzz":x.fillStyle=ink;x.font=`bold 64px ${FONT}`;x.fillText("Z z z",58,-70);break;
    case"clock":circ(205,95,50,bg);ln(205,95,205,62);ln(205,95,228,106);circ(205,95,5,ac);break;
    case"plant":circ(-200,430,0.1,bg);box(-225,470,50,50);ln(-200,470,-215,395);ln(-200,470,-175,385);ln(-200,470,-200,370);circ(-218,392,13,ac);circ(-172,382,13,ac);circ(-200,366,13,ac);break;
    case"laptop":box(-250,430,110,70);ln(-265,505,-125,505);break;
    case"coin":circ(205,95,44,ac);x.fillStyle=ink;x.font=`bold 56px ${FONT}`;x.textAlign="center";x.fillText("$",205,114);x.textAlign="left";break;
  }
}

function draw(){
  const cv=$("cv"),tall=$("fmt").value==="tall",W=1080,H=tall?1350:1080;cv.width=W;cv.height=H;
  const x=cv.getContext("2d"),pi=$("pal").value==="auto"?cur.n%PAL.length:+$("pal").value,[,bg,ink,ac]=PAL[pi];
  x.fillStyle=bg;x.fillRect(0,0,W,H);
  x.strokeStyle=ink;x.lineWidth=10;x.strokeRect(24,24,W-48,H-48);
  // type tag
  x.font=`bold 34px ${FONT}`;const tag=CATS[cur.c],tw=x.measureText(tag).width+36;
  x.fillStyle=ac;x.fillRect(64,64,tw,56);x.strokeRect(64,64,tw,56);x.fillStyle=bg;x.textBaseline="middle";x.fillText(tag,82,93);x.textBaseline="alphabetic";
  // message
  const [main,sub]=($("txt").value||" ").split("~"),Hm=tall?450:350,hasSub=!!(sub&&sub.trim());
  const m=fit(x,main.trim(),900,Hm-170-(hasSub?60:0),tall?96:84);
  x.fillStyle=ink;x.textAlign="center";x.font=`bold ${m.s}px ${FONT}`;
  m.lines.forEach((l,i)=>x.fillText(l,W/2,160+m.s+i*m.s*1.15));
  if(hasSub){x.font=`${Math.round(m.s*.45)}px ${FONT}`;x.globalAlpha=.8;x.fillText(sub.trim(),W/2,160+m.s+m.lines.length*m.s*1.15+10);x.globalAlpha=1;}
  // figure
  const S=tall?1.12:0.88;x.save();x.translate(W/2+(["clock","coin"].includes(cur.pr)?-40:0),Hm+185*S);x.scale(S,S);fig(x,cur,ink,ac,bg);x.restore();
  // footer
  x.font=`bold 30px ${FONT}`;x.fillStyle=ink;x.globalAlpha=.7;x.fillText("Cranky Sticks  No. "+String(cur.n).padStart(3,"0"),W/2,H-48);x.globalAlpha=1;x.textAlign="left";
}

const say=m=>{$("msg").textContent=m;};
const fname=()=>"cranky-sticks-"+String(cur.n).padStart(3,"0")+".png";
const blob=()=>new Promise(r=>$("cv").toBlob(r,"image/png"));
async function download(){const b=await blob(),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=fname();document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);say("Saved "+fname());}
async function copyText(){const t=$("txt").value.replace("~"," - ");try{await navigator.clipboard.writeText(t);}catch(e){const ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();}say("Text copied.");}
async function share(){try{const f=new File([await blob()],fname(),{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:"Cranky Sticks"});return;}if(navigator.share){await navigator.share({title:"Cranky Sticks",text:$("txt").value.replace("~"," - ")});return;}await copyText();say("Sharing isn't supported here, so the text was copied.");}catch(e){if(e.name!=="AbortError")say("Share failed. Try Download PNG.");}}

const step=d=>{const l=list(),i=Math.max(0,l.findIndex(t=>t.n===cur.n));pick(l[(i+d+l.length)%l.length]);};
$("cat").onchange=()=>{fillList();pick(list()[0]);};
$("tpl").onchange=()=>pick(TPL[$("tpl").value-1]);
$("txt").oninput=draw;$("pal").onchange=draw;$("fmt").onchange=draw;
$("prev").onclick=()=>step(-1);$("next").onclick=()=>step(1);
$("surp").onclick=()=>{$("cat").value="";fillList();pick(TPL[Math.floor(Math.random()*TPL.length)]);};
$("dl").onclick=download;$("copy").onclick=copyText;$("share").onclick=share;
fillList();pick(TPL[Math.floor(Math.random()*TPL.length)]);
