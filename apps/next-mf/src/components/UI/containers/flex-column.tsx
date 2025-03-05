import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { forwardRef } from "react";

/**
 *
 * Demos:
 *
 * - [Box (Material UI)](https://mui.com/material-ui/react-box/)
 * - [Box (MUI System)](https://mui.com/system/react-box/)
 *
 * API:
 *
 * - [Box API](https://mui.com/system/api/box/)
 *
 * 
 */
export const FlexColumn = forwardRef(({ children,sx, ...other }: MuiBoxProps, ref) => (
  <MuiBox sx={{ display: "flex", flexDirection: "column" , ...sx}} {...other} ref={ref}>
    {children}
  </MuiBox>
));
