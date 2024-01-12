import { createTheme } from "@mui/material";
import { buttonTextColor, mainThemeColor } from "./app.config";

const customTheme = createTheme({
	palette: {
		primary: {
			main: mainThemeColor,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: buttonTextColor,
				},
			},
		},
	},
});

export default customTheme;
