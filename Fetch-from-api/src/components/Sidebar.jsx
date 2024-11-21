const Sidebar = ({handleToggle, data}) => {
  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggle}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}

export default Sidebar
