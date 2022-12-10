import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CenterCards from "../UI/CenterCards";
import attock from "..//UI//CenterCardsImages//attock.jpg";
import bahawalnagar from "..//UI//CenterCardsImages//bahawalnagar.jpg";
import bahawalpur from "..//UI//CenterCardsImages//bahawalpur.jpg";
import bhakkar from "..//UI//CenterCardsImages//bhakkar.jpg";
import chakwal from "..//UI//CenterCardsImages//chakwal.jpg";
import chiniot from "..//UI//CenterCardsImages//chiniot.jpg";
import dgkhan from "..//UI//CenterCardsImages//dgkhan.jpg";
import faisalabad from "..//UI//CenterCardsImages//faisalabad.jpg";
import gujranwala from "..//UI//CenterCardsImages//gujranwala.jpg";
import gujrat from "..//UI//CenterCardsImages//gujrat.jpg";
import hafizabad from "..//UI//CenterCardsImages//hafizabad.jpg";
import jhang from "..//UI//CenterCardsImages//jhang.jpg";
import jhelum from "..//UI//CenterCardsImages//jhelum.jpg";
import kasur from "..//UI//CenterCardsImages//kasur.jpg";
import khanewal from "..//UI//CenterCardsImages//khanewal.jpg";
import khushab from "..//UI//CenterCardsImages//khushab.jpg";
import lahore from "..//UI//CenterCardsImages//lahore.png";
import layyah from "..//UI//CenterCardsImages//layyah.jpg";
import lodhran from "..//UI//CenterCardsImages//lodhran.jpg";
import mandi from "..//UI//CenterCardsImages//mandi.jpg";
import mianwali from "..//UI//CenterCardsImages//mianwali.jpg";
import multan from "..//UI//CenterCardsImages//multan.jpg";
import muzzafargarh from "..//UI//CenterCardsImages//muzzafargarh.jpg";
import nankana from "..//UI//CenterCardsImages//nankana.jpg";
import narowal from "..//UI//CenterCardsImages//narowal.jpg";
import okara from "..//UI//CenterCardsImages//okara.jpeg";
import pakpattan from "..//UI//CenterCardsImages//pakpattan.png";
import rahimyarkhan from "..//UI//CenterCardsImages//rahimyarkhan.jpg";
import rajanpur from "..//UI//CenterCardsImages//rajanpur.jpg";
import rawalpindi from "..//UI//CenterCardsImages//rawalpindi.jpg";
import sahiwal from "..//UI//CenterCardsImages//sahiwal.jpg";
import sargodha from "..//UI//CenterCardsImages//sargodha.jpg";
import sheikhupura from "..//UI//CenterCardsImages//sheikhupura.jpeg";
import sialkot from "..//UI//CenterCardsImages//sialkot.jpg";
import tobateksingh from "..//UI//CenterCardsImages//tobateksingh.jpg";
import vehari from "..//UI//CenterCardsImages//vehari.jpg";





function Centers(props) {
  document.title = "PKM Punjab - Our Centers";
  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs-example"
      defaultActiveKey="#attock"
    >
      <Row>
        <Col sm={4}>
          <ListGroup className="centers-list">
            <ListGroup.Item action href="#attock">
              Attock
            </ListGroup.Item>
            <ListGroup.Item action href="#bahawalnagar">
              Bahawalnagar
            </ListGroup.Item>
            <ListGroup.Item action href="#bahawalpur">
              Bahawalpur
            </ListGroup.Item>
            <ListGroup.Item action href="#bhakkar">
              Bhakkar
            </ListGroup.Item>
            <ListGroup.Item action href="#chakwal">
              Chakwal
            </ListGroup.Item>
            <ListGroup.Item action href="#chiniot">
              Chiniot
            </ListGroup.Item>
            <ListGroup.Item action href="#dg-khan">
              DG Khan
            </ListGroup.Item>
            <ListGroup.Item action href="#faisalabad">
              Faisalabad
            </ListGroup.Item>
            <ListGroup.Item action href="#gujranwala">
              Gujranwala
            </ListGroup.Item>
            <ListGroup.Item action href="#gujrat">
              Gujrat
            </ListGroup.Item>
            <ListGroup.Item action href="#hafizabad">
              Hafizabad
            </ListGroup.Item>
            <ListGroup.Item action href="#jhang">
              Jhang
            </ListGroup.Item>
            <ListGroup.Item action href="#jhelum">
              Jhelum
            </ListGroup.Item>
            <ListGroup.Item action href="#kasur">
              Kasur
            </ListGroup.Item>
            <ListGroup.Item action href="#khanewal">
              Khanewal
            </ListGroup.Item>
            <ListGroup.Item action href="#khushab">
              Khushab
            </ListGroup.Item>
            <ListGroup.Item action href="#lahore">
              Lahore
            </ListGroup.Item>
            <ListGroup.Item action href="#layyah">
              Layyah
            </ListGroup.Item>
            <ListGroup.Item
              {...props.changeProgress(40)}
              action
              href="#lodhran"
            >
              Lodhran
            </ListGroup.Item>
            <ListGroup.Item action href="#mandi-bahauddin">
              Mandi Bahauddin
            </ListGroup.Item>
            <ListGroup.Item action href="#mianwali">
              Mianwali
            </ListGroup.Item>
            <ListGroup.Item action href="#multan">
              Multan
            </ListGroup.Item>
            <ListGroup.Item action href="#muzzafargarh">
              Muzzafargarh
            </ListGroup.Item>
            <ListGroup.Item action href="#nankana-sb">
              Nankana Sb
            </ListGroup.Item>
            <ListGroup.Item action href="#narowal">
              Narowal
            </ListGroup.Item>
            <ListGroup.Item action href="#okara">
              Okara
            </ListGroup.Item>
            <ListGroup.Item action href="#pakpattan">
              Pakpattan
            </ListGroup.Item>
            <ListGroup.Item action href="#rahim-yar-khan">
              Rahim Yar Khan
            </ListGroup.Item>
            <ListGroup.Item action href="#rajanpur">
              Rajanpur
            </ListGroup.Item>
            <ListGroup.Item action href="#rawalpindi">
              Rawalpindi
            </ListGroup.Item>
            <ListGroup.Item action href="#sahiwal">
              Sahiwal
            </ListGroup.Item>
            <ListGroup.Item action href="#sargodha">
              Sargodha
            </ListGroup.Item>
            <ListGroup.Item action href="#sheikhupura">
              Sheikhupura
            </ListGroup.Item>
            <ListGroup.Item action href="#sialkot">
              Sialkot
            </ListGroup.Item>
            <ListGroup.Item action href="#toba-tek-singh">
              Toba Tek Singh
            </ListGroup.Item>
            <ListGroup.Item {...props.changeProgress(60)} action href="#vehari">
              Vehari
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#attock">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bahawalnagar">
              <CenterCards
                name={"Bahawalnagar"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3iaGeUl"}
                phone={"tel:+92-63-2277782"}
                image={bahawalnagar}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bahawalpur">
              <CenterCards
                name={"Bahawalpur"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3icquQt"}
                phone={"tel:+92-62-2200170"}
                image={bahawalpur}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bhakkar">
              <CenterCards
                name={"Bhakkar"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tYRAxu"}
                phone={"tel:+92-45-3516222"}
                image={bhakkar}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#chakwal">
              <CenterCards
                name={"Chakwal"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GGai4o"}
                phone={"tel:+92-57-9316440"}
                image={chakwal}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#chiniot">
              <CenterCards
                name={"Chiniot"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GKFxLM"}
                phone={"tel:+92-476-9210027"}
                image={chiniot}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#dg-khan">
              <CenterCards
                name={"DG Khan"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GKwbzx"}
                phone={"tel:+92-64-2601700"}
                image={dgkhan}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#faisalabad">
              <CenterCards
                name={"Faisalabad"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3VaY5sP"}
                phone={"tel:+92-41-4311500"}
                image={faisalabad}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#gujranwala">
              <CenterCards
                name={"Gujranwala"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3icr68J"}
                phone={"tel:+92-55-3254440"}
                image={gujranwala}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#gujrat">
              <CenterCards
                name={"Gujrat"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GSwsQO"}
                phone={"tel:+92-53-3600692"}
                image={gujrat}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#hafizabad">
              <CenterCards
                name={"Hafizabad"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gAg5h6"}
                phone={"tel:+92-57-7525420"}
                image={hafizabad}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(80)} eventKey="#jhang">
              <CenterCards
                name={"Jhang"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3idrC6J"}
                phone={"tel:+92-47-9200315"}
                image={jhang}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#jhelum">
              <CenterCards
                name={"Jhelum"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EyBrU5"}
                phone={"tel:+92-54-4278703"}
                image={jhelum}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#kasur">
              <CenterCards
                name={"Kasur"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3UdTXXW"}
                phone={"tel:+92-49-2724992"}
                image={kasur}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#khanewal">
              <CenterCards
                name={"Khanewal"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gxiJEm"}
                phone={"tel:+92-65-2661186"}
                image={khanewal}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#khushab">
              <CenterCards
                name={"Khushab"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3VmGHRA"}
                phone={"tel:+92-45-4920030"}
                image={khushab}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#lahore">
              <CenterCards
                name={"Lahore"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3F0jnDT"}
                phone={"tel:+92-42-99214572"}
                image={lahore}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#layyah">
              <CenterCards
                name={"Layyah"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3Xpoo01"}
                phone={"tel:+92-60-6920174"}
                image={layyah}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#lodhran">
              <CenterCards
                name={"Lodhran"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3ifmBdW"}
                phone={"tel:+92-60-8362015"}
                image={lodhran}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#mandi-bahauddin">
              <CenterCards
                name={"Mandi Bahauddin"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EECuSu"}
                phone={"tel:+92-54-6581205"}
                image={mandi}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#mianwali">
              <CenterCards
                name={"Mianwali"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3OB6V0y"}
                phone={"tel:+92-45-9231133"}
                image={mianwali}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#multan">
              <CenterCards
                name={"Multan"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GJXdXS"}
                phone={"tel:+92-61-4501907"}
                image={multan}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#muzzafargarh">
              <CenterCards
                name={"Muzzafargarh"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GJNWz5"}
                phone={"tel:+92-66-2423900"}
                image={muzzafargarh}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#nankana-sb">
              <CenterCards
                name={"Nankana Sb"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3Vr6tnS"}
                phone={"tel:+92-56-2877423"}
                image={nankana}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#narowal">
              <CenterCards
                name={"Narowal"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EthFJK"}
                phone={"tel:+92-54-2500728"}
                image={narowal}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#okara">
              <CenterCards
                name={"Okara"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3V6CKRm"}
                phone={"tel:+92-57-9316440"}
                image={okara}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#pakpattan">
              <CenterCards
                name={"Pakpattan"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3U3AcSM"}
                phone={"tel:+92-45-7383152"}
                image={pakpattan}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rahim-yar-khan">
              <CenterCards
                name={"Rahim Yar Khan"}
                time={"Monday - Saturday - 9am to 5pm"}
                llocation={"https://bit.ly/3GEyLXQ"}
                phone={"tel:+92-68-9230348"}
                image={rahimyarkhan}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rajanpur">
              <CenterCards
                name={"Rajanpur"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3OxlmTj"}
                phone={"tel:+92-60-4567126"}
                image={rajanpur}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rawalpindi">
              <CenterCards
                name={"Rawalpindi"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EEdIll"}
                phone={"tel:+92-51-9314015"}
                image={rawalpindi}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sahiwal">
              <CenterCards
                name={"Sahiwal"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tUhJNT"}
                phone={"tel:+92-40-5480035"}
                image={sahiwal}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sargodha">
              <CenterCards
                name={"Sargodha"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3AHJtch"}
                phone={"tel:+92-48-6310213"}
                image={sargodha}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sheikhupura">
              <CenterCards
                name={"Sheikhupura"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tW95OX"}
                phone={"tel:+92-56-3611076"}
                image={sheikhupura}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sialkot">
              <CenterCards
                name={"Sialkot"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tZmDcm"}
                phone={"tel:+92-52-6520499"}
                image={sialkot}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#toba-tek-singh">
              <CenterCards
                name={"Toba Tek Singh"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gA0BKc"}
                phone={"tel:+92-46-2515909"}
                image={tobateksingh}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(100)} eventKey="#vehari">
              <CenterCards
                name={"Vehari"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gB8L50"}
                phone={"tel:+92-67-3202028"}
                image={vehari}
                center={"#vehari"}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Centers;
