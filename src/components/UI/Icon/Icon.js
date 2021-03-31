import React from 'react';
import './Icon.css';
import {
  IoNutritionOutline,
  IoCartOutline,
  IoInfiniteOutline,
  IoStopwatchOutline,
  IoPersonSharp,
  IoStarSharp,
  IoLogoTwitter,
  IoCheckmark,
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoInstagram,
} from 'react-icons/io5';
const icon = props => {
  let updateIcon = null;
  switch (props.type) {
    case 'IoNutritionOutline':
      updateIcon = (
        <IoNutritionOutline
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoCartOutline':
      updateIcon = (
        <IoCartOutline
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoInfiniteOutline':
      updateIcon = (
        <IoInfiniteOutline
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoStopwatchOutline':
      updateIcon = (
        <IoStopwatchOutline
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoPersonSharp':
      updateIcon = (
        <IoPersonSharp
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoStarSharp':
      updateIcon = (
        <IoStarSharp
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoLogoTwitter':
      updateIcon = (
        <IoLogoTwitter
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoCheckmark':
      updateIcon = (
        <IoCheckmark
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoCloseOutline':
      updateIcon = (
        <IoCloseOutline
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoLogoFacebook':
      updateIcon = (
        <IoLogoFacebook
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoLogoGoogle':
      updateIcon = (
        <IoLogoGoogle
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    case 'IoLogoInstagram':
      updateIcon = (
        <IoLogoInstagram
          color={props.color}
          className={props.class}
          fontSize={props.fontSize}
        />
      );
      break;
    default:
      updateIcon = null;
  }
  return updateIcon;
};
export default icon;
