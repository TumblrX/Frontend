import React, { Component, Fragment } from 'react';
import { FaTumblr } from 'react-icons/fa';
import api from '../../api/getPost'
import './Dashboard.css'
// import './test.css'


class Dashboard extends Component {
  state = {
    posts:[] , 
    pageNum :1 , 
    isInfinte: 1,
    exploreBlogs:[]
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts  =()=> {
    const fetchPost = async () => {
      try {
        const response = await api.get('/posts');
        this.setState({posts:response.data}) ;
        console.log(this.state.posts)
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
    }
    fetchPost();
  }
  showPosts  = ()=> {    
    if(this.state.isInfinte){
      var firstPost = 0; 
      var lastPost  = this.state.posts.length ; 
    }else {
      var lastPost  = this.state.pageNum *10 ; 
      var firstPost = lastPost -10 ; 
    }
    return (
      this.state.posts.slice(firstPost,lastPost).map( (post,index) => 
        <div className='post row'>
          <div className="logo"> 
          
          </div>
          <div className='postDatailes'> 
            <div >  id ={post.id} </div>
            <div > title= {post.title} </div>
            <div > datatime=  {post.datetime} </div>
            <div > body = {post.body} </div>
          </div>            
        </div>
        
      )
  )}
  handleNext =()=>{
    this.setState({
      pageNum: this.state.pageNum+1
    })
  }
  handlePrevious =()=>{
    this.setState({
      pageNum:this.state.pageNum-1
    })
  }
  
  render() {
    return (
      <div className='parent' >  
        <div className='Navbar'>
          Test Navbar
        </div>
        <div className='mainClass row container'>
          {/* --------------- Start posts ---------------------- */}
          <div className='posts'>    
            <div className='insertPost row' > 
              <div className="insertLogo">

              </div>
              <div className='insertPostDetails'>
                insertPost
              </div>
            </div>
            {this.showPosts()}
            <div className='navigate-btns row'>
              {
                (this.state.pageNum !==1 && !this.state.isInfinte) &&
                <button className='previous-btn' onClick={()=> this.handlePrevious()}> &lt; Previous   </button>
              }
              {
                (this.state.pageNum*10 < this.state.posts.length &&
                  !this.state.isInfinte
                  ) &&
                <button className='next-btn' onClick={()=> this.handleNext()}> Next &gt;  </button>
              }
            </div>
          </div> 
          {/* --------------- End posts ---------------------- */}

          {/* --------------- Start explore  ---------------------- */}
          <div className='explore'>  
            <div className='checkBlogs' > 
              Check Theses Blogs
              <hr /> 
              <a> Explore all of Tumblr </a>
            </div>
            <div className='radar' > 
              Radar
              <hr />
            </div>
          </div> 
          {/* --------------- End explore  ---------------------- */}
        </div>
      </div>
    )};
}
export default Dashboard;
