import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
    margin: "0 0 10px 0",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  
    },
  },
  formField: {
    boxSizing: 'border-box',
    padding: "15px 15px",
    position: 'relative',
    top: '20px',
  },
}));