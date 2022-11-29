import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import { faFire, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import './show.scss';

function Product() {
    return (
        <div className="container">
            <div className="pt-3 pb-2">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#">Library</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Data
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-lg-1">
                    <div className="product_sub_images">
                        <div className="product_sub_image">
                            <img src={images.ao_thun_1_1} className="img-fluid"></img>
                        </div>
                        <div className="product_sub_image">
                            <img src={images.ao_thun_1_2} className="img-fluid"></img>
                        </div>
                        <div className="product_sub_image">
                            <img src={images.ao_thun_1_3} className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="product_image">
                        <img src={images.ao_thun_1_3} className="img-fluid"></img>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex">
                        <div className="col-6">
                            <div className="product_collection_name">BILLABONG</div>
                        </div>
                        <div className="col-6 text-end">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            (50)
                        </div>
                    </div>
                    <div className="product__content">
                        <div className="product__name">Coastline Plus Waterproof Stormbreaker</div>
                        <div className="product__price">
                            <div className="product__price_old">
                                <span>$24.0</span> -10%
                            </div>
                            <div className="product__price_new">$21.6</div>
                        </div>
                        <div className="border-bottom">
                            <div className="product__views">
                                <span>
                                    <FontAwesomeIcon icon={faHotjar} />
                                </span>
                                167 views today
                            </div>
                        </div>
                        <div className='product__colors'>
                            <div className='product__colors_title'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
