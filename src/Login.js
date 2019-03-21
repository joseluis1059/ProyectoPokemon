 import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonList from './PokemonList';
import { Redirect } from 'react-router-dom'

class FormDialog extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        email:'',
        pass:'',
        redirect:false
      };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect && this.evaluate()) {
      return <Redirect to='./PokemonList' />
    }
  }

  evaluate=()=>{
      if((this.state.email==='Ash Ketchum'|| this.state.email==='ash@pokemon.com')&& this.state.pass==='pokedex'){
        console.log('TODO BIEN');
        return true;
      }
      if((this.state.email==='Misty'|| this.state.email==='misty@pokemon.com,')&& this.state.pass==='paleta'){
        console.log('TODO BIEN');
        return true;
      }
      console.log('Email '+this.state.email+' Pass '+this.state.pass);
      return false;
         
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
          {this.renderRedirect()}
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login </DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="UserName or Email Address"
              name="email"
              onChange={this.handleChange}
              type="email"
              
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Password"
              name="pass"
              onChange={this.handleChange}
              type="Password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.setRedirect} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default (FormDialog);