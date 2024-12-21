import type { FreshContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const user = Deno.env.get("BASIC_AUTH_USER");
  const password = Deno.env.get("BASIC_AUTH_PASSWORD");

  if (
    req.headers.get("Authorization") !== `Basic ${btoa(`${user}:${password}`)}`
  ) {
    const headers = new Headers({
      "WWW-Authenticate": 'Basic realm="Access to the production app"',
    });
    return new Response("Unauthorized", { status: 401, headers: headers });
  }
  const resp = await ctx.next();
  return resp;
}
