import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { isMobile } from 'react-device-detect';

import Slider from '@material-ui/core/Slider';
import MyChart from './components/chart';
import Play from './components/Play';
import Pause from './components/Pause';
import * as anomaly_1 from "./data/anomaly.json";


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
        padding: "1%",
        maxHeight: "10%",
        width: "100%",
        borderBottomRightRadius: "25%",
        borderBottomLeftRadius: "25%",
    },
    body: {
        marginTop: "0%",
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
    justVibesLogo: {
        maxHeight: "8vh",
        width: "auto",
        paddingRight: "3%",
    },
    headerTitle: {
        color: colorScheme.secondary,
        paddingRight: "3%"
    },
    red: {
        color: "red",
    },
    blue: {
        color: "#1791cf",
    },
    playButton: {
        float: "left",
        position: "relative",
        width: "4.5vh",
        height: "3vh",
        backgroundColor: "#FED500",
        borderRadius: "0.3vh",
        marginTop: "1vh",
        cursor: "pointer"
    },
    playButtonSvg: {
        width: "2vh",
        position: "absolute",
        top: "0.5vh",
        left: "1.6vh"
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
            sliderValue: 118645,
            mobile: false,
            playing: false,
        }
    }

    componentDidMount() {
        this.setState({mobile: isMobile});
        setInterval(() => this.updateSliderValue(), 400)
    }

    updateSliderValue() {
        if (this.state.playing) {
            if (this.state.sliderValue < 118684) {
                this.setState(prevState => ({
                    sliderValue: prevState.sliderValue + 1
                }))
            } else {
                this.setState({sliderValue: 118645})
            }
        }
    }

    getInvestigateSensors() {
        const listItems = anomaly_1.values[this.state.sliderValue - 118645].dodgy_sensors.map((d) => <p key={Object.keys(d)[0]}>{Object.keys(d)[0]}: {Object.values(d)[0]}</p>)
        return listItems
    }

    getSystemStatus() {
        const status = anomaly_1.values[this.state.sliderValue - 118645].status;
        return status
    }

    handlePlayerClick = () => {
      if (!this.state.playing) {
        this.setState({playing: true})
      } else {
        this.setState({playing: false})
      }
    }

    render() {
        return (
            <Grid xs={12} style={dashboardStyles.page}>
                <Grid container xs={12} style={dashboardStyles.header}>
                    <Grid item xs={4} align="left">
                        <img 
                            src={"https://www.wikizeroo.org/index.php?q=aHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi9lL2U4L1NoZWxsX2xvZ28uc3ZnLzI3MnB4LVNoZWxsX2xvZ28uc3ZnLnBuZw"} 
                            alt={"Logo"}
                            style={dashboardStyles.logo}
                        />
                    </Grid>
                    <Grid item xs={4} align="center">
                        <h3 className="title" style={dashboardStyles.headerTitle}>
                            LPC Monitor
                        </h3>
                    </Grid>
                    <Grid item xs={4} align="right">
                        <img 
                            src={"https://imgur.com/vi300wM.png"} 
                            alt={"Logo"}
                            style={dashboardStyles.justVibesLogo}
                        />
                    </Grid>
                </Grid>

                <Grid container xs={12} style={dashboardStyles.body}>
                    <Grid item xs={this.state.mobile ? 12 : this.getInvestigateSensors().length !== 0 ? 6 : 12} style={dashboardStyles.item}>
                        <Paper elevation={4} style={dashboardStyles.paper}>
                            <h3 className="title">System Status</h3>
                            <div>{this.getSystemStatus()}</div>
                        </Paper>
                    </Grid>

                    {this.getInvestigateSensors().length !== 0 
                    &&  <Grid item xs={this.state.mobile ? 12 : 6} style={dashboardStyles.item}>
                            <Paper elevation={4} style={dashboardStyles.paper}>
                                <h3 className="title">Investigate</h3>
                                <div>{this.getInvestigateSensors()}</div>
                            </Paper>
                        </Grid>
                    }
                    
                    <Grid item xs={12} style={dashboardStyles.item}>
                        <Paper elevation={4} style={dashboardStyles.chartPaper}>
                            <MyChart />
                            <p>
                                Select a time instant
                            </p>
                            <PrettoSlider value={this.state.sliderValue} min={118645} max={118684} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} onChange={(_, value) => {this.setState({sliderValue: value})}} />
                            <div style={dashboardStyles.playButton}>
                                <div style={dashboardStyles.playButtonSvg}>
                                    {this.state.playing? <Pause onPlayerClick={this.handlePlayerClick} /> : <Play onPlayerClick={this.handlePlayerClick} />}
                                </div>
                            </div>
                            <Grid item xs={12} align="right" style={dashboardStyles.item}>
                                <p style={dashboardStyles.blue}>- Predicted Anomaly</p>
                                <p style={dashboardStyles.red}>- Actual Anomaly</p>
                            </Grid>
                        </Paper>
                    </Grid>
                    Disclaimer: This is website is in no way associated with Royal Dutch Shell.

                </Grid>

            </Grid>
        )
    }
}

export default Dashboard