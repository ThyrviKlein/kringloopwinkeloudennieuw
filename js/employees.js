// Employee data file
const employees = [
  {
    name: "Jan Willem",
    image: "images/employees/jan-willem.jpg",
    role: "Eigenaar",
    description:
      "Jan Willem is getrouwd met Suzanna en is de eigenaar van de winkel. Jan Willem is een enorme liefhebber van mooie spullen en leuke mensen. Jan Willem verwerkt de ingekomen goederen, haalt en bezorgd spullen, maakt menig ritje naar de stort en deelt vooral veel liefde en gezelligheid met zowel de vrijwilligers als met de door hem zo geliefde klanten. Daarnaast is hij de officiële eindbaas 😉",
  },
  {
    name: "Suzanna",
    image: "images/employees/suzanna.jpg",
    role: "Eigenaresse",
    description:
      "Suzanna is getrouwd met Jan Willem en eigenaresse van de winkel. Suzanna is momenteel niet veel in de winkel te vinden; maar op de achtergrond werkt zij hard mee aan de organisatie van de winkel en is ze tevens de steun en toeverlaat (en grootste liefde) van Jan Willem.",
  },
  {
    name: "Esther",
    image: "images/employees/esther.jpg",
    role: "Bedrijfsleider",
    description:
      "Esther is getrouwd met Sven en sinds september 2024 werkzaam bij de kringloop als bedrijfsleider. Haar hart ligt bij oude spullen en gezelligheid. Daarnaast gebruikt ze haar creativiteit en organisatie skills, om van de kringloop een gezellige en georganiseerde winkel te maken. Ze maakt graag even een praatje met onze lieve klanten en is dol op complimentjes.",
  },
  {
    name: "Vincent",
    image: "images/employees/vincent.jpg",
    role: "Bedrijfsleider",
    description:
      "Vincent is sinds de zomer van 2023 werkzaam bij de kringloop als bedrijfsleider. Hij is meestal aanwezig op woensdag en vrijdag, maar wanneer het nodig is; staat hij er ook! Vincent is onder andere verantwoordelijk voor de controle van alle elektronica. Hij ziet erop toe dat alle elektrische apparatuur werkt en veilig voor gebruik is. Daarnaast is hij regelmatig achter de kassa te vinden om u te voorzien van advies en uw aankopen met u af te rekenen.",
  },
  {
    name: "Sven",
    image: "images/employees/sven.jpg",
    role: "Vrijwilliger",
    description:
      "Sven is getrouwd met Esther en werkt sinds oktober 2024 in de kringloop op de zaterdagen. Sven is verantwoordelijk voor de zaterdagbezetting en ziet erop toe dat onze vrijwilligers in hun kracht gezet worden. Daarnaast is Sven niet alleen dol op technische spulletjes, maar ook op cijfers en overzichten, wat ons meer inzicht geeft in de financiële kant van de kringloop.",
  },
  {
    name: "Wilbert",
    image: "",
    role: "Vrijwilliger",
    description:
      "Wilbert is de zoon van Jan Willem en Suzanna en is als vanzelfsprekend meegegroeid in het reilen en zeilen van de kringloop. Je kan hem dan ook regelmatig in de winkel vinden. Niet alleen achter de kassa, maar ook achter het stuur staat hij zijn mannetje. Bezorgen, ophalen, naar de stort, zelfs als hij samen met Jan Willem onderweg is, is Wilbert degene aan het stuur. Daarnaast kan hij het niet laten om regelmatig even binnen te lopen voor een knuffel van Jan Willem.",
  },
  {
    name: "Gerard",
    image: "",
    role: "Vrijwilliger",
    description:
      "Gerard is sinds het voorjaar van 2024 werkzaam in de kringloop. Gerard richt zich voornamelijk op de boekenafdeling, waar hij met name op dinsdag en donderdag te vinden is. Hij zorgt ervoor dat de nieuwe boeken op de juiste plek terechtkomen, waardoor u ze makkelijker kunt vinden. Daarnaast zorgt hij ervoor dat de boekenafdeling netjes en georganiseerd blijft. Tevens vind u hem regelmatig achter de kassa, waar hij u graag helpt bij het afrekenen van uw nieuwe aanwinsten.",
  },
  {
    name: "Cees",
    image: "",
    role: "Vrijwilliger & Vertrouwenspersoon",
    description:
      "Cees is werkzaam bij de kringloop sinds het voorjaar van 2024. En is vooral op de donderdag aanwezig. Hij is een echte duizendpoot. Hij verwerkt ingekomen goederen, ruimt de geprijsde artikelen op in de winkel, ruimt de kelder en werkplaats op en is tevens de vertrouwenspersoon voor onze vrijwilligers. Op zoek naar een luisterend oor? Bij Cees bent u aan het juiste adres.",
  },
  {
    name: "Riet",
    image: "",
    role: "Vrijwilligster",
    description:
      "Riet is werkzaam bij de kringloop sinds oktober 2024. Riet is onze oudste vrijwilligster en daar zijn we trots op! Riet is meestal meerdere dagen in de week in de kringloop te vinden, waar ze de taak op zich heeft genomen om de winkel op te ruimen en schoon te maken. Daarnaast is Riet altijd in voor een geintje en een echte aanwinst voor de winkel.",
  },
  {
    name: "Joke",
    image: "",
    role: "Vrijwilligster",
    description:
      "Joke was in de oude winkel al vrijwilligster en is gezellig meegekomen naar de winkel aan de Prins Bernhardstraat. Daarmee is ze na Liesbeth het langst werkzaam in onze kringloop! Joke is een echte koningin in de keuken. Zij is verantwoordelijk voor onze gehele keukenafdeling. Serviezen, glazen, pannen en potten, Joke zorgt ervoor dat ze keurig gesorteerd voor u zijn neergezet. Ze is meestal op donderdag aanwezig, maar u kunt haar zomaar een andere dag ook treffen.",
  },
  {
    name: "Liesbeth",
    image: "",
    role: "Vrijwilligster",
    description:
      "Liesbeth is werkzaam in de kringloop sinds 2019, en is daarmee 1 van onze langst werkende vrijwilligers. Liesbeth werkt vooral achter de schermen. (Bijna) Alle kleding die in de winkel hangt is door Liesbeth gecontroleerd en geprijsd. Het is zoals u zich kunt voorstellen een enorme klus, maar Liesbeth doet het met liefde en plezier. En dat kunt u merken aan de kwaliteit van de kleding en de mooie lage prijzen! Mocht u Liesbeth tegenkomen in de winkel, herkent u haar aan haar stralende lach!",
  },
  {
    name: "Kees",
    image: "",
    role: "Vrijwilliger",
    description:
      "(Door ons ook weleens gekscherend CD-kees genoemd) Kees werkt bij ons in de kringloop sinds de zomer van 2023. Zijn bezigheden bestaan uit het controleren van alle binnengekomen cd's, dvd, en Blu-rays. Niet alleen controleert hij de staat, maar hij zorgt er ook voor dat ze netjes gesorteerd in de winkel staan. Ofwel op genre, ofwel op leeftijdscategorie. Kees is er meestal op donderdag of zaterdag, dan vind u hem aan de koffietafel met een grote krat cd's of dvd's, of boven om alle nieuwe artikelen weer een mooie plekje te geven.",
  },
  {
    name: "Jan",
    image: "",
    role: "Vrijwilliger",
    description:
      "Jan is werkzaam in de kringloop sinds medio 2022. Met een achternaam als Disco, zou je verwachten dat hij zich óók met de muziek afdeling bezig hield, maar nee, Jan is op de boekenafdeling te vinden. Alwaar hij samen met Gerard zorgt voor een mooie overzichtelijke indeling van de boeken. Daarnaast is Jan regelmatig even aan de koffietafel te vinden, waar hij altijd in is voor een goed gesprek of grapje.",
  },
  {
    name: "John",
    image: "",
    role: "Vrijwilliger",
    description:
      "John werkt sinds najaar 2024 bij ons in de kringloop. Niemand weet precies sinds wanneer, want John heeft heel lang volgehouden dat hij niet bij ons werkte. Maar toen hij bijna dagelijks aanwezig was en meer ingekomen goederen aannam dan enig andere medewerker, kon hij er toch niet meer onderuit. John is vooral in het magazijn te vinden. Daar neemt hij de spullen aan die zovelen van u komen brengen. Daarnaast zorgt hij ervoor dat de buitenboel netjes blijft. Hij zorgt ervoor dat klanten hun fietsen netjes kwijt kunnen en brengt een hoop gezelligheid. John is er zo'n beetje 6 dagen in de week en dat doet bijna niemand van ons hem na!",
  },
  {
    name: "Ronald",
    image: "",
    role: "Vrijwilliger",
    description:
      "Ronald noemt zichzelf geen 'vaste vrijwilliger', maar als je dagelijks meerdere keren in de winkel aanwezig bent, dan ben je het stiekem toch 😉. Ronald zorgt ervoor dat het koffie apparaat dagelijks wordt onderhouden; schoongemaakt en bijgevuld. Koffiekopjes worden afgewassen en de koektrommel gevuld. Maar Ronald is niet alleen de man van de koffie. Ronald is tevens een goede vriend en mentor van Jan Willem. En daarnaast de grootste lolbroek die in de winkel rondloopt. Er gaat geen dag voorbij dat Ronald je niet aan het lachen kan maken met een leuke grap of mop en door zijn aanstekelijke lach vrolijkt hij iedereen op.",
  },
  {
    name: "Kim",
    image: "",
    role: "Vrijwilligster",
    description:
      "Kim werkt bij ons sinds het voorjaar van 2024. Kim is een lieve jonge vrouw die Joke helpt bij het netjes houden van de keuken. Daarnaast doet ze vele klusjes in de winkel; zoals het opruimen van de speelgoedafdeling, het inruimen van de te verkopen spullen en is ze altijd bereid om te helpen waar nodig. Daarnaast is Kim een echte kringloop liefhebber. Zelfs op haar vrije dagen is ze er regelmatig even te vinden om leuke spulletjes uit te zoeken voor haar kamer, cadeautjes voor familie te kopen, of een kleinigheidje mee te nemen voor 1 van haar mede bewoners.",
  },
  {
    name: "Nadia",
    image: "images/employees/nadia.jpg",
    role: "Vrijwilligster",
    description:
      "Nadia werkt sinds begin 2024 bij ons op de donderdag. Zij helpt op die dagen voornamelijk Kees bij het wegzetten van de dvd's. Maar is daarnaast ook een grote hulp in de winkel. Het uitruimen van de vaatwasser, stofzuigen of spulletjes in de winkel zetten; niets is haar te gek. Mocht u haar tegenkomen op donderdag, is ze altijd in voor een gezellig praatje.",
  },
  {
    name: "Tessa",
    image: "",
    role: "Vrijwilligster",
    description:
      "Tessa is werkzaam in de kringloop sinds maart 2024. Ze werkt vooral op de zaterdagen, waar ze in het begin vooral achter de kassa stond en spullen in de winkel zette. Fashion Queen Tessa studeert aan de mode academie, dus was zij eigenlijk veel meer op haar plek op de kleding afdeling. Sinds begin 2025 is zij daar dan ook iedere zaterdag te vinden.Zij kleed de paspoppen aan volgens de laatste mode, zorgt ervoor dat de geprijsde kleding op de juiste plek in de winkel wordt gehangen en zorgt voor de fantastische uitstraling van de kleding afdeling.",
  },
  {
    name: "Ruby",
    image: "images/employees/ruby.jpg",
    role: "Vrijwilligster",
    description:
      "Ruby werkt sinds januari 2024 op de zaterdag bij ons in de kringloop. Waar zij voorheen samen met Tessa achter de kassa stond, staat ze er nu met Sven. Ruby heeft een oog voor cijfers en helpt u snel en deskundig bij het afrekenen en inpakken van uw aangekochte items. Ruby weet van aanpakken en is een gezellige jonge vrouw die altijd in is voor een flauw grapje, of een potje karaoke.",
  },
  {
    name: "Vygo",
    image: "images/employees/vygo.jpg",
    role: "Vrijwilliger",
    description:
      "Vygo is de zoon van Sven en Esther en werkt sinds december 2023 bij de kringloop. Daar is hij op zaterdagen de rechterhand van Jan Willem. Mee naar de stort om spullen op te halen of weg te brengen, zware artikelen de winkel in sjouwen, artikelen bezorgen bij klanten, ingekomen goederen wegzetten, spullen opruimen in de kelder of bij de sportafdeling, Vygo doet het allemaal met veel enthousiasme. Vygo is een manusje van alles en draait nergens zijn hand voor om. Zelfs niet om zijn ouders ervan te  overtuigen om óók bij de kringloop te komen werken. 😉",
  },
  {
    name: "Rens",
    image: "",
    role: "Vrijwilliger",
    description:
      "Rens is eigenlijk geen vaste vrijwilliger in de kringloop, maar meer een hele goede vriend van Jan Willem. Zodra Jan Willem hem nodig heeft, is hij er. Rens is super technisch en heeft kleine (en grotere) klusjes in een handomdraai gedaan. Dingen repareren, een kast in elkaar zetten, bij Rens zit je goed.",
  },
  {
    name: "Marcel",
    image: "",
    role: "Vrijwilliger",
    description:
      "Marcel werkt sinds het najaar van 2024 bij de kringloopwinkel; waar hij voornamelijk bij cyclus staat. Daar neemt hij items aan die anders in de afvalcontainers zouden verdwijnen en draagt daarmee zijn steentje bij aan ons doel van milieubesparing. Marcel is een gezellige, hulpvaardige man met een aanstekelijke lach. ",
  },
  {
    name: "Willem",
    image: "",
    role: "Vrijwilliger",
    description:
      "Willem is ongeveer tegelijk met Marcel bij de kringloop begonnen en ook hij is met name bij Cyclus te vinden. Willem heeft een oog voor mooie en bruikbare spullen en zorgt ervoor dat deze een tweede leven krijgen bij ons in de kringloopwinkel. Willem is een harde werker, houdt van gezelligheid en staat altijd voor iedereen klaar. Hij ziet het positieve in het leven en in oude spullen, waar hij altijd wel een mooie bestemming voor weet.",
  },
  {
    name: "Janny",
    image: "",
    role: "Vrijwilligster",
    description:
      "Janny werkt al sinds 2022 in onze kringloop. Ze heeft daar regelmatig in de winkel gewerkt, maar doet haar werk nu voornamelijk vanuit huis. En hoe! Al het speelgoed, alle hobbyspullen, lappen stof, sieraden, lichaamsverzorging en zélfs de kerstspullen zijn door Janny's handen gegaan. Alles wordt nagekeken, gecontroleerd, gesorteerd en geprijsd. Wat zouden we zonder haar moeten! Af en toe kunt u haar in de winkel treffen, als ze de sieraden komt inhangen; of de hobby hoek komt reorganiseren.",
  },
];

// Export the employees array for use in other files
if (typeof module !== "undefined" && module.exports) {
  // For Node.js/CommonJS environment
  module.exports = employees;
} else {
  // For browser environment
  window.employees = employees;
}
