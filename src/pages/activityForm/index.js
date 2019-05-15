import React, { Component } from 'react';

import * as Yup from 'yup';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActivityActions } from '../../store/ducks/activity';

import {
  Container, Title, Formulary, Button, Field,
} from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('* Campo Nome é Obrigatório'),
  description: Yup.string().required('* Campo Descrição é Obrigatório'),
});

class ActivityForm extends Component {
  loadData = (id) => {
    const response = this.props.getActivity(id);
  };

  handleSubmit = (data) => {
    this.props.createActivity(data);

    this.props.history.push('/activities');
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      console.tron.log('tem id');
      this.loadData(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadData(this.props.match.params.id);
    }
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Title>Atividade</Title>
        <div>
          <Formulary
            initialData={this.props.activity.data}
            schema={schema}
            onSubmit={this.handleSubmit}
          >
            <Field label="Nome" name="title" type="text" />
            <Field label="Descrição" name="description" type="text" />
            <Button type="submit">Enviar</Button>
          </Formulary>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities,
  activity: state.activity,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActivityActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityForm);
