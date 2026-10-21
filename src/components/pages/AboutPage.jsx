import { themeSettings } from '@/lib/constants';
import { withBase } from '@/lib/url';

const AboutPage = ({ children }) => {
  const { globalWidth, globalHeight } = themeSettings;

  return (
    <>
      <div className="content-container about">
        <div>
          <img
            src={withBase('/favicon.ico')}
            alt="main-photo-page"
            className="main-photo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="about-text">Mikhail Y. Kolyakin</h1>
        <div>
          <p className="about-text">
            {' '}
            Junior{' '}
            <img
              src={withBase('/logo.svg')}
              alt="react-logo"
              width={32}
              height={32}
              style={{ verticalAlign: 'text-bottom', display: 'inline-block' }}
            />{' '}
            React web developer working in fintech. Interested in game
            development, especially of grand strategy games, as well as
            urbanistics and architecture. Also, a {children}{' '}
            lives with me.
          </p>
        </div>
      </div>
      <div className="content-container icons-container">
        <a
          href="https://soundcloud.com/user-735227306"
          target="_blank"
          rel="noopener noreferrer"
          title="SoundCloud"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/SoundCloud.png')}
            alt="SoundCloud"
            className="icon spin-ccw"
          />
        </a>
        <a
          href="https://open.spotify.com/user/31lpevsqaz6ftqu23sk2vddr3pdq?si=e4b3c22b1a0147e7"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/Spotify.png')}
            alt="Spotify"
            className="icon spin-cw"
          />
        </a>
        <a
          href="https://steamcommunity.com/id/juzzyboykin"
          target="_blank"
          rel="noopener noreferrer"
          title="Steam"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/Steam.png')}
            alt="Steam"
            className="icon spin-ccw"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mikhail-kolyakin-946734259/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/LinkedIn.png')}
            alt="LinkedIn"
            className="icon spin-cw"
          />
        </a>
        <a
          href="https://github.com/boykin345"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/github.png')}
            alt="GitHub"
            className="icon spin-ccw icon-large"
          />
        </a>
        <a
          href="https://x.com/BoyKin345"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/Twitter.png')}
            alt="Twitter"
            className="icon spin-cw"
          />
        </a>
        <a
          href="https://www.reddit.com/user/Substantial-Purple60/"
          target="_blank"
          rel="noopener noreferrer"
          title="Reddit"
        >
          <img
            width={globalWidth}
            height={globalHeight}
            src={withBase('/Reddit.png')}
            alt="Reddit"
            className="icon spin-ccw"
          />
        </a>
      </div>
    </>
  );
};

export default AboutPage;
