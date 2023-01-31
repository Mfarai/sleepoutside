import { loadHeaderFooter } from "./utils.mjs";

// Creates the header and footer
loadHeaderFooter();

// Katie on Site open Message

if (localStorage.getItem("newVisitor") == null) {
    alert("AGH");
  document.querySelector(".welcome-message").classList.remove("hide");
  localStorage.setItem("newVisitor", "done");
  localStorage.clear();
}
