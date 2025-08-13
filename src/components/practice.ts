import { html } from "lit-html"; // (optional dummy tag)

export function Practice() {
  return html`
    <section
      class="flex h-[100dvh] w-[100vw] bg-primarybg px-[4vw] py-[4vw]"
      id="practice"
    >
      <div class="flex h-[100%] w-[100%] justify-around">
        <div class="flex h-[100%] w-[30%] bg-gray-200"></div>
        <div class="grid h-[100%] w-[60%] grid-cols-3 gap-12">
          <div class="bg-gray-200"></div>
          <div class="bg-gray-200"></div>
          <div class="bg-gray-200"></div>
          <div class="bg-gray-200"></div>
          <div class="bg-gray-200"></div>
          <div class="bg-gray-200"></div>
        </div>
      </div>
    </section>
  `;
}
