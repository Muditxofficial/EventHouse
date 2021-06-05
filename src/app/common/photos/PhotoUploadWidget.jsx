import cuid from "cuid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Grid, Header } from "semantic-ui-react";
import { uploadToFirebaseStorage } from "../../firestore/firebaseService";
import { updateUserProfilePhoto } from "../../firestore/firestoreService";
import { getFileExtentsion } from "../util/util";
import PhototWidgetCropper from "./PhotoWidgetCropper";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";

export default function PhotoUploadWidget({ setEditMode }) {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleUploadImage() {
    setLoading(true);
    const filename = cuid() + "." + getFileExtentsion(files[0].name);
    const uploadTask = uploadToFirebaseStorage(image, filename);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // eslint-disable-next-line no-unused-vars
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          updateUserProfilePhoto(downloadURL, filename)
            .then(() => {
              setLoading(false);
              handleCancelCrop();
              setEditMode(false);
            })
            .catch((error) => {
              toast.error(error.message);
              setLoading(false);
            });
        });
      }
    );
  }

  function handleCancelCrop() {
    setFiles([]);
    setImage(null);
  }
  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 1 -- Add Photos" />
        <PhotoWidgetDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 2 -- Reszie" />
        {files.length > 0 && (
          <PhototWidgetCropper
            setImage={setImage}
            imagePreview={files[0].preview}
          />
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 3 -- Preview and Upload" />
        {files.length > 0 && (
          <>
            <div
              className="img-preview"
              style={{ minHeight: 200, minWidth: 200, overflow: "hidden" }}
            />
            <Button.Group>
              <Button
                loading={loading}
                onClick={handleUploadImage}
                style={{ width: 100 }}
                positive
                icon="check"
              />
              <Button
                disabled={loading}
                onClick={handleCancelCrop}
                style={{ width: 100 }}
                icon="close"
              />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
}
