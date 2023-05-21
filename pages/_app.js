import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import TopNav from "@/components/topNavigation";
import RightNav from "@/components/RightNav";
import Cookies from "js-cookie";
import Image from "next/image";
import Head from "next/head";
import ThemeToggler from "@/ThemeToggler";
export default function App({ Component, pageProps }) {
  function createToken() {
    const token = Math.random().toString(36).substring(2);
    // Store the token in a cookie that expires in 10 min
    const expirationTime = new Date(new Date().getTime() + 10 * 60 * 1000); // 10 minutes in milliseconds
    Cookies.set("token", token, { expires: expirationTime });
    location.reload();
  }
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {Cookies.get("token") ? (
          <>
            {" "}
            <div>
              {" "}
              <div className="hidden xl:flex w-full ">
                <TopNav />
              </div>
              <div className="flex w-full min-h-screen h-full fixed top-[50px] xl:top-[60px]">
                <div className="w-full xl:max-w-[78.5%] 2xl:max-w-[1605px]  h-full   bg-white dark:bg-[#1e2e3f] ">
                  <Component {...pageProps} />
                </div>
                <RightNav />
              </div>
            </div>
          </>
        ) : (
          <>
            <Head>
              <title>Login</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="../HuLogo.png" />
            </Head>
            <div className="w-full h-screen loginBg">
              <div className="w-full flex h-full items-center justify-center p-4  md:p-0">
                <div className="w-full max-w-[542px] border-2 border-[#9E2527] dark:border-white h-full max-h-[637px] rounded-[10px]  ">
                  <div className="w-full h-full max-h-[250px] flex items-center justify-center">
                    <div className="w-full">
                      <div className="w-full flex justify-center items-center">
                        {" "}
                        <Image
                          src="/HuLogo.png"
                          height="100"
                          width="190"
                          alt=""
                        />
                      </div>
                      <div className="w-full items-center justify-center flex mt-[-20px] lg:mt-[-30px]">
                        <span className="text-black dark:text-white text-lg md:text-xl lg:text-2xl font-bold">
                          بوابة الطالب الالكترونية
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-fit mt-[70px] px-[29px]">
                    <div className="flex items-center justify-center w-full ">
                      <span className="text-[#9E2527] dark:text-white">
                        الرقم الجامعي
                      </span>
                    </div>
                    <input
                      type="text"
                      className="bg-transparent w-full mt-4 h-[40px] max-h-[46px] border border-[#9E2527] dark:border-white rounded-[7px] px-2"
                      required
                    />
                  </div>
                  <div className="w-full h-fit mt-[26px] px-[29px]">
                    <div className="flex items-center justify-center w-full ">
                      <span className="text-[#9E2527] dark:text-white ">
                        كلمة المرور
                      </span>
                    </div>
                    <input
                      type="password"
                      className="bg-transparent w-full mt-4 h-[40px] max-h-[46px] border border-[#9E2527] dark:border-white rounded-[7px] px-2"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center mt-[36px]">
                    <button
                      type="submit"
                      className="h-10 w-[160px] bg-[#9E2527] dark:bg-white rounded-[7px] dark:text-[#9E2527] text-white"
                      onClick={createToken}
                    >
                      تسجيل دخول
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </ThemeProvider>
    </>
  );
}
