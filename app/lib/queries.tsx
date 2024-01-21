import { unstable_noStore as noStore } from 'next/cache';

// ** REPLACE ALL IPs WITH PASSED IN IP ADDRESS AS A PARAMETER **

// Returns number of nodes in the ready condition for the cluster as a number
export async function numOfReadyNodes(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "sum(kube_node_status_condition{condition='Ready', status='true'}==1)";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch numOfNodes.');
        return 'error'
    }
}

// Returns the total number of pods in the cluster as a number
export async function numOfReadyPods(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "count(kube_pod_info)";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (passed in parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch numOfPods.');
        return 'error'
    }
}

// Returns the total number of pods in the cluster that are not in the 'ready' condition as a number
export async function numOfUnhealthyPods(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace) (kube_pod_status_ready{condition='false'})";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (passed in parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch numOfUnhealthyPods.');
        return 'error'
    }
}

// Returns the number of pods per namepsace as an object with two properties
export async function numByNamePods(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace) (kube_pod_info)";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (passed in parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch numOfNamePods.');
        return 'error'
    }
}

// Returns number of pods that didn't have a ready status in the last five minutes by namespace as an object.
export async function restartByNamePods(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "sum by (namespace)(changes(kube_pod_status_ready{condition='true'}[5m]))";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (parameter)
        const prometheusServerIP = '34.168.131.121:80';
        const prometheusEndpoint = `http://${prometheusServerIP}/api/v1/query?query=${encodeURIComponent(prometheusQuery)}`;
        // Make the fetch request to Prometheus API
        const response = await fetch(prometheusEndpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from Prometheus. Status: ${response.status}`);
          }

        const responseData = await response.json()
        //console.log('cpu result', responseData.data.result)
        const result = responseData.data.result;
        return result;
    }
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch restartByNamePods.');
        return 'error'
    }
}

// Return the number of nodes that have expereinced a 'not ready' condition in the last 15m as a number
export async function numOfUnhealthyNodes(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "sum(changes(kube_node_status_condition{status='true',condition='Ready'}[15m])) by (node) > 2";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch numOfUnhealthyNodes.');
        return 'error'
    }
}

// Return CPU Utilization By Node - as object
export async function cpuUtilByNode(){
    noStore();
    try{
         // Define the Prometheus API query
        const prometheusQuery = "100 - (avg by (instance) (irate(node_cpu_seconds_total{mode='idle'}[10m]) * 100) * on(instance) group_left(nodename) (node_uname_info))";
        // Replace <prometheus-server-ip> with the actual IP address of your Prometheus server (parameter)
        const prometheusServerIP = '34.168.131.121:80';
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
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
            // throw new Error('Failed to fetch cpuUtilByNode.');
        return 'error'
    }
}

//Returns memory available by Node as object - **WORKS BUT UNCLEAR WHAT 'MEMORY' IS BEING RETURNED**
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