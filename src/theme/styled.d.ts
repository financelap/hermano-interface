import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // text
  BUYTEXT: Color
  EnterAmountconectwallet: Color
  BorderColor: Color
  KWIKBACKGROUND: Color
  RDial: Color
  Rdial1: Color
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  textConeectToWaletOnNavbar: Color

  // backgrounds / greys
  bg1: Color
  settingCardbg: Color
  bg2: string
  bg3: Color
  bg4: Color
  bg5: Color
  bgSWAP6: Color
  cardsBoxShadowTopLeftcorner: Color
  cardsBoxShadowTopleftCorner1: Color
  cardsBoxShadowTopRightcorner: Color
  cardsBoxShadowTopRightCorner1: Color
  settingMenuiconStrokeColor: Color
  voteCardColor: Color

  modalBG: Color
  advancedBG: Color
  pngLOGOCOLOR: string

  //blues
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color
  primary5: Color
  primary6: Color
  primary7: Color
  primary8: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color
  secondary3: Color

  // other
  red1: Color
  red2: Color
  green1: Color
  yellow1: Color
  yellow2: Color
  blue1: Color
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}

// import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

// export type Color = string
// export interface Colors {
//   // base
//   white: Color
//   black: Color

//   // text
//   text1: Color
//   text2: Color
//   text3: Color
//   text4: Color
//   text5: Color

//   // backgrounds / greys
//   bg1: Color
//   bg2: Color
//   bg3: Color
//   bg4: Color
//   bg5: Color

//   modalBG: Color
//   advancedBG: Color

//   //blues
//   primary1: Color
//   primary2: Color
//   primary3: Color
//   primary4: Color
//   primary5: Color

//   primaryText1: Color

//   // pinks
//   secondary1: Color
//   secondary2: Color
//   secondary3: Color

//   // other
//   red1: Color
//   red2: Color
//   green1: Color
//   yellow1: Color
//   yellow2: Color
//   blue1: Color
// }

// export interface Grids {
//   sm: number
//   md: number
//   lg: number
// }

// declare module 'styled-components' {
//   export interface DefaultTheme extends Colors {
//     grids: Grids

//     // shadows
//     shadow1: string

//     // media queries
//     mediaWidth: {
//       upToExtraSmall: ThemedCssFunction<DefaultTheme>
//       upToSmall: ThemedCssFunction<DefaultTheme>
//       upToMedium: ThemedCssFunction<DefaultTheme>
//       upToLarge: ThemedCssFunction<DefaultTheme>
//     }

//     // css snippets
//     flexColumnNoWrap: FlattenSimpleInterpolation
//     flexRowNoWrap: FlattenSimpleInterpolation
//   }
// }
