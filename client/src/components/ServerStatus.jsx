import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


function ServerStatus() {
  const [serverStatus, setServerStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/health`)
      .then((response) => {
        setServerStatus(response.data.status);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the server status:", error);
        setServerStatus("Error fetching status");
        setIsLoading(false);
      });
  }, []); 

  return (
    <>
      {isLoading ? (
        <p>Loading server status...</p>
      ) : (
        <p>Server Status: {serverStatus}</p>
      )}
    </>
  );
}

export default ServerStatus;
