import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActivitiesActions } from '../../store/ducks/activities';

import {
  Container, Title, List, Item,
} from './styles';

class Activity extends Component {
  componentDidMount() {
    this.props.getActivitiesRequest();
  }

  render() {
    return (
      <Container>
        <Title>Atividades</Title>

        <List cellPadding={0} cellSpacing={0}>
          <thead>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
          </thead>

          <tbody>
            {!this.props.activities.data ? (
              <tr>
                <td colSpan={3}>Sem Registros</td>
              </tr>
            ) : (
              this.props.activities.data.map(activity => (
                <Item key={activity.id}>
                  <td />
                  <td>{activity.title}</td>
                  <td>{activity.description}</td>
                </Item>
              ))
            )}
          </tbody>
        </List>
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
