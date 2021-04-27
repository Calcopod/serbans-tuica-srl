import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      verifyPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    // Get state
    const { displayName, email, password, verifyPassword } = this.state

    // Check if passwords match:
    if ( password !== verifyPassword ) {
      alert("Passwords do not match!")
      return
    }

    // Create user
    try {
      // Create user
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      // Add user to database:
      await createUserProfileDoc( user, { displayName } )

      // Reset inputs:
      this.setState({
        displayName: '',
        email: '',
        password: '',
        verifyPassword: ''
      })

    } catch ( error ) {
      console.error( "An error occured while signing-up: ", error)
    }
  }

  render() {
    const { displayName, email, password, verifyPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display name:"
          />
          <FormInput
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email:"
          />
          <FormInput
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password:"
          />
          <FormInput
            name="verifyPassword"
            value={verifyPassword}
            handleChange={this.handleChange}
            label="Verify password"
          />

          <CustomButton
            type="submit"
          >SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;