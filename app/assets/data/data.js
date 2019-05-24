const images = require('../pictures/*.png');
const imagess = require('../pictures/*.jpg');
const musique = require('../musics/*.mp3');
export default {
  phases: [
    {
      id: 1,
      name: 'Konoha',
      img: images.portedekonoha,
      music: musique.konoha,
      caption:
        'Nous voilà Konoha le village du 3 eme hokage, partons explorer les autres villages',
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
      music: musique.sarutobi,
      caption:
        'Kiri,le village caché de la pluie, il est réputé pour être dangereux je devrais faire attention ',
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
      caption: 'Il n\'y a pas grand chose ici, je devrais sûrement avancer ',
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
      element: images.Parchedeux,
      caption:
        'Un parchemin de la brume, il pourrait peut être me permettre de dévoiler un chemin ',
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
      music: musique.narutofight,
      caption:
        'Zabuza est un grand Ninja du village de Kiri, je suis obligé de le combattre!',
      enemy: images.zabuza,
      button: 'buttonFight',
      fightButton: 'Tirer un nombre',
      class: 'zabuza',
      paths: []
    },
    {
      id: 2.5,
      name: 'Victoire contre Zabuza',
      img: images.kiri,
      caption:
        'J\'ai réussi à vaincre Zabuza ! retournons à Konoha pour un débrief',
      paths: [
        {
          name: 'Retour à Konoha',
          to: 4
        }
      ]
    },
    {
      id: 3,
      name: 'Portes de Suna',
      img: images.suna,
      music: musique.gogo,
      caption:
        'Suna le village caché du sable, il faut que je m\'enfonce un peu plus pour trouver quelque chose',
      paths: [
        {
          name: 'Village de Konoha',
          to: 1
        },
        {
          name: 'Les rues de Suna',
          to: 3.1
        }
      ]
    },
    {
      id: 3.1,
      name: 'Rues de Suna',
      img: images.suna2,
      caption:
        'Je ne vois pas grand chose avec tout ce sable dans les airs, il faut que je trouve un moyen de me protéger.',
      paths: [
        {
          name: 'Portes de Suna',
          to: 3
        },
        {
          name: 'Place du village',
          to: 3.2
        }
      ]
    },
    {
      id: 3.2,
      name: 'Place du village',
      img: imagess.suna3,
      element: images.Parchemin,
      caption:
        'Un parchemin de chance ! Parfait pour les combats. J\'ai ce qu\'il me faut. Retournons à Konoha',
      paths: [
        {
          name: 'Rues de Suna',
          to: 3.1
        },
        {
          name: 'Retourner à Konoha',
          to: 3.3
        }
      ]
    },
    {
      id: 3.3,
      name: 'Attaque surprise de Sasori !',
      img: images.suna,
      enemy: images.sasori,
      class: 'sasori',
      caption: 'Maudit Sasori, il m\'a prit par surprise',
      music: musique.badSituation,
      paths: [
        {
          name: 'Continuer',
          to: 3.4
        }
      ]
    },
    {
      id: 3.4,
      name: 'Combat contre Sasori',
      img: images.suna,
      music: musique.narutofight,
      enemy: images.sasori,
      class: 'sasori',
      button: 'buttonFight',
      fightButton: 'Tirer un nombre',
      caption:
        'Il va falloir que je le combatte, heuresement le parchemin que j\'ai récupéré va m\'aider',
      paths: []
    },
    {
      id: 3.5,
      name: 'Sasori vaincu',
      img: images.suna,
      caption:
        'J\'ai réussi à le vaincre ! Je vais pouvoir retourner à Konoha pour un débrief',
      paths: [
        {
          name: 'Retour au village de Konoha',
          to: 4
        }
      ]
    },
    {
      id: 4,
      name: 'Village de Konoha',
      img: images.konoha,
      music: musique.konoha,
      caption:
        'Me revoilà à konaha! toutes les informations que j\'ai recoltés me mène vers ces deux villages',
      paths: [
        {
          name: 'Retour au village de Suna',
          to: 3
        },
        {
          name: 'Retour au Village de Kiri',
          to: 2
        },
        {
          name: 'Vers village de Ame',
          to: 5
        },
        {
          name: 'Vers village de Kumo',
          to: 6
        }
      ]
    },
    {
      id: 5,
      name: 'Portes de Ame',
      music: musique.enjaille,
      img: images.porteAme,
      caption: 'Nous voilà au portes du village caché de la pluie',
      paths: [
        {
          name: 'Retour à Konoha',
          to: 4
        },
        {
          name: 'Rentrez dans le village Ame',
          to: 5.1
        }
      ]
    },
    {
      id: 5.1,
      name: 'Village de Ame',
      img: images.villageAme,
      caption: 'L\'hostilité de ce village me laisse perplexe  ',
      paths: [
        {
          name: 'Portes de Ame',
          to: 5
        },
        {
          name: 'Exploration des sous sols',
          to: 5.2
        }
      ]
    },
    {
      id: 5.2,
      name: 'Sous sols de Ame',
      img: imagess.arrivePain,
      caption: 'Je sens la présence de quelqu\'un',
      paths: [
        {
          name: 'Village de Ame',
          to: 5.1
        },
        {
          name: 'Aller vers cette personne ',
          to: 5.3
        }
      ]
    },
    {
      id: 5.3,
      music: musique.narutofight,
      name: 'Pain, le chef du village',
      enemy: images.pain,
      img: imagess.arrivePain,
      class: 'pain',
      caption:
        'Encore un combat ! Heuresement que j\'ai récupéré le parchemin à Suna il augmentera mes chances ',
      fightButton: 'Tirer un nombre',
      button: 'buttonFight',
      paths: []
    },
    {
      id: 5.4,
      name: 'Victoire contre Pain',
      img: images.villageAme,
      caption:
        'J\'ai enfin tout ce qu\'il me faut, je sens que la fin est proche',
      paths: [
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        }
      ]
    },
    {
      id: 6,
      music: musique.enjaille,
      name: 'Portes de Kumo',
      caption: 'Nous voilà au Village de Kumo, connu pour sa tranquillité',
      img: images.villageKumo,
      paths: [
        {
          name: 'Retour à Konoha ',
          to: 4
        },
        {
          name: 'Rentrer dans Kumo',
          to: 6.1
        }
      ]
    },
    {
      id: 6.1,
      name: 'Kumo',
      img: imagess.dansKumo,
      caption: 'Il n\'y a pas un chat, je trouve ça suspect',
      paths: [
        {
          name: 'Retour aux portes de Kumo',
          to: 6
        },
        {
          name: 'Continuer l\'exploration',
          to: 6.2
        }
      ]
    },
    {
      id: 6.2,
      name: 'Place du Village de Kumo',
      caption: 'Je devrais pouvoir traverser le village sans encombres ',
      img: imagess.dansKumo,
      paths: [
        {
          name: 'Retourner en arrière',
          to: 6.1
        },
        {
          name: 'Restaurant de Ramen',
          to: 6.3
        }
      ]
    },
    {
      id: 6.3,
      name: 'Restaurant',
      element: images.ramen,
      caption: 'Je vais m\'arrêter ici pour manger un bon bol de ramen !',
      img: imagess.restaurant,
      caption: 'Enfin un peu de repos, je vais pouvoir manger',
      paths: [
        {
          name: 'Place du villafe',
          to: 6.2
        },
        {
          name: 'Continuer l\'exploration',
          to: 6.4
        }
      ]
    },
    {
      id: 6.4,
      name: 'Kumo 4',
      caption:
        'Apparement je n\'ai pas eu de problème, je sens que je m\'approche de Sarutobi!',
      paths: [
        {
          name: 'Entrée de la forêt de la mort',
          to: 7
        }
      ]
    },
    {
      id: 7,
      music: musique.sarutobi,
      name: 'Entrée de la forêt de la mort',
      caption:
        'Nous voilà dans la fôret de la mort.. Je me souviens de mon examen de chunin.',
      img: imagess.foret1,
      paths: [
        {
          name: 'Forêt de la mort',
          to: 7.1
        }
      ]
    },
    {
      id: 7.1,
      name: 'Fôret de la mort',
      img: images.foret2,
      caption:
        'Nous voilà dans la fôret de la mort.. Je me souviens de mon examen de chunin.',
      paths: [
        {
          name: 'S\'enfoncer dans la fôret',
          to: 7.2
        }
      ]
    },
    {
      id: 7.2,
      name: 'Bas fond de la Fôret',
      img: images.foret2,
      paths: [
        {
          name: 'Continuer',
          to: 7.3
        }
      ]
    },
    {
      id: 7.3,
      name: 'Combat contre Orochimaru',
      img: images.foret2,
      enemy: images.orochimaru,
      class: 'orochimaru',
      button: 'buttonFight',
      fightButton: 'Tirer un nombre',
      paths: [
        {
          name: 'Continuer',
          to: 7.4
        }
      ]
    },
    {
      id: 7.4,
      name: 'Sarutobi Retrouvé',
      enemy: images.sarutobi,
      class: 'sarutobi',
      img: images.foret2,
      paths: [
        {
          name: 'Continuer',
          to: 8.1
        }
      ]
    },
    {
      id: 8,
      name: 'Kiri Brume',
      caption:
        'Nous trouverons peut-être une technique secrète pendant notre voyage, afin de faire disparaître la brume.',
      blockingElement: images.fog,
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
