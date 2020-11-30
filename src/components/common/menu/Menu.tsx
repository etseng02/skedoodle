import React from "react"
import MenuItem from "./MenuItem"
import { useMenuState } from "./menuState"

const Menu: React.FC = () => {
  const { state, dispatch } = useMenuState()

  return (
    <>
      <div className="bg-gray-200 h-64 m-auto mt-16 sm:w-4/5 md:w-3/5 lg:w-4/12 p-6 rounded-lg">
        {state.menu !== null || state.subMenu !== null ? (
          <button
            className="ml-0 w-10 float-left relative flex-1 justify-start text-left"
            type="button"
            onClick={() => dispatch({ type: state.subMenu ? "navigateToPreviousMenu" : "navigateToMainMenu" })}
          >
            Back
          </button>
        ) : null}

        <div className="flex flex-col space-y-4 m-2 mt-6">
          {state.menu === null ? (
            <>
              <MenuItem navigateMenu={() => dispatch({ type: "navigateToPlayMenu" })}>Play</MenuItem>
              <MenuItem navigateMenu={() => dispatch({ type: "navigateToHowToPlayMenu" })}>How to Play</MenuItem>
              <MenuItem navigateMenu={() => dispatch({ type: "navigateToSettingsMenu" })}>Settings</MenuItem>
              <MenuItem navigateMenu={() => dispatch({ type: "navigateToAboutMenu" })}>About</MenuItem>
            </>
          ) : null}

          {state.menu === "play" && state.subMenu === null ? (
            <>
              <MenuItem navigateMenu={() => {}}>Join Room</MenuItem>
              <MenuItem navigateMenu={() => {}}>Create Room</MenuItem>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Menu
