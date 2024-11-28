import Header from '../../components/Header/why';
import Benefits from '../../components/Benefits/why';
import Compare from '../../components/Compare/index';
import BestForYou from '../../components/BestForYou/index';
import Pricing from '../../components/Pricing/index';
import Anytitle from '../../components/Anytitle/index';
import Testimonials from '../../components/Testimonials/service';


export default function Home() {
  return (
    <main>
      <Header />
      <Benefits />
      <Anytitle />
      <Pricing />
      <BestForYou />
      <Testimonials />
      <Compare />
    </main>
  )
}
