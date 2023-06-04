// resumePreview.js
import React from "react";
import { fieldCd } from "./../../Constants/typeCodes";
import { TextField } from "@mui/material";

function ResumePreview(props) {
  // console.log('Resume Preview');

  const rvContact = (key, valToAppend) => {
    if (props.contactSection) {
      return props.contactSection[key]
        ? props.contactSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvEducation = (key, valToAppend) => {
    if (props.educationSection) {
      return props.educationSection[key]
        ? props.educationSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvSkill = (key, valToAppend) => {
    if (props.skillSection) {
      return props.skillSection[key]
        ? props.skillSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvExp = (key, valToAppend) => {
    if (props.experienceSection) {
      return props.experienceSection[key]
        ? props.experienceSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  return (
    <div className={props.skinCd + " resume-preview "}>
      <div className={"name-section"}>
        <p className={"center contact-name text-upper"}>
          {" "}
          {rvContact(fieldCd.FirstName, " ") + rvContact(fieldCd.LastName)}{" "}
        </p>
        <p className={"center address"}>
          {rvContact(fieldCd.City, ", ") +
            rvContact(fieldCd.State, ", ") +
            rvContact(fieldCd.Country, ", ") +
            rvContact(fieldCd.ZipCode, ", ")}
        </p>
        <p className={"center"}>{rvContact(fieldCd.Email)}</p>
        <p className={"center"}>{rvContact(fieldCd.Phone)} </p>
      </div>

      <div className={"profSummSection text-upper"}>
        <p className="heading bold">PROFESSIONAL SUMMARY</p>
        <div className={"divider"}></div>
        <p>{rvContact(fieldCd.ProfSummary)}</p>
      </div>

      <div className={"educationSection text-upper"}>
        <p className="heading bold">EDUCATIONAL DETAILS</p>
        <div className={"divider"}></div>
        <p>{rvEducation(fieldCd.SchoolName)}</p>
        <p>{rvEducation(fieldCd.Degree)}</p>
        <p>{rvEducation(fieldCd.City)}</p>
        <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
        <p>{rvEducation(fieldCd.GraduationDate)}</p>
        <p>{rvEducation(fieldCd.GraduationYear)}</p>
      </div>

      <div className={"educationSection text-upper"}>
        <p className="heading bold">Skills</p>
        <div className={"divider"}></div>

        <p>{rvSkill(fieldCd.Skill1)}</p>
        <p>{rvSkill(fieldCd.Skill2)}</p>
        <p>{rvSkill(fieldCd.Skill3)}</p>
        <p>{rvSkill(fieldCd.Skill4)}</p>
        <p>{rvSkill(fieldCd.Skill5)}</p>
        <p>{rvSkill(fieldCd.Skill6)}</p>
        <p>{rvSkill(fieldCd.Skill7)}</p>
        <p>{rvSkill(fieldCd.Skill8)}</p>
      </div>

      <div className={"educationSection text-upper"}>
        <p className="heading bold">Experience</p>
        <div className={"divider"}></div>
        <p>{rvExp(fieldCd.JobTitle)}</p>
        <p>{rvExp(fieldCd.JobState)}</p>
        <p>{rvExp(fieldCd.JobCountry)}</p>
        <p> Start Date: {rvExp(fieldCd.JobStartDate)}</p>
        <p>End date: {rvExp(fieldCd.JobEndDate)} </p>
        <p>{rvExp(fieldCd.Experience)}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
