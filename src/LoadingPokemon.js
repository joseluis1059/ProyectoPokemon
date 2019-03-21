import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
class LoadingPokemon extends Component {

    constructor(props){
        super(props);
        this.state={
            gribList: [
                {
                        id:0,
                        img: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2018/05/pikachu.jpg?resize=1080%2C600&quality=90&ssl=1',
                        name: 'Pikachu',
                        Owner: 'Ash',
                        weight:'15lbs',
                        height:'40cm',
                        catchrate:'134',
                        Type:[{typ:""},{typ:""}]
                        ,gender:'male'
                 }
                 ,
                  {
                    id:1,
                    img: 'https://cdn.dribbble.com/users/1787323/screenshots/4458591/dribbbe_bulbasaur-01.png',
                    name: 'Bulbasaur',
                    Owner: 'Ash',
                    weight:'23lbs',
                    height:'35cm',
                    catchrate:'124',
                    Type:[{typ:""},{typ:""}]
                    ,gender:'male'
                  }
                  ,
                  {
                    id:2,
                    img: 'https://static.turbosquid.com/Preview/2014/07/08__22_01_54/charmander.jpg6c8e2e64-871f-4272-8f23-f813fa8f3495Large.jpg',
                    name: 'Charmander',
                    Owner: 'Ash',
                    weight:'50lbs',
                    height:'70cm',
                    catchrate:'876',
                    Type:[{typ:""},{typ:""}]
                    ,gender:'male'
                  }
                  ,
                  {
                    id:3,
                    img: 'https://pm1.narvii.com/6159/3ef6c4a73a478bb9c7de0bcd6bab6c085bbc2923_hq.jpg',
                    name: 'Squirtle',
                    Owner: 'Ash',
                    weight:'30lbs',
                    height:'45cm',
                    catchrate:'212',
                    Type:[{typ:""},{typ:""}]
                    ,gender:'male'
                  }
                  ,
                  {
                    id:4,
                    img: 'https://pm1.narvii.com/6159/3ef6c4a73a478bb9c7de0bcd6bab6c085bbc2923_hq.jpg',
                    name: 'Charizar',
                    Owner: 'Ash',
                    weight:'250lbs',
                    height:'2.05m',
                    catchrate:'567',
                    Type:[{typ:""},{typ:""}]
                    ,gender:'male'
                  },
                 
              ],
              open:false,
              open1:false,
              index:5,
                    img: '',
                    name: '',
                    Owner: 'Ash',
                    weight:'',
                    height:'',
                    catchrate:'',
                    typ1:'',
                    typ2:'',
              actualpokemon:[
                {
                  id:0,
                    img: '',
                    name: '',
                    Owner: '',
                    weight:'',
                    height:'',
                    catchrate:'',
                    Type:[{typ:""},{typ:""}]
                }
              ]
              
              
          }
    }
    
  handleClickOpen = (num) => {
    
    if(num==-1){
      this.setState({ open1: true });
    }else{
      this.setState({actualpokemon:this.state.gribList[num]});
      this.setState({ open: true });
    }
    
      console.log(num);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ open1: false });
    
  };
  clean=()=>{
    this.setState({ name: "" });
    this.setState({ height: "" });
    this.setState({ weight: "" });
    this.setState({ gender: "" });
    this.setState({ catchrate: "" });
    this.setState({ owner: "" });
    this.setState({ img: "" });
    this.setState({ tpy1: "" });
    this.setState({ tpy2: "" });
    
  }
  AddPokemons=()=>{
    this.AddPokemon();
    this.increment();
    this.clean();
    this.handleClose();
  }
  evaluate=()=>{
    if(this.state.index !='' && this.state.name !=''&&this.state.Owner!=''&&this.state.img!=''&& this.state.height!=''&&this.state.weight!=''
      &&this.state.catchrate!=''&&this.state.gender!=''){
      
        return true;
      
    }else{
      console.log("index "+this.state.index+" Name "+this.state.name);
      console.log("owner "+this.state.Owner+" img "+this.state.img);
      console.log("height "+this.state.height+" weight "+this.state.weight);
      console.log("catchrate "+this.state.catchrate+" gender "+this.state.gender);
    }

    return false
  }
  AddPokemon=()=>{
if(this.evaluate()){
  const newPokemon={
    id:this.state.index,
    name:this.state.name,
    owner:this.state.Owner,
    img:this.state.img,
    height:this.state.height,
    weight:this.state.weight,
    catchrate:this.state.catchrate,
    gender:this.state.gender,
  }  
const currentGribList=this.state.gribList;
currentGribList.push(newPokemon);
this.setState({gribList:currentGribList});
}else{
  console.log("problemas");
}
        
  }
  

  increment=()=>{
    this.setState({index: this.state.index+1});
  }
    render() {
      return (
        <div>
            <GridList cellHeight={250} style={{ height: '800px' , width:'800px'}}>
              {this.state.gribList.map(tile => (
                <GridListTile key={tile.id  }>
                  <img src={tile.img}  alt={tile.name} />
                  <GridListTileBar
                    name={tile.name}
                    subtitle={<span>by: {tile.Owner}</span>}
                    actionIcon={
                      <IconButton className="icon" onClick={(id)=>this.handleClickOpen(tile.id)}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
              <GridListTile key="adding">
                  <img src="http://endlessicons.com/wp-content/uploads/2012/12/add-icon-614x460.png"  alt='ADD' />
                  <GridListTileBar
                    name="Add"
                    subtitle={<span>by:Adding</span>}
                    actionIcon={
                      <IconButton className="icon" onClick={(id)=>this.handleClickOpen(-1)}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
            </GridList>

            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-name"
        >
          <DialogTitle id="form-dialog-name">{this.state.actualpokemon.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <img src={this.state.actualpokemon.img}  alt={this.state.actualpokemon.name} width='250px'/>
            </DialogContentText>
            
                <br/>
            <InputLabel >Name:<strong>{this.state.actualpokemon.name}</strong></InputLabel>
            <br/>
            <InputLabel >Owner:<strong>{this.state.actualpokemon.Owner}</strong></InputLabel>
            <br/>
            <InputLabel >Height:<strong>{this.state.actualpokemon.height}</strong></InputLabel>
            <br/>
            <InputLabel >Weight:<strong>{this.state.actualpokemon.weight}</strong></InputLabel>
            <br/>
            <InputLabel >gender:<strong>{this.state.actualpokemon.gender}</strong></InputLabel>
            <br/>
            <InputLabel >catch rate:<strong>{this.state.actualpokemon.catchrate}</strong></InputLabel>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Okay
            </Button>
            
          </DialogActions>
        </Dialog>



        <Dialog
          open={this.state.open1}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-"
        >
          <DialogTitle id="form-dialog-">Adding New Pokemon</DialogTitle>
          <DialogContent>
                <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              name="name"
              onChange={this.handleChange}
              fullWidth 
              required
            />
             <TextField
              autoFocus
              margin="dense"
              id="img"
              label="img"
              name="img"
              onChange={this.handleChange}
              fullWidth 
              required
            />
             <TextField
              autoFocus
              margin="dense"
              id="height"
              label="height"
              name="height"
              onChange={this.handleChange}
              fullWidth 
              required
            />
             <TextField
              autoFocus
              margin="dense"
              id="weight"
              label="weight"
              name="weight"
              onChange={this.handleChange}
              fullWidth 
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="gender"
              label="gender"
              name="gender"
              onChange={this.handleChange}
              fullWidth 
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="catch-rate"
              label="catch-rate"
              name="catchrate"
              onChange={this.handleChange}
              fullWidth 
              required
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.AddPokemons} color="primary">
              Okay
            </Button>
            
          </DialogActions>
        </Dialog>


          </div>
        
      );
    }
 
  }


 
  export default LoadingPokemon;
 


/**
 * http://endlessicons.com/wp-content/uploads/2012/12/add-icon-614x460.png
 * 
 * import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

TextField example for dialog
<TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />

 <InputLabel >Age</InputLabel>
                <Select
                  value={this.state.age}
                  input={<Input id="age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select> 


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     Owner: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
 * 
 * 
 * 
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */