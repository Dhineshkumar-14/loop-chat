import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../lib/auth.lib.js";
import "../style/ProfilePage.css";

const ProfilePage = () => {
  const authUser = useSelector((state) => state.authUser.user);
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState(authUser?.profilePic);
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image }, dispatch);
    };
  };

  const onCameraIconHandler = () => {
    const file = document.getElementById("img-input");
    file.click();
  };

  const formatDate = () => {
    let date = authUser?.createdAt;
    if (date && typeof date === "string") {
      date = date.split("T")[0];
    }
    return date;
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          <h1>Profile</h1>
          <div className="profile-img-container">
            <input type="file" id="img-input" onChange={handleImageUpload} />
            <img
              className="profile-img"
              src={
                selectedImg
                  ? selectedImg
                  : require("./../../resoruce/avatar.png")
              }
            ></img>
            <button className="profile-icon" onClick={onCameraIconHandler}>
              <i className="bx bx-camera"></i>
            </button>
            <small>Click the camera icon to update your photo</small>
          </div>
        </div>
        <div className="personal-info-container">
          <div className="input-div">
            <div className="label-container">
              <i className="bx bxs-user"></i>
              <label>Full Name</label>
            </div>
            <p className="input">{authUser?.fullName}</p>
          </div>
          <div className="input-div">
            <div className="label-container">
              <i className="bx bxs-envelope"></i>
              <label>Email</label>
            </div>
            <p className="input">{authUser?.email}</p>
          </div>
        </div>
        <div className="account-info-container">
          <h2>Account Information</h2>
          <div className="account-info">
            <label>Member Since</label>
            <label>{formatDate()}</label>
          </div>
          <div className="account-info">
            <label>Account Status</label>
            <label className="active">Active</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
