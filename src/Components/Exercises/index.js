import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";


import red from "@material-ui/core/colors/red";




import Mapa from "./Views/Mapa";
import Filtros from "./Views/Filtros";
import CasasList from "./Views/CasasList"
function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false
    }
  });
}

const styles = theme => ({
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 500,
    overflowY: "auto"
  },
  papermapa: {
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 500,
    overflowY: "auto"
  },
  papercasas: {
    marginTop: 10,
    padding: theme.spacing.unit * 2,
    margin: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  card: {
    marginBottom: 20
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  image: {
    width: 256,
    height: 128,
    marginRight: 10
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  
});

export default withStyles(styles)(
  ({
    classes,
    Casas,
    category,
    onSelect,
    filtrobanio,
    filtroamoblado,
    filtroprecio,
    onCheckBanio,
    onCheckAmoblado,
    onCheckPrecio,
    banioPrivado,
    coordenadas,
    tipoCasa,
    mapa,
    
    casa: { id = "Hola", descripcion = "Elije un filtro", tamanio = "000" }
  }) => (
    <Grid container xs>
      <Grid item xs={3}>
        
          <Filtros filtroprecio={filtroprecio} 
                  onCheckBanio={onCheckBanio} 
                  onCheckAmoblado={onCheckAmoblado} 
                  onCheckPrecio={onCheckPrecio} />
        
      </Grid>

      <Grid item xs={6}>
          <CasasList Casas={Casas} 
                    category={category} 
                    filtrobanio={filtrobanio} 
                    filtroamoblado={filtroamoblado}/>
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.papermapa}>
        <React.Fragment style={classes.mapa}>
          <Mapa/>
          </React.Fragment>
       
        </Paper>
      </Grid>
    </Grid>
  )
);
