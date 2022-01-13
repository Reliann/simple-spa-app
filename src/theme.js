import { createTheme } from '@mui/material/styles';
import {purple,deepPurple} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode:"light",
    primary:purple,
    secondary:deepPurple
  },
});
export default theme