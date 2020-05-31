import React, { useState, useEffect } from 'react';
import "./Onboard.css";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoogleComponent } from 'react-google-location';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    }
  }));

function Onboard() {

    const classes = useStyles();
    
    const API_KEY = "cool";  // how to get key - step are below

    const instituteType = [
        {
            id: 1,
            label: 'Tuition'
        },
        {
            id: 2,
            label: 'School'
        },
        {
            id: 3,
            label: 'College'
        }
    ];

    const workingDays = [
        {
            id: 1,
            label: 'Monday'
        },
        {
            id: 2,
            label: 'Tuesday'
        },
        {
            id: 3,
            label: 'Wednesday'
        },
        {
            id: 4,
            label: 'Thursday'
        },
        {
            id: 5,
            label: 'Friday'
        },
        {
            id: 6,
            label: 'Saturday'
        },
        {
            id: 7,
            label: 'Sunday'
        }
    ];

    const [onboardData, setonboardData] = useState({
        instituteName: '',
        instituteType: '',
        onwerName: '',
        workingDays: []
    });
    const [allInstituteTypes, setallInstituteTypes] = useState([]);
    const [allWorkingDays, setallWorkingDays] = useState([]);
    const [startHour, setstartHour] = useState(new Date());
    const [closeHour, setcloseHour] = useState(new Date());
    const [location, setlocation] = useState(null);

    const getOnBoardData = (e) => {
        setonboardData({ ...onboardData, [e.target.name]: e.target.value });
        console.log(onboardData);
    }

    useEffect(() => {
        setallInstituteTypes(instituteType);
        setallWorkingDays(workingDays);
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                        <h5 style={{ color: "#B99E01" }}><i className="fa fa-graduation-cap"></i>On<span style={{ color: "black" }}>board</span></h5>
                        <p><span style={{ color: "#B99E01" }}>Welcome ! Please provide your</span> detailsto get onboarded.</p>
                        <form>
                            <TextField name="instituteName" value={onboardData.instituteName} onChange={getOnBoardData} style={{ width: "70%" }} id="standard-basic" label="Institute Name" /><br /><br />
                            <TextField name="onwerName" value={onboardData.onwerName} onChange={getOnBoardData} style={{ width: "70%" }} id="standard-basic" label="Owner Name" /><br /><br />

                            <FormControl className={classes.formControl} style={{ width: "70%" }}>
                                <InputLabel id="demo-simple-select-label">Institute Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={onboardData.instituteType}
                                    onChange={getOnBoardData}
                                    inputProps={{
                                        name:"instituteType"
                                      }}
                                    // name="instituteType"
                                >
                                    {allInstituteTypes.map((option, index) => (
                                        <MenuItem key={option.id} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl><br /><br />
                            <FormControl style={{ width: "70%" }}>
                                <InputLabel id="demo-mutiple-chip-label">Working Days</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={onboardData.workingDays}
                                    onChange={getOnBoardData}
                                    name="workingDays"
                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                >
                                    {allWorkingDays.map((option, index) => (
                                        <MenuItem key={option.id} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl><br /><br />
                            <p>Start Hours</p>
                            <DatePicker
                                selected={startHour}
                                onChange={date => setstartHour(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            /><br /><br />
                            <p>Close Hours</p>
                            <DatePicker
                                selected={closeHour}
                                onChange={date => setcloseHour(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            /><br /><br />
                            <p>Location</p>
                            <GoogleComponent
                                apiKey={API_KEY}
                                language={'en'}
                                country={'country:in|country:us'}
                                coordinates={true}
                                locationBoxStyle={'custom-style'}
                                locationListStyle={'custom-style-list'}
                                onChange={e => setlocation(e)} /><br /><br />
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Onboard
