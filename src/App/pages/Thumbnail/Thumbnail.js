import { MemeSVGViewer } from "orsys-tjs-meme";
import React from "react";
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Style from './Thumbnail.module.css'
const Thumbnail = () => {
  const ressources = useSelector((s) => s.ressources);
  return (
    <div className={Style.Thumbnail}>
      {ressources.memes.map((me,mi) => {
        return (
          <Link to={"/editor/" + me.id} key={"l" + mi}>
            <div>
              <MemeSVGViewer
                meme={me}
                image={ressources.images.find((im, i) => im.id === me.imageId)}
                basePath=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Thumbnail;
