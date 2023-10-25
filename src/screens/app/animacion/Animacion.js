import { View } from 'react-native'
import React from 'react'
import { VideoPlayer } from '../../../components/VideoPlayer'

export function Animacion() {

  return (
      <VideoPlayer path="animacion" mode="stretch" videoURL={"https://firebasestorage.googleapis.com/v0/b/mamacare-b3a03.appspot.com/o/animacion%2Fanimacion.mp4?alt=media&token=68ef3755-cedd-4656-a8c8-be3e3de7180f&_gl=1*8g7p71*_ga*OTA1MDgxOTAwLjE2NTEwMjUxMjY.*_ga_CW55HF8NVT*MTY5ODI0NzQ5Mi42NC4xLjE2OTgyNDc1NDIuMTAuMC4w"}/>
  )
}