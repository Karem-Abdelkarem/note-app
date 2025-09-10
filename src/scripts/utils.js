import { noteUl, pinnedNoteUl } from "./elements";

export const fetchFromDB = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveInDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const renderNotes = (notes) => {
  let pinnedList = "";
  let normalList = "";

  notes.forEach((note) => {
    const index = notes.findIndex((d) => d.id === note.id);

    const noteTemplate = `
        <li class="note-element cursor-pointer rounded-lg hover:bg-gray-hover transition-all p-2.5">
            <h2 class="text-black text-[16px] leading-7 ">${note.title}</h2>
            <p class="text-gray-500 text-[13px] leading-5 mt-1 mb-4 overflow-hidden text-ellipsis">
            ${note.content}
            </p>
            <div class="flex justify-between items-center text-[13px]">
              <p class="text-gray-500">${note.date}</p>
              <button
                class="mr-8 cursor-pointer text-orange-300 hover:text-orange-500 active:text-orange-500 transition-all p-1" data-index="${index}">Delete</button>
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
};

export const initApp = () => {
  const notes = fetchFromDB("notes") || [];
  renderNotes(notes);
};
