import React from 'react';
import './TopClients.css';

const clients = [
  { name: "Acme Corporation", transactions: "1200+ transactions this month" },
  { name: "Globex Company", transactions: "1040+ transactions this month" },
  { name: "Server Payment", transactions: "986+ transactions this month" },
  { name: "Blocs.ai", transactions: "900+ transactions this month" },
  { name: "Starbucks", transactions: "800+ transactions this month" },
  { name: "xyzlorem", transactions: "500+ transactions this month" },
];

const TopClients = () => {
  return (
    <div className="top-clients-section">
      <h3>Top Clients</h3>
      <ul className="client-list">
        {clients.map((client, index) => (
          <li key={index}>
            <div className="client-rank">#{index + 1}</div>
            <div className="client-info">
              <strong>{client.name}</strong>
              <span>{client.transactions}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopClients;
