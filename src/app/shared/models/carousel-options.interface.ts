import { ICarouselSlideConfiguration } from "./carousel-slide-configuration.interface";

/**
 * Promo carousel options
 */
export interface ICarouselOptions {
    [key: string]: unknown;
  
    /**
     * Promo carousel slides
     */
    slides: ICarouselSlideConfiguration[];
  
    /**
     * Is active slider
     */
    active: number;
  
    /**
     * Is hide slider
     */
    hide: number | null;
  
    /**
     * Change interval
     */
    interval: number;
  
    /**
     * Show indicators
     */
    indicators: boolean;
  
    /**
     * Scroll anchor
     */
    scrollAnchor?: string;
  }