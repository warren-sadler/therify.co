module.exports = {
  "{apps,libs,tools}/**/*.{ts,tsx}": (files) => {
    return `nx affected --target=typecheck --files=${files.join(",")}`;
  },
};
