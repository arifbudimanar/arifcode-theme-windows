const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": "#2b2b2b",
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": "#2b2b2b",
  "editorSuggestWidget.foreground": theme.foreground,
  "editorSuggestWidget.highlightForeground": theme.green,
  "editorSuggestWidget.selectedBackground": "#2b2b2b",
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.foreground": theme.foreground,
  "editorHoverWidget.border": "#2b2b2b",
  "editorHoverWidget.highlightForeground": theme.green,
  "editorHoverWidget.statusBarBackground": theme.backgroundDark,
  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": "#2b2b2b",
  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.yellow,
  "editorMarkerNavigationWarning.background": theme.yellow
};
