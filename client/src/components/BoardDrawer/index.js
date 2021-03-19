import React, { useState, useContext, useEffect } from "react";
import { UIContext } from "provider/UIProvider";
import { BoardHelpers } from "helpers";
import {
  Drawer,
  Grid,
  Typography,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { SectionTitle, EditInput, LightButton } from "components";
import { Close } from "@material-ui/icons";
import { drawerStyles } from "./styles";

const BoardDrawer = ({ board }) => {
  const classes = drawerStyles();
  const [displayDescriptionEditArea, setDisplayDescriptionEditArea] = useState(
    false
  );
  const [displayTitleEditArea, setDisplayTitleEditArea] = useState(false);
  const { drawerOpen, changeDrawerVisibility, setRenderedBoard } = useContext(
    UIContext
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    changeDrawerVisibility(false);
  };

  const closeDescriptionEditArea = () => {
    setDisplayDescriptionEditArea(false);
  };

  const closeTitleEditArea = () => {
    setDisplayTitleEditArea(false);
  };

  const editDescription = (description) => {
    setRenderedBoard({ ...board, description: description });
    BoardHelpers.HandleBoardPropertyUpdate(board.id, "description", description)
  };

  const editTitle = (title) => {
    setRenderedBoard({ ...board, title: title });
    BoardHelpers.HandleBoardPropertyUpdate(board.id, "title", title)
  };

  const removeUser = (user) => {
    console.log(user)
  }

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      classes={{ paper: classes.drawer }}
    >
      {board && (
        <Grid container justify="center">
          {/* MENU - X BUTTON */}
          <Grid
            item
            container
            xs={11}
            alignItems="center"
            className={classes.gridItem}
            style={{ borderBottom: "1px solid #E0E0E0", marginTop: "8px" }}
          >
            <Grid item xs>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.menuTitle}
              >
                Menu
              </Typography>
            </Grid>
            <Grid item xs={2} container justify="flex-end">
              <IconButton
                className={classes.closeButton}
                onClick={() => changeDrawerVisibility(false)}
              >
                <Close />
              </IconButton>
            </Grid>
          </Grid>
          {/* MADE BY - AVATAR */}
          <Grid item container xs={11} className={classes.gridItem}>
            <Grid item xs>
              <SectionTitle
                title="Made by"
                icon="account"
                alignItems="baseline"
              />
            </Grid>
            {board.admin && (
              <Grid item container xs={12} style={{ marginTop: "14px" }}>
                <Grid item style={{ width: "45px" }}>
                  <Avatar
                    src={board.admin.picture}
                    alt={board.admin.name}
                    className={classes.avatar}
                  />
                </Grid>
                <Grid item container xs>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      className={classes.memberName}
                    >
                      {board.admin.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.date}
                    >
                      on {board.date}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          {/* TITLE - EDIT BUTTON */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
            style={{ marginTop: "8px" }}
          >
            <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
              <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
                <SectionTitle
                  title="Title"
                  icon="description"
                  alignItems="end"
                />
              </Grid>
            </Grid>
            <Grid item xs container justify="start">
              <LightButton
                handleClick={() =>
                  setDisplayTitleEditArea(!displayTitleEditArea)
                }
                icon="edit"
                text="Edit"
              />
            </Grid>
          </Grid>
          {/* EDIT TITLE */}
          <Grid
            style={{
              display: displayTitleEditArea ? "flex" : "none",
              marginBottom: "24px",
            }}
            item
            container
            xs={11}
          >
            <EditInput
              value={board.title || ""}
              editInput={editTitle}
              handleClose={closeTitleEditArea}
              label="Title"
            />
          </Grid>
          {/* TITLE ITSELF */}
          <Grid
            style={{
              display: displayTitleEditArea ? "none" : "flex",
              marginBottom: "12px",
            }}
            item
            container
            xs={11}
          >
            <Typography variant="body1" className={classes.menuTitle}>
              {board.title || ""}
            </Typography>
          </Grid>
          {/* DESCRIPTION - EDIT BUTTON */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
            style={{ marginTop: "8px" }}
          >
            <Grid item xs style={{ width: "120px", maxWidth: "120px" }}>
              <SectionTitle
                title="Description"
                icon="description"
                alignItems="end"
              />
            </Grid>
            <Grid item xs={2}>
              <LightButton
                handleClick={() =>
                  setDisplayDescriptionEditArea(!displayDescriptionEditArea)
                }
                icon="edit"
                text="Edit"
              />
            </Grid>
          </Grid>
          {/* EDIT DESCRIPTION */}
          <Grid
            style={{
              display: displayDescriptionEditArea ? "flex" : "none",
              marginBottom: "24px",
            }}
            item
            container
            xs={11}
          >
            <EditInput
              value={board.description || ""}
              editInput={editDescription}
              handleClose={closeDescriptionEditArea}
              label="Description"
            />
          </Grid>
          {/* DESCRIPTION ITSELF */}
          <Grid
            style={{
              display: displayDescriptionEditArea ? "none" : "flex",
              marginBottom: "12px",
            }}
            item
            container
            xs={11}
          >
            <Typography variant="body1" className={classes.description}>
              {board.description || ""}
            </Typography>
          </Grid>
          {/* TEAM */}
          <Grid
            item
            container
            xs={11}
            className={classes.gridItem}
            alignItems="center"
          >
            <Grid item xs>
              <SectionTitle title="Team" icon="people" alignItems="end" />
            </Grid>
          </Grid>
          {/* MAPPING TEAM MEMBERS */}
          {board.userData &&
            board.userData.map((user, index) => {
              if (index === 0) {
                return (
                  <Grid
                    item
                    container
                    xs={11}
                    className={classes.gridItem}
                    alignItems="center"
                  >
                    <Grid item style={{ width: "50px" }}>
                      <Avatar
                        src={user.picture}
                        alt="Remy Sharp"
                        className={classes.avatar}
                      />
                    </Grid>
                    <Grid item container xs={7}>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          className={classes.memberName}
                        >
                          {user.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          className={classes.adminText}
                        >
                          Admin
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    item
                    container
                    xs={11}
                    className={classes.gridItem}
                    alignItems="center"
                  >
                    <Grid item style={{ width: "50px" }}>
                      <Avatar
                        src={user.picture}
                        alt="Remy Sharp"
                        className={classes.avatar}
                      />
                    </Grid>
                    <Grid item container xs={7}>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          className={classes.memberName}
                        >
                          {user.name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container xs justify="center">
                      <Grid item contaşner xs={9}>
                        <div onClick={() => removeUser(user)} className={classes.redButton}>
                          <Typography
                            variant="subtitle1"
                            component="p"
                            className={classes.redButtonText}
                            style={{ textAlign: "center" }}
                          >
                            Remove
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }
            })}
        </Grid>
      )}
    </Drawer>
  );
};

export default BoardDrawer;
