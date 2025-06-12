
export type TMeal = {
  id: string;
  name: string;
  portionsToMake?: number;
  description?: string
  imageUrl: number | { uri: string };
}