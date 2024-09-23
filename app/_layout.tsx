import { SessionProvider } from '@/providers/session-provider';
import { Slot } from 'expo-router';

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
