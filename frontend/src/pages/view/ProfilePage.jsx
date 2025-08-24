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
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>Profile</h2>
        <p className="subtitle">Your profile information</p>

        <div className="avatar-container">
          <img
            src={
              selectedImg ? selectedImg : require("../../resoruce/avatar.png")
            }
            alt="Profile"
            className="avatar"
          />
          <label htmlFor="img-upload" className="camera-icon">
            <i className="bx bx-camera"></i>
          </label>
          <input
            type="file"
            id="img-upload"
            hidden
            onChange={handleImageUpload}
          />
        </div>
        <p className="hint">Click the camera icon to update your photo</p>

        <div className="form-group">
          <label>
            <i className="bx bxs-user"></i> Full Name
          </label>
          <input type="text" defaultValue={authUser.fullName} readOnly />
        </div>

        <div className="form-group">
          <label>
            <i className="bx bxs-envelope"></i> Email Address
          </label>
          <input type="email" defaultValue={authUser.email} readOnly />
        </div>

        <h3>Account Information</h3>
        <div className="info-row">
          <span>Member Since</span>
          <span>{formatDate(authUser.fullName)}</span>
        </div>
        <div className="info-row">
          <span>Account Status</span>
          <span className="active">Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
