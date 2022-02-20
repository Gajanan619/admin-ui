import * as actionTypes from "../../ActionTypes/Theme/ThemeActionType";
import {
  FullScreenUpdateAction,
  MenuCollapsedAction,
  ThemeActionCreator,
  ThemeDispatch,
} from "../../type";

export function UpdateTheme(action: ThemeActionCreator) {
  return (dispatch: ThemeDispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export const UpdateFullScreenStatus = (
  fullscreen: boolean
): FullScreenUpdateAction => {
  return {
    type: actionTypes.UPDATEFULLSCREENSTATUS,
    fullscreen: fullscreen,
  };
};

export const UpdateMenuCollapsed = (
  Collapsed: boolean
): MenuCollapsedAction => {
  return {
    collapsed: Collapsed,
    type: actionTypes.SETMENUCOLLAPSED,
  };
};
