import Footer from "components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 lg:py-20">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
