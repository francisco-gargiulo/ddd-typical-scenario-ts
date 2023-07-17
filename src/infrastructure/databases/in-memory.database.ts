export class InMemoryDatabase<T> {
  private store: T[] = [];

  getById(id: string): T | undefined {
    return this.store.find((item: any) => item.id === id);
  }

  add(item: T): void {
    this.store.push(item);
  }
}
