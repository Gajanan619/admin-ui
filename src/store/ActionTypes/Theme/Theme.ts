export const DARK: string = "light";
export const LIGHT: string = "dark";

export declare const Themetype: ["light", "dark"];
export declare const ThemeColor: [
  "blue",
  "green",
  "purple",
  "cyan",
  "orange",
  "red",
  "pink",
  "teal",
  "brown"
];

export interface theme {
  title: string;
  themestyle: typeof Themetype[number];
  themecolor: typeof ThemeColor[number];

  primary: string;
  secondary: string;
  primary_text: string;
  extracolor1: string;
  extracolor2: string;
  extracolor3: string;
}

export const dark_success_bg = "#162312";
export const dark_success_color = "#49aa19";
export const dark_info_bg = "#111b26";
export const dark_info_color = "#177ddc";
export const dark_warning_bg = "#2b2111";
export const dark_warning_color = "#d89614";
export const dark_error_bg = "#2a1215";
export const dark_error_color = "#a61d24";

export const light_success_bg = "#f6ffed";
export const light_success_color = "#52c41a";
export const light_info_bg = "#e6f7ff";
export const light_info_color = "#1890ff";
export const light_warning_bg = "#fffbe6";
export const light_warning_color = "#faad14";
export const light_error_bg = "#fff2f0";
export const light_error_color = "#ff4d4f";

//For danger
export const light_danger_bg = "#ff4d4f";
export const light_danger_bg_secondary = "#ff7875";

export const dark_danger_bg = "#a61d24";
export const dark_danger_bg_secondary = "#800f19";

//Others
export const borderRadiusVal = "1.6rem";
export const smallBorderRadiusVal = "0.8rem";

export const lightBg = "#ffffff";
export const darkBg = "#161c24";
export const bordercolor = "#919EAB";

export const light_font_color = "#212b36";
export const dark_font_color = "#ffffff";

export const light_shadow_color = "145, 158, 171";
export const dark_shadow_color = "0, 0, 0";

export const common_color_1 = "#ffffff";

export const common_light_extra_color_4 = "#212B36";
export const common_dark_extra_color_4 = "#ffffff";

export const common_light_extra_color_5 = "#637381";
export const common_dark_extra_color_5 = "#919EAB";

export const common_light_extra_color_6 = "#212B36";
export const common_dark_extra_color_6 = "#FFFFFF";

export const common_light_extra_color_7 = "#919EAB";
export const common_dark_extra_color_7 = "#637381";

export const common_light_extra_color_8 = "#ffffff";
export const common_dark_extra_color_8 = "#212b36";

export const common_light_extra_color_9 = "#F4F6F8";
export const common_dark_extra_color_9 = "#919EAB";

//1. Blue
export const LightBlueTheme: theme = {
  title: "light-blue",
  themestyle: "light",
  themecolor: "blue",

  primary: "#265FD5",
  secondary: "#3A73D5",
  primary_text: "#161C24",
  extracolor1: "#265FD5",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkBlueTheme: theme = {
  title: "dark-blue",
  themestyle: "dark",
  themecolor: "blue",

  primary: "#265FD5",
  secondary: "#3A73D5",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//2. Green
export const LightGreenTheme: theme = {
  title: "light-green",
  themestyle: "light",
  themecolor: "green",

  primary: "#00AB55",
  secondary: "#007B55",
  primary_text: "#161C24",
  extracolor1: "#00AB55",
  extracolor2: "#FFFFFF",
  extracolor3: "#919EAB",
};

export const DarkGreenTheme: theme = {
  title: "dark-blue",
  themestyle: "dark",
  themecolor: "green",

  primary: "#00AB55",
  secondary: "#007B55",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#919EAB",
};

//3. Purple
export const LightPurpleTheme: theme = {
  title: "light-purple",
  themestyle: "light",
  themecolor: "purple",

  primary: "#7635dd",
  secondary: "#431A9E",
  primary_text: "#161C24",
  extracolor1: "#7635dd",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkPurpleTheme: theme = {
  title: "dark-purple",
  themestyle: "dark",
  themecolor: "purple",

  primary: "#7635dd",
  secondary: "#431A9E",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//4. Cyan
export const LightCyanTheme: theme = {
  title: "light-cyan",
  themestyle: "light",
  themecolor: "cyan",

  primary: "#1ccaff",
  secondary: "#0E77B7",
  primary_text: "#161C24",
  extracolor1: "#1ccaff",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkCyanTheme: theme = {
  title: "dark-cyan",
  themestyle: "dark",
  themecolor: "cyan",

  primary: "#1ccaff",
  secondary: "#0E77B7",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//5. Orange
export const LightOrangeTheme: theme = {
  title: "light-orange",
  themestyle: "light",
  themecolor: "orange",

  primary: "#fda92c",
  secondary: "#B66816",
  primary_text: "#161C24",
  extracolor1: "#fda92c",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkOrangeTheme: theme = {
  title: "dark-orange",
  themestyle: "dark",
  themecolor: "orange",

  primary: "#fda92c",
  secondary: "#B66816",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//6. Red
export const LightRedTheme: theme = {
  title: "light-red",
  themestyle: "light",
  themecolor: "red",

  primary: "#ff2f2f",
  secondary: "#B71833",
  primary_text: "#161C24",
  extracolor1: "#ff2f2f",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkRedTheme: theme = {
  title: "dark-red",
  themestyle: "dark",
  themecolor: "red",

  primary: "#ff2f2f",
  secondary: "#B71833",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//7. Pink
export const LightPinkTheme: theme = {
  title: "light-pink",
  themestyle: "light",
  themecolor: "pink",

  primary: "#ED5782",
  secondary: "#CD1A57",
  primary_text: "#161C24",
  extracolor1: "#ED5782",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkPinkTheme: theme = {
  title: "dark-pink",
  themestyle: "dark",
  themecolor: "pink",

  primary: "#ED5782",
  secondary: "#CD1A57",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//8. Teal
export const LightTealTheme: theme = {
  title: "light-teal",
  themestyle: "light",
  themecolor: "teal",

  primary: "#00bdaa",
  secondary: "#008478",
  primary_text: "#161C24",
  extracolor1: "#00bdaa",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkTealTheme: theme = {
  title: "dark-teal",
  themestyle: "dark",
  themecolor: "teal",

  primary: "#00bdaa",
  secondary: "#008478",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};

//9. Brown
export const LightBrownTheme: theme = {
  title: "light-brown",
  themestyle: "light",
  themecolor: "brown",

  primary: "#795548",
  secondary: "#6A4B3F",
  primary_text: "#161C24",
  extracolor1: "#795548",
  extracolor2: "#FFFFFF",
  extracolor3: "#FFFFFF",
};

export const DarkBrownTheme: theme = {
  title: "dark-brown",
  themestyle: "dark",
  themecolor: "brown",

  primary: "#795548",
  secondary: "#6A4B3F",
  primary_text: "#FFFFFF",
  extracolor1: "#161C24",
  extracolor2: "#212B36",
  extracolor3: "#FFFFFF",
};
