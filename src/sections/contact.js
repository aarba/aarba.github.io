export const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Մեր մասին</h2>
          <p>
            GreenTech ընկերությունը զբաղվում է aarba տրիցիկլների վաճառքով։
            Վերջին տարիներին էլեկտրական փոխադրամիջոցների նկատմամբ
            հետաքրքրությունը և պահանջարկը շեշտակիորեն աճել է։ Ոլորտի զարգացման
            հիմնական գրավականներն են շահավետությունը և էկոլոգիայի գործոնը։ Մեր
            ընկերության կողմից մատակարարվող էլեկտրական բեռնատար տրիցիկլները
            ունեն տարբեր լրակազմ և տեխնիկական բնութագիր՝ կախված մոդելից, սակայն
            բոլորն էլ համալրված են հզոր մարտկոցով, ծանր հուսալի մետաղական
            կոնստրուկցիայով, շրջվող թափքով և իջեցվող կողերով։ Բոլոր տրիցիկլներն
            ունեն բարձր բեռնատարողություն, անվտանգ և հարմարավետ վարելու համար
            անհրաժեշտ ֆունկցիոնալություն և մարտկոցի վերալիցքավորման հեշտ
            համակարգ: Էլեկտրական եռանիվներն աշխատում են գրեթե անձայն:
            Տրիցիկլների գրանցման, ինչպես նաև ապահավոգրության անհրաժեշտություն
            չկա։ Տրիցիկլների բոլոր մոդելների համար ընկերությունը տրամադրում է մեկ 
            տարվա երաշխիք։ Ընկերության սպասարկման կենտրոնը իրականացնում է 
            նաև հետերաշխիքային սպասարկում և մարտկոցների ու այլ անհրաժեշտ 
            սարքավորումների վաճառք։
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Հասցե:</h4>
                <p>ք. Արտաշատ, Բուդաղյան 4/1 </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>aarbaarmenia@gmail.com</p>
              </div>

              <a href="Հեռ. : +374 44 151654">
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Հեռ. :</h4>
                  <p>+374 44 151654</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <div>
              <iframe
                title=" "
                style={{ border: 0, width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d436.13646518483523!2d44.56295787877551!3d39.95001293290504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sam!4v1683972380380!5m2!1sen!2sam"                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
