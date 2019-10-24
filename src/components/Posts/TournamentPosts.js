import React from 'react';
import Post from './Post';
import './posts.css';

function TournamentPosts(props) {
  const y2014 =
    'Denne første offisielle turneringen ble vunnet av Jakob Hardersen Prydz. I finalen slo han forhåndsfavoritten Ferdinand Eide Rode noe overraskende for mange. Hjemmehåpet Marius Monsrud skuffet og røk ut allerede i gruppespillet etter tap mot noe svakere rangerte Thomas Matthew Brown. Han tapte også en svært jevn kamp mot vinnende Jakob Hardersen Prydz. ';
  const y2015 =
    'Dette året var året Jakob Hardersen Prydz for alvor skulle markere sin posisjon. Året før kan nok noen ha ment at seieren var noe heldig, men i år var det mindre tvil. Jakob forsvarte tittelen og beholdt vandretrofeet. Prestasjonen ble enda bedre av at antallet deltakere i turneringen var fordoblet fra året før. Dette året var først året vi hadde en flott nettside. Underholdningen fra Kristine Hubert, vår egen huskomiker og gode venn, (kjent fra masse tv-programmer!) var dagens absolutte høydepunkt. Stand-up av ypperste klasse!';
  const y2016 =
    'Dette var året da den store favoritten, med mange års tenniserfaring endelig skulle lykkes. Ferdinand Eide Rode klarte endelig å hente hjem trofeet. Finalen var jevn og spennende mellom hjemmehåpet Marius Monsrud og Ferdinand. Etter tre jevne sett ble det hele avgjort. Ellers nytt av året var vårt flotte banner som har prydet bakgrunnen på de fleste bilder fra turneringen i etterkant. Styret fikk også flotte krus med logoen (selvfølgelig betalt av oss selv). Vi husker også den flotte promofilmen laget av Erlend Solbakk Harbitz som så flott satt sammen badminton og flyktninger. Under selve arrangementet sto Kristine Hubert og Erik Bjørgum for fremragende underholdning. Deres sang om Marius Monsrud på melodien til «kursiv» glemmes nok aldri. ';
  const y2017 =
    '2017 var året for de store overraskelsene. Årets vinner var noe overraskende styremedlem Erlend Solbakk Harbitz. Marius Monsrud ble denne gangen igjen slått i finalen. Årets store nyhet var svært flotte spillerkort laget av vår kreative deltaker og venn Sondre Angard Siljehaug. Salg av disse bidro til økte inntekter til Røde Kors. Disse kortene vil trolig stige mye i verdi i årene fremover. 2017 var også året Monsrud Open ble en offisiell organisasjon etter at stiftelsesmøte var avholdt på Gløshaugen i Trondheim i starten av mars. Til stede var hele nåværende styre ved styreleder Marius Monsrud, Erlend Solbakk Harbitz, Ferdinand Eide Rode og Øystein Hammersland. Vedtekter ble skrevet og alle dokumenter ble sendt inn til Brønnøysundregisteret. Dette ga oss tilgang til egen nettbank og Vipps. Dette gjorde oss mer åpne.';
  const y2018 =
    'I 2018 var det endelig klart for hjemmeseier. Etter nok en tøff finale mot Ferdinand Eide Rode fikk han sin revansj. Etter to finaletap på rad var dette fortjent. Det skal nevnes at Marius hadde spilt badminton på NHH én gang i uken hele dette året og derfor kunne kalles favoritt. Noen gikk så langt som å kall det juks, men det stemmer ikke. Under Monsrud Open er det lov å være helt nybegynner, men det er også lov å være god! Ellers kunne Sondre Angard Siljehaug presentere et flokende nytt trofé. Dette flotte trofeet ble værende i Ruglandveien etter turneringen. ';
  const y2019 =
    '2019 var året Ferdinand Eide Rode kunne hente hjem sitt andre trofé fra Monsrud Open.';
  return (
    <div className="postContainer">
      <div className="postsRow">
        <Post
          title="2014"
          text={y2014}
          image={require('./../../img/images/y2014.jpeg')}
        />
        <Post
          title="2015"
          text={y2015}
          image={require('./../../img/images/y2015.jpeg')}
        />
        <Post
          title="2016"
          text={y2016}
          image={require('./../../img/images/y2016.jpeg')}
        />
        <Post
          title="2017"
          text={y2017}
          image={require('./../../img/images/postImage3.png')}
        />
        <Post
          title="2018"
          text={y2018}
          image={require('./../../img/images/group2018.jpg')}
        />
        <Post
          title="2019"
          text={y2019}
          image={require('./../../img/images/y2019.jpg')}
        />
      </div>
    </div>
  );
}

export default TournamentPosts;
