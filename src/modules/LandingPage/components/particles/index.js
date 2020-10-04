import React from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = (props) => {
  const { type = 'normal', className } = props;

  return (
    <>
      {type === 'normal' ? (
        <Particles
          className={className}
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
        />
      ) : (
        <Particles
          className={className}
          params={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.02
              },
              move: {
                direction: 'right',
                speed: 1
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push'
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
      )}
    </>
  );
};

export default ParticlesContainer;
