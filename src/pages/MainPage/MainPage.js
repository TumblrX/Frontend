/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mainPageStyle from './MainPage.module.scss';
import api from '../../api/api';

/**
 * Component to render the Email Section in the Accountsettings in the Settings page
 * @author Taher Mohamed
 *
 * @component
 */
// eslint-disable-next-line react/function-component-definition
function MainPage() {
  return (
    <div className={mainPageStyle.bodyMainPage}>
      <div className={mainPageStyle.container}>
        <h2> tumblr </h2>
        <p className={mainPageStyle.p1}>
          Make stuff, look at stuff, talk about stuff, find your people.
        </p>
        <div className={mainPageStyle.content}>
          <a href="/register" className={mainPageStyle.buttonWrapper}>
            <button className={mainPageStyle.signup}>
              {' '}
              <span className={mainPageStyle.buttonText}> Sign up </span>
              {' '}
            </button>
          </a>
          <a href="/login" className={mainPageStyle.buttonWrapper}>
            <button className={mainPageStyle.login}>
              {' '}
              <span className={mainPageStyle.buttonText}>Log in</span>
              {' '}
            </button>
          </a>
          <div id={mainPageStyle.or}>
            {' '}
            <hr />
            {' '}
            <p> or </p>
            <hr />
            {' '}

          </div>
          <p>
            By continuing with the options below, you agree to Tumblr’s
            <a href="#"> Terms of Service </a>
            {' '}
            and
            have read the
            {' '}
            <a href="#">  Privacy Policy </a>
          </p>
        </div>
        <button type="button">
          <svg viewBox="10 8 26 30" width="23" height="24">
            <defs>
              <filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5" />
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0" />
                <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
                <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation=".5" />
                <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0" />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                  <feMergeNode in="shadowMatrixOuter2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g fill="none">
              <g filter="url(#a)" transform="translate(3 3)">
                <use fill="#FFF" />
                <use />
                <use />
                <use />
              </g>
              <path fill="#4285F4" d="M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
              <path fill="#34A853" d="M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0023 32z" />
              <path fill="#FBBC05" d="M17.964 24.71a5.41 5.41 0 01-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0014 23c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
              <path fill="#EA4335" d="M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 00-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z" />
              <path d="M14 14h18v18H14V14z" />
            </g>
          </svg>
          <span className={mainPageStyle.buttonText}> Continue with Google </span>
        </button>
        <button type="button">
          <svg viewBox="0 0 39 44" width="23" height="24">
            <g fill="none">
              <path fill="none" d="M0 0h39v44H0z" />
              <path fill="#000" d="M19.82 13.138c1.083 0 2.44-.732 3.25-1.708.732-.885 1.266-2.121 1.266-3.357 0-.168-.015-.336-.046-.473-1.205.046-2.655.809-3.524 1.83-.687.779-1.313 2-1.313 3.25 0 .184.031.367.046.428.077.015.199.03.32.03zM16.005 31.6c1.48 0 2.136-.992 3.983-.992 1.876 0 2.288.961 3.936.961 1.617 0 2.7-1.495 3.723-2.96 1.144-1.678 1.617-3.326 1.648-3.402-.107-.03-3.205-1.297-3.205-4.852 0-3.082 2.442-4.47 2.579-4.577-1.617-2.32-4.074-2.38-4.745-2.38-1.816 0-3.296 1.098-4.226 1.098-1.007 0-2.335-1.037-3.906-1.037-2.99 0-6.027 2.472-6.027 7.14 0 2.9 1.13 5.966 2.517 7.95 1.19 1.678 2.228 3.051 3.723 3.051z" />
            </g>
          </svg>
          <span className={mainPageStyle.buttonText}> Continue with Apple </span>
        </button>
        <p className={mainPageStyle.trend}>
          <svg viewBox="0 0 21.8 21.8" width="22" height="24" fill="#ffffff"><path d="M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z" /></svg>
          <span>
            {' '}
            <a href="#"> Here&apos;s what&apos;s trending </a>
            {' '}
          </span>
        </p>
      </div>
    </div>
  );
}
export default MainPage;
