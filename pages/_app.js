import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import TopNav from "@/components/topNavigation";
import RightNav from "@/components/RightNav";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="hidden lg:flex w-full ">
          <TopNav />
        </div>
        <div className="flex w-full ">
          <Component {...pageProps} />
          <RightNav />
        </div>
      </ThemeProvider>
    </>
  );
}
