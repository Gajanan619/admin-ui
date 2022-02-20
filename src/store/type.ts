import { theme } from "./ActionTypes/Theme/Theme";
import {
  SETMENUCOLLAPSED,
  UPDATEFULLSCREENSTATUS,
  UPDATETHEME,
} from "./ActionTypes/Theme/ThemeActionType";

//States
export interface IThemeState {
  Theme: theme;
  Fullscreen: boolean;
  MenuCollapsed: boolean;
}

//Action Creator

export interface ThemeUpdateAction {
  type: typeof UPDATETHEME;
  themeKey: theme;
}

export interface FullScreenUpdateAction {
  type: typeof UPDATEFULLSCREENSTATUS;
  fullscreen: boolean;
}

export interface MenuCollapsedAction {
  type: typeof SETMENUCOLLAPSED;
  collapsed: boolean;
}

export type ThemeActionCreator =
  | ThemeUpdateAction
  | FullScreenUpdateAction
  | MenuCollapsedAction;

export type ThemeDispatch = (args: ThemeActionCreator) => ThemeActionCreator;

export type AppState = IThemeState;
export type AppAction = ThemeActionCreator;
export type AppDispatch = ThemeDispatch;
