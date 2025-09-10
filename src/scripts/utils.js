import { authorInput, noteInput, titleInput } from "./elements";

const fetchFromDB = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const saveInDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const addNote = (isPinned) => {
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
