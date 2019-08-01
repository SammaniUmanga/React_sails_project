import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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

    constructor(){  
        super();  
        this.state = {  
            Category: ''
        };  
    } 

    handleChange (event) {
          this.setState({Category: event.target.value});
    } 


    render() {
        return (
            <div>
                <form className="root">
                    <h1>Add a Job Form</h1>

                    <TextField
                        id="cat"
                        label="Category"
                        className="textField"
                        name="Category"
                        // value={this.state.Category}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />

                    {/* <div className="Field">
                         <input type="text" name="Category" id="cat"  value={this.state.Category}  onChange={event => this.handleChange(event)} />      
                    </div> */}

                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    {/* <FormControl className="formControl">   
                    <label>Please Select JOB Position</label>
                        <Select
                        value={values.job}
                        onChange={handleChange}
                        inputProps={{
                          name: 'job',
                          id: 'job-simple',
                        }}
                        >
                            <MenuItem value="SEI">Intern-Software Engineer</MenuItem>
                            <MenuItem value="ASE">Associate Software Engineer</MenuItem>
                            <MenuItem value="SE">Software Engineer</MenuItem>
                            <MenuItem value="SSE">Senior Software Engineer</MenuItem>
                            <MenuItem value="TC">Tech Lead</MenuItem>
                            <MenuItem value="AR">Software Architect</MenuItem>
                        </Select>
                    </FormControl> */}
                    <label>Select JOB Position</label>
                    <div className="Field">
                         <select>
                             <option value="SEI">Intern-Software Engineer</option>
                             <option value="ASE">Associate Software Engineer</option>
                             <option value="SE">Software Engineer</option>
                             <option value="SSE">Senior Software Engineer</option>
                             <option value="TC">Tech Lead</option>
                             <option value="AR">Software Architect</option>
                         </select>
                    </div>
                   <br></br>
                   
                   <label>Expiry Date</label> <br></br>
                    <TextField
                        id="date"
                        // label="Date of Birth"
                        type="date"
                        defaultValue="2017-05-24"
                        className={useStyles.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                    <label>Degree: </label> &nbsp; &nbsp;
                    <Input
                        placeholder="BEng(hons) Software Engineering"
                        className="input"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                    <br/><br/>
  
                    <label>Description and Requirements</label>&nbsp; &nbsp;
                    <TextField
                        id="outlined-description"
                        label="Description"
                        className="textField"
                        // value={values.name}
                        // onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/><br/>


                    {/* <label>Upload Advertisement</label>
                    <div className="Field">
                         <input type="file" name="file"/>
                    </div>

                    <br></br> */}

                    


{/*                     
<RaisedButton
   containerElement='label' // <-- Just add me!
   label='My Label'>
   <input type="file" />
</RaisedButton> */}

                    <div className="Field">     
                       <Button variant="contained" color="secondary" className="button" onClick={this.props.cancelClicked}>Cancel</Button> &nbsp; &nbsp;
                       <Button variant="contained" color="primary" className="button" onClick={this.props.okClicked}>OK</Button>
                    </div>

                   
                </form>
            </div>
        );
    }
}


export default AddJob;