interface GameBannerProps {
  bannerUrl: string,
  gameName: string,
  ad: number
}

export function GameBanner({ bannerUrl, gameName, ad }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt="" />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{gameName}</strong>
        <span className='text-zinc-300 text-sm block'>{ad} anúncio(s)</span>
      </div>
    </a>
  )
}