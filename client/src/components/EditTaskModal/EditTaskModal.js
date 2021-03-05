import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, Button, Modal, IconButton } from "@material-ui/core";
import { Clear, Edit } from "@material-ui/icons";
import { SectionTitle, LightButton, Attachment } from "components";
import EditDescription from "./EditDescription";
import { modalStyles } from "./styles";

const placeholder =
  "https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop";

const EditTaskModal = ({
  open,
  handleClose,
  coverImageRegular,
  editDescription,
  description,
}) => {
  const classes = modalStyles();
  const [displayEditArea, setDisplayEditArea] = useState(false);

  const handleEditButtonClick = () => {
    setDisplayEditArea(!displayEditArea);
  };

  const closeEditArea = () => {
    setDisplayEditArea(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.container}>
        <Grid className={classes.gridContainer} container direction="column">
          {/* image - close button */}
          <Grid
            className={classes.gridItem}
            item
            container
            justify="flex-end"
            xs={12}
          >
            <IconButton
              onClick={() => handleClose()}
              className={classes.closeButton}
              aria-label="delete"
            >
              <Clear />
            </IconButton>
            <img
              className={classes.image}
              src={
                coverImageRegular !== undefined
                  ? coverImageRegular
                  : `${placeholder}&w=1280&q=80`
              }
            />
          </Grid>
          {/*this is the left side of modal in big screens */}
          <Grid className={classes.gridItem} item container xs={9}>
            <Grid item xs={12}>
              <Typography className={classes.taskTitle}>
                ✋🏿 Move anything that is actually started here
              </Typography>
            </Grid>
            {/*inlist - inprogress */}
            <Grid item container xs={12}>
              <Grid item>
                <Typography
                  style={{ color: "#BDBDBD" }}
                  className={classes.listTitle}
                >
                  in list
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  style={{ marginLeft: "8px" }}
                  className={classes.listTitle}
                >
                  In Progress
                </Typography>
              </Grid>
            </Grid>
            {/*description - edit */}
            <Grid item container xs={12} style={{ marginBottom: "16px" }}>
              <Grid
                item
                container
                alignItems="center"
                style={{ width: "100px" }}
              >
                <SectionTitle title="Description" icon="description" />
              </Grid>
              <Grid item xs={2}>
                <LightButton
                  handleClick={handleEditButtonClick}
                  icon="edit"
                  text="Edit"
                />
              </Grid>
            </Grid>
            {/*description itself */}
            <Grid
              style={{
                display: displayEditArea ? "none" : "flex",
                marginBottom: "24px",
              }}
              item
              container
              xs={12}
            >
              <Typography className={classes.description}>
                {description}
              </Typography>
            </Grid>
            {/*edit description */}
            <Grid
              style={{
                display: displayEditArea ? "flex" : "none",
                marginBottom: "24px",
              }}
              item
              container
              xs={12}
            >
              <EditDescription
                descriptionValue={description}
                editDescription={editDescription}
                handleClose={closeEditArea}
              />
            </Grid>
            {/* Attachment - Add */}
            <Grid item container xs={12} style={{ marginBottom: "16px" }}>
              <Grid
                item
                container
                alignItems="center"
                style={{ width: "100px" }}
              >
                <SectionTitle title="Attachment" icon="description" />
              </Grid>
              <Grid item xs={2}>
                <LightButton icon="add" text="Add" />
              </Grid>
            </Grid>
            {/*  attachment itself*/}
            <Grid item container xs={12}>
              <Grid item xs={12} style={{marginBottom: "32px"}}>
                <Attachment image={{ src: placeholder, alt: "kekw" }} date="July 5, 2020" title="Reasoning by Ranganath Krishnamani" />
              </Grid>
              <Grid item xs={12} style={{marginBottom: "32px"}}>
                <Attachment file={{ text: "TXT" }} date="July 5, 2020" title="Gatsby-config.js" />
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.gridContainer} item container xs={3}></Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
