import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ProjectPage() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState("")

  const fetchProjectData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProjectData();
  }, [productId, products])
  

  return productData ? (
    <div className="pt-10 my-10 transition-opacity ease-in duration-500 opacity-100">

      {/*=============
        Project Data
      ===============*/}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*==============
          Project Image
        ================*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row p-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                //==============
                // small image
                //==============
                <img src={item} alt="product-img" key={index} className="w-[18%] sm:w-[70%] lg:w-[38%] sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>
          <div className="w-full sm:w-[71%] lg:w-[40%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

      </div>




      
    </div>
  ) : (
    <div className="opacity-0"></div>
  ) 
}

export default ProjectPage;
