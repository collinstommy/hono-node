import { FC } from "hono/jsx";

export const Layout: FC = ({ children }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
        <title>htmx</title>
      </head>
      <body class="prose border bg-gray-200 px-4" hx-boost="true">
        {children}
      </body>
    </html>
  );
};
