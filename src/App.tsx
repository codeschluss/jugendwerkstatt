import { AuthProvider } from "./contexts/AuthContext";
import { EventPovider } from "./contexts/EventContext";
import Router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <EventPovider>
        <Router />
      </EventPovider>
    </AuthProvider>
  );
}

export default App;
