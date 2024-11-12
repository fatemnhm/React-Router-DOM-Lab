import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <main>
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Box Holder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;
