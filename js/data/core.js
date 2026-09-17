window.CYBER_CHALLENGE = window.CYBER_CHALLENGE || {};
window.CYBER_CHALLENGE.core = {
  NAME: "Razz",
  TOTAL_DAYS: 365,
  SCHEDULE: {
    weekday: [
      ["06:00","06:10","💧","Wake up + hydrate","routine"],
      ["06:10","06:20","🧘","Meditation","health"],
      ["06:20","06:50","🏃","Running / cardio","health"],
      ["06:50","07:20","🚿","Shower + grooming","routine"],
      ["07:20","07:50","🍳","Breakfast","routine"],
      ["07:50","08:20","🗣️","English speaking","learn"],
      ["08:20","09:20","📘","Academic study / class prep","study"],
      ["09:30","15:30","🎓","Classes","class"],
      ["15:30","16:00","🍽️","Lunch + short rest","routine"],
      ["16:00","18:00","📗","Academic study","study"],
      ["18:00","18:20","☕","Break / refresh","routine"],
      ["18:20","20:20","💻","DSA practice","dsa"],
      ["20:20","20:50","🍲","Dinner","routine"],
      ["20:50","22:50","🛡️","Career learning","career"],
      ["22:50","23:10","📝","Plan tomorrow + light reading","routine"],
      ["23:10","23:30","🌙","Wind down (no phone)","routine"]
    ],
    weekend: [
      ["07:00","07:15","💧","Wake up + hydrate","routine"],
      ["07:15","07:30","🧘","Meditation","health"],
      ["07:30","08:15","🏃","Long run / gym","health"],
      ["08:15","09:00","🚿","Shower + breakfast","routine"],
      ["09:00","12:00","🛡️","Deep lab session","career"],
      ["12:00","13:00","🍽️","Lunch + rest","routine"],
      ["13:00","15:00","💻","DSA practice","dsa"],
      ["15:00","15:30","☕","Break","routine"],
      ["15:30","18:00","📘","Academic study / project","study"],
      ["18:00","19:00","🚶","Outside / family time","health"],
      ["19:00","20:00","✍️","Write-up + portfolio","career"],
      ["20:00","21:00","🍲","Dinner","routine"],
      ["21:00","22:00","📚","Weekly review + planning","routine"],
      ["22:00","23:00","🌙","Wind down","routine"]
    ]
  },
  CATS: {
    study: { n: "Study", c: "var(--indigo)" },
    dsa: { n: "DSA", c: "var(--rose)" },
    career: { n: "Career learning", c: "var(--sky)" },
    health: { n: "Health", c: "var(--mint)" },
    learn: { n: "English", c: "var(--violet)" },
    routine: { n: "Routine", c: "var(--amber)" },
    class: { n: "Classes", c: "var(--ink3)" }
  },
  HABITS: [
    ["🚫","No porn"],["🍬","Zero sugar"],["🍔","No junk food"],["💧","Drink 4L water"],
    ["🥗","3 proper meals"],["🥜","Eat dry fruits"],["⏰","Wake at 6:00 AM"],["🌙","Sleep by 11:30 PM"],
    ["🏃","Daily running"],["📵","Social media under 1 hr"],["🧘","10 min meditation"],["📖","Study target hours"],
    ["🗣️","Learn English"],["💻","Code / DSA"],["💪","Shoulder workout"],["😌","Be calm and kind"]
  ],
  WEEKGOALS: [
    ["Finish all class notes","No backlog by Sunday"],
    ["Solve 10 DSA problems","Mix of arrays, strings, hashing"],
    ["Clear one Network+ domain","Professor Messer's free videos"],
    ["Finish 5 TryHackMe rooms","Free Pre Security path"],
    ["Publish one write-up","GitHub — this becomes your portfolio"],
    ["Sleep 7+ hours every night","The one that makes the rest possible"]
  ],
  DSA_TOPICS: [
    ["Arrays & hashing",25],["Two pointers",15],["Sliding window",12],["Stack & queue",15],
    ["Binary search",14],["Linked list",15],["Trees",22],["Tries",6],["Heap / priority queue",10],
    ["Backtracking",12],["Graphs",20],["Dynamic programming",25],["Greedy",12],["Intervals",8]
  ],
  WORKOUT: [
    ["Shoulders","Side raises 12×3 · Front raises 12×3 · Butterfly raises 12×3"],
    ["Chest & arms","Push-ups 15×3 · Diamond push-ups 10×3 · Dips 12×3"],
    ["Core","Plank 60s×3 · Leg raises 15×3 · Russian twists 20×3"],
    ["Legs","Squats 20×3 · Lunges 12×3 each · Calf raises 25×3"],
    ["Cardio","30 min run — keep a pace you can hold a conversation at"]
  ],
  GOALS: [
    ["Month 1","Fixed sleep and wake time. Zero backlog in classes.","🌱"],
    ["Month 2","100 DSA problems solved. Network+ domains 1–3 done.","📗"],
    ["Month 3","Fortinet NSE 1–3 certificates in hand. Home lab running.","🛡️"],
    ["Month 4","200 DSA problems. First 5 write-ups published.","💻"],
    ["Month 5","PortSwigger labs cleared. Resume and LinkedIn rebuilt.","📄"],
    ["Month 6","300 DSA problems. Applying with a portfolio, not a promise.","🚀"],
    ["Month 7","Security+ fundamentals and cloud labs connected to your resume.","☁️"],
    ["Month 8","Hands-on red team and blue team labs documented in a public repo.","🧪"],
    ["Month 9","Cloud security and IAM projects in AWS and Azure ready for demos.","☁️"],
    ["Month 10","Career portfolio with 12 notes, projects, and CV improvements.","📈"],
    ["Month 11","Interview practice, incident reports, and mock technical screens.","🎯"],
    ["Month 12","365-day proof of growth: confident, job-ready, and visible.","🏁"]
  ],
  QUOTES: [
    "Discipline is the bridge between goals and accomplishment.",
    "You do not rise to the level of your goals, you fall to the level of your systems.",
    "Stay consistent, even when motivation fades.",
    "The work you avoid today becomes the pressure you feel tomorrow.",
    "Small steps every day lead to big results.",
    "Nobody is coming. That is the good news — it means it is yours.",
    "Security is not a product; it is a process shaped by daily discipline.",
    "Cloud fluency and security insight are built by deliberate repetition."
  ],
  NAV: [
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
  ]
};
