import React from 'react';
import { default as ParticleBK } from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import useDuelBoard from '../../hooks/use-duelboard';
import styles from './particles.module.scss';

export default function Particles() {
    const board = useDuelBoard();
    const particlesInit = React.useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            {
                (board.isAnimatedBKEnabled) ?
                    <ParticleBK
                        id="tsparticles"
                        className={styles.compContainer}
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fpsLimit: 120,
                            // interactivity: {
                            //     events: {
                            //         onClick: {
                            //             enable: true,
                            //             mode: "push",
                            //         },
                            //         onHover: {
                            //             enable: true,
                            //             mode: "repulse",
                            //         },
                            //         resize: true,
                            //     },
                            //     modes: {
                            //         push: {
                            //             quantity: 4,
                            //         },
                            //         repulse: {
                            //             distance: 200,
                            //             duration: 0.4,
                            //         },
                            //     },
                            // },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#4d4dff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    //directions: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1000,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.3,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    /> : null
            }
        </>

    );
}

