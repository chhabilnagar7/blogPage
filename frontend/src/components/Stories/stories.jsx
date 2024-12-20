import {React , useEffect, useState} from "react";
import './stories.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const StoriesPage = () => {
    const[tabType , setTabType] = useState(1); 
    const[latestStories,setLatestStories]= useState([]);
    const [userStories,setUserStories]=useState([]);
    const[storyContent,setStoryContent]=useState('')
    const[storyTitle,setStoryTitle]=useState('')

    const navigate = useNavigate()


    const fetchAllStories = async () =>{
      try {
        const response = await axios.get('http://localhost:5000/api/stories'); 
        setLatestStories(response.data); 
        toast.success("Latest Stories")
      } catch (error) {
        toast.error(error || "Error during fetching stories data")
        console.error('Error', error);
      }
    };
    useEffect(() => {
    
  
      fetchAllStories();
    },[])
    const userEmail = localStorage.getItem('userEmail')
    console.log("userEmail",userEmail)
    const userStory = async () => {
      try {
          
          const response = await axios.get(`http://localhost:5000/api/stories/user?email=${userEmail}`);
          setUserStories(response.data)
          toast.success("Your Stories")
      } catch (error) {
        toast.error(error,"Error")
          console.error('Error', error);
      }
  };
  
    const handleAllStories=()=>{
        setTabType(1);
    }
    const handleYourStories =()=>{
        setTabType(2);
    }
    const handleLogout = async (e) => {
      e.preventDefault();
     await axios.post("http://localhost:5000/api/auth/logout")
        .then((res) => {
          const message = res.data.message;
          console.log("message", message);
          localStorage.removeItem("token");
          localStorage.removeItem('userName');
          localStorage.removeItem('userEmail');
          navigate('/');
          
        })
        .catch((error) => {
          console.log("Error", error)
        })
    }

    const handleAddStory = async (e) => {
      e.preventDefault();
      try {
        const userName = localStorage.getItem('userName');
        const userEmail = localStorage.getItem('userEmail')
        const response = await axios.post('http://localhost:5000/api/newStories', {
          title: storyTitle, 
          content: storyContent,
          userName: userName,
          userEmail: userEmail,
        });
  
       
        console.log('New Story', response.data);
        fetchAllStories();
  
  
      } catch (error) {
        console.error('Error', error);
      }
    }
    
  
  return (
    <div>
      <div className="contentStories">
        {/* Navbar */}
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
                <h2>Hi! {localStorage.getItem('userName')}</h2>
                <form class="d-flex">
                <button class="btn btn-outline-success me-2" type="button" onClick={handleAllStories}>
                Latest Stories
              </button> 

              <button class="btn btn-outline-success me-2" type="button"onClick={() =>{handleYourStories();userStory();}}>
                Your Stories
              </button>
                            
                <button type="button" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#storyModal">
                Create Story
                </button>
                <div
              className="modal fade"
              id="storyModal"
              tabIndex="-1"
              aria-labelledby="storyModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="storyModalLabel">
                      Create your story
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label htmlFor="storyText" className="form-label">
                         Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your story"
                          className="form-control"
                          id="storyText"
                          value={storyTitle}
                          onChange={(e) =>setStoryTitle(e.target.value)}
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="storyText" className="form-label">
                         Your Story Content
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your story"
                          className="form-control"
                          id="storyText"
                          value={storyContent}
                          onChange={(e) => setStoryContent(e.target.value)}
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddStory}>
                       Add Story
                      </button>
                    </form>
                  </div>
                </div>
              </div>
                </div>
                
              <div className="logout">
                <button
                  class="btn btn-outline-success me-2"
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#logoutModal"
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </button>
                <div
                  className="modal fade"
                  id="logoutModal"
                  tabIndex="-1"
                  aria-labelledby="logoutModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="logoutModalLabel">
                          <i class="fa-solid fa-right-from-bracket"></i>
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">Do you want to sign out?</div>
                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleLogout}>
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
        </nav>
        
        {/* All stories */}

        {tabType === 1 && (
        <div className="allStories">
          <div className="text">
            <h2>Latest stories</h2>
          </div>
          <div className="stories">
            {latestStories.length > 0 ? (
              latestStories.map((story, index) => (
                <div className="storyData" key={index}>
                  <div className="storyTitle">
                    <h3>{story.title}</h3>
                  </div>
                  <p className="storyContent">{story.content}</p>
                  <span className="userName">Created by: {story.userName}</span>
                  <span className="storyTime">{story.createdAt}</span>
                </div>
              ))
            ) : (
              <p>No stories available</p>
            )}
          </div>
        </div>
      )}
      
      {tabType === 2 && (
        <div className="allStories">
          <div className="text">
            <h2>Your stories</h2>
          </div>
          <div className="stories">
            {userStories?.length > 0 ? (
              userStories?.map((story, index) => (
                <div className="storyData" key={index}>
                  <div className="storyTitle">
                    <h3>{story.title}</h3>
                  </div>
                  <p className="storyContent">{story.content}</p>
                  <span className="userName">Created by: {story.userName}</span>
                  <span className="storyTime">{story.createdAt}</span>
                </div>
              ))
            ) : (
              <p>No stories available</p>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
export default StoriesPage;
