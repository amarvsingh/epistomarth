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

  //Initializing the app
  //First we need to check if the user is logged in or not
  //If the user is logged in, we need to fetch the user data

  useEffect(() => {
    const initializeApp = async () => {
      // Check if the user is logged in
      try {
        const isLoggedIn = await checkAuthentication().then((res) => {
          console.log("Is user logged in?", res);
        });
      } catch (error) {
        console.error("Error checking authentication:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='App'>
      <LoadingAlert isOpen={isLoading} />
      <div>
        <NavigationBar />
        {/* You can use the data state here if needed */}
      </div>
    </div>
  );
}

export default App;
