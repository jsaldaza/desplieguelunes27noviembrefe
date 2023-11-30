import "./header.css"

const Header = () => {
    return ( 
      <header className="header">
        <div className="header_logo">
          <img src="airbnb.svg" className="airbnb-logo" />
        </div>
        <div className="header_search">
          <input placeholder="Search room..." className="header_input"/>
          <button className="header_search-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display: 'block', fill: 'none', height: 12, width: 12, stroke: 'currentColor', strokeWidth: '5.333333333333333', overflow: 'visible'}} aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" /></svg>
          </button>
        </div>
      </header>
    );
}

export default Header;
