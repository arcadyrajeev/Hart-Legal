import { html } from "lit-html"; // (optional dummy tag)

export function Team() {
  return html`
    <section
      class="flex h-[100dvh] w-[100vw] bg-primarybg px-[4vw] py-[4vw]"
      id="team"
    >
      <div class="flex h-[100%] w-[100%] bg-gray-200"></div>
    </section>
  `;
}
