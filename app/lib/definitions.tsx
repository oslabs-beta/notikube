export type Count = {
  count: string;
}

export type Cluster = {
  clusterName: string,
  clusterIp: number,
}

export type NameSpacePods = {
  metric: {namespace: string}
  value: (string | number)[],
}