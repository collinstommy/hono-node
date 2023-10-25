import { serve } from "@hono/node-server";

import { Hono } from "hono";
import { BasicForm } from "./components/BasicForm";
import { Layout } from "./components/Layout";

const app = new Hono();
app.get("/", (c) =>
  c.html(
    <Layout>
      <BasicForm />
    </Layout>,
  ),
);

app.post("/new", (c) => {
  return c.html(<p>success</p>);
});

serve(app);
