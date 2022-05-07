import React from 'react'

export const Footer = () => {
    return (
      <div style={{backgroundColor:'black'}}>
            <hr />
      <div style={{paddingTop:'20px', height:'150px', display:'flex', flexDirection:'row', justifyContent:'space-around', color:'white'}} >
            <h3>Contact us</h3>
          <div>
              Send us an Message through:
              <p>Email: kiokovincent12@gmail.com</p>
              <p>Phone: +254703618918</p>
          </div>
          <div>
             Or write us a direct message:
                    <p>
                        <div>
                        <input placeholder='Enter your Email Address' />
                        </div>
                        <div>
                            <textarea placeholder='Type Your message' />
                        </div>
                        <div>
                            <button>Submit</button>   
                            </div>    
                    </p>
          </div>
          <div>
              Copyright &copy 2022
          </div>
            </div>
            </div>
  )
}
