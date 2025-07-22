import { useEffect, useState } from "react"
import OptionSelectorPage from "./components/OptionSelectorPage"
import CharacterList from "./components/CharacterList"
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./config/firebase";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check Firebase auth status on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <OptionSelectorPage /> : <Navigate to="/login" />} />
        <Route path="/characters" element={user ? <CharacterList /> : <Navigate to="/login" />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App
