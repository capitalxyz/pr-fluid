// tablet or lower (include mobile)
export function isTablet() {
  return window.matchMedia("(max-width: 768px)").matches;
}