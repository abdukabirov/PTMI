// Filter control: a dropdown listing every treatment type plus "All".
// The selected value is owned by App (lifted state) and passed in via props.
function TreatmentFilter({ treatmentTypes, selectedType, onTypeChange, resultCount }) {
  return (
    <section className="panel" aria-labelledby="filter-heading">
      <h2 id="filter-heading" className="panel__title">Filter Treatments</h2>

      <label htmlFor="type-filter" className="field__label">Treatment Type</label>
      <select
        id="type-filter"
        className="field__control"
        value={selectedType}
        onChange={(event) => onTypeChange(event.target.value)}
      >
        <option value="All">All types</option>
        {treatmentTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <p className="filter__count" aria-live="polite">
        Showing {resultCount} {resultCount === 1 ? 'treatment' : 'treatments'}
      </p>
    </section>
  );
}

export default TreatmentFilter;
