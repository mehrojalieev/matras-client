import React from 'react'
import "./Connect.scss"
import { Container } from '../../utils/Utils'

const Success = () => {
  return (
    <div className='connect-home'>
        <Container>
            <h3 className="connect__success-title">Arizangiz muvaffaqiyatli qabul qilindi ✅</h3>
            <p className="connect__success-text">Siz bilan tez orada bog’lanamiz 😊</p>
        </Container>
    </div>
  )
}

export default Success