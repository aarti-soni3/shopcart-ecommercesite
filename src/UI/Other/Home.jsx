import { Stack } from "@mui/material";
import CategoryList from "../Category/CategoryList";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
export default function Home() {
  return (
    <>
      <Stack gap={2}>
        <HeroSection />
        <CategoryList />
        <WhyChooseUs />
        <FAQ />
      </Stack>
    </>
  );
}
