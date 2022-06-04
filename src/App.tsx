import { AuthProvider } from './contexts/AuthContext';
import { SideBarProvider } from './contexts/SideBarContext';
import { Router } from './routes/Router';

function App() {
  return (
    <AuthProvider>
      <SideBarProvider>
        <Router />
      </SideBarProvider>
    </AuthProvider>
  );
}

export default App;
