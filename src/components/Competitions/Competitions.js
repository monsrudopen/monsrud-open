import React from 'react';
import PostRow from './../Posts/Post';
import styles from './Competitions.module.css';
import competitions from './../../database/dataloader';
import { useParams, Link } from 'react-router-dom';

export const CompetitionView = () => {
  const { year } = useParams();
  const competition = competitions.find(c => c.year.toString() === year);

  return (
    <div className={styles.CompetitionView}>
      <Link to="/Competitions">
        <div className={styles.ReturnButton}>Tilbake</div>
      </Link>
      <h1>{competition.title}</h1>
      <div className={styles.TopBoxContainer}>
        <div className={styles.TopBoxText}>
          <div className={styles.TopBoxTextHeader}>Vinner</div>
          <div>{competition.winner}</div>
        </div>
        <div className={styles.TopBoxText}>
          <div className={styles.TopBoxTextHeader}>Innsamlet</div>
          <div>Kr {competition.donated}</div>
        </div>
      </div>
      <div className={styles.TopBoxImageContainer}>
        <img
          className={styles.TopBoxImage}
          alt={competition.title}
          src={competition.image}
        ></img>
      </div>
      <div className={styles.TopBoxTextContainer}>
        <div className={styles.TopBoxText}>
          <div className={styles.TopBoxParticipantsHeader}>Deltakere</div>
          <div className={styles.TopBoxParticipantsText}>
            {competition.attendees.sort().map(a => (
              <div key={a}>{a}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.AboutBox}>
        <h3>Hvordan gikk turneringen?</h3>
        <div>{competition.tournamentText}</div>
      </div>

      <div className={styles.ImageCarousel}>Bilder kommer her...</div>
      <div className={styles.AboutBox}>
        <h3>Om {competition.organization}</h3>
        <div>{competition.organizationInfo}</div>
      </div>
    </div>
  );
};

export const CompetitionPage = () => {
  const competitionsWithLinks = competitions.map(c => {
    return { ...c, link: 'Competitions/' + c.year };
  });

  return <PostRow postItems={competitionsWithLinks}></PostRow>;
};
