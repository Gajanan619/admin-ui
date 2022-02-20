import * as ActionType from "../ActionTypes/Theme/ThemeActionType";
import { IThemeState, ThemeActionCreator } from "../type";
import { LightBlueTheme } from "../ActionTypes/Theme/Theme";

const initialState: IThemeState = {
  Theme: LightBlueTheme,
  Fullscreen: false,
  MenuCollapsed: false,
};
const ThemeReducer = (
  state = initialState,
  action: ThemeActionCreator
): IThemeState => {
  switch (action.type) {
    case ActionType.UPDATETHEME:
      return { ...state, Theme: action?.themeKey };
    case ActionType.UPDATEFULLSCREENSTATUS:
      return { ...state, Fullscreen: action.fullscreen };
    case ActionType.SETMENUCOLLAPSED:
      return { ...state, MenuCollapsed: action.collapsed };
    default:
      return state;
  }
};

export default ThemeReducer;
