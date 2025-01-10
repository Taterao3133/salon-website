import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth, db } from '../../firebase'; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FaGreaterThan } from "react-icons/fa";

import { signOut } from "firebase/auth";

const AdminPanel = () => {
  const [UserReviews, setUserReviews] = useState([]);
  const [newUserReview, setNewUserReviews] = useState({
    UserName: "",
    UserReview: "",
    imageUrl: "",
  });
  const [contactData, setContactData] = useState({ email: "", phone: "" });
  const [socialLinks, setSocialLinks]=useState({Linkedin: "",
    instagram: "",
    twitter: "",
    whatsUpNumber:""
  })
  const [file, setFile] = useState(null);

 

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        
        const contactDoc = await getDoc(doc(db, "siteDetails", "contact"));
        const socialDoc = await getDoc(doc(db, "siteDetails", "socialLinks"));

        const reviewsDoc = await getDoc(doc(db, "siteDetails", "Reviews"));
        if (reviewsDoc.exists()) {
          setUserReviews(reviewsDoc.data().items || []); // Default to an empty array
        } else {
          console.log("No reviews data found");
          setUserReviews([]); // Fallback to empty array
        }
      // } catch (error) {
      //   console.error("Error fetching reviews:", error);
      //   setUserReviews([]); // Fallback to empty array on error
      // }

        if (contactDoc.exists()) {
          setContactData(contactDoc.data());
        } else {
          console.log("Contact data not found");
        }
        if (socialDoc.exists()) {
          setSocialLinks(socialDoc.data());
        } else {
          console.log("No social links found");
        }
      
      
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  },[]);
  
  const handleSave = async () => {
    try {
      await setDoc(doc(db, "siteDetails", "socialLinks"), socialLinks);
      alert("Social links updated successfully!");
    } catch (error) {
      console.error("Error saving social links:", error);
    }
  };
  


  const handleSavePortfolioItem = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "salonReviews"); 

        const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/dteobghdz/image/upload', formData);
         
        const imageUrl = cloudinaryResponse.data.secure_url;

        const updatedUserReviews = [
          ...UserReviews,
          { ...newUserReview, imageUrl },
        ];


        await setDoc(doc(db, "siteDetails", "Reviews"), {
          items: updatedUserReviews,
        });

        setUserReviews(updatedUserReviews); 
        setNewUserReviews({ UserName: "", UserReview: "", imageUrl: "" });
        setFile(null); 
        alert("User Reviews  item added successfully!");
      } else {
        alert("Please upload an image first");
      }
    } catch (error) {
      console.error("Error saving Reviews item:", error);
    }
  };

  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const imageUrl = URL.createObjectURL(uploadedFile); 
    setNewUserReviews({ ...newUserReview, imageUrl });
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.href = "/home"; 
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };
 

  return (
    <div className="lg:mx-20 max-lg:mx-8 mt-5 max-sm:mt-3" >
      <div className="btn flex justify-end items-end">
        <button onClick={handleLogout} className="con md:fixed md:top-14 max-sm: rounded-lg hover:bg-red-700 transition right-8 mt-8 p-2 border-2 bg-red-600 text-white">Log Out</button>
      </div>
      
      <h2 className="text-center text-4xl max-sm:text-2xl font-roboto-serif font-medium ">Admin Panel</h2>
      <div className="  mt-4 ">
        <div className="space-y-8 border-2 border-[#ce6ad0] rounded-lg mt-2 py-5 mx-auto grid justify-center items-center grid-flow-row max-sm:w-[90%] w-[60%] text-center">
          <h3 className="text-center text-2xl  font-roboto font-medium max-sm:text-xl ">User Reviews Add</h3>
        
          <input
              type="text"
              className="border-2 p-3 w-full border-[#c573c7] rounded-lg"
              placeholder="Enter Reviewer Name"
              value={newUserReview.UserName}
              onChange={(e) =>
                setNewUserReviews({ ...newUserReview, UserName: e.target.value })
              }
            />
            <textarea
              placeholder="Enter User Review"
              className="border-2 p-3 w-full border-[#c573c7] rounded-lg mt-2"
              value={newUserReview.UserReview}
              onChange={(e) =>
                setNewUserReviews({ ...newUserReview, UserReview: e.target.value })
              }
            />
            <p>Upload User Icon</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-5 mx-auto" />
        {newUserReview.imageUrl && (
          <img
            src={newUserReview.imageUrl}
            className="w-40 h-40 mx-auto mt-2 cursor-pointer"
            alt="Uploaded" 
          />
        )}
        <div onClick={handleSavePortfolioItem} className="bt flex md:mx-auto  hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[60%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000]  rounded-[20px]">
          <button className='text-lg max-sm:text-base hover:text-[#fff]  text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex'>Save Changes <FaGreaterThan  className=" mt-[4px] ml-2  hover:text-[#fff] text-[#000000]"/>  </button>
        </div>
      
        </div>

        <h4 className="text-4xl text-center max-sm:text-2xl font-roboto-serif font-medium mt-8">Current User Reviews</h4>
        
       
        <div className="gf grid grid-cols-3 max-sm:grid-cols-2 gap-4 mt-5"> 
        {Array.isArray(UserReviews) &&
              UserReviews.map((review, index) => (
            <div key={index} className="border p-4 border-[#bb6dbc] rounded-lg"> 
              <h5 className="max-sm:text-lg font-playfair text-2xl ">{review.UserName}</h5>
              <p className="max-sm:text-xs pb-2 mt-2 text-lg font-manrope ">{review.UserReview}</p>
              {review.imageUrl && (
                <img
                  src={review.imageUrl}
                  className="w-20 h-20"
                  alt={`userReviews ${index}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
 {/* contact details */}
      <div className="space-y-8 mt-5 border-2 border-[#ce6ad0] rounded-lg py-5 mx-auto grid justify-center items-center grid-flow-row max-sm:w-[90%] w-[60%] text-center">
        <h3 className="text-center  text-4xl max-sm:text-2xl font-roboto-serif font-medium">Contact Details add </h3>
        <div className="inp"></div>
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-[#c26bc4] rounded-lg p-3 w-full"
          value={contactData.email}
          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border-2 border-[#c26bc4] rounded-lg p-3 w-full"
          value={contactData.phone}
          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
        />
        <div className="bt flex md:mx-auto hover:bg-[#ce6ad0]  hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[80%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#ae699f] rounded-[20px]">
          <button
            onClick={async () => {
              try {
                if (!contactData.email || !contactData.phone) {
                  alert("Both email and phone fields are required.");
                  return;
                }
                await setDoc(doc(db, "siteDetails", "contact"), contactData);
                alert("Contact details updated successfully!");
              } catch (error) {
                console.error("Error updating contact details:", error);
                alert("Failed to update contact details. Please try again.");
              }
            }}
            className="text-lg max-sm:text-base hover:text-[#fff] text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex"
          >
            Save changes 
            <FaGreaterThan className="mt-[4px] ml-2 hover:text-[#fff] text-[#000000]" />
          </button>
        </div>
      </div>
      {/* social links */}
      <div className=" border-[#ce6ad0] mx-auto rounded-lg max-sm:w-[90%] border-2 mt-8 pb-5 mb-8">
        <h2 className="text-center text-4xl max-sm:text-2xl font-roboto-serif font-medium mt-4">Social Media Settings</h2>
        <div className="space-y-6 text-center mt-6">
        <p className="max-sm:text-xl md:text-xl font-roboto-serif font-medium">Facebook Link Here</p>
          <input
            type="url"
            placeholder="Facebook URL"
            value={socialLinks.Linkedin}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, Linkedin: e.target.value })
            }
            className="border-2 p-3 w-[80%] border-[#c573c7] rounded-lg"
          />
          <p className="max-sm:text-lg md:text-xl font-roboto-serif font-medium">Instagram Link Here</p>
          <input
            type="url"
            placeholder="Instagram URL"
            value={socialLinks.instagram}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, instagram: e.target.value })
            }
            className="border-2 p-3 w-[80%] border-[#c573c7] rounded-lg"
          />
         
          <p className="max-sm:text-lg md:text-xl font-roboto-serif font-medium">Whatsapp Number or Contact Number</p>
          <input
            type="number"
            placeholder="WhatsUpNumber (it will add where contact us or getStarted buttons )"
            value={socialLinks.whatsUpNumber}
            onChange={(e) =>
              setSocialLinks({ ...socialLinks, whatsUpNumber: e.target.value })
            }
            className="border-2 p-3 w-[80%] border-[#c573c7] rounded-lg"
          />
          <div onClick={handleSave} className="bt flex md:mx-auto  hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[60%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000]  rounded-[20px]">
          <button className='text-lg max-sm:text-base hover:text-[#fff]  text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex'>Save Changes <FaGreaterThan  className=" mt-[4px] ml-2  hover:text-[#fff] text-[#000000]"/>  </button>
        </div>
        </div>
      </div>
  
    </div>
  );
};

export default AdminPanel;
