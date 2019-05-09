import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialogs/NewHouse";
import CreateDialog2 from "../Exercises/Dialogs/VerCasa";

export default ({ categoriasDistrito, onNuevaCasaCreate, tiposcasa }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Enkassa
      </Typography>
      <CreateDialog
        categoriasDistrito={categoriasDistrito}
        onCreate={onNuevaCasaCreate}
        tiposcasa={tiposcasa}
      />
      <CreateDialog2 />
    </Toolbar>
  </AppBar>
);
