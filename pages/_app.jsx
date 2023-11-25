import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inria_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

const inriaSans = Inria_Sans({
  weight: '400',
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={inriaSans.className}>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}
