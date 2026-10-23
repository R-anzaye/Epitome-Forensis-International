import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { PracticeAreasPage } from '@/pages/PracticeAreasPage';
import { TeamPage } from '@/pages/TeamPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
