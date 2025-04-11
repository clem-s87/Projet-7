import '../style/logement-infos.css';
import Collapse from '../components/collapse';



function info ({title, localisation, tags, host, image, description, equipements}) {
    return (
        <section className='container_info'>
            <div className='container_info_text'>
                <div className="container_info_blockG">
                    <h2>{title}</h2>
                    <p className='container_info_blockG_localisation'>{localisation}</p>
                    <div className='container_info_blockG_tags'>
                            {tags.map((tags, id) => (
                                <div className='container_info_blockG_tags_text' key={id}>{tags}</div>
                            ))}
                    </div>
                </div>
                <div className="container_info_blockD">
                    <div className='container_info_blockD_name'>
                        <p className='container_info_blockD_host'>{host}</p>
                        <img src={image} className='photo_host'></img>
                    </div>
                    <div className='container_info_blockD_rating'></div>
                </div>
            </div>
                <div className='collapse_info'>
                    <div className='collapse_info_text'><Collapse title={"Description"} content={description}/></div>
                    <div className='collapse_info_text'><Collapse title={"Équipements"} content={<ul className="equipements-list">
      {equipements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>}/></div>
                </div>
        </section>
    )
}

export default info; 