// import React from 'react';
// import {useUserData} from "../../hooks/useUserData";
//
//
// export interface IUserContextData {
//   name?: string;
//   iconImg?: string;
// }
//
// export const postsContext = React.createContext<IUserContextData>([]);
//
// export function UserContextProvider({children}: { children: React.ReactNode }) {
//   const [data] = useUserData();
//   return (
//     <postsContext.Provider value={data} >
//       {children}
//       </postsContext.Provider >
//   )
// }
