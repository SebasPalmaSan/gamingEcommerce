import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const platformId = {
  playstation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4,
}

export default function HomePage() {
  return (
    <>

    <Seo />
    
    <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title='Últimos lanzamientos' />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames 
            title='PlayStation' 
            limit={3} 
            platformId={platformId.playstation}
          />
        </Container>

        <Separator height={100} />

        <BannerAd 
          title ='Registrate y obtené los mejores beneficios' 
          subtitle ='Compará y eligí tu juego favorito' 
          btnTitle = 'Entrar'
          btnLink = '/account'
          image='/images/img01.png'
        />

        <Separator height={70} />

        <Container>
          <Home.LatestGames 
            title='Xbox' 
            limit={3} 
            platformId={platformId.xbox}
          />
        </Container>

        <Separator height={100} />
        
    </BasicLayout>
    </>
  );
}
