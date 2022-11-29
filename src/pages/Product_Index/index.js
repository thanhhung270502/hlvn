import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { useState } from 'react';

function Product_Index() {
    const [abe, setAbe] = useState([])

    return (
        <div className="products_index">
            <div className="products_index_header">
                <div className="products_index_inner_header">
                    <div className="container">
                        <div className="products_index_breadcumb mb-2">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        Library
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <h2>Latest HVLT (10)</h2>
                        <div className="content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products_index_main pb-5">
                <div className="container pb-4 border-bottom">
                    <div className="d-flex pb-3">
                        <div className="col-6">
                            <div className="products_index_main_title">New Arrivals</div>
                        </div>
                        <div className="col-6 text-end">
                            <div className="btn btn-secondary">
                                Sort By <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="p-2 pointer">
                                <div className="products_index_main_image">
                                    <img src={images.ao_thun_1_3} alt="" className="img-fluid"></img>
                                </div>
                                <div className="text-center">
                                    <div className="products_index_main_name">Áo Thun Valknut Ver3</div>
                                    <div className="products_index_main_price">$19.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="products_index_pagination pb-5 border-bottom">
                    <div className="d-flex align-items-center">
                        <div className="col-3 text-end">
                            <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
                            Prev
                        </div>
                        <div className="col-6 text-center">
                            <div className="btn_pagin btn_active">1</div>
                            <div className="btn_pagin">2</div>
                            <div className="btn_pagin">3</div>
                        </div>
                        <div className="col-3 text-start">
                            Next
                            <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                        </div>
                    </div>
                </div>
                <div className="products_index_categories">
                    <div className="title">Related Categories</div>
                    <div className="field_categories">
                        <div className="category">Hiking Shoes</div>
                        <div className="category">Waterproof Trousers</div>
                        <div className="category">Hiking Shirt</div>
                        <div className="category">Jacket</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Index;
