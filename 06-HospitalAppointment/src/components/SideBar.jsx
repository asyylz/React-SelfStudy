import TopMenu from "./RightSubMain";
import TopSeacrhBar from "./TopSearchBar";
import RightSubMain from "./RightSubMain";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-clinic-medical"></i>
              <div>
                <div className="title">Brand Name</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-th-large"></i>
              </div>
              <div className="title">Dashboard</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-stethoscope"></i>
              </div>
              <div className="title">Appointments</div>
            </a>
          </li>
          <li className="doctors">
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="title">Doctors</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className="title">Departments</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <div className="title">Payments</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-cog"></i>
              </div>
              <div className="title">Settings</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-div">
                <i className="fas fa-question"></i>
              </div>
              <div className="title">Help</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <TopSeacrhBar />
        <RightSubMain />
      </div>
    </>
  );
}
