import React from 'react';
import { 
  Server, 
  Users, 
  CreditCard, 
  LifeBuoy,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    label: 'Active Servers',
    value: '156',
    icon: Server,
    change: '+12.5%',
    trend: 'up'
  },
  {
    label: 'Total Clients',
    value: '2,845',
    icon: Users,
    change: '+8.2%',
    trend: 'up'
  },
  {
    label: 'Monthly Revenue',
    value: '$48,295',
    icon: CreditCard,
    change: '-2.4%',
    trend: 'down'
  },
  {
    label: 'Support Tickets',
    value: '18',
    icon: LifeBuoy,
    change: '+5.7%',
    trend: 'up'
  }
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">
            Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            New Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span
                className={`inline-flex items-center text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {/* Activity items would go here */}
          <p className="text-gray-500">Loading activity...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;