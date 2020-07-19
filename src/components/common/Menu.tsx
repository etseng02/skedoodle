import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const [selectedSubMenuItem, SetSelectedSubMenuItem] = useState<string | null>(null);

  const handleBackButton = (): void => {
    if (selectedSubMenuItem) {
      SetSelectedSubMenuItem('');
    } else {
      setSelectedMenuItem('');
    }
  };

  return (
    <>
      <div className="bg-gray-200 m-auto mt-16 w-3/5 lg:w-4/12 p-6 ">
        <button type="button" onClick={() => handleBackButton()}>Back</button>
        <div className="flex flex-col space-y-4">
          {selectedMenuItem === '' && (
            <>
              <button type="button" onClick={() => setSelectedMenuItem('play')}>Play</button>
              <button type="button">How to Play</button>
              <button type="button">Settings</button>
              <button type="button">About</button>
            </>
          )}

          {selectedMenuItem === 'play' && selectedSubMenuItem === '' && (
            <>
              <button type="button" id="join-room" onClick={() => { }}>
                Join Room
              </button>
              <button type="button" id="create-room">
                Create Room
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
