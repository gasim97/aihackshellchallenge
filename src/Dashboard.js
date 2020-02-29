import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Slider from '@material-ui/core/Slider';
import MyChart from './components/chart';


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
        position: "fixed",
        top: "0",
        padding: "1%",
        maxHeight: "4%",
        width: "100%",
    },
    body: {
        marginTop: "5%",
    },
    item: {
        padding: "2%"
    },
    paper: {
        minWidth: 200,
        minHeight: 230,
        overflow: 'auto',
    },
    chartPaper: {
        minWidth: 200,
        minHeight: 230,
        overflow: 'auto',
        padding: "2%",
    },
    logo: {
        maxHeight: "5vh",
        width: "auto",
        paddingTop: "1%",
        paddingLeft: "3%",
    },
    headerTitle: {
        color: colorScheme.secondary,
        paddingRight: "3%",
    }
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
                <Grid container xs={12} style={dashboardStyles.header}>
                    <Grid item xs={6} align="left">
                        <img 
                            src={"https://www.wikizeroo.org/index.php?q=aHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi9lL2U4L1NoZWxsX2xvZ28uc3ZnLzI3MnB4LVNoZWxsX2xvZ28uc3ZnLnBuZw"} 
                            alt={"Logo"}
                            style={dashboardStyles.logo}
                        />
                    </Grid>
                    <Grid item xs={6} align="right">
                        <h3 className="title" style={dashboardStyles.headerTitle}>
                            LPC Anomaly Detection
                        </h3>
                    </Grid>
                </Grid>

                <Grid container xs={12} style={dashboardStyles.body}>
                    <Grid item xs={6} style={dashboardStyles.item}>
                        <Paper elevation={4} style={dashboardStyles.paper}>
                            <h3 className="title">System status messages</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} style={dashboardStyles.item}>
                        <Paper elevation={4} style={dashboardStyles.paper}>
                            <h3 className="title">Investigate</h3>
                            <p>No Anomolies Detected</p>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={12} style={dashboardStyles.item}>
                        <Paper elevation={4} style={dashboardStyles.chartPaper}>
                            <MyChart />
                            <p>
                                Select a time instant
                            </p>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} onChangeCommitted={(_, value) => {this.setState({sliderValue: value})}} />
                        </Paper>
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default Dashboard