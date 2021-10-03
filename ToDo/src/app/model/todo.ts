export interface ITodo {
  id?: string; // TODO: Make this param required
  title: string;
  description: string;
  isImportant: boolean;
  isCompleted: boolean;
  createdAt: number;
}
