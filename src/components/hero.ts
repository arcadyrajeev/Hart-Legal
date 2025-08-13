import { html } from "lit-html"; // (optional dummy tag)

export function Hero() {
  return html`
    <section class="flex h-[100dvh] w-[100vw] bg-primarybg" id="hero">
      <div class="z-1 relative flex h-[90%] w-[100%] overflow-hidden">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/videos/consult.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="overlay"></div>
      <h1
        class="text-900 absolute w-[70%] p-20 font-LatoBold text-[5vw] italic tracking-wider text-white"
      >
        "Legal Clarity, One Conversation Away"
      </h1>
    </section>
  `;
}
