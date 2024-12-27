/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Import the CSS file for styles
const WelcomePage = () => {
  const Navigate = useNavigate(); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const Verify = JSON.parse(localStorage.getItem("cart"));
  if(Verify != null){
    setTimeout(() => {
      Navigate('/index'); // Redirect to /index after 2 seconds
    }, 2000);

    console.log("Success");
  }

  function checkLocal() {
    const local = JSON.parse(localStorage.getItem("cart"));
    const check = [];
    if (local == null) {
      localStorage.setItem("cart", JSON.stringify(check));
      localStorage.setItem("active", "true");
    } else {
      console.log("Success");
    }
  }
  const handleClick = () => {
    alert('Button clicked!');
    localStorage.removeItem("cart");
    localStorage.removeItem("active");
  };

  return (
    <div className="welcome-container">
      <div className="content-wrapper">
        <div className={`transition-content ${isLoaded ? "loaded" : ""}`}>
          <div className="text-center space-y-6">
            {/* Hero Section */}
            <div className={`transition-section ${isLoaded ? "loaded" : ""}`}>
              <h1 className="hero-title">Welcome to Eshop</h1>
              <p className="hero-description">
                Discover amazing features and endless possibilities with our
                cutting-edge solution
              </p>
            </div>

            {/* Features Grid */}
            <div className={`features-grid ${isLoaded ? "loaded" : ""}`}>
              {[
                {
                  title: "Easy to Use",
                  description: "Intuitive interface designed for everyone",
                },
                {
                  title: "Powerful Tools",
                  description: "Advanced features at your fingertips",
                },
                {
                  title: "24/7 Support",
                  description: "We're here to help you succeed",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className={`cta-section ${isLoaded ? "loaded" : ""}`}>
              <Link
                onClick={checkLocal}
                className="Get-start"
                to={{
                  pathname: `/index`, // The URL path
                }}
              >
                Click On Get Start
              </Link>
              <button onClick={handleClick}>
                Remove LocalStorage
              </button>
              <p className="cta-subtext">
                No credit card required • Free trial available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
