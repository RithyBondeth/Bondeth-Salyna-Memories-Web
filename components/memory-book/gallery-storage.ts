import type { MemoryPhoto } from "./types";

const DATABASE_NAME = "bondeth-salyna-memory-book";
const DATABASE_VERSION = 1;
const STORE_NAME = "gallery-photos";

export type StoredGalleryPhoto = MemoryPhoto & {
  id: string;
  source: "upload";
  categoryFolder: string;
  fileName: string;
  createdAt: string;
  updatedAt: string;
};

function openGalleryDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      reject(new Error("This browser does not support saved gallery uploads yet."));
      return;
    }

    const request = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: "id" });
        store.createIndex("categoryFolder", "categoryFolder", { unique: false });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error("Could not open the gallery archive."));
  });
}

function requestToPromise<T>(request: IDBRequest<T>) {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error("A gallery request failed."));
  });
}

function transactionToPromise(transaction: IDBTransaction) {
  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () =>
      reject(transaction.error ?? new Error("The gallery save could not finish."));
    transaction.onabort = () =>
      reject(transaction.error ?? new Error("The gallery save was interrupted."));
  });
}

export function sortStoredGalleryPhotos(photos: StoredGalleryPhoto[]) {
  return [...photos].sort(
    (firstPhoto, secondPhoto) =>
      new Date(secondPhoto.updatedAt).getTime() -
      new Date(firstPhoto.updatedAt).getTime(),
  );
}

export async function listStoredGalleryPhotos() {
  const database = await openGalleryDatabase();

  try {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const photos = await requestToPromise(store.getAll());

    await transactionToPromise(transaction);

    return sortStoredGalleryPhotos(photos as StoredGalleryPhoto[]);
  } finally {
    database.close();
  }
}

export async function saveStoredGalleryPhoto(photo: StoredGalleryPhoto) {
  const database = await openGalleryDatabase();

  try {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    await requestToPromise(store.put(photo));
    await transactionToPromise(transaction);
  } finally {
    database.close();
  }
}

export async function removeStoredGalleryPhoto(id: string) {
  const database = await openGalleryDatabase();

  try {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    await requestToPromise(store.delete(id));
    await transactionToPromise(transaction);
  } finally {
    database.close();
  }
}

export function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        reject(new Error("The selected file could not be read."));
        return;
      }

      resolve(reader.result);
    };

    reader.onerror = () =>
      reject(reader.error ?? new Error("The selected file could not be read."));

    reader.readAsDataURL(file);
  });
}
