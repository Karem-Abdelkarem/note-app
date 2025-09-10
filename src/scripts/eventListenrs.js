import {
  addNoteBtn,
  addPinnedBtn,
  closeSidebarIcon,
  menuIcon,
  searchBar,
  searchIcon,
  sidebar,
} from "./elements";
import { addNote } from "./utils";

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
  //   add note
  addNoteBtn.addEventListener("click", () => {
    const isPinned = false;
    addNote(isPinned);
  });
  addPinnedBtn.addEventListener("click", () => {
    const isPinned = true;
    addNote(isPinned);
  });
};
