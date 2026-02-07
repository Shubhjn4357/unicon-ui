/**
 * Accessibility Constants
 * WCAG 2.1/2.2 compliance helpers and ARIA templates
 */

/**
 * ARIA Label Templates
 */
export const ARIA_LABELS = {
  close: "Close",
  open: "Open",
  menu: "Menu",
  dialog: "Dialog",
  loading: "Loading",
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Information",
  search: "Search",
  toggleTheme: "Toggle theme",
  previousPage: "Go to previous page",
  nextPage: "Go to next page",
  firstPage: "Go to first page",
  lastPage: "Go to last page",
} as const

/**
 * Screen Reader Announcements
 */
export const SR_ANNOUNCEMENTS = {
  pageLoaded: "Page loaded",
  contentUpdated: "Content updated",
  formSubmitted: "Form submitted successfully",
  formError: "Form contains errors. Please review and try again.",
  itemAdded: "Item added",
  itemRemoved: "Item removed",
  sortedAscending: "Sorted ascending",
  sortedDescending: "Sorted descending",
} as const

/**
 * Keyboard Navigation Keys
 */
export const KEYBOARD_KEYS = {
  ENTER: "Enter",
  SPACE: " ",
  ESCAPE: "Escape",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  TAB: "Tab",
  HOME: "Home",
  END: "End",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
} as const

/**
 * Focus Trap Priorities
 * Higher numbers indicate higher priority for focus restoration
 */
export const FOCUS_TRAP_PRIORITY = {
  tooltip: 1,
  popover: 2,
  dropdown: 3,
  dialog: 4,
  modal: 5,
} as const

/**
 * Focusable Element Selectors
 * Used for focus trapping and keyboard navigation
 */
export const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
].join(", ")

/**
 * ARIA Roles for Common Components
 */
export const ARIA_ROLES = {
  alert: "alert",
  alertdialog: "alertdialog",
  button: "button",
  checkbox: "checkbox",
  dialog: "dialog",
  menu: "menu",
  menuitem: "menuitem",
  menuitemcheckbox: "menuitemcheckbox",
  menuitemradio: "menuitemradio",
  option: "option",
  radio: "radio",
  searchbox: "searchbox",
  slider: "slider",
  spinbutton: "spinbutton",
  switch: "switch",
  tab: "tab",
  tablist: "tablist",
  tabpanel: "tabpanel",
  tooltip: "tooltip",
  tree: "tree",
  treeitem: "treeitem",
} as const

/**
 * Reduced Motion Transition Alternatives
 * Simplified transitions for prefers-reduced-motion users
 */
export const REDUCED_MOTION_TRANSITIONS = {
  fade: "opacity 0.15s ease-in-out",
  none: "none",
} as const
