"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Paper, Button, Rating } from "@mui/material";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

type ProductsDetails = {
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  stock: number;
  rating: number;
  thumbnail: string;
  images?: string[];
}; //is this type is okay?

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProducts] = useState<ProductsDetails | null>(null);

  useEffect(() => {
    fetch(`/api/proxy/products/${id}`)
      .then((r) => r.json())
      .then(setProducts);
  }, [id]);

  if (!product) return <Box sx={{ p: 3 }}>Loading...</Box>;

  return (
    // <ProtectedRoute>
    //   <Box sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
    //     <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
    //       <Button
    //         component={Link}
    //         href="/dashboard"
    //         variant="text"
    //         size="small"
    //       >
    //         Dashboard
    //       </Button>
    //       <Typography sx={{ alignSelf: "center" }}>/</Typography>
    //       <Button
    //         component={Link}
    //         href="/dashboard/products"
    //         variant="text"
    //         size="small"
    //       >
    //         Products
    //       </Button>
    //     </Box>
    //     <Paper sx={{ p: 3 }}>
    //       <Box
    //         component="img"
    //         src={product.thumbnail}
    //         width="50%"
    //         height="20%"
    //         sx={{ borderRadius: 2, mb: 2 }}
    //       />
    //       <Typography variant="h4">{product.title}</Typography>
    //       <Typography sx={{ color: "text.secondary", mb: 1 }}>
    //         {product.description}
    //       </Typography>
    //       <Typography variant="h5" color="primary">
    //         ${product.price}
    //       </Typography>
    //       <Typography>
    //         <b>Category:</b> {product.category}
    //       </Typography>
    //       <Typography>
    //         <b>Brand:</b> {product.brand}
    //       </Typography>
    //       <Typography>
    //         <b>Stock:</b> {product.stock}
    //       </Typography>
    //       <Box sx={{ alignItems: "center", display: "flex", gap: 1, mt: 1 }}>
    //         <Rating value={product.rating} readOnly precision={0.1} />
    //         <Typography>{product.rating}</Typography>
    //       </Box>
    //     </Paper>
    //   </Box>
    // </ProtectedRoute>

    <>
          <Box sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Button
            component={Link}
            href="/dashboard"
            variant="text"
            size="small"
          >
            Dashboard
          </Button>
          <Typography sx={{ alignSelf: "center" }}>/</Typography>
          <Button
            component={Link}
            href="/dashboard/products"
            variant="text"
            size="small"
          >
            Products
          </Button>
        </Box>
        <Paper sx={{ p: 3 }}>
          <Box
            component="img"
            src={product.thumbnail}
            width="50%"
            height="20%"
            sx={{ borderRadius: 2, mb: 2 }}
          />
          <Typography variant="h4">{product.title}</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary">
            ${product.price}
          </Typography>
          <Typography>
            <b>Category:</b> {product.category}
          </Typography>
          <Typography>
            <b>Brand:</b> {product.brand}
          </Typography>
          <Typography>
            <b>Stock:</b> {product.stock}
          </Typography>
          <Box sx={{ alignItems: "center", display: "flex", gap: 1, mt: 1 }}>
            <Rating value={product.rating} readOnly precision={0.1} />
            <Typography>{product.rating}</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
