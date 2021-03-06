import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      nuevaCasa: {
        descripcion: "",
        distrito: "",
        ciudad: "",
        tamanio: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = descripcion => ({ target: { value } }) => {
      this.setState({
        nuevaCasa: {
          ...this.state.nuevaCasa,
          [descripcion]: value
        }
      });
    };

    handleSubmit = () => {
      const { nuevaCasa } = this.state;
      this.props.onCreate({
        ...nuevaCasa,
        id: nuevaCasa.tamanio
      });

      this.setState({
        open: false,
        nuevaCasa: {
          descripcion: "",
          distrito: "",
          ciudad: "",
          tamanio: ""
        }
      });
    };

    render() {
      const {
          open,
          nuevaCasa: { descripcion, distrito, ciudad, tamanio }
        } = this.state,
        {
          classes,
          categoriasDistrito: categoriesdis,
          tiposcasa: tiposcasa
        } = this.props;
      return (
        <React.Fragment>
          <Button
            variant="outlined"
            onClick={this.handleToggle}
            color="secondary"
          >
            Gana dinero
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">
              Quieres Ganar dinero con tu hogar
            </DialogTitle>

            <DialogContent>
              <DialogContentText>
                Por favor llena los siguientes detalles
              </DialogContentText>
            </DialogContent>
            <FormControl
              variant="outlined"
              margin="normal"
              className={classes.formControl}
            >
              <InputLabel htmlFor="distrito">Vivienda</InputLabel>
              <Select value={distrito} onChange={this.handleChange("distrito")}>
                {tiposcasa.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              margin="normal"
              className={classes.formControl}
            >
              <InputLabel htmlFor="distrito">Vivienda</InputLabel>
              <Select value={distrito} onChange={this.handleChange("distrito")}>
                {tiposcasa.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Dialog>
        </React.Fragment>
      );
    }
  }
);
