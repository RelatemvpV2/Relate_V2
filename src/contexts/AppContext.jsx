import React, { createContext , useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
 const [current_Relation,setCurrent_Relation] = useState()

/*  const updateCR = (relation) => {
  setCurrent_Relation(relation)
 } */

    return (
      <AppContext.Provider value={{ current_Relation,  setCurrent_Relation }}>
        {children}
      </AppContext.Provider>
    );
  };
  