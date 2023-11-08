import React from 'react'
import {Container} from "../../utils/Utils"
import "./Connect.scss"

const Connect = () => {
  return (
    <div className='connect-home'>
        <Container>
            <div className="connect__wrapper">
                <div className="connect-text">
                    <h3 className='connect__title'>Sizni qiziqtirdimi?</h3>
                    <p className='connect__word'>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
                </div>
           
                <form className='connect-form'>
                    <div className="from__wrapper">
                        <span className="form__code">+998 |</span>
                        <input type="text"  placeholder='Raqam yozing'/>
                    </div>
                    <button className='connect__submit-btn' type='submit'>Yuborish</button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Connect