import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActivitiesActions } from '../../store/ducks/activities';

import {
  Container, Title, List, Item, Button, Edit,
} from './styles';

import Loading from '../../components/Loading';

import EditIcon from '../../assets/images/edit.svg';

class ActivityList extends Component {
  componentDidMount() {
    this.props.getActivitiesRequest();
  }

  renderDetails = () => (
    <Container>
      <Title>Atividades</Title>
      <div>
        <Button to="/activities/create">Novo</Button>
      </div>

      <List cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {!this.props.activities.data.length ? (
            <tr>
              <td colSpan={4}>Sem Registros</td>
            </tr>
          ) : (
            this.props.activities.data.map(activity => (
              <Item key={activity.id}>
                <td />
                <td>{activity.title}</td>
                <td>{activity.description}</td>
                <td>
                  <Edit to={`/activities/edit/${activity.id}`}>
                    <img src={EditIcon} alt="Editar" />
                  </Edit>
                </td>
              </Item>
            ))
          )}
        </tbody>
      </List>
    </Container>
  );

  render() {
    return this.props.activities.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActivitiesActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ActivityList),
);
