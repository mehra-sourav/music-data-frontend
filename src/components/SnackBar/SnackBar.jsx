import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * A wrapper component for MUI's snackbar component
 */
function SnackBar({ msg, open, onClose: handleClose }) {
  const isSuccessMsg = msg?.includes("successfully");
  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={isSuccessMsg ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
