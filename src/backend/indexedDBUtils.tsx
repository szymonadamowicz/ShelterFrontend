const openDB = async (): Promise<IDBDatabase> => {
  const request = indexedDB.open('MyDatabase', 2);

  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    const db = (event.target as IDBRequest<IDBDatabase>).result;
    if (!db.objectStoreNames.contains('pets')) {
      db.createObjectStore('pets', { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains('shelters')) {
      db.createObjectStore('shelters', { keyPath: 'id' });
    }
  };
  return new Promise((resolve, reject) => {
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
};

const saveData = async (db: IDBDatabase, storeName: string, data: any[]): Promise<void> => {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  await Promise.all(data.map(item => new Promise<void>((resolve, reject) => {
    const request = store.put(item);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  })));
};

const loadData = async (db: IDBDatabase, storeName: string): Promise<any[]> => {
  const transaction = db.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export { openDB, saveData, loadData };
