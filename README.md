# Intro to NotiKube

Welcome to NotiKube! A platform that gives you the power to manage the lifecycle of your Kubernetes cluster's Prometheus alerts while having access to the most important health metrics, all in one view. Getting set up is easy, see instructions below on how to get started. Once the webhook is set up, the alerts of your choosing can be sent directly to NotiKube where they become "incidents" . All of your incidents can be edited directly in the table or for a more granular view, select one and check out the incident's details. NotiKube gives you the power to manage your team's most important alerts so you can get your cluster back to full health in no time. 
For more help contact the team below...

Check out our website and medium article... 
Table of Contents
Features
Getting Started
Meet the team
Contribution Guidelines
License 
Features
Dashboard (Add screenshots for each? Maybe with description?)
Incidents Table
Incidents Details
Configurations
Getting Started:
NotiKube requires a working Kubernetes cluster with Prometheus installed, if you need help setting that up we have provided instructions below to get started. Otherwise, please skip ahead to Expose prometheus-server and Notikube webhook as those are necessary steps in order to use NotiKube successfully.
Set up a cluster,
See the guides below to help you set it up.
Amazon Web Services deployment guide
Azure deployment guide
Google Cloud Platform deployment guide
Minikube: https://kubernetes.io/docs/tutorials/hello-minikube/... (SET UP HYPERLINK) 
Install Prometheus
To pull metrics from your Kubernetes cluster and set up alerts, we will use Prometheus.
Helm is a package manager for Kubernetes and simplifies the process of installing Prometheus into your cluster.
Mac
brew install helm
Windows
choco install Kubernetes-helm
Linux
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3

chmod 700 get_helm.sh

./get_helm.sh
Get the official prometheus community helm chart and make sure it's up to date
  helm repo add prometheus-community https://prometheus-community.github.io/helm-charts \ helm repo update 
Install the helm chart into your cluster
helm install prometheus prometheus-community/prometheus
Promtheus is now installed!
Expose prometheus-server
 In order for NotiKube to properly pull your cluster's metrics you'll need to expose your prometheus server's exernal IP address.
You may need change the service type for your prometheus-server from clusterIP to LoadBalancer.
kubectl patch svc prometheus-server -p '{"spec": {"type":"LoadBalancer"}}' 
If you don't have kubectl, the kubernetes command-line tool, insalled check out this guide: https://kubernetes.io/docs/tasks/tools/
Grab your prometheus-server's external IP address for your Notikube account
kubectl get services  
Notikube Webhook
To connect your prometheus alert manager to Notikube we need to set up a new webhook....
Meet The Team
Jesse Chou - GitHub | LinkedIn
Dane Smith  - GitHub | LinkedIn
Derek Coughlan  - GitHub | LinkedIn
Emmanuel Ikhalea  - GitHub | LinkedIn
Apiraam Selvaskbaran  - GitHub | LinkedIn

Contribution guidelines
 Contributions play a vital role in the open-source community. If you'd like to make a contribution to NotiKube please follow the steps below.
Fork the project.
Create and work off of your own feature branch.
Create a pull request with a detailed description of your changes using our template to merge your feature branch into dev.
We will review and get back to you! 
License
some projects seem to include this