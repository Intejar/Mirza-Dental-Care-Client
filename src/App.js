import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Route/Route';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
