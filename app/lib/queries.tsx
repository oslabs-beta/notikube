

export async function numOfNodes(){
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
        //console.log('result:', responseData.data.result);
        return result;
    }
    catch(error){
        console.error('Error:', error);
        //We don't want the user to get this error - send some sort of error value?
        throw new Error('Failed to fetch numOfNodes.');
    }
   
}