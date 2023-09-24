import React from "react";
import { MdOutlineDeleteForever } from 'react-icons/md';
import './tr.css'
import { useSelector } from "react-redux";

const TR = (props) => {
    
  const { item, handleRemoveItem, handleDeleteItem } = props;
  const { image01, title, price, quantity, id } = item;
  return (
    <tr>
      <td className='text-center'>
        <img src={image01} alt='' className='img-fluid' />
      </td>
      <td className='text-center title__title'>{title}</td>
      <td className='text-center'>{`$${price}`}</td>
      <td className='text-center'>{`${quantity}px`}</td>
      <td className='text-center'>
        <button className='iconbtn' onClick={() => handleRemoveItem(id)}>
          <MdOutlineDeleteForever className='icon' />
        </button>
       
      </td>
    </tr>
  );
};

export default TR;