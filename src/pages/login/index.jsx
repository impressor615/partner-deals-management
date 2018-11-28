import '@/assets/scss/pages/_login.scss';

import React, { PureComponent } from 'react';
import {
  Container, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';


class Login extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChange = (e) => {
    e.stopPropagation();
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="login">
        <h2>로그인</h2>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">이메일</Label>
            <Input type="email" id="email" onChange={this.onChange} value={email} placeholder="이메일 입력" />
          </FormGroup>
          <FormGroup>
            <Label for="password">비밀번호</Label>
            <Input type="password" id="password" onChange={this.onChange} value={password} placeholder="비밀번호 입력" />
          </FormGroup>
          <Button type="submit" color="primary" size="lg" block>로그인</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
