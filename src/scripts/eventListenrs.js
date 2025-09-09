import { closeSidebarIcon, menuIcon, sidebar } from "./elements";

export const initControllerEvents = () => {
  menuIcon.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
  });
  closeSidebarIcon.addEventListener("click", () => {
    sidebar.classList.add("hidden");
  });
};
