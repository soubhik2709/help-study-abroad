"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

import { useEffect, useState } from "react";
import { useProductStore, Product } from "@/store/productStore";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

// debounce
function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => { //This extracts the real argument types from T
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function ProductsPage() {
  const { products, fetchProducts } = useProductStore();

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts(10, page * 10, search, category);
  }, [page, search, category, fetchProducts]);

  const handleSearch = debounce((val: string) => {
    setSearch(val);
    setPage(0);
  }, 400);

  return (
    <ProtectedRoute>
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Products
      </Typography>

      {/* Search */}
      <TextField
        label="Search Products"
        fullWidth
        onChange={(e) => handleSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Category */}
      <Select
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="smartphones">Smartphones</MenuItem>
        <MenuItem value="laptops">Laptops</MenuItem>
        <MenuItem value="fragrances">Fragrances</MenuItem>
      </Select>

      {/* Grid */}
      <Grid container spacing={2}>
        {products.map((p: Product) => (
          <Grid  
       size={{ xs: 12, sm: 6, md: 4 }}
      key={p.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                  image={p.image}
              />

              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography color="text.secondary">
                  ${p.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box mt={3}>
        <Button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </Box>
    </ProtectedRoute>
  );
}