import { Stack } from 'expo-router';
import '../global.css';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
