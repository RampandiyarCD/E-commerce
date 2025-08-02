import { useState, useEffect } from 'react'
import './form.css'
import { showMessage } from '../Notifications/NotifyPopup';

const HelpF = () => {
  const [Open, setOpen] = useState(false);
  const [formData, setFormData] = useState(() => {
    const Data = localStorage.getItem('formData');
    return Data ? JSON.parse(Data) : {
      name: '',
      email: '',
      description: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const Submit = (e) => {
    e.preventDefault();
    // console.log(`Submitted Data:\n\nName: ${formData.name}\nEmail: ${formData.email}\nDescription: ${formData.description}`);
    showMessage("Mail sent successfully!")
    setOpen(false);
    };

  const openform = () => {
    setOpen(!Open);
  };

  return (
    <center >
      <button onClick={openform} className="open-button">
        {Open ? 'Close Email' : 'Send Email'}
      </button>
      {Open && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contact Form</h2>
            <form className="form" onSubmit={Submit}>
              <button type="button" className="close-button" onClick={openform}>X</button>
              <div className="sub-div">
                <p>Name:</p>
                <input className="input" type="text" name="name" value={formData.name} onChange={Change} required/>
                <p>Email:</p>
                <input className="input" type="email" name="email" value={formData.email} onChange={Change} required/>
                <p>Description:</p>
                <textarea className="textarea" name="description" value={formData.description} onChange={Change} required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </center>
  );
}

export default HelpF