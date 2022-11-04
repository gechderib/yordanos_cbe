import React, { useContext } from "react";
import CbeCard from "../components/CbeCard";
import CbeLayout from "../components/CbeLayout";
import CbeContext from "../context/CbeContext";

const AtmRequests = () => {
  const cbeCtx = useContext(CbeContext);

  return (
    <CbeLayout>
      {cbeCtx.requsts.map((request) => (
        <div key={request.id}>
          <CbeCard request={request}  handleDelete={() => cbeCtx.handleDelete(request.id)}/>
        </div>
      ))}
    </CbeLayout>
  );
};

export default AtmRequests;
