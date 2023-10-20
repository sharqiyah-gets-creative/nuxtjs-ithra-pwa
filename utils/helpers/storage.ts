// TODO: not used for state management, but could be useful for other things

// Sets an item in local storage with the given key and value. If redirect is true, the page will be redirected to the root path.
export const setLocalStorageItem = (key: string, value: any, redirect: boolean): void => {
  console.log('utils/helpers/storage.ts', '📪 Updating Local Storage', JSON.stringify(value))
  window.localStorage.setItem(key, JSON.stringify(value));
  if(redirect) window.location.replace("/")
}

// Retrieves a value from local storage by key. If the value is not found, returns the default value.
export const getLocalStorageItem = (key: string, DEFAULT_RETURN: any): any => {
  console.log('utils/helpers/storage.ts', '📪 Getting Local Storage', key)
  const value = JSON.parse(window.localStorage.getItem(key)!);
  console.log('utils/helpers/storage.ts', '📪 Local Storage Value', value)

  return value ? value : DEFAULT_RETURN;
}