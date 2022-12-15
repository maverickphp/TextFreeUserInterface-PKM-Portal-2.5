import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import { Link } from "react-router-dom";

import attocksound from "../pages/audios/centersaudios/attock.mp3";
import bahawalnagarsound from "../pages/audios/centersaudios/bahawalnagar.mp3";
import bahawalpursound from "../pages/audios/centersaudios/bahawalpur.mp3";
import bhakkarsound from "../pages/audios/centersaudios/bhakkar.mp3";
import chakwalsound from "../pages/audios/centersaudios/chakwal.mp3";
import chiniotsound from "../pages/audios/centersaudios/chiniot.mp3";
import dgkhansound from "../pages/audios/centersaudios/dgkhan.mp3";
import faisalabadsound from "../pages/audios/centersaudios/faisalabad.mp3";
import gujranwalasound from "../pages/audios/centersaudios/gujranwala.mp3";
import gujratsound from "../pages/audios/centersaudios/gujrat.mp3";
import hafizabadsound from "../pages/audios/centersaudios/hafizabad.mp3";
import jhangsound from "../pages/audios/centersaudios/jhang.mp3";
import jhelumsound from "../pages/audios/centersaudios/jhelum.mp3";
import kasursound from "../pages/audios/centersaudios/kasur.mp3";
import khanewalsound from "../pages/audios/centersaudios/khanewal.mp3";
import khushabsound from "../pages/audios/centersaudios/khushab.mp3";
import lahoresound from "../pages/audios/centersaudios/lahore.mp3";
import layyahsound from "../pages/audios/centersaudios/layyah.mp3";
import lodhransound from "../pages/audios/centersaudios/lodhran.mp3";
import mandisound from "../pages/audios/centersaudios/mandi.mp3";
import mianwalisound from "../pages/audios/centersaudios/mianwali.mp3";
import multansound from "../pages/audios/centersaudios/multan.mp3";
import muzzafargarhsound from "../pages/audios/centersaudios/muzzafargarh.mp3";
import nankanasound from "../pages/audios/centersaudios/nankana.mp3";
import narowalsound from "../pages/audios/centersaudios/narowal.mp3";
import okarasound from "../pages/audios/centersaudios/okara.mp3";
import pakpattansound from "../pages/audios/centersaudios/pakpattan.mp3";
import rahimyarkhansound from "../pages/audios/centersaudios/rahimyarkhan.mp3";
import rajanpursound from "../pages/audios/centersaudios/rajanpur.mp3";
import rawalpindisound from "../pages/audios/centersaudios/rawalpindi.mp3";
import sahiwalsound from "../pages/audios/centersaudios/sahiwal.mp3";
import sargodhasound from "../pages/audios/centersaudios/sargodha.mp3";
import sheikhupurasound from "../pages/audios/centersaudios/sheikhupura.mp3";
import sialkotsound from "../pages/audios/centersaudios/sialkot.mp3";
import tobateksinghsound from "../pages/audios/centersaudios/tobateksingh.mp3";
import veharisound from "../pages/audios/centersaudios/vehari.mp3";

import centersmainaudio from "../pages/audios/centersaudios/centersmainaudio.mp3";

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

import { useEffect } from "react";

const Centers = (props) => {
  document.title = "PKM Punjab - Our Centers";

  useEffect(() => {
    const audios = document.querySelectorAll("audio");
    function pauseOtherAudios({ target }) {
      for (const audio of audios) {
        if (audio !== target) {
          audio.pause();
        }
      }
    }
    for (const audio of audios) {
      audio.addEventListener("play", pauseOtherAudios);
    }
  }, []);
  return (
    <>
      <div
        className="text-start d-flex p-2 justify-content-start"
        style={{ top: 80, left: 0, position: "absolute" }}
      >
        <Link
          to="/"
          className="btn btn-warning"
          style={{
            fontFamily: "Noto Nastaliq Urdu, serif",
            fontSize: "32px",
            marginLeft: "auto",
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
            marginLeft: "auto",
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
        <div style={{ marginTop: "80px" }}>
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
            src={centersmainaudio}
            autoPlay
            loop="true"
            controls
          />
        </div>
        <Row>
          <Col sm={12}>
            <Tab.Pane eventKey="#attock">
              <CenterCards
                sound={attocksound}
                name={"اٹک"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
              <CenterCards
                sound={bahawalnagarsound}
                name={"بہاولنگر"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3iaGeUl"}
                phone={"tel:+92-63-2277782"}
                image={bahawalnagar}
                center={"#bahawalnagar"}
              />
              <CenterCards
                sound={bahawalpursound}
                name={"بہاولپور"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3icquQt"}
                phone={"tel:+92-62-2200170"}
                image={bahawalpur}
                center={"#bahawalpur"}
              />
              <CenterCards
                sound={bhakkarsound}
                name={"بھکر"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3tYRAxu"}
                phone={"tel:+92-45-3516222"}
                image={bhakkar}
                center={"#bhakkar"}
              />
              <CenterCards
                sound={chakwalsound}
                name={"چکوال"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3GGai4o"}
                phone={"tel:+92-57-9316440"}
                image={chakwal}
                center={"#chakwal"}
              />
              <CenterCards
                sound={chiniotsound}
                name={"چنیوٹ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3G*KFxLM"}
                phone={"tel:+92-476-9210027"}
                image={chiniot}
                center={"#chiniot"}
              />
              <CenterCards
                sound={dgkhansound}
                name={"ڈی جی خان"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3GKwbzx"}
                phone={"tel:+92-64-2601700"}
                image={dgkhan}
                center={"#dgkhan"}
              />
              <CenterCards
                sound={faisalabadsound}
                name={"فیصل آباد"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3VaY5sP"}
                phone={"tel:+92-41-4311500"}
                image={faisalabad}
                center={"#faisalabad"}
              />
              <CenterCards
                sound={gujranwalasound}
                name={"گوجرانوالہ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3icr68J"}
                phone={"tel:+92-55-3254440"}
                image={gujranwala}
                center={"#gujranwala"}
              />
              <CenterCards
                sound={gujratsound}
                name={"گجرات"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3GSwsQO"}
                phone={"tel:+92-53-3600692"}
                image={gujrat}
                center={"#gujrat"}
              />
              <CenterCards
                sound={hafizabadsound}
                name={"حافظ آباد"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3gAg5h6"}
                phone={"tel:+92-57-7525420"}
                image={hafizabad}
                center={"#hafizabad"}
              />
              <CenterCards
                sound={jhangsound}
                name={"جھنگ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3idrC6J"}
                phone={"tel:+92-47-9200315"}
                image={jhang}
                center={"#jhang"}
              />
              <CenterCards
                sound={jhelumsound}
                name={"جہلم"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3EyBrU5"}
                phone={"tel:+92-54-4278703"}
                image={jhelum}
                center={"#jhelum"}
              />
              <CenterCards
                sound={kasursound}
                name={"قصور"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3UdTXXW"}
                phone={"tel:+92-49-2724992"}
                image={kasur}
                center={"#kasur"}
              />
              <CenterCards
                sound={khanewalsound}
                name={"خانیوال"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3gxiJEm"}
                phone={"tel:+92-65-2661186"}
                image={khanewal}
                center={"#khanewal"}
              />
              <CenterCards
                sound={khushabsound}
                name={"خوشاب"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3VmGHRA"}
                phone={"tel:+92-45-4920030"}
                image={khushab}
                center={"#khushab"}
              />
              <CenterCards
                sound={lahoresound}
                name={"لاہور"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3F0jnDT"}
                phone={"tel:+92-42-99214572"}
                image={lahore}
                center={"#lahore"}
              />
              <CenterCards
                sound={layyahsound}
                name={"لیہ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3Xpoo01"}
                phone={"tel:+92-60-6920174"}
                image={layyah}
                center={"#layyah"}
              />
              <CenterCards
                sound={lodhransound}
                name={"لودھراں"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3ifmBdW"}
                phone={"tel:+92-60-8362015"}
                image={lodhran}
                center={"#lodhran"}
              />
              <CenterCards
                sound={mandisound}
                name={"منڈی بہاؤالدین"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3EECuSu"}
                phone={"tel:+92-54-6581205"}
                image={mandi}
                center={"#mandi"}
              />
              <CenterCards
                sound={mianwalisound}
                name={"میانوالی"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3OB6V0y"}
                phone={"tel:+92-45-9231133"}
                image={mianwali}
                center={"#mianwali"}
              />
              <CenterCards
                sound={multansound}
                name={"ملتان"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3GJXdXS"}
                phone={"tel:+92-61-4501907"}
                image={multan}
                center={"#multan"}
              />
              <CenterCards
                sound={muzzafargarhsound}
                name={"مظفر گڑھ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3GJNWz5"}
                phone={"tel:+92-66-2423900"}
                image={muzzafargarh}
                center={"#muzzafargarh"}
              />
              <CenterCards
                sound={nankanasound}
                name={"ننکانہ صاب"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3Vr6tnS"}
                phone={"tel:+92-56-2877423"}
                image={nankana}
                center={"#nankana"}
              />
              <CenterCards
                sound={narowalsound}
                name={"نارووال"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3EthFJK"}
                phone={"tel:+92-54-2500728"}
                image={narowal}
                center={"#narowal"}
              />
              <CenterCards
                sound={okarasound}
                name={"اوکاڑہ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3V6CKRm"}
                phone={"tel:+92-57-9316440"}
                image={okara}
                center={"#okara"}
              />
              <CenterCards
                sound={pakpattansound}
                name={"پاکپتن"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3U3AcSM"}
                phone={"tel:+92-45-7383152"}
                image={pakpattan}
                center={"#pakpattan"}
              />
              <CenterCards
                sound={rahimyarkhansound}
                name={"رحیم یار خان"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                llocation={"https://bit.ly/3GEyLXQ"}
                phone={"tel:+92-68-9230348"}
                image={rahimyarkhan}
                center={"#rahimyarkhan"}
              />
              <CenterCards
                sound={rajanpursound}
                name={"راجن پور"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3OxlmTj"}
                phone={"tel:+92-60-4567126"}
                image={rajanpur}
                center={"#rajanpur"}
              />
              <CenterCards
                sound={rawalpindisound}
                name={"راولپنڈی"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3EEdIll"}
                phone={"tel:+92-51-9314015"}
                image={rawalpindi}
                center={"#rawalpindi"}
              />
              <CenterCards
                sound={sahiwalsound}
                name={"ساہیوال"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3tUhJNT"}
                phone={"tel:+92-40-5480035"}
                image={sahiwal}
                center={"#sahiwal"}
              />
              <CenterCards
                sound={sargodhasound}
                name={"سرگودھا"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3AHJtch"}
                phone={"tel:+92-48-6310213"}
                image={sargodha}
                center={"#sargodha"}
              />
              <CenterCards
                sound={sheikhupurasound}
                name={"شیخوپورہ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3tW95OX"}
                phone={"tel:+92-56-3611076"}
                image={sheikhupura}
                center={"#sheikhupura"}
              />
              <CenterCards
                sound={sialkotsound}
                name={"سیالکوٹ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3tZmDcm"}
                phone={"tel:+92-52-6520499"}
                image={sialkot}
                center={"#sialkot"}
              />
              <CenterCards
                sound={tobateksinghsound}
                name={"ٹوبہ ٹیک سنگھ"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
                location={"https://bit.ly/3gA0BKc"}
                phone={"tel:+92-46-2515909"}
                image={tobateksingh}
                center={"#tobateksingh"}
              />
              <CenterCards
                sound={veharisound}
                {...props.changeProgress(100)}
                name={"وہاڑی"}
                time={"پیر - ہفتہ (صبح 9 سے 5 بجے تک)"}
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
};

export default Centers;
