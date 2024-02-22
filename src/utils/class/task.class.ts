export class Task {
  constructor(public api: string) {
    this.api = api;
  }

  async getAllTask() {
    const response = await fetch(this.api);
    const tasks = await response.json();
    return tasks;
  }
}
