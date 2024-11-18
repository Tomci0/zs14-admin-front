import { lazy, Suspense } from 'react';
import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/useAuth';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { motion } from 'framer-motion';
import Index from './pages';

const Calendar = lazy(() => import('./pages/consultations/calendar'));
const History = lazy(() => import('./pages/consultations/history'));
const Error404 = lazy(() => import('./pages/errors/404'));

export default function App() {
    return (
        <>
            <div className="App">
                <ToastContainer />
                <AuthProvider>
                    <div className="left">
                        <Navbar />
                    </div>
                    <div className="right" style={{ width: '100%' }}>
                        <Header />
                        <motion.div
                            id="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Suspense fallback={<Spinner />}>
                                <Routes>
                                    <Route path="/" element={<Index />} />
                                    <Route path="/consultations/calendar" element={<Calendar />} />
                                    <Route path="/consultations/history" element={<History />} />
                                    <Route path="*" element={<Error404 />} />
                                </Routes>
                            </Suspense>
                        </motion.div>
                    </div>
                </AuthProvider>
            </div>
        </>
    );
}
