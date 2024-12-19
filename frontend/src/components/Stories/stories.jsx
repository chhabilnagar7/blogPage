import {React , useState} from "react";
import './stories.css'
const StoriesPage = () => {
    const[tabType , setTabType] = useState(1); 

    const handleAllStories=()=>{
        setTabType(1);
    }
    const handleYourStories =()=>{
        setTabType(2);
    }


  return (
    <div>
      <div className="contentStories">
        {/* Navbar */}
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
                <h2>Hi! Chhabil</h2>
                <form class="d-flex">
                <button class="btn btn-outline-success me-2" type="button" onClick={handleAllStories}>
                Latest Stories
              </button> 

              <button class="btn btn-outline-success me-2" type="button" onClick={handleYourStories}>
                Your Stories
              </button>
                            
                <button type="button" class="btn btn-outline-success me-2"              data-bs-toggle="modal" data-bs-target="#storyModal">
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
                         Your Story Content
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your story"
                          className="form-control"
                          id="storyText"
                        //   aria-describedby="emailHelp"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
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
                  data-bs-target="#loginModal"
                >
                  <i class="fa-solid fa-right-from-bracket"></i>
                </button>
                <div
                  className="modal fade"
                  id="loginModal"
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
                      <button type="submit" className="btn btn-primary">
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

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

        </div>
        </div>
        )}

        {tabType === 2 && (
            <div className="allStories">
            <div className="text">
                <h3>Your stories</h3>
            </div>
            <div className="stories">

            <div className="storyData">
                <div className="storyTitle">
                    <h3>XYZ</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

            <div className="storyData">
                <div className="storyTitle">
                    <h3>ABCDEFGH</h3>
                </div>
                <p className="storyContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse iste veritatis, est error quasi accusamus voluptate doloremque a hic ratione officia ipsum in laborum atque, pariatur dolorem velit alias iusto ex minima voluptates soluta odit minus? Libero mollitia nemo repudiandae, tempore fugit natus similique eum iusto voluptatem eos adipisci voluptas eius ab porro possimus officiis quia eveniet tempora neque laboriosam voluptate dicta? Obcaecati voluptatum laudantium ea excepturi consectetur aut aliquam perspiciatis sint deleniti inventore dolores hic, quaerat ratione dignissimos nam corrupti neque doloremque dolor voluptates, nobis aspernatur ipsum. Excepturi rerum voluptas est facilis rem aliquam, qui consectetur temporibus corporis, illum ea reprehenderit hic maiores? Asperiores sint commodi laboriosam pariatur non ab doloremque natus incidunt labore soluta, consequuntur laborum qui velit voluptatem aspernatur fuga excepturi, nulla voluptatum perferendis vero debitis, earum quis? Quae sed exercitationem harum? Id ex eveniet ducimus molestias architecto possimus quam illum ut delectus voluptas totam ipsam similique, rerum mollitia error, corporis beatae enim? Magni consectetur, quae doloribus nobis, ducimus voluptate necessitatibus ipsam reprehenderit ex nihil modi eos, ad unde! Dolorem non corporis ipsum exercitationem fugit accusantium dolores nesciunt saepe id illo debitis, quaerat illum accusamus consequatur laboriosam, repellat delectus possimus tempora. Similique provident sit inventore cumque.
                </p>
                <span className="userName">Created by: Chhabil Nagar</span>
                <span className="storyTime">24 June 2024</span>
            </div>

           

        </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default StoriesPage;
