import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
import axios from 'axios';



import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



import './AddJob.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
    input: {
        display: 'none',
        margin: theme.spacing(1),
    },
}));


class AddJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Category: '',
            Position: '',
            ExpDate: '',
            Company: '',
            Description: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
          });
    }

    handleSubmit(event) {
        console.log('category===>', this.state.Category);
        console.log('Position===>', this.state.Position);
        console.log('ExpDate===>', this.state.ExpDate);
        console.log('ExpDate===>', this.state.Company);
        console.log('Description===>', this.state.Description);
        event.preventDefault();

        //API call for add jobs
        axios.post('http://localhost:1337/api/Jobs/addjob', this.state)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    render() {
        return (
        

     <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Post A JOB
      </Typography>
      <form onSubmit={this.handleSubmit}>
      <Grid container spacing={3} >
        <Grid item xs={12} >
                        <TextField
                            required
                            id="category"
                            label="JOB Category- IT/HR/Finance"
                            name="Category"
                            // className="textField"
                            value={this.state.Category}
                            onChange={this.handleChange}
                            fullWidth
                            autoComplete="category"
                        /> 
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className="formControl">   
                    <label>Please Select JOB Position</label>
                        <Select
                            name="Position"
                            value={this.state.Position}
                            onChange={this.handleChange}
                            // inputProps={{
                            //   name: 'job',
                            //   id: 'job-simple',
                            // }}
                        >
                            <MenuItem value="SEI">Intern-Software Engineer</MenuItem>
                            <MenuItem value="ASE">Associate Software Engineer</MenuItem>
                            <MenuItem value="SE">Software Engineer</MenuItem>
                            <MenuItem value="SSE">Senior Software Engineer</MenuItem>
                            <MenuItem value="TC">Tech Lead</MenuItem>
                            <MenuItem value="AR">Software Architect</MenuItem>
                        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>JOB Expiry Date</label>
        <br></br><br></br>
                        <TextField
                            required
                            id="date"
                            // label="Expiry Date"
                            type="date"
                            name="ExpDate"
                            // defaultValue="2017-05-24"
                            value={this.state.ExpDate}
                            onChange={this.handleChange}
                            className={useStyles.textField}
                            fullWidth
                            // autoComplete="date" 
                            // InputLabelProps={{
                            //     shrink: false,
                            // }}
                        />
         
        </Grid>
        <Grid item xs={12}>
                           <TextField
                           required
                           id="comp"
                           name="Company"
                           label="Company"
                           value={this.state.Company}
                           onChange={this.handleChange}
                           fullWidth
                           // autoComplete="cmpy"
                           />
        </Grid>
        <Grid item xs={12}>
                           <TextField
                           id="outlined-description"
                           label="Description"
                           className="textField"
                           name="Description"
                           value={this.state.Description}
                           onChange={this.handleChange}
                           margin="normal"
                           variant="outlined"
                           fullWidth
                           // autoComplete="des"
                           />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="All Details are checked"
          />
         </Grid>

        <div className="Field">     
                        <Button variant="contained" color="secondary" className="button" onClick={this.props.cancelClicked}>Cancel</Button> &nbsp; &nbsp;
                        <Button variant="contained" color="primary" className="button" onClick={this.props.okClicked} type="submit" value="Submit"  >OK</Button>
        </div>
      </Grid>
      </form>
    </React.Fragment>
        );
    }
}


export default AddJob;