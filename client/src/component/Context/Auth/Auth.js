import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useAccess from "../../../hook/useAccess.hook";
import { useAuth } from "../../../hook/useAuth.hook";


export const AuthContext = React.createContext(false);

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function Auth() {
  const { auth, login, error } = useAuth();
  const router = useAccess(auth);
  const [, setOpen] = React.useState(false);

  
  const handleClose = () => {

    setOpen(false);
  };
  return (
    <AuthContext.Provider value={{ auth, login, error }}>
      <Router>
        {router}
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </Router>
    </AuthContext.Provider>
  );
}
