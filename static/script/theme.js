(function () {
  function setTheme(newTheme) {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("mantine-color-scheme", JSON.stringify(newTheme));
  }
  var preferredTheme;
  try {
    preferredTheme = JSON.parse(localStorage.getItem("mantine-color-scheme"));
  } catch (err) {}
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
})();
