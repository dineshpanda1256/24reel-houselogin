import React from "react";
import AddMemberModal from "./Components/AddMemberModal/AddMemberModal";
import DashboardTable from "./Components/DashboardTable/DashboardTable";
import AllModal from "./Pages/All Modal/AllModal";
import CommunicationPost from "./Pages/CommunicationPost/CommunicationPost";
import Post from "./Pages/Post/Post";
import Response from "./Pages/Response/Response";
import ShootingSetup from "./Pages/AssociateDashboard/AssociateDashboard";
import AssociateDashboard from "./Pages/AssociateDashboard/AssociateDashboard";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";

export default function App() {
  return (
    <div>
       <AssociateDashboard/>
      {/* <DashboardTable/> */}
      {/* <Post/> */}
      {/* <Response/> */}
      {/* <CommunicationPost /> */}
      {/* <DetailsPage/> */}
    </div>
  );
}
