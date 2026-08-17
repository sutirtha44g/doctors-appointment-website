import "../styles/MyProfile.css"
import { useState } from "react"

function MyProfile(){
    const[isEdit,setIsEdit]=useState(false)
    const savedData = JSON.parse(localStorage.getItem("currentUser")) || {}
    const[profileData,setProfileData]=useState({
        name:savedData.name || "",
        email:savedData.email || "",
        phone:savedData.phone || "",
        address:savedData.address || "",
        gender:savedData.gender || "",
        dob:savedData.dob || "",
        image:savedData.image || "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
    })

    function handleChange(e){
        setProfileData({
            ...profileData,
            [e.target.name]:e.target.value
        })
    }
    function handleSave(){
        localStorage.setItem("currentUser",JSON.stringify(profileData)
        )
        
        setIsEdit(false)
        console.log("isEdit set to false")
        window.location.reload()
        
    }
    function handleImage(e){
        const file=e.target.files[0]
        if(!file) return

            const reader=new FileReader()
            reader.onloadend=()=>{
                setProfileData({
                ... profileData,
                image:reader.result
            })

            }
            reader.readAsDataURL(file)        
        
    }
        
    return (
        <div className="profile">
            <div className="profile-top">

    <img
        src={profileData.image}
        alt=""
    />

    {
        isEdit ? (
            <>
                <input
                    type="file"
                    onChange={handleImage}
                    className="file-input"
                />

                <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="edit-input"
                />
            </>
        ) : (
            <h1>{profileData.name}</h1>
        )
    }

</div>

            <div className="profile-info">
                <h3>CAPITAL INFORMATION</h3>
                <div className="info-row">
                    <strong>Email id:</strong>
                    {
                    isEdit? (<input type='email' name='email' value={profileData.email} onChange={handleChange} className="edit-input"/>

                    ):(
                        <span>{profileData.email}</span>

                    )
                }
                    
                </div>
                <div className="info-row">
                    <strong>Phone:</strong>
                    {
                    isEdit? (<input type='text' name='phone' value={profileData.phone} onChange={handleChange} className="edit-input"/>

                    ):(
                        <span>{profileData.phone || "0000000000"}</span>

                    )
                }
                    
                </div>
                <div className="info-row">
                    <strong>Address:</strong>
                    {
                    isEdit? (<input type='text' name='address' value={profileData.address} onChange={handleChange} className="edit-input"/>

                    ):(
                        <span>{profileData.address || "Not Added"}</span>

                    )
                }
                    
                </div>
            </div>
            
            <div className="profile-info">
                <h3>BASIC INFORMATION</h3>
                <div className="info-row">
                    <strong>gender:</strong>
                    {
                    isEdit? (<select  name='gender' value={profileData.gender} onChange={handleChange} className="edit-input">
                    <option value="">Select</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    </select>

                    ):(
                        <span>{profileData.gender || "Not Selected"}</span>

                    )
                }
                    
                </div>
                <div className="info-row">
                    <strong>BirthDay:</strong>
                      {
                    isEdit? (<input type='date' name='dob' value={profileData.dob} onChange={handleChange} className="edit-input"/>

                    ):(
                        <span>{profileData.dob || "Not Added"}</span>

                    )
                }
                </div>
            </div>

            <button className="edit-btn" onClick={isEdit?handleSave :()=>setIsEdit(true)}>
                {
                isEdit?"Save Information":"Edit"}
            </button>

            

        </div>
    )
}

export default MyProfile