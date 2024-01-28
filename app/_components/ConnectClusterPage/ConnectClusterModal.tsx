import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ConnectClusterModal({
  isModalVisible,
  toggleModal,
}: any) {
  const router = useRouter();
  const [clusterName, setClusterName] = useState("");
  const [clusterIp, setClusterIp] = useState("");
  const [error, setError] = useState("");

  const resetFields = () => {
    setClusterName("");
    setClusterIp("");
    setError("");
  };

  // This function takes the passed in form data and sends it to the server
  async function newCluster(e: React.FormEvent) {
    e.preventDefault();

    // Prepare the data to be sent
    const clusterData = {
      clusterName,
      clusterIp,
    };

    // POST REQUEST TO ADD CLUSTER NAME AND CLUSTER IP TO DATABASE
    try {
      let res = await fetch("/api/connect-cluster", {
        method: "POST",
        body: JSON.stringify(clusterData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!data.newCluster) {
        setError(data.error);
      } else {
        router.push("/dashboard");
        toggleModal();
        resetFields();
      }
    } catch (error) {
      setError("An error occurred while adding your cluster. Please try again");
      console.error("Error sending data:", error);
    }
  }

  const handleClose = () => {
    toggleModal();
    resetFields();
  };

  return (
    <div className={`modal ${isModalVisible ? "is-active" : ""}`}>
      <div className="modal-background" onClick={toggleModal}></div>
      {/* Modal content here */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isModalVisible
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : "hidden"
        } overflow-y-auto overflow-x-hidden z-50 w-full max-w-2xl`}
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Connect a Cluster
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={newCluster}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                {/* Cluster Name Input Field */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="clusterName"
                    className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                  >
                    Cluster Name
                  </label>
                  <input
                    type="text"
                    id="clusterName"
                    value={clusterName}
                    onChange={(e) => setClusterName(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="required"
                  />
                </div>
                {/* IP Address Input Field */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="clusterIp"
                    className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                  >
                    IP Address
                  </label>
                  <input
                    type="text"
                    id="clusterIp"
                    value={clusterIp}
                    onChange={(e) => setClusterIp(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="required"
                  />
                </div>
              </div>

              {/* This error populates when the fetch request sends back an error */}
              {error && (
                <p className="text-NotikubeRed text-xs pb-4">{error}</p>
              )}

              {/* Save Button */}
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
