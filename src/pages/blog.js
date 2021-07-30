import React from 'react'
import {Loading} from './loading'
import { useGlobalContext } from '../contex';
export const Blog = () => {
  const {all}=useGlobalContext();
  //console.log("all is",all.items)
 
    return (
      <div className="container my-4">
      <h3 className="text-center">My Projects</h3>
      <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {all ? all.items.map((post,index)=>{
          //console.log("titem is",post)
          const {fields}=post;
          return (
          <a href={fields.projectlink} key={index} target="_blank">
          <div className="col">
            <div className="card shadow-sm">
              <img  src={fields.image.fields.file.url} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
              <div className="card-body">
                <p className="card-text">{fields.projectname}</p>
                <div className="d-flex justify-content-between align-items-center">
                  {/* <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          </a>
          )
          // console.log()
          // console.log("img is",)
          }):<Loading/>}
        </div>
      </div>
    </div>
    </div>
    )
}
