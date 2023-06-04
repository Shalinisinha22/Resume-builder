import React,{useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import { fieldCd} from './../../Constants/typeCodes';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addSkill, updateSkill } from "../../redux/actions/skillAction";

function Skill(props) {
  console.log('Education');
  const navigate = useNavigate();
  const [skill,setSkill]= useState(props.skill);

useEffect(()=>{
  if(props.document.id==null){
     navigate("/getting-started")
  }
})


  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setSkill({...skill,[key]:val})
  }

  const getFieldData=(key)=>{
    if(skill && skill[key]){
      return skill[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.skill!=null){
     props.updateSkill(skill)
    }
    else{
       props.addSkill(skill)
    }
     navigate('/experience')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Skills</h2>
            <div className="form-section">
              <div className="input-group"><label>Skill1</label>
                <div className="effect"><input type="text" name={fieldCd.Skill1}
                  onChange={onchange} value={getFieldData(fieldCd.Skill1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              <div className="input-group"><label>Skill2</label>
                <div className="effect"><input type="text" name={fieldCd.Skill2}
                  onChange={onchange} value={getFieldData(fieldCd.Skill2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
            
              <div className="input-group"><label>Skill3</label>
                <div className="effect"><input type="text" name={fieldCd.Skill3}
                  onChange={onchange} value={getFieldData(fieldCd.Skill3)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Skill4</label>
                <div className="effect"><input type="text" name={fieldCd.Skill4}
                  onChange={onchange} value={getFieldData(fieldCd.Skill4)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Skill5</label>
                <div className="effect"><input type="text" name={fieldCd.Skill5}
                  onChange={onchange} value={getFieldData(fieldCd.Skill5)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Skill6</label>
                <div className="effect"><input type="text" name={fieldCd.Skill6}
                  onChange={onchange} value={getFieldData(fieldCd.Skill6)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill7</label>
                <div className="effect"><input type="text" name={fieldCd.Skill7}
                  onChange={onchange} value={getFieldData(fieldCd.Skill7)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Skill8</label>
                <div className="effect"><input type="text" name={fieldCd.Skill8}
                  onChange={onchange} value={getFieldData(fieldCd.Skill8)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

             

            

             

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/education' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contact} educationSection={props.education} skillSection={skill}skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

  const mapStateToProps=(state)=>{
    return{
        skill:state.skill,
        contact:state.contact,
        education:state.education,
        document:state.document
    }
  }

  const mapDispatchToProps=(dispatch)=>{
    return{
        addSkill:(skill)=>{dispatch(addSkill(skill))},
        updateSkill:(skill)=>{dispatch(updateSkill(skill))}
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Skill)