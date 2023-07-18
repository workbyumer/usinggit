import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useContext, useState } from "react";
import "./productCard.css";
import UserContext from "./userContext";

const ProductCard = ({
  company,
  title,
  description,
  salePrice,
  percentOff,
  originalPrice,
  productImages,
}) => {
  const [quantity, setquantity] = useState(0);
  const [selectedImage, setselectedImage] = useState(productImages[0].img);
  const { setuserCart } = useContext(UserContext);

  return (
    <Card sx={{ maxHeight: { md: "80vh" } }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              marginY={2}
            >
              <Grid>
                <img
                  src={selectedImage}
                  width="300"
                  style={{ borderRadius: "5px" }}
                />
              </Grid>
              <Grid>
                <ImageList sx={{ width: 300 }} cols={4} rowHeight={100}>
                  {productImages.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{ borderRadius: "5px" }}
                        onClick={() => setselectedImage(item.img)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} padding={10}>
            <Stack>
              <Typography
                sx={{ fontSize: 14, color: "#ff7d1b", fontWeight: "bold" }}
                gutterBottom
              >
                {company}
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                marginTop={3}
                sx={{ color: "hsl(219, 9%, 45%)" }}
              >
                {description}
              </Typography>
              <Grid marginTop={2}>
                <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                  {salePrice}
                </Typography>
                <Chip label={percentOff} color="warning" />
              </Grid>
              <Typography
                sx={{ fontSize: 14, textDecoration: "line-through" }}
                color="text.secondary"
                gutterBottom
              >
                {originalPrice}
              </Typography>
            </Stack>
            <CardActions>
              <Box sx={{ backgroundColor: "#f7f8fd" }}>
                <Button
                  disabled={quantity === 0 ? true : false}
                  onClick={() => setquantity(quantity - 1)}
                >
                  -
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setquantity(quantity + 1)}>+</Button>
              </Box>
              <Button
                color="warning"
                variant="contained"
                sx={{ marginLeft: "10px" }}
                onClick={() =>
                  setuserCart({
                    title,
                    salePrice,
                    quantity,
                    image: productImages[0].img,
                  })
                }
              >
                Add To Card
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
