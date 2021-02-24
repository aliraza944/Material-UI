import React from "react";
import { makeStyles } from "@material-ui/core";
const styles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});
function SideMenu() {
  const classes = styles();
  return (
    <div className={classes.sideMenu}>
      <h1>side menu</h1>
    </div>
  );
}
export default SideMenu;
