import StarField from '../../common/StarField';

const MyTechStack = () => {
  return (
    <>
      <div className=" content-container blog-container">
        <StarField id="stars-mymacconfig" />
        <h1 className="about-text">My Mac Config</h1>
        <div className="code-container">
          <pre className="code-block">
            {`brew update

brew install \\
  apr \\
  apr-util \\
  asciinema \\
  brotli \\
  c-ares \\
  ca-certificates \\
  gettext \\
  icu4c@77 \\
  liblinear \\
  libnghttp2 \\
  libssh2 \\
  libunistring \\
  libuv \\
  lua \\
  lz4 \\
  mpdecimal \\
  nmap \\
  node \\
  nvm \\
  openssl@3 \\
  pcre2 \\
  python@3.13 \\
  readline \\
  utf8proc

brew install --cask \\
  audacity \\
  betterdisplay \\
  linearmouse \\
  alt-tab \\
  raycast \\
  docker`}
          </pre>
        </div>
      </div>
    </>
  );
};

export default MyTechStack;
