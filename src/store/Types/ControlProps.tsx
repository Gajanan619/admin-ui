declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: [
  "start",
  "end",
  "center",
  "space-around",
  "space-between"
];


export interface CustomRowProps {
  key: string;
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  align?: typeof RowAligns[number];
  justify?: typeof RowJustify[number];
  classname?: string;
}

export interface CustomColProps {
  key: string;
  children: React.ReactNode;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  classname?: string;
}
