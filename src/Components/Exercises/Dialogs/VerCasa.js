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
import Slide from "@material-ui/core/Slide";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    render() {
      const { open } = this.state,
        { classes, descripcioncasa, tipocasa, tamanioCasa } = this.props;
      return (
        <React.Fragment>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleToggle}
          >
            Ver casa
          </Button>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleToggle}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {descripcioncasa}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                AÑADIR A FAVORITOS
              </Button>
              <Button onClick={this.handleClose} color="primary">
                RESERVAR
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }
  }
);
