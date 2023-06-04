import React,{useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import {fieldCd} from './../../Constants/typeCodes';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addExp, updateExp } from "../../redux/actions/experienceAction";


function Experience(props) {

  const navigate = useNavigate();
  const [exp,setExp]= useState(props.experience);

useEffect(()=>{
  if(props.document.id==null){
     navigate("/getting-started")
  }
})


  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setExp({...exp,[key]:val})
  }

  const getFieldData=(key)=>{
    if(exp && exp[key]){
      return exp[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.experience!=null){
     props.updateExp(exp)
    }
    else{
       props.addExp(exp)
    }
     navigate('/finalize')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Experience</h2>
            <div className="form-section">
              <div className="input-group"><label>Job Title</label>
                <div className="effect"><input type="text" name={fieldCd.JobTitle}
                  onChange={onchange} value={(getFieldData(fieldCd.JobTitle))} /><span></span>
                </div>
                <div className="error"></div>
              </div>


              <div className="input-group"><label>State</label>
                <div className="effect"><input type="text" name={fieldCd.JobState}
                  onChange={onchange} value={(getFieldData(fieldCd.JobState))} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              
            
              <div className="input-group"><label>Country</label>
                <div className="effect"><input type="text" name={fieldCd.JobCountry}
                  onChange={onchange} value={getFieldData(fieldCd.JobCountry)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Start date</label>
                <div className="effect"><input type="date" name={fieldCd.JobStartDate}
                  onChange={onchange} value={getFieldData(fieldCd.JobStartDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>End date</label>
                <div className="effect"><input type="date" name={fieldCd.JobEndDate}
                  onChange={onchange} value={getFieldData(fieldCd.JobEndDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Duration</label>
                <div className="effect"><input type="number" name={fieldCd.Experience}
                  onChange={onchange} value={getFieldData(fieldCd.Experience)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
            

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/skill' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contact} educationSection={props.education} skillSection={props.skill} experienceSection={exp} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

  const mapStateToProps=(state)=>{
    return{
        experience:state.experience,
        skill:state.skill,
        contact:state.contact,
        education:state.education,
        document:state.document
    }
  }

  const mapDispatchToProps=(dispatch)=>{
    return{
      addExp:(exp)=>{dispatch(addExp(exp))},
      updateExp:(exp)=>{dispatch(updateExp(exp))}
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Experience)