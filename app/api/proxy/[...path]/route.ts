export async function GET(req:Request, {params}:{params:Promise<{path:string[]}>}){//what is Request type here?
    const {path} = await params;
    const {search} = new URL(req.url);
    console.log("the search is",search);
    const url = `https://dummyjson.com/${path.join('/')}${search}`;
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data); //what is Response here?
}

export async function POST(req:Request,{params}:{params:Promise<{path:string[]}>}){

const {path}= await params;
const body = await req.json();
console.log("the body", body);

const res  = await fetch(`https://dummyjson.com/${path.join('/')}`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(body),
});
const data = await res.json();
return Response.json(data);
}





/* 

1.why use Proxy  in the URL name:

using fetch by using useEffect , browser directly talk to sever: like dummyjson which is on different url, so browser restrict & dont give back to the data as security reasons,so thats why its using the proxy server

Step-by-Step What Happens

You write:

fetch("/api/proxy/products")
STEP 1 — Browser Reads URL

Browser sees:

/api/proxy/products

This is relative URL.

So browser converts it into:

http://localhost:3000/api/proxy/products

because your app runs on:

localhost:3000
STEP 2 — Browser Sends Request

Browser sends HTTP request to:

localhost:3000

which is your Next.js server.

STEP 3 — Next.js Receives Request

Next.js checks routes.

It finds:

app/api/proxy/[...path]/route.ts

because URL matches:

/api/proxy/products
STEP 4 — route.ts Executes

Now THIS code runs on server:

const url = `https://dummyjson.com/${path.join("/")}`;

becomes:

https://dummyjson.com/products
STEP 5 — Next.js Server Fetches DummyJSON

Now server does:

await fetch("https://dummyjson.com/products")

This is:

SERVER ---> dummyjson.com

NOT browser.

So no CORS restriction.

STEP 6 — DummyJSON Returns Data
dummyjson.com
      ↓
Next.js Server
STEP 7 — Your Server Sends Response Back
Next.js Server
      ↓
Browser

using:

return Response.json(data);



we can give any name except proxy, this route act as middleman between frontend and external API.

Instead of:

Browser → DummyJSON

you now do:

Browser → Your Next.js API → DummyJSON

Your API route forwards/proxies the request.

That’s why developers commonly name it:

proxy


2. What is relative URL?

This:

fetch("/api/proxy/products")

is a relative URL.

Because:

no domain written
Browser automatically adds current domain

Suppose app running on:

http://localhost:3000

Then:

fetch("/api/proxy/products")

becomes:

http://localhost:3000/api/proxy/products

Relative means
relative to current website

---------------------------------------------------------------------------
2.What is CORS?

CORS =

Cross-Origin Resource Sharing

Browser security system.

What is origin?

Origin means combination of:

protocol + domain + port

Example:

http://localhost:3000

Different from:

https://dummyjson.com

Different origins.

Browser security rule

Browser says:

"Website A cannot freely access Website B data."

for security.

Why?

Imagine evil site:

evil.com

could directly read:

gmail.com
bank.com
facebook.com

responses from your browser.

Very dangerous.

So browser blocks many cross-origin requests

Unless server explicitly allows it.

Example of blocked request

Frontend:

localhost:3000

tries:

fetch("https://dummyjson.com/products")

Browser checks:

"Did DummyJSON allow localhost:3000?"

If not:

CORS error
Why proxy fixes it

Now browser only talks to:

localhost:3000

same origin.

No CORS issue.

Flow now

Browser:

localhost:3000
→ localhost:3000/api/proxy/products

Allowed ✅

Then SERVER talks to DummyJSON.

Important:

servers are NOT restricted by browser CORS rules

So Next.js server can fetch external APIs freely.

So proxy solves CORS because:
browser no longer contacts external API directly

Server does it instead.

CORS is enforced by:

BROWSER

NOT by Node.js server.

That’s why server-side fetch works.
*/