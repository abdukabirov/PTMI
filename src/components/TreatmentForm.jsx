import { useState } from 'react';
import { formatDate } from '../utils/formatDate.js';

const emptyForm = {
  id: '',
  type: '',
  name: '',
  startDate: '',
};

// Interactive entry form. Entered details are shown below the form when the
// button is clicked. They are NOT added to the predefined treatment records.
function TreatmentForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submittedTreatment, setSubmittedTreatment] = useState(null);
  const [error, setError] = useState('');

  // One change handler for all four inputs, keyed by the input's name attribute.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleDisplay = (event) => {
    event.preventDefault();

    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
    if (!allFieldsFilled) {
      setError('Please complete all four fields before displaying the treatment.');
      return;
    }

    setError('');
    setSubmittedTreatment(formData);
  };

  const handleClear = () => {
    setFormData(emptyForm);
    setSubmittedTreatment(null);
    setError('');
  };

  return (
    <section className="panel" aria-labelledby="form-heading">
      <h2 id="form-heading" className="panel__title">Enter Treatment Details</h2>

      <form onSubmit={handleDisplay} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="treatment-id" className="field__label">Treatment ID</label>
            <input
              id="treatment-id"
              name="id"
              type="text"
              className="field__control"
              placeholder="e.g. T008"
              value={formData.id}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="treatment-type" className="field__label">Treatment Type</label>
            <input
              id="treatment-type"
              name="type"
              type="text"
              className="field__control"
              placeholder="e.g. Physiotherapy"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          <div className="field field--wide">
            <label htmlFor="treatment-name" className="field__label">Treatment Name</label>
            <input
              id="treatment-name"
              name="name"
              type="text"
              className="field__control"
              placeholder="e.g. Shoulder Strengthening Course"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="treatment-date" className="field__label">Start Date</label>
            <input
              id="treatment-date"
              name="startDate"
              type="date"
              className="field__control"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="button-row">
          <button type="submit" className="btn btn--primary">
            Display Treatment
          </button>
          <button type="button" className="btn btn--secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {submittedTreatment && (
        <div className="result" aria-live="polite">
          <h3 className="result__title">Entered Treatment</h3>
          <dl className="result__list">
            <div className="result__row">
              <dt>Treatment ID</dt>
              <dd>{submittedTreatment.id}</dd>
            </div>
            <div className="result__row">
              <dt>Treatment Type</dt>
              <dd>{submittedTreatment.type}</dd>
            </div>
            <div className="result__row">
              <dt>Treatment Name</dt>
              <dd>{submittedTreatment.name}</dd>
            </div>
            <div className="result__row">
              <dt>Start Date</dt>
              <dd>{formatDate(submittedTreatment.startDate)}</dd>
            </div>
          </dl>
          <p className="result__note">
            This entry is displayed only and has not been added to the treatment records.
          </p>
        </div>
      )}
    </section>
  );
}

export default TreatmentForm;
