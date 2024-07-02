import React, { useState } from 'react'
import './createService.css'

function CreateService() {
    const [image, setImage] = useState({})
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const handleImageSelect = (event) => {
        const selectedFile = event.target.files[0]
        if(selectedFile){
            setImage(selectedFile)
        }
    }
    return (
        <>
            <div class="form-container">
                <form>
                    <div class="upload-box">
                        <label for="file-upload" class="custom-file-upload">Click to upload </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept=".jpg, .jpeg, png"
                            onChange={(event)=> {handleImageSelect(event)}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" id="price" name="price" />
                    </div>
                    <div class="form-group">
                        <label for="rating">Rating</label>
                        <input type="text" id="rating" name="rating" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateService