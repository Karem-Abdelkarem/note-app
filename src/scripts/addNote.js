import {
  addNoteBtn,
  addPinnedBtn,
  authorInput,
  closeSidebarIcon,
  menuIcon,
  noteInput,
  searchBar,
  searchIcon,
  sidebar,
  titleInput,
} from "./elements";
import { fetchFromDB, saveInDB } from "./utils";

const addNote = (isPinned) => {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const noteValue = noteInput.value.trim();
  const today = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const note = {
    id: Date.now(),
    title: titleValue,
    author: authorValue,
    content: noteValue,
    date: formattedDate,
    isPinned: isPinned,
  };

  const notes = fetchFromDB("notes") || [];
  notes.unshift(note);

  saveInDB("notes", notes);
  titleInput.value = "";
  authorInput.value = "";
  noteInput.value = "";
  window.location.href = "index.html";
};

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
addNoteBtn.addEventListener("click", () => {
  const isPinned = false;
  addNote(isPinned);
});
addPinnedBtn.addEventListener("click", () => {
  const isPinned = true;
  addNote(isPinned);
});
