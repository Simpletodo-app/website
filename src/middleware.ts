// TODO(theo): Remove this when we go live and convert page to static 
// by updating the astro.config.mjs and removing the server output and adapter
// Switch to using Github pages
import { defineMiddleware } from "astro:middleware";

const SITE_AUTH = {
    user: 'theo',
    pwd: import.meta.env.SITE_PASSWORD
}


// using blog post as reference:
// https://blog.logrocket.com/working-astro-middleware/
export const onRequest = defineMiddleware((context, next) => {
    // If present, this will have the form: "Basic <credential>"
    const basicAuth = context.request.headers.get("authorization");
  
    if (basicAuth) {
      // get auth value from string "Basic authValue"
      const authValue = basicAuth.split(" ")[1];
  
      // decode the Base64 encoded string via atob (https://developer.mozilla.org/en-US/docs/Web/API/atob)
      const [user, pwd] = atob(authValue).split(":");
  
      if (user === SITE_AUTH.user && pwd === SITE_AUTH.pwd) {
        // forward request 
        return next();
      }
    }
  
    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-authenticate": 'Basic realm="Secure Area"',
      },
    });
  });