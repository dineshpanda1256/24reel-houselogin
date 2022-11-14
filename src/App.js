import React from 'react'
// import TeamSourcingProjectDashboard from './Components/TeamSourcingProjectDashboard/TeamSourcingProjectDashboard'
// import Home from './Pages/Home'
import ContactAddModal from './Components/ContactAddModal/ContactAddModal';
import CastingDashboard from './Pages/CastingDashBoard/CastingDashboard'
import CalendarAddModal from './Pages/CalendarAddModal/CalendarAddModal'

export default function App() {
  return (
    <div>
      {/* <Home /> */}
      <ContactAddModal />
      {/* <CastingDashboard /> */}
      {/* <TeamSourcingProjectDashboard /> */}
      <CalendarAddModal />
    </div>
  )
}
