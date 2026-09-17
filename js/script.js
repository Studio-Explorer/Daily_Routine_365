
/* ============ CONFIG ============ */
const core = window.CYBER_CHALLENGE && window.CYBER_CHALLENGE.core ? window.CYBER_CHALLENGE.core : {};
const careerData = window.CYBER_CHALLENGE && window.CYBER_CHALLENGE.career ? window.CYBER_CHALLENGE.career : {};
const resourceData = window.CYBER_CHALLENGE && window.CYBER_CHALLENGE.resources ? window.CYBER_CHALLENGE.resources : {};

const NAME = core.NAME || "Razz";
const TOTAL_DAYS = core.TOTAL_DAYS || 365;

const SCHEDULE = core.SCHEDULE || {
  weekday: [],
  weekend: []
};
const CATS = core.CATS || {
  study:{n:"Study",c:"var(--indigo)"}, dsa:{n:"DSA",c:"var(--rose)"},
  career:{n:"Career learning",c:"var(--sky)"}, health:{n:"Health",c:"var(--mint)"},
  learn:{n:"English",c:"var(--violet)"}, routine:{n:"Routine",c:"var(--amber)"},
  class:{n:"Classes",c:"var(--ink3)"}
};

const HABITS = core.HABITS || [
  ["🚫","No porn"],["🍬","Zero sugar"],["🍔","No junk food"],["💧","Drink 4L water"],
  ["🥗","3 proper meals"],["🥜","Eat dry fruits"],["⏰","Wake at 6:00 AM"],["🌙","Sleep by 11:30 PM"],
  ["🏃","Daily running"],["📵","Social media under 1 hr"],["🧘","10 min meditation"],["📖","Study target hours"],
  ["🗣️","Learn English"],["💻","Code / DSA"],["💪","Shoulder workout"],["😌","Be calm and kind"]
];

const WEEKGOALS = core.WEEKGOALS || [
  ["Finish all class notes","No backlog by Sunday"],
  ["Solve 10 DSA problems","Mix of arrays, strings, hashing"],
  ["Clear one Network+ domain","Professor Messer's free videos"],
  ["Finish 5 TryHackMe rooms","Free Pre Security path"],
  ["Publish one write-up","GitHub — this becomes your portfolio"],
  ["Sleep 7+ hours every night","The one that makes the rest possible"]
];

const DSA_TOPICS = core.DSA_TOPICS || [
  ["Arrays & hashing",25],["Two pointers",15],["Sliding window",12],["Stack & queue",15],
  ["Binary search",14],["Linked list",15],["Trees",22],["Tries",6],["Heap / priority queue",10],
  ["Backtracking",12],["Graphs",20],["Dynamic programming",25],["Greedy",12],["Intervals",8]
];

const CAREER = careerData.CAREER || [
  ["01","Fundamentals","Google Cybersecurity Certificate on Coursera — apply for financial aid. Linux basics on OverTheWire Bandit.","4 weeks"],
  ["02","Networking","Professor Messer's free Network+ course end to end. Packet reading in Wireshark.","6 weeks"],
  ["03","Security foundation","Fortinet NSE 1–3 — free and certificate-bearing. TryHackMe SOC Level 1 free rooms.","6 weeks"],
  ["04","Offensive practice","PortSwigger Web Security Academy (free, full labs) + Hack The Box free tier. This is your real CEH prep.","8 weeks"],
  ["05","Proof of work","10 write-ups on GitHub, a home lab you can demo, and a resume built on what you shipped.","Ongoing"]
];

const WORKOUT = core.WORKOUT || [
  ["Shoulders","Side raises 12×3 · Front raises 12×3 · Butterfly raises 12×3"],
  ["Chest & arms","Push-ups 15×3 · Diamond push-ups 10×3 · Dips 12×3"],
  ["Core","Plank 60s×3 · Leg raises 15×3 · Russian twists 20×3"],
  ["Legs","Squats 20×3 · Lunges 12×3 each · Calf raises 25×3"],
  ["Cardio","30 min run — keep a pace you can hold a conversation at"]
];

const GOALS = core.GOALS || [
  ["Month 1","Fixed sleep and wake time. Zero backlog in classes.","🌱"],
  ["Month 2","100 DSA problems solved. Network+ domains 1–3 done.","📗"],
  ["Month 3","Fortinet NSE 1–3 certificates in hand. Home lab running.","🛡️"],
  ["Month 4","200 DSA problems. First 5 write-ups published.","💻"],
  ["Month 5","PortSwigger labs cleared. Resume and LinkedIn rebuilt.","📄"],
  ["Month 6","300 DSA problems. Applying with a portfolio, not a promise.","🚀"]
];

const RESOURCES = resourceData.RESOURCES || [
  ["Professor Messer","Free Network+ and Security+ video courses","https://www.professormesser.com"],
  ["TryHackMe","Free beginner security rooms and labs","https://tryhackme.com"],
  ["Fortinet Training","NSE 1–3 free certifications","https://training.fortinet.com"],
  ["PortSwigger Academy","Free web security labs, start to finish","https://portswigger.net/web-security"],
  ["OverTheWire Bandit","Linux and shell practice as a game","https://overthewire.org/wargames/bandit"],
  ["NeetCode 150","Structured DSA problem list","https://neetcode.io"],
  ["Coursera financial aid","Google Cybersecurity Certificate, free route","https://www.coursera.org"],
  ["Hack The Box","Free tier machines once you have fundamentals","https://www.hackthebox.com"]
];

const QUOTES = core.QUOTES || [
  "Discipline is the bridge between goals and accomplishment.",
  "You do not rise to the level of your goals, you fall to the level of your systems.",
  "Stay consistent, even when motivation fades.",
  "The work you avoid today becomes the pressure you feel tomorrow.",
  "Small steps every day lead to big results.",
  "Nobody is coming. That is the good news — it means it is yours."
];

const NAV = (core.NAV || [
  ["home","Home","M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"],
  ["routine","Daily Routine","M8 2v3M16 2v3M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"],
  ["habits","Habit Tracker","M9 11l3 3 7-7M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"],
  ["study","Study Planner","M12 7v14M3 5h6a3 3 0 013 2 3 3 0 013-2h6v13h-6a3 3 0 00-3 2 3 3 0 00-3-2H3z"],
  ["dsa","DSA Tracker","M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"],
  ["career","Career Path","M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"],
  ["fitness","Fitness","M20.8 8.6a5.5 5.5 0 00-9.3-3.4l-.5.5-.5-.5A5.5 5.5 0 102.7 13l8.3 8 8.3-8a5.5 5.5 0 001.5-4.4z"],
  ["goals","Goals","M12 3v18M3 12h18M12 3a9 9 0 110 18 9 9 0 010-18z"],
  ["reflect","Reflections","M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"],
  ["resources","Resources","M4 5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"]
]).concat([["analytics","Analytics","M5 20h14M7 16l4-4 3 3 5-7"]]);

/* ============ STORAGE ============ */
const S = {
  get(k,fb){ try{const v=localStorage.getItem("mos:"+k); return v?JSON.parse(v):fb;}catch(e){return fb;} },
  set(k,v){ try{localStorage.setItem("mos:"+k,JSON.stringify(v));}catch(e){} }
};
const now = new Date();
function dateKey(d){
  const x=new Date(d);
  const y=x.getFullYear();
  const m=String(x.getMonth()+1).padStart(2,"0");
  const day=String(x.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
const dk = dateKey(now);
function wkKey(d){const x=new Date(d);x.setDate(x.getDate()-((x.getDay()+6)%7));return "wk"+dateKey(x);}
const meta = S.get("meta",{start:dk}); if(!meta.start){meta.start=dk;} S.set("meta",meta);
let day  = S.get("d:"+dk, {sched:{},habits:{}});
day.sched=day.sched||{};day.habits=day.habits||{};
let week = S.get(wkKey(now), {});
let dsa  = S.get("dsa", {});
let career = S.get("career", {});
let goals = S.get("goals", {});
let notes = S.get("note:"+dk, "");
const dayN = Math.min(TOTAL_DAYS, Math.max(1, Math.floor((new Date(dk)-new Date(meta.start))/864e5)+1));
const isWeekend = [0,6].includes(now.getDay());
let schedMode = isWeekend ? "weekend" : "weekday";

/* ============ HELPERS ============ */
const el=(t,c,x)=>{const e=document.createElement(t); if(c)e.className=c; if(x!=null)e.textContent=x; return e;};
const mins=t=>{const[a,b]=t.split(":").map(Number);return a*60+b;};
const fmtH=m=>{const h=Math.floor(m/60),r=m%60;return (h?h+"h":"")+(r?" "+r+"m":"")||"0m";};
function svgIcon(d,stroke){return `<svg viewBox="0 0 24 24" fill="none" stroke="${stroke||'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;}
function budget(list){const b={};list.forEach(r=>{b[r[4]]=(b[r[4]]||0)+(mins(r[1])-mins(r[0]));});return b;}
function confetti(){
  const c=document.getElementById("confetti");
  const cols=["#6366F1","#10B981","#F59E0B","#F43F5E","#0EA5E9"];
  for(let i=0;i<60;i++){
    const p=el("i");p.style.left=Math.random()*100+"vw";p.style.top="-20px";
    p.style.background=cols[i%cols.length];p.style.animationDelay=(Math.random()*.6)+"s";
    c.appendChild(p);setTimeout(()=>p.remove(),3200);
  }
}
function saveDay(){
  S.set("d:"+dk,day);
  S.set("daily:lastSaved",new Date().toISOString());
}
function ensureMidnightReset(){
  // The date-specific storage key already separates each day's progress.
  // Never clear it during startup: a refresh must restore today's record.
  S.set("daily:lastSeen", dk);
}
function dayPct(){
  const total=SCHEDULE[schedMode].length+HABITS.length;
  let n=0;SCHEDULE[schedMode].forEach((_,i)=>{if(day.sched[schedMode+i])n++;});
  HABITS.forEach((_,i)=>{if(day.habits[i])n++;});
  return {n,total,p:total?n/total:0};
}

/* ============ CARD BUILDER ============ */
let _revealIndex=0;
function card(title,iconPath,tint,sub){
  const c=el("section","card reveal");
  c.style.animationDelay=(_revealIndex++*0.05)+"s";
  const h=el("div","ch");
  const left=el("h2");
  if(iconPath){
    const ic=el("div","icn");ic.style.background=tint+"22";ic.innerHTML=svgIcon(iconPath,tint);
    left.appendChild(ic);
  }
  left.appendChild(el("span",null,title));
  h.appendChild(left);
  if(sub)h.appendChild(el("div","sub",sub));
  c.appendChild(h);
  return c;
}

/* ============ VIEWS ============ */
function vHome(){
  const f=document.createDocumentFragment();

  /* greeting */
  const g=el("section","card");
  const gr=el("div","greet");
  const l=el("div");l.style.display="flex";l.style.gap="14px";l.style.alignItems="center";
  l.innerHTML=`<svg class="sun" viewBox="0 0 44 44"><circle cx="22" cy="22" r="8" fill="#FBBF24"/><g stroke="#FBBF24" stroke-width="2.4" stroke-linecap="round"><path d="M22 4v5M22 35v5M4 22h5M35 22h5M9.5 9.5l3.5 3.5M31 31l3.5 3.5M34.5 9.5L31 13M13 31l-3.5 3.5"/></g></svg>`;
  const txt=el("div");
  const hr=now.getHours();
  txt.appendChild(el("div","g1",`Good ${hr<12?"morning":hr<17?"afternoon":"evening"}, ${NAME}!`));
  txt.appendChild(el("div","g2","“"+QUOTES[dayN%QUOTES.length]+"”"));
  l.appendChild(txt);gr.appendChild(l);
  const r=el("div");r.style.textAlign="right";
  r.appendChild(el("div","mini",now.toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short",year:"numeric"})));
  const dc=el("div","daychip",`Day ${dayN} / ${TOTAL_DAYS}`);dc.style.marginTop="6px";r.appendChild(dc);
  gr.appendChild(r);g.appendChild(gr);

  /* time budget chips */
  const b=budget(SCHEDULE[schedMode]);
  const st=el("div","stats");
  Object.keys(CATS).forEach(k=>{
    if(!b[k])return;
    const s=el("div","stat");
    const bar=el("div");bar.style.cssText=`width:4px;align-self:stretch;border-radius:99px;background:${CATS[k].c}`;
    const d=el("div");
    d.appendChild(el("div","k",CATS[k].n));
    d.appendChild(el("div","v",fmtH(b[k])));
    d.appendChild(el("div","u",schedMode==="weekday"?"per weekday":"per weekend day"));
    s.appendChild(bar);s.appendChild(d);st.appendChild(s);
  });
  g.appendChild(st);
  const totalProd=(b.study||0)+(b.dsa||0)+(b.career||0)+(b.learn||0);
  const note=el("div","mini");note.style.marginTop="12px";
  note.textContent=`Focused work today: ${fmtH(totalProd)} outside class, ${fmtH((b.class||0))} in class. Sleep window ${schedMode==="weekday"?"23:30 – 06:00 (6h 30m)":"23:00 – 07:00 (8h)"}.`;
  g.appendChild(note);
  f.appendChild(g);

  /* grid: schedule | habits */
  const grid=el("div","grid two");grid.style.marginTop="16px";
  const left2=el("div");
  left2.appendChild(scheduleCard());
  const right2=el("div");
  right2.appendChild(habitsCard());
  const q=card("Daily quote","M8 11h3V8a3 3 0 00-3 3zM16 11h3V8a3 3 0 00-3 3z","var(--violet)");
  q.classList.add("quotecard");
  q.appendChild(el("p",null,"“"+QUOTES[(dayN+2)%QUOTES.length]+"”"));
  right2.appendChild(q);
  grid.appendChild(left2);grid.appendChild(right2);
  f.appendChild(grid);

  /* bottom: week | progress | workout */
  const g3=el("div","grid three");g3.style.marginTop="16px";
  g3.appendChild(weekCard());
  g3.appendChild(progressCard());
  g3.appendChild(workoutCard());
  f.appendChild(g3);

  const foot=el("div","foot");
  foot.appendChild(el("span",null,"❤️  Take care of your body. It's the only place you have to live."));
  foot.appendChild(el("b",null,"You got this 🚀"));
  f.appendChild(foot);
  return f;
}

function scheduleCard(){
  const c=card("Today's schedule","M8 2v3M16 2v3M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z","var(--indigo)","Plan the day. Execute with focus.");
  const tabs=el("div","tabs");
  ["weekday","weekend"].forEach(m=>{
    const b=el("button","tab"+(schedMode===m?" on":""),m==="weekday"?"Weekday (Mon–Fri)":"Weekend (Sat–Sun)");
    b.onclick=()=>{schedMode=m;render();};
    tabs.appendChild(b);
  });
  c.appendChild(tabs);
  const ul=el("ul","tl");
  const nowM=now.getHours()*60+now.getMinutes();
  SCHEDULE[schedMode].forEach((row,i)=>{
    const [s,e,emo,lbl,cat]=row;
    const li=el("li");
    const key=schedMode+i;
    if(day.sched[key])li.classList.add("done");
    if(nowM>=mins(s)&&nowM<mins(e)&&((schedMode==="weekend")===isWeekend))li.classList.add("now");
    li.appendChild(el("div","time",s+" – "+e));
    const dot=el("div","dot");dot.style.background=CATS[cat].c;li.appendChild(dot);
    li.appendChild(el("div","emo",emo));
    li.appendChild(el("div","lbl",lbl));
    li.appendChild(el("div","dur",fmtH(mins(e)-mins(s))));
    const cb=el("input");cb.type="checkbox";cb.className="cbx";cb.checked=!!day.sched[key];
    cb.onchange=()=>{day.sched[key]=cb.checked;saveDay();li.classList.toggle("done",cb.checked);refreshMeters();};
    li.appendChild(cb);
    ul.appendChild(li);
  });
  c.appendChild(ul);
  return c;
}

function habitsCard(){
  const {n}=dayPct();
  const done=HABITS.filter((_,i)=>day.habits[i]).length;
  const c=card("Today's habits","M9 11l3 3 7-7M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9","var(--mint)",done+" / "+HABITS.length);
  const ul=el("ul","hb");
  HABITS.forEach((h,i)=>{
    const li=el("li");if(day.habits[i])li.classList.add("done");
    const cb=el("input");cb.type="checkbox";cb.className="cbx";cb.checked=!!day.habits[i];
    cb.onchange=()=>{
      day.habits[i]=cb.checked;saveDay();li.classList.toggle("done",cb.checked);
      const nd=HABITS.filter((_,j)=>day.habits[j]).length;
      c.querySelector(".sub").textContent=nd+" / "+HABITS.length;
      if(nd===HABITS.length)confetti();
      refreshMeters();
    };
    li.appendChild(cb);
    li.appendChild(el("span","emo",h[0]));
    li.appendChild(el("span","lbl",h[1]));
    li.appendChild(el("span","strk",habitStreak(i)?habitStreak(i)+"🔥":""));
    ul.appendChild(li);
  });
  c.appendChild(ul);
  return c;
}
function habitStreak(i){
  let n=0;
  for(let k=0;k<90;k++){
    const d=new Date(now);d.setDate(d.getDate()-k);
    const rec=S.get("d:"+d.toISOString().slice(0,10),null);
    if(rec&&rec.habits&&rec.habits[i])n++;else if(k>0)break;else continue;
  }
  return n;
}

function weekCard(){
  const c=card("Week overview","M4 20V10M10 20V4M16 20v-7M22 20H2","var(--amber)","This week's focus");
  WEEKGOALS.forEach((w,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.04)+"s";if(week[i])r.classList.add("done");
    const cb=el("input");cb.type="checkbox";cb.className="cbx";cb.checked=!!week[i];
    cb.onchange=()=>{week[i]=cb.checked;S.set(wkKey(now),week);r.classList.toggle("done",cb.checked);};
    r.appendChild(cb);
    const t=el("div","t",w[0]);t.appendChild(el("small",null,w[1]));
    r.appendChild(t);c.appendChild(r);
  });
  return c;
}

function progressCard(){
  const c=card("Progress","M3 17l6-6 4 4 8-8M21 7h-5M21 7v5","var(--sky)",`Day ${dayN} of ${TOTAL_DAYS}`);
  const rw=el("div","ringwrap");
  const {p}=dayPct();
  rw.innerHTML=`<svg class="ring" viewBox="0 0 120 120">
    <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6366F1"/><stop offset="100%" stop-color="#10B981"/></linearGradient></defs>
    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--track)" stroke-width="12"/>
    <circle id="ringarc" cx="60" cy="60" r="50" fill="none" stroke="url(#rg)" stroke-width="12" stroke-linecap="round"
      stroke-dasharray="314" stroke-dashoffset="314" transform="rotate(-90 60 60)"/>
    <text class="big" x="60" y="58" text-anchor="middle" id="ringpct">0%</text>
    <text class="sm" x="60" y="75" text-anchor="middle">TODAY</text>
  </svg>`;
  c.appendChild(rw);
  const bars=[
    ["Challenge","var(--violet)",dayN/TOTAL_DAYS],
    ["Consistency","var(--mint)",consistency()],
    ["DSA","var(--rose)",dsaPct()],
    ["Career path","var(--sky)",careerPct()],
    ["Week goals","var(--amber)",WEEKGOALS.filter((_,i)=>week[i]).length/WEEKGOALS.length]
  ];
  bars.forEach(([n,col,v])=>{
    const row=el("div","pbrow");
    const nm=el("div","nm");const i=el("i");i.style.background=col;nm.appendChild(i);nm.appendChild(el("span",null,n));
    const pb=el("div","pb");const fill=el("i");fill.style.background=col;pb.appendChild(fill);
    const val=el("div","pbv",Math.round(v*100)+"%");
    row.appendChild(nm);row.appendChild(pb);row.appendChild(val);c.appendChild(row);
    requestAnimationFrame(()=>{setTimeout(()=>fill.style.width=Math.round(v*100)+"%",80);});
  });
  const heat=el("div","heat");
  for(let k=20;k>=0;k--){
    const d=new Date(now);d.setDate(d.getDate()-k);
    const rec=S.get("d:"+d.toISOString().slice(0,10),null);
    const i=el("i");
    if(rec){
      const tot=HABITS.length;let n=0;HABITS.forEach((_,j)=>{if(rec.habits&&rec.habits[j])n++;});
      const p2=n/tot;
      if(p2>0)i.style.background=`rgba(16,185,129,${.25+p2*.75})`;
    }
    if(k===0)i.style.outline="2px solid var(--indigo)";
    heat.appendChild(i);
  }
  const hl=el("div","mini","Last 21 days");hl.style.marginTop="10px";
  c.appendChild(hl);c.appendChild(heat);
  return c;
}
function consistency(){
  let n=0,t=0;
  for(let k=0;k<21;k++){
    const d=new Date(now);d.setDate(d.getDate()-k);
    if(new Date(d)<new Date(meta.start))break;
    t++;
    const rec=S.get("d:"+d.toISOString().slice(0,10),null);
    if(rec){let c=0;HABITS.forEach((_,j)=>{if(rec.habits&&rec.habits[j])c++;});if(c/HABITS.length>=.6)n++;}
  }
  return t?n/t:0;
}
function dsaPct(){
  const tot=DSA_TOPICS.reduce((a,b)=>a+b[1],0);
  const d=DSA_TOPICS.reduce((a,b,i)=>a+Math.min(dsa[i]||0,b[1]),0);
  return tot?d/tot:0;
}
function careerPct(){
  return CAREER.filter((_,i)=>career[i]).length/CAREER.length;
}

function workoutCard(){
  const c=card("Workout","M20.8 8.6a5.5 5.5 0 00-9.3-3.4l-.5.5-.5-.5A5.5 5.5 0 102.7 13l8.3 8 8.3-8a5.5 5.5 0 001.5-4.4z","var(--rose)","Rotate through the week");
  WORKOUT.slice(0,3).forEach((w,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.04)+"s";
    const n=el("div","badge",String(i+1));
    n.style.background="rgba(244,63,94,.14)";n.style.color="var(--rose)";
    r.appendChild(n);
    const t=el("div","t",w[0]);t.appendChild(el("small",null,w[1]));
    r.appendChild(t);c.appendChild(r);
  });
  const m=el("div","mini","Full plan in Fitness.");m.style.marginTop="10px";c.appendChild(m);
  return c;
}

function vRoutine(){
  const f=document.createDocumentFragment();
  f.appendChild(scheduleCard());
  const b=budget(SCHEDULE[schedMode]);
  const c=card("Where the hours go","M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z","var(--violet)",schedMode==="weekday"?"Weekday":"Weekend day");
  const total=Object.values(b).reduce((a,x)=>a+x,0);
  Object.keys(CATS).forEach(k=>{
    if(!b[k])return;
    const row=el("div","pbrow");
    const nm=el("div","nm");const i=el("i");i.style.background=CATS[k].c;nm.appendChild(i);nm.appendChild(el("span",null,CATS[k].n));
    const pb=el("div","pb");const fill=el("i");fill.style.background=CATS[k].c;pb.appendChild(fill);
    row.appendChild(nm);row.appendChild(pb);row.appendChild(el("div","pbv",fmtH(b[k])));
    c.appendChild(row);
    requestAnimationFrame(()=>setTimeout(()=>fill.style.width=Math.round(b[k]/total*100)+"%",80));
  });
  const m=el("div","mini",`Scheduled: ${fmtH(total)}. Unscheduled: ${fmtH(1440-total)} — that gap is your sleep and slack. Protect both.`);
  m.style.marginTop="12px";c.appendChild(m);
  f.appendChild(c);
  return f;
}

function vHabits(){
  const f=document.createDocumentFragment();
  f.appendChild(habitsCard());
  const c=card("Streaks","M12 2s6 5 6 10a6 6 0 11-12 0c0-5 6-10 6-10z","var(--amber)","Last 21 days per habit");
  HABITS.forEach((h,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.03)+"s";
    r.appendChild(el("span","emo",h[0]));
    const t=el("div","t",h[1]);
    const heat=el("div","heat");heat.style.marginTop="6px";
    for(let k=20;k>=0;k--){
      const d=new Date(now);d.setDate(d.getDate()-k);
      const rec=S.get("d:"+d.toISOString().slice(0,10),null);
      const cell=el("i");
      if(rec&&rec.habits&&rec.habits[i])cell.style.background="var(--mint)";
      heat.appendChild(cell);
    }
    t.appendChild(heat);r.appendChild(t);
    const st=habitStreak(i);
    const bd=el("div","badge",st?st+" 🔥":"—");
    bd.style.background="rgba(245,158,11,.14)";bd.style.color="var(--amber)";
    r.appendChild(bd);
    c.appendChild(r);
  });
  f.appendChild(c);
  return f;
}

function vStudy(){
  const f=document.createDocumentFragment();
  const b=budget(SCHEDULE.weekday),bw=budget(SCHEDULE.weekend);
  const c=card("Weekly study budget","M12 7v14M3 5h6a3 3 0 013 2 3 3 0 013-2h6v13h-6a3 3 0 00-3 2 3 3 0 00-3-2H3z","var(--indigo)","5 weekdays + 2 weekend days");
  const rows=[
    ["Academic study",(b.study||0)*5+(bw.study||0)*2],
    ["DSA practice",(b.dsa||0)*5+(bw.dsa||0)*2],
    ["Career learning",(b.career||0)*5+(bw.career||0)*2],
    ["English",(b.learn||0)*5+(bw.learn||0)*2],
    ["Classes",(b.class||0)*5]
  ];
  const max=Math.max(...rows.map(r=>r[1]));
  rows.forEach(([n,v],i)=>{
    const row=el("div","pbrow");
    const nm=el("div","nm");const dot=el("i");dot.style.background=["var(--indigo)","var(--rose)","var(--sky)","var(--violet)","var(--ink3)"][i];
    nm.appendChild(dot);nm.appendChild(el("span",null,n));
    const pb=el("div","pb");const fill=el("i");fill.style.background=dot.style.background;pb.appendChild(fill);
    row.appendChild(nm);row.appendChild(pb);row.appendChild(el("div","pbv",fmtH(v)));
    c.appendChild(row);
    requestAnimationFrame(()=>setTimeout(()=>fill.style.width=Math.round(v/max*100)+"%",60));
  });
  const tot=rows.reduce((a,r)=>a+r[1],0);
  const m=el("div","mini",`That's ${fmtH(tot)} of learning a week — about ${Math.round(tot/60/7*10)/10} hours a day averaged out. Over 183 days it compounds to roughly ${Math.round(tot/60*26)} hours.`);
  m.style.marginTop="12px";c.appendChild(m);
  f.appendChild(c);
  f.appendChild(weekCard());
  return f;
}

function vDsa(){
  const f=document.createDocumentFragment();
  const solved=DSA_TOPICS.reduce((a,b,i)=>a+(dsa[i]||0),0);
  const tot=DSA_TOPICS.reduce((a,b)=>a+b[1],0);
  const c=card("DSA tracker","M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14","var(--rose)",solved+" / "+tot+" problems");
  const pb=el("div","pb");pb.style.height="11px";const fill=el("i");fill.style.background="linear-gradient(90deg,#F43F5E,#F59E0B)";pb.appendChild(fill);
  c.appendChild(pb);
  requestAnimationFrame(()=>setTimeout(()=>fill.style.width=Math.round(solved/tot*100)+"%",80));
  DSA_TOPICS.forEach((t,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.035)+"s";
    const name=el("div","t",t[0]);
    const done=dsa[i]||0;
    name.appendChild(el("small",null,done>=t[1]?"Complete ✅":done+" of "+t[1]+" done"));
    r.appendChild(name);
    const cnt=el("div","cnt");
    const minus=el("button",null,"−"),plus=el("button",null,"+"),b2=el("b",null,done+"/"+t[1]);
    minus.onclick=()=>{dsa[i]=Math.max(0,(dsa[i]||0)-1);S.set("dsa",dsa);render();};
    plus.onclick=()=>{dsa[i]=Math.min(t[1],(dsa[i]||0)+1);S.set("dsa",dsa);if(dsa[i]===t[1])confetti();render();};
    cnt.appendChild(minus);cnt.appendChild(b2);cnt.appendChild(plus);
    r.appendChild(cnt);c.appendChild(r);
  });
  f.appendChild(c);
  const tip=card("How to practice","M12 17v.01M12 13a2 2 0 10-2-2","var(--indigo)");
  tip.appendChild(el("p","mini","Two hours a day: first hour on a new pattern, second hour re-solving two problems you failed earlier this week. Re-solving is where the pattern actually sticks. Follow the NeetCode 150 order."));
  f.appendChild(tip);
  return f;
}

function vCareer(){
  const f=document.createDocumentFragment();
  const c=card("Cybersecurity path","M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z","var(--sky)",Math.round(careerPct()*100)+"% complete");
  CAREER.forEach((p,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.06)+"s";if(career[i])r.classList.add("done");
    const cb=el("input");cb.type="checkbox";cb.className="cbx";cb.checked=!!career[i];
    cb.onchange=()=>{career[i]=cb.checked;S.set("career",career);render();};
    r.appendChild(cb);
    const n=el("div","badge",p[0]);n.style.background="rgba(14,165,233,.14)";n.style.color="var(--sky)";
    r.appendChild(n);
    const t=el("div","t",p[1]);t.appendChild(el("small",null,p[2]));
    r.appendChild(t);
    const d=el("div","badge",p[3]);d.style.background="var(--card2)";d.style.color="var(--ink3)";
    r.appendChild(d);
    c.appendChild(r);
  });
  f.appendChild(c);

  const cloud=card("Cloud computing path","M4 18h16M6 15l3-3 3 2 6-7","var(--mint)","Security + cloud readiness");
  if (Array.isArray(careerData.CLOUD_PATH)) {
    careerData.CLOUD_PATH.forEach((p,i)=>{
      const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.05)+"s";
      const n=el("div","badge",String(i+1));n.style.background="rgba(16,185,129,.12)";n.style.color="var(--mint)";r.appendChild(n);
      const t=el("div","t",p[0]);t.appendChild(el("small",null,p[1]));r.appendChild(t);
      const d=el("div","badge",p[2]);d.style.background="var(--card2)";d.style.color="var(--ink3)";r.appendChild(d);
      cloud.appendChild(r);
    });
  }
  f.appendChild(cloud);

  const read=card("Cloud reading list","M4 5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2z","var(--mint)","AWS + Azure + zero trust");
  if (Array.isArray(careerData.CLOUD_READINGS)) {
    careerData.CLOUD_READINGS.forEach((item,i)=>{
      const row=el("div","itemrow reveal");row.style.animationDelay=(i*0.04)+"s";
      const t=el("div","t");
      const a=document.createElement("a");a.href=item[2];a.target="_blank";a.rel="noopener";a.textContent=item[0];a.style.fontWeight="600";
      t.appendChild(a);t.appendChild(el("small",null,item[1]));row.appendChild(t);
      const tag=el("div","badge","Read");tag.style.background="rgba(14,165,233,.12)";tag.style.color="var(--sky)";row.appendChild(tag);
      read.appendChild(row);
    });
  }
  f.appendChild(read);

  const n=card("The rule","M9 11l3 3 7-7","var(--mint)");
  n.appendChild(el("p","mini","Every phase ends with something you can show someone: a certificate, a lab you can demo, or a write-up. If a phase produces nothing visible, you studied but you didn't build."));
  f.appendChild(n);
  return f;
}

function vFitness(){
  const f=document.createDocumentFragment();
  const c=card("Workout plan","M20.8 8.6a5.5 5.5 0 00-9.3-3.4l-.5.5-.5-.5A5.5 5.5 0 102.7 13l8.3 8 8.3-8a5.5 5.5 0 001.5-4.4z","var(--rose)","One block a day, rotating");
  WORKOUT.forEach((w,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.05)+"s";
    const n=el("div","badge",["Mon/Thu","Tue/Fri","Wed/Sat","Sun","Daily"][i]);
    n.style.background="rgba(244,63,94,.12)";n.style.color="var(--rose)";
    r.appendChild(n);
    const t=el("div","t",w[0]);t.appendChild(el("small",null,w[1]));
    r.appendChild(t);c.appendChild(r);
  });
  f.appendChild(c);
  const h=card("Health basics","M12 21C7 17 3 13.5 3 9.5A4.5 4.5 0 0112 7a4.5 4.5 0 019 2.5c0 4-4 7.5-9 11.5z","var(--mint)");
  [["💧","4 litres of water — keep a bottle on the desk, not in the kitchen"],
   ["🥗","Three real meals. Skipping lunch is what kills the evening blocks"],
   ["😴","7 hours minimum. The 6h 30m weekday window is tight — make weekends 8h"],
   ["🚶","Stand and walk 5 minutes between every study block"]].forEach((x,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.06)+"s";r.appendChild(el("span","emo",x[0]));r.appendChild(el("div","t",x[1]));h.appendChild(r);
  });
  f.appendChild(h);
  return f;
}

function vGoals(){
  const f=document.createDocumentFragment();
  const c=card("365 day goals","M12 3a9 9 0 110 18 9 9 0 010-18zM12 7v5l3 2","var(--violet)",`Day ${dayN} of ${TOTAL_DAYS}`);
  const pb=el("div","pb");pb.style.height="11px";const fill=el("i");
  fill.style.background="linear-gradient(90deg,#8B5CF6,#0EA5E9)";pb.appendChild(fill);c.appendChild(pb);
  requestAnimationFrame(()=>setTimeout(()=>fill.style.width=Math.round(dayN/TOTAL_DAYS*100)+"%",80));
  const m=el("div","mini",`${TOTAL_DAYS-dayN} days left.`);m.style.margin="8px 0 4px";c.appendChild(m);
  GOALS.forEach((g,i)=>{
    const r=el("div","itemrow reveal");r.style.animationDelay=(i*0.06)+"s";if(goals[i])r.classList.add("done");
    const cb=el("input");cb.type="checkbox";cb.className="cbx";cb.checked=!!goals[i];
    cb.onchange=()=>{goals[i]=cb.checked;S.set("goals",goals);if(cb.checked)confetti();render();};
    r.appendChild(cb);
    r.appendChild(el("span","emo",g[2]));
    const t=el("div","t",g[0]);t.appendChild(el("small",null,g[1]));
    r.appendChild(t);c.appendChild(r);
  });
  f.appendChild(c);
  return f;
}

function vReflect(){
  const f=document.createDocumentFragment();
  const c=card("Today's reflection","M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z","var(--amber)",now.toLocaleDateString());
  c.appendChild(el("p","mini","What went well, what broke, and the one thing you'll fix tomorrow."));
  const ta=el("textarea");ta.value=notes;ta.placeholder="Three lines is enough. Write them honestly.";
  let t;ta.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{notes=ta.value;S.set("note:"+dk,notes);},400);};
  c.appendChild(ta);
  f.appendChild(c);
  const past=card("Past entries","M4 5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2z","var(--ink3)");
  let found=0;
  for(let k=1;k<=14;k++){
    const d=new Date(now);d.setDate(d.getDate()-k);
    const key="note:"+d.toISOString().slice(0,10);
    const v=S.get(key,"");
    if(v&&v.trim()){
      found++;
      const r=el("div","itemrow reveal");r.style.animationDelay=((found-1)*0.05)+"s";
      const t2=el("div","t",d.toLocaleDateString(undefined,{day:"numeric",month:"short"}));
      t2.appendChild(el("small",null,v.slice(0,160)));
      r.appendChild(t2);past.appendChild(r);
    }
  }
  if(!found)past.appendChild(el("p","mini","Nothing written yet. Start tonight — reflections are what turn 183 days into a record instead of a blur."));
  f.appendChild(past);
  return f;
}

function buildPieChart(completed, missed) {
  const total = completed + missed;
  const wrapper = el("div", "pie-wrap");
  const pie = el("div", "pie");
  const completedPct = total ? (completed / total) * 100 : 0;
  pie.style.background = `conic-gradient(var(--sky) 0 ${completedPct}%, var(--track) ${completedPct}% 100%)`;
  const inner = el("div", "pie-inner");
  inner.textContent = total ? Math.round(completedPct) + "%" : "0%";
  pie.appendChild(inner);
  wrapper.appendChild(pie);
  const legend = el("div", "legend");
  legend.innerHTML = `<span><i style="background:var(--sky)"></i>Done ${completed}</span><span><i style="background:var(--track)"></i>Missed ${missed}</span>`;
  wrapper.appendChild(legend);
  return wrapper;
}

function weeklySummary() {
  let completed = 0, missed = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const key = "d:" + d.toISOString().slice(0, 10);
    const entry = S.get(key, { sched:{}, habits:{} });
    const total = Object.keys(entry.sched || {}).length + Object.keys(entry.habits || {}).length;
    if (total > 0) completed++; else missed++;
  }
  return { completed, missed };
}

function monthlySummary() {
  let completed = 0, missed = 0;
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const key = "d:" + d.toISOString().slice(0, 10);
    const entry = S.get(key, { sched:{}, habits:{} });
    const total = Object.keys(entry.sched || {}).length + Object.keys(entry.habits || {}).length;
    if (total > 0) completed++; else missed++;
  }
  return { completed, missed };
}

function currentStreak() {
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const key = "d:" + d.toISOString().slice(0, 10);
    const entry = S.get(key, { sched:{}, habits:{} });
    const total = Object.keys(entry.sched || {}).length + Object.keys(entry.habits || {}).length;
    if (total > 0) streak++; else break;
  }
  return streak;
}

function vAnalytics(){
  const f=document.createDocumentFragment();
  const weekly=weeklySummary();
  const monthly=monthlySummary();
  const head=card("Progress analytics","M5 20h14M7 16l4-4 3 3 5-7","var(--violet)","Weekly and monthly completion");
  const summary=el("div","stats");
  [
    ["Current streak", currentStreak() + " days", "var(--mint)"],
    ["Week done", weekly.completed + " / " + (weekly.completed + weekly.missed), "var(--sky)"],
    ["Month done", monthly.completed + " / " + (monthly.completed + monthly.missed), "var(--amber)"],
    ["Roadmap", Math.round(careerPct() * 100) + "%", "var(--rose)"]
  ].forEach(([label,value,color])=>{
    const stat=el("div","stat");
    const bar=el("div"); bar.style.cssText=`width:4px;align-self:stretch;border-radius:99px;background:${color}`;
    const body=el("div"); body.appendChild(el("div","k",label)); body.appendChild(el("div","v",value));
    stat.appendChild(bar); stat.appendChild(body); summary.appendChild(stat);
  });
  head.appendChild(summary); f.appendChild(head);

  const charts=el("div","grid two");
  const weekChart=card("Week pie","M12 4a8 8 0 100 16 8 8 0 000-16z","var(--sky)","Completed vs missed");
  weekChart.appendChild(buildPieChart(weekly.completed, weekly.missed));
  const monthChart=card("Month pie","M12 4a8 8 0 100 16 8 8 0 000-16z","var(--mint)","Completed vs missed");
  monthChart.appendChild(buildPieChart(monthly.completed, monthly.missed));
  charts.appendChild(weekChart); charts.appendChild(monthChart); f.appendChild(charts);
  return f;
}

function vResources(){
  const f=document.createDocumentFragment();
  const c=card("Free resources","M4 5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2z","var(--sky)","All free or free-with-aid");
  RESOURCES.forEach((r,i)=>{
    const row=el("div","itemrow reveal");row.style.animationDelay=(i*0.05)+"s";
    const a=document.createElement("a");a.href=r[2];a.target="_blank";a.rel="noopener";a.textContent=r[0];
    a.style.fontWeight="600";
    const t=el("div","t");t.appendChild(a);t.appendChild(el("small",null,r[1]));
    row.appendChild(t);
    const b=el("div","badge","Free");b.style.background="rgba(16,185,129,.14)";b.style.color="var(--mint)";
    row.appendChild(b);
    c.appendChild(row);
  });
  f.appendChild(c);
  return f;
}

const VIEWS={home:vHome,routine:vRoutine,habits:vHabits,study:vStudy,dsa:vDsa,career:vCareer,fitness:vFitness,goals:vGoals,reflect:vReflect,resources:vResources,analytics:vAnalytics};
let current="home";

/* ============ RENDER ============ */
function renderNav(){
  const n=document.getElementById("nav");n.textContent="";
  NAV.forEach(([id,label,path])=>{
    const b=el("button","navbtn"+(current===id?" on":""));
    b.innerHTML=svgIcon(path)+"<span>"+label+"</span>";
    b.onclick=()=>{current=id;render();window.scrollTo({top:0,behavior:"smooth"});};
    n.appendChild(b);
  });
}
function render(){
  ensureMidnightReset();
  renderNav();
  const m=document.getElementById("main");m.textContent="";
  const v=el("div","view on");
  _revealIndex=0;
  v.appendChild((VIEWS[current]||vHome)());
  m.appendChild(v);
  refreshMeters();
}
function refreshMeters(){
  const {p}=dayPct();
  const arc=document.getElementById("ringarc");
  if(arc){arc.style.strokeDashoffset=(314*(1-p)).toFixed(1);}
  const pct=document.getElementById("ringpct");
  if(pct){
    let i=0;const target=Math.round(p*100);
    clearInterval(window._cu);
    window._cu=setInterval(()=>{i+=Math.max(1,Math.round(target/22));if(i>=target){i=target;clearInterval(window._cu);}pct.textContent=i+"%";},28);
  }
  document.getElementById("herobar").style.width=Math.round(dayN/TOTAL_DAYS*100)+"%";
}

window.addEventListener("storage",event=>{
  if(!event.key||!event.key.startsWith("mos:"))return;
  if(event.key==="mos:d:"+dk){
    day=S.get("d:"+dk,{sched:{},habits:{}});
    day.sched=day.sched||{};day.habits=day.habits||{};
  }
  if(event.key==="mos:"+wkKey(now))week=S.get(wkKey(now),{});
  if(event.key==="mos:dsa")dsa=S.get("dsa",{});
  if(event.key==="mos:career")career=S.get("career",{});
  if(event.key==="mos:goals")goals=S.get("goals",{});
  render();
});

render();
