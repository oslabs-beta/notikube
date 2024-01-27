export type Count = {
  count: string;
}

export type Cluster = {
  cluster_name: string,
  cluster_ip: string,
}

export type NameSpacePods = {
  metric: {namespace: string},
  value: (string | number)[],
}

export type CircleNode = {
  metric: {nodename: string},
  value: (string | number)[]
}

export type Incident = {
  incident_id: string,
  incident_date: string,
  incident_type: string,
  description: string,
  priority_level: string,
  incident_title: string,
  incident_status: string, 
  comment: string,
  incident_assigned_to: string,
  metric_data_id: string,
  cluster_id: string,
  cluster_name: string,
  cluster_ip: string,
  incident_assigned_by?: string,
  incident_assigned_date?: string,
  incident_due_date?: string,
  members?: [
    {
    name: string,
    email: string,
    }
  ],
}

export type User = {
  user_id: number,
  name: string,
  email: string,
  phone: number,
  slack: string,
  cluster_id?: string,
  cluster_name?: string,
}

export type Email = {
  email: string,
}

export type TableData = {
  incident_id: string,
  incident_date: Date,
  incident_type: string,
  description: string,
  priority_level: string,
  incident_title: string,
  incident_status: string, 
  comment: string,
  incident_assigned_to: string,
  metric_data_id: string,
  cluster_name: string,
  incident_assigned_by?: string,
  incident_assigned_date?: string,
  incident_due_date?: string,
}

export type ClusterRes = {
  cluster_id: string,
}

export type UserName = {
  name: string,
  email: string,
}