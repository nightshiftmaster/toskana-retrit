const Socials = () => {
  return (
    <div className="flex items-center gap-2 justify-start px-4">
      <div className="h-9 w-9 rounded-full overflow-hidden filter grayscale">
        <a
          href="https://www.instagram.com/yg_level/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./insta.jpg" alt="" />
        </a>
      </div>
      <div className="h-14 w-14 rounded-full overflow-hidden filter grayscale">
        <a
          href="https://www.facebook.com/YuliaHolovina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./facebook.webp" alt="" />
        </a>
      </div>
      <div className="h-9 w-9 rounded-full overflow-hidden filter grayscale">
        <a
          href="https://wa.me/16137699591"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./whatsup.webp"
            className="w-full h-full object-cover"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default Socials;
