const images = require('../pictures/*.png');
const imagess = require('../pictures/*.jpg');
console.log(images);
export default {
  phases: [
    {
      id: 1,
      name: 'Konoha',
      img: images.portedekonoha,
      caption: 'Nous voilà Konoha le village du 3 eme hokage, partons explorer les autres villages',
      paths: [
        {
          name: 'Portes de Kiri',
          to: 2
        },
        {
          name: 'Suna',
          to: 3
        }
      ]
    },
    {
      id: 2,
      name: 'Portes de Kiri',
      img: images.kiri,
      caption: 'Kiri,le village caché de la pluie, il est réputé pour être dangereux je devrais faire attention ',
      paths: [
        {
          name: 'Retour à Konoha',
          to: 1
        },
        {
          name: 'Rues de Kiri',
          to: 2.1
        },
        {
          name: 'La brume de Kiri',
          to: 8
        }
      ]
    },
    {
      id: 2.1,
      name: 'Rues de kiri',
      img: images.kiri,
      paths: [
        {
          name: 'Retour aux portes de Kiri',
          to: 2
        },
        {
          name: 'Ruelle Brumeuse',
          to: 2.2
        }
      ]
    },
    {
      id: 2.2,
      name: 'Ruelle Brumeuse',
      img: images.kiri,
      element: images.parchemin,
      caption: 'Un parchemin de la brume, il pourrait peut être me permettre de dévoiler un chemin ',
      paths: [
        {
          name: 'Rues de Kiri',
          to: 2.1
        },
        {
          name: 'S\'enfoncer dans la ruelle',
          to: 2.3
        }
      ]
    },
    {
      id: 2.3,
      name: 'Etrange personne',
      img: images.kiri,
      enemy: images.hoodedman,
      class: 'hoodedman',
      caption: 'Un étrange inconnu ... Allons lui parler',

      paths: [
        {
          name: 'Ruelle de Kiri',
          to: 2.2
        },
        {
          name: 'Parler à l\'étranger',
          to: 2.4
        }
      ]
    },
    {
      id: 2.4,
      name: 'Zabuza',
      img: images.kiri,
      caption: 'Zabuza est un grand Ninja du village de Kiri, lance les dés afin de tanter de la battre!',
      enemy: images.zabuza,
      button: 'buttonFight',
      fightButton: 'Lancer les dés',
      class: 'zabuza',
      paths: [
        {
          name: 'Ruelle de Kiri',
          to: 2.2
        },
        {
          name: 'Lancer les dés',
          to: 4
        }
      ]
    },
    {
      id: 3,
      name: 'Suna',
      img: images.suna,
      caption: 'Suna le village caché du sable, il faut que je m\'enfonce un peu plus pour trouver quelque chose',
      paths: [
        {
          name: 'Konoha',
          to: 1
        },
        {
          name: 'Suna 1',
          to: 3.1
        }
      ]
    },
    {
      id: 3.1,
      name: 'Suna 1',
      img: images.suna2,
      caption: 'Je ne vois pas grand chose avec tout ce sable dans les airs, il faut que je trouve un moyen de me protéger.',
      paths: [
        {
          name: 'Suna',
          to: 3
        },
        {
          name: 'Suna 2',
          to: 3.2
        }
      ]
    },
    {
      id: 3.2,
      name: 'Suna 2',
      img: imagess.suna3,
      caption: 'Nous voilà enfin dans le centre de Suna !! Vieux hokage j\'arrive DATEBAYO!!!',
      paths: [
        {
          name: 'Suna 1',
          to: 3.1
        },
        {
          name: 'Suna 3',
          to: 3.3
        }
      ]
    },
    {
      id: 3.3,
      name: 'Suna 3',
      img: images.suna,
      paths: [
        {
          name: 'Suna 2',
          to: 3.2
        },
        {
          name: 'Suna 4',
          to: 3.4
        }
      ]
    },
    {
      id: 3.4,
      name: 'Suna 4',
      img: images.suna,
      enemy: images.sasori,
      class: 'sasori',
      button: 'buttonFight',
      fightButton: 'Tire un nombre',
      caption: 'Konoha est juste devant, je vais pouvoir débrief avec le Hokage ',
      paths: [
        {
          name: 'Suna 3',
          to: 3.3
        },
        {
          name: 'Village de Konoha',
          to: 4
        }
      ]
    },
    {
      id: 4,
      name: 'Konoha ( village )',
      img: images.konoha,
      paths: [
        {
          name: 'Village de Suna',
          to: 3
        },
        {
          name: 'Village de Kiri',
          to: 2
        },
        {
          name: 'Village de Ame',
          to: 5
        },
        {
          name: 'Village de Kumo',
          to: 6
        }
      ]
    },
    {
      id: 5,
      name: 'Ame',
      paths: [
        {
          name: 'Retour à Konoha',
          to: 4
        },
        {
          name: 'Rentrez dnas le village Ame',
          to: 5.1
        }
      ]
    },
    {
      id: 5.1,
      name: 'Ame 1',
      paths: [
        {
          name: 'Ame',
          to: 5
        },
        {
          name: 'Ame 2',
          to: 5.2
        }
      ]
    },
    {
      id: 5.2,
      name: 'Ame 2',
      paths: [
        {
          name: 'Ame 1',
          to: 5.1
        },
        {
          name: 'Ame 3',
          to: 5.3
        }
      ]
    },
    {
      id: 5.3,
      name: 'Ame 3',
      paths: [
        {
          name: 'Ame 2',
          to: 5.2
        },
        {
          name: 'Ame 4',
          to: 5.4
        }
      ]
    },
    {
      id: 5.4,
      name: 'Ame 4',
      paths: [
        {
          name: 'Ame 3',
          to: 5.3
        },
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        }
      ]
    },
    {
      id: 6,
      name: 'Kumo',
      paths: [
        {
          name: 'Konoha ( village )',
          to: 4
        },
        {
          name: 'Kumo 1',
          to: 6.1
        }
      ]
    },
    {
      id: 6.1,
      name: 'Kumo 1',
      paths: [
        {
          name: 'Kumo',
          to: 6
        },
        {
          name: 'Kumo 2',
          to: 6.2
        }
      ]
    },
    {
      id: 6.2,
      name: 'Kumo 2',
      paths: [
        {
          name: 'Kumo 1',
          to: 6.1
        },
        {
          name: 'Kumo 3',
          to: 6.3
        }
      ]
    },
    {
      id: 6.3,
      name: 'Kumo 3',
      paths: [
        {
          name: 'Kumo 2',
          to: 6.2
        },
        {
          name: 'Kumo 4',
          to: 6.4
        }
      ]
    },
    {
      id: 6.4,
      name: 'Kumo 4',
      paths: [
        {
          name: 'Kumo 3',
          to: 6.3
        },
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        }
      ]
    },
    {
      id: 7,
      name: 'Entrée de la forêt de la mort',
      paths: [
        {
          name: 'Ame 4',
          to: 5.4
        },
        {
          name: 'Forêt de la mort',
          to: 7.1
        }
      ]
    },
    {
      id: 7.1,
      name: 'Fôret de la mort',
      paths: [
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        },
        {
          name: 'Forêt de la mort 1',
          to: 7.2
        }
      ]
    },
    {
      id: 7.2,
      name: 'Fôret de la mort 1',
      paths: [
        {
          name: 'Fôret de la mort',
          to: 7.1
        },
        {
          name: 'Forêt de la mort 2',
          to: 7.3
        }
      ]
    },
    {
      id: 7.3,
      name: 'Fôret de la mort 2',
      paths: [
        {
          name: 'Fôret de la mort 1',
          to: 7.2
        },
        {
          name: 'Forêt de la mort 3',
          to: 7.4
        }
      ]
    },
    {
      id: 7.4,
      name: 'Fôret de la mort 3',
      paths: [
        {
          name: 'Fôret de la mort 2',
          to: 7.3
        },
        {
          name: 'Retour à Konoha',
          to: 4
        }
      ]
    },
    {
      id: 8,
      name: 'Kiri Brume',
      caption: 'Nous trouverons peut-être une technique secrète pendant notre voyage, afin de faire disparaître la brume.',
      paths: [
        {
          name: 'Portes de Kiri',
          to: 2
        },
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        }
      ]
    }
  ]
};
