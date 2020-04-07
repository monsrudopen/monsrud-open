import React, { useState } from 'react';
import styles from './Competitions.module.css';
import Post from './../Posts/Post';

const CompetitionPage = () => {
  const [displaySingleYear, setDisplaySingleYear] = useState(false);

  const unicef =
    'Det første året valgte vi å sette fokus på barns rettigheter. Vi samlet inn kr 1 200 til UNICEF noe vi den gangen var fornøyd med.';

  const amnesty =
    'I 2015 samlet vi inn kr 3 000 til Amnesty. Dette var mer enn en dobling fra det første året noe vi var svært fornøyd med.';

  const nrc =
    'I 2016 samlet vi inn 6 000 kroner til Flyktninghjelpen. Igjen doblet vi beløpet til store glede for alle sammen. ';

  const redCross =
    'I 2017 satt vi fokus på rent vann. Vi samlet inn fantastiske kroner 14 756 til Røde Kors til vann for livet kampanje. ';

  const reddBarna =
    'I 2018 samlet vi inn penger til Redd Barna. Tross noe færre deltakere enn året før klarte vi å samle inn kr 12 669. ';

  const plan =
    'I 2019 gikk innsamlingen til Plan Norges jentefond og det ble samlet inn hele 17 701,08 kroner. ';

  return (
    <div className={styles.PostContainer}>
      <div className={styles.PostsRow}>
        <Post
          title=" 2019 - Plans Jentefond"
          subtitle=""
          text={plan}
          image={require('./../../img/images/y2019.jpg')}
        />
        <Post
          title="2018 - Redd Barna"
          text={reddBarna}
          image={require('./../../img/images/group2018.jpg')}
        />
        <Post
          title="2017 - Røde Kors"
          text={redCross}
          image={require('./../../img/images/postImage3.png')}
        />
        <Post
          title="2016 - NRC"
          text={nrc}
          image={require('./../../img/images/y2016.jpeg')}
        />
        <Post
          title="2015 - Amnesty"
          text={amnesty}
          image={require('./../../img/images/y2015.jpeg')}
        />
        <Post
          title="2014 - UNICEF"
          text={unicef}
          image={require('./../../img/images/y2014.jpeg')}
        />
      </div>
    </div>
  );
};

export default CompetitionPage;
