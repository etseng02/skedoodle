import React, { useState } from "react"
import MenuItem from "./MenuItem"

const Menu: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState<string | null>(null)

  const handleBackButton = (): void => {
    if (selectedSubMenuItem) {
      setSelectedSubMenuItem(null)
    } else {
      setSelectedMenuItem(null)
    }
  }

  return (
    <>
      <div className="bg-gray-200 h-64 m-auto mt-16 sm:w-4/5 md:w-3/5 lg:w-4/12 p-6 rounded-lg">
        {selectedMenuItem !== null || selectedSubMenuItem !== null ? (
          <button className="ml-0 w-10 float-left relative flex-1 justify-start text-left" type="button" onClick={() => handleBackButton()}>
            Back
          </button>
        ) : null}

        <div className="flex flex-col space-y-4 m-2 mt-6">
          {selectedMenuItem === null && (
            <>
              <MenuItem navigateMenu={() => setSelectedMenuItem("play")}>Play</MenuItem>
              <MenuItem navigateMenu={() => setSelectedMenuItem("how to play")}>How to Play</MenuItem>
              <MenuItem navigateMenu={() => setSelectedMenuItem("settings")}>Settings</MenuItem>
              <MenuItem navigateMenu={() => setSelectedMenuItem("about")}>About</MenuItem>
            </>
          )}

          {selectedMenuItem === "play" && selectedSubMenuItem === null && (
            <>
              <MenuItem navigateMenu={() => setSelectedSubMenuItem("join room")}>Join Room</MenuItem>
              <MenuItem navigateMenu={() => setSelectedSubMenuItem("create room")}>Create Room</MenuItem>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Menu
