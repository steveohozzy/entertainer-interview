import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const StevePod = ({
  image,
  imagealt,
  backgroundcolor,
  textcolor,
  tagline,
  link,
  linktext,
  buttonbackgroundcolor,
  buttontextcolor,
  logoimage,
  logoimagealt,
  logoheight,
  position,
  dataElementType,
  dataPromotionName,
  dataPromotionIndex,
}) => {
  return (
    <>
      <style>{`

*{
box-sizing:border-box;
}

.pod{
position:relative;

display:flex;
flex-direction:column;

width:100%;
min-width:280px;
min-height:520px;

overflow:hidden;
border-radius:32px;

text-decoration:none;

background:#111;

box-shadow:
0 20px 50px rgba(0,0,0,.15);

transition:
transform .6s cubic-bezier(.22,1,.36,1);

flex:1;
}

.pod:hover{
transform:
translateY(-10px)
rotateY(-2deg);
}

.image-wrap{
position:absolute;
inset:0;

overflow:hidden;
z-index:1;

border-radius:32px;
}

.image-wrap img{
width:100%;
height:100%;

object-fit:cover;
border-radius:32px;

filter:
brightness(.9)
saturate(1.05);

transform:scale(1.03);

transition:
transform .8s ease,
filter .8s ease;
}

.pod:hover img{

transform:scale(1.07);

filter:
brightness(.95)
saturate(1.15);

}

.gradient{
position:absolute;
inset:0;

background:
linear-gradient(
180deg,
transparent 15%,
rgba(0,0,0,.75)
);

z-index:2;
}

.pod::before{

content:'';

position:absolute;

width:300px;
height:300px;

top:-120px;
right:-100px;

border-radius:50%;

background:
linear-gradient(
45deg,
rgba(0,255,255,.3),
rgba(255,0,200,.25)
);

filter:blur(90px);

opacity:.7;

z-index:2;

pointer-events:none;

transition:1s;
}

.pod:hover::before{

transform:scale(1.4);

}

.logo{

position:absolute;

top:24px;
left:24px;

z-index:5;

padding:10px 18px;

border-radius:999px;

backdrop-filter:blur(20px);

background:${backgroundcolor || "rgba(255,255,255,.12)"};

border:
1px solid rgba(255,255,255,.15);

}

.logo.right{
left:auto;
right:24px;
}

.logo img{
display:block;
width:auto;
}

.glass-content{

position:absolute;

left:16px;
right:16px;
bottom:16px;

z-index:5;

padding:28px;

border-radius:28px;

backdrop-filter:blur(24px);

/* keeps glass effect while tinting */
background:
linear-gradient(
rgba(255,255,255,.08),
rgba(255,255,255,.03)
),
${backgroundcolor || "rgba(255,255,255,.12)"};

border:
1px solid rgba(255,255,255,.15);

box-shadow:
0 8px 30px rgba(0,0,0,.15),
inset 0 1px rgba(255,255,255,.15);

}

.glass-content h2{

margin:0 0 20px;

font-size:30px;
font-weight:900;

line-height:1.05;

letter-spacing:-1px;

color:${textcolor || "#fff"};

}

.cta{

display:flex;
justify-content:space-between;
align-items:center;

font-size:16px;
font-weight:700;

color:${textcolor || "#fff"};

}

.arrow{

display:flex;
align-items:center;
justify-content:center;

width:52px;
height:52px;

border-radius:50%;

background:${buttonbackgroundcolor || "#fff"};

color:${buttontextcolor || "#111"};

transition:
transform .4s ease;

flex-shrink:0;
}

.arrow svg{

width:22px;
height:22px;

}

.pod:hover .arrow{

transform:
translateX(8px)
rotate(-45deg);

}

@media(max-width:768px){

.pod{
min-height:420px;
}

.glass-content{
padding:22px;
}

.glass-content h2{
font-size:22px;
}

.arrow{
width:44px;
height:44px;
}

}

      `}</style>

      <a
        className="pod"
        href={link}
        data-element-type={dataElementType}
        data-promotion-name={dataPromotionName}
        data-promotion-index={dataPromotionIndex}
      >
        <div className="image-wrap">
          <img
            src={image}
            alt={imagealt}
          />

          <div className="gradient" />

          {logoimage && (
            <div className={`logo ${position || ""}`}>
              <img
                src={logoimage}
                alt={logoimagealt}
                style={{
                  height: logoheight,
                }}
              />
            </div>
          )}
        </div>

        <div className="glass-content">

          {tagline && (
            <h2>
              {tagline}
            </h2>
          )}

          <div className="cta">

            <span>{linktext}</span>

            <div className="arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M12 6L18 12L12 18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

          </div>

        </div>

      </a>
    </>
  );
};

StevePod.propTypes = {
  backgroundcolor: PropTypes.string,
  textcolor: PropTypes.string,
  image: PropTypes.string.isRequired,
  imagealt: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  link: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
  buttonbackgroundcolor: PropTypes.string,
  buttontextcolor: PropTypes.string,
  logoimage: PropTypes.string,
  logoimagealt: PropTypes.string,
  logoheight: PropTypes.string,
  position: PropTypes.string,
  dataElementType: PropTypes.string,
  dataPromotionName: PropTypes.string,
  dataPromotionIndex: PropTypes.string,
};