import CustomHeader from "./react-keyed-file-browser/MyTableHeader";
import FileBrowser from "react-keyed-file-browser";
import "react-keyed-file-browser/dist/react-keyed-file-browser.css";

const testfiles = [
  {
    key: "photos/animals/cat in a hat.png",
    modified: Date.now(),
    size: 1.5 * 1024 * 1024,
  },
  {
    key: "photos/animals/kitten_ball.png",
    modified: Date.now(),
    size: 545 * 1024,
  },
  {
    key: "photos/animals/elephants/",
  },
  {
    key: "photos/funny fall.gif",
    modified: Date.now(),
    size: 13.2 * 1024 * 1024,
  },
  {
    key: "photos/holiday.jpg",
    modified: Date.now(),
    size: 85 * 1024,
  },
  {
    key: "documents/letter chunks.doc",
    modified: Date.now(),
    size: 480 * 1024,
  },
  {
    key: "documents/export.pdf",
    modified: Date.now(),
    size: 4.2 * 1024 * 1024,
  },
];
const FileNav = () => {
  return (
    <FileBrowser
      files={testfiles}
      headerRenderer={CustomHeader}
      onCreateFolder={() => console.log("create")}
      onCreateFiles={() => console.log("createfiles")}
      onMoveFolder={() => console.log("move folder")}
      onMoveFile={() => console.log("move file")}
    />
  );
};

export default FileNav;
