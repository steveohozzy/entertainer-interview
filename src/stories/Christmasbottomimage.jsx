export const Christmasbottomimage = ({
  image,
  mobileImage,
  imagealt,
}) => {
  return (
    <>
      <style>
        {`
          .christmas-bottom-image-wrapper {
            width: 100%;
          }

          .christmas-bottom-image-wrapper img {
            display: block;
            width: 100%;
            height: auto;
          }
        `}
      </style>

      <div className="christmas-bottom-image-wrapper">
        <picture>
          {mobileImage && (
            <source
              media="(max-width: 767px)"
              srcSet={mobileImage}
            />
          )}
          <img src={image} alt={imagealt} />
        </picture>
      </div>
    </>
  );
};