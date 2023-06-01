// components
// -------

import {iosVhFix} from './utils/ios-vh-fix';
import {scrollChangeHeader} from './components/scrollChangeHeader';
import {scrollActiveLink} from './components/scrollActiveLink';
import {menu} from './components/menu';
import {sliderServies} from './components/sliderServies';
import {filter} from './components/filter';
import {portfolioFslightBox} from './components/portfolioFslightBox';
import {counter} from './components/counter';
import {sliderPrice} from './components/sliderPrice';
import {sliderReviews} from './components/sliderReviews';
import {sliderTopShots} from './components/sliderTopShots';
import {sliderBottomShots} from './components/sliderBottomShots';
import {sliderTopFslightBox} from './components/sliderTopFslightBox';
import {sliderBottomFslightBox} from './components/sliderBottomFslightBox';
import {formValidate} from './components/formValidate';
import {animate} from './components/animate';
import {toTop} from './components/toTop';

// Utils
// ---------------------------------
iosVhFix();

// Modules
// ---------------------------------
scrollChangeHeader();
scrollActiveLink();
menu();
sliderServies();
filter();
portfolioFslightBox();
counter();
sliderPrice();
sliderReviews();
sliderTopShots();
sliderBottomShots();
sliderTopFslightBox();
sliderBottomFslightBox();
formValidate();
animate();
toTop();