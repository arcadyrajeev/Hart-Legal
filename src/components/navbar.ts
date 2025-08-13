import { html } from "lit-html";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const hero = document.getElementById("hero");

  const mm = gsap.matchMedia();

  if (navbar && hero) {
    mm.add("(min-width: 768px)", () => {
      // Create a timeline for shrink animation
      const shrinkTL = gsap.timeline({ paused: true });

      shrinkTL
        .to(navbar, {
          height: "4vw",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          logo,
          {
            scale: 0.85,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<", // sync with navbar animation
        );

      // ScrollTrigger just plays/reverses the timeline
      ScrollTrigger.create({
        trigger: hero,
        start: "bottom-=400 top", // when hero scrolls out
        onEnter: () => shrinkTL.play(),
        onLeaveBack: () => shrinkTL.reverse(),
      });
    });
  }
});

function showNavbar() {
  document.getElementById("nav")?.classList.remove("hidden");
  document.getElementById("overlay")?.classList.remove("hidden");
}

function closeNavbar() {
  document.getElementById("nav")?.classList.add("hidden");
  document.getElementById("overlay")?.classList.add("hidden");
}

export function Navbar() {
  return html`
    <section
      class="w-100% sticky top-0 z-10 flex h-[8vw] flex-row justify-between gap-0 overflow-visible bg-darkblue px-[8vw] py-[1vw] text-primarybg md:px-[4vw]"
      id="navbar"
    >
      <!-- overlay -->
      <div
        class="absolute left-0 flex hidden h-[100dvh] w-[100vw] bg-black opacity-[0.7]"
        id="overlay"
        @click=${closeNavbar}
      ></div>

      <!-- logo -->
      <div class="flex items-center border-0 py-0 pe-4 md:w-fit md:border-r-2">
        <img
          src="/hl-logo.svg"
          id="logo"
          class="max-h-[80%] w-[40vw] will-change-transform md:min-h-[2rem] md:w-[24vw]"
        />
      </div>

      <!-- desktop nav links -->
      <ul class="hidden flex-row gap-[2vw] md:flex">
        <li class="navlinks"><a href="#hero">HOME</a></li>
        <li class="navlinks"><a href="#practice">PRACTICE</a></li>
        <li class="navlinks"><a href="#works">RECENT WORKS</a></li>
        <li class="navlinks"><a href="#about">ABOUT US</a></li>
        <li class="navlinks"><a href="#team">OUR TEAM</a></li>
      </ul>

      <!-- contact btn desktop -->
      <div class="hidden items-center md:flex">
        <div
          class="group relative flex cursor-pointer overflow-hidden rounded-md bg-primarybg px-[1.2vw] py-[0.5vw] hover:scale-105"
        >
          <p class="text-[1vw] font-bold text-darkblue">CONTACT US</p>
        </div>
      </div>

      <!-- mobile menu -->
      <button class="flex items-center md:hidden" @click=${showNavbar}>
        <img src="/menu.svg" class="h-[30%]" />
      </button>
    </section>
  `;
}
