function Profile() {
  return (
    <div className="profile-back">
      <div className="profile-title">
        <h1>Joshua Kraft</h1>
        <h3>Machine Learning Engineer</h3>
      </div>
      <div className="action-buttons">
        <button className="btn animation linkedin">LinkedIn</button>
        <button className="btn animation contact">Save Contact</button>
      </div>
      <div className="profile-description">
        <ul className="fa-ul infos">
          <li>
            <span class="fa-li">
              <i class="fas fa-map-marker"></i>
            </span>
            Heidelberg, Germany
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-envelope"></i>
            </span>
            nathan.joshua.kraft@gmx.de
          </li>
        </ul>

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
