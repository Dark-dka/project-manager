import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const loginStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "125px",
    [theme.breakpoints.down('sm')]: {
      marginTop: "50px",
    },
  },
  container: {
    borderRadius: "24px",
    border: "1px solid #BDBDBD",
    [theme.breakpoints.down('sm')]: {
      border: "none",
    },
  },
  paper: {
    margin: theme.spacing(8, 5, 8, 5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(8, 2, 8, 2),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
	backgroundColor: theme.palette.secondary.main,
	color: "#E0E0E0"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUpText: {
    color: "#E0E0E0",
  },
  inputColor: {
	color: "#828282",
	backgroundColor: "#252329",
  },
  inputLabelColor: {
    color: "#828282",
  },
  link: {
	  color: "#2F80ED"
  },
  infoText: {
	  color: "#828282"
  },
  iconButton: {
	  borderRadius: "100%",
	  border: "1px solid #828282",
	  color: "#828282"
  },
  gridContainer: {
	  marginTop: "15px",
	  marginBottom: "15px"
  }
}));

export const LoginTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.info.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.info.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.info.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}))(TextField);
