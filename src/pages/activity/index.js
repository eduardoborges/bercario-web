import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActivitiesActions } from '../../store/ducks/activities';

import { Container, Title } from './styles';

class Activity extends Component {
  render() {
    console.log(this.props.activities.data);
    return (
      <Container>
        <Title>Atividades</Title>
        {this.props.activities.data.map(activity => (
          <p>{activity}</p>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActivitiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activity);
