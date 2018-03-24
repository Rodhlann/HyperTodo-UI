export enum Urgency { None, Low, Medium, High }

export class Todo {
  id: number;
  note: string;
  urgency: Urgency;
  priority: number;
  dueDate: Date;
  category: number;
  finished: boolean;
}
