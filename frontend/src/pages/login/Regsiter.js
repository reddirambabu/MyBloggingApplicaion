import {Component} from 'react'
import axios from "axios"

import './login.css'

export class Regsiter extends Component {
  state = {
    username: '',
    password: '',
    email: "" ,
    profile : "" 
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onChangeProfile = event => {
    this.setState({profile: event.target.value})
  }


 

  submitForm =  event => {
    event.preventDefault()
    const {username, password , email , profile} = this.state
    const userDetails = {username, password , email , profile}
    const url = 'http://localhost:5000/register'
    
    axios.post(url, userDetails).then((response)=>console.log(response))
    
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          required
        />
      </>
    )
  }

  renderProfileField = () => {
    const {profile} = this.state

    return (
      <>
        <label className="input-label" htmlFor="profile">
          PROFILE
        </label>
        <input
          type="file"
          id="profile"
          className="username-input-field"
          value={profile}
          placeholder="profile"
          onChange={this.onChangeProfile}
          required
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
          required
        />
      </>
    )
  }

  render() {
 
    return (
      <div className="login-form-container">
        
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Registration Form</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderProfileField()}</div> 
          <button type="submit" className="login-button">
            Register Now
          </button>
        </form>
      </div>
    )
  }
}

