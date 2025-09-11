import {
  closeSidebarIcon,
  menuIcon,
  searchBar,
  searchIcon,
  sidebar,
} from "./elements";
import { deleteNote, noteDetails } from "./utils";

export const initNotesListeners = () => {
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const index = parseInt(e.currentTarget.dataset.index);
      deleteNote(index);
    });
  });
  document.querySelectorAll(".note-li").forEach((note) => {
    note.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      noteDetails(index);
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
