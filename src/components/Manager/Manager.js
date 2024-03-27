import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Manager = () => {
  const [customers, setCustomers] = useState([]);
  const [agents, setAgents] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    // Fetch customers and agents data from the backend
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    const fetchAgents = async () => {
      try {
        const response = await axios.get('/api/agents');
        setAgents(response.data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchCustomers();
    fetchAgents();
  }, []);

  const handleAssignAgent = async () => {
    if (!selectedCustomer || !selectedAgent) return;

    try {
      await axios.put(`/api/customers/${selectedCustomer.id}`, {
        agentId: selectedAgent.id,
      });
      // Update the UI to reflect the assignment
      setCustomers(prevCustomers =>
        prevCustomers.map(customer =>
          customer.id === selectedCustomer.id
            ? { ...customer, agentId: selectedAgent.id }
            : customer
        )
      );
      // Reset selected customer and agent
      setSelectedCustomer(null);
      setSelectedAgent(null);
    } catch (error) {
      console.error('Error assigning agent:', error);
    }
  };

  return (
    <div class="container">
  <h1>Manager Dashboard</h1>
  {/* <div class="row">
    <div class="col-md-6">
      <h2>Customers</h2>
      <ul class="list-group">
        {customers.map(customer => (
          <li key={customer.id} class="list-group-item">
            {customer.name} - {customer.email} {customer.agentId && `(Assigned to Agent: ${customer.agentId})`}
          </li>
        ))}
      </ul>
    </div> */}
    {/* <div class="col-md-6"> */}
      {/* <h2>Agents</h2>
      <ul class="list-group">
        {agents.map(agent => (
          <li key={agent.id} class="list-group-item">
            {agent.name}
          </li>
        ))}
      </ul>
    </div>
  </div> */}
  <div class="row">
    <div class="col-md-12">
      <h2>Assign Agent</h2>
      <div class="form-group">
        <label for="customerSelect">Select Customer</label>
        <select
          class="form-control"
          id="customerSelect"
          value={selectedCustomer ? selectedCustomer.id : ''}
          onChange={e => {
            const customerId = e.target.value;
            setSelectedCustomer(customers.find(c => c.id === customerId));
          }}
        >
          <option value="">Select Customer</option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <div class="form-group">
        <label for="agentSelect">Select Agent</label>
        <select
          class="form-control"
          id="agentSelect"
          value={selectedAgent ? selectedAgent.id : ''}
          onChange={e => {
            const agentId = e.target.value;
            setSelectedAgent(agents.find(a => a.id === agentId));
          }}
        >
          <option value="">Select Agent</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id}>
              {agent.name}
            </option>
          ))}
        </select>
      </div>
      <br/>
      <button onClick={handleAssignAgent} class="btn btn-primary">
        Assign Agent
      </button>
    </div>
  </div>
</div>

  );
};

export default Manager;
