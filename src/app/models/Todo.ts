export class Todo {
  id?: string;
  text!: string;
  priority?: Priority;
  done?: boolean;

  constructor(
    text: string,
    priority: Priority = Priority.low,
    done: boolean = false
  ) {
    this.id = Math.random().toString(16);
    this.text = text;
    this.priority = priority;
    this.done = done;
  }
}

export enum Priority {
  low = 1,
  avg = 2,
  high = 3,
}
