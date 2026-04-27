// Shared palette randomizer — runs once on page load, picks a random accent color,
// and sets CSS variables used across all pages and the shared nav.
(() => {
  const palettes = {
    red:    ['#ff2020', '#ff4040', '#ff6060'],
    blue:   ['#0000cc', '#0000ff', '#3366ff'],
    purple: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
    yellow: ['#d4c84a', '#e0d870', '#ede99a']
  };
  const keys = Object.keys(palettes);
  const shades = palettes[keys[Math.floor(Math.random() * keys.length)]];
  // About pages use --yellow vars; home page uses --red-* vars; nav CTA uses both
  document.documentElement.style.setProperty('--yellow', shades[0]);
  document.documentElement.style.setProperty('--yellow-mid', shades[1]);
  document.documentElement.style.setProperty('--yellow-light', shades[2]);
  document.documentElement.style.setProperty('--red-500', shades[0]);
  document.documentElement.style.setProperty('--red-400', shades[1]);
  document.documentElement.style.setProperty('--red-300', shades[2]);
})();
