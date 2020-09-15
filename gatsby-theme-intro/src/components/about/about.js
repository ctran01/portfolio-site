import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      About
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
      <ul style={{display:"grid", gridTemplateColumns: "repeat(3,minmax(140px,200px))"}}>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• JavaScript</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• React</li>
      <li className="font-text text-sm leading-normal whitespace-pre-line">• React Native</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• NodeJS</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• Express</li>
      <li className="font-text text-sm leading-normal whitespace-pre-line">• Python</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• PostgreSQL</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• Flask</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• SQLAlchemy</li>
      <li className="font-text text-sm  leading-normal whitespace-pre-line">• HTML/CSS</li>
      </ul>
    </div>
    
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
