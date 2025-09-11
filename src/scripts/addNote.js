import {
  addNoteBtn,
  addPinnedBtn,
  authorErrorMessage,
  authorInput,
  closeSidebarIcon,
  menuIcon,
  noteErrorMessage,
  noteInput,
  searchIcon,
  sidebar,
  titleErrorMessage,
  titleInput,
} from "./elements";
import { fetchFromDB, saveInDB } from "./utils";

const validateForm = () => {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const noteValue = noteInput.value.trim();

  if (!titleValue) {
    titleErrorMessage.classList.remove("invisible");
    return;
  } else {
    titleErrorMessage.classList.add("invisible");
  }
  if (!authorValue) {
    authorErrorMessage.classList.remove("invisible");
    return;
  } else {
    authorErrorMessage.classList.add("invisible");
  }
  if (!noteValue) {
    noteErrorMessage.classList.remove("invisible");
    return;
  } else {
    noteErrorMessage.classList.add("invisible");
  }
};

const addNote = (isPinned) => {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const noteValue = noteInput.value.trim();
  const today = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  if (!titleValue || !authorValue || !noteValue) return;

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
  window.location.href = "index.html";
});
//  add note
addNoteBtn.addEventListener("click", () => {
  validateForm();
  const isPinned = false;
  addNote(isPinned);
});
addPinnedBtn.addEventListener("click", () => {
  validateForm();
  const isPinned = true;
  addNote(isPinned);
});
