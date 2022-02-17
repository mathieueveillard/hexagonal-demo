interface HasId {
  id: string;
}

const matchesId = (idToMatch: string) => ({ id }: HasId): boolean => id === idToMatch

export default class LocalStorage<Item extends HasId> {
  constructor(private readonly key: string) { }

  getAllItems(): Item[] {
    return this.readFromLocalStorage();
  }

  getItem(id: string): Item {
    const allItems = this.getAllItems();
    const item = allItems.find(matchesId(id));
    if (!item) {
      throw this.createItemNotFoundException(id);
    }
    return item;
  }

  insertItem(item: Item): void {
    const allItems = this.getAllItems();
    const updatedItems = [...allItems, item];
    this.writeIntoLocalStorage(updatedItems);
  }

  updateItem(item: Item): void {
    const allItems = this.getAllItems();
    const index = allItems.findIndex(matchesId(item.id));
    if (index === -1) {
      throw this.createItemNotFoundException(item.id);
    }
    const updatedItems = [...allItems];
    updatedItems.splice(index, 1, item);
    this.writeIntoLocalStorage(updatedItems);
  }

  deleteItem(id: string): void {
    const allItems = this.getAllItems();
    const index = allItems.findIndex(matchesId(id));
    if (index === -1) {
      throw this.createItemNotFoundException(id);
    }
    const updatedItems = [...allItems];
    updatedItems.splice(index, 1);
    this.writeIntoLocalStorage(updatedItems);
  }

  private readFromLocalStorage(): Item[] {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }

  private writeIntoLocalStorage(items: Item[]): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  private createItemNotFoundException(id: string): Error {
    return Error(`Item with id ${id} was not found in local storage.`);
  }
}

