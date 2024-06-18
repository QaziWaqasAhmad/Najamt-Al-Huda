import React, { useEffect, useState } from "react";
import NavigationDrawer from "../../../components/navigationDrawer/index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Card from "@mui/material/Card";
import  DynamicTable from "../../../components/dynamicTable/index"
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CardsChart from "../../../components/CardsChart";
import ProductsChart from "../../../components/ProductsChart";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { getEmployees } from "../../../services/employee/Employee";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from "react-toastify";






const headerData = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "contactNo",
    numeric: false,
    disablePadding: true,
    label: "Contact Number",
  },
  {
    id: "profession",
    numeric: false,
    disablePadding: true,
    label: "Profession",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: "Image",
  },
];

const diplayRows = ["id", "name","email","contactNo","profession","image"];


const Category = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [isLoading,setIsLoading]=useState(false)
  const [rowsData,setRowsData]=useState([])

  useEffect(()=>{
    handlegetAllEmployees();
  },[])

  const handlegetAllEmployees = () => {
    setIsLoading(true);
    getEmployees(userData?.token)
      .then((res) => {
        if (res?.status==200) {
          setIsLoading(false);
          setRowsData(res?.data?.data);
        }else{
          setIsLoading(false);
          toast.error("Something went wrong")
        } 
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Something went wrong")
      });
  };

  return ( 
    <>
      <NavigationDrawer>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      // rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
     
        <h4>Employees</h4>
        <Loader isLoading={isLoading}/>
         {/* >> Table */}
         <DynamicTable
          headerData={headerData}
          bodyRows={rowsData}
          displayData={diplayRows}
        />


          
      </NavigationDrawer>
    </>
  );
};

export default Category;
