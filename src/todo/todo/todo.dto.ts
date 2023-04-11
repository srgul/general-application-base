export class TodoDTO {
  id?: string;
  title: string;
  status: "todo" | "done" | "in progress";
}