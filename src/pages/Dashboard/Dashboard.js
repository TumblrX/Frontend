/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import api from '../../api/getPost';
import './Dashboard.css';

const Dashboard = function () {
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isInfinte, setIsInfinite] = useState(false);
  // const [exploreBlogs, setExploreBlogs] = useState([]);
  const [ismounted, setIsMounted] = useState(false);

  const fetchPosts = () => {
    const fetchPost = async () => {
      try {
        const response = await api.get('/posts');
        // this.setState({ posts: response.data });
        setPosts(response.data);
        console.log(posts);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPost();
  };

  useEffect(() => {
    fetchPosts();
    setIsMounted(true);
  }, []);

  const showPosts = () => {
    let firstPost;
    let lastPost;
    if (isInfinte) {
      firstPost = 0;
      lastPost = posts.length;
    } else {
      lastPost = pageNum * 10;
      firstPost = lastPost - 10;
    }
    return (
      // eslint-disable-next-line block-scoped-var
      posts.slice(firstPost, lastPost).map((post, index) => (
        <div className="post row" key={index} data-testid={`testPost${index}`}>
          <div className="logo" />
          <div className="postDatailes">
            <div>
              {' '}
              id =
              {post.id}
            </div>
            <div>
              {' '}
              title=
              {post.title}
            </div>
            <div>
              {' '}
              datatime=
              {post.datetime}
            </div>
            <div>
              {' '}
              body =
              {post.body}
            </div>
          </div>
        </div>
      ))
    );
  };

  const handleNext = () => {
    setPageNum(pageNum + 1);
  };

  const handlePrevious = () => {
    setPageNum(pageNum - 1);
  };
  return (
    <div className="parent">
      <div className="Navbar" data-testid="testNavbar">
        Test Navbar
      </div>
      <div className="container">

        <div className="mainClass row">
          {/* --------------- Start posts ---------------------- */}
          <div className="posts" data-testid="testPostContainer">
            <div className="insertPost row">
              <div className="insertLogo" />
              <div className="insertPostDetails">
                insertPost
              </div>
            </div>
            { ismounted && showPosts()}
            <div className="navigate-btns row">
              {
                  (pageNum !== 1 && !isInfinte)
                  && <button className="previous-btn" onClick={() => handlePrevious()}> &lt; Previous   </button>
                }
              {
                  (pageNum * 10 < posts.length
                    && !isInfinte
                  )
                    && <button className="next-btn" onClick={() => handleNext()}> Next &gt;  </button>
                  }
            </div>
          </div>
          {/* --------------- End posts ---------------------- */}

          {/* --------------- Start explore  ---------------------- */}
          <div className="explore" data-testid="testExplore">
            <div className="checkBlogs">
              Check Theses Blogs
              <hr />
              <p> Explore all of Tumblr </p>
            </div>
            <div className="radar">
              Radar
              <hr />
            </div>
          </div>
          {/* --------------- End explore  ---------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
