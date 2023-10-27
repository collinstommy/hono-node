import { serve } from "@hono/node-server";

import { Hono } from "hono";
import { Layout } from "./patterns/Layout";
import { BasicForm } from "./patterns/BasicForm";
import { ContactEvents, contactsApp } from "./patterns/ContactEvents";

const app = new Hono();
app.get("/", (c) =>
  c.html(
    <Layout>
     <a href="form" class="flex hover:underline">
          Basic form
        </a>
        <a href="events" class="flex hover:underline">
          Event driven changes
        </a>
    </Layout>,
  ),
);

app.get("/data-table", (c) =>
  c.html(
    <table _="on load go to the top of #linked">
      <thead>
        <tr>
          <th colspan="2">The table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
        </tr>
        <tr id="linked">
          <td>The links row body</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>,
  ),
);

app.get("/form", (c) =>
  c.html(
    <Layout>
      <BasicForm />
      <div hx-get="/data-table" id="dataTable" hx-trigger="load" />
    </Layout>,
  ),
);

app.get("/events", (c) =>
  c.html(
    <Layout>
      <ContactEvents />
    </Layout>,
  ),
);
//  hx-on::after-request      htmx:afterSettle
// go to the top of #a-div -20px

// on load call alert('I\'m selected!')

app.post("/new", (c) => {
  return c.html(<p>success</p>);
});

app.route("/contact", contactsApp);

serve(app);
