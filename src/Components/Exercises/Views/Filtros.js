import React from 'react';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";



const styles = theme => ({
    formControl: {
    margin: theme.spacing.unit * 3
  },
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 500,
    overflowY: "auto"
  },
  });
export default withStyles(styles)(function Filtros(props) {
  const { filtroprecio, classes, onCheckBanio, onCheckAmoblado, onCheckPrecio } = props;

  return (
    <Paper className={classes.paper}>
     <Typography variant="h5">Servicios</Typography>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Baño privado</FormLabel>
            <RadioGroup
              row
              name="gender2"
              className={classes.group}
              onChange={event => onCheckBanio(event.target.value)}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                label="Si"
                labelPlacement="start"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
                labelPlacement="start"
              />
            </RadioGroup>
            <FormHelperText>Se comparten baño</FormHelperText>
          </FormControl>
          <Divider variant="middle" />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Amoblado</FormLabel>
            <RadioGroup
              row
              name="gender2"
              className={classes.group}
              onChange={event => onCheckAmoblado(event.target.value)}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                label="Si"
                labelPlacement="start"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
                labelPlacement="start"
              />
            </RadioGroup>
            <FormHelperText>Tiene muebles</FormHelperText>
          </FormControl>
          <Divider variant="middle" />

          <Typography variant="h5">Precio</Typography>

          <React.Fragment>
            <form
              className={classes.root}
              autoComplete="off"
              onChange={console.log("sdas")}
            >
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                  Min - Max
                </InputLabel>
                <Select
                  value={filtroprecio}
                  onChange={event => onCheckPrecio(event.target.value)}
                  input={<Input name="age" id="age-label-placeholder" />}
                  displayEmpty
                  name="age"
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={0}>0000 - 0499</MenuItem>
                  <MenuItem value={500}>0500 - 0999</MenuItem>
                  <MenuItem value={1000}>1000 - 9999</MenuItem>
                </Select>
                <FormHelperText>Precio Minimo - Precio Maximo</FormHelperText>
              </FormControl>
            </form>
            <Divider variant="middle" />
          </React.Fragment>
        </Paper>

  );
}
);


