import "./Features.scss";
import FirstCard from "../../assets/home-features/first-card.png";
import Support from "../../assets/home-features/support.png";
import Progress from "../../assets/home-features/support.png"
import { Container } from "../../utils/Utils";

const Features = () => {
  return (
   <Container>
     <div className="home-features">
      <h2 className="home-features__title">Nega bizni tanlashadi</h2>
      <div className="home-features__cards">
        
        {/* 1-card */}
        
        <div className="home-features__card">
          <img width={303} src={FirstCard} alt="home feature" />
          <h3 className="feature__card-title">Yetkazib berish</h3>
          <p className="feature__card-text">Toshkent bo'ylab bepul o'lchov <br/> va etkazib berish</p>
        </div>

        {/* 2-card */}

        <div className="home-features__card">
          <img width={303} src={Support} alt="home feature" />
          <h3 className="feature__card-title">Yetkazib berish</h3>
          <p className="feature__card-text">Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi  va menejerlarning </p>
        </div>
        
        {/* 3-card */}

        <div className="home-features__card">
          <img width={303} src={Progress} alt="home feature" />
          <h3 className="feature__card-title">Yetkazib berish</h3>
          <p className="feature__card-text">Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.</p>
        </div>
      </div>
    </div>
   </Container>
  )
}

export default Features