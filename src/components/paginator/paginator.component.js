export function Paginator() {
    return (
        <div className="blog">
            <div className="blog-pagination">
                <ul className="justify-content-center">
                    <li className="disabled"><i className="icofont-rounded-left"></i></li>
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="icofont-rounded-right"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
