import {
  arrowBtn,
  arrowOpenBtn,
  closeSidebarIcon,
  menuIcon,
  notesSection,
  searchBar,
  searchIcon,
  searchInput,
  sidebar,
} from "./elements";
import { deleteNote, noteDetails, onSearchInputChange } from "./utils";

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
      document.querySelectorAll(".note-li").forEach((n) => {
        n.classList.remove("lg:bg-gray-hover");
      });
      note.classList.add("lg:bg-gray-hover");
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
  //  open and close search bar
  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("top-0");
    searchInput.focus();
  });
  //  search bar function
  searchInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      onSearchInputChange(e.target.value);
    });
  });
  // close notes section
  arrowBtn.addEventListener("click", () => {
    notesSection.classList.add("hidden");
    if (arrowOpenBtn.classList.contains("lg:hidden")) {
      arrowOpenBtn.classList.remove("lg:hidden");
    }
    arrowOpenBtn.classList.add("lg:flex");
  });
  // open notes section
  arrowOpenBtn.addEventListener("click", () => {
    notesSection.classList.remove("hidden");
    arrowOpenBtn.classList.add("lg:hidden");
  });
};
