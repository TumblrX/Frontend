/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './createBlog.module.scss';
import useHandler from './CreateBlogController';
/**
 * Component to render the create blog page
 * @author Ahmed Mahmoud
 *
 * @component
 *
 */
const CreateBlog = function () {
  const {
    handleCheckChange,
    handleURLChange,
    handleTitleChange,
    handlePasswordChange,
    handleSubmit,
    handleFocus,
    handleFocusOut,
  } = useHandler();
  const {
    blogHandle, blogTitle, blogIsPrivate, blogPassword,
  } = useSelector((state) => state.create);
  return (
    <div className={styles.baseContanier}>
      <div className={styles.contanier}>
        <div className={styles.content}>
          <h1 className={styles.h1}>
            Create a new
            {blogIsPrivate ? 'Private' : ''}
            {' '}
            blog
          </h1>
          <div className={styles.blurb}>
            <p className={styles.p}>
              This additional blog can be managed by multiple authors or set to private.
            </p>
            <p className={styles.p}>
              <strong>Note</strong>
              : If you want to Like posts or Follow other users with this blog identity,
              you must log out and create a separate account.
            </p>
            <p className={styles.p}>
              Learn more about
              {' '}
              <a href="https://tumblr.zendesk.com/hc/en-us/sections/205853348-Blog-management" className={styles.a}>Primary vs. Secondary blog features here</a>
              .
            </p>
          </div>
          <div
            id="errors"
            className={styles.errors_wrapper}
            style={{ display: 'none' }}
          >
            <ul className={styles.ul}>
              <li
                id="error_url_taken"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Blog url is not available!
              </li>
              <li
                id="error_url_hyphen_starts_with"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Can not do dashes at the start or end. Middles only.
              </li>
              <li
                id="error_url_contains_invalid"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Letters, numbers, and dashes only please.
              </li>
              <li
                id="error_url_empty"
                style={{ display: 'none' }}
                className={styles.li}
              >
                URL can not be empty.
              </li>
              <li
                id="error_title_empty"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Title can not be empty.
              </li>
              <li
                id="error_title_small"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Title must be 6 char at least.
              </li>
              <li
                id="error_password_empty"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Password can not be empty.
              </li>
              <li
                id="error_password_small"
                style={{ display: 'none' }}
                className={styles.li}
              >
                Password must be 6 char at least.
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.firstSection}>
              <div className={styles.innerLeftColumn}>
                Title
              </div>
              <div className={styles.innerRightColumn}>
                <div className={styles.innerRightColumnFirst}>
                  <div className={styles.textFieldWrapper}>
                    <input
                      type="text"
                      className={styles.textField1}
                      value={blogTitle}
                      maxLength="33"
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                <div className={styles.innerRightColumnSecond}>
                  (ie. Acme Corp, Sara & Jacob, My Awesome Blog)
                </div>
                <div className={styles.clear} />
              </div>
              <div className={styles.innerLeftColumn}>
                URL
              </div>
              <div className={styles.innerRightColumn}>
                <div className={styles.innerRightColumnFirst}>
                  <div className={styles.textFieldWrapper}>
                    <input
                      type="text"
                      className={styles.textField2}
                      id="new_group_name"
                      value={blogHandle}
                      maxLength="33"
                      onChange={handleURLChange}
                    />
                    <label
                      htmlFor="new_group_name"
                      className={styles.label}
                    >
                      .tumblr.com
                    </label>
                  </div>
                </div>
                <div className={styles.innerRightColumnSecond}>
                  (you can change this at any time)
                </div>
                <div className={styles.clear} />
              </div>
              <div className={`${styles.innerLeftColumn}`}>
                Privacy
              </div>
              <div className={`${styles.innerRightColumn} ${styles.final}`}>
                <table
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  className={styles.table}
                >
                  <tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                      <td
                        valign="top"
                        className={styles.td}
                      >
                        <input
                          type="checkbox"
                          id="password_protected_checkbox"
                          checked={blogIsPrivate}
                          onChange={handleCheckChange}
                          className={styles.checkBox}
                        />
                      </td>
                      <td
                        valign="top"
                        className={styles.td}
                      >
                        <label
                          htmlFor="password_protected_checkbox"
                          className={styles.label}
                        >
                          Password protect this blog
                        </label>
                        <p className={styles.p}>
                          This blog can only be viewed by people who enter this password:
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  className={styles.textField1}
                  style={{ width: '260px', marginLeft: '20px', border: '1px solid #d5d9dd' }}
                  id="new_group_password_protected"
                  type="text"
                  maxLength="255"
                  value={blogPassword}
                  onChange={handlePasswordChange}
                  onFocus={handleFocus}
                  onBlur={handleFocusOut}
                />
                <div className={styles.clear} />
              </div>
            </div>
            <div className={styles.secondSection}>
              <br style={{ clear: 'both' }} />
              <Link to="/Dashboard">
                <button
                  className={`${styles.chrome} ${styles.big}`}
                  style={{ float: 'right' }}
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className={`${styles.chrome} ${styles.big} ${styles.blue}`}
                id="submit_button"
              >
                <span id="submit_button_text">
                  Create
                  {' '}
                  {blogIsPrivate ? 'Private' : ''}
                  {' '}
                  blog
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateBlog;
