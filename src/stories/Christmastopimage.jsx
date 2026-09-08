export const Christmastopimage = ({
  image,
  mobileImage,
  imagealt,
}) => {
  return (
    <>
      <style>
        {`
          .christmas-top-image-wrapper {
            width: 100%;
          }

          .christmas-top-image-wrapper img {
            display: block;
            width: 100%;
            height: auto;
          }
        `}
      </style>

      <div className="christmas-top-image-wrapper">
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