import React, { useState } from "react";
import femaleProfile from "../Assets/Images/femaleProfile.jpg";
import maleProfile from "../Assets/Images/maleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "female" ? (
                  <img
                    alt="Profile"
                    src={femaleProfile}
                    className="card-img-top"
                  />
                ) : (
                  <img
                    alt="Profile"
                    src={maleProfile}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card.title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation: </b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
