import { formatDate } from '../utils/formatDate.js';

// Displays a single treatment record. Receives the record fields as props.
function TreatmentCard({ id, type, name, startDate }) {
  return (
    <li className="card">
      <div className="card__header">
        <span className="card__id">{id}</span>
        <span className="badge">{type}</span>
      </div>
      <h3 className="card__name">{name}</h3>
      <p className="card__date">
        <span className="card__date-label">Start date:</span> {formatDate(startDate)}
      </p>
    </li>
  );
}

export default TreatmentCard;
