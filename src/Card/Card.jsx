import React from "react";
import "./Card.css";
import { BiSearch } from "react-icons/bi";
import testImg from "../img/dummy-user.jpg";
const Card = (props) => {
  const { name, bio, followers, following, public_repos, avatar_url } =
    props.userInfo;
  // console.log(name, bio, followers, following, public_repos);
  return (
    <>
      <section className="github__finder__app">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="main__heading">GITHUB FINDER</h1>
              <div className="github__card">
                <div className="">
                  <form
                    className=" d-flex justify-content-between align-items-center"
                    onSubmit={props.onsubmit}
                  >
                    <input
                      type="text"
                      className="form-control me-md-0 me-2"
                      placeholder="Feel Free to Search !"
                      onChange={props.onchange}
                      value={props.value}
                    />
                    <button>
                      <BiSearch />
                    </button>
                  </form>
                </div>
                <div className="">
                  <div className="user__img">
                    {/* <img src={testImg} alt="" className="w-100" /> */}
                    <img src={avatar_url} alt="" className="w-100" />
                  </div>
                </div>
                <div className="user__details mt-5">
                  <div className="row align-items-center user__name py-1 ">
                    <div className="col-md-6 ps-5 ">
                      <h6>Name: </h6>
                    </div>
                    <div className="col-md-6  ps-5">
                      {/* <h6 className="span__field">Ahtesham Akram</h6> */}
                      <h6 className="span__field">{name}</h6>
                    </div>
                  </div>
                  <div className="row align-items-center user__bio py-1">
                    <div className="col-md-6 ps-5 ">
                      <h6>Bio : </h6>
                    </div>
                    <div className="col-md-6 ps-5 ">
                      {/* <h6 className="span__field">Frontend Engineer</h6> */}
                      <h6 className="span__field">{bio}</h6>
                    </div>
                  </div>
                  <div className="row align-items-center user__followers py-1">
                    <div className="col-md-6  ps-5">
                      <h6>Followers : </h6>
                    </div>
                    <div className="col-md-6  ps-5">
                      {/* <h6 className="ps-5 span__field">12</h6> */}
                      <h6 className="ps-md-5 span__field">{followers}</h6>
                    </div>
                  </div>
                  <div className="row align-items-center user__following py-1">
                    <div className="col-md-6  ps-5">
                      <h6>Following : </h6>
                    </div>
                    <div className="col-md-6 ps-5 ">
                      {/* <h6 className="ps-5 span__field">14</h6> */}
                      <h6 className="ps-md-5 span__field">{following}</h6>
                    </div>
                  </div>
                  <div className="row align-items-center user__public__repo py-1">
                    <div className="col-md-6 ps-5 ">
                      <h6>Public Repo's : </h6>
                    </div>
                    <div className="col-md-6 ps-5 ">
                      {/* <h6 className="ps-5 span__field">46</h6> */}
                      <h6 className="ps-md-5 span__field">{public_repos}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
