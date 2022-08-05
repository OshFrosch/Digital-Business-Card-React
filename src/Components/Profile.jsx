import contact_vcf from "../resources/JoshuaKraft.vcf";

function Profile() {
  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="profile-back">
      <div className="profile-title">
        <h1>Joshua Kraft</h1>
        <h3>Machine Learning Engineer</h3>
      </div>
      <div className="action-buttons">
        <button
          className="btn animation linkedin"
          onClick={() => {
            openlink("https://www.linkedin.com/in/nathan-joshua-kraft/");
          }}
        >
          <i class="button-icon fab fa-linkedin"></i>LinkedIn
        </button>
        <a
          className="direct-download"
          href={contact_vcf}
          download="Kontaktkarte"
        >
          <button className="btn animation contact">
            <i class="button-icon fas fa-address-book"></i>Save Contact
          </button>
        </a>
      </div>
      <div className="profile-description">
        <div className="info">
          <span>
            <i class="info-icon fas fa-map-marker"></i>
            Heidelberg
          </span>
          <span>
            <i class="info-icon fas fa-envelope"></i>
            nathan.joshua.kraft@gmx.de
          </span>
        </div>

        <h3>About</h3>
        <p>
          I am currently studying Data and Computer Science at the University of
          Heidelberg. And I am passionate about product development and design.
          Therefore I am currently working on a project called "Lagooon" which
          helps you organize your second brain.
        </p>
        <h3>Interests</h3>
        <p>
          Sport, Nature, Technology, Machine Learning, Cloud Computing, and
          Adventures
        </p>
      </div>
    </div>
  );
}

export default Profile;
