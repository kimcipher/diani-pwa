// import React, {useState} from 'react';
// import "./css/rating.css";
// import {useForm, ValidationError} from '@formspree/react';
// import "./css/stars.css";
// import {review} from "../icons"

// function RatingView() {
//     const [state, handleSubmit] = useForm("mwkzodbv");
//     const [yourRate, setYourRate] = useState(0)
//     // const [messageSpree, setMessageSpree] = useState("")
//     console.log(yourRate);
//     if (state.succeeded) {
//       return (
//         <h3 style={{marginTop:"30px", fontWeight:"bold"}}>Did we get it right ?</h3>
//       )
//     }
//   return (
//     <>
//     <div className="rating-main">
//         <h2 style={{marginTop:"5vh", marginBottom:"3vh"}}>Give Feedback</h2>
//         {review}
//         <h4 style={{marginTop:"1vh", marginBottom:"3vh", fontWeight:"bolder"}}>How would you rate<br/> our services ?</h4>
//         {/* <img src={Icon} alt="emoji" className="class"/> */}
        
//         <form onSubmit={handleSubmit}>
//         <div className="star-main">
//               <div className="star-container">
//               <>
//                 <ul class="rate-area">
//                   <input type="radio" id="5-star" name="rating" value="5" onClick={() => (setYourRate(5))} /><label for="5-star" title="Amazing">5 stars</label>
//                   <input type="radio" id="4-star" name="rating" value="4" onClick={() => (setYourRate(4))} /><label for="4-star" title="Good">4 stars</label>
//                   <input type="radio" id="3-star" name="rating" value="3" onClick={() => (setYourRate(3))} /><label for="3-star" title="Average">3 stars</label>
//                   <input type="radio" id="2-star" name="rating" value="2" onClick={() => (setYourRate(2))} /><label for="2-star" title="Not Good">2 stars</label>
//                   <input type="radio" id="1-star" name="rating" value="1" onClick={() => (setYourRate(1))} /><label for="1-star" title="Bad">1 star</label>
//                 </ul>
//               </>
//               </div>
//             </div>
//             <input type="email" placeholder="email" id="email"  name="email"/>
//             <ValidationError 
//               prefix="Email" 
//               field="email"
//               errors={state.errors}
//             />
//             <input type="text" placeholder="number" id="number" name="number"/>
//             <textarea type="text" placeholder="my message here" name="message" id="message"/>
//             <ValidationError 
//               prefix="Message" 
//               field="message"
//               errors={state.errors}
//             />

           

//             <input type="submit" id="submitbtn" disabed={state.submitting}/>
//         </form>
//     </div>
//     </>
//   )
// }

// export default RatingView