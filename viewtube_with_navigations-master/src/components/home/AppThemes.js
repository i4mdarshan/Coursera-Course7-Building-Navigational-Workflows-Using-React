import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const viewTubeTheme = responsiveFontSizes(createTheme({
  palette: {
    type: "dark",
    spacing: 4,
    primary: {
      main: "#017486"
    },
    secondary: {
      main: "#fb9314"
    },
    background: {
      default: "#272822",
      paper: "#424242"
    }
  },
}));

export {
  viewTubeTheme,
}
