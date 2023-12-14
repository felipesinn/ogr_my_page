import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Pages/HomePage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
