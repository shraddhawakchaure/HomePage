import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Grid } from '@mui/material';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                  <div>
                     <Grid container>
                         <Grid item xs={6}>
                            <div>
                             <form>
                                 <h6>
                                <input type="text" id="fname" value="Your Email Address"/>
                                <input type="submit" value="Go" sx={{bgcolor:"black"}}/>
                                </h6>
                             </form>
                            </div>
                         </Grid>
                     </Grid>
                  </div>
                  <div>
                      <img src="/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
            </div>
        );
    }
};