import "./authStyle.css";
import ImgUser from "../assets/OwnImg.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function User() {
  return (
    <>
      <Header />
      <div className="between">
        <div className="userInfo">
          <div className="userInfo1">
            <img src={ImgUser} />
            <div className="Cut">
              <h4>David Cobra</h4>
              <div>
                Company: <i className="fa-solid fa-shop"></i>{" "}
                <p>David & Technology</p>
              </div>
              <p className="age">Account age: 1389day</p>
              <textarea cols="30" placeholder="Bio..."></textarea>
            </div>
          </div>
        </div>
        <div className="AccInfo">
          <div className="infoUser">
            <h4>Account Information</h4>
            <div>
              <label>Full name</label>
              <input type="text" value="David Cobra" className="nameInfo" />
            </div>
            <div>
              <label>Register Email</label>
              <input
                type="email"
                value="david*******@gmail.com"
                className="nameInfo"
              />
            </div>
          </div>
          <div className="infoUser">
            <h4>Business information</h4>
            <div>
              <label>Business type</label>
              <input
                type="text"
                value="Program Freelancers"
                className="nameInfo"
              />
            </div>
            <div>
              <label>Business Name</label>
              <input
                type="text"
                value="David & Technology"
                className="nameInfo"
              />
            </div>
            <div>
              <label>Job title</label>
              <input
                type="type"
                value="Front-End Developer"
                className="nameInfo"
              />
            </div>
            <div>
              <label>Business Address</label>
              <input
                type="type"
                value="Mean chey, Phnom Penh, Cambodia"
                className="nameInfo"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;
