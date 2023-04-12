import Bigadd  from "./Bigadd/Bigadd";
import Categories from "./categories/Categories";
import Benefit from "./Benefit/Benefit"
import Header from "../Header/Header";

const Homepage =()=>{
    const design = (
        <>
        <Header />
        <Bigadd/>
        <Categories/>
        <Benefit/>

           
        </>
    );
    return design ;
}
export default Homepage;