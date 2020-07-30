import useSWR from 'swr';

// export function useFetch(url: string) {
//   const { data, error } = useSWR(url, async url => {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: [
//         ['Content-Type', 'application/json'],
//         ['Content-Type', 'text/plain'],
//       ],
//       credentials: 'include',
//       body: JSON.stringify({
//         'form-data': { email: 'qa14@hackit.app', password: 'qa14' },
//       }),
//     });

//     const data = await response.json();

//     return data;
//   });
//   return { data, error };
// }
