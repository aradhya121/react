import React from 'react';

function EventHandler() {
  const handleClick = (event) => {
    console.log('Clicked on button!', event);
  };

  return (
    <div style={{ marginTop: '20px' }}> {/* Add some top margin */}
      <button onClick={handleClick}>
        Click to see the event object in browser console
      </button>
    </div>
  );
}

export default EventHandler;
