const Footer = (props) => {

    const {handleToggle, data} = props
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h2>{data?.title}</h2>
            <h>NASA PHOTOS</h>
        </div>
        <button onClick={handleToggle}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer
