import React from 'react';
import PostRow from './../Posts/Post';
import styles from './Competitions.module.css';
import { competitions } from './../../database/dataloader';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

export const CompetitionView = () => {
  const { year } = useParams();
  const competition = competitions.find(c => c.year.toString() === year);

  return (
    <div className={styles.CompetitionView}>
      <h1>{competition.title}</h1>
      <div className={styles.CompetitionViewWrapper}>
        <div className={styles.TopBoxWrapper}>
          <div className={styles.TopBoxImageContainer}>
            <img
              className={styles.TopBoxImage}
              alt={competition.title}
              src={competition.image}
            ></img>
          </div>
          <div className={styles.TopBoxContainer}>
            <div className={styles.TopBoxWinnerDonation}>
              <div className={styles.TopBoxText}>
                <div className={styles.TopBoxTextHeader}>Vinner</div>
                <div className={styles.TopBoxTextWinner}>
                  {competition.winner}
                </div>
              </div>
              <div className={styles.TopBoxText}>
                <div className={styles.TopBoxTextHeader}>Innsamlet</div>
                <div className={styles.TopBoxTextDonation}>
                  Kr {competition.donated.toString().replace('.', ',')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ParticipantsBox}>
          <div className={styles.TopBoxText}>
            <div className={styles.TopBoxParticipantsHeader}>Deltakere</div>
            <div className={styles.TopBoxParticipantsText}>
              {competition.attendees.sort().map(a => (
                <div key={a}>{a}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.MiddleBox}>
          <div className={styles.AboutTournamentBox}>
            <h3>Hvordan gikk turneringen?</h3>
            <div>{competition.tournamentText}</div>
          </div>
        </div>
        <div className={styles.ImageCarousel}>
          <ImageCarousel year={competition.year}></ImageCarousel>
        </div>
        <div className={styles.BottomBox}>
          <div className={styles.BottomBoxOrganization}>
            <img
              alt={competition.organization}
              className={styles.OrganizationPicture}
              src={competition.organizationpicture}
            ></img>
            <div className={styles.AboutBox}>
              <h3>Om {competition.organization}</h3>
              <div>{competition.organizationInfo}</div>
            </div>
          </div>
        </div>
        <div className={styles.BottomBoxSponsor}>
          <div className={styles.BottomBoxSponsorText}>{competition.spons}</div>
          <img
            alt={competition.spons}
            className={styles.BottomBoxSponsorImage}
            src={competition.sponsimage}
          ></img>
        </div>
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
