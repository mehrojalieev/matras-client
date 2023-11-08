import "./Utils.scss"

const Utils = () => {
  return (
    <div>Utils</div>
  )
}

const Container = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export  {Utils, Container}