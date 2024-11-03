/* eslint-disable jsx-a11y/anchor-is-valid */
import "./authStyle.css";

function Register() {
  const user = document.getElementById("inputUser");
  const email = document.getElementById("inputEmail");
  const password = document.getElementById("inputPassword");
  const error = document.getElementById("Error");
  const error1 = document.getElementById("Error1");
  const error2 = document.getElementById("Error2");
  function click() {
    const userValue = user.value.trim();
    if (userValue === "") {
      document.getElementById("Error").innerHTML = "Please put your user name!";
      error.style.color = "red";
      user.style.borderColor = "red";
      user.style.borderStyle = "solid";
    } else {
      document.getElementById("Error").innerHTML = "";
      user.style.borderColor = "green";
    }
    const emailValue = email.value.trim();
    if (emailValue === "") {
      document.getElementById("Error1").innerHTML =
        "Please put your email to create account!";
      error1.style.color = "red";
      email.style.borderColor = "red";
      email.style.borderStyle = "solid";
    } else {
      email.style.borderColor = "green";
      email.style.borderStyle = "solid";
      document.getElementById("Error1").innerHTML = "";
    }
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
      document.getElementById("Error2").innerHTML =
        "Please Inter Your password!";
      error2.style.color = "red";
      password.style.borderColor = "red";
      password.style.borderStyle = "solid";
    } else {
      password.style.borderColor = "green";
      password.style.borderStyle = "solid";
      document.getElementById("Error2").innerHTML = "";
    }
  }

  return (
    <>
      <div className="LoginPage">
        <div className="Login1">
          <form className="BoxLogin">
            <h4>Register</h4>
            <div className="email">
              <label>User Name</label>
              <input
                type="type"
                placeholder="david"
                className="inputUser"
                id="inputUser"
                required
              />
              <div id="Error" className="Error"></div>
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="type"
                placeholder="Example@gmail.com"
                className="inputUser"
                id="inputEmail"
              />
              <div id="Error1" className="Error"></div>
            </div>

            <div className="email">
              <label className="">Password</label>
              <input
                type="password"
                placeholder="1234567"
                className="inputUser"
                id="inputPassword"
              />
              <div id="Error2" className="Error"></div>
            </div>
            <a href="" type="button" className="btn-login" onClick={click}>
              Register
            </a>
            <div className="Register1">
              <p>Already have account? </p>
              <a href="/Login" className="Forgot">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
