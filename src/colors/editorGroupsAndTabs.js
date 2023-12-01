const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": "#2b2b2b",
  "editorGroup.dropBackground": "#2b2b2b",
  "editorGroupHeader.noTabsBackground": "#2b2b2b",
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": "#2b2b2b",
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": "#2b2b2b",
  "tab.activeBackground": theme.background,
  "tab.activeForeground": theme.foreground,
  "tab.border": "#2b2b2b",
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foreground,
  "tab.unfocusedInactiveForeground": theme.foregroundDark,
  "tab.hoverBackground": theme.background,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.activeModifiedBorder": "#6699cc",
  "tab.inactiveModifiedBorder": "#5986B3",
  "tab.unfocusedActiveModifiedBorder": "#6699cc",
  "tab.unfocusedInactiveModifiedBorder": "#5986B3",
  "tab.activeBorderTop": theme.yellow,
  // "tab.unfocusedActiveBorderTop": "#",
  // "tab.hoverBorder": "#2b2b2b",
  // "tab.unfocusedHoverBorder": "#2b2b2b",
  // "editor.selectionHighlightBorder": "#f00",
  // "editor.wordHighlightBorder": "#f00",
  // "editor.wordHighlightStrongBorder": "#f00",
  // "editor.findMatchBorder": theme.foregroundDark,
  // "editor.findMatchHighlightBorder": "#f09",
  // "editor.findRangeHighlightBorder": "#f00",
  // "editor.rangeHighlightBorder": "#f00",
};
