import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, clearUsers } from '../actions';
import { Button, Form, Input, Alert } from 'antd';

const FormItem = Form.Item;

class NewUser extends Component {

  constructor() {
    super();
    this.state = { username: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.username)
      .then(() => this.setState({ username: '' }));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { loading, username, error, clearUsers } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input
            name="username"
            placeholder="Github username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Añadir
          </Button>

          <Button
            type="danger"
            htmlType="button"
            onClick={clearUsers}
          >
            Limpiar
          </Button>
        </FormItem>

        {loading &&
          <Alert message={`Calculando el puntaje de @${username}`}>
          </Alert>
        }
        {error && !loading &&
          <Alert type="error" message={error}></Alert>
        }
      </Form>
    );
  }
};

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading,
  username: state.username,
  error: state.error,
  // ...state
})

const mapActionsToProps = dispatch => ({
  addUser: username => dispatch(addUser(username)),
  clearUsers: () => dispatch(clearUsers()),
});

export default connect(mapStateToProps, mapActionsToProps)(NewUser);

