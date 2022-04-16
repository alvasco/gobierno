import "./Banner.css";

export const Banner = ({title}) => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <img className="banner-img" src="assets/img/Banner_Cabezote.svg" alt="" />
        <h1 className="bannerj_text">
          {title} 
        </h1>
      </section>
    </>
  );
};
