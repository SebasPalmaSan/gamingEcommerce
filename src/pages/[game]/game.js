import { BasicLayout } from '@/layouts'
import { ENV } from '@/utils';
import { Game } from '@/components/Game';
import { Separator, Seo } from '@/components/Shared';

export default function GameDetail(props) {
    const { game } = props;
    const wallpaper = game.attributes.wallpaper;

  return (
    <>
    <Seo title={game.attributes.title}/>

    <BasicLayout>
        <Game.HeaderWallpaper image={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`} />
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={30} />

        <Game.Media 
          video={game.attributes.video} 
          screenshots={game.attributes.screenshots.data}
        />

        <Separator height={50} />
    </BasicLayout>
    </>
  )
}
