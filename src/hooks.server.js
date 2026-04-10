/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const host = event.request.headers.get('host') || '';
  const isMediaLoungeDomain =
    host === 'themedialounge.net' ||
    host === 'www.themedialounge.net';

  // Redirect root of the Media Lounge domain to the media-lounge page
  if (isMediaLoungeDomain && event.url.pathname === '/') {
    return Response.redirect(new URL('/media-lounge', event.url), 302);
  }

  return resolve(event);
}
