import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listplace.css";

function ListPlace() {
  let navigate = useNavigate();

  const handleStartListingClick = () => {
    // 尝试从localStorage获取userId和houseId
    const userId = localStorage.getItem("userId");
    const houseId = localStorage.getItem("houseId");

    if (!userId) {
      // 如果userId不存在，弹出提示要求用户登录
      alert("Please log in to continue.");
    } else if (houseId !== "no") {
      // 如果houseId存在，说明用户已经注册过房屋，阻止进一步操作
      alert("You already have a registered house. You cannot register another one.");
    } else {
      // 如果userId存在且houseId不存在，导航到列表表单页面
      navigate("/listing-form");
    }
  };


  return (
    <div className="background">
      <div class="ui-container">
        <div class="uui-padding-vertical-xhuge">
          <div class="w-layout-grid uui-heroheader01_component">
            <div class="uui-heroheader01_content">
              <h1 class="uui-heading-xlarge">We are here to help you</h1>
              <div class="uui-space-small"></div>
              <div class="uui-text-size-xlarge">This form will take only 5 minutes to get information about your house. Please be patience about the form so that we can do our best to help you find the perfect subtenant.</div>
            </div>
            <div class="uui-heroheader01_image-wrapper"><img src="pic/startlising-image.png" alt="Header image" class="uui-heroheader01_image" /></div>
            <div class="uui-button-row-2 is-reverse-mobile-landscape">
              <div class="uui-button-wrapper-2 max-width-full-mobile-landscape">
                <button id="start-listing-button" onClick={handleStartListingClick}>
                  Start listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="steps-container">
        <div className="steps">
          <h3>Step 1.</h3>
          <p>Fill out the form and publish your leasing.</p>
        </div>
        <div className="steps">
          <h3>Step 2.</h3>
          <p>
            You'll wait for booking requests and can chat on iLease to
            negotiate.
          </p>
        </div>
        <div className="steps">
          <h3>Step 3.</h3>
          <p>Get a deal outside the platform and move in.</p>
        </div>
      </div>
    </div>
  );
}

export default ListPlace;
