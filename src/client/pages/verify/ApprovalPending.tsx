import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import PendingApproval from "../../../shared/components/emailVerification/PendingApproval";

const ApprovalPending = () => {
  const { isLogedIn } = useContext(AuthContext);
  return <>{<PendingApproval />}</>;
};

export default ApprovalPending;
