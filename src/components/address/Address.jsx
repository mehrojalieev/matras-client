import "./address.scss"
import { Container } from "../../utils/Utils"
import { SlLocationPin } from 'react-icons/sl'
import { GoLocation } from 'react-icons/go'

import AddressImage from "../../assets/images/address.png"
import { useEffect, useState } from "react"
import { apiInstance } from "../../api"

const Address = () => {

  const [address, setAddress] = useState({})

  useEffect(() => {
    try {
      apiInstance("/address")
        .then(response => setAddress(response.data[0]))
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  console.log(address);

  return (
    <div className="address">
      <Container>
        <div className="address-wrapper">
          <div className="address-content">
            <h3>
              Manzilimiz
              <i><SlLocationPin/></i>
            </h3>
            <h6> {address.location}</h6>
            <p>Mo’ljal: {address.destination}</p>
            <button><i><GoLocation /></i> Geolokatsiya</button>
          </div>
          <img className="address-image" src={AddressImage} />
        </div>
      </Container>
    </div>
  )
}

export default Address