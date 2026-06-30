import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Ageroundals = ({
  roundal1age,
  roundal1subword,
  roundal1link,
  roundal1background,
  roundal1color,
  roundal2age,
  roundal2subword,
  roundal2link,
  roundal2color,
  roundal2background,  
  roundal3age,
  roundal3subword,
  roundal3link,
  roundal3color,
  roundal3background,  
  roundal4age,
  roundal4subword,
  roundal4link,
  roundal4color,
  roundal4background,  
  roundal5age,
  roundal5subword,
  roundal5link,  
  roundal5color,
  roundal5background,
  roundal6age,
  roundal6subword,
  roundal6link,
  roundal6color,
  roundal6background,
  roundal7age,
  roundal7subword,
  roundal7link,
  roundal7color,
  roundal7background,  
  roundal8age,
  roundal8subword,
  roundal8link,
  roundal8color,
  roundal8background,
  roundal9age,
  roundal9subword,
  roundal9link,
  roundal9color,
  roundal9background,
  roundal10age,
  roundal10subword,
  roundal10link,
  roundal10color,
  roundal10background,  
  roundal11age,
  roundal11subword,  
  roundal11link,
  roundal11color,
  roundal11background,  
  roundal12age,
  roundal12subword,
  roundal12link,
  roundal12color,
  roundal12background,
  roundal13age,
  roundal13subword,
  roundal13link,
  roundal13color,
  roundal13background,
  roundal14age,
  roundal14subword,
  roundal14link,
  roundal14color,
  roundal14background,  
  roundal15age,
  roundal15subword,
  roundal15link,
  roundal15color,
  roundal15background,  
  roundal16age,
  roundal16subword,
  roundal16link,
  roundal16color,
  roundal16background,  
  roundal17age,
  roundal17subword,
  roundal17link,
  roundal17color,
  roundal17background,  
  roundal18age,
  roundal18subword,
  roundal18link,
  roundal18color,
  roundal18background,  
  roundal19age,
  roundal19subword,
  roundal19link,
  roundal19color,
  roundal19background,  
  roundal20age,
  roundal20subword,
  roundal20link,
  roundal20color,
  roundal20background,  
  roundal21age,
  roundal21subword,
  roundal21link,
  roundal21color,
  roundal21background,  
  roundal22age,
  roundal22subword,
  roundal22link,
  roundal22color,
  roundal22background,  
  roundal23age,
  roundal23subword,
  roundal23link,
  roundal23color,
  roundal23background,  
  roundal24age,
  roundal24subword,
  roundal24link,
  roundal24color,
  roundal24background,
}) => {
  return (
     <>
     <style>
     {`
      .roundal a {
        border-radius:100%;
        overflow:hidden;
        aspect-ratio:1/1;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
      }
    .roundal-age {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      font: 46px / 100% "Billy Bold", "Tahoma Bold", sans-serif;
      text-align: center;
      letter-spacing: 0;
      border-radius: 100%;
      opacity: 1;
      transition: opacity 0.5s;
      background: var(--roundal-bg);
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
      aspect-ratio: 1/1;
      width: 100%;
      color: #fff;
    }

    .roundal-age:hover {
      opacity: 0.5;
    }

    .roundals-container .roundal {
        width: calc(100% / 3);
    }

    @media (min-width: 1024px) {
    .roundals-container .roundal {
        width: calc(100% / 6);
      }
    }

    .roundal-age span {
        display: block;
        font: 18px / 100% "Billy Bold", "Tahoma Bold", sans-serif;
    }

    .roundals-container{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      gap:20px;
      margin: 0 auto;
      text-align: center;
      max-width: 1140px;
      padding: 10px 20px;
    }
     `}
     </style>
     <div class="roundals-container">
      {(roundal1age || roundal1subword) && (
        <div className="roundal">
          <a href={roundal1link} className="outer-link">
            <div
              className="roundal-age"
              style={{ "--roundal-bg": roundal1background, color: roundal1color }}
            >
              {roundal1age}
              {roundal1subword &&
              <>
                
                <span class="roundal-subword">{roundal1subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal2age && (
        <div class="roundal">
          <a href={roundal2link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal2background, color: roundal2color }}
            >
              {roundal2age}
              {roundal2subword &&
              <>
                
                <span class="roundal-subword">{roundal2subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal3age && (
        <div class="roundal">
          <a href={roundal3link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal3background, color: roundal3color }}
            >
              {roundal3age}
              {roundal3subword &&
              <>
                
                <span class="roundal-subword">{roundal3subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal4age && (
        <div class="roundal">
          <a href={roundal4link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal4background, color: roundal4color }}
            >
              {roundal4age}
              {roundal4subword &&
              <>
                
                <span class="roundal-subword">{roundal4subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal5age && (
        <div class="roundal">
          <a href={roundal5link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal5background, color: roundal5color }}
            >
              {roundal5age}
              {roundal5subword &&
              <>
                
                <span class="roundal-subword">{roundal5subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal6age && (
        <div class="roundal">
          <a href={roundal6link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal6background, color: roundal6color }}
            >
              {roundal6age}
              {roundal6subword &&
              <>
                
                <span class="roundal-subword">{roundal6subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal7age && (
        <div class="roundal">
          <a href={roundal7link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal7background, color: roundal7color }}
            >
              {roundal7age}
              {roundal7subword &&
              <>
                
                <span class="roundal-subword">{roundal7subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal8age && (
        <div class="roundal">
          <a href={roundal8link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal8background, color: roundal8color }}
            >
              {roundal8age}
              {roundal8subword &&
              <>
                
                <span class="roundal-subword">{roundal8subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal9age && (
        <div class="roundal">
          <a href={roundal9link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal9background, color: roundal9color }}
            >
              {roundal9age}
              {roundal9subword &&
              <>
                
                <span class="roundal-subword">{roundal9subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal10age && (
        <div class="roundal">
          <a href={roundal10link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal10background, color: roundal10color }}
            >
              {roundal10age}
              {roundal10subword &&
              <>
                
                <span class="roundal-subword">{roundal10subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal11age && (
        <div class="roundal">
          <a href={roundal11link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal11background, color: roundal11color }}
            >
              {roundal11age}
              {roundal11subword &&
              <>
                
                <span class="roundal-subword">{roundal11subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal12age && (
        <div class="roundal">
          <a href={roundal12link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal12background, color: roundal12color }}
            >
              {roundal12age}
              {roundal12subword &&
              <>
                
                <span class="roundal-subword">{roundal12subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal13age && (
        <div class="roundal">
          <a href={roundal13link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal13background, color: roundal13color }}
            >
              {roundal13age}
              {roundal13subword &&
              <>
                
                <span class="roundal-subword">{roundal13subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal14age && (
        <div class="roundal">
          <a href={roundal14link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal14background, color: roundal14color }}
            >
              {roundal14age}
              {roundal14subword &&
              <>
                
                <span class="roundal-subword">{roundal14subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal15age && (
        <div class="roundal">
          <a href={roundal15link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal15background, color: roundal15color }}
            >
              {roundal15age}
              {roundal15subword &&
              <>
                
                <span class="roundal-subword">{roundal15subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal16age && (
        <div class="roundal">
          <a href={roundal16link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal16background, color: roundal16color }}
            >
              {roundal16age}
              {roundal16subword &&
              <>
                
                <span class="roundal-subword">{roundal16subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal17age && (
        <div class="roundal">
          <a href={roundal17link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal17background, color: roundal17color }}
            >
              {roundal17age}
              {roundal17subword &&
              <>
                
                <span class="roundal-subword">{roundal17subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal18age && (
        <div class="roundal">
          <a href={roundal18link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal18background, color: roundal18color }}
            >
              {roundal18age}
              {roundal18subword &&
              <>
                
                <span class="roundal-subword">{roundal18subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal19age && (
        <div class="roundal">
          <a href={roundal19link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal19background, color: roundal19color }}
            >
              {roundal19age}
              {roundal19subword &&
              <>
                
                <span class="roundal-subword">{roundal19subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal20age && (
        <div class="roundal">
          <a href={roundal20link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal20background, color: roundal20color }}
            >
              {roundal20age}
              {roundal20subword &&
              <>
                
                <span class="roundal-subword">{roundal20subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal21age && (
        <div class="roundal">
          <a href={roundal21link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal21background, color: roundal21color }}
            >
              {roundal21age}
              {roundal21subword &&
              <>
                
                <span class="roundal-subword">{roundal21subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal22age && (
        <div class="roundal">
          <a href={roundal22link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal22background, color: roundal22color }}
            >
              {roundal22age}
              {roundal22subword &&
              <>
                
                <span class="roundal-subword">{roundal22subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal23age && (
        <div class="roundal">
          <a href={roundal23link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal23background, color: roundal23color }}
            >
              {roundal23age}
              {roundal23subword &&
              <>
                
                <span class="roundal-subword">{roundal23subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}

      {roundal24age && (
        <div class="roundal">
          <a href={roundal24link} class="outer-link">
            <div
              class="roundal-age"
              style={{ "--roundal-bg": roundal24background, color: roundal24color }}
            >
              {roundal24age}
              {roundal24subword &&
              <>
                
                <span class="roundal-subword">{roundal24subword}</span>
              </>
              }
            </div>
          </a>
        </div>
      )}
    </div>
    </>
  );
};

Ageroundals.propTypes = {
  roundal1age: PropTypes.string,
  roundal1subword: PropTypes.string,
  roundal1link: PropTypes.string,
  roundal1color: PropTypes.string,
  roundal1background: PropTypes.string,
  roundal2age: PropTypes.string,
  roundal2subword: PropTypes.string,
  roundal2link: PropTypes.string,
  roundal2color: PropTypes.string,
  roundal2background: PropTypes.string,  
  roundal3age: PropTypes.string,
  roundal3subword: PropTypes.string,
  roundal3link: PropTypes.string,
  roundal3color: PropTypes.string,
  roundal3background: PropTypes.string,
  roundal4age: PropTypes.string,
  roundal4subword: PropTypes.string,
  roundal4link: PropTypes.string,
  roundal4color: PropTypes.string,
  roundal4background: PropTypes.string,
  roundal5age: PropTypes.string,
  roundal5subword: PropTypes.string,
  roundal5link: PropTypes.string,
  roundal5color: PropTypes.string,
  roundal5background: PropTypes.string,  
  roundal6age: PropTypes.string,
  roundal6subword: PropTypes.string,
  roundal6link: PropTypes.string,
  roundal6color: PropTypes.string,
  roundal6background: PropTypes.string,  
  roundal7age: PropTypes.string,
  roundal7subword: PropTypes.string,
  roundal7link: PropTypes.string,
  roundal7color: PropTypes.string,
  roundal7background: PropTypes.string,  
  roundal8age: PropTypes.string,
  roundal8subword: PropTypes.string,
  roundal8link: PropTypes.string,
  roundal8color: PropTypes.string,
  roundal8background: PropTypes.string,  
  roundal9age: PropTypes.string,
  roundal9subword: PropTypes.string,
  roundal9link: PropTypes.string,
  roundal9color: PropTypes.string,
  roundal9background: PropTypes.string,  
  roundal10age: PropTypes.string,
  roundal10subword: PropTypes.string,
  roundal10link: PropTypes.string,
  roundal10color: PropTypes.string,
  roundal10background: PropTypes.string,  
  roundal11age: PropTypes.string,
  roundal11subword: PropTypes.string,
  roundal11link: PropTypes.string,
  roundal11color: PropTypes.string,
  roundal11background: PropTypes.string,  
  roundal12age: PropTypes.string,
  roundal12subword: PropTypes.string,
  roundal12link: PropTypes.string,
  roundal12color: PropTypes.string,
  roundal12background: PropTypes.string,  
  roundal13age: PropTypes.string,
  roundal13subword: PropTypes.string,
  roundal13link: PropTypes.string,
  roundal13color: PropTypes.string,
  roundal13background: PropTypes.string,  
  roundal14age: PropTypes.string,
  roundal14subword: PropTypes.string,
  roundal14link: PropTypes.string,
  roundal14color: PropTypes.string,
  roundal14background: PropTypes.string,  
  roundal15age: PropTypes.string,
  roundal15subword: PropTypes.string,
  roundal15link: PropTypes.string,
  roundal15color: PropTypes.string,
  roundal15background: PropTypes.string,  
  roundal16age: PropTypes.string,
  roundal16subword: PropTypes.string,
  roundal16link: PropTypes.string,
  roundal16color: PropTypes.string,
  roundal16background: PropTypes.string,  
  roundal17age: PropTypes.string,
  roundal17subword: PropTypes.string,
  roundal17link: PropTypes.string,
  roundal17color: PropTypes.string,
  roundal17background: PropTypes.string,  
  roundal18age: PropTypes.string,
  roundal18subword: PropTypes.string,
  roundal18link: PropTypes.string,
  roundal18color: PropTypes.string,
  roundal18background: PropTypes.string,  
  roundal19age: PropTypes.string,
  roundal19subword: PropTypes.string,
  roundal19link: PropTypes.string,
  roundal19color: PropTypes.string,
  roundal19background: PropTypes.string,  
  roundal20age: PropTypes.string,
  roundal20subword: PropTypes.string,
  roundal20link: PropTypes.string,
  roundal20color: PropTypes.string,
  roundal20background: PropTypes.string,  
  roundal21age: PropTypes.string,
  roundal21subword: PropTypes.string,
  roundal21link: PropTypes.string,
  roundal21color: PropTypes.string,
  roundal21background: PropTypes.string,  
  roundal22age: PropTypes.string,
  roundal22subword: PropTypes.string,
  roundal22link: PropTypes.string,
  roundal22color: PropTypes.string,
  roundal22background: PropTypes.string,  
  roundal23age: PropTypes.string,
  roundal23subword: PropTypes.string,
  roundal23link: PropTypes.string,
  roundal23color: PropTypes.string,
  roundal23background: PropTypes.string,  
  roundal24age: PropTypes.string,
  roundal24subword: PropTypes.string,
  roundal24link: PropTypes.string,
  roundal24color: PropTypes.string,
  roundal24background: PropTypes.string,
};
