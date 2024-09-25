import { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';

// session duration in milliseconds (1 hour)
const SESSION_DURATION = 3600 * 1000;

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (
      state: [boolean, T | null],
      action: T | null = null,
    ): [boolean, T | null] => [false, action],
    initialValue,
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (value) {
    const timestamp = Date.now();
    const sessionData = JSON.stringify({ value, timestamp });
    await SecureStore.setItemAsync(key, sessionData);
  } else {
    await SecureStore.deleteItemAsync(key);
  }
}

async function getStorageData(key: string) {
  const sessionData = await SecureStore.getItemAsync(key);
  if (sessionData) {
    const { value, timestamp } = JSON.parse(sessionData);
    const currentTime = Date.now();

    if (currentTime - timestamp < SESSION_DURATION) {
      // the session is valid
      return value;
    } else {
      // the session has expired
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  }
  return null;
}

export function useStorageState(key: string): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>();

  useEffect(() => {
    const setStorage = async () => {
      const sessionValue = await getStorageData(key);
      setState(sessionValue);
    };
    setStorage();
  }, [key]);

  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key],
  );

  return [state, setValue];
}
