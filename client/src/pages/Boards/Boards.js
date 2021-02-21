import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Typography, Container, Box, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AppLayout } from "layouts";
import { Board, AddBoardModal, Loading } from "components";
import { FirebaseAuth } from "provider/AuthProvider";
import { HandleUserRelatedBoards } from "helpers/Board";
import { boardsStyles } from "./styles";

const Boards = () => {
  const classes = boardsStyles();
  let history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const {
    userData,
    boards,
    setBoards,
    handleBackdropClose,
    handleBackdropOpen,
  } = useContext(FirebaseAuth);

  const handleBoardClick = (boardId) => {
    history.push("/board/" + boardId);
  };

  const handleCreateButton = () => {
    setModalOpen(true);
  };



  return (
    <AppLayout>
      <div className={classes.root}>
        <Container className={classes.container} component="main" maxWidth="lg">
          <Box display="flex">
            <Box p={1} flexGrow={1}>
              <Typography className={classes.title} variant="h6" gutterBottom>
                All Boards
              </Typography>
            </Box>
            <Box p={1}>
              <Button
                onClick={handleCreateButton}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<Add />}
              >
                Add
              </Button>
            </Box>
          </Box>
          <Grid className={classes.boardsContainer} container spacing={3}>
            {boards !== undefined &&
              boards.length > 0 &&
              boards.map((value, key) => {
                return (
                  <Grid container key={key} item lg={3} md={3} sm={4} xs={8}>
                    <div onClick={() => handleBoardClick(value.id)}>
                      <Board
                        image={value.coverPhoto}
                        title={value.title}
                        users={value.userData}
                        visibility={value.visibility}
                      />
                    </div>
                  </Grid>
                );
              })}
          </Grid>
          <AddBoardModal open={modalOpen} setOpen={setModalOpen} />
        </Container>
      </div>
      <Loading />
    </AppLayout>
  );
};

export default Boards;
