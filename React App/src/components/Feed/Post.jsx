import {React, useState, useEffect} from 'react';
import './Post.css';

export default function Post(props) {

    const data = props.data

    let hashTags = ""
    for(let i=0; i<data.hashtags.length; i++)
    {
        hashTags += " "+data.hashtags[i];
    }

    const postClickHandler = (e) => {
        window.location = "/post/"+data.key
    }

    const [showBigNavbar, setShowBigNavbar] = useState(true)
    // const [innerWidthScreen, setInnerWidthScreen] = useState(window.innerWidth)

    // setInnerWidthScreen(window.innerWidth)

    useEffect(()=>{
      if(width > 1000)
      {
        setShowBigNavbar(true);
      }
      else
      {
        setShowBigNavbar(false);
      }
    }, [])

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      if(window.innerWidth > 1000)
      {
        setShowBigNavbar(true)
      }
      else
      {
        setShowBigNavbar(false)
      }
    };
    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    
    return (
        <div className="container-fluid post" onClick={postClickHandler}>

            <div className="container container-fluid">
                <div className="row" style={{paddingTop: "3%"}}>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center  align-self-center">
                    { data.user.profilePicture.length > 0 ? <img src={data.user.profilePicture} className="rounded post-profile-pic float-right" alt="profilepicture" /> : <img src="/user.png" className="img img-fluid rounded post-profile-pic" alt="profilepicture" /> }
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-left">
                        <p className="name">{data.user.fName} {data.user.lName}</p>
                        <p className="username">@{data.user.username}</p>
                        <p className="headline">{data.user.headline}</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid post-container">
                <p className="post-data">
                    {data.data}
                </p>
                <p className="post-hashtag">{hashTags}</p>

                {showBigNavbar || window.innerWidth>1000 ? <>{ data.imageLink.length > 0 ? <div className="post-pic-container"><img src={data.imageLink}    style={{width:'100%'}} className="img-fluid post-pic" alt="postpicture"/></div> : null}</> : <>{ data.imageLink.length > 0 ? <div className="post-pic-container text-center"><img src={data.imageLink} className="img-fluid post-pic" style={{width: "100%"}} alt="postpicture"/></div> : null}</>}
            </div>
        </div>
    )
}