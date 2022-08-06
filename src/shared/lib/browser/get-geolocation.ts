import {isDefine} from '@/shared/lib/predicate/is-define'

interface GeolocationCoordinates {
  readonly accuracy: number
  readonly altitude: number | null
  readonly altitudeAccuracy: number | null
  readonly heading: number | null
  readonly latitude: number
  readonly longitude: number
  readonly speed: number | null
}

interface GeolocationPosition {
  readonly coords: GeolocationCoordinates
  readonly timestamp: number
}

export const getGeolocation = async (): Promise<GeolocationPosition> => new Promise<GeolocationPosition>((resolve, reject) => {
  if (isDefine(navigator.geolocation)) {
    reject(new Error('Geolocation is not supported'))
  }

  navigator.geolocation.getCurrentPosition(resolve, reject)
})
