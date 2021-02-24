import { Snackbar } from "@material-ui/core";
import React from "react";
import { Alert } from "@material-ui/lab";
export default function Notifications(props) {
  const { notify, setNotify } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={notify.isOpen}
      autoHideDuration={100}
    >
      <Alert severity={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
}
