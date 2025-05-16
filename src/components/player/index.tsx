interface PlayerVideoProps {
  path: string
}

export function PlayerVideo({path}: PlayerVideoProps) {
    const url = path
    return  <iframe src={url} allowFullScreen />
}