// Shared palette randomizer — runs once on page load, picks a random accent color,
// and sets CSS variables used across all pages and the shared nav.
(() => {
  const palettes = {
    red:    ['#ff2020', '#ff4040', '#ff6060'],
    blue:   ['#4D80FF', '#6E9CFF', '#90BAFF'],
    purple: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
    yellow: ['#e8b84a', '#d4a017', '#f5d080']
  };
  const keys = Object.keys(palettes);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const shades = palettes[key];
  // About pages use --yellow vars; home page uses --red-* vars; nav CTA uses both
  document.documentElement.style.setProperty('--yellow', shades[0]);
  document.documentElement.style.setProperty('--yellow-mid', shades[1]);
  document.documentElement.style.setProperty('--yellow-light', shades[2]);
  document.documentElement.style.setProperty('--red-500', shades[0]);
  document.documentElement.style.setProperty('--red-400', shades[1]);
  document.documentElement.style.setProperty('--red-300', shades[2]);
  // CTA text: dark on light amber palette, white on dark palettes
  document.documentElement.style.setProperty('--cta-text', key === 'yellow' ? '#0a0a0a' : '#ffffff');
})();
