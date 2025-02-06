import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgecss({
      content: [
        "./src/index.css",
        "./src/components/1-header/header.css",
        "./src/components/2-hero/hero.css",
        "./src/components/3-main/main.css",
        "./src/components/4-contact/contact.css",
        "./src/components/5-footer/footer.css",
        "./src/components/1-header/Header.jsx",
        "./src/components/2-hero/Hero.jsx",
        "./src/components/3-main/Main.jsx",
        "./src/components/4-contact/Contact.jsx",
        "./src/components/5-footer/Footer.jsx",
      ],
      safelist: ["hide", "show", "hidden-nav"],
    }),
  ],
};
