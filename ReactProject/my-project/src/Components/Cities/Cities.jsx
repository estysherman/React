import './Cities.css';
import Product from '../Product/Product';

const Cities = () =>{

    return(
        <div className="products">
            <Product id={3001} name={"Concepción"} img={"https://www.latercera.com/resizer/jHpSqQZBl1pxjhM5Y62IFPdHDWY=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PLZ4OSMEGVC33HYVJNCOHZQJMM.jpg"}/>
            <Product id={3002} name={"Santiago"} img={"https://media.istockphoto.com/photos/aerial-view-of-financial-district-picture-id547146110?s=612x612"}/>
            <Product id={3003} name={"Rosario"} img={"https://thecityfix.com/wp-content/uploads/2021/06/panoramica-Rosario.jpg"}/>
            <Product id={3004} name={"Porto Alegre"} img={"https://assets.nationbuilder.com/icf/pages/382/attachments/original/1462463049/Porto5.jpg?1462463049"}/>
            <Product id={3005} name={"Brasília"} img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/70/e5/4a/photo0jpg.jpg?w=500&h=300&s=1"}/>
            <Product id={3006} name={"Новосибирск"} img={"http://vseon.com/media/zoo/images/007_f1fd6aed6c693def57b36a2fcf19e376.jpg"}/>
            <Product id={3007} name={"Hannover"} img={"https://a.cdn-hotels.com/gdcs/production83/d1575/29722be0-68ce-11e8-bbf2-0242ac110009.jpg"}/>
            <Product id={3008} name={"Nantes"} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Nantes_a%C3%A9rien_ch%C3%A2teau3.jpg/800px-Nantes_a%C3%A9rien_ch%C3%A2teau3.jpg"}/>

        </div>
    )
}
export default Cities;