import type { FC } from "hono/jsx";

export const BasicForm: FC = () => {
  return (
    <section>
      <h1>Basic Form</h1>
      <form class="group" hx-post="/new">
        <fieldset class="flex flex-col">
          <label for="name" class="">
            Name
          </label>
          <input
            id="name"
            name="fullName"
            class="peer invalid:border-red-500"
            required
          ></input>
          <div class="hidden text-red-500 peer-invalid:block">
            Please enter full name
          </div>
        </fieldset>
        <fieldset class="flex flex-col">
          <label for="email">Email</label>
          <input
            class="peer invalid:border-red-500"
            id="email"
            name="email"
            type="email"
            required
          ></input>
          <div class="hidden text-red-500 peer-invalid:block">
            Please enter email
          </div>
        </fieldset>
        <div>
          <button class="my-2 rounded-md bg-black px-4 py-2 text-white hover:cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
