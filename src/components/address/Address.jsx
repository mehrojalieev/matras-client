import "./address.scss"
import { Container } from "../../utils/Utils"
import {GoLocation} from 'react-icons/go'

import AddressImage  from "../../assets/images/address.png"
const Address = () => {
  return (
    <div className="address">
        <Container>
            <div className="address-wrapper">
                <div className="address-content">
                    <h3>Manzilimiz</h3>
                    <h6>Toshkent, Parkent ko'chasi, 176-uy</h6>
                    <p>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva ro’parasi, Milliy bog’ metro bekati.</p>
                    <button><i><GoLocation/></i> Geolokatsiya</button>
                </div>
                <img className="address-image" src={AddressImage}  />
            </div>
        </Container>
    </div>
  )
}

export default Address