import React, { useState } from 'react'
import '../App.css';
// import '../node_modules/bootstrap/dist/css';

const Employees = ({employees,selectedTeam,handleCardClick,handleTeam}) => {
   
    return (
        <div>
            <main className='container'>
                <div className='row justify-content-start mt-3 mb-4'>
                 <div className="col-6">
                    <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                 </div>
                </div>
                <div className='row justify-content-center mt-3 mb-4'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='card-collection'>
                        {
                            employees.map((employee) => {
                                return(
                                <div key={employee.id} id={employee.id} className={(employee.teamName===selectedTeam?'card m-2 standout':'card m-2')} style={{cursor:"pointer"}} onClick={handleCardClick}>
                                  {
                                  (employee.gender === "male") ?<img src="maleProfile.jpg" alt="" className='card-img-top' />: <img src="femaleProfile.jpg" alt="" className='card-img-top'/>}
                                    <div className='card-body'>
                                        <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                                        <p className='cart-text'><b>Designation: </b>{employee.designation}</p>
                                    </div>
                                </div>
                                )
                            })
                        }
                        </div>

                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Employees
