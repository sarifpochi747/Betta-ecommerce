import React from 'react'
import { motion } from "framer-motion";
import { Col } from 'reactstrap';
import "../styles/product-cart.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';


export default function ProductCart({item}) {
  const dispatch = useDispatch();

  
  const addTocart = ()=>{
    dispatch(cartAction.addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      imgUrl:item.imgUrl,
      })
    );

    toast.success("product added to the cart");
  }



  return (
    <Col lg="3" md ='4'>
        <div className="product_item">
              <div className="product_img">
                  <motion.img whileHover={{scale:1.1}} src={item.imgUrl}  alt=''/>
              </div>
              <div className='p-2 product_info'>
                <h3 className="product_name>"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span >{item.category}</span>
              </div>
              <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                  <span className="price">${item.price}</span>
                  <motion.span whileTap={{scale:1.2}}  onClick={addTocart} > 
                    <i className="ri-add-line"></i>
                  </motion.span>
              </div>
          </div>
    </Col>
  )
}
