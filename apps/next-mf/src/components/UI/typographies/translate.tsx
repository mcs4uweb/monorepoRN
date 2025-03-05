/* eslint-disable no-restricted-imports */
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

/**
 *
 * Demos:
 *
 * - [Storybook](https://main.mui.aeries.site:6006/?path=/story/library-typographies-translate--translate)
 * - [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs/)
 * - [Typography](https://mui.com/material-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/material-ui/api/typography/)
 *
 * 
 */
export const Translate = ({ children, ...other }: MuiTypographyProps) => {

  return <MuiTypography {...other}>{children}</MuiTypography>;
};

Translate.displayName = "Translate";
