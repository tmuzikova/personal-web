import { BrowserRouter } from "react-router-dom";
import {
  LanguageProvider,
  useLanguageContext,
} from "./components/LanguageContext";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import { IntlProvider } from "react-intl";
import messagesCs from "./lang/messages_cs.json";
import messagesEn from "./lang/messages_en.json";
import Tech from "./components/Tech";

const messages = {
  cs: messagesCs,
  en: messagesEn,
};

function App() {
  const { language } = useLanguageContext();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <BrowserRouter>
        <div className="flex flex-col">
          <div className="relative z-0">
            <div className="fixed top-0 left-0 w-full z-20">
              <Navbar />
            </div>
            <div className="relative bg-intro-pattern bg-cover bg-no-repeat bg-center ">
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#481557] z-0 "
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 55%, #481557 100%)",
                }}
              />
              <div className="relative z-10">
                <Hero />
              </div>
            </div>

            <div className="relative z-10 bg-primary">
              <About />
              <Tech />
              <Works />
              <Contact />
              <StarsCanvas />
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default function RootApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
