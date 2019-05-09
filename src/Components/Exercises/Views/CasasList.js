import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import hole from "../Imagenes/hole.jpg";

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
   papercasas: {
    marginTop: 10,
    padding: theme.spacing.unit * 2,
    margin: "auto"
  },
  });
export default withStyles(styles)(function Filtros(props) {
  const { Casas, classes, category,filtroamoblado, filtrobanio,
          } = props;

  return (
      <div>
         { Casas.map(([group, Casas]) =>
          !category || category === group
            ? Casas.map(
                ({
                  id,
                  banioPrivado,
                  amoblado,
                  descripcion,
                  precio,
                  tipoCasa,
                  tamanio
                }) =>
                  (!banioPrivado || banioPrivado === filtrobanio) &&
                  amoblado === filtroamoblado ? (
                    
                    <div className={classes.root}>
                      <Paper className={classes.papercasas}>
                        <Grid container spacing={16}>
                          <Grid item>
                            <ButtonBase className={classes.image}>
                              <img
                                className={classes.img}
                                alt="complex"
                                src={hole}
                              />
                            </ButtonBase>
                            {console.log("aaa")}
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={16}
                            >
                              <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                  {tipoCasa}
                                </Typography>
                                <Typography gutterBottom>
                                  {descripcion.slice(0, 50)}
                                </Typography>
                                <Typography color="textSecondary">
                                  Baño privado: {banioPrivado} | Tamaño:{" "}
                                  {tamanio} | Amoblado : {filtroamoblado}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Button style={{ flexgrow: 1 }}>Ver mas</Button>
                                <IconButton>
                                  <FavoriteIcon />
                                </IconButton>
                                <IconButton>
                                  <ShareIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle1">
                                S/. {precio}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  ) : null
              )
            : null
        )}
    </div>
      
     

);
}
);
