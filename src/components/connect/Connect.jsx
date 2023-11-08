import React, { useState } from 'react'
import {Container} from "../../utils/Utils"
import "./Connect.scss"

const Connect = () => {

    const [inValue, setInValue] = useState("")
    var phoneRegex = /^\d{9,12}$/;
   
    const handleNumberChange = (e) => {
        const value = e.target.value;
        // Sonlarni tekshirish
        if (!isNaN(value) && value.length != 10) {
            setInValue(value);
        }
    };

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
                        <input type='text' placeholder='Raqam yozing' value={inValue} onChange={(e)=> handleNumberChange(e)}/>
                    </div>
                    <button className='connect__submit-btn' type='submit'>Yuborish</button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Connect