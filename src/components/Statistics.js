import React from 'react';
import { FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="stat-item">
        <FaUsers className="stat-icon" />
        <div>
          <h3>1,230</h3>
          <p>Users</p>
        </div>
      </div>
      <div className="stat-item">
        <FaChartLine className="stat-icon" />
        <div>
          <h3>75%</h3>
          <p>Growth</p>
        </div>
      </div>
      <div className="stat-item">
        <FaDollarSign className="stat-icon" />
        <div>
          <h3>$12,345</h3>
          <p>Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
