import slOne from "../assets/images/sliderOne.png";
import slTwo from "../assets/images/sliderTwo.png";
import slThree from "../assets/images/sliderThree.png";
import slFour from "../assets/images/sliderFour.png";


export const mostListenedTitle = "Los más escuchados";
export const mostListenedText =
  "Disfruta de tu música a un solo click y descube que discos has guardado dentro de  “mis  álbumes”";


  export const data = [
	{
		albumName: 'slime & b',
		date:'May 5, 2020',
		image: slOne,
	},
	{
		albumName: 'Muerte',
		date:'Mar 22, 2012',
		image: slTwo,
	},
	{
		albumName: 'The Slim Shady LP',
		date:'Feb 23, 1999',
		image: slThree,
	},
	{
        albumName: 'Ati',
		date:'Jan 28, 2016',
		image: slFour,
	},
	// {
    //     albumName: 'Sauce Boyz',
	// 	date:'Jan 31, 2020',
	// 	image: slFive,
	// },
    // {
    //     albumName: 'Ati',
	// 	date:'Jan 28, 2016',
	// 	image: slFour,
	// },
	// {
    //     albumName: 'Sauce Boyz',
	// 	date:'Jan 31, 2020',
	// 	image: slOne,
	// },
];

export const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    //centerPadding: "60px",
    slidesToShow: 3,
    speed: 600,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			},
		},

		{
			breakpoint: 1006,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
