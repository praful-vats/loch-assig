// import React from "react";

// import { Button, Img, Input, Line, List, Text } from "components";

// const LandingWhalesPage = () => {
//   return (
//     <>
//       <div className="bg-gray-900 flex font-inter mx-auto relative w-full">
//         <div className="bg-gradient flex flex-col items-center justify-start mt-auto p-5 md:px-5 w-[66%]">
//           <div className="flex flex-col items-start justify-start mb-[135px] w-[100%] mt-5 ml-10">
//             <div className="flex md:flex-row gap-[11px] items-start justify-start">
//               <div className="flex flex-col gap-4 items-start justify-start mt-1 mr-14 w-[44%] md:w-full">
//                 <Img className="h-8 w-8" src="images/img_bell.svg" alt="bell" />
//                 <Text
//                   className="leading-[120.00%] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-shadow-ts w-[110%] "
//                   size="txtInterMedium31"
//                 >
//                   Get notified when a highly correlated whale makes a move
//                 </Text>
//                 <Text
//                   className="leading-[120.00%] text-base text-gray-100_99 text-[16px] w-[110%]"
//                   size="txtInterMedium16"
//                 >
//                   Find out when a certain whale moves more than any preset
//                   amount on-chain or when a dormant whale you care about becomes
//                   active.
//                 </Text>
//               </div>
//               <Img
//                 className="h-[190px] w-[50%] "
//                 src="images/img_maskgroup.png"
//                 alt="maskgroup"
//               />
//             </div>
//             <div className="flex flex-col items-center justify-start mt-[61px] w-[95%] w-full">
//               <div className="flex md:flex-row flex-row gap-[38px] items-start justify-between w-full">
//                 <Img
//                   className="h-[306px] h-[50%] w-[50%] rounded-[12px]"
//                   src="images/img_cohorts1.png"
//                   alt="cohortsOne"
//                 />
//                 <div className="flex flex-col gap-4 items-end justify-start md:mt-0 mt-[17px]">
//                   <Img className="h-8 w-8" src="images/img_eye.svg" alt="eye" />
//                   <div className="flex flex-col gap-4 items-center justify-start w-full">
//                     <Text
//                       className="leading-[120.00%] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-right w-full"
//                       size="txtInterMedium31"
//                     >
//                       Watch what the whales are doing
//                     </Text>
//                     <Text
//                       className="leading-[120.00%] text-base text-gray-100_99 text-[16px] text-right w-full"
//                       size="txtInterMedium16"
//                     >
//                       All whales are not equal. Know exactly what the whales
//                       impacting YOUR portfolio are doing.
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Text
//               className="md:ml-[0] ml-[530px] mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100"
//               size="txtInterMedium25"
//             >
//               Testimonials
//             </Text>
//             <Line className="bg-gray-300_7f h-px mt-[19px] w-[95%]" />
//             <div className="flex md:flex-col flex-row md:gap-1 items-end justify-between mt-[39px] w-full">
//               <Img
//                 className="h-[60px] md:mt-0 mt-[77px] w-[50px] mr-10"
//                 src="images/img_vector.svg"
//                 alt="vector"
//               />
//               <List
//                 className="sm:flex-col flex-row grid md:grid-cols-1 grid-cols-2"
//                 orientation="horizontal"
//               >
//                 <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs w-[353px]">
//                   <div className="flex flex-row gap-2  items-center justify-start w-auto">
//                     <Text
//                       className="text-base  text-gray-900  w-auto"
//                       size="txtInterSemiBold16"
//                     >
//                       Jack F
//                     </Text>
//                     <Text
//                       className="text-[13px] text-gray-500  w-auto"
//                       size="txtInterMedium13"
//                     >
//                       Ex Blackrock PM
//                     </Text>
//                   </div>
//                   <div className="flex flex-col items-center justify-center w-auto">
//                     <Text
//                       className="leading-[120.00%] max-w-[313px]  md:max-w-full text-base text-gray-900_01"
//                       size="txtInterMedium16Gray90001"
//                     >
//                       “Love how Loch integrates portfolio analytics and whale
//                       watching into one unified app.”
//                     </Text>
//                   </div>
//                 </div>
//                 <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs w-[353px]">
//                   <div className="flex flex-row gap-2 items-center justify-start w-auto">
//                     <Text
//                       className="text-base text-gray-900  w-auto"
//                       size="txtInterSemiBold16"
//                     >
//                       Yash P
//                     </Text>
//                     <Text
//                       className="text-[13px] text-gray-500  w-auto"
//                       size="txtInterMedium13"
//                     >
//                       Research, 3poch Crypto Hedge Fund
//                     </Text>
//                   </div>
//                   <div className="flex flex-col items-center justify-center w-auto">
//                     <Text
//                       className="leading-[120.00%]  max-w-[313px] md:max-w-full text-base text-gray-900_01"
//                       size="txtInterMedium16Gray90001"
//                     >
//                       <>
//                         “I use Loch everyday now. I don&#39;t think I could
//                         analyze crypto whale trends markets without it. I&#39;m
//                         addicted!”
//                       </>
//                     </Text>
//                   </div>
//                 </div>
//               </List>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white-A700  p-[-137px] md:px-5 shadow-bs1 w-[45%] z-[1]">
//           <div className="flex flex-col gap-6 items-center justify-start mb-[171px] mt-[230px] w-full">
//             <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
//               <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <Text
//                     className="sm:text-[35px] md:text-[37px] text-[39px] text-gray-400"
//                     size="txtInterMedium39"
//                   >
//                     <>
//                       Sign up for <br />
//                       exclusive access.
//                     </>
//                   </Text>
//                 </div>
//               </div>
//               <Input
//                 name="blankOne"
//                 placeholder="Your email address"
//                 className="font-medium p-0 placeholder:text-blue_gray-100 text-base text-left w-full"
//                 wrapClassName="border border-gray-300 border-solid mt-[30px] w-full"
//                 type="email"
//               ></Input>
//               <div className="flex flex-col items-center justify-start mt-6 w-full">
//                 <Button className="border border-gray-900 border-solid cursor-pointer font-semibold h-[59px] text-base text-center w-[340px]">
//                   Get started
//                 </Button>
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-start w-full">
//               <div className="flex flex-col items-center justify-center py-[18px] rounded-lg w-auto">
//                 <Text
//                   className="text-base text-center text-gray-900 w-auto"
//                   size="txtInterSemiBold16"
//                 >
//                   You’ll receive an email with an invite link to join.
//                 </Text>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingWhalesPage;

















import React, { useState, useEffect } from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const LandingWhalesPage = () => {
  const [testimonialDragging, setTestimonialDragging] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [textboxHovered, setTextboxHovered] = useState(false);
  const [textboxClicked, setTextboxClicked] = useState(false);
  const handleTestimonialDragStart = () => {
    setTestimonialDragging(true);
  };

  const handleTestimonialDragEnd = () => {
    setTestimonialDragging(false);
  };

  const rotateNotifications = () => {
    setNotificationIndex((prevIndex) => (prevIndex + 1) % totalNotifications);
  };

  const totalNotifications = 3; 

  useEffect(() => {
    const intervalId = setInterval(rotateNotifications, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleTextboxHover = () => {
    setTextboxHovered(true);
  };

  const handleTextboxClick = () => {
    setTextboxClicked(!textboxClicked);
  };

  return (
    <>
      <div className="bg-gray-900  flex font-inter mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start mt-auto p-5 md:px-5 w-[60%]">
          <div className="flex flex-col  items-start justify-start mb-[40px] w-[100%] mt-5 ml-10">
            <div className="flex md:flex-row gap-[11px]  items-start justify-start w-screen relative">
              <div className="flex flex-col gap-4 items-start justify-start mt-1 mr-14 w-[44%]  md:w-full">
                <Img className="h-8 w-8" src="images/img_bell.svg" alt="bell" />
                <Text
                  className="leading-[120.00%] mr-[160px] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-shadow-ts w-[57%]"
                  size="txtInterMedium31"
                >
                  Get notified when a highly correlated whale makes a move
                </Text>
                <Text
                  className="leading-[120.00%] text-base text-gray-100_99 text-[16px] w-[57%]"
                  size="txtInterMedium16"
                >
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </Text>
              </div>
              <div
                className="flex md:flex-col flex-row items-end justify-between  w-[45%] relative" style={{left: 'calc(-22vw)'}}
              >
              <List
                className="sm:flex-col gap-16 flex-row grid md:grid-cols-1 grid-cols-3"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-3 rounded-[12px] shadow-bs h-[180px] w-[200px]">
                  <div className="flex items-center justify-between w-full">
                    <Img className="h-8 w-8" src="images/bell.png" alt="bell" />
                    <Text className="text-[13px] w-auto" size="txtInterMedium13">
                      Save
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[180px] md:max-w-full text-[13px] text-base text-gray-900_01"
                    >
                      We’ll be sending
                      notifications to you
                      <br></br>here
                    </Text>
                  </div>
                  <span
                    class="font-medium p-1 text-[10px] w-[100%] text-base text-left text-black border border-gray-300 border-solid inline-block rounded-md shadow-md"
                  >
                    hello@gmail.com
                  </span>
                </div>

                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs h-[180px] w-[200px]">
                  <div className="flex items-center justify-between w-full">
                    <Img className="h-8 w-8" src="images/bar-chart-2.png" alt="bell" />
                    <Img className="h-5 w-5 w-auto" src="images/Checkmark.png" alt="bell" />
                  </div>
                  <div className="flex flex-col items-center justify-center mt-2 w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[180px] md:max-w-full mt-3 text-base z-1 text-[12px] text-gray-900_01"
                    >
                      Notify me when any wallets
                      move more than
                    </Text>
                  </div>
                  <div className="relative w-full">
                    <button className="bg-gray-200 text-gray-800 text-[13px] py-1 px-1 rounded inline-flex h-[85%] w-[70%]">
                      $1,000.00
                      <svg
                        className="w-5 h-5 ml-1 fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                    {/* Dropdown Content */}
                    <div className="absolute hidden bg-white border border-gray-200 py-2 mt-2 w-full">
                      <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full">
                        $1,000.00
                      </button>
                    </div>
                  </div>
                </div>

                
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs h-[180px] w-[180px]">
                  <div className="flex items-center justify-between w-full">
                    <Img className="h-8 w-8" src="images/bar-chart-2.png" alt="bell" />
                    <Img className="h-5 w-5 w-auto" src="images/Checkmark.png" alt="bell" />
                  </div>
                  <div className="flex flex-col items-center justify-center mt-2 w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[180px] md:max-w-full mt-3 text-base z-1 text-[12px] text-gray-900_01"
                    >
                      Notify me when any wallets
                      move more than
                    </Text>
                  </div>
                  <div className="relative w-full">
                    <button className="bg-gray-200 text-gray-800 text-[13px] py-1 px-1 rounded inline-flex h-[85%] w-[70%]">
                      $1,000.00
                      <svg
                        className="w-5 h-5 ml-1 fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                    {/* Dropdown Content */}
                    <div className="absolute hidden bg-white border border-gray-200 py-2 mt-2 w-full">
                      <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full">
                        $1,000.00
                      </button>
                    </div>
                  </div>
                </div>

              </List>
            </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[61px] w-[95%] z-1 w-full">
              <div className="flex md:flex-row flex-row gap-[38px] items-start justify-between w-full">
                <Img
                  className="h-[306px] h-[50%] w-[50%] rounded-[12px]"
                  src="images/img_cohorts1.png"
                  alt="cohortsOne"
                />
                <div className="flex flex-col gap-4 items-end justify-start md:mt-0 mt-[17px]">
                  <Img className="h-8 w-8" src="images/img_eye.svg" alt="eye" />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Text
                      className="leading-[120.00%] sm:text-[27px] md:text-[29px] text-[31px] text-gray-100 text-right w-full"
                      size="txtInterMedium31"
                    >
                      Watch what the whales are doing
                    </Text>
                    <Text
                      className="leading-[120.00%] text-base text-gray-100_99 text-[16px] text-right w-full"
                      size="txtInterMedium16"
                    >
                      All whales are not equal. Know exactly what the whales
                      impacting YOUR portfolio are doing.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[530px] mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100"
              size="txtInterMedium25"
            >
              Testimonials
            </Text>
            <Line className="bg-gray-300_7f h-px mt-[19px] w-[95%]" />
            <div
              className={`flex md:flex-col flex-row md:gap-1 items-end justify-between mt-[39px] w-full ${
                testimonialDragging ? "grabbing" : ""
              }`}
              onMouseDown={handleTestimonialDragStart}
              onMouseUp={handleTestimonialDragEnd}
              onMouseLeave={handleTestimonialDragEnd}
            >
              <Img
                className="h-[60px] md:mt-0 mt-[77px] w-[50px] mr-10"
                src="images/img_vector.svg"
                alt="vector"
              />
              <List
                className="sm:flex-col gap-14 flex-row grid md:grid-cols-1 grid-cols-2"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 rounded-[12px] shadow-bs w-[330px]">
                  <div className="flex flex-row gap-2  items-center justify-start w-auto">
                    <Text
                      className="text-base  text-gray-900 w-auto"
                      size="txtInterSemiBold16"
                    >
                      Jack F
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500  w-auto"
                      size="txtInterMedium13"
                    >
                      Ex Blackrock PM
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="leading-[120.00%] max-w-[313px] md:max-w-full text-base text-gray-900_01"
                      size="txtInterMedium16Gray90001"
                    >
                      “Love how Loch integrates portfolio analytics and whale
                      watching into one unified app.”
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-5 ml-3 rounded-[12px] shadow-bs w-[350px]">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-gray-900  w-auto"
                      size="txtInterSemiBold16"
                    >
                      Yash P
                    </Text>
                    <Text
                      className="text-[13px] text-gray-500  w-auto"
                      size="txtInterMedium13"
                    >
                      Research, 3poch Crypto Hedge Fund
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <Text
                      className="leading-[120.00%]  max-w-[313px] md:max-w-full text-base text-gray-900_01"
                      size="txtInterMedium16Gray90001"
                    >
                      <>
                        “I use Loch everyday now. I don&#39;t think I could
                        analyze crypto whale trends markets without it. I&#39;m
                        addicted!”
                      </>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 relative p-[-137px] md:px-5 shadow-bs1 w-[45%] z-[1]">
        <div
          className={`flex flex-col gap-6 items-center justify-start mb-[171px] mt-[250px] z-[2] w-full ${
            textboxHovered ? "responsive-hover" : ""
          } ${textboxClicked ? "responsive-click" : ""}`}
          onMouseEnter={handleTextboxHover}
          onMouseLeave={() => setTextboxHovered(false)}
          onClick={handleTextboxClick}
        >
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="sm:text-[35px] md:text-[37px] text-[39px] text-gray-400"
                    size="txtInterMedium39"
                  >
                    <>
                      Sign up for <br />
                      exclusive access.
                    </>
                  </Text>
                </div>
              </div>
              <Input
                name="blankOne"
                placeholder="Your email address"
                className="font-medium p-0 placeholder:text-blue_gray-100 text-base text-left"
                wrapClassName="border border-gray-300  border-solid mt-[30px] w-[340px]"
                type="email"
              ></Input>
              <div className="flex flex-col items-center justify-start mt-6 w-full">
                <Button className="border border-gray-900 border-solid cursor-pointer font-semibold h-[59px] text-base text-center w-[340px]">
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center py-[18px] rounded-lg w-auto">
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterSemiBold16"
                >
                  You’ll receive an email with an invite link to join.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingWhalesPage;
