export interface CarType {
  id: number;
  title: string;
  usages: Usage[];
}

export interface Usage {
  id: number;
  title: string;
}
