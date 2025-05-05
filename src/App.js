import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoadingAlert from "./components/ui/dialogs/LoadingAlert";
import RequestTypes from "./constants/requestTypes";
import { Input } from "@headlessui/react";
import InputValidationAlert from "./components/ui/dialogs/InputValidationAlert";
import { checkAuthentication } from "./services/authentication/authService";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [button1Text, setButton1Text] = useState("");
  const [button2Text, setButton2Text] = useState("");

  //Initializing the app
  //First we need to check if the user is logged in or not
  //If the user is logged in, we need to fetch the user data

  //TODO: Handle UI components on basis of the user authentication status
  useEffect(() => {
    const initializeApp = async () => {
      setIsLoading(true);
      // Check if the user is logged in
      try {
        const isLoggedIn = await checkAuthentication().then((res) => {
          console.log("Is user logged in?", res);
        });
      } catch (error) {
        console.error("Error checking authentication:", error);
        setError(error.message);
        updateAlertState(
          "We are unable to verify your authentication",
          error.message,
          "Refresh Authentication",
          "Logout"
        );
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to update the alert state on the UI on Input Validation Failure
  const updateAlertState = (title, text, button1, button2) => {
    setShowAlert(true);
    setAlertTitle(title);
    setAlertText(text);
    setButton1Text(button1);
    setButton2Text(button2);
  };

  return (
    <div className='App'>
      {/* Input Validation Alert in case of any error */}
      <InputValidationAlert
        open={showAlert}
        setOpen={setShowAlert}
        alertTitle={alertTitle}
        alertText={alertText}
        button1Text={button1Text}
        button2Text={button2Text}
      ></InputValidationAlert>
      <LoadingAlert isOpen={isLoading} />
      <div>
        <NavigationBar />
        {/* You can use the data state here if needed */}
      </div>
    </div>
  );
}

export default App;
