import React from 'react'
import First from "../images/college_02.jpg"

const Home = (props) => {
    return (
        <>
            <div className='cards'>

                <div className='card'>
                <h1 className='promted_div'>Promoted</h1>
                    <img className='card_img' src={First} alt="college" />
                    <div className='first_img_div'>
                        <h6 className='away1_div'> best colleges in 2018</h6>
                        <h6 className='away_div'> 2kms away</h6>
                        <h6 className='ranking'> 7 in 260 colleges in north campus</h6>
                    </div>
                    <div className='card_info_left'>
                        <h1 className='card_title'> {props.cname} </h1>
                        <h3 className='o_fees'> ₹ 6,000</h3>
                    </div>
                    <div className='sec_part_div'>
                        <h2 className='clg_location'>Near Vishwavidyalya Metro Station | <span className='light'>  2 Kms away from bus stand</span></h2>
                        <h3 className='dis_div'>  20%</h3>
                    </div>
                    <div className='third_part_div'>
                        <h3 className='nearby'> 2.5kms <span className='light'>  from GTB Nagar,</span>  7 Kms  <span className='light'>from Rajiv Chowk </span></h3>
                        <h3 className='actual_fees'> ₹ 5,200</h3>

                    </div>
                    <h6 className='per_sem'>  Per Semester (3months)</h6>
                    <div className='forth_part_div'>
                        <h4 className='flat_offer'> Flat Rs <span className='rs_div'> 2,000</span> off + upto Rs<span className='rs_div'>500</span> wallet! to avail... <span className='span_div'>  LOGIN</span> </h4>
                        <h5 className='free_wifi'>Fee cancellation, Free Wifi </h5>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Home