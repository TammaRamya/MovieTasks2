import 'antd/dist/antd.css';
import { Card} from 'antd';
import Rating from './rating';
import Pic from './imageShow'
function Moviecard(props){
 const {title,imageUrl,subtitle,description,rating}=props.movieData;
    return(
        <div >
      
      <Card size="small"  title={title} style={{ width:400}}>
      <p><Pic src={imageUrl} /></p>
      <p >Subtitle: {subtitle}</p>
      <p>Description: {description}</p>
      <p>rating:<Rating rating={rating}/></p>
      </Card>
    </div>
    )
}
export default  Moviecard