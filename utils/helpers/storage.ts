export const setLocalStorageItem = (key: string, value: any, redirect: boolean) => {
  console.log('📪 Updating Local Storage', JSON.stringify(value))
  window.localStorage.setItem(key, JSON.stringify(value));
  if(redirect) window.location.replace("/")
}


export const getLocalStorageItem = (key: string, DEFAULT_RETURN: any) => {
  console.log('📪 Getting Local Storage', key)
  return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)!) : DEFAULT_RETURN;
}

