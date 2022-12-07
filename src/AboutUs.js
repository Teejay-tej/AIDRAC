import React from 'react'
import './AboutUs.css'
import aadhaarpic from './image/aadhaarfyp.png'
import { useState } from 'react'
import arrow from './image/arrow-21-16.png'
import Footer from './findex';


const AboutUs = () => {
    var [text1, setText1] = useState("Classify");
    var [text2, setText2] = useState("Extract data");
    var [text3, setText3] = useState("Detect Blur & Glare");
    var [text4, setText4] = useState("Storage");
    var [text5, setText5] = useState("Efficiency");

    //  var[hover,setHover]=useState(0);
    /* const hoveron=()=>{
       setText("Implemented an automated classification system for Aadhaar, PAN card and Driving License")
   };
   const hoveroff=()=>{
      setText("Classify")
       
   };*/

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (

        <div className='aboutus'>
            <div className='card1'>
                <div className='title'>
                    <p>About Us</p>
                </div>
                <div className='card1'>
                    <p id="text">In this technological era, official documents like Government approved IDs, Certificates, and other documents are paper-based or image based. The problem arises when an organization has to go through each of these documents manually and extract, enter or search for information. Automated Identity Document Recognition and Classification (AIDRAC) is one of the techniques to tackle this problem by decreasing manual effort. This kind of model automatically classifies government-issued identity documents into predefined categories such as AADHAR card, PAN card, and Driving License. It also recognizes and extracts details from the documents uploaded, providing the users the option to autofill their details upon scanning. This can be achieved through the application of Image Processing algorithms using Machine Learning.</p>
                </div>
            </div>

            <div className='card2'>
                <div className='titledark'>
                    <p>Our Goals</p>
                </div>
                <div class="row">
                    <div class="column">
                        < div class="card" onMouseMove={() => setText1("Implemented an automated classification system for Aadhaar, PAN card and Driving License")} onMouseOut={() => setText1("Classify")}><p id="cardtext" className='hoveroff'>{text1}</p></div>
                    </div>
                    <div class="column">
                        <div class="card" onMouseMove={() => setText2(" Automated extraction of user credentials from scanned document thereby reducing manual labour")} onMouseOut={() => setText2("Extract data")}><p id="cardtext">{text2}</p></div>
                    </div>
                    <div class="column">
                        <div class="card" onMouseMove={() => setText3(" Our model detects blur and glare and notifies the users about the same prompting them to re-upload.")} onMouseOut={() => setText3("Detect Blur & Glare")}><p id="cardtext">{text3}</p></div>
                    </div>
                </div>
                <div class="row2">
                    <div class="column2">
                        <div class="card" onMouseMove={() => setText4("An option of copy text fields is provided for enabling autofill of aplication forms")} onMouseOut={() => setText4("Storage")}><p id="cardtext">{text4}</p></div>
                    </div>
                    <div class="column2">
                        <div class="card" onMouseMove={() => setText5(" Develop an Image Processing and Deep Learning based application with improved accuracy and precision.")} onMouseOut={() => setText5("Efficiency")}><p id="cardtext">{text5}</p></div>
                    </div>

                </div>
            </div>



            <div className='card3'>
                <div className='div1'>
                    <p id="aidracwork">How does AIDRAC work ?</p>
                </div>

                <div className='div2'>
                    <img id="pic" src={aadhaarpic} alt="aadhaarfyp" width={"70%"} height={"600px"} />
                </div>
            </div>

            <div className='card4'>
                <div className='titledark'>
                    <p>Methodology</p>
                </div>
                <div className='div1'>
                    <pre id='methodology'>{`
The model accepts the image from the user in different formats. 
Laplacian variance and segmentation forms the initial steps of 
pre-processing of images to determine whether the image is blurry 
and/or glary. The model then identifies and classifies the image 
using a decision tree like algorithm and a similarity score.Upon 
identifying what document has been uploaded/scanned the fields that 
would be present in the document are identified and the corresponding 
data is extracted. The application displays the same in text format.
The data which is extracted from the documents uploaded is now stored 
in a file in JSON/CSV format. An important aspect we need to focus on 
is the security of the data that is stored. Thus proposed method is to 
use dual RSA encryption following it with steganography.
`}
                    </pre>
                </div>

                <div className='div2link'>
                    <div id='link1' onClick={() => openInNewTab('https://i.postimg.cc/g0GGNJGZ/Untitled-Diagram.png')}>
                        <p id="linktext">Check out our system architecture here </p>
                        <br /><br /><br /><br />
                        <img src={arrow} alt="arrow" width={"25px"} />
                    </div>
                    <div id='link2' onClick={() => openInNewTab('https://i.postimg.cc/C1BMf2FP/Whats-App-Image-2022-12-06-at-20-30-38.jpg')}>
                        <p id="linktext">Check out our sequence diagram here </p>
                        <br /><br /><br /><br />
                        <img src={arrow} alt="arrow" width={"25px"} />
                    </div>
                </div>
            </div>




            <div className='card5'>
                <div className='title'>
                    <p>Publication</p>
                </div>
                <div className='ieee'>
                    <p id="ieeefont">Review paper presented at International Conference on Augmented Intelligence and Sustainable Systems ICAISS-2022</p>
                    <p id="ieeefont1">Under the title<br />"Automated Identity Document Recognition and Classification- A Review"</p>
                    <br /><br />
                    <button id="ieeebutton" onClick={() => window.open("https://drive.google.com/file/d/1oZv4cFgqS482BXDluwSpb-5xtvEtXU_1/view?usp=sharing", "_blank")}>Learn more</button>
                </div>

            </div>
            <Footer />
        </div>
    )

}
export default AboutUs;