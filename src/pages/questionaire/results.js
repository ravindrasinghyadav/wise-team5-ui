import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Circle } from 'rc-progress';
import { withStyles } from '@material-ui/core/styles';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from '@material-ui/core';

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
                <h3>Test Result {percent}%</h3>
                <div style={circleContainerStyle}>
                    <Circle
                        percent={percent}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeColor={color}
                    />
                </div>
                <div>
                    <Button
                        css={css`
          background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
          border-radius: 3px;
          border: 0;
          color: white;
          height: 48px;
          padding: 0 30px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
          margin-top: 100px;
        `}
                    >
                        Take the Quiz Again
                    </Button>
                </div>
            </div>


        );
    }
}

Results.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
