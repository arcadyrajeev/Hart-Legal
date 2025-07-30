import { html } from "lit-html"; // (optional dummy tag)

export function Hero() {
  return html`
    <section class="flex h-[100dvh] w-[100vw] bg-primarybg">
      <div class="z-1 relative flex h-[100d%] w-[100%] overflow-hidden">
        <img
          src="/images/pexels-sora-shimazaki-5668473.webp"
          class="h-[100%] w-[100%] object-cover object-center"
        />
      </div>
    </section>
  `;
}
