import { useState } from 'react';
import Header from './components/Header.jsx';
import TreatmentFilter from './components/TreatmentFilter.jsx';
import TreatmentList from './components/TreatmentList.jsx';
import TreatmentForm from './components/TreatmentForm.jsx';
import { treatmentRecords } from './data/treatments.js';

// Builds the available filter options from the records.
const treatmentTypes = [...new Set(treatmentRecords.map((record) => record.type))].sort();

// Coordinates filtering and the main page layout.
function App() {
  const [selectedType, setSelectedType] = useState('All');

  // Keeps only records matching the selected type.
  const filteredTreatments =
    selectedType === 'All'
      ? treatmentRecords
      : treatmentRecords.filter((record) => record.type === selectedType);

  return (
    <>
      <Header />
      <main className="layout">
        <div className="layout__records">
          <TreatmentFilter
            treatmentTypes={treatmentTypes}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            resultCount={filteredTreatments.length}
          />
          <TreatmentList treatments={filteredTreatments} />
        </div>
        <div className="layout__form">
          <TreatmentForm />
        </div>
      </main>
    </>
  );
}

export default App;
