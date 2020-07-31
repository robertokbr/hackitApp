import qs from 'qs';

export async function fetchApi(): Promise<void> {
  await fetch('https://hackit.app/login', {
    mode: 'no-cors',
    method: 'POST',

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      email: 'qa14@hackit.app',
      password: 'qa14',
    }),
  });
}
