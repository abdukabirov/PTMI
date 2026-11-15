# PTMI - Patient Treatment Management Interface

Mobile-first React (Vite) front end for Assessment 1, Mobile Web Application Development.

## Run

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (normally http://localhost:5173).

To create a production build or preview it locally:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.jsx                    Filter state and page layout
  main.jsx                   React application entry point
  data/treatments.js         Ten predefined treatment records
  utils/formatDate.js        ISO date to DD/MM/YYYY formatter
  components/
    Header.jsx               Application header
    TreatmentFilter.jsx      Filter by treatment type
    TreatmentList.jsx        Filtered record list
    TreatmentCard.jsx        Single treatment record
    TreatmentForm.jsx        Entry form and displayed result
  index.css                  Mobile-first styles with tablet/desktop breakpoints
```

## Notes

- All data is stored locally. There is no backend, API, database or persistence.
- Entries made in the form are displayed only; they are not added to the predefined records.
