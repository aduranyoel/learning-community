import './card.component.css';
export function CardComponent({img}) {
    return (
        <div className="my-card">
            <div className="my-card-header">
                <img src={img} alt=""/>
            </div>
            <div className="my-card-body">
                <div className="title">
                    This is the title of the course
                </div>
                <div className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi quaerat voluptate. A aliquam architecto corporis, cupiditate dolore ducimus eligendi enim explicabo, fugiat laboriosam, perferendis perspiciatis quidem reprehenderit repudiandae voluptatem!
                </div>
            </div>
        </div>
    )
}
