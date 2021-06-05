import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Header, Icon } from "semantic-ui-react";

export default function PhotoWidgetDropzone({ setFiles }) {
  const dropzoneStyles = {
    border: "dashed 3px #eee",
    borderRadius: "5%",
    paddingTop: "30px",
    textAligin: "center",
  };
  const dropzoneActive = {
    border: "dashed 3px green",
  };
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={
        isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
      }
    >
      <input {...getInputProps()} />
      <Icon name="upload" size="huge" style={{ marginLeft: "0.8em" }} />
      <Header content="Drop Image Here" style={{ marginLeft: "0.8em" }} />
    </div>
  );
}
