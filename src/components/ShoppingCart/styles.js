import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
    },
  },
  paper: {
    // padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));