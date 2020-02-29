import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import logo from './logo.png';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Chart } from 'react-charts'
import Slider from '@material-ui/core/Slider';


const colorScheme = {
    primary: "#FED500",
    secondary: "#ED1B23",
}

const dashboardStyles = {
    page: {
        height: "100%",
    },
    header: {
        backgroundColor: colorScheme.primary,
        // position: "fixed",
        // top: "0",
        padding: "3%",
        minHeight: "10%",
        width: "100%",
    },
    item: {
        padding: "3%"
    },
    paper: {
        minWidth: 200,
        minHeight: 230,
        overflow: 'auto',
    },
};

const PrettoSlider = withStyles({
    root: {
        color: colorScheme.primary,
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            failureState: false,
            probabilityOfFailure: null,
            predictionData: [],
            anomalyData: [],
            sliderValue: 0,
        }
    }

    render() {
        return (
            <Grid xs={12} style={dashboardStyles.page}>

                <Grid item xs={12} style={dashboardStyles.header}>

                    {/* <img src={logo} alt={"Logo"}/> */}
                </Grid>

                <Grid container xs={12} >
                    <Grid item xs={6} style={dashboardStyles.item}>
                        <Typography variant="h5" component="h5" noWrap={true} align="center">
                            System status messages
                        </Typography>
                    </Grid>

                    <Grid item xs={6} style={dashboardStyles.item}>
                        <Typography variant="h5" component="h5" noWrap={true} align="center">
                            Investigate
                        </Typography>
                        <Paper style={dashboardStyles.paper}>
                            <List dense component="div" role="list">
                                <ListItem>No anomolies</ListItem>
                            </List>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} style={dashboardStyles.item}>
                        <Typography variant="h5" component="h5" noWrap={true} align="center">
                            Chart
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={dashboardStyles.item}>
                        <Typography variant="p" component="p" noWrap={true} align="left">
                            Select a time instant
                        </Typography>
                        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} onChangeCommitted={(_, value) => {this.setState({sliderValue: value})}} />
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default Dashboard