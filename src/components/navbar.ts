import { html } from "lit-html";

function showNavbar() {
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  console.log("menu clicked");
  nav?.classList.remove("hidden");

  overlay?.classList.remove("hidden");
}

function closeNavbar() {
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  console.log("menu closed");
  nav?.classList.add("hidden");
  overlay?.classList.add("hidden");
}

export function Navbar() {
  return html`
    <section
      class="w-100% relative z-10 mt-[2rem] flex h-[4rem] flex-row justify-between gap-0 overflow-visible bg-darkblue px-[8vw] py-[1vw] text-primarybg md:h-[8vw] md:px-[4vw]"
      id="navbar"
    >
      <div
        class="absolute left-0 flex hidden h-[100dvh] w-[100vw] bg-black opacity-[0.7]"
        id="overlay"
        @click=${closeNavbar}
      ></div>
      <div
        class="flrc-row flex items-center border-0 py-0 pb-0 pe-4 md:border-r-2"
      >
        <img src="/hl-logo.svg" class="max-h-[80%] w-[40vw] md:w-[22vw]" />
      </div>

      <ul class="hidden flex-row gap-[2vw] md:flex">
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            HOME
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            ABOUT US
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            PRACTICE
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            RECENT WORKS
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            OUR TEAM
          </a>
        </li>
      </ul>
      <div class="hidden items-center md:flex">
        <div
          class="group relative flex cursor-pointer overflow-hidden rounded-md bg-primarybg px-[1.2vw] py-[0.5vw] transition duration-300 ease-in-out hover:scale-105"
        >
          <p class="text-LatoBold font-[900] text-darkblue">
            <a class="text-[1vw]">CONTACT US</a>
          </p>
          <span
            class="absolute -inset-y-[25%] inset-x-[60%] h-[8rem] w-[8rem] rounded-[50%] bg-blue-900 text-blue-900 opacity-[0.15] transition duration-300 ease-in-out group-hover:scale-[1.4]"
          >
            ""
          </span>
        </div>
      </div>
      <button
        class="flex items-center md:hidden"
        id="menu"
        @click=${showNavbar}
      >
        <img src="/menu.svg" class="h-[30%]" />
      </button>
    </section>

    <div
      class="absolute right-0 top-0 z-20 mt-[2rem] flex hidden h-[80dvh] min-h-fit w-[80vw] flex-col justify-between gap-6 bg-darkblue px-[4vw] py-[1vw] text-primarybg md:hidden"
      id="nav"
    >
      <div
        class="flex justify-between border-0 border-b-2 py-6 pe-0 md:border-b-0 md:border-r-2 md:py-0 md:pb-0 md:pe-4"
      >
        <img src="/hl-logo.svg" class="h-10" />
        <button
          class="content-top mr-4 flex h-10"
          id="close"
          @click=${closeNavbar}
        >
          <img src="/close.svg" class="h-[50%] lg:hidden" />
        </button>
      </div>

      <ul class="flex w-[100%] flex-col md:w-[50%] md:flex-row">
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            HOME
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            ABOUT US
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            PRACTICE
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            RECENT WORKS
          </a>
        </li>
        <li class="navlinks group">
          <a
            href="#hero"
            class="text-primarybg no-underline transition duration-300 ease-in-out group-hover:text-blue-200"
          >
            OUR TEAM
          </a>
        </li>
      </ul>
      <div class="flex items-center gap-[1vw]">
        <div
          class="group relative flex cursor-pointer overflow-hidden rounded-md bg-primarybg px-[1.2vw] py-[0.5vw]"
        >
          <p class="text-LatoBold font-[900] text-darkblue">CONTACT US</p>
          <span
            class="absolute -inset-y-[25%] inset-x-[60%] h-[8rem] w-[8rem] rounded-[50%] bg-blue-900 text-blue-900 opacity-[0.15]"
          >
            ""
          </span>
        </div>
      </div>
    </div>
  `;
}
