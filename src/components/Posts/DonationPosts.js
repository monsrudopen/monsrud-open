import React from 'react';
import Post from './Post';
import './posts.css';

function DonationPosts(props) {
  const unicef =
    'Det første året valgte vi å sette fokus på barns rettigheter. Vi samlet inn kr 1 200 til UNICEF noe vi den gangen var fornøyd med. UNICEF er verdens største hjelpeorganisasjon, og de jobber for barns rettigheter i over 190 land. Viktige temaer er utdanning, nødhjelp, livreddende ernæring, rent vann, vaksiner og beskyttelse. UNICEF ble startet i 1946 for hjelpe barn etter krigen. Etter hvert har arbeidet dreid seg mye om barn i Afrika, Asia og Latin-Amerika. I 1965 vant UNICEF Nobels Fredspris.';

  const amnesty =
    'I 2015 samlet vi inn kr 3 000 til Amnesty. Dette var mer enn en dobling fra det første året noe vi var svært fornøyd med. Amnesty International er verdens største menneskerettighetsorganisasjon. De er en bevegelse som kjemper for ytringsfrihet og mot diskriminering og overgrep. De etterforsker og avslører brudd på menneskerettighetene, de aksjonerer for enkeltmennesker i fare, og for å skape varige endringer. Amnesty er uavhengig. Det gjør at de kan si sannheten om enhver regjering og makthaver. Amnesty har utallige resultater å vise til. Hvis man vil lese mer om Amnesty kan man gå til deres nettsider.';

  const nrc =
    'I 2016 samlet vi inn 6 000 kroner til Flyktninghjelpen. Igjen doblet vi beløpet til store glede for alle sammen. Flyktninghjelpen er Norges største humanitære organisasjon og de sørger for at flyktninger får mat, rent vann og et sted å sove. Av den 5 000 ansatte jobber størsteparten av dem lokalt i land ca. 25 land i Asia, Afrika og Sør-Amerika. Organisasjonen tilbyr beskyttelse og hjelp til mennesker på flukt. De jobber også mer langsiktig for flyktningers rettigheter og hjelper med juridiske problemer. 65,3 millioner mennesker var på flukt i 2015, en økning på nesten 6 millioner fra året før. Dette er det høyeste tallet som noen gang har vært registrert. Vi var derfor stolte over å kunne bidra til Flykningshjelpens arbeid akkurat dette året. I tillegg traff styreleder Marius Monsrud generalsekretær i Flyktninghjelpen Jan Egeland og fortalte han om innsamlingen. Han kunne fortelle at han aldri hadde hørt om en badmintoninnsamling før og at han satt stor pris på det vi hadde gjort.';

  const redCross =
    'I 2017 satt vi fokus på rent vann. Vi samlet inn fantastiske kroner 14 756 til Røde Kors til vann for livet kampanje. Dette ble da tredje året med en dobling av det innsamlede beløpet. Rent vann er et stort problem i mange deler av verden. Så mange som én milliard mennesker mangler tilgang til rent vann. Dette fører til at mer enn 6 000 mennesker dør daglig. De fleste av disse er barn. Tid som kunne vært brukt til å arbeide og skape en fremtid blir brukt til å hente vann. Det er ofte kvinner som må gå mange timer hver dag for å hente vann. Barn som skulle ha gått på skole kan også måtte slutte på skolen for å bidra til å hente rent vann. Dette skaper en ond sirkel av fattigdom for altfor mange. Røde Kors har prosjekter i Mosambik, Lesotho, Sudan, Rwanda, Kenya og Burundi. 1000 mennesker får rent vann ved å sette opp én brønn! Monsrud Open er stolte av å ha bidratt til dette arbeidet.';

  const reddBarna =
    'I 2018 samlet vi inn penger til Redd Barna. Tross noe færre deltakere enn året før klarte vi å samle inn kr 12 669, noe vi var svært fornøyd med. For andre gang ønsket vi å sette fokus på barns rettigheter. I tiden før arrangementet ble barns rettigheter satt på prøve, og vestlige land sviktet. Skip med migranter som ønsket et bedre liv for seg og sin familie blir nektet adgang til Europeiske land. Trump satt barn i bur på grensen mellom USA og Mexico. 263 millioner barn er ikke i skole i dag. Redd Barna nådde nesten 10 millioner barn over hele verden i 2017 med sine utdanningsprogram. Redd Barna hjalp i alt i 2017 155 millioner barn i 120 forskjellige land. På grunn av dette var valget i 2018 enkelt. Redd Barna bygger alt sitt arbeid på barnekonvensjonen som skal sikre rettigheter til hvert enkelt barn. Redd Barna jobber for barns rettigheter i Norge, samt 120 andre land med temaer som utdanning, barns rett til helse, nødhjelp og barns beskyttelse. Monsrud Open er derfor svært stolt av vårt bidrag til Redd Barna i 2018';

  const plan =
    'I 2019 gikk innsamlingen til Plan Norges jentefond og det ble samlet inn hele 17 701,08 kroner. Plan Norge jobber særlig med jenters rettigheter og likestilling. Jenter opplever diskriminering og urettferdighet i store deler av verden. Rundt 130 millioner jenter mellom 6 og 17 år går ikke på skolen i verden. Jenter faller fra, særlig i tenårene, fordi familien ikke har råd eller fordi deres arbeidskraft trengs hjemme. Andre viktige årsaker er barneekteskap og tidlig graviditet. Dagens tempo må åttedobles skal FNs bærekraftsmål om likestilling og målet om avskaffelse av barneekteskap nås innen 2030. Plan gir barn og unge kunnskap om sine rettigheter, bygger skoler, jobber for å stoppe barneekteskap, skaper holdningsendringer og driver påvirkningsarbeid. Et eksempel på kunnskapsspredning kommer fra Malawi der gamle norske FM radioer deles for å enkelt kunne spre kunnskap. Pengene fra fondet har tidligere blitt brukt til å gjøre byen tryggere for jenter i India, kampen mote barneekteskap in Vietnam, i Zimbabwe har de jobbet for å øke jenters tilgang til utdanning, og de har arbeidet mot vold i skolen i Malawi.';
  return (
    <div className="postContainer">
      <div className="postsRow">
        <Post
          title="UNICEF (2014)"
          text={unicef}
          image={require('./../../img/images/y2014.jpeg')}
        />
        <Post
          title="Amnesty (2015)"
          text={amnesty}
          image={require('./../../img/images/y2015.jpeg')}
        />
        <Post
          title="Flyktninghjelpen (2016)"
          text={nrc}
          image={require('./../../img/images/y2016.jpeg')}
        />
        <Post
          title="Røde Kors (2017)"
          text={redCross}
          image={require('./../../img/images/postImage3.png')}
        />
        <Post
          title="Redd Barna (2018)"
          text={reddBarna}
          image={require('./../../img/images/group2018.jpg')}
        />
        <Post
          title="Plan Norges jentefond (2019)"
          text={plan}
          image={require('./../../img/images/y2019.jpg')}
        />
      </div>
    </div>
  );
}

export default DonationPosts;
