import { AuthProvider } from "./contexts/AuthContext";
import { EventPovider } from "./contexts/EventContext";
import { JobAddPovider } from "./contexts/JobAddContext";
import Router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <JobAddPovider>
        <EventPovider>
          <Router />
        </EventPovider>
      </JobAddPovider>
    </AuthProvider>
  );
}

export default App;
