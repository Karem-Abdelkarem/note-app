import { noteDetailsSection, noteUl, pinnedNoteUl } from "./elements";
import { initNotesListeners } from "./eventListenrs";

export const fetchFromDB = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveInDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteNote = (index) => {
  const question = confirm("Are you sure you want to delete this note?");
  if (!question) return;

  const notes = fetchFromDB("notes") || [];
  notes.splice(index, 1);
  saveInDB("notes", notes);
  renderNotes(notes);
};

export const onSearchInputChange = (searchValue) => {
  const notes = fetchFromDB("notes") || [];
  const normalizedValue = searchValue.toLowerCase().trim();

  if (normalizedValue === "") {
    renderNotes(notes);
    return;
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(normalizedValue) ||
      note.content.toLowerCase().includes(normalizedValue)
  );

  if (filteredNotes.length === 0) {
    noteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
        `;
    pinnedNoteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>No notes found</p>
        </li>
    `;
  } else {
    renderNotes(filteredNotes);
  }
};

export const renderNotes = (notes) => {
  if (notes === null) {
    pinnedNoteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>Pinned your important notes</p>
        </li>
        `;
    noteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>Add your first note</p>
        </li>
    `;
    return;
  } else if (notes.length === 0) {
    pinnedNoteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>Pinned your important notes</p>
        </li>
        `;
    noteUl.innerHTML = `
        <li class="text-center text-gray-500">
            <p>Add your first note</p>
        </li>
    `;
    return;
  }
  let pinnedList = "";
  let normalList = "";

  notes.forEach((note) => {
    const index = notes.findIndex((d) => d.id === note.id);

    const noteTemplate = `
        <li class="note-li cursor-pointer rounded-lg hover:bg-gray-hover transition-all p-2.5" data-index="${index}">
            <h2 class="text-black text-[16px] leading-7 ">${note.title}</h2>
            <p class="text-gray-500 text-[13px] leading-5 mt-1 mb-4 overflow-hidden text-ellipsis">
            ${note.content}
            </p>
            <div class="flex justify-between items-center text-[13px]">
              <p class="text-gray-500">${note.date}</p>
              <button
                class="delete-btn mr-8 cursor-pointer text-orange-300 hover:text-orange-500 active:text-orange-500 transition-all p-1" data-index="${index}">Delete</button>
            </div>
          </li>
        `;
    if (note.isPinned) {
      pinnedList += noteTemplate;
    } else {
      normalList += noteTemplate;
    }
  });
  pinnedNoteUl.innerHTML = pinnedList;
  noteUl.innerHTML = normalList;
  initNotesListeners();
};

export const noteDetails = (index) => {
  if (noteDetailsSection.classList.contains("left-full")) {
    noteDetailsSection.classList.remove("left-full");
  }
  noteDetailsSection.classList.add("left-0");

  const notes = fetchFromDB("notes") || [];

  noteDetailsSection.innerHTML = `
    <h1 class="text-[26px] leading-8">${notes[index].title}</h1>
    <div class="text-gray-500 text-sm mt-3.5 mb-9">
        <span>${notes[index].date}</span>
        /
        <span>By ${notes[index].author}</span>
    </div>
    <p class="leading-7">
        ${notes[index].content}
    </p>
  `;
};

export const initApp = () => {
  const notes = fetchFromDB("notes") || [];
  renderNotes(notes);
};
