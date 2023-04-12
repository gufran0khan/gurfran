import React from "react";
import Header from "../Header/Header";
import "./Software.css";
import Category from '../../json-api/Category.json';
const Software= ()=>{

    const Card = ({data}) =>{
        console.log(data)
        const design = (
            <>
                <div className="card">
                    <i className={data.icons}></i>
                    <p>{data.name}</p>
                </div>
            </>
        )
        return design;
    }
   const design = (
    <>
    <div className="wrapper">
        <Header />
        <div className="header-content">
            <h1>Fellowship Program In Software Development</h1>
            <h3>Learn with Real Work-Ex. Join the best product-based companies with <span style={{color:"#0DCBB1"}}>guaranteed placement.</span></h3>
           <div className="btnname">
            <button>Apply & Start For Free <i className='fa fa-arrow-right'></i></button>
           </div>
        </div>
        
    </div>
    <section>
        <div className="section-one">
            {
                Category.map((item)=>{
                    return <Card data={item}/>
                })
            }
        </div>
    </section>
    </>
   );
   return design;

}
export default Software;