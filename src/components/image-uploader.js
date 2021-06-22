import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import { VscFileMedia, VscClose } from "react-icons/vsc";

const ImageUploader = ({ setPost }) => {
  const [images, setImages] = useState([]);
  const max = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    setPost((prev) => {
      return {
        ...prev,
        image: imageList.length > 0 ? imageList[0].data_url : null,
      };
    });
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={max}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              {/*               <img src={image.data_url} alt="" width="100" /> */}
              <MediaItem>
                <RemoveBtn onClick={() => onImageRemove(index)}>
                  <VscClose />
                </RemoveBtn>
                <MediaItemImage src={image.data_url} alt="" />
              </MediaItem>
              {/* <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        
                      </div> */}
            </div>
          ))}
          <ActionButton
            style={isDragging ? { color: "red" } : null}
            onClick={onImageUpload}
            {...dragProps}
          >
            <VscFileMedia />
          </ActionButton>
          {/*           <button onClick={onImageRemoveAll}>Remove all images</button> */}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;

//
const MediaItem = styled.figure`
  position: relative;
  width: 100px;
  border-radius: 10px;
  margin-bottom: 0.5rem;

  &:after {
    position: absolute;
    content: "";
    inset: 0;
    background-color: black;
    opacity: 0.5;
    border-radius: inherit;
  }
`;
const MediaItemImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: inherit;
  position: relative;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  background-color: white;
  text-decoration: none;
`;
const ActionButton = styled(Button)`
  padding: 0.5rem;
  line-height: 0;
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid black;
`;

const RemoveBtn = styled.button`
  position: absolute;
  padding: 2px;
  right: 5px;
  top: 5px;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  line-height: 0;
  background-color: black;
  box-shadow: 0 0 0.5px 0.5px #fff;
  z-index: 5;
`;
