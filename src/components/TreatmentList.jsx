import TreatmentCard from './TreatmentCard.jsx';

// Renders the (already filtered) treatment records using .map().
function TreatmentList({ treatments }) {
  return (
    <section className="panel" aria-labelledby="records-heading">
      <h2 id="records-heading" className="panel__title">Treatment Records</h2>

      {treatments.length === 0 ? (
        <p className="empty">No treatments found for this type.</p>
      ) : (
        <ul className="card-grid">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              id={treatment.id}
              type={treatment.type}
              name={treatment.name}
              startDate={treatment.startDate}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TreatmentList;
