import './index.scss';

function Product_Index() {
    return (
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Index;
