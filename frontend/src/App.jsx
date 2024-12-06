import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RentalDashboard from './pages/RentalDashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RentalDashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
