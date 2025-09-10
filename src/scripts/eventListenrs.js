import {
  closeSidebarIcon,
  menuIcon,
  searchBar,
  searchIcon,
  sidebar,
} from "./elements";
import { deleteNote } from "./utils";

export const initNotesListeners = () => {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      deleteNote(index);
    });
  });
};

export const initControllerEvents = () => {
  // sidebar event
  menuIcon.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
  });
  closeSidebarIcon.addEventListener("click", () => {
    sidebar.classList.add("hidden");
  });
  //  search bar event
  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("top-0");
  });
  //  add note
};
