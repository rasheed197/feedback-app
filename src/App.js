import "./App.css";

// Custom Components
import Header from "./components/Header/Header";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import EditFeedbackForm from "./components/EditFeedbackForm/EditFeedbackForm";

// Built-in Components
import { Route, Routes } from "react-router-dom";

// Context
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackDetails from "./components/FeedbackDetails/FeedbackDetails";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <FeedbackProvider>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <FeedbackForm />
                  <Feedbacks />
                  <EditFeedbackForm />
                  <FeedbackDetails />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
    </FeedbackProvider>
  );
}

export default App;

// Custom Components

// Built-in Components

// Context

// Data
