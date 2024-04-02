// import CustomSlider from './slider/slider';
import Seccion2 from './seccion2/seccion2';
import Seccion4 from './seccion4/seccion4';
import Seccionx from './seccionx/seccionx';
import SliderHome from '../components/slider/sliderhome';


function Home() {
  return (
    // Contiene todo
    <>
       {/* <CustomSlider /> */}
       <SliderHome />
       <Seccion2 />
       <Seccionx />
       <Seccion4 />
    </>
  );
}

export default Home;