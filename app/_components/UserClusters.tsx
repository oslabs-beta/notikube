export default function UserClusters() {
  // FETCH REQUEST TO GRAB CLUSTER ASSOCIATED WITH USER
  async function getClusters() {
    try {
      const response = await fetch("/api/get-cluster");
      if (!response.ok) {
        throw new Error("Failed to fetch clusters");
      }
      const data = await response.json();
      // Process the data or return it as needed
      console.log(data)
    } catch (err) {
      console.log("Error fetching cluster", err);
      // Handle the error, e.g., notify the user or perform fallback logic
    }
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-20 py-3">
              Cluster Name
            </th>
            <th scope="col" className="px-20 py-3">
              Cluster IP
            </th>
            <th scope="col" className="px-20 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-20 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Test Cluster
            </th>
            <td className="px-20 py-5">123.123.123</td>
            <td className="px-20 py-5">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
