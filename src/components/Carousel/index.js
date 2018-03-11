import Carousel from './src/Carousel';
import CarouselItem from './src/Carousel-item';

Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
};

CarouselItem.install = function (Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};
export {
  Carousel,
  CarouselItem
}
