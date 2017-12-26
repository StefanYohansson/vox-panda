import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LocalForm, Control } from 'react-redux-form';
import Logo from 'vox/components/Logo';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: false,
      errors: []
    }
  }

  attachFormDispatch = formDispatch => {
    this.formDispatch = formDispatch;
  }

  handleSubmit = values => {
    console.log(values, this.state.registerForm)
  }

  handleChange = values => {
    console.log('handleChange', values)
  }

  render() {
    const { registerForm } = this.state;
    const auxLink = registerForm ? 'Already have an account? Log here' : 'Register';
    const buttonMessage = registerForm ? 'Register' : 'Login'; 
    return (
      <div className="login-container">
        <Logo />
        <LocalForm
          model={'LoginForm'}
          id={'synth-form'}
          className={'form'}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          getDispatch={dispatch => this.attachFormDispatch(dispatch)}>
          <fieldset className="form-group">
            <label htmlFor="username">user:</label>
            <Control.text
              model=".username"
              id="username"
              required
              type="text"
              placeholder="type your username..."
              className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="password">password:</label>
            <Control.password
              model=".password"
              id="password"
              required
              type="password"
              placeholder="password"
              className="form-control"/>
          </fieldset>
          {registerForm ?
            (
              <div>
                <fieldset className="form-group">
                  <label htmlFor="confirm-password">confirm password:</label>
                  <Control.password
                    model=".confirm-password"
                    id="confirm-password"
                    required
                    type="password"
                    placeholder="password"
                    className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="email">e-mail:</label>
                  <Control.password
                    model=".email"
                    id="email"
                    required
                    type="email"
                    placeholder="email@mail.com"
                    className="form-control"/>
                </fieldset>
              </div>
             )
          :null}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-block">{buttonMessage}</button>
            <a className="aux-link" onClick={() => this.setState({...this.state, registerForm: !registerForm})}>{auxLink}</a>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default Login;
