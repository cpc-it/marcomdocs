export default async (request: Request) => {
  // Skip preflight/OPTIONS so browsers can ask for creds cleanly
  if (request.method === 'OPTIONS') return;

  const hdr = request.headers.get('authorization') || '';
  const [scheme, token] = hdr.split(' ');
  const [user, pass] =
    scheme === 'Basic' && token ? atob(token).split(':') : ['', ''];

  const expectedUser = Deno.env.get('BASIC_USER') ?? '';
  const expectedPass = Deno.env.get('BASIC_PASS') ?? '';

  const ok = user === expectedUser && pass === expectedPass;

  if (!ok) {
    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
        'Cache-Control': 'no-store',
      },
    });
  }
};

// Protect the whole site; change to ['/components/*', '/storybook'] to scope it
export const config = { path: '/*' };
