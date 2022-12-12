import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import { Link } from "react-router-dom";
import testsound from "../pages/audios/homeaudios/homecc.mp3";

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
import ReactAudioPlayer from "react-audio-player";

function Centers(props) {
  document.title = "PKM Punjab - Our Centers";

  return (
    <>
      <div
        className="text-start d-flex p-2 justify-content-start"
        style={{ top: 80, left: 0, position: "absolute" }}
      >
        <Link
          to="/"
          className="btn btn-warning text-center justify-content-center d-inline-flex p-2"
          style={{
            fontFamily: "Noto Nastaliq Urdu, serif",
            fontSize: "32px",
            marginLeft: "20px",
            paddingBottom: "20px",
          }}
        >
          &larr; واپس جائیے
        </Link>
      </div>
      <div
        className="text-end d-flex p-2 justify-content-end"
        style={{ top: 80, right: 0, position: "absolute" }}
      >
        <Link
          to="/services"
          className="btn btn-danger"
          style={{
            fontFamily: "Noto Nastaliq Urdu, serif",
            fontSize: "32px",
            marginLeft: "20px",
            paddingBottom: "20px",
          }}
        >
          خدمات &rarr;
        </Link>
      </div>
      <Tab.Container
        {...props.changeProgress(20)}
        id="list-group-tabs-example"
        defaultActiveKey="#attock"
      >
        <ReactAudioPlayer
          style={{
            padding: "5px",
            marginBottom: "4px",
            marginRight: "5px",
            borderRadius: "250px",
            height: "60px",
            width: "110px",
            backgroundColor: "black",
          }}
          className="mt-4"
          // src={}
          autoPlay
          loop="true"
          controls
        />
        <Row>
          <Col sm={12}>
            <Tab.Pane eventKey="#attock">
              <CenterCards
                sound={testsound}
                name={"اٹک"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
              <CenterCards
                name={"بہاولنگر"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3iaGeUl"}
                phone={"tel:+92-63-2277782"}
                image={bahawalnagar}
                center={"#attock"}
              />
              <CenterCards
                name={"بہاولپور"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3icquQt"}
                phone={"tel:+92-62-2200170"}
                image={bahawalpur}
                center={"#attock"}
              />
              <CenterCards
                name={"بھکر"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tYRAxu"}
                phone={"tel:+92-45-3516222"}
                image={bhakkar}
                center={"#attock"}
              />
              <CenterCards
                name={"چکوال"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GGai4o"}
                phone={"tel:+92-57-9316440"}
                image={chakwal}
                center={"#attock"}
              />
              <CenterCards
                name={"چنیوٹ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GKFxLM"}
                phone={"tel:+92-476-9210027"}
                image={chiniot}
                center={"#attock"}
              />
              <CenterCards
                name={"ڈی جی خان"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GKwbzx"}
                phone={"tel:+92-64-2601700"}
                image={dgkhan}
                center={"#attock"}
              />
              <CenterCards
                name={"فیصل آباد"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3VaY5sP"}
                phone={"tel:+92-41-4311500"}
                image={faisalabad}
                center={"#attock"}
              />
              <CenterCards
                name={"گوجرانوالہ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3icr68J"}
                phone={"tel:+92-55-3254440"}
                image={gujranwala}
                center={"#attock"}
              />
              <CenterCards
                name={"گجرات"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GSwsQO"}
                phone={"tel:+92-53-3600692"}
                image={gujrat}
                center={"#attock"}
              />
              <CenterCards
                name={"حافظ آباد"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gAg5h6"}
                phone={"tel:+92-57-7525420"}
                image={hafizabad}
                center={"#attock"}
              />
              <CenterCards
                name={"جھنگ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3idrC6J"}
                phone={"tel:+92-47-9200315"}
                image={jhang}
                center={"#attock"}
              />
              <CenterCards
                name={"جہلم"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EyBrU5"}
                phone={"tel:+92-54-4278703"}
                image={jhelum}
                center={"#attock"}
              />
              <CenterCards
                name={"قصور"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3UdTXXW"}
                phone={"tel:+92-49-2724992"}
                image={kasur}
                center={"#attock"}
              />
              <CenterCards
                name={"خانیوال"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gxiJEm"}
                phone={"tel:+92-65-2661186"}
                image={khanewal}
                center={"#attock"}
              />
              <CenterCards
                name={"خوشاب"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3VmGHRA"}
                phone={"tel:+92-45-4920030"}
                image={khushab}
                center={"#attock"}
              />
              <CenterCards
                name={"لاہور"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3F0jnDT"}
                phone={"tel:+92-42-99214572"}
                image={lahore}
                center={"#attock"}
              />
              <CenterCards
                name={"لیہ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3Xpoo01"}
                phone={"tel:+92-60-6920174"}
                image={layyah}
                center={"#attock"}
              />
              <CenterCards
                name={"لودھراں"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3ifmBdW"}
                phone={"tel:+92-60-8362015"}
                image={lodhran}
                center={"#attock"}
              />
              <CenterCards
                name={"منڈی بہاؤالدین"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EECuSu"}
                phone={"tel:+92-54-6581205"}
                image={mandi}
                center={"#attock"}
              />
              <CenterCards
                name={"میانوالی"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3OB6V0y"}
                phone={"tel:+92-45-9231133"}
                image={mianwali}
                center={"#attock"}
              />
              <CenterCards
                name={"ملتان"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GJXdXS"}
                phone={"tel:+92-61-4501907"}
                image={multan}
                center={"#attock"}
              />
              <CenterCards
                name={"مظفر گڑھ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3GJNWz5"}
                phone={"tel:+92-66-2423900"}
                image={muzzafargarh}
                center={"#attock"}
              />
              <CenterCards
                name={"ننکانہ صاب"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3Vr6tnS"}
                phone={"tel:+92-56-2877423"}
                image={nankana}
                center={"#attock"}
              />
              <CenterCards
                name={"نارووال"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EthFJK"}
                phone={"tel:+92-54-2500728"}
                image={narowal}
                center={"#attock"}
              />
              <CenterCards
                name={"اوکاڑہ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3V6CKRm"}
                phone={"tel:+92-57-9316440"}
                image={okara}
                center={"#attock"}
              />
              <CenterCards
                name={"پاکپتن"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3U3AcSM"}
                phone={"tel:+92-45-7383152"}
                image={pakpattan}
                center={"#attock"}
              />
              <CenterCards
                name={"رحیم یار خان"}
                time={"Monday - Saturday - 9am to 5pm"}
                llocation={"https://bit.ly/3GEyLXQ"}
                phone={"tel:+92-68-9230348"}
                image={rahimyarkhan}
                center={"#attock"}
              />
              <CenterCards
                name={"راجن پور"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3OxlmTj"}
                phone={"tel:+92-60-4567126"}
                image={rajanpur}
                center={"#attock"}
              />
              <CenterCards
                name={"راولپنڈی"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3EEdIll"}
                phone={"tel:+92-51-9314015"}
                image={rawalpindi}
                center={"#attock"}
              />
              <CenterCards
                name={"ساہیوال"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tUhJNT"}
                phone={"tel:+92-40-5480035"}
                image={sahiwal}
                center={"#attock"}
              />
              <CenterCards
                name={"سرگودھا"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3AHJtch"}
                phone={"tel:+92-48-6310213"}
                image={sargodha}
                center={"#attock"}
              />
              <CenterCards
                name={"شیخوپورہ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tW95OX"}
                phone={"tel:+92-56-3611076"}
                image={sheikhupura}
                center={"#attock"}
              />
              <CenterCards
                name={"سیالکوٹ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3tZmDcm"}
                phone={"tel:+92-52-6520499"}
                image={sialkot}
                center={"#attock"}
              />
              <CenterCards
                name={"ٹوبہ ٹیک سنگھ"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gA0BKc"}
                phone={"tel:+92-46-2515909"}
                image={tobateksingh}
                center={"#attock"}
              />
              <CenterCards
                {...props.changeProgress(100)}
                name={"وہاڑی"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3gB8L50"}
                phone={"tel:+92-67-3202028"}
                image={vehari}
                center={"#vehari"}
              />
            </Tab.Pane>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default Centers;
