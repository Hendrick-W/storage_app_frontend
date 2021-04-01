import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faReceipt, faStore, faTruck, faPersonBooth, faRunning, faList } from '@fortawesome/free-solid-svg-icons'
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
            <Link to="/reference_items">
              <FontAwesomeIcon icon={faList} />
              <span>Reference Items</span>
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
            </Link>
            <ul>
              <li className="nav-text">
                <Link to="/depthead" className="nav-text">
                  <span>Dept.Head</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/receptionist" className="nav-text">
                  <span>Receptionist</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/storage" className="nav-text">
                  <span>Storage</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/dispatch" className="nav-text">
                  <span>Dispatch</span>
                </Link>
              </li>
            </ul>
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
