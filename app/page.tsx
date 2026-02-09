import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import { HeroVideo } from "components/hero-video";
import Footer from "components/layout/footer";

export const metadata = {
  description: process.env.SITE_DESCRIPTION,
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroVideo src="/mock/products/sample-video.mp4" />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
