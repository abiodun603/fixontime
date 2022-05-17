import React from 'react'
import HeadFoot from '../../components/HeadFoot'
import { ContactLand } from '../contact/StyledContact'
import { BlogDetailsContainer } from './StyledBlog'
import blogImage from "../../assets/image/blog/1.svg"
import ScrollTextArea from '../../components/scrollTextarea/ScrollTextArea'
import CardButton from '../../components/card-button/CardButton'
import Button from '../../components/button/Button'
const BlogDetails = (props) => {
  return (
    <>
      <HeadFoot {...props}>
        <ContactLand>
          <h1>How to do  home repair</h1>
        </ContactLand>
        {/* Blog Details Container */}
        <BlogDetailsContainer>
          {/* blog image */}
          <div className='blog__image'>
            <img  src={blogImage} alt = "" />
          </div>

          <div className='blog__text'>
            {/* blog full description */}
            <p>
              Some wiring problems are just inconveniences, but others can pose serious fire or electrocution hazards. It’s important to diagnose and resolve a wiring issue as soon as you can.

              Simple wiring faults on electrical appliances can be diagnosed and solved using DIY manuals, which often contain a maintenance and repairs section that gives detailed step-by-step instructions for all home wiring repair and maintenance jobs.

              Remember, if in doubt, call in a qualified electrician. Working with electricity can be hazardous, especially when you’re not sure what you’re doing!

              Electrical fittings are subject to more wear and tear than most household fixtures and fittings. It’s especially important not to ignore these problems since you’re dealing with live circuits that are especially hazardous.

              As always, safety is crucial when working with electrical or wiring faults. When tackling wiring issues remember to:

              Switch off the power at the mains supply and if working on an appliance unplug it
              Use the right tools for the job
              Remove the relevant circuit fuse
              Watch out for any exposed wiring
              Make sure there aren’t any liquids in the area you’re working on
              Never fit a fuse that’s rated too highly for the circuit to protect
              Double check your work (particularly connections) before you turn the electricity back on
            </p>
          </div>

          <div class = "addComment">
            {/* title */}
            <h3>Add Comment</h3>

            <div className='commentDiv'>
              <ScrollTextArea/>
              {/* <CardButton> */}
              <Button>
                  <span>
                      Cancel
                  </span>
              </Button>
              <Button type = "sumbit">
                  Ok 
              </Button>
            {/* </CardButton> */}
            </div>
            
            <div style={{marginTop: 40}}></div>
            
          </div>

        </BlogDetailsContainer>
      </HeadFoot>
    </>
  )
}

export default BlogDetails