import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const addCustomer = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newCustomer);
      setCustomers(prevCustomers => [...prevCustomers, response.data]);
      setNewCustomer({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const updateCustomer = async (id, updatedCustomer) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedCustomer);
      setCustomers(prevCustomers =>
        prevCustomers.map(customer =>
          customer.id === id ? { ...customer, ...updatedCustomer } : customer
        )
      );
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const deleteCustomer = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setCustomers(prevCustomers =>
        prevCustomers.filter(customer => customer.id !== id)
      );
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className='container'>
      <h1 className='mt-4'>Manager Dashboard</h1>
      <div className='mb-4'>
        <h2>Add Customer</h2>
        <input className='input-group mb-3'
          type="text"
          placeholder="Name"
          value={newCustomer.name}
          onChange={e =>
            setNewCustomer({ ...newCustomer, name: e.target.value })
          }
        />
        <input className='form-control'
          type="text"
          placeholder="Email"
          value={newCustomer.email}
          onChange={e =>
            setNewCustomer({ ...newCustomer, email: e.target.value })
          }
        />
        <br/>
        <button className="btn btn-primary"onClick={addCustomer}>Add Customer</button>
      </div>
      <div>
        <h2>Customers</h2>
        <ul className='list-group'>
          {customers.map(customer => (
            <li key={customer.id} className='list-group-item d-flex justify-content-between align-items-center'>
              {customer.name} - {customer.email}
              <div>
              <button className="btn btn-sm" onClick={() => updateCustomer(customer.id, { name: 'Updated Name' })}><FaRegPenToSquare /></button>
              <></>
              <button className="btn btn-sm btn-danger" onClick={() => deleteCustomer(customer.id)}><RiDeleteBin6Fill/></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCustomers;


