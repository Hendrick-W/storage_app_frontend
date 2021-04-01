import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faReceipt, faStore, faTruck, faPersonBooth, faRunning } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link to="/overview">
              <FontAwesomeIcon icon={faCircleNotch} />
              <span>Overview</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/receptions">
              <FontAwesomeIcon icon={faReceipt} />
              <span>Receptions</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/storage">
              <FontAwesomeIcon icon={faStore} />
              <span>Storage</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/dispatch">
              <FontAwesomeIcon icon={faTruck} />
              <span>Dispatch</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="#" className="nav-text">
              <FontAwesomeIcon icon={faPersonBooth} />
              <span>Employees</span>
              <ul>
                <li className="nav-text">
                  <span>Dept.Head</span>
                </li>
                <li className="nav-text">
                  <span>Receptionist</span>
                </li>
                <li className="nav-text">
                  <span>Dept.Head</span>
                </li>
                <li className="nav-text">
                  <span>Dept.Head</span>
                </li>

              </ul>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/Profile">
              <FontAwesomeIcon icon={faPersonBooth} />
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <FontAwesomeIcon icon={faRunning} />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
