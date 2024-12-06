import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
    }),
};

export default function Creator({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [showNext, setShowNext] = useState(false);
    const [showPrev, setShowPrev] = useState(false);
    const [showFinish, setShowFinish] = useState(false);

    const steps = React.Children.toArray(children);

    useEffect(() => {
        setShowNext(step < steps.length - 1);
        setShowPrev(step > 0);
        setShowFinish(step === steps.length - 1);
    }, [step]);

    const handleNext = () => {
        setDirection(1);
        setStep(step + 1);
    };

    const handlePrev = () => {
        setDirection(-1);
        setStep(step - 1);
    };

    return (
        <div className="creator">
            <div className="steps">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        {steps[step]}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="controls">
                <div className="indicators">
                    {steps.map((_, index) => (
                        <div className={'indicator' + (index === step ? ' active' : '')} key={index}></div>
                    ))}
                </div>
                <div className="buttons">
                    {showPrev && (
                        <Button variant="none" className={'btn back'} onClick={handlePrev}>
                            <Icon icon="mdi:arrow-left" />
                            <span>Poprzedni</span>
                        </Button>
                    )}
                    {showNext && (
                        <Button variant="none" className={'btn next'} onClick={handleNext}>
                            <Icon icon="mdi:arrow-right" />
                            <span>Następny</span>
                        </Button>
                    )}
                    {showFinish && (
                        <Button variant="none" className={'btn finish'} onClick={() => setStep(steps.length - 1)}>
                            <Icon icon="mdi:check" />
                            <span>Zakończ</span>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
