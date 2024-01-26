import { unstable_noStore as noStore } from 'next/cache';

// Returns number of nodes in the ready condition for the cluster as a number
export async function numOfReadyNodes(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "sum(kube_node_status_condition{condition='Ready', status='true'}==1)";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result[0].value[1]
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Return the number of nodes that have expereinced a 'not ready' condition in the last 15m as a number
export async function numOfUnhealthyNodes(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "sum(changes(kube_node_status_condition{status='true',condition='Ready'}[15m])) by (node) > 2";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result.length === 0 ? 0 : responseData.data.result[1];
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Returns the total number of pods in the cluster as a number
export async function numOfReadyPods(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "count(kube_pod_info)";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result[0].value.length <= 0 ? 0 : responseData.data.result[0].value[1];
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Returns the total number of pods in the cluster that are not in the 'ready' condition as a number
export async function numOfUnhealthyPods(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace) (kube_pod_status_ready{condition='false'})";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result[0].value.length <= 0 ? 0 : responseData.data.result[0].value[1];
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Returns the number of pods per namepsace as an object with two properties
export async function numByNamePods(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace) (kube_pod_info)";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result;
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Returns number of pods that didn't have a ready status in the last five minutes by namespace as an object.
export async function restartByNamePods(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace)(changes(kube_pod_status_ready{condition='true'}[5m]))";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result;
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

// Return CPU Utilization By Node - as object
export async function cpuUtilByNode(ip: string) {
    noStore();
    try {
        // Define the Prometheus API query
        const prometheusQuery = "100 - (avg by (instance) (irate(node_cpu_seconds_total{mode='idle'}[10m]) * 100) * on(instance) group_left(nodename) (node_uname_info))";
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result;
        return result;
    }
    catch (error) {
        console.error('Error:', error);
        return 'error'
    }
}

export async function clusterMemoryUsage(ip : string) {
    try {
        const prometheusQuery = 'sum (container_memory_working_set_bytes{id="/",kubernetes_io_hostname=~"^.*$"}) / sum (machine_memory_bytes{kubernetes_io_hostname=~"^.*$"}) * 100'
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result[0].value[1]
        return result;

    }
    catch(e) {
        console.log('Error: ', e)
        return e
    }
}

export async function clusterCpuUsage10mAvg(ip : string) {
    try {
        const prometheusQuery = 'sum (rate (container_cpu_usage_seconds_total{id="/",kubernetes_io_hostname=~"^.*$"}[10m])) / sum (machine_cpu_cores{kubernetes_io_hostname=~"^.*$"}) * 100'
        const prometheusServerIP = `${ip}`;
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
        }
        const responseData = await response.json()
        const result = responseData.data.result[0].value[1]
        return result;
    }
    catch(e) {
        console.log('Error: ', e)
        return e
    }
}

//Returns memory available by Node as object - **WORKS NEED TO DEFINE WHAT 'MEMORY' IS BEING RETURNED**
// export async function memAvailByNode(){
//     noStore();
//     try{
//          // Define the Prometheus API query
//         const prometheusQuery = "node_memory_MemAvailable_bytes * on(instance) group_left(nodename) (node_uname_info) / 2^30";
//         // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (parameter)
//         const prometheusServerIP = '34.168.131.121:80';
//         const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
//         // Make the fetch request to Prometheus API
//         const response = await fetch(prometheusEndpoint);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
//           }
//         const responseData = await response.json()
//         console.log('cpu overcommit result:', responseData.data.result)
//         const result = responseData.data.result;
//         return result;
//     }
//     catch(error){
//         console.error('Error:', error);
//         //We don't want the user to get this error - send some sort of error value?
//             // throw new Error('Failed to fetch cpuUtilByNode.');
//         return 'error'
//     }
// }