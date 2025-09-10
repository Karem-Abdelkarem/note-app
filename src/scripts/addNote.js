import {
  addNoteBtn,
  addPinnedBtn,
  authorInput,
  noteInput,
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

  const notes = fetchFromDB("note") || [];
  notes.unshift(note);

  saveInDB("notes", notes);

  titleInput.value = "";
  authorInput.value = "";
  noteInput.value = "";
};

addNoteBtn.addEventListener("click", () => {
  const isPinned = false;
  addNote(isPinned);
});
addPinnedBtn.addEventListener("click", () => {
  const isPinned = true;
  addNote(isPinned);
});
