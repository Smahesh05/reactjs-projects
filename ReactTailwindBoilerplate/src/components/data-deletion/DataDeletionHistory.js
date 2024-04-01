import React from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Card from "../UIElements/Card";

const DataDeletionHistory = () => {
  return (
    <Card>
      <h2 className="text-sm font-bold mb-4">Data Deletion History</h2>
      <table className="min-w-full divide-y divide-gray-200 shadow">
        <thead className="border rounded">
          <tr className="flex justify-between">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase flex items-center">
              Requested Date
              <span className="ml-1">
                <GoChevronUp />
              </span>
            </th>
            <th className="px-6 py-3 text-left flex items-center text-xs font-medium text-gray-500 uppercase">
              Requested By
              <span className="ml-1">
                <GoChevronDown />
              </span>
            </th>
            <th className="px-6 py-3 text-left flex items-center text-xs font-medium text-gray-500 uppercase">
              Status
              <span className="ml-1">
                <div>
                  <GoChevronUp />
                  <GoChevronDown />
                </div>
              </span>
            </th>
          </tr>
        </thead>
      </table>
    </Card>
  );
};

export default DataDeletionHistory;
