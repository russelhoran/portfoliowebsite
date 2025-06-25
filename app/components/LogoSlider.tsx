"use client"
import Slider from 'react-infinite-logo-slider'
const LogoSlider = () => {
    return (
        <>
    <div className="mt-24 px-4 md:px-12 lg:px-32 text-white" id="LogoSlider">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 border-b border-gray-700 pb-2">
       My Programming Stack
      </h2>
    
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/slider/jslogo.jpg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/postgreslogo.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/reactlogo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/phplogo2.png" alt="any4" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/nodejslogo.png" alt="any5" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/nextjslogo.png" alt="any6" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/tailwindlogo.png" alt="any7" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/mysqllogo2.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/mongodblogo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/htmllogo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/gitlogo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/expresslogo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/djangologo.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/csslogo2.png" alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
          </div>
        </>
    )
}              
                     
export default LogoSlider