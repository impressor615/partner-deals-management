import '@/assets/scss/pages/_login.scss';

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

import { Login } from '@/actions';


class Page extends PureComponent {
  state = {
    username: '',
    password: '',
  };

  onChange = (e) => {
    e.stopPropagation();
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch, history } = this.props;
    const data = new URLSearchParams({
      grant_type: 'password',
      username,
      password,
    });

    const result = await dispatch(Login(data));
    if (result.error) return;
    history.push('/');
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container className="login">
        <h2>로그인</h2>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="username">아이디</Label>
            <Input type="text" id="username" onChange={this.onChange} value={username} placeholder="사용자 이름 입력" required />
          </FormGroup>
          <FormGroup>
            <Label for="password">비밀번호</Label>
            <Input type="password" id="password" onChange={this.onChange} value={password} placeholder="비밀번호 입력" required />
          </FormGroup>
          <Button type="submit" color="primary" size="lg" block>로그인</Button>
        </Form>
      </Container>
    );
  }
}

Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});
export default withRouter(connect(mapStateToProps)(Page));
