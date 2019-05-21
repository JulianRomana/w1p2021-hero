const images = require('../pictures/*.png');
console.log(images);
export default {
  phases: [
    {
      id: 1,
      name: 'Konoha',
      img: images.portedekonoha,
      paths: [
        {
          name: 'Kiri',
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
      name: 'Kiri',
      img: images.kiri,
      paths: [
        {
          name: 'Konoha',
          to: 1
        },
        {
          name: 'Kiri 1',
          to: 2.1
        },
        {
          name: 'Kiri brume',
          to: 8
        }
      ]
    },
    {
      id: 2.1,
      name: 'Kiri 1',
      img: images.kiri,
      paths: [
        {
          name: 'Kiri',
          to: 2
        },
        {
          name: 'Kiri 2',
          to: 2.2
        }
      ]
    },
    {
      id: 2.2,
      name: 'Kiri 2',
      img: images.kiri,
      element: images.parchemin,
      paths: [
        {
          name: 'Kiri 1',
          to: 2.1
        },
        {
          name: 'Kiri 3',
          to: 2.3
        }
      ]
    },
    {
      id: 2.3,
      name: 'Kiri 3',
      img: images.kiri,
      paths: [
        {
          name: 'Kiri 2',
          to: 2.2
        },
        {
          name: 'Kiri 4',
          to: 2.4
        }
      ]
    },
    {
      id: 2.4,
      name: 'Kiri 4',
      img: images.kiri,
      paths: [
        {
          name: 'Kiri 3',
          to: 2.2
        },
        {
          name: 'Konoha ( village )',
          to: 4
        }
      ]
    },
    {
      id: 3,
      name: 'Suna',
      img: images.suna,
      paths: [
        {
          name: 'Konoha',
          to: 1
        },
        {
          name: 'Suna',
          to: 3.1
        }
      ]
    },
    {
      id: 3.1,
      name: 'Suna 1',
      img: images.suna,
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
      img: images.suna,
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
      paths: [
        {
          name: 'Suna 3',
          to: 3.3
        },
        {
          name: 'Konoha ( village )',
          to: 4
        }
      ]
    },
    {
      id: 4,
      name: 'Konoha ( village )',
      paths: [
        {
          name: 'Suna 4',
          to: 3.4
        },
        {
          name: 'Kiri 4',
          to: 2.4
        },
        {
          name: 'Ame',
          to: 5
        },
        {
          name: 'Kumo',
          to: 6
        }
      ]
    },
    {
      id: 5,
      name: 'Ame',
      paths: [
        {
          name: 'Konoha ( village )',
          to: 4
        },
        {
          name: 'Ame 1',
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
      paths: [
        {
          name: 'Kiri',
          to: 2
        },
        {
          name: 'Konoha ( village )',
          to: 4
        }
      ]
    }
  ]
};
