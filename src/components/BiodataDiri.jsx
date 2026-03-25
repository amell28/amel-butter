import ProfileImage from './ProfileImage'
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import Education from './Education'
import Skills from './Skills'
import SocialLinks from './SocialLinks'
import '../styles/custom.css'

const BiodataDiri = () => {
  return (
    <div className="biodata-container">
      <div className="biodata-header">
        <h1>Biodata Diri</h1>
        <p>Portfolio Pribadi</p>
      </div>
      <div className="biodata-content">
        <div className="left-column">
          <ProfileImage />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="right-column">
          <PersonalInfo />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default BiodataDiri