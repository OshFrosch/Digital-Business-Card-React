function Profile() {
  return (
    <div className="profile-back">
      <h1 className="profile-name">Joshua Kraft</h1>
      <h3 className="profile-title">Machine Learning Engineer</h3>
      <div className="action-buttons">
        <button className="btn linkedin">
          {/* <img src="../images/logo.png" /> */}
          LinkedIn
        </button>
        <button className="btn">Save Contact</button>
      </div>
      <div className="profile-description">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
        <h3>Intrests</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
