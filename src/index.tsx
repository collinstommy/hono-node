import { serve } from '@hono/node-server'

import { Hono } from 'hono'
import type { FC } from "hono/jsx";

export const Layout: FC = ({ children }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>ToDo App</title>
      </head>
      <body class="border bg-gray-200 px-4 prose" hx-boost="true">
        {children}
      </body>
    </html>
  );
};


const app = new Hono()
app.get('/', (c) => c.html(<Layout><h1>htmx patterns2</h1></Layout>))

serve(app)
