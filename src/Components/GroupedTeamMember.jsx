import React, { useState } from 'react'

const GroupedTeamMember = ({ employees, selectedTeam, setTeam }) => {
 
 
  const groupTeamMember=()=> {
    let teams = []
    let teamAMembers = employees.filter((employee) => employee.teamName === "TeamA")
    let TeamA = { team: "TeamA", members: teamAMembers, collapsed: selectedTeam === "TeamA" ? false : true }
    teams.push(TeamA)

    let teamBMembers = employees.filter((employee) => employee.teamName === "TeamB")
    let TeamB = { team: "TeamB", members: teamBMembers, collapsed: selectedTeam === "TeamB" ? false : true }
    teams.push(TeamB)

    let teamCMembers = employees.filter((employee) => employee.teamName === "TeamC")
    let TeamC = { team: "TeamC", members: teamCMembers, collapsed: selectedTeam === "TeamC" ? false : true }
    teams.push(TeamC)

    let teamDMembers = employees.filter((employee) => employee.teamName === "TeamD")
    let TeamD = { team: "TeamD", members: teamDMembers, collapsed: selectedTeam === "TeamD" ? false : true }
    teams.push(TeamD)

    return teams; 
  }

  const [grpEmployees,setGrpEmployees]=useState(()=>{
    const initialValue=groupTeamMember()
    return initialValue
})

  const  handleTeamClick=(e)=>{
      let transformedData=grpEmployees.map((data)=>
        data.team===e.currentTarget.id?{...data,collapsed:!data.collapsed}:data
      )
      setGrpEmployees(transformedData)
      setTeam(e.currentTarget.id)
  }
  return (
    <main className='container'>
      {
        grpEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map((member) => {
                    return (
                      < div className = 'mt-2' >
                       <h5 className='card-title mt-2'>
                         <span className='text-dark'>Full Name:{member.fullName}</span>  </h5>
                         <p className=''>Designation:{member.designation}</p>
                    </div>
              )
                })
              
              }
              
            </div>
            </div>
  )
})
      }
   
    </main >
  )
}

export default GroupedTeamMember
