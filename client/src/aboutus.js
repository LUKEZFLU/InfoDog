import React from 'react';
import './aboutus.css';
import zefanPhoto from './pic/zefan.png';
import kaidiPhoto from './pic/kaidi.png';
import zonglinPhoto from './pic/zonglin.png';
import ziliangPhoto from './pic/ziliang.png';
import fanPhoto from './pic/fan.png';

function AboutUs() {

  return (
    <div className="AboutUs">

      <section className="AboutUs-content">
      <h2 className='meetOurTeam'>Meet Our Team</h2>
        <div className="AboutUs-team">
          
          <div className="team-member">
            <img src={zefanPhoto} alt="Zefan Lu" />
            <h3>Zefan Lu</h3>
            <p>Full-stack Developer</p>
          </div>
          <div className="team-member">
            <img src={kaidiPhoto} alt="Kaidi Chen" />
            <h3>Kaidi Chen</h3>
            <p>Business/Data Analyst</p>
          </div>
          <div className="team-member">
            <img src={zonglinPhoto} alt="Zonglin Zuo" />
            <h3>Zonglin Zuo</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src={ziliangPhoto} alt="Ziliang Huang" />
            <h3>Ziliang Huang</h3>
            <p>Backend Developer/PM</p>
          </div>
          <div className="team-member">
            <img src={fanPhoto} alt="Fan Dai" />
            <h3>Fan Dai</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
