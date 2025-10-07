// app/page.jsx
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Link from "next/link";
// import Pagecontent from "./components/Pagecontent";

import { Container } from "@mui/material";
import Pagecontent from "../components/Pagecontent";
import Productfeatures from "../components/Productfeatures"
import Highlights from "@/components/Highlights";



export default function Page() {
  return (
  <Container maxWidth="lg">
      <Pagecontent/>
      <Productfeatures/>
      <Highlights/>
      
  </Container>
  )
    
}
