import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack'
import Navigation from '../components/navigation';
import * as typeformEmbed from '@typeform/embed'
// import * as typeformEmbed from ‘@typeform/embed’
// import { ReactTypeformEmbed } from 'react-typeform-embed';

const styles = theme => ({
  // submit: {
  //   margin: 0,
  // },
});

class Question extends React.Component {


  componentDidMount() {
    var el = document.getElementById("my-embedded-typeform");
    window.typeformEmbed.makeWidget(el, "https://tomasgutierrez.typeform.com/to/s1OfSl", {
        hideFooter: false,
        hideHeaders: false,
        opacity: 100
      });
  }

  render() {
    // const { classes, node } = this.props;
    return (
      <React.Fragment>
        <div id="my-embedded-typeform" className=""
         ></div>
        <Navigation value="questions"/>
      </React.Fragment>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSnackbar(Question));
