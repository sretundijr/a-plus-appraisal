import React from 'react';

const contactForm = () => {
  return (
    <div>
      <div className="field">
        <label className="label">Full Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Full Name" />
        </div>
      </div>
      <div className="field">
        <label className="label">Your Company Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your Company Name" />
        </div>
      </div>
      <div className="field">
        <label className="label">Your Phone Number</label>
        <div className="control">
          <input className="input" type="number" placeholder="111-111-1111" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
      <div className="field">
        <label className="label">Property Address</label>
        <div className="control">
          <input className="input" type="text" placeholder="Property Address" />
        </div>
        <p>Example:</p>
      </div>
      <div className="field">
        <label className="label">Property County</label>
        <div className="control">
          <input className="input" type="text" placeholder="Property County" />
        </div>
      </div>
      <div className="field">
        <label className="label">Use of Appraisal</label>
        <div className="control">
          <input className="input" type="text" placeholder="Use of Appraisal" />
        </div>
        <p>Example: Buy/Sell, Refinance, Estate Settlement, Etc.</p>
      </div>
      <div className="field">
        <label className="label">Additonal Notes or Considerations</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
        <p>
          Anything else useful including whether or not the property is leased, how many tenants are at the property and the use in which you need the appraisal for
        </p>
      </div>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </div>
  );
}

export default contactForm;

