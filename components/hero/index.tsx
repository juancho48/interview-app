import Image from 'next/image';

import { Button } from '~/components/ui/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '~/components/ui/slideshow';

import SlideshowBG01 from './slideshow-bg-01.jpg';
import SlideshowBG02 from './slideshow-bg-02.jpg';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative">
          <Image
            alt="an assortment of brandless products against a blank background"
            className="absolute -z-10 object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG01}
          />
          <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">Achieve ultimate performance</h2>
            <p className="max-w-xl">
              With the new Drivers used by the pros, you can achieve the ultimate performance
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="relative">
          <Image
            alt="Some Takomo irons placeholder image"
            className="absolute -z-10 object-cover"
            fill
            
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG02}
          />
          <div className="flex flex-col gap-4  px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">Great Deals</h2>
            <p className="max-w-xl">
              Here are some great deals
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Low Prices</h2>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide>
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
