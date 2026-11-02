# PTMI - Patient Treatment Management Interface

Mobile-first React (Vite) front end for Assessment 1, Mobile Web Application Development.

## Run

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (normally http://localhost:5173).

## Structure

```
src/
  App.jsx                    State (selected filter) and page layout
  data/treatments.js         Predefined treatment records (JSON-style array)
  utils/formatDate.js        ISO date -> DD/MM/YYYY
  components/
    Header.jsx
    TreatmentFilter.jsx      Filter by treatment type
    TreatmentList.jsx        Renders records with .map()
    TreatmentCard.jsx        One treatment record
    TreatmentForm.jsx        Entry form; displays input on button click
  index.css                  Mobile-first styles with tablet/desktop breakpoints
```

## Notes

- All data is stored locally. There is no backend, API, database or persistence.
- Entries made in the form are displayed only; they are not added to the predefined records.
