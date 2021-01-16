import { atom } from 'recoil'

export const userStreamState = atom<MediaStream | null>({
    key: 'userMediaState',
    default: null,
})
export const displayStreamState = atom<MediaStream | null>({
    key: 'displayMediaState',
    default: null,
})

export const audioDevicesState = atom<MediaDeviceInfo[]>({
    key: 'audioDevicesState',
    default: [],
})

export const currentAudioDeviceState = atom<MediaDeviceInfo | null>({
    key: 'currentAudioDevice',
    default: null,
})

export const videoDevicesState = atom<MediaDeviceInfo[]>({
    key: 'videoDevicesState',
    default: [],
})

export const currentVideoDeviceState = atom<MediaDeviceInfo | null>({
    key: 'currentVideoDevice',
    default: null,
})