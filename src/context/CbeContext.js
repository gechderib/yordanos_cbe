import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API_URL = "http://localhost:8000";

const CbeContext = createContext({});

export const CbeContextProvider = ({ children }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [accountType, setAccountType] = useState("personal");
  const [isUser, setIsUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBanker, setIsBanker] = useState(false);

  const [bankerUsername, setBankerUserName] = useState("");
  const [bankerPassword, setBankerPassword] = useState("");
  const [bankerUsernameError, setBankerUserNameError] = useState(false);
  const [bankerPasswordError, setBankerPasswordError] = useState(false);
// api related
  const [isLoading, setIsLoading] = useState(false);
  const [requsts, setRequests] = useState([]);
  const [error, setError] = useState("")

  const [account1, setAccount1]  = useState("");
  const [account2, setAccount2] = useState("");
  const [account3, setAccount3] = useState("");

  const [fullName, setFullName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [nationality, setNationality] = useState("");

  const [wereda1, setWereda1] = useState("");
  const [kebele1, setKebele1] = useState("");
  const [houseNo1, setHouseNo1] = useState("");
  const [town1, setTown1] = useState("");
  const [pobox1, setPobox1]  = useState("")
  const [tel1, setTel1] = useState("")
  
  const [wereda2, setWereda2] = useState("");
  const [kebele2, setKebele2] = useState("");
  const [houseNo2, setHouseNo2] = useState("");
  const [town2, setTown2] = useState("");
  const [pobox2, setPobox2]  = useState("")
  const [tel2, setTel2] = useState("")

  const [idOrPass, setIdOrPass] = useState("");
  const [resident, setResident] = useState("");
  const [placeIssued, setPlaceIssued] = useState("")
  const [date,setDate] = useState("")


  useEffect(() => {
    const getRequests = async () => {
        setIsLoading(true)
      try {
        const response = await axios.get(`${API_URL}/requests`);
        if(response){
            setIsLoading(false)
            setRequests(response.data)
        }
      } catch (err) {
        setIsLoading(false)
        console.log(err);
        setError(err)
      }
    };
    getRequests();
  }, []);

  const userLogin = ()=>{
    setIsUser(true);
    setIsAdmin(false);
    setIsBanker(false);
  }
  const adminLogin = ()=>{
    setIsUser(false);
    setIsAdmin(true);
    setIsBanker(false);
  }
  const bankerLogin = ()=>{
    setIsUser(false);
    setIsAdmin(false);
    setIsBanker(true);
  }

  const handleToggleUser = () => {
    if (isUser) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  };

  const handleDelete = async (id) => {
    const newRequests = requsts.filter(request => request.id !== id)
    setRequests(newRequests)
    try{
      const response = await axios.delete(`${API_URL}/requests/${id}`);
      if(response){
        setRequests(newRequests)
        console.log(newRequests)
        console.log("Deletee element ", id)
      }
    }catch(err){
      console.log(err)
      console.log("Error is happend")
    }
  }

  const applayForAtm = () => {

  }

  const handleLogin = (navigate) => {
    setAccountNumberError(false);
    setBankerPasswordError(false);
    setBankerUserNameError(false);
    if (isUser) {
      const userRequest = requsts.filter(request => (request.accountNo1 === accountNumber || request.accountNo2 === accountNumber || request.accountNo3 === accountNumber))
      console.log("------------------------------")
      console.log(userRequest);
      console.log("------------------------------")
      if (accountNumber === "" || accountNumber.length < 13) {
        setAccountNumberError(true);
      }
      if (accountNumber && !(accountNumber.length < 13)) {
        console.log(accountNumber, accountType);
        navigate("/applay_atm");
      } //1000255451182
    }
    if (isBanker || isAdmin) {
      if (bankerUsername === "") {
        setBankerUserNameError(true);
      }
      if (bankerPassword === "") {
        setBankerPasswordError(true);
      }
      if (bankerPassword && bankerUsername) {
        console.log(bankerPassword, bankerUsername);
        navigate("/atm_requests");
      }
    }
  };

  const context = {
    accountNumber,
    accountType,
    accountNumberError,
    setAccountNumberError,
    setAccountNumber,
    setAccountType,
    
    handleLogin,
    handleToggleUser,

    bankerPassword,
    bankerUsername,
    bankerPasswordError,
    bankerUsernameError,
    setBankerPassword,
    setBankerUserName,
    handleDelete,

    userLogin,
    adminLogin,
    bankerLogin,
    isUser,
    isAdmin,
    isBanker,
// api related
    isLoading,
    requsts,
    error,
    account1,
    setAccount1,
    account2,
    setAccount2,
    account3,
    setAccount3,
    fullName,
    setFullName,
    occupation,
    setOccupation,
    nationality,setNationality,
    wereda1,setWereda1,
    kebele1,setKebele1,
    houseNo1, setHouseNo1,
    tel1, setTel1,
    town1,setTown1,
    pobox1, setPobox1,

    wereda2,setWereda2,
    kebele2,setKebele2,
    houseNo2, setHouseNo2,
    tel2, setTel2,
    town2,setTown2,
    pobox2, setPobox2,

    idOrPass, setIdOrPass,
    resident, setResident,
    placeIssued, setPlaceIssued,
    date,setDate,

  };

  return <CbeContext.Provider value={context}>{children}</CbeContext.Provider>;
};

export default CbeContext;
