import { useCallback, useEffect, useReducer} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { modeProps } from "./Layout";

interface modeAction {
  type: string;
}
interface initColor {
  backgroundColor: string;
  particleColor: string[];
}
const colorReducer = (state: initColor, action: modeAction): initColor => {
  switch (action.type) {
    case "light":
      return {
        backgroundColor: "#ffffff",
        particleColor: ["#8685EF", "#FFDFCA", "#FFE3F1", "##E3E0F3"],
      };
    case "dark":
      return {
        backgroundColor: "#000000",
        particleColor: ["#ffffff", "#C6C6C6", "#F2ECFF", "#005A34"],
      };
    default:
      break;
  }
  return state;
};
const initState: initColor = {
  backgroundColor: "#ffffff",
  particleColor: ["#000000", "#303030", "#FFE3F1", "##00C9C8"],
};
const Particle = (props: modeProps) => {
  const [colorState, dispath] = useReducer(colorReducer, initState);

  useEffect(() => {
    if (props.mode) {
      dispath({ type: "dark" });
    } else {
      dispath({ type: "light" });
    }
  }, [props]);
  const particlesInit = useCallback(async (engine: Engine) => {

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: colorState.backgroundColor,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: colorState.particleColor,
          },
          links: {
            color: colorState.particleColor,
            distance: 4,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
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
              area: 800,
            },
            value: 130,
          },
          connect: {},
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: false,
      }}
    />
  );
};

export default Particle;
