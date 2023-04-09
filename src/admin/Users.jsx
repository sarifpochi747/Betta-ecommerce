import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc,deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import userrIcon from "../assets/images/user-icon.png"



export default function Users() {

    const {data: usersData,loading} = useGetData("users")

    const deleteUser = async(id)=>{
        await deleteDoc(doc(db,"users",id));
        toast.success("Deleded!")
      }

  return (
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <h4 className="fw-bold">Users</h4>
                </Col>
                <Col lg = "12"  className='pt-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                         loading ? 
                          (<h1 className="py-5 text-center fw-bold">Loading....</h1>)
                          :
                          (
                            usersData?.map((user) =>(
                                <tr key={user.uid}>
                                    <td><img src={userrIcon} alt=""/></td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=> deleteUser(user.uid)} >Delete</button>
                                    </td>
                                </tr>
                            )))
                        }  
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
