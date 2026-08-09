import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  FiFileText,
  FiTrash2,
  FiRotateCcw,
  FiCopy,
  FiUpload,
  FiSave,
  FiDownload,
  FiMaximize2,
  FiCode,
  FiEye,
  FiLink,
  FiRefreshCw,
  FiSettings,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";
import { PreviewmuiStyles } from "../styles/Muistyles";


const defaultMarkdown = `# Welcome to Markdown Editor

This is a **simple markdown editor** with a live preview.

## Getting Started

You can write text using Markdown syntax.

### Basic Formatting

- **Bold text**
- *Italic text*
- ~~Strikethrough text~~
- [Visit Google](https://google.com)

### Code

\`\`\`javascript
const message = "Hello, Markdown!";
console.log(message);
\`\`\`

### Quote

> Markdown makes writing simple and beautiful.

### Task List

- [x] Create editor
- [x] Add live preview
- [ ] Add more features

### Table

| Feature | Status |
| --- | --- |
| Editor | Done |
| Live Preview | Done |
| Export | Coming Soon |

---

Start writing your own Markdown! 🚀
`;

export default function PreviewConfig() {

  const classes = PreviewmuiStyles();

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [mode, setMode] = useState("split");
  const [fontSize, setFontSize] = useState(15);
  const [syncScroll, setSyncScroll] = useState(true);
  const [copied, setCopied] = useState(false);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [editorWidth, setEditorWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const workspaceRef = useRef(null);
  const editorRef = useRef(null);
  const previewRef = useRef(null);

  const handleDividerMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (event) => {
      const workspace = workspaceRef.current;
      if (!workspace) return;
      const rect = workspace.getBoundingClientRect();
      const dividerWidth = 5;
      const availableWidth = rect.width - dividerWidth;
      const position = event.clientX - rect.left;
      const newWidth =
        (position / availableWidth) * 100;
      setEditorWidth(
        Math.min(80, Math.max(20, newWidth))
      );
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
    };
  }, [isDragging]);

  const handleEditorScroll = () => {
    if (!syncScroll || !editorRef.current || !previewRef.current) {
      return;
    }
    const editor = editorRef.current;
    const preview = previewRef.current;
    const editorScrollable =
      editor.scrollHeight - editor.clientHeight;
    const previewScrollable =
      preview.scrollHeight - preview.clientHeight;
    if (editorScrollable <= 0) return;
    const percentage =
      editor.scrollTop / editorScrollable;
    preview.scrollTop =
      percentage * previewScrollable;
  };


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);

    } catch (error) {
      console.error("Copy failed:", error);
    }
  };


  const handleDownloadEditor = () => {
    const blob = new Blob(
      [markdown],
      { type: "text/markdown" }
    );
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "document.md";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPreview = () => {
    const pdf = new jsPDF();

    pdf.text(markdown, 10, 10);

    pdf.save("markdown-document.pdf");
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };


  const characterCount = markdown.length;
  const wordCount =
    markdown.trim()
      ? markdown.trim().split(/\s+/).length
      : 0;
  const lineCount =
    markdown
      ? markdown.split("\n").length
      : 0;

  const readingTime =
    Math.max(1, Math.ceil(wordCount / 200));


  return (
    <div className={classes.markpreviewContainer}>
      <header className={classes.markpreviewHeader}>

        <div className={classes.markpreviewBrand}>

          <div className={classes.markpreviewBrandIcon}>
            <FiFileText />
          </div>

          <div className={classes.markpreviewBrandInfo}>
            <div className={classes.markpreviewTitle}>
              Markdown Editor
            </div>

            <span className={classes.markpreviewLiveBadge}>
              Live Preview
            </span>
          </div>

        </div>


        <div className={classes.markpreviewToolbar}>
          <div className={classes.markpreviewDropdownWrapper}>

            {templateOpen && (

              <div className={classes.markpreviewDropdown}>

                <button
                  onClick={() =>
                    handleTemplate("blank")
                  }
                >
                  Blank Document
                </button>

                <button
                  onClick={() =>
                    handleTemplate("readme")
                  }
                >
                  README
                </button>

                <button
                  onClick={() =>
                    handleTemplate("documentation")
                  }
                >
                  Documentation
                </button>

              </div>

            )}

          </div>

          <div className={classes.markpreviewViewModes}>

            <button
              className={
                mode === "split"
                  ? classes.markpreviewModeActive
                  : classes.markpreviewModeButton
              }
              onClick={() =>
                handleModeChange("split")
              }
            >
              Split
            </button>


            <button
              className={
                mode === "editor"
                  ? classes.markpreviewModeActive
                  : classes.markpreviewModeButton
              }
              onClick={() =>
                handleModeChange("editor")
              }
            >
              <FiCode />
              Editor
            </button>


            <button
              className={
                mode === "preview"
                  ? classes.markpreviewModeActive
                  : classes.markpreviewModeButton
              }
              onClick={() =>
                handleModeChange("preview")
              }
            >
              <FiEye />
              Preview
            </button>

          </div>
          <div className={classes.markpreviewFontControl}>

            <FiSettings />

            <select
              value={fontSize}
              onChange={(event) =>
                setFontSize(Number(event.target.value))
              }
            >
              <option value={11}>11px</option>
              <option value={12}>12px</option>
              <option value={13}>13px</option>
              <option value={14}>14px</option>
              <option value={15}>15px</option>
              <option value={16}>16px</option>
            </select>

          </div>
          <button
            className={
              syncScroll
                ? classes.markpreviewSyncButtonActive
                : classes.markpreviewSyncButton
            }
            onClick={() =>
              setSyncScroll(!syncScroll)
            }
          >
            <FiRefreshCw />
            Sync Scroll
          </button>
        </div>
      </header>
      <div
        ref={workspaceRef}
        className={`${classes.markpreviewWorkspace} ${isDragging ? "markpreview-dragging" : ""
          }`}
      >
        {mode !== "preview" && (

          <section
            className={
              mode === "editor"
                ? classes.markpreviewEditorPanelFull
                : classes.markpreviewEditorPanel
            }
            style={
              mode === "split"
                ? { width: `${editorWidth}%` }
                : undefined
            }
          >

            <div className={classes.markpreviewPanelHeader}>

              <div className={classes.markpreviewPanelTitle}>
                Editor
              </div>


              <div className={classes.markpreviewPanelActions}>

                <button
                  title="Clear"
                  onClick={() => setMarkdown("")}
                >
                  <FiTrash2 />
                </button>

                <button
                  title="Undo"
                  onClick={() => {
                    document.execCommand("undo");
                  }}
                >
                  <FiRotateCcw />
                </button>

                <button
                  title="Copy"
                  onClick={handleCopy}
                >
                  {copied
                    ? <FiCheck />
                    : <FiCopy />
                  }
                </button>

                <button
                  title="Upload"
                  onClick={() => {
                    document
                      .getElementById(
                        "markpreview-file-input"
                      )
                      ?.click();
                  }}
                >
                  <FiUpload />
                </button>

                <button
                  title="Save"
                  onClick={handleDownloadEditor}
                >
                  <FiSave />
                </button>

                <button
                  title="Download"
                  onClick={handleDownloadEditor}
                >
                  <FiDownload />
                </button>

              </div>

            </div>


            <textarea
              ref={editorRef}
              className={classes.markpreviewEditor}
              style={{
                fontSize: `${fontSize}px`,
              }}
              value={markdown}
              spellCheck={false}
              onChange={(event) =>
                setMarkdown(event.target.value)
              }
              onScroll={handleEditorScroll}
              placeholder="Start writing Markdown..."
            />


            <input
              id="markpreview-file-input"
              type="file"
              accept=".md,.markdown,.txt"
              hidden
              onChange={(event) => {

                const file =
                  event.target.files?.[0];

                if (!file) return;

                const reader =
                  new FileReader();

                reader.onload = (e) => {
                  setMarkdown(
                    e.target?.result || ""
                  );
                };

                reader.readAsText(file);

              }}
            />


            <div className={classes.markpreviewStats}>

              <span>
                {characterCount.toLocaleString()} characters
              </span>

              <span className={classes.markpreviewStatsDivider}>
                |
              </span>

              <span>
                {wordCount} words
              </span>

              <span className={classes.markpreviewStatsDivider}>
                |
              </span>

              <span>
                {lineCount} lines
              </span>


              <span className={classes.markpreviewReadingTime}>
                Reading time: ~{readingTime} min
              </span>

            </div>

          </section>

        )}
        <div
          className={classes.markpreviewDivider}
          onMouseDown={handleDividerMouseDown}
        >
          <div className={classes.markpreviewDividerHandle} />
        </div>

        {mode !== "editor" && (
          <section
            className={
              mode === "preview"
                ? classes.markpreviewPreviewPanelFull
                : classes.markpreviewPreviewPanel
            }
            style={
              mode === "split"
                ? { width: `${editorWidth}%` }
                : undefined
            }
          >

            <div className={classes.markpreviewPanelHeader}>

              <div className={classes.markpreviewPanelTitle}>
                Preview
              </div>


              <div className={classes.markpreviewPanelActions}>

                <button
                  title="Copy Markdown"
                  onClick={handleCopy}
                >
                  {copied
                    ? <FiCheck />
                    : <FiCopy />
                  }
                </button>

                <button
                  title="Copy HTML"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      document.querySelector(
                        ".markpreviewMarkdown"
                      )?.innerHTML || ""
                    );
                  }}
                >
                  <FiCode />
                </button>

                <button
                  title="Download"
                  onClick={handleDownloadPreview}
                >
                  <FiDownload />
                </button>
              </div>

            </div>


            <div
              ref={previewRef}
              className={classes.markpreviewPreview}
              style={{
                fontSize: `${fontSize}px`,
              }}
            >

              <article className="markpreviewMarkdown">

                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {markdown}
                </ReactMarkdown>

              </article>

            </div>


            <div className={classes.markpreviewPreviewStatus}>

              <span>
                {characterCount.toLocaleString()} characters
              </span>

              <span>
                Live Rendered View
              </span>

            </div>

          </section>

        )}

      </div>

    </div>
  );
}

