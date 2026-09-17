# 183 Day Challenge — Dashboard

Your full personal-growth dashboard: daily schedule, habit tracker, DSA
tracker, career roadmap, fitness plan, goals, reflections, and free resources
— split into a real project (HTML / CSS / JS), no build step needed.

## Files

```
challenge-dashboard/
├── index.html      → page shell (header + sidebar + empty <main>)
├── css/
│   └── style.css   → all styling, colors, layout, dark mode, animations
├── js/
│   └── script.js   → all app data + logic (every section is rendered by this file)
└── README.md       → this file
```

## Run it

Open `index.html` in any browser — double-click it or drag it into a browser
window. Nothing to install.

To host it so you can reach it from your phone too, drop the whole folder
into any static host (GitHub Pages, Netlify, Vercel) unchanged.

## Editing your content

Everything lives in `js/script.js`, near the top, as plain data — edit these
and the whole UI updates automatically:

| Constant | What it controls |
|---|---|
| `NAME` | The greeting on the Home tab |
| `SCHEDULE.weekday` / `.weekend` | Your daily timeline (start, end, emoji, label, category) |
| `HABITS` | The 16 daily habit checkboxes |
| `WEEKGOALS` | This week's 6 targets |
| `DSA_TOPICS` | Topic name + problem count for the DSA tracker |
| `CAREER` | The 5-phase cybersecurity roadmap |
| `WORKOUT` | Workout blocks shown in Fitness |
| `GOALS` | The 6 monthly milestones |
| `RESOURCES` | Free learning links |
| `QUOTES` | Rotating daily quotes |

Example — adding an evening reading block to the weekday schedule:

```js
["21:00","21:30","📖","Evening reading","learn"],
```

The five values are: start time, end time, emoji, label, category. Categories
map to colors via the `CATS` object right below `SCHEDULE`.

## Data & storage

All progress (checked-off schedule blocks, habits, DSA counts, career phases,
goals, reflection notes) saves to the browser's `localStorage` under keys
prefixed `mos:`. That means:

- Nothing is sent anywhere — it all stays on your device.
- It's per-browser: switching browsers or devices starts fresh.
- Clearing site data for this file resets everything.
- These are the same storage keys used by the companion "Live Focus" app, so
  opening both in the same browser keeps habits and schedule check-offs in
  sync between them.

## Notes

- Built with vanilla JS — no framework, no dependencies, no npm install.
- Respects `prefers-color-scheme` for automatic dark mode.
- Respects `prefers-reduced-motion` to disable animations.
- The Google Fonts links in `index.html` require an internet connection for
  the custom typefaces (Plus Jakarta Sans, Caveat); the app still works
  offline, it just falls back to your system font.
