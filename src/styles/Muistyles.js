import { makeStyles } from "@mui/styles";


export const PreviewmuiStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      background: "#11151d",
    },

    body: {
      margin: 0,
      padding: 0,
      background: "#11151d",
    },

    "#root": {
      minHeight: "100vh",
      background: "#11151d",
    },
  },
  markpreviewContainer: {
    width: "100%",
    height: "100vh",
    minHeight: 600,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#11151d",
    color: "#e5e7eb",
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    "& *": {
      boxSizing: "border-box",
    },

    "& button": {
      fontFamily: "inherit",
    },
  },

  markpreviewHeader: {
    height: 55,
    minHeight: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 14px",
    background: "#171c25",
    borderBottom: "1px solid #272d38",
    zIndex: 20,

    "@media (max-width: 850px)": {
      height: 52,
      minHeight: 52,
    },

    "@media (max-width: 600px)": {
      padding: "0 8px",
    },
  },

  markpreviewBrand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 190,

    "@media (max-width: 600px)": {
      minWidth: "auto",
      gap: 7,
    },
  },

  markpreviewBrandIcon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    color: "#8b7cff",
    background: "#24283a",
    border: "1px solid #34394c",
    fontSize: 18,

    "@media (max-width: 600px)": {
      width: 28,
      height: 28,
      fontSize: 16,
    },
  },

  markpreviewBrandInfo: {
    display: "flex",
    alignItems: "center",
    gap: 10,

    "@media (max-width: 850px)": {
      gap: 5,
    },
  },

  markpreviewTitle: {
    color: "#f3f4f6",
    fontSize: 25,
    fontWeight: 700,
    whiteSpace: "nowrap",

    "@media (max-width: 600px)": {
      fontSize: 12,
    },
  },

  markpreviewLiveBadge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 8px",
    borderRadius: 20,
    background: "rgba(16, 185, 129, 0.12)",
    color: "#34d399",
    border: "1px solid rgba(52, 211, 153, 0.18)",
    fontSize: 10,
    fontWeight: 600,
    whiteSpace: "nowrap",

    "@media (max-width: 850px)": {
      display: "none",
    },
  },

  markpreviewToolbar: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    height: "100%",

    "@media (max-width: 1100px)": {
      gap: 4,
    },

    "@media (max-width: 600px)": {
      gap: 3,
    },
  },

  markpreviewToolbarButton: {
    height: 34,
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "0 11px",
    border: "1px solid #303643",
    borderRadius: 6,
    background: "#202631",
    color: "#d8dbe2",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background .15s ease, border-color .15s ease",

    "& svg": {
      fontSize: 13,
      flexShrink: 0,
    },

    "&:hover": {
      background: "#292f3b",
      borderColor: "#444b5b",
    },

    "@media (max-width: 1100px)": {
      padding: "0 8px",
    },

    "@media (max-width: 600px)": {
      padding: "0 8px",
      fontSize: 0,

      "& svg": {
        fontSize: 14,
      },
    },
  },

  markpreviewDropdownWrapper: {
    position: "relative",
  },

  markpreviewDropdown: {
    position: "absolute",
    top: 41,
    left: 0,
    width: 180,
    padding: 5,
    background: "#202631",
    border: "1px solid #353c4b",
    borderRadius: 7,
    boxShadow: "0 12px 30px rgba(0,0,0,.35)",
    zIndex: 100,

    "& button": {
      width: "100%",
      border: 0,
      background: "transparent",
      color: "#d9dce3",
      textAlign: "left",
      padding: "9px 10px",
      borderRadius: 5,
      cursor: "pointer",
      fontSize: 11,

      "&:hover": {
        background: "#2c3340",
      },
    },
  },

  markpreviewViewModes: {
    height: 38,
    display: "flex",
    alignItems: "center",
    padding: 3,
    background: "#10141b",
    border: "1px solid #292f3b",
    borderRadius: 7,
  },

  markpreviewModeButton: {
    height: 32,
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "0 13px",
    border: 0,
    borderRadius: 5,
    background: "transparent",
    color: "#858c99",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,

    "& svg": {
      fontSize: 16,
    },

    "&:hover": {
      color: "#d9dce3",
      background: "#202631",
    },

    "@media (max-width: 600px)": {
      padding: "0 9px",
      fontSize: 0,

      "& svg": {
        fontSize: 16,
      },
    },
  },

  markpreviewModeActive: {
    height: 32,
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "0 13px",
    border: 0,
    borderRadius: 5,
    background: "#5b45e6",
    color: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 700,
    boxShadow: "0 2px 8px rgba(91, 69, 230, .25)",

    "& svg": {
      fontSize: 16,
    },

    "@media (max-width: 600px)": {
      padding: "0 9px",
      fontSize: 0,

      "& svg": {
        fontSize: 16,
      },
    },
  },

  markpreviewFontControl: {
    height: 38,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 12px",
    background: "#202631",
    border: "1px solid #303643",
    borderRadius: 6,
    color: "#9299a7",

    "& svg": {
      fontSize: 16,
    },

    "& select": {
      border: 0,
      outline: 0,
      background: "transparent",
      color: "#d9dce3",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",

      "& option": {
        background: "#202631",
        color: "#fff",
      },
    },

    "@media (max-width: 850px)": {
      display: "none",
    },
  },
  markpreviewSyncButton: {
    height: 34,
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "0 10px",
    border: "1px solid #343a48",
    borderRadius: 6,
    background: "#202631",
    color: "#9aa1ae",
    cursor: "pointer",
    fontSize: 10,
    fontWeight: 600,

    "& svg": {
      fontSize: 13,
      flexShrink: 0,
    },

    "@media (max-width: 1100px)": {
      padding: "0 8px",
    },

    "@media (max-width: 850px)": {
      "&:after": {
        content: '"Sync"',
      },
    },

    "@media (max-width: 600px)": {
      fontSize: 0,
      padding: "0 8px",

      "& svg": {
        fontSize: 14,
      },

      "&:after": {
        content: "none",
      },
    },
  },

  markpreviewSyncButtonActive: {
    height: 36,
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "0 13px",
    border: "1px solid rgba(91, 69, 230, .5)",
    borderRadius: 6,
    background: "rgba(91, 69, 230, .12)",
    color: "#9c8cff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,

    "& svg": {
      fontSize: 16,
      flexShrink: 0,
    },

    "@media (max-width: 1100px)": {
      padding: "0 10px",
    },

    "@media (max-width: 850px)": {
      "&:after": {
        content: '"Sync"',
      },
    },

    "@media (max-width: 600px)": {
      fontSize: 0,
      padding: "0 9px",

      "& svg": {
        fontSize: 16,
      },

      "&:after": {
        content: "none",
      },
    },
  },

  markpreviewResetButton: {
    height: 34,
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "0 10px",
    border: "1px solid #303643",
    borderRadius: 6,
    background: "#202631",
    color: "#9aa1ae",
    cursor: "pointer",
    fontSize: 10,
    fontWeight: 600,

    "& svg": {
      fontSize: 13,
      flexShrink: 0,
    },

    "&:hover": {
      color: "#e5e7eb",
      background: "#292f3b",
    },

    "@media (max-width: 1100px)": {
      padding: "0 8px",
    },

    "@media (max-width: 600px)": {
      fontSize: 0,
      padding: "0 8px",

      "& svg": {
        fontSize: 14,
      },
    },
  },

  markpreviewWorkspace: {
    flex: 1,
    minHeight: 0,
    width: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",

    "@media (max-width: 850px)": {
      flexDirection: "column",
    },
  },

  markpreviewEditorPanel: {
    width: "50%",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    overflow: "hidden",
    background: "#1b2029",
    borderRight: "1px solid #303641",

    "@media (max-width: 850px)": {
      width: "100%",
      height: "50%",
      borderRight: 0,
      borderBottom: "1px solid #303641",
    },
  },

  markpreviewEditorPanelFull: {
    width: "100%",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#1b2029",
  },

  markpreviewPreviewPanel: {
    width: "calc(50% - 5px)",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    overflow: "hidden",
    background: "#fff",
    color: "#20242c",

    "& $markpreviewPanelHeader": {
      background: "#f8f9fb",
      borderBottomColor: "#e1e4e9",
    },

    "@media (max-width: 850px)": {
      width: "100%",
      height: "50%",
    },
  },

  markpreviewPreviewPanelFull: {
    width: "100%",
    minWidth: 0,
    minHeight: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#f8f9fb",
    color: "#20242c",
  },

  markpreviewDivider: {
    width: 5,
    minWidth: 5,
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: "#303641",
    cursor: "col-resize",
    zIndex: 10,

    "&:hover": {
      background: "#5b45e6",
    },

    "&:active": {
      background: "#5b45e6",
    },

    "@media (max-width: 850px)": {
      display: "none",
    },
  },

  markpreviewDividerHandle: {
    width: 3,
    height: 42,
    borderRadius: 5,
    background: "#686f7d",
    transition: "height .15s ease, background .15s ease",

    "$markpreviewDivider:hover &": {
      height: 55,
      background: "#fff",
    },
  },

  markpreviewPanelHeader: {
    height: 44,
    minHeight: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    borderBottom: "1px solid #303641",
    background: "#1a1f28",
  },

  markpreviewPanelTitle: {
    color: "#818181",
    fontSize: 17,
    fontWeight: 700,
  },

  markpreviewPanelActions: {
    display: "flex",
    alignItems: "center",
    gap: 4,

    "& button": {
      width: 27,
      height: 27,
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      borderRadius: 5,
      background: "transparent",
      color: "#7f8795",
      cursor: "pointer",

      "& svg": {
        fontSize: 14,
      },

      "&:hover": {
        color: "#dce0e8",
        background: "#292f39",
      },
    },
  },

  markpreviewEditor: {
    flex: 1,
    width: "100%",
    minHeight: 0,
    resize: "none",
    border: 0,
    outline: 0,
    padding: "20px 16px",
    overflowY: "auto",
    background: "#1b2029",
    color: "#e3e7ee",
    fontFamily: '"JetBrains Mono", "Fira Code", Consolas, monospace',
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: "0.05px",
    tabSize: 2,

    "&::selection": {
      background: "rgba(91, 69, 230, .35)",
    },

    "&::placeholder": {
      color: "#5f6673",
    },

    "&::-webkit-scrollbar": {
      width: 8,
    },

    "&::-webkit-scrollbar-track": {
      background: "#171b23",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#3a414e",
      borderRadius: 10,

      "&:hover": {
        background: "#4b5361",
      },
    },

    "@media (max-width: 600px)": {
      padding: "15px 12px",
    },
  },

  markpreviewStats: {
    height: 27,
    minHeight: 27,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 15px",
    background: "#191e26",
    borderTop: "1px solid #292f38",
    color: "#7d8592",
    fontSize: 9,
  },

  markpreviewStatsDivider: {
    color: "#444b56",
  },

  markpreviewReadingTime: {
    marginLeft: "auto",
    color: "#78818e",
  },

  markpreviewPreview: {
    flex: 1,
    minHeight: 0,
    width: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "30px 32px",
    background: "#fff",
    color: "#252a33",
    lineHeight: 1.65,

    "&::-webkit-scrollbar": {
      width: 8,
    },

    "&::-webkit-scrollbar-track": {
      background: "#f1f2f4",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#c9cdd4",
      borderRadius: 10,

      "&:hover": {
        background: "#aeb4be",
      },
    },

    "@media (max-width: 850px)": {
      padding: 20,
    },

    "@media (max-width: 600px)": {
      padding: "20px 15px",
    },
  },

  markpreviewMarkdown: {
    maxWidth: "100%",
    margin: "0 auto",
    color: "#2a2e36",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    "& h1": {
      margin: "0 0 18px",
      paddingBottom: 10,
      borderBottom: "1px solid #e2e4e8",
      color: "#171b22",
      fontSize: "2em",
      lineHeight: 1.25,
      fontWeight: 700,
    },

    "& h2": {
      margin: "28px 0 13px",
      paddingBottom: 8,
      borderBottom: "1px solid #e5e7eb",
      color: "#272c34",
      fontSize: "1.55em",
      lineHeight: 1.3,
    },

    "& h3": {
      margin: "23px 0 10px",
      color: "#30353e",
      fontSize: "1.25em",
    },

    "& h4": {
      margin: "20px 0 8px",
      color: "#363b44",
    },

    "& p": {
      margin: "0 0 15px",
      color: "#454b55",
      lineHeight: 1.7,
    },

    "& strong": {
      color: "#272c34",
      fontWeight: 700,
    },

    "& em": {
      color: "#555b65",
    },

    "& a": {
      color: "#4f46c7",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },

    "& ul, & ol": {
      paddingLeft: 25,
      margin: "10px 0 18px",
    },

    "& li": {
      marginBottom: 7,
      color: "#424852",
    },

    "& blockquote": {
      margin: "18px 0",
      padding: "10px 16px",
      borderLeft: "4px solid #7564e8",
      borderRadius: "0 5px 5px 0",
      background: "#f5f4ff",
      color: "#55516e",
    },

    "& hr": {
      height: 1,
      margin: "25px 0",
      border: 0,
      background: "#e3e5e8",
    },

    "& img": {
      maxWidth: "100%",
      height: "auto",
      borderRadius: 6,
    },

    "& code": {
      padding: "2px 5px",
      borderRadius: 4,
      background: "#eef0f3",
      color: "#c02f4e",
      fontFamily: '"JetBrains Mono", "Fira Code", Consolas, monospace',
      fontSize: ".9em",
    },

    "& pre": {
      margin: "18px 0",
      padding: 16,
      overflowX: "auto",
      borderRadius: 8,
      background: "#101827",
      boxShadow: "0 2px 8px rgba(0,0,0,.08)",

      "& code": {
        padding: 0,
        background: "transparent",
        color: "#e4e8ef",
        fontSize: ".9em",
        lineHeight: 1.65,
      },
    },

    "& table": {
      width: "100%",
      margin: "18px 0",
      borderCollapse: "collapse",
      fontSize: ".95em",
    },

    "& th": {
      padding: "9px 12px",
      border: "1px solid #dfe2e6",
      background: "#f4f5f7",
      color: "#282d35",
      fontWeight: 700,
      textAlign: "left",
    },

    "& td": {
      padding: "9px 12px",
      border: "1px solid #dfe2e6",
      color: "#4a5059",
    },

    "& tr:nth-child(even)": {
      background: "#fafafa",
    },

    "& input[type='checkbox']": {
      marginRight: 7,
      accentColor: "#5b45e6",
    },

    "& ul.contains-task-list": {
      paddingLeft: 5,
      listStyle: "none",
    },

    "& li.task-list-item": {
      listStyle: "none",
    },
  },

  markpreviewPreviewStatus: {
    height: 27,
    minHeight: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 14px",
    borderTop: "1px solid #e2e4e8",
    background: "#f7f8fa",
    color: "#7b818b",
    fontSize: 9,
  },
}));