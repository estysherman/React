import Product from '../Product/Product';
import './Views.css';

const Views = () => {
    
    return (
        <div className="products">
            <Product id={2001} name={"Kapuz Kanyonu"} img={"https://thisisantalya.com/wp-content/uploads/IMG_4985.jpg"}/>
            <Product id={2002} name={"Zell Am See"} img={"https://d18z89ggtjsooz.cloudfront.net/cache-buster-1598281478/website/var/tmp/image-thumbnails/320000/321182/thumb__lightbox/hauptmotiv-sommer-in-zell-am-see-kaprun-c-nikolaus-faistauer-photography.jpeg"}/>
            <Product id={2003} name={"Grindelwald"} img={"https://media-cdn.tripadvisor.com/media/photo-s/18/9e/f6/f4/beautiful-grindelwald.jpg"}/>
            <Product id={2004} name={"Praia Espiñeirido"} img={"https://www.inspain.org/imgs3/playas/2/2/8/j5m236ib2wfr56ciluyu2fozdu_2000.jpg"}/>
            <Product id={2005} name={"Miradouro do Pico do"} img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/21/aa/b1/pico-carvao.jpg?w=1200&h=-1&s=1"}/>
            <Product id={2006} name={"Parque Nacional Madidi"} img={"https://previews.123rf.com/images/mathess/mathess1608/mathess160801359/60971601-r%C3%ADo-beni-en-el-parque-nacional-madidi-bolivia.jpg"}/>
            <Product id={2007} name={"Playa Chivilingo"} img={"https://lh5.googleusercontent.com/p/AF1QipN8DDBZjDgaWKAEfmSJ4JqnEM4oKprp-b8KvxLe=w500-h500-k-no"}/>
            <Product id={2008} name={"Manzano Amargo"} img={"https://live.staticflickr.com/2914/32574143214_74aaf97f4e_b.jpg"}/>

        </div>
    );
};

export default Views;