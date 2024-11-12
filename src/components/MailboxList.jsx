import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <main>
    <h2>Mailboxes</h2>
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>Box {mailbox._id}</Link>
        </li>
      ))}
    </ul>
  </main>
);

export default MailboxList;
