import ScreenProps from '@models/screen'

export const getScreenProps = (route: string): ScreenProps => {
  switch (route) {
    case 'Introdução':
      return {
        description:
          'Antes de aprender a resolver o cubo, é de suma importância que você aprenda a diferenciar as peças que compõem um cubo mágico comum.',
        cubes: [
          {
            image: require('../assets/images/cubes/Introdução/0.png'),
            title: 'Centros',
            note: 'Os centros fazem parte dos 6 eixos fixos do cubo. Você sempre irá mover as faces do cubo girando um eixo. Se um centro possui a cor branca, significa que todas as peças ao seu redor deverão ser brancas também.'
          },
          {
            image: require('../assets/images/cubes/Introdução/1.png'),
            title: 'Meios',
            note: 'Existem 12 meios no total, e cada um possui 2 cores.'
          },
          {
            image: require('../assets/images/cubes/Introdução/2.png'),
            title: 'Quinas/cantos',
            note: 'São as peças que se encontram nas pontas do cubo. Existem no total 8 quinas, e cada uma possui 3 cores.'
          }
        ]
      }
    default:
      return {
        description: '',
        cubes: [
          {
            image: require('../assets/images/cubes/Introdução/0.png'),
            title: '',
            note: ''
          }
        ]
      }
  }
}
