import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import LoadingAlert from "./components/ui/dialogs/LoadingAlert";
import RequestTypes from "./constants/requestTypes";
import { Input } from "@headlessui/react";
import InputValidationAlert from "./components/ui/dialogs/InputValidationAlert";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          type: RequestTypes.LOGIN,
          data: {
            email: "amars8379@gmail.com",
            password: "Amar222@s",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error initializing app:", error);
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
