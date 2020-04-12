import React, { useEffect } from 'react';

const Twitter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-embed')[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-height="480px"
          data-width="320px"
          data-chrome="noheader nofooter noborders noscrollbar"
          href="https://twitter.com/MonsrudOpen?ref_src=twsrc%5Etfw"
        >
          Tweets av Monsrud Open
        </a>
      </div>
    </section>
  );
};

export default Twitter;
