import React from 'react'
import { FormContainer } from './UserFromElements';
import Logo from '../../assets/chat-logo.png'

const Form = (props) => {
  return (
    <FormContainer>
      <div className='brand'>
        <img src={Logo} alt='Logo'/>
        <h1>CHATLEAGUE</h1>
      </div>
      <form>
          <input 
              placeholder='Username...'
              type='text'
              value={props.username}
              onChange={props.onChange}
          />
          <button onClick={props.connect} >ENTRAR</button>
      </form>
    </FormContainer>
  )
}

export default Form;