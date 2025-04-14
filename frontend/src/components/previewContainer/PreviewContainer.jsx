<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect, useCallback, useRef } from 'react';
>>>>>>> 646c1f5 (first commit)
import LivePreview from '../../components/livePreview/LivePreview';
import './PreviewContainer.css';
import RangeBar from '../RangeBar/RangeBar';
import { useDispatch, useSelector } from 'react-redux';
import { setImages, setClickedImage } from '../../Slice/imageSlice';
import path4 from '../../assets/illustrations/path4.png';
import path7 from '../../assets/illustrations/path7.png';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";
import axios from 'axios';
<<<<<<< HEAD

let userId = sessionStorage.getItem("id");
=======
import { useDropzone } from 'react-dropzone'
import Cookies from 'js-cookie';
>>>>>>> 646c1f5 (first commit)

const PreviewContainer = () => {
    const dispatch = useDispatch();
    const clickedImage = useSelector((state) => state.images.clickedImage);
    const clickedImageId = useSelector((state) => state.images.clickedImageId);
    const clickedImageRange = useSelector((state) => state.images.clickedImageRange);
    const [image, setImage] = useState("");
<<<<<<< HEAD
    const [threshold, setThreshold] = useState(128);
=======
    const [threshold, setThreshold] = useState(10);
>>>>>>> 646c1f5 (first commit)

    useEffect(() => {
        if (clickedImage) {
            setImage(clickedImage);
            setThreshold(clickedImageRange);
            console.log(clickedImageRange);
            console.log(threshold);
            console.log(clickedImageId);
        }
    }, [clickedImage, clickedImageRange]);

<<<<<<< HEAD
=======
    const Id = Cookies.get('userId');
    let userId = null;

    if (Id) {
        try {
            const parsedUserId = JSON.parse(Id);
            userId = parsedUserId?.userId || null;
        } catch (error) {
            console.error("Failed to parse userId cookie:", error);
        }
    }

    // console.log("userId:", userId);


>>>>>>> 646c1f5 (first commit)
    const convertFile = (e) => {
        try {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
<<<<<<< HEAD
                console.log(reader.result);
=======
                // console.log(reader.result);
>>>>>>> 646c1f5 (first commit)
                setImage(reader.result)
            }
            reader.onerror = (error) => {
                console.log('error', error);
            }
        } catch (error) {
            console.log("upload file canceled");

        }

    }

    const uploadImage = () => {
        document.getElementById('fileInput').click();
<<<<<<< HEAD
        handleThresholdChange(125)
=======
        handleThresholdChange(8)
>>>>>>> 646c1f5 (first commit)
    };

    const handleThresholdChange = (value) => {
        setTimeout(() => {
            setThreshold(value);
        }, 300);
    };

    const downloadImage = async () => {

<<<<<<< HEAD
=======
        setImage("");

>>>>>>> 646c1f5 (first commit)
        const formData = new FormData();

        console.log("Threshold value before fetch:", threshold);

        if (clickedImage) {

            console.log("clickedImageId:", clickedImageId);

<<<<<<< HEAD
            await axios.put(`https://vectrofy-node-backend.onrender.com/api/v2/update-image-range/${clickedImageId}`, {
=======
            await axios.put(`http://localhost:5000/api/v2/update-image-range/${clickedImageId}`, {
>>>>>>> 646c1f5 (first commit)
                rangeVal: threshold // Correct structure for the body
            })
                .then((res) => {
                    console.log("Response status:", res.status); // Remove the `ok` check for Axios
                    return res.data; // Axios responses have data property
                })
                .then((data) => console.log("Response data:", data))
                .catch((error) => console.error("Fetch error:", error));



            const base64Index = clickedImage.indexOf(',') + 1;
            const base64Data = base64Index ? clickedImage.substring(base64Index) : clickedImage;

            const binaryString = atob(base64Data);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);

            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            const blob = new Blob([bytes], { type: 'image/png' });

            formData.append('file', blob, 'clickedImage.png');
            dispatch(setClickedImage(""))
<<<<<<< HEAD
        } else {
            fetch("https://vectrofy-node-backend.onrender.com/api/v2/upload-image", {
=======



        } else {
            await fetch("http://localhost:5000/api/v2/upload-image", {
>>>>>>> 646c1f5 (first commit)
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    base64: image,
                    rangeVal: threshold,
                    id: userId,
                }),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => console.log(data))
                .catch((error) => console.error('Error:', error));
        }

<<<<<<< HEAD
        formData.append('file', document.querySelector('#fileInput').files[0]);
        formData.append('threshold', threshold);

        fetch("https://vectrofy-python-backend.onrender.com/convert", {
=======

        setTimeout(() => {
            alert("Download in process...");
        }, 333);

        formData.append('file', document.querySelector('#fileInput').files[0]);
        formData.append('threshold', threshold);

        await fetch("http://127.0.0.1:8080/convert", {
>>>>>>> 646c1f5 (first commit)
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const blob = new Blob([data.svg], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = url;
<<<<<<< HEAD
                link.download = 'vectrofy.svg';
=======
                link.download = 'vectrofy.svg';  // Updated file name
>>>>>>> 646c1f5 (first commit)
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

<<<<<<< HEAD
                URL.revokeObjectURL(url);
=======
                URL.revokeObjectURL(url);  // Clean up URL to release memory
>>>>>>> 646c1f5 (first commit)
            })
            .catch(error => {
                console.error('Error:', error);
            });

        setImage("")
        setTimeout(() => {
            getImage();
        }, 300);
    }

<<<<<<< HEAD
    const getImage = () => {
        const userId = sessionStorage.getItem("id"); // Retrieve the user ID from session storage
        fetch(`https://vectrofy-node-backend.onrender.com/api/v2/get-image?id=${userId}`, { // Pass the user ID in the query string
=======
    const getImage = async () => {
        await fetch(`http://localhost:5000/api/v2/get-image?id=${userId}`, {
>>>>>>> 646c1f5 (first commit)
            method: 'GET',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                if (data.images && Array.isArray(data.images)) {
                    dispatch(setImages(data.images));
                } else {
                    console.error('Invalid data format', data);
                }
            })
            .catch((error) => console.error('Error:', error));
    }

<<<<<<< HEAD
    getImage()
=======
    useEffect(() => {
        getImage();
    },);

    const fileInputRef = useRef(null);

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];

            // Convert file to base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
                console.log("File successfully converted to base64");

                // Manually update the file input field
                if (fileInputRef.current) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    fileInputRef.current.files = dataTransfer.files;
                }
            };
            reader.onerror = (error) => console.error("Error reading file:", error);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/png': [], 'image/jpeg': [], 'image/jpg': [] },
        multiple: false
    });






>>>>>>> 646c1f5 (first commit)

    return (
        <div className="previewContainer">

            <div className="previewContainerProportion_1">
                <img src={path4} className='path4' alt='designIcon' />
            </div>
            <div className="previewContainerProportion_2">
                <img src={path7} className='path7' alt='designIcon' />
            </div>

<<<<<<< HEAD
            <div className="rangeBar">
                <RangeBar className='slider1' color={'red'} onChange={handleThresholdChange} value={threshold} />
            </div>

            useEffect(() => {
                <LivePreview image={image} />
            }, [image,uploadImage,clickedImage])

=======


            {image ? (
                <>
                    <div className="rangeBar">
                        <RangeBar className='slider1' color={'red'} onChange={handleThresholdChange} value={threshold} />
                    </div>
                    <LivePreview image={image} />
                </>
            ) :
                <>
                    <div {...getRootProps()} className={`dropContainer ${isDragActive ? 'dropContainerHover' : ''}`}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <>
                                <AiOutlineCloudUpload className='dropIconActive' />
                                <p className='dropTextActive'>Drop Image!!!</p>
                            </>
                        ) : (
                            <>
                                <p className='dropText'>Drag 'n' Drop Image</p>
                                <AiOutlineCloudUpload className='dropIcon' />
                            </>
                        )}
                    </div>

                </>
            }

            {/* Hidden file input */}
>>>>>>> 646c1f5 (first commit)
            <form>
                <input
                    type="file"
                    id="fileInput"
<<<<<<< HEAD
=======
                    ref={fileInputRef}
>>>>>>> 646c1f5 (first commit)
                    style={{ display: 'none' }}
                    // onChange={handleFileChange}
                    onChange={convertFile}
                    name='fileInput'
<<<<<<< HEAD
                    accept="image/png, image/jpeg"
                />
            </form>

=======
                    accept="image/png, image/jpeg, image/jpg"
                />
            </form>

            {/* Upload Button */}
>>>>>>> 646c1f5 (first commit)
            <button
                className='uploadButton actionBtn'
                type='button'
                onClick={uploadImage}
            >
<<<<<<< HEAD
=======
                {/* {selectedFile && console.log(selectedFile.name)} */}
>>>>>>> 646c1f5 (first commit)

                <div className="uploadButtonContainer">
                    <AiOutlineCloudUpload />
                </div>
            </button>

<<<<<<< HEAD
=======
            {/* Download Button */}
>>>>>>> 646c1f5 (first commit)
            <button className='downloadButton actionBtn' onClick={downloadImage}>
                <div className="downloadButtonContainer">
                    <LuDownload />
                </div>
            </button>

        </div>
    );
};

<<<<<<< HEAD
export default PreviewContainer;

=======
export default PreviewContainer;
>>>>>>> 646c1f5 (first commit)
