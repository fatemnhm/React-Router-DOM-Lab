import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  boxholder: '',
  boxSize: 'Small',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Box Holder Name:</label>
        <input type="text" id="boxholder" name="boxholder" value={formData.boxholder} onChange={handleChange} />

        <label htmlFor="boxSize">Box Size:</label>
        <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
