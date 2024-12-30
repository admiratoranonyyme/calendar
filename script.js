const anecdotes = [
  {
    text: "Janvier : Une nouvelle année commence, et avec elle, le privilège de continuer à partager ma vie avec toi. Il est rare de rencontrer une personne qui éclaire autant nos jours, et pourtant, te voilà. Chaque fois que je doute, tu es là, avec un sourire ou un mot qui m'aide à avancer. Janvier, ce mois où les journées sont courtes et les nuits longues, devient lumineux grâce à toi. Merci d’être cette constante, cette étoile dans le ciel de mon hiver. J’espère que cette année sera à la hauteur de tout ce que tu mérites, car tu es bien plus qu’une amie : tu es une partie essentielle de ma vie.",
    image: "january.jpg"
  },
  {
    text: "Février : Ce mois est court, mais il est rempli de tant de souvenirs avec toi. Dans le froid de l'hiver, tu es comme un feu de cheminée, chaleureux et réconfortant. Je me souviens de toutes nos conversations qui m’ont apporté une clarté que je ne pensais pas possible. C’est dans ces moments que je réalise combien tu es important pour moi. Février me rappelle que même les jours les plus froids peuvent être empreints de chaleur, tant que tu es là. Ton amitié est la couverture qui me protège, la lumière qui éclaire mes journées sombres. Merci pour tout, aujourd’hui et toujours.",
    image: "fevrier.jpeg"
  },
  {
    text: "Mars : Le printemps arrive lentement, et avec lui, la promesse de nouveaux départs. Pourtant, notre amitié n’a jamais eu besoin de renouveau, car elle est toujours là, solide et vraie. Je pense souvent à toutes les fois où tu as été là pour moi, à toutes les fois où tu m’as fait rire quand j’en avais le plus besoin. Mars est le mois des premiers bourgeons, et tu es la fleur constante dans mon jardin. Merci pour ta présence, pour ton écoute et pour tout ce que tu es. Si ce mois représente la renaissance, alors tu es le printemps de ma vie.",
    image: "mars.jpg"
  },
  {
    text: "Avril : Les pluies d'avril tombent, mais elles me rappellent la manière dont tu as su transformer mes larmes en force. Il y a tant de moments où j’ai cru être au bord du précipice, et tu es arrivé avec ta bienveillance pour me ramener à la vie. Chaque rire partagé, chaque aventure vécue ensemble me rappelle à quel point tu m'es précieuse. Avril est un mois où la nature s’éveille, et tout comme elle, je me sens renaître à tes côtés. Merci de croire en moi quand je n’y crois pas, merci d’être ce pilier, cette source d’inspiration inébranlable dans ma vie.",
    image: "avril.jpg"
  },
  {
    text: "Mai : Le parfum des fleurs emplit l’air, et il me rappelle la douceur de ton âme. Chaque moment passé avec toi est une leçon sur ce que signifie véritablement être une amie. Tu es toujours là, patiente, compréhensive et honnête, même dans les moments les plus difficiles. Mai est un mois où tout semble fleurir, et je ressens la même chose dans notre relation : elle grandit, elle s’enrichit, et elle devient chaque jour plus précieuse. Merci d’être toi, une personne avec qui le monde semble un peu plus beau, un peu plus lumineux, un peu plus vrai.",
    image: "mai.jpg"
  },
  {
    text: "Juin : Alors que l’été s’installe, je pense à tout ce que nous avons partagé. Tu es ce rayon de soleil constant dans ma vie, tu m'est de bonne compagnie même dans mes moments les plus sombres. Je me souviens de ces nuits où nous avons parlé de tout et de rien, de nos rêves, de nos peurs, et à quel point ces instants m’ont marqué. Tu m’as appris que l’amitié n’est pas simplement une relation, mais une promesse : celle d’être là, quoi qu’il arrive. Juin est un mois de chaleur, et tu es cette chaleur dans ma vie. Merci pour tout.",
    image: "juin.jpg"
  },
  {
    text: "Juillet : Les jours sont longs, mais jamais assez pour tout ce que j’aimerais partager avec toi. Je pense à ces nuits étoilées où nous avons parlé de nos espoirs et de nos rêves, et je me rends compte à quel point tu as enrichi ma vie. Tu es bien plus qu’une amie, tu es une partie de moi, une personne sans laquelle ma vie ne serait pas complète. Juillet est un mois de liberté, et c’est avec toi que je ressens cette liberté : celle d’être moi-même, sans jugement, avec une amie qui me comprend parfaitement.",
    image: "juillet.png"
  },
  {
    text: "Août : Ce mois est synonyme de voyages et d’aventures, et avec toi, chaque journée est une aventure en soi. Ton rire m’est de très bonne compagnie, et ton optimisme, le moteur qui m’entraîne. Je me souviens de toutes ces fois où tu m’as fait voir le monde d’un œil nouveau, où tu m’as montré que même les moments les plus simples peuvent être extraordinaires. Août est un mois de découvertes, et je découvre chaque jour à quel point tu es précieuse dans ma vie.",
    image: "aout.jpg"
  },
  {
    text: "Septembre : Le retour à la routine ne signifie jamais l’ennui avec toi. Même dans les moments les plus ordinaires, tu apportes une touche de magie. Je pense à toutes ces fois où tu as transformé une simple journée en un souvenir inoubliable. Septembre est un mois de transition, mais avec toi, chaque transition est un pas vers quelque chose de mieux. Merci pour ta constance, pour ta loyauté, et pour tout ce que tu es.",
    image: "septembre.jpeg"
  },
  {
    text: "Octobre : Les feuilles tombent, mais notre amitié ne cesse de grandir. Chaque conversation que nous avons est une leçon sur ce que signifie véritablement être présente pour quelqu’un. Tu es cette personne rare qui écoute, comprend et soutient sans jamais juger. Octobre est un mois où la nature change, mais toi, tu es cette constante qui rend ma vie belle. Merci pour ta patience, ta sagesse, et pour chaque moment partagé.",
    image: "octobre.jpg"
  },
  {
    text: "Novembre : Même lorsque le ciel est gris, tu es la lumière qui éclaire mes jours. Il y a tant de moments où je me suis appuyée sur toi, et tu as toujours été là, avec ta gentillesse et ta générosité. Novembre est un mois où la vie ralentit, mais avec toi, chaque instant est une célébration de notre amitié. Merci d’être ce phare dans ma vie, cette lumière qui ne vacille jamais.",
    image: "novembre.jpg"
  },
  {
    text: "Décembre : Une année s’achève, et avec elle, une myriade de souvenirs que nous avons créés ensemble. Chaque moment passé avec toi est un cadeau, je suis infiniment reconnaissante pour toi, pour ton amitié, pour tout ce que tu fais et tout ce que tu es. Merci pour cette année, et pour toutes celles passées. Tu es, sans aucun doute, l'un des plus beau cadeau que la vie m’ait offert.",
    image: "decembre.jpg"
  }
];

const tabs = document.querySelectorAll(".tab");
const anecdoteText = document.getElementById("anecdote-text");
const monthImage = document.getElementById("month-image");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");

    anecdoteText.textContent = anecdotes[index].text;
    monthImage.src = anecdotes[index].image;
  });
});
