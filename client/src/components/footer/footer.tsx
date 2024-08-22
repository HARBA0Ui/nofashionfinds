import Logo from "../logo";

const Footer = () => {
  return (
    <div className="bg-zinc-950 py-6">
      <footer className="container text-white flex items-center justify-between">
        <Logo bg="black" />
        <div className="list-none text-center">
          <h1 className="text-2xl">Contact</h1>
          <ul>
            <li>
              <a href="#">email@gmail.com</a>
            </li>
            <li>
              <a href="#">+21654856958</a>
            </li>
          </ul>
        </div>
        <div className="list-none text-center">
          <h1 className="text-2xl">Socials</h1>
          <ul>
            <li>
              <a href="#">@nofashionfinds</a>
            </li>
            <li>
              <a href="#">@nofashionfinds</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
