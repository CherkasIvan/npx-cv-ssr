/**
 * Promo carousel slide
 */
export interface ICarouselSlideConfiguration {
    [key: string]: unknown;

    /**
     * Path to image
     */
    src: string;

    /**
     * Slide title
     */
    title: string;

    /**
     * Slide description
     */
    description?: string;

    /**
     * Slide route
     */
    route?: string;
}
