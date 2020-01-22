import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Axios from 'axios'

const Login = () => {

const [newUser, setNewUser] = useState({
    username: '',
    password: ''
})

const handleChange = (e) => (
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value})
)

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser)
    Axios.post( `http://localhost:5000/api/login`, newUser)
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
}

 return <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username'
                       name='username'
                       value={newUser.username}
                       onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password'
                       type='password'
                       name='password'
                       value={newUser.password}
                       onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
}

export default Login