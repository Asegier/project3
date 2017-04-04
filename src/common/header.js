import React from 'react';

const Header = ({handleInputChange, value, handleSearch}) => (

    <div>
        <nav>
            <div className="nav-wrapper blue-grey darken-2">
                <a href="#" className="brand-logo">FooBar</a>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><i className="material-icons">star f</i></li>
                    <li>
                        <a href="badges.html">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav>
            <div className="nav-wrapper blue-grey darken-2">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    </div>
);

export default Header

