//baseon localStorage
//login
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


export const login = (data,next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next(); 
  
};
 const clearStorage=()=>{
  let session=sessionStorage.getItem("data");
  if(session==null){
    localStorage.removeItem("data")
  }
  sessionStorage.setItem("data",1)
 }
window.addEventListener('load',clearStorage)
//logout
export const logout = (next) => {
  let res = window.confirm("Are you sure to logout ?")
  if(res)
  {
    localStorage.removeItem("data").then(data=>{
      toast.success("logout success")
      next()
   }).catch(error=>{
    toast.error("logout erreur")
   })
  }
  else{
    toast.warning("you cancel the operation ...")
  }
  }
 
 


//checkLogin
export const checkLogin = () => {
  const data = localStorage.getItem("data");
  if (data) {
    const ob = JSON.parse(data);
    if (ob.token && ob.user) {
      return true;
    }
  }
  

  return false;
};

//getToken
export const getToken = () => {
  if (checkLogin()) {
    const token = JSON.parse(localStorage.getItem("data")).token;
    return token;
  } else {
    return null;
  }
};

//getCurrentUser
export const getCurrentUser = () => {
  
  if (checkLogin()) {
    
    const user = JSON.parse(localStorage.getItem("data")).user;
    return user;
  } else {
    return null;
  }
};


// admin Login 
export const adminLogin=()=>{
  let user=getCurrentUser();
   let flag=user.roles.find(r=>r.id===5245)
  return flag?true:false;
}