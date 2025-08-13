import { html } from "lit-html"; // (optional dummy tag)

export function Works() {
  return html`
    <section
      class="flex h-[200dvh] w-[100vw] bg-primarybg px-[4vw] py-[4vw]"
      id="works"
    >
      <div class="flex h-[100%] w-[100%] flex-col justify-around">
        <div class="flex h-[10%] w-[100%]"></div>
        <div class="flex h-[20%] w-[100%] bg-gray-200"></div>
        <div class="flex h-[20%] w-[100%] bg-gray-200"></div>
        <div class="flex h-[20%] w-[100%] bg-gray-200"></div>
      </div>
    </section>
  `;
}
