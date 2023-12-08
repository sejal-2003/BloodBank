import React, {useEffect,useState}from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal1 from '../components/shared/modal/Modal1';
import API from "../services/API"

const HomePage = () => {
  const {loading, error} = useSelector(state => state.auth);
  const [data, setData] = useState([]);

  //get function
  const getBloodRecords = async( ) => {
    try{
      const {data} = await API.get("/inventory/get-inventory")
      if(data?.success) {
        setData(data?.inventory);
        // console.log(data)
      }
    }catch(error){
      console.log(error)
    }
  }

  //Now we want to call function at its initial time so we would do use useEffect
  useEffect(() =>{
    getBloodRecords();
  }, )
  return (
    <Layout>
    {error && <span>{alert(error)}</span>}
      {loading ?
        <Spinner/>: (
          <>
          <div className="container">
          <h4 
          className="ms-4"  
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
          style={{cursor: "pointer"}}
          >
            <i 
            className="fa-solid fa-plus text-success py-4">
            </i>
            Add Inventory 
          </h4>
         <table className="table">
            <thead>
                <tr>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Inventory Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Donar Email</th>
                    <th scope="col">Time & Date</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
              </tr>
            </tbody>
          </table>
          </div>
          <Modal1 />
          </>
      )}
        
    </Layout>
  )
}

export default HomePage