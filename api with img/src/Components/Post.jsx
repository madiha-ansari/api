import React, { useState, useEffect } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Post() {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Updated API
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: `https://i.pravatar.cc/150?img=${user.id}`, // Placeholder avatars
          }))
        )
      );
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Profiles
      </Typography>
      <Grid container spacing={3}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <MuiCard sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.avatar}
                  alt={user.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <MuiButton size="small" color="primary">
                  {login ? "Logged In" : "Logged Out"}
                </MuiButton>
              </CardActions>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Post;
