import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Mailbox</h1>
      { unreadMessages.length > 0 &&
        <h2>
          Hey! You have { unreadMessages.length } unread messages.
        </h2>
      }
    </div>
  );
}

export default Mailbox;
