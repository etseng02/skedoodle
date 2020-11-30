import { useReducer } from "react"

interface MenuActionType {
  type: string
}

interface MenuStateType {
  menu: string | null
  subMenu: string | null
}

const initialMenuState = {
  menu: null,
  subMenu: null,
}

const menuStateReducer = (state: MenuStateType, action: MenuActionType) => {
  switch (action.type) {
    case "navigateToMainMenu": {
      return {
        ...state,
        menu: null,
        subMenu: null,
      }
    }
    case "navigateToPreviousMenu": {
      return {
        ...state,
        subMenu: null,
      }
    }
    case "navigateToPlayMenu": {
      return {
        ...state,
        menu: "play",
      }
    }
    case "navigateToHowToPlayMenu": {
      return {
        ...state,
        menu: "howToPlay",
      }
    }
    case "navigateToSettingsMenu": {
      return {
        ...state,
        menu: "settings",
      }
    }
    case "navigateToAboutMenu": {
      return {
        ...state,
        menu: "about",
      }
    }
  }
  return state
}

export const useMenuState = () => {
  const [state, dispatch] = useReducer(menuStateReducer, initialMenuState)
  return { state, dispatch }
}
