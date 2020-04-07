import React from 'react';
import Post from './Post';
import styles from './Posts.module.css';

function Posts(props) {
  const tournaments = 'Les om de ulike årene og hvordan det gikk';
  const donations =
    'Styret i Monsrud Open velger hvert år hvilken organisasjon vi skal samle inn penger til. Vi ønsker å velge organisasjoner som jobber med dagsaktuelle saker i et internasjonalt perspektiv. Alle organisasjoner vi velger er godkjent av innsamlingskontrollen. Vi står helt fritt til å velge organisasjon. Vår eneste regel er at vi ikke støtter samme organisasjon to år på rad. Vi vil få takke alle som har støttet oss i innsamlingene vi har hatt så langt, og håper at dere vil fortsette å støtte oss i årene fremover. ';
  const about = 'Les om Monsrud Open';

  return (
    <div className={styles.PostContainer}>
      <div className={styles.PostsRow}>
        <Post
          title="Donasjoner"
          text={donations}
          image={require('./../../img/images/postImage.png')}
          link="/Donations"
        />
        <Post
          title="Turneringer"
          text={tournaments}
          image={require('./../../img/images/postImage2.png')}
          link="/Competitions"
        />
        <Post
          title="Om oss"
          text={about}
          image={require('./../../img/images/postImage3.png')}
          link="/About"
        />
      </div>
    </div>
  );
}

export default Posts;
