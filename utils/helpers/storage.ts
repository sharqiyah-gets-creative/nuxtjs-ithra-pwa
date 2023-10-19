// TODO: not used for state management, but could be useful for other things

/**
 * Sets an item in local storage with the given key and value.
 * If redirect is true, the page will be redirected to the root path.
 * @param key - The key to set in local storage.
 * @param value - The value to set in local storage.
 * @param redirect - Whether or not to redirect to the root path.
 * @returns void
 */
export const setLocalStorageItem = (key: string, value: any, redirect: boolean): void => {
  console.log('📪 Updating Local Storage', JSON.stringify(value))
  window.localStorage.setItem(key, JSON.stringify(value));
  if(redirect) window.location.replace("/")
}

/**
 * Retrieves a value from local storage by key. If the value is not found, returns the default value.
 * @param key - The key to retrieve from local storage.
 * @param DEFAULT_RETURN - The default value to return if the key is not found.
 * @returns The value from local storage, or the default value if the key is not found.
 */
export const getLocalStorageItem = (key: string, DEFAULT_RETURN: any): any => {
  console.log('📪 Getting Local Storage', key)
  const value = JSON.parse(window.localStorage.getItem(key)!);
  console.log('📪 Local Storage Value', value)

  return value ? value : DEFAULT_RETURN;
}