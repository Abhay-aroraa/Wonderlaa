import React, { createContext, useContext, useState } from "react";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Land");

  return (
    <RideContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </RideContext.Provider>
  );
};

export const useRide = () => useContext(RideContext);
