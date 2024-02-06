import CustomSlider from './slider/slider';
import Seccion2 from './seccion2/seccion2';
import Seccion3 from './seccion3/seccion3';
import Seccion4 from './seccion4/seccion4';


function Home() {
  return (
    // Contiene todo
    <>
       <CustomSlider />
       <Seccion2 />
       <Seccion3 />
       <Seccion4 />
    </>
  );
}

export default Home;