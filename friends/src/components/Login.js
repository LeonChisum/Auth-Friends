import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Login = () => {

const [newUser, setNewUser] = useState({
    username: '',
    password: ''
})

const handleChange = (e) => (
    setNewUser({[e.target.name]: e.target.value})
)

 return <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username'
                       name='username'
                       value={newUser.username} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
}

export default Login