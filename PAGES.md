# PAGES.md — EcoTrack Pages & Behavior

Visual style lives in `DESIGN.md`. Rules and architecture live in `AGENTS.md`. This file defines **what each page contains and how it behaves**.

## Routing (HashRouter)
| Route | Page | Purpose |
|-------|------|---------|
| `/#/` | ReportPage | Submit a bin report |
| `/#/dashboard` | DashboardPage | View, track and resolve reports |
| `*` | Redirect to `/#/` | Unknown routes fall back to the report page |

## Shared layout (every page)
- **Navbar** (sticky top): EcoTrack logo/name, links **Report** and **Dashboard** (active link highlighted), **language switcher** (EN | বাংলা).
- Language switcher changes the whole app instantly, with no reload, and is remembered after refresh.
- **Footer**: short line, e.g. "EcoTrack — Daffodil International University" (translated).
- Max content width centered, mobile-first, fully usable at 360px width.

## Page 1 — Report Page (`/#/`)

### Content
- Page title and a one-line friendly description (translated).
- **Report form** in a card:

| Field | Type | Required | Options / Notes |
|-------|------|----------|-----------------|
| Location | Dropdown (select) | Yes | Library, Cafeteria, Dorms |
| Issue Type | Dropdown or radio group | Yes | Full, Damaged, Overflowing |
| Note | Textarea | No | Optional, placeholder translated, max ~300 chars |

- **Submit** button (translated), with a clear disabled/pressed state.

### Behavior
1. The location dropdown starts on a placeholder ("Select location"), not a real value.
2. On submit with missing required fields: show translated inline error under each invalid field, do not save.
3. On valid submit:
   - Create a report `{ id, location, issueType, note, createdAt: new Date().toISOString(), resolved: false }`
   - Add to the **top** of the reports list and persist to localStorage
   - Show a translated success message (`aria-live="polite"`) such as "Report submitted. Thank you!"
   - Reset the form
   - Offer a "View dashboard" link/button next to the success message
4. Trim whitespace in the note. Empty note is allowed.

### Acceptance criteria
- [ ] All labels, placeholders, options, errors and success message appear in both languages
- [ ] Cannot submit without location and issue type
- [ ] New report appears on the dashboard immediately and after a refresh

## Page 2 — Dashboard Page (`/#/dashboard`)

### Content (top to bottom)
1. Page title and short description (translated)
2. **Stats bar** (bonus): two cards — **Total Reports** and **Resolved Reports** (live counts; Bangla digits when language is Bangla)
3. **Reports list**, newest first. Each **ReportCard** shows:
   - Location (translated label, with an icon or color accent)
   - Issue type as a colored badge (translated): Full, Damaged, Overflowing each have a distinct color
   - Time of report (formatted for the active language, e.g. "5 Oct 2026, 3:42 PM" / Bangla equivalent)
   - Note, if present
   - Status badge: **Open** or **Resolved** (translated)
   - **Mark as Resolved** button (bonus) that toggles to **Reopen** when already resolved
4. **Empty state** when there are no reports: friendly illustration/icon, translated message, and a button linking to the Report page

### Behavior
- Toggling Resolved updates the card, the stats counts and localStorage immediately.
- Resolved cards look visually calmer (e.g. muted/green accent) but remain visible.
- Switching language re-renders all labels, badges, dates and counts without losing data (store keys, translate at render).
- Data comes only from ReportsContext (loaded from localStorage on startup).

### Acceptance criteria
- [ ] Each item shows location, issue type and time
- [ ] Stats show correct Total and Resolved counts and update live
- [ ] Resolved toggle works and survives refresh
- [ ] Empty state appears when no reports exist
- [ ] Layout works from 360px mobile to desktop (single column on mobile, comfortable grid/list on desktop)

## Language details
- Languages: **English (`en`)** and **Bangla (`bn`)**.
- Default: `en` unless a saved choice exists in `ecotrack_lang`.
- Set `document.documentElement.lang` to match the active language.
- Translation keys must exist in both languages. Suggested key groups: `nav.*`, `form.*`, `locations.*`, `issues.*`, `dashboard.*`, `status.*`, `errors.*`, `messages.*`, `footer.*`.

## Sample test data (for manual testing only)
Use these through the form, not hard-coded seed data in the app:
- Library — Full — "Third floor bin near the windows"
- Cafeteria — Overflowing — (no note)
- Dorms — Damaged — "Lid is broken"

## Final QA checklist (before the last commit)
- [ ] Submit 3 reports, refresh, all still there
- [ ] Switch to Bangla, every visible string is Bangla (including errors, empty state, dates, counts)
- [ ] Refresh while in Bangla, language stays Bangla
- [ ] Resolve one report, refresh, status persists, stats correct
- [ ] Open `/#/dashboard` directly in a new tab on the live URL, no 404
- [ ] No console errors, no secrets in repo, `npm run build` succeeds
