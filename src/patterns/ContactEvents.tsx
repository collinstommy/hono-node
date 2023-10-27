import { Hono } from "hono";
import type { FC } from "hono/jsx";

export const contactsDB = [
  { id: 1, fullName: "Lisa Doyle", age: 35, industry: "Construction" },
  { id: 2, fullName: "Jim Beam", age: 42, industry: "Retail" },
];

export const contactsApp = new Hono();

contactsApp.post("/", async (c) => {
  const { fullName, age } = await c.req.parseBody<{
    fullName: string;
    age: string;
  }>();
  const last = contactsDB.slice(contactsDB.length - 1)[0];
  contactsDB.push({
    fullName,
    age: +age,
    id: last.id + 1,
    industry: "unknown",
  });
  return c.html(<ContactEvents />);
});

contactsApp.post("/", async (c) => {
  const { fullName, age } = await c.req.parseBody<{
    fullName: string;
    age: string;
  }>();
  const last = contactsDB.slice(contactsDB.length - 1)[0];
  contactsDB.push({
    fullName,
    age: +age,
    id: last.id + 1,
    industry: "unknown",
  });
  return c.html(<ContactEvents />);
});

contactsApp.get("/:id", async (c) => {
  const id = c.req.param("id");

  return c.html(<ContactEvents />);
});

export const ContactEvents: FC = () => {
  return (
    <main>
      <section class="flex flex-col items-start gap-2 rounded bg-white px-4 py-3">
        <h2 class="text-xl font-bold">Contacts</h2>
        {contactsDB.map(({ fullName, id }) => (
          <div>
            <button
              id={id}
              hx-swap="none"
              hx-get={`/contacts/${id}`}
              _={`on click
                  send selectContact
                  remove [@aria-selected="true"] from <button/>
                  toggle [@aria-selected="true"] on me
              `}
              class="cursor-pointer rounded px-3 py-1 hover:underline"
              hx-vars={JSON.stringify({ id })}
            >
              {fullName}
            </button>
          </div>
        ))}
        <form class="">
          <h2 class="text-xl font-bold">Add contact</h2>
          <fieldset>
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" />
          </fieldset>
          <fieldset>
            <label for="age">Age</label>
            <input type="number" id="age" name="age" />
          </fieldset>
          <button hx-post="/contact" hx-target="main" hx-swap="outerHTML">
            Add
          </button>
        </form>
      </section>
      <section
        hx-get="/contact"
        hx-trigger="selectContact from:body"
        hx-include='[aria-selected="true"]'
      ></section>
    </main>
  );
};
