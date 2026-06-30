import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Imageroundals = ({
  roundal1image,
  roundal1alt,
  roundal1link,
  roundal1text,
  roundal1background,
  roundal1hoverbackground,
  roundal1textcolor,
  roundal1hovertextcolor,
  roundal2image,
  roundal2alt,
  roundal2link,
  roundal2text,
  roundal2background,
  roundal2hoverbackground,
  roundal2textcolor,
  roundal2hovertextcolor,
  roundal3image,
  roundal3alt,
  roundal3link,
  roundal3text,
  roundal3background,
  roundal3hoverbackground,
  roundal3textcolor,
  roundal3hovertextcolor,
  roundal4image,
  roundal4alt,
  roundal4link,
  roundal4text,
  roundal4background,
  roundal4hoverbackground,
  roundal4textcolor,
  roundal4hovertextcolor,
  roundal5image,
  roundal5alt,
  roundal5link,
  roundal5text,
  roundal5background,
  roundal5hoverbackground,
  roundal5textcolor,
  roundal5hovertextcolor,
  roundal6image,
  roundal6alt,
  roundal6link,
  roundal6text,
  roundal6background,
  roundal6hoverbackground,
  roundal6textcolor,
  roundal6hovertextcolor,
  roundal7image,
  roundal7alt,
  roundal7link,
  roundal7text,
  roundal7background,
  roundal7hoverbackground,
  roundal7textcolor,
  roundal7hovertextcolor,
  roundal8image,
  roundal8alt,
  roundal8link,
  roundal8text,
  roundal8background,
  roundal8hoverbackground,
  roundal8textcolor,
  roundal8hovertextcolor,
  roundal9image,
  roundal9alt,
  roundal9link,
  roundal9text,
  roundal9background,
  roundal9hoverbackground,
  roundal9textcolor,
  roundal9hovertextcolor,
  roundal10image,
  roundal10alt,
  roundal10link,
  roundal10text,
  roundal10background,
  roundal10hoverbackground,
  roundal10textcolor,
  roundal10hovertextcolor,
  roundal11image,
  roundal11alt,
  roundal11link,
  roundal11text,
  roundal11background,
  roundal11hoverbackground,
  roundal11textcolor,
  roundal11hovertextcolor,
  roundal12image,
  roundal12alt,
  roundal12link,
  roundal12text,
  roundal12background,
  roundal12hoverbackground,
  roundal12textcolor,
  roundal12hovertextcolor,
  roundal13image,
  roundal13alt,
  roundal13link,
  roundal13text,
  roundal13background,
  roundal13hoverbackground,
  roundal13textcolor,
  roundal13hovertextcolor,
  roundal14image,
  roundal14alt,
  roundal14link,
  roundal14text,
  roundal14background,
  roundal14hoverbackground,
  roundal14textcolor,
  roundal14hovertextcolor,
  roundal15image,
  roundal15alt,
  roundal15link,
  roundal15text,
  roundal15background,
  roundal15hoverbackground,
  roundal15textcolor,
  roundal15hovertextcolor,
  roundal16image,
  roundal16alt,
  roundal16link,
  roundal16text,
  roundal16background,
  roundal16hoverbackground,
  roundal16textcolor,
  roundal16hovertextcolor,
  roundal17image,
  roundal17alt,
  roundal17link,
  roundal17text,
  roundal17background,
  roundal17hoverbackground,
  roundal17textcolor,
  roundal17hovertextcolor,
  roundal18image,
  roundal18alt,
  roundal18link,
  roundal18text,
  roundal18background,
  roundal18hoverbackground,
  roundal18textcolor,
  roundal18hovertextcolor,
  roundal19image,
  roundal19alt,
  roundal19link,
  roundal19text,
  roundal19background,
  roundal19hoverbackground,
  roundal19textcolor,
  roundal19hovertextcolor,
  roundal20image,
  roundal20alt,
  roundal20link,
  roundal20text,
  roundal20background,
  roundal20hoverbackground,
  roundal20textcolor,
  roundal20hovertextcolor,
  roundal21image,
  roundal21alt,
  roundal21link,
  roundal21text,
  roundal21background,
  roundal21hoverbackground,
  roundal21textcolor,
  roundal21hovertextcolor,
  roundal22image,
  roundal22alt,
  roundal22link,
  roundal22text,
  roundal22background,
  roundal22hoverbackground,
  roundal22textcolor,
  roundal22hovertextcolor,
  roundal23image,
  roundal23alt,
  roundal23link,
  roundal23text,
  roundal23background,
  roundal23hoverbackground,
  roundal23textcolor,
  roundal23hovertextcolor,
  roundal24image,
  roundal24alt,
  roundal24link,
  roundal24text,
  roundal24background,
  roundal24hoverbackground,
  roundal24textcolor,
  roundal24hovertextcolor,
}) => {
  return (
     <>
     <style>
     {`
     :root {
      --roundal-bg: #000;
      --roundal-hover-bg: #fff;
      --roundal-text-color: #3b519a;
      --roundal-hover-text-color: #fff;
    }
     .outer-link:hover .roundal-image {
        background: var(--roundal-hover-bg);
      }
     .roundal-image{
      border-radius:100%;
      position:relative;
      padding:2px;
      overflow:hidden;
      aspect-ratio:1/1;
      display:flex;
      align-items:center;
      justify-content:center;
      background: var(--roundal-bg);
      width:100%;
      transition: all 0.3s;
    }

    .roundal-image img{
      position:relative;
      z-index:2;
      width:100%;
      min-width:unset;
      height:auto;
      overflow:hidden;
      margin:5px;
    }

    .rondals-container .roundal {
        width: calc(100% / 3);
    }

    @media (min-width: 1024px) {
    .rondals-container .roundal {
        width: calc(100% / 6);
      }
    }

    .rondals-container{
      display:flex;
      flex-direction:row;
      align-items:flex-start;
      justify-content:center;
      gap:20px;
      max-width: 1140px;
      padding: 10px 20px;
    }

    .roundal-text {
      text-align: center;
      color: var(--roundal-text-color);
      font-size: 14px;
      text-decoration: none;
      padding: 10px;
      width: 100%;
      transition: all 0.3s;
    }

    .outer-link:hover .roundal-text {
      color: var(--roundal-hover-text-color);
    }
      
     `}
     </style>
     <div class="rondals-container">
      {roundal1image && (
        <div className="roundal"
          style={{ "--roundal-bg": roundal1background, "--roundal-text-color": roundal1textcolor, "--roundal-hover-bg": roundal1hoverbackground, "--roundal-hover-text-color": roundal1hovertextcolor }}
        >
          <a href={roundal1link} className="outer-link">
            <div
              className="roundal-image"

            >
              <img src={roundal1image} alt={roundal1alt} />
            </div>
            {roundal1text &&
              <div className="roundal-text">{roundal1text}</div>
            }
          </a>
        </div>
      )}
      {roundal2image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal2background, "--roundal-text-color": roundal2textcolor, "--roundal-hover-bg": roundal2hoverbackground, "--roundal-hover-text-color": roundal2hovertextcolor }}
        >
        <a href={roundal2link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal2background}}>
            <img src={roundal2image} alt={roundal2alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal3image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal3background, "--roundal-text-color": roundal3textcolor, "--roundal-hover-bg": roundal3hoverbackground, "--roundal-hover-text-color": roundal3hovertextcolor }}
        >
        <a href={roundal3link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal3background}}>
            <img src={roundal3image} alt={roundal3alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal4image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal4background, "--roundal-text-color": roundal4textcolor, "--roundal-hover-bg": roundal4hoverbackground, "--roundal-hover-text-color": roundal4hovertextcolor }}
        >
        <a href={roundal4link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal4background}}>
            <img src={roundal4image} alt={roundal4alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal5image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal5background, "--roundal-text-color": roundal5textcolor, "--roundal-hover-bg": roundal5hoverbackground, "--roundal-hover-text-color": roundal5hovertextcolor }}
        >
        <a href={roundal5link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal5background}}>
            <img src={roundal5image} alt={roundal5alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal6image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal6background, "--roundal-text-color": roundal6textcolor, "--roundal-hover-bg": roundal6hoverbackground, "--roundal-hover-text-color": roundal6hovertextcolor }}
        >
        <a href={roundal6link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal6background}}>
            <img src={roundal6image} alt={roundal6alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal7image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal7background, "--roundal-text-color": roundal7textcolor, "--roundal-hover-bg": roundal7hoverbackground, "--roundal-hover-text-color": roundal7hovertextcolor }}
        >
        <a href={roundal7link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal7background}}>
            <img src={roundal7image} alt={roundal7alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal8image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal8background, "--roundal-text-color": roundal8textcolor, "--roundal-hover-bg": roundal8hoverbackground, "--roundal-hover-text-color": roundal8hovertextcolor }}
        >
        <a href={roundal8link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal8background}}>
            <img src={roundal8image} alt={roundal8alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal9image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal9background, "--roundal-text-color": roundal9textcolor, "--roundal-hover-bg": roundal9hoverbackground, "--roundal-hover-text-color": roundal9hovertextcolor }}
        >
        <a href={roundal9link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal9background}}>
            <img src={roundal9image} alt={roundal9alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal10image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal10background, "--roundal-text-color": roundal10textcolor, "--roundal-hover-bg": roundal10hoverbackground, "--roundal-hover-text-color": roundal10hovertextcolor }}
        >
        <a href={roundal10link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal10background}}>
            <img src={roundal10image} alt={roundal10alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal11image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal11background, "--roundal-text-color": roundal11textcolor, "--roundal-hover-bg": roundal11hoverbackground, "--roundal-hover-text-color": roundal11hovertextcolor }}
        >
        <a href={roundal11link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal11background}}>
            <img src={roundal11image} alt={roundal11alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal12image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal12background, "--roundal-text-color": roundal12textcolor, "--roundal-hover-bg": roundal12hoverbackground, "--roundal-hover-text-color": roundal12hovertextcolor }}
        >
        <a href={roundal12link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal12background}}>
            <img src={roundal12image} alt={roundal12alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal13image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal13background, "--roundal-text-color": roundal13textcolor, "--roundal-hover-bg": roundal13hoverbackground, "--roundal-hover-text-color": roundal13hovertextcolor }}
        >
        <a href={roundal13link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal13background}}>
            <img src={roundal13image} alt={roundal13alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal14image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal14background, "--roundal-text-color": roundal14textcolor, "--roundal-hover-bg": roundal14hoverbackground, "--roundal-hover-text-color": roundal14hovertextcolor }}
        >
        <a href={roundal14link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal14background}}>
            <img src={roundal14image} alt={roundal14alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal15image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal15background, "--roundal-text-color": roundal15textcolor, "--roundal-hover-bg": roundal15hoverbackground, "--roundal-hover-text-color": roundal15hovertextcolor }}
        >
        <a href={roundal15link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal15background}}>
            <img src={roundal15image} alt={roundal15alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal16image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal16background, "--roundal-text-color": roundal16textcolor, "--roundal-hover-bg": roundal16hoverbackground, "--roundal-hover-text-color": roundal16hovertextcolor }}
        >
        <a href={roundal16link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal16background}}>
            <img src={roundal16image} alt={roundal16alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal17image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal17background, "--roundal-text-color": roundal17textcolor, "--roundal-hover-bg": roundal17hoverbackground, "--roundal-hover-text-color": roundal17hovertextcolor }}
        >
        <a href={roundal17link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal17background}}>
            <img src={roundal17image} alt={roundal17alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal18image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal18background, "--roundal-text-color": roundal18textcolor, "--roundal-hover-bg": roundal18hoverbackground, "--roundal-hover-text-color": roundal18hovertextcolor }}
        >
        <a href={roundal18link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal18background}}>
            <img src={roundal18image} alt={roundal18alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal19image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal19background, "--roundal-text-color": roundal19textcolor, "--roundal-hover-bg": roundal19hoverbackground, "--roundal-hover-text-color": roundal19hovertextcolor }}
        >
        <a href={roundal19link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal19background}}>
            <img src={roundal19image} alt={roundal19alt} />
          </div>
        </a>
      </div>
      
      }

      {roundal20image && 
      
        <div class="roundal"
          style={{ "--roundal-bg": roundal20background, "--roundal-text-color": roundal20textcolor, "--roundal-hover-bg": roundal20hoverbackground, "--roundal-hover-text-color": roundal20hovertextcolor }}
        >
        <a href={roundal20link} class="outer-link">
          <div class="roundal-image" style={{'--roundal-bg': roundal20background}}>
            <img src={roundal20image} alt={roundal20alt} />
          </div>
        </a>
      </div>
      }
    </div>
    </>
  );
};

Imageroundals.propTypes = {
  roundal1image: PropTypes.string.isRequired,
  roundal1alt: PropTypes.string.isRequired,
  roundal1link: PropTypes.string.isRequired,
  roundal1text: PropTypes.string,
  roundal1background: PropTypes.string,
  roundal1hoverbackground: PropTypes.string,
  roundal1textcolor: PropTypes.string,
  roundal1hovertextcolor: PropTypes.string,
  roundal2image: PropTypes.string,
  roundal2alt: PropTypes.string,
  roundal2link: PropTypes.string,
  roundal2text: PropTypes.string,
  roundal2background: PropTypes.string,
  roundal2hoverbackground: PropTypes.string,
  roundal2textcolor: PropTypes.string,
  roundal2hovertextcolor: PropTypes.string,
  roundal3image: PropTypes.string,
  roundal3alt: PropTypes.string,
  roundal3link: PropTypes.string,
  roundal3text: PropTypes.string,
  roundal3background: PropTypes.string,
  roundal3hoverbackground: PropTypes.string,
  roundal3textcolor: PropTypes.string,
  roundal3hovertextcolor: PropTypes.string,
  roundal4image: PropTypes.string,
  roundal4alt: PropTypes.string,
  roundal4link: PropTypes.string,
  roundal4text: PropTypes.string,
  roundal4background: PropTypes.string,
  roundal4hoverbackground: PropTypes.string,
  roundal4textcolor: PropTypes.string,
  roundal4hovertextcolor: PropTypes.string,
  roundal5image: PropTypes.string,
  roundal5alt: PropTypes.string,
  roundal5link: PropTypes.string,
  roundal5text: PropTypes.string,
  roundal5background: PropTypes.string,
  roundal5hoverbackground: PropTypes.string,
  roundal5textcolor: PropTypes.string,
  roundal5hovertextcolor: PropTypes.string,
  roundal6image: PropTypes.string,
  roundal6alt: PropTypes.string,
  roundal6link: PropTypes.string,
  roundal6background: PropTypes.string,
  roundal6hoverbackground: PropTypes.string,
  roundal6textcolor: PropTypes.string,
  roundal6hovertextcolor: PropTypes.string,
  roundal7image: PropTypes.string,
  roundal7alt: PropTypes.string,
  roundal7link: PropTypes.string,
  roundal7text: PropTypes.string,
  roundal7background: PropTypes.string,
  roundal7hoverbackground: PropTypes.string,
  roundal7textcolor: PropTypes.string,
  roundal7hovertextcolor: PropTypes.string,
  roundal8image: PropTypes.string,
  roundal8alt: PropTypes.string,
  roundal8link: PropTypes.string,
  roundal8text: PropTypes.string,
  roundal8background: PropTypes.string,
  roundal8hoverbackground: PropTypes.string,
  roundal8textcolor: PropTypes.string,
  roundal8hovertextcolor: PropTypes.string,
  roundal9image: PropTypes.string,
  roundal9alt: PropTypes.string,
  roundal9link: PropTypes.string,
  roundal9text: PropTypes.string,
  roundal9background: PropTypes.string,
  roundal9hoverbackground: PropTypes.string,
  roundal9textcolor: PropTypes.string,
  roundal9hovertextcolor: PropTypes.string,
  roundal10image: PropTypes.string,
  roundal10alt: PropTypes.string,
  roundal10link: PropTypes.string,
  roundal10text: PropTypes.string,
  roundal10background: PropTypes.string,
  roundal10hoverbackground: PropTypes.string,
  roundal10textcolor: PropTypes.string,
  roundal10hovertextcolor: PropTypes.string,
  roundal11image: PropTypes.string,
  roundal11alt: PropTypes.string,
  roundal11link: PropTypes.string,
  roundal11text: PropTypes.string,
  roundal11background: PropTypes.string,
  roundal11hoverbackground: PropTypes.string,
  roundal11textcolor: PropTypes.string,
  roundal11hovertextcolor: PropTypes.string,
  roundal12image: PropTypes.string,
  roundal12alt: PropTypes.string,
  roundal12link: PropTypes.string,
  roundal12text: PropTypes.string,
  roundal12background: PropTypes.string,
  roundal12hoverbackground: PropTypes.string,
  roundal12textcolor: PropTypes.string,
  roundal12hovertextcolor: PropTypes.string,
  roundal13image: PropTypes.string,
  roundal13alt: PropTypes.string,
  roundal13link: PropTypes.string,
  roundal13text: PropTypes.string,
  roundal13background: PropTypes.string,
  roundal13hoverbackground: PropTypes.string,
  roundal13textcolor: PropTypes.string,
  roundal13hovertextcolor: PropTypes.string,
  roundal14image: PropTypes.string,
  roundal14alt: PropTypes.string,
  roundal14link: PropTypes.string,
  roundal14text: PropTypes.string,
  roundal14background: PropTypes.string,
  roundal14hoverbackground: PropTypes.string,
  roundal14textcolor: PropTypes.string,
  roundal14hovertextcolor: PropTypes.string,
  roundal15image: PropTypes.string,
  roundal15alt: PropTypes.string,
  roundal15link: PropTypes.string,
  roundal15text: PropTypes.string,
  roundal15background: PropTypes.string,
  roundal15hoverbackground: PropTypes.string,
  roundal15textcolor: PropTypes.string,
  roundal15hovertextcolor: PropTypes.string,
  roundal16image: PropTypes.string,
  roundal16alt: PropTypes.string,
  roundal16link: PropTypes.string,
  roundal16text: PropTypes.string,
  roundal16background: PropTypes.string,
  roundal16hoverbackground: PropTypes.string,
  roundal16textcolor: PropTypes.string,
  roundal16hovertextcolor: PropTypes.string,
  roundal17image: PropTypes.string,
  roundal17alt: PropTypes.string,
  roundal17link: PropTypes.string,
  roundal17text: PropTypes.string,
  roundal17background: PropTypes.string,
  roundal17hoverbackground: PropTypes.string,
  roundal17textcolor: PropTypes.string,
  roundal17hovertextcolor: PropTypes.string,
  roundal18image: PropTypes.string,
  roundal18alt: PropTypes.string,
  roundal18link: PropTypes.string,
  roundal18text: PropTypes.string,
  roundal18background: PropTypes.string,
  roundal18hoverbackground: PropTypes.string,
  roundal18textcolor: PropTypes.string,
  roundal18hovertextcolor: PropTypes.string,
  roundal19image: PropTypes.string,
  roundal19alt: PropTypes.string,
  roundal19link: PropTypes.string,
  roundal19text: PropTypes.string,
  roundal19background: PropTypes.string,
  roundal19hoverbackground: PropTypes.string,
  roundal19textcolor: PropTypes.string,
  roundal19hovertextcolor: PropTypes.string,
  roundal20image: PropTypes.string,
  roundal20alt: PropTypes.string,
  roundal20link: PropTypes.string,
  roundal20text: PropTypes.string,
  roundal20background: PropTypes.string,
  roundal20hoverbackground: PropTypes.string,
  roundal20textcolor: PropTypes.string,
  roundal20hovertextcolor: PropTypes.string,
  roundal21image: PropTypes.string,
  roundal21alt: PropTypes.string,
  roundal21link: PropTypes.string,
  roundal21text: PropTypes.string,
  roundal21background: PropTypes.string,
  roundal21hoverbackground: PropTypes.string,
  roundal21textcolor: PropTypes.string,
  roundal21hovertextcolor: PropTypes.string,
  roundal22image: PropTypes.string,
  roundal22alt: PropTypes.string,
  roundal22link: PropTypes.string,
  roundal22text: PropTypes.string,
  roundal22background: PropTypes.string,
  roundal22hoverbackground: PropTypes.string,
  roundal22textcolor: PropTypes.string,
  roundal22hovertextcolor: PropTypes.string,
  roundal23image: PropTypes.string,
  roundal23alt: PropTypes.string,
  roundal23link: PropTypes.string,
  roundal23text: PropTypes.string,
  roundal23background: PropTypes.string,
  roundal23hoverbackground: PropTypes.string,
  roundal23textcolor: PropTypes.string,
  roundal23hovertextcolor: PropTypes.string,
  roundal24image: PropTypes.string,
  roundal24alt: PropTypes.string,
  roundal24link: PropTypes.string,
  roundal24text: PropTypes.string,
  roundal24background: PropTypes.string,
  roundal24hoverbackground: PropTypes.string,
  roundal24textcolor: PropTypes.string,
  roundal24hovertextcolor: PropTypes.string,
};
