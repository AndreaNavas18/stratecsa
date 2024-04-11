// import CustomSlider from './slider/slider';
import Seccion2 from './seccion2/seccion2';
import Seccion4 from './seccion4/seccion4';
import Seccionx from './seccionx/seccionx';
import Seccion4Slider from './seccion4slider/seccion4slider';
import SliderHome from '../components/slider/sliderhome';
// import Load from '../components/load/load';


function Home() {
  return (
    // Contiene todo
    <>
       {/* <CustomSlider /> */}
       {/* <Load /> */}
       <SliderHome />
       <Seccion2 />
       <Seccionx />
       <Seccion4Slider />
    </>
  );
}

export default Home;