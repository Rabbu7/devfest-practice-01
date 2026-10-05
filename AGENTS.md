# AGENTS.md — EcoTrack (Campus Waste Management)

You are the coding agent for a **solo, 90-minute, frontend-only** web app contest. Read this file fully before every task. Also read `PAGES.md` (what to build) and `DESIGN.md` (how it looks).

## 1. Project goal
EcoTrack lets Daffodil International University students report waste bins that are full or damaged, and lets anyone view recent reports on a dashboard. The whole UI must work in **Bangla and English**.

## 2. Hard constraints (never violate)
- **Frontend only.** No backend, no server, no serverless functions, no Firebase/Supabase/Appwrite, no online database or storage.
- **Persistence = `localStorage` only.**
- **No secrets.** Never put API keys, tokens, passwords or login details in code or the repo.
- **No external API** is needed. Do not add one. Prefer no CDN dependency for core features.
- Use only open-source npm packages. Keep dependencies minimal.
- Must work in **Chrome**, with no login and no installation, on a public HTTPS static host.
- Use only sample/fake data. No real personal data.

## 3. Tech stack
- React + Vite (JavaScript, not TypeScript — keep it fast)
- Tailwind CSS
- React Context API (two contexts: language, reports)
- React Router DOM — use **`HashRouter`** (not `BrowserRouter`) so refresh and deep links never 404 on a static host
- `localStorage` for reports and chosen language

## 4. Folder structure
```
src/
  main.jsx
  App.jsx                  # HashRouter, routes, providers, layout
  context/
    LanguageContext.jsx    # lang state, t(key) helper, persisted
    ReportsContext.jsx     # reports state, addReport, toggleResolved, persisted
  i18n/
    translations.js        # single object: { en: {...}, bn: {...} }
  components/
    Navbar.jsx             # logo, nav links, language switcher
    LanguageSwitcher.jsx
    ReportForm.jsx
    ReportCard.jsx
    StatsBar.jsx
    EmptyState.jsx
  pages/
    ReportPage.jsx
    DashboardPage.jsx
  utils/
    formatTime.js          # locale-aware date/time + Bangla digits
```

## 5. Data model
```js
{
  id: string,            // crypto.randomUUID() or Date.now().toString()
  location: "library" | "cafeteria" | "dorms",
  issueType: "full" | "damaged" | "overflowing",
  note: string,          // optional, may be ""
  createdAt: string,     // ISO timestamp
  resolved: boolean      // default false
}
```
- Store **keys** (e.g. `"library"`), never translated labels. Translate only at render time so switching language updates old reports too.
- localStorage keys: `ecotrack_reports` (JSON array), `ecotrack_lang` (`"en"` | `"bn"`).
- Wrap every `JSON.parse` in try/catch and fall back to `[]` / `"en"`.
- Newest reports first.

## 6. Internationalization rules
- **Every** user-visible string comes from `translations.js` via `t("key")`. No hard-coded text in components.
- Covers: nav, page titles, form labels, placeholders, dropdown options, buttons, validation errors, success messages, empty states, stats labels, status badges, time text, footer.
- Both `en` and `bn` objects must have **identical keys**. When adding a key, add both languages in the same change.
- Use correct, natural Bangla (e.g. লাইব্রেরি, ক্যাফেটেরিয়া, ডরমিটরি, পূর্ণ, ক্ষতিগ্রস্ত, উপচে পড়ছে, সমাধান হয়েছে).
- Format dates with `toLocaleString("bn-BD")` / `"en-US"` depending on language.
- Use a font that renders Bangla well (e.g. system fallback stack including "Noto Sans Bengali"). If loading a font, only via an allowed open-source source.

## 7. Coding conventions
- Functional components and hooks only.
- Small, readable components. Add a one-line comment at the top of each file explaining its purpose (the author must explain the code to judges).
- Tailwind utility classes only; follow `DESIGN.md` tokens (colors, spacing, radius, typography). No custom CSS files beyond Tailwind's base import.
- Mobile-first and responsive. Accessible: labels tied to inputs, visible focus states, sufficient contrast, `aria-live` for success/error messages, buttons not divs.
- Validate the form: location and issue type are required; show translated inline errors.
- No dead code, no console logs left behind, no unused dependencies.

## 8. Git & commit rules (contest-critical)
- Commit **at least every 30 minutes**, minimum **3 commits** total.
- **Every commit message must include a short change note AND the prompt used.** Format:
  ```
  feat: add report form with validation

  Prompt: "<the exact prompt given to the AI>"
  ```
- If a change was made by hand, write `Manual edit` instead of a prompt.
- **Never** force-push, rebase pushed commits, amend pushed commits, or delete the repo.
- Do not make any code/Git/deployment change after the final submission time (T+90).

## 9. Definition of done
- [ ] Report form with Location (Library, Cafeteria, Dorms), Issue Type (Full, Damaged, Overflowing), optional Note
- [ ] Dashboard lists all reports with location, issue type, time of report
- [ ] Full Bangla/English switching, persisted across refresh
- [ ] Reports persist in localStorage across refresh
- [ ] Bonus: Resolved toggle on each report
- [ ] Bonus: Stats (Total Reports, Resolved Reports) at top of dashboard
- [ ] Responsive, no console errors, `npm run build` passes
- [ ] README.md (run instructions, completed main/bonus features, known problems, AI tools used, most useful prompt) and MIT LICENSE present
- [ ] Deployed to public HTTPS, works on a fresh browser tab, refresh on `/#/dashboard` works

## 10. How to work
1. Do exactly what the current prompt asks. Do not add unrequested features.
2. Prefer the simplest implementation that satisfies the task.
3. After each task, ensure the app still runs (`npm run dev`) and state what changed in 2–3 lines.
4. If something conflicts with Section 2, stop and say so instead of working around it.
