export type Count = {
  count: string;
}

export type Cluster = {
  cluster_name: string,
  cluster_ip: number,
}

export type NameSpacePods = {
  metric: {namespace: string},
  value: (string | number)[],
}

export type CircleNode = {
  metric: {nodename: string},
  value: (string | number)[]
}