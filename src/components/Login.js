import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LocalForm, Control } from 'react-redux-form';
import Logo from 'vox/components/Logo';

const emptyErrors = {
  username: [],
  password: [],
  email: [],
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: false,
      errors: { ...emptyErrors }
    }
  }

  attachFormDispatch = formDispatch => {
    this.formDispatch = formDispatch;
  }

  handleChange = values => {
    this.setState({...this.state, errors: { ...emptyErrors }}, () => {
      const state = this.state;
      if(state.registerForm && values.password != values.confirmPassword)
        this.setState({
          ...state,
          errors: {
            ...state.errors,
            password: new Array("Passwords doesn't match")
          }
        })
    })
  }

  render() {
    const { registerForm, errors } = this.state;
    const auxLink = registerForm ? 'Already have an account? Log here' : 'Register';
    const buttonMessage = registerForm ? 'Register' : 'Login'; 
    const hasErrors = Object.keys(errors).reduce((acc, key) => acc + errors[key].length, 0) > 0;
    const allErrors = Object.keys(errors).reduce((acc, key) => acc.concat(errors[key]), []);
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
                    model=".confirmPassword"
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
            {
              hasErrors ?
              <div className="alert alert-error">{allErrors.map(item => <p>{item}</p>)}</div>
              : null
            }
            <button type="submit" className="btn btn-primary btn-block">{buttonMessage}</button>
            <a className="aux-link" onClick={() => this.setState({...this.state, registerForm: !registerForm})}>{auxLink}</a>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default Login;
