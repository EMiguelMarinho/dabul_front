import * as PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import api from '../services/api';

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
   const [ users, setUsers ] = useState([]);
   const [ isLoaged, setIsLoaged ] = useState(false)
   const navigate = useNavigate();

   const login = async ( values ) => {
      const { email, password } = values;

      try {
         await api.post('/login', {
            email,
            senha: password
         });

         sessionStorage.setItem('Users', email)
      } catch (error) {
         console.log(error)
      }

      setIsLoaged(true)
      navigate('/home')
      return
   };

   const logout = async () => {
      try {
         await api.delete('/logout');
      } catch (error) {

      }
      sessionStorage.clear()
      return setIsLoaged(false);
   };

   useEffect(() => {
         async function getAllUsers(){
            try {
               const req = await api.get('/getAllUsuarios')
               const allUsers = req.data;
               setUsers(allUsers)

               const hasUser = sessionStorage.getItem('Users')

               if(hasUser){
                  const userLoged = allUsers.find(user => {
                     return user.email == hasUser
                  })

                  if(userLoged){
                     return setIsLoaged(true)
                  }
               }
            } catch (error) {
               alert(error)
            }
         }
         getAllUsers()
   }, []);

   return  <AuthContext.Provider value={{ users, isLoaged, setIsLoaged, login, logout }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
   children: PropTypes.node,
}
