export interface ProjectDetailsProps {
  region?: string;
  house?: string;
  status?: string;
  warp?: string;
  projectLead?: string;
  dateStarted?: string;
  dateCompleted?: string;
  type?: string;
  floatRight?: boolean;
}

export const ProjectDetails = ({
  region,
  house,
  status,
  warp,
  projectLead,
  dateStarted,
  dateCompleted,
  type,
  floatRight,
}: ProjectDetailsProps) => {
  return (
    <table
      className={`table-auto divide-y divide-gray-200 border border-slate-300 ${
        floatRight ? 'float-right ml-3 mt-6' : ''
      }`}
    >
      <thead className="bg-gray-50">
        <tr className="bg-gray-50">
          <th
            colSpan={2}
            className="px-4 py-3 text-sm font-bold text-left text-gray-700 uppercase "
          >
            Project Details
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">Region</td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{region}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">House</td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{house}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">Type</td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{type}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">Status</td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{status}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">Warp</td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{warp}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
            Project Lead(s)
          </td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{projectLead}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
            Date Started
          </td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{dateStarted}</td>
        </tr>
        <tr>
          <td className="px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">
            Date Completed
          </td>
          <td className="px-4 py-2 text-sm text-gray-800 whitespace-nowrap">{dateCompleted}</td>
        </tr>
      </tbody>
    </table>
  );
};
