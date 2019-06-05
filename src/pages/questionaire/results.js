import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Circle } from 'rc-progress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/images/classroom-chalkboard.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left top',
    },
    submit: {
        margin: 0,
    },
});

class Results extends Component {
    constructor() {
        super();
        this.state = {
            percent: 30,
            color: '#3FC7FA',
        };
    }

    render() {
        const { percent, color } = this.state;
        const containerStyle = {
            width: '250px',
        };
        const circleContainerStyle = {
            width: '250px',
            height: '250px',
            display: 'inline-block',
        };
        return (
            <div>
                <h3>Circle Progress {percent}%</h3>
                <div style={circleContainerStyle}>
                    <Circle
                        percent={percent}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeColor={color}
                    />
                </div>
            </div>
        );
    }
}

Results.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
