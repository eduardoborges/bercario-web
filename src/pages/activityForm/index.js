import React, { Component } from 'react';

import * as Yup from 'yup';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ActivityActions } from '../../store/ducks/activity';

import {
  Container, Title, Formulary, Button, Field,
} from './styles';

import Loading from '../../components/Loading';

const schema = Yup.object().shape({
  title: Yup.string().required('* Campo Nome é Obrigatório'),
  description: Yup.string().required('* Campo Descrição é Obrigatório'),
});

class ActivityForm extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.loadData();
    }
  }

  loadData = () => {
    const { id } = this.props.match.params;
    this.props.getActivity(id);
  };

  handleSubmit = (data) => {
    this.props.createActivity(data);

    this.props.history.push('/activities');
  };

  renderDetails = () => (
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

  render() {
    return this.props.activity.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  activity: state.activity,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActivityActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivityForm);
